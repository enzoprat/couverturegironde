#!/usr/bin/env node
/**
 * GSC Pull — script Node qui pull les données Search Console via API.
 *
 * Setup (à faire 1 fois) :
 *   1. Google Cloud Console → créer un projet (ou réutiliser)
 *   2. APIs & Services → enable "Google Search Console API"
 *   3. IAM & Admin → Service Accounts → CREATE → ex: claude-gsc-reader
 *   4. Sur ce service account → Keys → ADD KEY → JSON → télécharger
 *   5. Renommer le fichier en `_secrets/gsc-service-account.json`
 *   6. Note l'email du service account (xxxxx@xxxxx.iam.gserviceaccount.com)
 *   7. Sur GSC (search.google.com/search-console) → propriété couverturegironde.fr
 *      → Settings → Users and permissions → ADD USER → coller l'email
 *      du service account, Permission = Restricted
 *
 * Usage :
 *   npm run seo:gsc                    # 28 derniers jours (défaut)
 *   npm run seo:gsc -- --days 90       # 90 derniers jours
 *   npm run seo:gsc -- --rows 1000     # max 1000 lignes par dimension
 *
 * Output :
 *   _gsc-data/queries-{YYYY-MM-DD}.csv  (requêtes top + impressions + clics + CTR + position)
 *   _gsc-data/pages-{YYYY-MM-DD}.csv    (pages top)
 *   _gsc-data/devices-{YYYY-MM-DD}.csv  (desktop/mobile/tablet)
 *   _gsc-data/countries-{YYYY-MM-DD}.csv
 *   _gsc-data/queries-by-page-{YYYY-MM-DD}.csv  (croisé page × requête, top 500)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { google } from 'googleapis';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const KEY_PATH = path.join(projectRoot, '_secrets', 'gsc-service-account.json');
const OUT_DIR = path.join(projectRoot, '_gsc-data');
const SITE_URL = 'sc-domain:couverturegironde.fr';
const SITE_URL_FALLBACK = 'https://www.couverturegironde.fr/';

// CLI args
const args = process.argv.slice(2);
function arg(name, def) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 ? args[idx + 1] : def;
}
const DAYS = Number(arg('days', '28'));
const ROW_LIMIT = Number(arg('rows', '500'));

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

function todayISO() {
  return isoDate(new Date());
}

function daysAgoISO(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return isoDate(d);
}

const OAUTH_CLIENT_PATH = path.join(projectRoot, '_secrets', 'gsc-oauth-client.json');
const OAUTH_TOKEN_PATH = path.join(projectRoot, '_secrets', 'gsc-oauth-token.json');

fs.mkdirSync(OUT_DIR, { recursive: true });

/**
 * Stratégie d'auth :
 *  1. Si refresh_token OAuth dispo → l'utiliser (mode utilisateur, fiable
 *     avec Domain Properties).
 *  2. Sinon, fallback sur Service Account (mode app, mais nécessite que
 *     l'email du SA soit ajouté à la propriété GSC, ce que GSC refuse
 *     parfois sur Domain Properties).
 */
let auth;
if (fs.existsSync(OAUTH_TOKEN_PATH) && fs.existsSync(OAUTH_CLIENT_PATH)) {
  const clientJson = JSON.parse(fs.readFileSync(OAUTH_CLIENT_PATH, 'utf8'));
  const { client_id, client_secret } = clientJson.installed ?? clientJson.web ?? {};
  const tokens = JSON.parse(fs.readFileSync(OAUTH_TOKEN_PATH, 'utf8'));
  const oauth2 = new google.auth.OAuth2(client_id, client_secret);
  oauth2.setCredentials(tokens);
  auth = oauth2;
  console.log(`🔑 Auth : OAuth user (refresh_token)`);
} else if (fs.existsSync(KEY_PATH)) {
  auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  console.log(`🔑 Auth : Service Account`);
} else {
  console.error(`❌ Aucune auth configurée.`);
  console.error(`   → Soit clé service account : ${KEY_PATH}`);
  console.error(`   → Soit OAuth : lance \`npm run seo:gsc:auth\` après avoir`);
  console.error(`     déposé _secrets/gsc-oauth-client.json (cf. scripts/SETUP-GSC.md)`);
  process.exit(1);
}

