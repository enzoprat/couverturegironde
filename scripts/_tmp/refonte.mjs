import fs from 'node:fs';
import { google } from 'googleapis';
const SITE = 'sc-domain:couverturegironde.fr';
const cj = JSON.parse(fs.readFileSync('_secrets/gsc-oauth-client.json', 'utf8'));
const { client_id, client_secret } = cj.installed ?? cj.web ?? {};
const auth = new google.auth.OAuth2(client_id, client_secret);
auth.setCredentials(JSON.parse(fs.readFileSync('_secrets/gsc-oauth-token.json', 'utf8')));
const wm = google.webmasters({ version: 'v3', auth });
const q = async (s, e, dims) => (await wm.searchanalytics.query({ siteUrl: SITE, requestBody: { startDate: s, endDate: e, dimensions: dims, rowLimit: 25000, dataState: 'final' } })).data.rows ?? [];

// AVANT la refonte du 05/07 : 04/06 → 04/07  |  APRÈS (stabilisé) : 05/08 → 02/09
const AVANT = ['2026-06-04', '2026-07-04'], APRES = ['2026-08-05', '2026-09-02'];
const a = await q(...AVANT, ['query']), b = await q(...APRES, ['query']);
const BRUIT = /gironde-?toiture-?service/i;
const A = Object.fromEntries(a.filter(r => !BRUIT.test(r.keys[0])).map(r => [r.keys[0], r]));
const B = Object.fromEntries(b.filter(r => !BRUIT.test(r.keys[0])).map(r => [r.keys[0], r]));
const panier = Object.keys(A).filter(k => B[k]);
const wpos = (m) => panier.reduce((s, k) => s + m[k].position * m[k].impressions, 0) / panier.reduce((s, k) => s + m[k].impressions, 0);
const sum = (m, f) => panier.reduce((s, k) => s + m[k][f], 0);
console.log(`=== PANIER CONSTANT AVANT/APRÈS LA REFONTE DU 2026-07-05 ===`);
console.log(`  fenêtre AVANT : ${AVANT.join(' → ')}   |   APRÈS : ${APRES.join(' → ')}`);
console.log(`  requêtes présentes dans les deux : ${panier.length}`);
console.log(`  position pondérée : ${wpos(A).toFixed(1)}  →  ${wpos(B).toFixed(1)}   (${(wpos(B) - wpos(A) >= 0 ? '+' : '')}${(wpos(B) - wpos(A)).toFixed(1)} rangs)`);
console.log(`  impressions       : ${sum(A, 'impressions')}  →  ${sum(B, 'impressions')}`);
console.log(`  clics             : ${sum(A, 'clicks')}  →  ${sum(B, 'clicks')}`);
// par page
const ap = await q(...AVANT, ['page']), bp = await q(...APRES, ['page']);
const AP = Object.fromEntries(ap.map(r => [r.keys[0], r])), BP = Object.fromEntries(bp.map(r => [r.keys[0], r]));
const rows = Object.keys(AP).filter(k => BP[k] && AP[k].impressions >= 100).map(k => ({
  page: k.replace('https://www.couverturegironde.fr', '') || '/',
  pos_avant: +AP[k].position.toFixed(1), pos_apres: +BP[k].position.toFixed(1),
  delta: +(BP[k].position - AP[k].position).toFixed(1),
  imp_avant: AP[k].impressions, imp_apres: BP[k].impressions,
  clics_avant: AP[k].clicks, clics_apres: BP[k].clicks,
})).sort((x, y) => y.delta - x.delta);
console.log('\n=== PAR PAGE (≥100 imp avant) — trié par dégradation ===');
console.table(rows);
const esc = v => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s; };
fs.writeFileSync('out/impact_refonte.csv', [Object.keys(rows[0]).join(','), ...rows.map(r => Object.values(r).map(esc).join(','))].join('\n'));
