import fs from 'node:fs';
import { google } from 'googleapis';
const SITE = 'sc-domain:couverturegironde.fr';
const cj = JSON.parse(fs.readFileSync('_secrets/gsc-oauth-client.json', 'utf8'));
const { client_id, client_secret } = cj.installed ?? cj.web ?? {};
const auth = new google.auth.OAuth2(client_id, client_secret);
auth.setCredentials(JSON.parse(fs.readFileSync('_secrets/gsc-oauth-token.json', 'utf8')));
const wm = google.webmasters({ version: 'v3', auth });
const q = async (s, e, dims, extra = {}) => (await wm.searchanalytics.query({
  siteUrl: SITE, requestBody: { startDate: s, endDate: e, dimensions: dims, rowLimit: 25000, dataState: 'all', ...extra },
})).data.rows ?? [];

const iso = d => d.toISOString().slice(0, 10);
const t = new Date();
const d = (n) => { const x = new Date(t); x.setUTCDate(x.getUTCDate() - n); return iso(x); };

console.log('=== 14 DERNIERS JOURS (dataState: all — les 2-3 derniers jours sont incomplets) ===');
const daily = await q(d(16), d(0), ['date']);
for (const r of daily) console.log(`  ${r.keys[0]}  ${String(r.clicks).padStart(2)} clics  ${String(r.impressions).padStart(4)} imp  pos ${r.position.toFixed(1)}`);

console.log('\n=== CLICS PAR PAGE — 7 derniers jours ===');
const p7 = (await q(d(8), d(0), ['page'])).filter(r => r.clicks > 0).sort((a, b) => b.clicks - a.clicks);
for (const r of p7) console.log(`  ${String(r.clicks).padStart(2)} clics  ${r.keys[0].replace('https://www.couverturegironde.fr', '') || '/'}  (${r.impressions} imp, pos ${r.position.toFixed(1)})`);
console.log(`  TOTAL clics 7j : ${p7.reduce((s, r) => s + r.clicks, 0)}`);

console.log('\n=== REQUÊTES AVEC CLICS — 7 derniers jours ===');
const q7 = (await q(d(8), d(0), ['query'])).filter(r => r.clicks > 0).sort((a, b) => b.clicks - a.clicks);
for (const r of q7) console.log(`  ${String(r.clicks).padStart(2)} clics  « ${r.keys[0]} »  (${r.impressions} imp, pos ${r.position.toFixed(1)})`);
console.log(`  TOTAL attribué : ${q7.reduce((s, r) => s + r.clicks, 0)} clics sur ${p7.reduce((s, r) => s + r.clicks, 0)}`);

console.log('\n=== CENON — 28 derniers jours ===');
for (const r of (await q(d(29), d(0), ['query'], { dimensionFilterGroups: [{ filters: [{ dimension: 'query', operator: 'contains', expression: 'cenon' }] }] })).sort((a,b)=>b.impressions-a.impressions))
  console.log(`  « ${r.keys[0]} »  ${r.clicks} clics / ${r.impressions} imp / pos ${r.position.toFixed(1)}`);
const cenonPage = await q(d(29), d(0), ['page'], { dimensionFilterGroups: [{ filters: [{ dimension: 'page', operator: 'contains', expression: 'cenon' }] }] });
for (const r of cenonPage) console.log(`  PAGE ${r.keys[0].replace('https://www.couverturegironde.fr','')} : ${r.clicks} clics / ${r.impressions} imp / pos ${r.position.toFixed(1)}`);

console.log('\n=== NETTOYAGE / DÉMOUSSAGE — 28 derniers jours ===');
for (const r of (await q(d(29), d(0), ['query'], { dimensionFilterGroups: [{ filters: [{ dimension: 'query', operator: 'contains', expression: 'nettoyage' }] }] })).sort((a,b)=>b.impressions-a.impressions).slice(0,10))
  console.log(`  « ${r.keys[0]} »  ${r.clicks} clics / ${r.impressions} imp / pos ${r.position.toFixed(1)}`);
