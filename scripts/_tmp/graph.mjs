import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
const BASE = 'https://www.couverturegironde.fr';
const db = new DatabaseSync('.seo/crawl.sqlite');
const norm = (u) => (u.replace(/\/$/, '') || BASE);
const pages = db.prepare('SELECT url FROM pages').all().map((r) => norm(r.url));
const P = new Set(pages);
const links = db.prepare('SELECT from_url,to_url,zone,anchor FROM links').all()
  .map((r) => ({ ...r, from_url: norm(r.from_url), to_url: norm(r.to_url) }))
  .filter((r) => P.has(r.to_url) && r.from_url !== r.to_url);

// profondeur de clic (BFS depuis la home)
const out = new Map(pages.map((p) => [p, new Set()]));
for (const l of links) out.get(l.from_url)?.add(l.to_url);
const depth = new Map([[BASE, 0]]);
let q = [BASE];
while (q.length) {
  const nq = [];
  for (const u of q) for (const v of out.get(u) ?? []) if (!depth.has(v)) { depth.set(v, depth.get(u) + 1); nq.push(v); }
  q = nq;
}
// liens entrants, en distinguant corps vs nav/footer
const inAll = new Map(pages.map((p) => [p, 0])), inCorps = new Map(pages.map((p) => [p, 0]));
const srcCorps = new Map(pages.map((p) => [p, new Set()]));
for (const l of links) {
  inAll.set(l.to_url, inAll.get(l.to_url) + 1);
  if (l.zone === 'corps') { inCorps.set(l.to_url, inCorps.get(l.to_url) + 1); srcCorps.get(l.to_url).add(l.from_url); }
}
// PageRank interne
let pr = new Map(pages.map((p) => [p, 1 / pages.length]));
const d = 0.85;
for (let it = 0; it < 50; it++) {
  const nx = new Map(pages.map((p) => [p, (1 - d) / pages.length]));
  let dangling = 0;
  for (const u of pages) {
    const o = out.get(u); if (!o || o.size === 0) { dangling += pr.get(u); continue; }
    const share = (d * pr.get(u)) / o.size;
    for (const v of o) nx.set(v, nx.get(v) + share);
  }
  for (const u of pages) nx.set(u, nx.get(u) + (d * dangling) / pages.length);
  pr = nx;
}
const rows = pages.map((u) => ({
  page: u.replace(BASE, '') || '/',
  profondeur: depth.has(u) ? depth.get(u) : -1,
  liens_entrants: inAll.get(u), dont_corps: inCorps.get(u),
  sources_corps_distinctes: srcCorps.get(u).size,
  pagerank: +(pr.get(u) * 1000).toFixed(2),
})).sort((a, b) => b.pagerank - a.pagerank);
const esc = (v) => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
fs.writeFileSync('out/maillage.csv', [Object.keys(rows[0]).join(','), ...rows.map((r) => Object.values(r).map(esc).join(','))].join('\n'));
console.log('=== MAILLAGE : orphelines de corps (0 lien en prose) ===');
console.table(rows.filter((r) => r.dont_corps === 0).map((r) => ({ page: r.page, prof: r.profondeur, liens_tot: r.liens_entrants, pr: r.pagerank })));
console.log('=== médiane liens de corps entrants :', rows.map(r=>r.dont_corps).sort((a,b)=>a-b)[Math.floor(rows.length/2)]);
console.log('=== 12 plus faibles en PageRank interne ===');
console.table(rows.slice(-12));
