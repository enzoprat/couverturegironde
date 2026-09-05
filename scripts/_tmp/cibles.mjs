import fs from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
const BASE = 'https://www.couverturegironde.fr';
const db = new DatabaseSync('.seo/crawl.sqlite');

function rd(f) { const t = fs.readFileSync('gsc-audit/data/' + f, 'utf8').trim(); const L = []; let c = '', r = [], Q = false;
  for (let i = 0; i < t.length; i++) { const ch = t[i];
    if (Q) { if (ch === '"') { if (t[i + 1] === '"') { c += '"'; i++; } else Q = false; } else c += ch; }
    else if (ch === '"') Q = true; else if (ch === ',') { r.push(c); c = ''; }
    else if (ch === '\n') { r.push(c); L.push(r); r = []; c = ''; } else if (ch !== '\r') c += ch; }
  r.push(c); L.push(r); const co = L[0];
  return L.slice(1).filter(x => x.length === co.length).map(x => { const o = {}; co.forEach((k, i) => o[k] = ['clicks','impressions','ctr','position'].includes(k) ? Number(x[i]) : x[i]); return o; }); }

const q28 = rd('query_28.csv'), qprev = rd('query_28_prev.csv'), qp90 = rd('query_page_90.csv');
const S = (a, k) => a.reduce((s, x) => s + x[k], 0);
const norm = u => u.replace(/\/$/, '') || BASE;
const P = Object.fromEntries(db.prepare('SELECT * FROM pages').all().map(r => [norm(r.url), r]));
const mail = Object.fromEntries(fs.readFileSync('out/maillage.csv','utf8').trim().split('\n').slice(1).map(l=>{const v=l.split(',');return [v[0],{prof:+v[1],liens:+v[2],corps:+v[3],pr:+v[5]}];}));

// page dominante par requête sur 90j
const byQ = {};
for (const r of qp90) (byQ[r.query] ??= []).push(r);
const prevM = Object.fromEntries(qprev.map(r => [r.query, r]));

// BRUIT : requêtes contenant le domaine du concurrent = impressions non humaines (audit §3.3)
const BRUIT = /gironde-?toiture-?service/i;

const cand = q28.filter(r => !BRUIT.test(r.query) && r.impressions >= 30 && r.position >= 4 && r.position <= 40)
  .map(r => {
    const pages = (byQ[r.query] ?? []).slice().sort((a, b) => b.impressions - a.impressions);
    const ti = S(byQ[r.query] ?? [], 'impressions');
    const cible = pages[0];
    const path = cible ? norm(cible.page).replace(BASE, '') || '/' : '';
    const pg = cible ? P[norm(cible.page)] : null;
    const kw = r.query.toLowerCase().replace(/[^a-zà-ÿ0-9 ]/g, ' ').split(/\s+/).filter(w => w.length > 3);
    const inTxt = (s) => s ? kw.filter(w => s.toLowerCase().includes(w)).length / kw.length : 0;
    const prev = prevM[r.query];
    return {
      query: r.query, page: path,
      imp: r.impressions, clics: r.clicks, pos: +r.position.toFixed(1),
      d_pos: prev ? +(r.position - prev.position).toFixed(1) : null,
      d_imp: prev ? r.impressions - prev.impressions : null,
      n_pages_90j: pages.filter(p => p.impressions >= 0.1 * ti).length,
      part_dom: ti ? +(cible.impressions / ti).toFixed(2) : null,
      mots: pg?.words ?? null,
      kw_title: pg ? +inTxt(pg.title).toFixed(2) : null,
      kw_h1: pg ? +inTxt(pg.h1).toFixed(2) : null,
      kw_100mots: pg ? +inTxt((pg.text || '').split(/\s+/).slice(0, 100).join(' ')).toFixed(2) : null,
      liens_corps: mail[path]?.corps ?? null,
      pr: mail[path]?.pr ?? null,
    };
  })
  .sort((a, b) => b.imp - a.imp);

const esc = v => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s; };
fs.writeFileSync('out/cibles_brut.csv', [Object.keys(cand[0]).join(','), ...cand.map(r => Object.values(r).map(esc).join(','))].join('\n'));
console.log(`${cand.length} requêtes candidates (hors bruit concurrent, ≥30 imp, pos 4-40)\n`);
console.table(cand.slice(0, 28));
