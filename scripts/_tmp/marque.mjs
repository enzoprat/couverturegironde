import fs from 'node:fs';
import { google } from 'googleapis';
const SITE = 'sc-domain:couverturegironde.fr';
const cj = JSON.parse(fs.readFileSync('_secrets/gsc-oauth-client.json', 'utf8'));
const { client_id, client_secret } = cj.installed ?? cj.web ?? {};
const auth = new google.auth.OAuth2(client_id, client_secret);
auth.setCredentials(JSON.parse(fs.readFileSync('_secrets/gsc-oauth-token.json', 'utf8')));
const wm = google.webmasters({ version: 'v3', auth });
const q = async (s, e) => (await wm.searchanalytics.query({ siteUrl: SITE, requestBody: { startDate: s, endDate: e, dimensions: ['query'], rowLimit: 25000, dataState: 'final' } })).data.rows ?? [];
const W = { 'AVANT refonte (04/06→04/07)': ['2026-06-04', '2026-07-04'], 'APRÈS (05/08→02/09)': ['2026-08-05', '2026-09-02'] };
const CLES = ['couverture gironde', 'couvreur bordeaux', 'couvreur gironde', 'couvreur mérignac', 'couvreur merignac'];
const res = {};
for (const [lbl, w] of Object.entries(W)) {
  const rows = await q(...w);
  res[lbl] = Object.fromEntries(rows.map(r => [r.keys[0], r]));
}
console.log('=== REQUÊTES CLÉS : AVANT vs APRÈS la refonte du 05/07 ===');
console.table(CLES.map(k => {
  const a = res['AVANT refonte (04/06→04/07)'][k], b = res['APRÈS (05/08→02/09)'][k];
  return {
    requete: k,
    pos_avant: a ? +a.position.toFixed(1) : '—', pos_apres: b ? +b.position.toFixed(1) : '—',
    delta: a && b ? +(b.position - a.position).toFixed(1) : '—',
    imp_avant: a?.impressions ?? 0, imp_apres: b?.impressions ?? 0,
    clics_avant: a?.clicks ?? 0, clics_apres: b?.clicks ?? 0,
  };
}));
