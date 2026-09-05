import fs from 'node:fs';
import { DatabaseSync } from 'node:sqlite';

const BASE = 'https://www.couverturegironde.fr';
const UA = 'CouvertureGirondeSEOBot/1.0 (audit interne; +https://www.couverturegironde.fr)';
const DISALLOW = ['/api/', '/merci'];
const DELAY = 500; // 2 req/s max
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const db = new DatabaseSync('.seo/crawl.sqlite');
db.exec(`
DROP TABLE IF EXISTS pages; DROP TABLE IF EXISTS links; DROP TABLE IF EXISTS images;
CREATE TABLE pages (
  url TEXT PRIMARY KEY, status INTEGER, redirect_chain TEXT, response_ms INTEGER,
  title TEXT, title_len INTEGER, meta_description TEXT, meta_len INTEGER,
  h1 TEXT, h1_count INTEGER, h2 TEXT, h3 TEXT,
  canonical TEXT, robots TEXT, lang TEXT, hreflang TEXT,
  words INTEGER, text TEXT, date_published TEXT, date_modified TEXT,
  jsonld_types TEXT, html_bytes INTEGER
);
CREATE TABLE links (from_url TEXT, to_url TEXT, anchor TEXT, zone TEXT);
CREATE TABLE images (url TEXT, src TEXT, alt TEXT, width TEXT, height TEXT, loading TEXT, fetchpriority TEXT);
`);

const allowed = (p) => !DISALLOW.some((d) => p.startsWith(d));
const urls = (await (await fetch(`${BASE}/sitemap.xml`)).text())
  .match(/<loc>[^<]*/g).map((s) => s.slice(5))
  .filter((u) => allowed(new URL(u).pathname));
console.log(`sitemap : ${urls.length} URLs autorisées`);

const strip = (h) => h
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
  .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ');
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
  .replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const attr = (tag, n) => (tag.match(new RegExp(`${n}\\s*=\\s*["']([^"']*)["']`, 'i')) ?? [])[1] ?? '';

const insPage = db.prepare(`INSERT OR REPLACE INTO pages VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
const insLink = db.prepare(`INSERT INTO links VALUES (?,?,?,?)`);
const insImg = db.prepare(`INSERT INTO images VALUES (?,?,?,?,?,?,?)`);

for (const [i, url] of urls.entries()) {
  const t0 = Date.now();
  let res, html;
  try {
    res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
    html = await res.text();
  } catch (e) { console.log('ERR', url, e.message); continue; }
  const ms = Date.now() - t0;
  const chain = res.redirected ? `${url} -> ${res.url}` : '';
  const clean = strip(html);

  const head = (html.match(/<head[\s\S]*?<\/head>/i) ?? [''])[0];
  const title = txt((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) ?? ['', ''])[1]);
  const metaDesc = attr((head.match(/<meta[^>]*name=["']description["'][^>]*>/i) ?? [''])[0], 'content');
  const canonical = attr((head.match(/<link[^>]*rel=["']canonical["'][^>]*>/i) ?? [''])[0], 'href');
  const robots = attr((head.match(/<meta[^>]*name=["']robots["'][^>]*>/i) ?? [''])[0], 'content');
  const lang = attr((html.match(/<html[^>]*>/i) ?? [''])[0], 'lang');
  const hreflang = (head.match(/<link[^>]*hreflang=[^>]*>/gi) ?? []).length;

  const h1s = [...clean.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => txt(m[1]));
  const h2s = [...clean.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => txt(m[1])).filter(Boolean);
  const h3s = [...clean.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map((m) => txt(m[1])).filter(Boolean);

  // corps principal = <main> si présent, sinon body moins header/footer/nav
  let body = (clean.match(/<main[\s\S]*?<\/main>/i) ?? [null])[0];
  if (!body) body = clean.replace(/<header[\s\S]*?<\/header>/gi, ' ').replace(/<footer[\s\S]*?<\/footer>/gi, ' ').replace(/<nav[\s\S]*?<\/nav>/gi, ' ');
  const text = txt(body);
  const words = text ? text.split(/\s+/).length : 0;

  const jsonld = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap((m) => { try { const o = JSON.parse(m[1]); return Array.isArray(o) ? o : [o]; } catch { return []; } })
    .map((o) => o['@type']).filter(Boolean);

  const dm = (html.match(/"dateModified"\s*:\s*"([^"]+)"/) ?? [])[1] ?? '';
  const dp = (html.match(/"datePublished"\s*:\s*"([^"]+)"/) ?? [])[1] ?? '';

  insPage.run(url, res.status, chain, ms, title, title.length, metaDesc, metaDesc.length,
    h1s[0] ?? '', h1s.length, h2s.join(' | '), h3s.join(' | '),
    canonical, robots, lang, String(hreflang), words, text.slice(0, 40000), dp, dm,
    [...new Set(jsonld)].join(','), html.length);

  // liens internes + zone
  const headerEnd = clean.search(/<\/header>/i);
  const footerStart = clean.search(/<footer/i);
  for (const m of clean.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const href = attr(`<a ${m[1]}>`, 'href');
    if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) continue;
    let abs; try { abs = new URL(href, BASE).href; } catch { continue; }
    if (!abs.startsWith(BASE)) continue;
    const pos = m.index;
    const zone = headerEnd > 0 && pos < headerEnd ? 'nav' : footerStart > 0 && pos > footerStart ? 'footer' : 'corps';
    insLink.run(url, abs.split('#')[0].replace(/\/$/, '') || BASE, txt(m[2]).slice(0, 120), zone);
  }
  for (const m of clean.matchAll(/<img\b([^>]*)>/gi)) {
    const t = `<img ${m[1]}>`;
    insImg.run(url, attr(t, 'src').slice(0, 200), attr(t, 'alt'), attr(t, 'width'), attr(t, 'height'), attr(t, 'loading'), attr(t, 'fetchpriority'));
  }
  if (i % 10 === 0) console.log(`  ${i + 1}/${urls.length}`);
  await sleep(DELAY);
}
console.log('crawl terminé');
