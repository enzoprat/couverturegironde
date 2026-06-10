#!/usr/bin/env node
/**
 * SEO Crawler — Phase 1 de l'audit technique.
 *
 * Crawle l'ensemble des URLs déclarées dans le sitemap, plus une découverte
 * par liens internes (BFS, profondeur max 3). Sur chaque page :
 *  - HTTP status final (suit les redirections, log la chaîne)
 *  - canonical, hreflang, robots meta, noindex
 *  - <title>, <meta description>, longueur + caractères
 *  - Comptage Hn (1..6), texte du premier H1
 *  - Images sans alt (count + 5 premiers exemples)
 *  - Liens internes vs externes (count)
 *  - JSON-LD : types détectés (@type) + count
 *  - Mixed content (resources http:// sur page https://)
 *  - Détection des chaînes de redirection (>1)
 *
 * Output :
 *  - seo-audit/raw/crawl-{date}.json  (données brutes)
 *  - seo-audit/reports/crawl-{date}.md (rapport lisible avec tableau pb × page)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const OUT_RAW = path.join(projectRoot, 'seo-audit', 'raw');
const OUT_REPORTS = path.join(projectRoot, 'seo-audit', 'reports');

const args = process.argv.slice(2);
function arg(name, def) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 ? args[idx + 1] : def;
}
const BASE_URL = arg('base', 'https://www.couverturegironde.fr');
const MAX_DEPTH = Number(arg('depth', '3'));
const CONCURRENCY = Number(arg('concurrency', '5'));
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;
const USER_AGENT = 'CouvertureGirondeSEOAuditBot/1.0 (Claude Code)';

fs.mkdirSync(OUT_RAW, { recursive: true });
fs.mkdirSync(OUT_REPORTS, { recursive: true });

const today = new Date().toISOString().slice(0, 10);

// ============================================================
// Utils
// ============================================================
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithRedirects(url, maxRedirects = 5) {
  const chain = [];
  let current = url;
  let finalStatus = 0;
  let finalBody = '';
  let finalHeaders = null;

  for (let i = 0; i <= maxRedirects; i++) {
    let res;
    try {
      res = await fetch(current, {
        redirect: 'manual',
        headers: { 'User-Agent': USER_AGENT },
      });
    } catch (err) {
      chain.push({ url: current, status: 0, error: err.message });
      return { chain, finalStatus: 0, finalBody: '', finalHeaders: null, finalUrl: current };
    }

    chain.push({ url: current, status: res.status });

    if ([301, 302, 307, 308].includes(res.status)) {
      const location = res.headers.get('location');
      if (!location) break;
      current = new URL(location, current).toString();
      continue;
    }

    finalStatus = res.status;
    finalHeaders = Object.fromEntries(res.headers.entries());
    finalBody = await res.text();
    break;
  }

  return { chain, finalStatus, finalBody, finalHeaders, finalUrl: current };
}

function parseSitemap(xml, rewriteBase = null) {
  const urls = [];
  // Supports sitemap simple et sitemapindex
  const isIndex = xml.includes('<sitemapindex');
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = locRegex.exec(xml)) !== null) {
    let url = m[1].trim();
    // Si on crawle un environnement local/preview, le sitemap renvoie quand
    // même les URLs prod. Réécriture vers la base réelle.
    if (rewriteBase) {
      try {
        const u = new URL(url);
        const target = new URL(rewriteBase);
        url = `${target.origin}${u.pathname}${u.search}`;
      } catch {}
    }
    urls.push(url);
  }
  return { isIndex, urls };
}

function extractHead(html) {
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
  return head;
}

function extractTitle(html) {
  const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  return t ? decodeEntities(t.trim()) : null;
}

function extractMeta(html, name) {
  const re = new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]*content=["']([^"']*)["']`, 'i');
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*(?:name|property)=["']${name}["']`, 'i');
  return decodeEntities(html.match(re)?.[1] ?? html.match(re2)?.[1] ?? '');
}

function extractCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  return m?.[1] ?? null;
}

function extractHreflang(html) {
  const items = [];
  const re = /<link[^>]+rel=["']alternate["'][^>]*hreflang=["']([^"']*)["'][^>]*href=["']([^"']*)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    items.push({ lang: m[1], href: m[2] });
  }
  return items;
}

function countHeadings(html) {
  const counts = {};
  const firstH1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const firstH1Text = firstH1 ? stripTags(firstH1).trim().slice(0, 200) : null;
  for (let i = 1; i <= 6; i++) {
    const matches = html.match(new RegExp(`<h${i}\\b[^>]*>`, 'gi'));
    counts[`h${i}`] = matches?.length ?? 0;
  }
  return { counts, firstH1Text };
}

function findImagesWithoutAlt(html) {
  const imgs = html.match(/<img\b[^>]*>/gi) ?? [];
  const missing = [];
  for (const img of imgs) {
    // alt absent ou alt=""
    if (!/\salt\s*=/.test(img) || /\salt\s*=\s*["']\s*["']/.test(img)) {
      const src = img.match(/\ssrc\s*=\s*["']([^"']+)["']/)?.[1] ?? '(no src)';
      missing.push(src);
    }
  }
  return { total: imgs.length, missingCount: missing.length, missingExamples: missing.slice(0, 5) };
}

function countLinks(html, baseUrl) {
  const baseHost = new URL(baseUrl).host;
  const re = /<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let internal = 0, external = 0, mailto = 0, tel = 0, anchor = 0;
  let m;
  const internalHrefs = new Set();
  while ((m = re.exec(html)) !== null) {
    const href = m[1];
    if (href.startsWith('mailto:')) mailto++;
    else if (href.startsWith('tel:')) tel++;
    else if (href.startsWith('#')) anchor++;
    else {
      try {
        const u = new URL(href, baseUrl);
        if (u.host === baseHost) {
          internal++;
          // Normalize: keep path only, strip query/hash
          internalHrefs.add(u.origin + u.pathname);
        } else {
          external++;
        }
      } catch {
        // Skip malformed
      }
    }
  }
  return { internal, external, mailto, tel, anchor, internalHrefs: [...internalHrefs] };
}

function extractJsonLd(html) {
  const blocks = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) ?? [];
  const types = [];
  let parsed = 0, errored = 0;
  for (const b of blocks) {
    const json = b.match(/<script[^>]*>([\s\S]*?)<\/script>/i)?.[1] ?? '';
    try {
      const data = JSON.parse(json);
      parsed++;
      const collect = (d) => {
        if (Array.isArray(d)) return d.flatMap(collect);
        if (d && typeof d === 'object' && d['@type']) {
          const t = Array.isArray(d['@type']) ? d['@type'] : [d['@type']];
          return t;
        }
        return [];
      };
      types.push(...collect(data));
    } catch {
      errored++;
    }
  }
  return { count: blocks.length, parsed, errored, types: [...new Set(types)] };
}

function detectMixedContent(html, pageUrl) {
  if (!pageUrl.startsWith('https://')) return { found: false, count: 0, examples: [] };
  const re = /\s(src|href)\s*=\s*["'](http:\/\/[^"']+)["']/gi;
  const examples = [];
  let m;
  while ((m = re.exec(html)) !== null && examples.length < 5) {
    examples.push(m[2]);
  }
  return { found: examples.length > 0, count: examples.length, examples };
}

function stripTags(s) {
  return s.replace(/<[^>]*>/g, '');
}

function decodeEntities(s) {
  if (!s) return s;
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function checkTitle(title) {
  if (!title) return { ok: false, issue: 'TITLE_MISSING' };
  const len = title.length;
  if (len < 30) return { ok: false, issue: 'TITLE_TOO_SHORT', len };
  if (len > 70) return { ok: false, issue: 'TITLE_TOO_LONG', len };
  return { ok: true, len };
}

function checkDescription(desc) {
  if (!desc) return { ok: false, issue: 'DESC_MISSING' };
  const len = desc.length;
  if (len < 80) return { ok: false, issue: 'DESC_TOO_SHORT', len };
  if (len > 180) return { ok: false, issue: 'DESC_TOO_LONG', len };
  return { ok: true, len };
}

// ============================================================
// Crawl orchestration
// ============================================================
async function analyzePage(url, depth) {
  const result = {
    url,
    depth,
    timestamp: new Date().toISOString(),
    issues: [],
  };

  const { chain, finalStatus, finalBody, finalUrl } = await fetchWithRedirects(url);
  result.status = finalStatus;
  result.redirectChain = chain;
  result.finalUrl = finalUrl;

  if (chain.length > 2) {
    result.issues.push({ severity: 'medium', code: 'REDIRECT_CHAIN', detail: `${chain.length} hops` });
  }

  if (finalStatus !== 200) {
    result.issues.push({ severity: 'high', code: 'HTTP_NOT_200', detail: `${finalStatus}` });
    return result;
  }

  // Note : Next.js (App Router en dev streamé) injecte parfois les <meta>
  // hors du <head>. Google les lit dans les deux cas. On scanne tout le body.
  const headOrBody = finalBody;

  // Title + Desc
  const title = extractTitle(finalBody);
  result.title = title;
  const tCheck = checkTitle(title);
  result.titleLen = tCheck.len;
  if (!tCheck.ok) result.issues.push({ severity: 'high', code: tCheck.issue, detail: title?.slice(0, 100) });

  const desc = extractMeta(headOrBody, 'description');
  result.description = desc;
  const dCheck = checkDescription(desc);
  result.descLen = dCheck.len;
  if (!dCheck.ok) result.issues.push({ severity: 'medium', code: dCheck.issue, detail: desc?.slice(0, 100) });

  // Robots / noindex
  const robots = extractMeta(headOrBody, 'robots');
  result.robots = robots;
  if (robots && /noindex/i.test(robots)) {
    result.issues.push({ severity: 'info', code: 'NOINDEX', detail: robots });
  }

  // Canonical
  const canonical = extractCanonical(headOrBody);
  result.canonical = canonical;
  if (!canonical) {
    result.issues.push({ severity: 'medium', code: 'CANONICAL_MISSING' });
  } else {
    // Quand on crawle un env différent de prod (ex: localhost), le canonical
    // pointe vers prod par design : ce n'est pas une issue.
    const sameOriginAsBase = new URL(canonical).origin === new URL(BASE_URL).origin;
    if (!sameOriginAsBase) {
      // OK : canonical pointe vers prod, on crawle ailleurs
    } else {
      // Même origine : pathname doit matcher
      const canonPath = new URL(canonical).pathname;
      const reqPath = new URL(url).pathname;
      if (canonPath !== reqPath) {
        result.issues.push({ severity: 'low', code: 'CANONICAL_DIFFERS', detail: canonical });
      }
    }
  }

  // Hreflang
  result.hreflang = extractHreflang(headOrBody);

  // Headings
  const h = countHeadings(finalBody);
  result.headings = h.counts;
  result.firstH1Text = h.firstH1Text;
  if (h.counts.h1 === 0) result.issues.push({ severity: 'high', code: 'H1_MISSING' });
  if (h.counts.h1 > 1) result.issues.push({ severity: 'medium', code: 'H1_MULTIPLE', detail: `${h.counts.h1}` });

  // Images
  const imgs = findImagesWithoutAlt(finalBody);
  result.images = imgs;
  if (imgs.missingCount > 0) {
    result.issues.push({
      severity: imgs.missingCount > 3 ? 'medium' : 'low',
      code: 'IMG_MISSING_ALT',
      detail: `${imgs.missingCount}/${imgs.total}`,
    });
  }

  // Links
  result.links = countLinks(finalBody, BASE_URL);

  // JSON-LD
  result.jsonLd = extractJsonLd(finalBody);
  if (result.jsonLd.errored > 0) {
    result.issues.push({ severity: 'high', code: 'JSONLD_INVALID', detail: `${result.jsonLd.errored} blocs invalides` });
  }

  // Mixed content
  result.mixedContent = detectMixedContent(finalBody, finalUrl);
  if (result.mixedContent.found) {
    result.issues.push({ severity: 'medium', code: 'MIXED_CONTENT', detail: `${result.mixedContent.count} resources` });
  }

  // Content size (proxy poids)
  result.htmlSize = finalBody.length;

  return result;
}

async function main() {
  console.log(`🕷  SEO Crawler — ${BASE_URL}`);
  console.log(`   Sitemap : ${SITEMAP_URL}\n`);

  // 1. Fetch sitemap
  console.log(`📥 Fetch sitemap...`);
  const smRes = await fetch(SITEMAP_URL, { headers: { 'User-Agent': USER_AGENT } });
  if (!smRes.ok) {
    console.error(`❌ Sitemap inaccessible (${smRes.status})`);
    process.exit(1);
  }
  // Si BASE_URL diffère de l'origine du sitemap (ex: crawl localhost mais
  // sitemap publie URLs prod), on réécrit les URLs vers BASE_URL.
  const sitemapText = await smRes.text();
  const sitemapHostMatch = sitemapText.match(/<loc>(https?:\/\/[^/]+)/);
  const sitemapHost = sitemapHostMatch?.[1];
  const baseOrigin = new URL(BASE_URL).origin;
  const needRewrite = sitemapHost && sitemapHost !== baseOrigin;
  if (needRewrite) console.log(`   Réécriture URLs sitemap: ${sitemapHost} → ${baseOrigin}`);

  const sm = parseSitemap(sitemapText, needRewrite ? BASE_URL : null);
  let seedUrls = sm.urls;

  // Support sitemap-index
  if (sm.isIndex) {
    console.log(`   Sitemap-index avec ${sm.urls.length} enfants, fetch...`);
    const allUrls = [];
    for (const childUrl of sm.urls) {
      const child = await fetch(childUrl, { headers: { 'User-Agent': USER_AGENT } });
      if (child.ok) {
        const parsed = parseSitemap(await child.text(), needRewrite ? BASE_URL : null);
        allUrls.push(...parsed.urls);
      }
    }
    seedUrls = allUrls;
  }

  console.log(`   ${seedUrls.length} URLs dans le sitemap\n`);

  // 2. BFS depuis sitemap, profondeur max
  const visited = new Map(); // url -> result
  const queue = seedUrls.map((u) => ({ url: u, depth: 0 }));
  const baseHost = new URL(BASE_URL).host;

  console.log(`🔎 Analyse en cours (concurrency ${CONCURRENCY})...`);
  let analyzed = 0;
  const total = () => visited.size + queue.length;

  while (queue.length > 0) {
    const batch = queue.splice(0, CONCURRENCY);
    const results = await Promise.all(
      batch.map(async ({ url, depth }) => {
        if (visited.has(url)) return null;
        visited.set(url, 'pending');
        try {
          return await analyzePage(url, depth);
        } catch (err) {
          return { url, depth, error: err.message, issues: [{ severity: 'high', code: 'ANALYZE_FAILED', detail: err.message }] };
        }
      }),
    );

    for (const r of results) {
      if (!r) continue;
      visited.set(r.url, r);
      analyzed++;
      if (analyzed % 10 === 0) {
        process.stdout.write(`   ${analyzed}/${total()}\r`);
      }
      // Découverte de liens internes pour la profondeur suivante
      if (r.depth < MAX_DEPTH && r.links?.internalHrefs) {
        for (const href of r.links.internalHrefs) {
          try {
            const u = new URL(href);
            if (u.host === baseHost && !visited.has(href)) {
              queue.push({ url: href, depth: r.depth + 1 });
            }
          } catch {}
        }
      }
    }
  }

  console.log(`   ${analyzed} pages analysées               \n`);

  // 3. Compute summary
  const pages = [...visited.values()].filter((v) => typeof v === 'object');
  const summary = {
    base: BASE_URL,
    runAt: new Date().toISOString(),
    totalAnalyzed: pages.length,
    fromSitemap: seedUrls.length,
    discoveredByLinks: pages.length - seedUrls.length,
    statusCounts: pages.reduce((acc, p) => {
      const s = p.status || 0;
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    }, {}),
    issuesBySeverity: pages.reduce(
      (acc, p) => {
        for (const i of p.issues || []) acc[i.severity] = (acc[i.severity] || 0) + 1;
        return acc;
      },
      { high: 0, medium: 0, low: 0, info: 0 },
    ),
    issuesByCode: pages.reduce((acc, p) => {
      for (const i of p.issues || []) acc[i.code] = (acc[i.code] || 0) + 1;
      return acc;
    }, {}),
    jsonLdTypes: pages.reduce((acc, p) => {
      for (const t of p.jsonLd?.types || []) acc[t] = (acc[t] || 0) + 1;
      return acc;
    }, {}),
    avgHtmlSize: Math.round(pages.reduce((s, p) => s + (p.htmlSize || 0), 0) / Math.max(1, pages.length)),
  };

  // 4. Write outputs
  const rawPath = path.join(OUT_RAW, `crawl-${today}.json`);
  fs.writeFileSync(rawPath, JSON.stringify({ summary, pages }, null, 2));

  const mdPath = path.join(OUT_REPORTS, `crawl-${today}.md`);
  fs.writeFileSync(mdPath, renderMarkdown(summary, pages));

  console.log(`📊 Résumé :`);
  console.log(`   ${summary.totalAnalyzed} pages, statuts ${JSON.stringify(summary.statusCounts)}`);
  console.log(`   Issues : ${summary.issuesBySeverity.high} high, ${summary.issuesBySeverity.medium} medium, ${summary.issuesBySeverity.low} low\n`);
  console.log(`✅ Raw  : ${path.relative(projectRoot, rawPath)}`);
  console.log(`✅ Report: ${path.relative(projectRoot, mdPath)}`);
}

function renderMarkdown(summary, pages) {
  const issuesByPage = pages
    .filter((p) => p.issues?.length > 0)
    .sort((a, b) => {
      const severity = (issues) =>
        (issues || []).reduce((s, i) => s + (i.severity === 'high' ? 100 : i.severity === 'medium' ? 10 : 1), 0);
      return severity(b.issues) - severity(a.issues);
    });

  const lines = [];
  lines.push(`# Crawl SEO — ${summary.base}`);
  lines.push(``);
  lines.push(`**Date** : ${summary.runAt}`);
  lines.push(`**Pages analysées** : ${summary.totalAnalyzed}`);
  lines.push(`**Depuis sitemap** : ${summary.fromSitemap}`);
  lines.push(`**Découvertes par liens** : ${summary.discoveredByLinks}`);
  lines.push(`**Taille HTML moyenne** : ${summary.avgHtmlSize.toLocaleString('fr')} octets`);
  lines.push(``);
  lines.push(`## Statuts HTTP`);
  lines.push(``);
  for (const [s, c] of Object.entries(summary.statusCounts)) {
    lines.push(`- \`${s}\` : ${c}`);
  }
  lines.push(``);
  lines.push(`## Issues par sévérité`);
  lines.push(``);
  lines.push(`| Sévérité | Count |`);
  lines.push(`|---|---|`);
  for (const [k, v] of Object.entries(summary.issuesBySeverity)) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push(``);
  lines.push(`## Issues par code`);
  lines.push(``);
  lines.push(`| Code | Count |`);
  lines.push(`|---|---|`);
  for (const [k, v] of Object.entries(summary.issuesByCode).sort((a, b) => b[1] - a[1])) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push(``);
  lines.push(`## Schemas JSON-LD détectés`);
  lines.push(``);
  for (const [t, c] of Object.entries(summary.jsonLdTypes).sort((a, b) => b[1] - a[1])) {
    lines.push(`- \`${t}\` : ${c} pages`);
  }
  lines.push(``);
  lines.push(`## Pages avec issues (top 30 par gravité)`);
  lines.push(``);
  lines.push(`| URL | Status | Issues |`);
  lines.push(`|---|---|---|`);
  for (const p of issuesByPage.slice(0, 30)) {
    const issuesText = (p.issues || []).map((i) => `${i.severity[0].toUpperCase()}:${i.code}`).join(', ');
    lines.push(`| \`${p.url.replace(summary.base, '')}\` | ${p.status} | ${issuesText} |`);
  }
  lines.push(``);
  lines.push(`## Détail par page (avec issues)`);
  lines.push(``);
  for (const p of issuesByPage.slice(0, 30)) {
    lines.push(`### \`${p.url.replace(summary.base, '')}\``);
    lines.push(``);
    lines.push(`- **Status** : ${p.status}${p.redirectChain?.length > 1 ? ` (${p.redirectChain.length} hops)` : ''}`);
    lines.push(`- **Title** (${p.titleLen ?? '?'}) : ${p.title ?? '(absent)'}`);
    lines.push(`- **Desc** (${p.descLen ?? '?'}) : ${(p.description ?? '').slice(0, 200)}`);
    lines.push(`- **H1** : ${p.firstH1Text ?? '(absent)'}`);
    lines.push(`- **Headings** : ${JSON.stringify(p.headings)}`);
    lines.push(`- **Images sans alt** : ${p.images?.missingCount ?? 0}/${p.images?.total ?? 0}`);
    lines.push(`- **Links** : ${p.links?.internal ?? 0} internes, ${p.links?.external ?? 0} externes`);
    lines.push(`- **JSON-LD** : ${p.jsonLd?.count ?? 0} blocs, types: ${(p.jsonLd?.types || []).join(', ') || '(none)'}`);
    if (p.issues?.length) {
      lines.push(`- **Issues** :`);
      for (const i of p.issues) {
        lines.push(`  - \`${i.severity}\` **${i.code}** ${i.detail ? `→ ${i.detail}` : ''}`);
      }
    }
    lines.push(``);
  }
  return lines.join('\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
