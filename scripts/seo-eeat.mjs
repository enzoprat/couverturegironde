#!/usr/bin/env node
/**
 * E-E-A-T Scoring — inspired by Google Search Quality Rater Guidelines
 * (septembre 2025) et claude-seo skill `seo-page`.
 *
 * Crawle nos pages clés et évalue les 4 piliers :
 *  - Experience (E1)  : preuves d'expérience pratique (années, chantiers,
 *                        photos avant/après, témoignages datés et localisés)
 *  - Expertise        : signaux de compétence (bio auteur/founder, schema
 *                        Person, certifications, contenus techniques pointus)
 *  - Authoritativeness: citations externes, avis, NAP cohérent, schema
 *                        Organization complet
 *  - Trustworthiness  : HTTPS, mentions légales, RGPD, garanties affichées,
 *                        prix transparents, contact direct
 *
 * Output : seo-audit/reports/eeat-{date}.md avec score 0-100 par pilier
 * + recommandations falsifiables (chaque reco a un critère de validation).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const OUT_RAW = path.join(projectRoot, 'seo-audit', 'raw');
const OUT_REPORTS = path.join(projectRoot, 'seo-audit', 'reports');
fs.mkdirSync(OUT_RAW, { recursive: true });
fs.mkdirSync(OUT_REPORTS, { recursive: true });

const today = new Date().toISOString().slice(0, 10);

const args = process.argv.slice(2);
function arg(name, def) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 ? args[idx + 1] : def;
}
const BASE_URL = arg('base', 'https://www.couverturegironde.fr');
const PAGES = arg('urls', '/,/a-propos,/couvreur-bordeaux,/couvreur-gironde,/tarifs,/urgence-fuite-toiture-bordeaux,/realisations,/mentions-legales')
  .split(',');

const USER_AGENT = 'CouvertureGirondeEEATBot/1.0';

async function fetchPage(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    return { html: await res.text(), headers: Object.fromEntries(res.headers.entries()) };
  } catch (err) {
    return { error: err.message };
  }
}

function extractJsonLd(html) {
  const blocks = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  const types = new Set();
  const parsed = [];
  for (const b of blocks) {
    const json = b.match(/<script[^>]*>([\s\S]*?)<\/script>/i)?.[1] ?? '';
    try {
      const data = JSON.parse(json);
      parsed.push(data);
      const collect = (d) => {
        if (Array.isArray(d)) return d.flatMap(collect);
        if (d && typeof d === 'object' && d['@type']) {
          const t = Array.isArray(d['@type']) ? d['@type'] : [d['@type']];
          return t;
        }
        return [];
      };
      collect(data).forEach((t) => types.add(t));
    } catch {}
  }
  return { types: [...types], blocks: parsed };
}

function deepFindString(obj, predicate) {
  if (typeof obj === 'string') return predicate(obj) ? obj : null;
  if (Array.isArray(obj)) {
    for (const item of obj) {
      const f = deepFindString(item, predicate);
      if (f) return f;
    }
  } else if (obj && typeof obj === 'object') {
    for (const val of Object.values(obj)) {
      const f = deepFindString(val, predicate);
      if (f) return f;
    }
  }
  return null;
}

// ============================================================
// Scoring heuristics
// ============================================================
function scoreExperience(html, jsonLd) {
  const checks = [];

  // Signal 1: "depuis YEAR" pattern (longévité affichée)
  const yearMatch = html.match(/depuis\s+(?:20\d{2}|19\d{2})/i);
  checks.push({
    id: 'EXP-YEARS',
    label: 'Affiche les années d\'expérience',
    pass: !!yearMatch,
    weight: 10,
    detail: yearMatch?.[0] ?? null,
  });

  // Signal 2: Photos avant/après / réalisations
  const realisationsLinks = (html.match(/\/realisations\//g) || []).length;
  checks.push({
    id: 'EXP-REALISATIONS',
    label: 'Lien vers réalisations / chantiers',
    pass: realisationsLinks > 0,
    weight: 8,
    detail: `${realisationsLinks} liens trouvés`,
  });

  // Signal 3: Témoignages datés/localisés (Review schema)
  const hasReviews = jsonLd.types.includes('Review');
  checks.push({
    id: 'EXP-REVIEWS',
    label: 'Témoignages clients structurés (Review schema)',
    pass: hasReviews,
    weight: 10,
    detail: hasReviews ? 'Review JSON-LD présent' : null,
  });

  // Signal 4: AggregateRating
  const hasAggregate = !!deepFindString(jsonLd.blocks, (s) => /AggregateRating/.test(s)) ||
    jsonLd.types.includes('AggregateRating');
  checks.push({
    id: 'EXP-RATING',
    label: 'Note agrégée affichée (AggregateRating)',
    pass: hasAggregate,
    weight: 8,
    detail: hasAggregate ? 'AggregateRating présent' : null,
  });

  // Signal 5: Nombre d'avis explicite (54 avis, etc.)
  const reviewCount = html.match(/(\d+)\s*avis/i);
  checks.push({
    id: 'EXP-REVIEW-COUNT',
    label: 'Nombre d\'avis affiché en clair',
    pass: !!reviewCount && Number(reviewCount[1]) > 0,
    weight: 4,
    detail: reviewCount?.[0] ?? null,
  });

  return computeScore(checks);
}

function scoreExpertise(html, jsonLd) {
  const checks = [];

  // Signal 1: Bio fondateur / Person schema avec founder
  const hasFounder = jsonLd.blocks.some((b) =>
    JSON.stringify(b).match(/"founder":\s*{[^}]*"@type":\s*"Person"/),
  );
  checks.push({
    id: 'EXPER-FOUNDER',
    label: 'Founder Person déclaré dans Organization schema',
    pass: hasFounder,
    weight: 12,
    detail: hasFounder ? 'founder Person trouvé' : null,
  });

  // Signal 2: Page /a-propos
  const hasAproposLink = /href=["'][^"']*\/a-propos/.test(html);
  checks.push({
    id: 'EXPER-APROPOS',
    label: 'Lien vers /a-propos visible',
    pass: hasAproposLink,
    weight: 6,
    detail: null,
  });

  // Signal 3: Contenu long-tail technique (≥ 1500 mots)
  const textContent = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
  const wordCount = textContent.trim().split(/\s+/).length;
  checks.push({
    id: 'EXPER-CONTENT-DEPTH',
    label: 'Contenu profond (≥ 1500 mots)',
    pass: wordCount >= 1500,
    weight: 10,
    detail: `${wordCount} mots`,
  });

  // Signal 4: Vocabulaire technique métier (couverture)
  const techTerms = [
    'démoussage', 'hydrofuge', 'faîtage', 'zinguerie', 'noue',
    'tuile canal', 'ardoise', 'chéneau', 'crochet cuivre',
    'mortier chaux', 'soudure étain', 'décennale',
  ];
  const techHits = techTerms.filter((t) => new RegExp(t, 'i').test(html)).length;
  checks.push({
    id: 'EXPER-VOCABULARY',
    label: 'Vocabulaire technique métier (≥ 6 termes)',
    pass: techHits >= 6,
    weight: 8,
    detail: `${techHits}/${techTerms.length} termes détectés`,
  });

  // Signal 5: HowTo schema (méthodes détaillées)
  const hasHowTo = jsonLd.types.includes('HowTo');
  checks.push({
    id: 'EXPER-HOWTO',
    label: 'Schema HowTo (méthode détaillée)',
    pass: hasHowTo,
    weight: 6,
    detail: hasHowTo ? 'HowTo JSON-LD' : null,
  });

  return computeScore(checks);
}

function scoreAuthority(html, jsonLd, headers) {
  const checks = [];

  // Signal 1: NAP cohérent (téléphone + adresse + nom dans schemas)
  const hasOrg = jsonLd.types.includes('Organization');
  const hasLocalBiz =
    jsonLd.types.includes('LocalBusiness') || jsonLd.types.includes('RoofingContractor');
  checks.push({
    id: 'AUTH-ORG-SCHEMA',
    label: 'Organization + LocalBusiness schemas',
    pass: hasOrg && hasLocalBiz,
    weight: 10,
    detail: hasOrg && hasLocalBiz ? 'Schemas complets' : null,
  });

  // Signal 2: Téléphone visible dans le HTML (clickable)
  const hasTel = /href=["']tel:/.test(html);
  checks.push({
    id: 'AUTH-PHONE',
    label: 'Téléphone cliquable (tel:)',
    pass: hasTel,
    weight: 6,
    detail: null,
  });

  // Signal 3: Adresse complète dans schema
  const hasAddress = !!deepFindString(jsonLd.blocks, (s) => s.match(/\d{5}/)); // CP français
  checks.push({
    id: 'AUTH-ADDRESS',
    label: 'Adresse postale complète (CP)',
    pass: hasAddress,
    weight: 4,
    detail: null,
  });

  // Signal 4: BreadcrumbList (autorité contextuelle)
  const hasBreadcrumb = jsonLd.types.includes('BreadcrumbList');
  checks.push({
    id: 'AUTH-BREADCRUMB',
    label: 'BreadcrumbList schema',
    pass: hasBreadcrumb,
    weight: 4,
    detail: null,
  });

  // Signal 5: Mentions externes / WhatsApp / réseaux
  const hasExternal = /wa\.me|whatsapp|facebook|instagram|linkedin/i.test(html);
  checks.push({
    id: 'AUTH-EXTERNAL',
    label: 'Présence externe affichée (WhatsApp / réseaux)',
    pass: hasExternal,
    weight: 4,
    detail: null,
  });

  return computeScore(checks);
}

function scoreTrust(html, jsonLd, headers, url) {
  const checks = [];

  // Signal 1: HTTPS
  const isHttps = url.startsWith('https://');
  checks.push({
    id: 'TRUST-HTTPS',
    label: 'HTTPS actif',
    pass: isHttps,
    weight: 8,
    detail: null,
  });

  // Signal 2: HSTS
  const hasHSTS = !!(headers && headers['strict-transport-security']);
  checks.push({
    id: 'TRUST-HSTS',
    label: 'HSTS configuré',
    pass: hasHSTS,
    weight: 4,
    detail: null,
  });

  // Signal 3: CSP
  const hasCSP = !!(headers && headers['content-security-policy']);
  checks.push({
    id: 'TRUST-CSP',
    label: 'Content-Security-Policy',
    pass: hasCSP,
    weight: 4,
    detail: null,
  });

  // Signal 4: Lien Mentions légales
  const hasLegal = /mentions-legales|mentions\s*l[ée]gales/i.test(html);
  checks.push({
    id: 'TRUST-LEGAL',
    label: 'Lien Mentions légales accessible',
    pass: hasLegal,
    weight: 6,
    detail: null,
  });

  // Signal 5: Politique de confidentialité / RGPD
  const hasRGPD = /politique-confidentialite|RGPD|confidentialit[ée]/i.test(html);
  checks.push({
    id: 'TRUST-RGPD',
    label: 'Politique de confidentialité / RGPD',
    pass: hasRGPD,
    weight: 4,
    detail: null,
  });

  // Signal 6: Garanties explicites
  const hasWarranty = /garantie\s+(?:d[ée]cennale|10\s*ans)/i.test(html);
  checks.push({
    id: 'TRUST-WARRANTY',
    label: 'Garantie décennale affichée explicitement',
    pass: hasWarranty,
    weight: 8,
    detail: null,
  });

  // Signal 7: Prix transparents
  const hasPricing = /€\/m²|\d+\s*€/.test(html);
  checks.push({
    id: 'TRUST-PRICING',
    label: 'Tarification transparente affichée',
    pass: hasPricing,
    weight: 6,
    detail: null,
  });

  // Signal 8: FAQ
  const hasFAQ = jsonLd.types.includes('FAQPage');
  checks.push({
    id: 'TRUST-FAQ',
    label: 'FAQ schema (questions clients anticipées)',
    pass: hasFAQ,
    weight: 4,
    detail: null,
  });

  return computeScore(checks);
}

function computeScore(checks) {
  const totalWeight = checks.reduce((s, c) => s + c.weight, 0);
  const earned = checks.reduce((s, c) => s + (c.pass ? c.weight : 0), 0);
  const score = Math.round((earned / totalWeight) * 100);
  return { score, checks, totalWeight, earned };
}

// ============================================================
// Main
// ============================================================
async function main() {
  console.log(`📊 E-E-A-T Scoring — ${BASE_URL}\n`);

  const pageResults = [];
  for (const urlPath of PAGES) {
    const fullUrl = `${BASE_URL}${urlPath}`;
    process.stdout.write(`  ${urlPath.padEnd(40)} `);
    const { html, headers, error } = await fetchPage(fullUrl);
    if (error) {
      console.log(`❌ ${error}`);
      pageResults.push({ url: urlPath, error });
      continue;
    }
    const jsonLd = extractJsonLd(html);
    const experience = scoreExperience(html, jsonLd);
    const expertise = scoreExpertise(html, jsonLd);
    const authority = scoreAuthority(html, jsonLd, headers);
    const trust = scoreTrust(html, jsonLd, headers, fullUrl);
    const global = Math.round(
      (experience.score + expertise.score + authority.score + trust.score) / 4,
    );
    console.log(`E:${experience.score} Ex:${expertise.score} A:${authority.score} T:${trust.score} → ${global}/100`);
    pageResults.push({
      url: urlPath,
      jsonLdTypes: jsonLd.types,
      experience,
      expertise,
      authority,
      trust,
      global,
    });
  }

  // Persist
  const rawPath = path.join(OUT_RAW, `eeat-${today}.json`);
  fs.writeFileSync(rawPath, JSON.stringify({ runAt: new Date().toISOString(), base: BASE_URL, results: pageResults }, null, 2));

  const mdPath = path.join(OUT_REPORTS, `eeat-${today}.md`);
  fs.writeFileSync(mdPath, renderMarkdown(pageResults));

  console.log(`\n✅ Raw : ${path.relative(projectRoot, rawPath)}`);
  console.log(`✅ Report: ${path.relative(projectRoot, mdPath)}`);
}

function renderMarkdown(pages) {
  const lines = [];
  lines.push(`# E-E-A-T Audit — ${BASE_URL}`);
  lines.push(``);
  lines.push(`**Date** : ${new Date().toISOString()}`);
  lines.push(`**Méthodologie** : Heuristique inspirée des Google Search Quality Rater Guidelines (septembre 2025). Chaque signal a un poids, un critère de pass/fail mesurable, et une falsifiabilité.`);
  lines.push(``);
  lines.push(`Score global = moyenne des 4 piliers E-E-A-T.`);
  lines.push(``);

  // Summary table
  lines.push(`## Synthèse par page`);
  lines.push(``);
  lines.push(`| URL | Experience | Expertise | Authority | Trust | **Global** |`);
  lines.push(`|---|---|---|---|---|---|`);
  for (const p of pages) {
    if (p.error) {
      lines.push(`| \`${p.url}\` | ERR | ERR | ERR | ERR | ERR |`);
      continue;
    }
    lines.push(`| \`${p.url}\` | ${p.experience.score} | ${p.expertise.score} | ${p.authority.score} | ${p.trust.score} | **${p.global}** |`);
  }
  // Moyenne globale
  const valid = pages.filter((p) => !p.error);
  if (valid.length > 0) {
    const avg = (key) => Math.round(valid.reduce((s, p) => s + p[key].score, 0) / valid.length);
    const avgGlobal = Math.round(valid.reduce((s, p) => s + p.global, 0) / valid.length);
    lines.push(`| **MOYENNE** | **${avg('experience')}** | **${avg('expertise')}** | **${avg('authority')}** | **${avg('trust')}** | **${avgGlobal}** |`);
  }
  lines.push(``);

  // Détail par page
  for (const p of pages) {
    if (p.error) continue;
    lines.push(`## \`${p.url}\` — Score global ${p.global}/100`);
    lines.push(``);
    for (const pillar of ['experience', 'expertise', 'authority', 'trust']) {
      const data = p[pillar];
      const pillarLabel = { experience: 'Experience', expertise: 'Expertise', authority: 'Authoritativeness', trust: 'Trustworthiness' }[pillar];
      lines.push(`### ${pillarLabel} — ${data.score}/100 (${data.earned}/${data.totalWeight} points)`);
      lines.push(``);
      lines.push(`| ✓ | Signal | Poids | Détail |`);
      lines.push(`|---|---|---|---|`);
      for (const c of data.checks) {
        lines.push(`| ${c.pass ? '✅' : '❌'} | ${c.label} | ${c.weight} | ${c.detail ?? '—'} |`);
      }
      lines.push(``);
    }
  }

  // Recommandations actionnables (signaux ratés sur ≥ 50% des pages)
  lines.push(`## Recommandations actionnables (par fréquence du fail)`);
  lines.push(``);
  const failCounts = {};
  for (const p of valid) {
    for (const pillar of ['experience', 'expertise', 'authority', 'trust']) {
      for (const c of p[pillar].checks) {
        if (!c.pass) {
          failCounts[c.id] = failCounts[c.id] ?? { label: c.label, weight: c.weight, count: 0 };
          failCounts[c.id].count++;
        }
      }
    }
  }
  const sortedFails = Object.entries(failCounts).sort(
    (a, b) => b[1].count * b[1].weight - a[1].count * a[1].weight,
  );
  if (sortedFails.length === 0) {
    lines.push(`✅ Aucun signal raté sur les pages analysées.`);
  } else {
    lines.push(`| Signal | Poids | Pages où raté | Priorité |`);
    lines.push(`|---|---|---|---|`);
    for (const [id, d] of sortedFails) {
      const priority = d.weight * d.count >= 30 ? '🔴 High' : d.weight * d.count >= 15 ? '🟠 Medium' : '🟢 Low';
      lines.push(`| **${d.label}** (\`${id}\`) | ${d.weight} | ${d.count}/${valid.length} | ${priority} |`);
    }
  }
  lines.push(``);
  return lines.join('\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