const webmasters = google.webmasters({ version: 'v3', auth });

// CSV utils
function csvEscape(v) {
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function rowsToCSV(headers, rows) {
  const head = headers.join(',');
  const body = rows.map((r) => headers.map((h) => csvEscape(r[h])).join(',')).join('\n');
  return `${head}\n${body}\n`;
}

async function querySC(dimensions, options = {}) {
  const requestBody = {
    startDate: daysAgoISO(DAYS),
    endDate: todayISO(),
    dimensions,
    rowLimit: ROW_LIMIT,
    dataState: 'all',
    ...options,
  };

  // Essai sur sc-domain: en priorité, fallback URL si besoin
  const sites = [SITE_URL, SITE_URL_FALLBACK];
  let lastErr = null;
  for (const siteUrl of sites) {
    try {
      const res = await webmasters.searchanalytics.query({
        siteUrl,
        requestBody,
      });
      return { rows: res.data.rows ?? [], siteUrl };
    } catch (err) {
      lastErr = err;
      const code = err?.code ?? err?.response?.status;
      if (code === 403 || code === 404) {
        // Pas accès à cette propriété, on tente la suivante
        continue;
      }
      throw err;
    }
  }
  throw lastErr ?? new Error('No GSC property accessible');
}

function gscRowToFlat(row, dimNames) {
  const out = {};
  dimNames.forEach((d, i) => (out[d] = row.keys?.[i] ?? ''));
  out.clicks = row.clicks ?? 0;
  out.impressions = row.impressions ?? 0;
  out.ctr = ((row.ctr ?? 0) * 100).toFixed(2) + '%';
  out.position = (row.position ?? 0).toFixed(2);
  return out;
}

async function pullDimension(name, dimensions) {
  process.stdout.write(`  • ${name}... `);
  const { rows, siteUrl } = await querySC(dimensions);
  const flat = rows.map((r) => gscRowToFlat(r, dimensions));
  const headers = [...dimensions, 'clicks', 'impressions', 'ctr', 'position'];
  const csv = rowsToCSV(headers, flat);
  const outPath = path.join(OUT_DIR, `${name}-${todayISO()}.csv`);
  fs.writeFileSync(outPath, csv);
  console.log(`✓ ${rows.length} lignes → ${path.relative(projectRoot, outPath)} (${siteUrl})`);
  return flat;
}

async function main() {
  console.log(`📊 GSC Pull — ${DAYS} derniers jours, max ${ROW_LIMIT} lignes/dimension`);
  console.log(`   ${daysAgoISO(DAYS)} → ${todayISO()}\n`);

  try {
    const queries = await pullDimension('queries', ['query']);
    const pages = await pullDimension('pages', ['page']);
    await pullDimension('devices', ['device']);
    await pullDimension('countries', ['country']);
    await pullDimension('queries-by-page', ['page', 'query']);

    // Stats summary
    const totalClicks = queries.reduce((s, r) => s + Number(String(r.clicks).replace('%', '')), 0);
    const totalImp = queries.reduce((s, r) => s + Number(String(r.impressions).replace('%', '')), 0);
    const overallCTR = totalImp ? ((totalClicks / totalImp) * 100).toFixed(2) : '0';

    console.log(`\n📈 Résumé : ${totalClicks} clics / ${totalImp} impressions / CTR ${overallCTR}%`);
    console.log(`\n✅ Données disponibles dans _gsc-data/`);
  } catch (err) {
    console.error(`\n❌ Erreur GSC : ${err.message}`);
    if (err.message?.includes('insufficient') || err.code === 403) {
      console.error(`   → Le service account n'a peut-être pas accès à la propriété.`);
      console.error(`   → Va sur https://search.google.com/search-console`);
      console.error(`   → Propriété → Settings → Users and permissions → ADD USER`);
      console.error(`   → Email du service account (voir la clé JSON, champ "client_email")`);
    }
    process.exit(1);
  }
}

main();
