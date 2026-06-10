#!/usr/bin/env node
/**
 * GSC Quick Wins — analyse croisée GSC + autocomplete.
 *
 * Identifie :
 *  1. Quick wins prioritaires (pos 5-20 + impressions ≥ 30 + CTR faible)
 *     → opportunité immédiate de gagner du clic en optimisant title/meta
 *  2. Pages avec position dégradée vs potentiel
 *  3. Requêtes captées mais URL non-cliquée (CTR très faible)
 *  4. Trous : suggestions autocomplete sans page existante sur le site
 *  5. Sujets émergents (saisonnalité, tendance)
 *
 * Output : seo-audit/reports/quickwins-{date}.md
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const GSC_DIR = path.join(projectRoot, '_gsc-data');
const AUTOCOMPLETE_DIR = path.join(projectRoot, 'seo-audit', 'raw');
const OUT_REPORTS = path.join(projectRoot, 'seo-audit', 'reports');

const today = new Date().toISOString().slice(0, 10);

function loadLatestCSV(dir, exactPrefix) {
  // Match exact : exactPrefix doit être suivi directement par YYYY-MM-DD.csv
  // ex: "queries-" matche "queries-2026-06-09.csv" mais pas "queries-by-page-...".
  const re = new RegExp(`^${exactPrefix.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\d{4}-\\d{2}-\\d{2}\\.csv$`);
  const files = fs.readdirSync(dir).filter((f) => re.test(f));
  files.sort();
  const latest = files[files.length - 1];
  if (!latest) throw new Error(`Aucun ${exactPrefix}YYYY-MM-DD.csv dans ${dir}`);
  return { path: path.join(dir, latest), content: fs.readFileSync(path.join(dir, latest), 'utf8') };
}

function parseCSV(content) {
  const lines = content.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map((line) => {
    // Parsing CSV avec support des champs quoted
    const fields = [];
    let cur = '', inQuote = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') { inQuote = !inQuote; }
      else if (c === ',' && !inQuote) { fields.push(cur); cur = ''; }
      else cur += c;
    }
    fields.push(cur);
    const row = {};
    headers.forEach((h, i) => (row[h.trim()] = fields[i] ?? ''));
    return row;
  });
}

function parseGSCRow(row) {
  return {
    query: row.query,
    page: row.page,
    clicks: Number(row.clicks) || 0,
    impressions: Number(row.impressions) || 0,
    ctr: Number(String(row.ctr).replace('%', '')) || 0,
    position: Number(row.position) || 0,
  };
}

function main() {
  console.log(`📊 GSC Quick Wins analysis\n`);

  // Load latest GSC + autocomplete
  const queriesFile = loadLatestCSV(GSC_DIR, 'queries-');
  const pagesFile = loadLatestCSV(GSC_DIR, 'pages-');
  const qbpFile = loadLatestCSV(GSC_DIR, 'queries-by-page-');
  console.log(`   Queries CSV  : ${path.relative(projectRoot, queriesFile.path)}`);
  console.log(`   Pages CSV    : ${path.relative(projectRoot, pagesFile.path)}`);
  console.log(`   QbP CSV      : ${path.relative(projectRoot, qbpFile.path)}\n`);

  // Patterns à exclure : requêtes brand parasites qui captent des impressions
  // hors thématique sans aucune chance de clic vers nous.
  // Voir seo-audit/RAPPORT.md → "Investigation bruit GSC gironde-toiture-service.fr"
  // (2026-06-10 : 3242 imp/mois sur des requêtes blog éditorial Byaeni).
  const NOISE_PATTERNS = [
    /gironde-toiture-service\.fr/i,
  ];
  const isNoise = (query) =>
    !!query && NOISE_PATTERNS.some((re) => re.test(query));

  const queriesRaw = parseCSV(queriesFile.content).map(parseGSCRow);
  const queries = queriesRaw.filter((q) => !isNoise(q.query));
  const noiseCount = queriesRaw.length - queries.length;
  if (noiseCount > 0) {
    const noiseImp = queriesRaw.filter((q) => isNoise(q.query)).reduce((s, q) => s + q.impressions, 0);
    console.log(`   ⚠ Filtré ${noiseCount} requêtes bruit (${noiseImp} imp) → cf. RAPPORT.md\n`);
  }
  const pages = parseCSV(pagesFile.content).map(parseGSCRow);
  const qbp = parseCSV(qbpFile.content).map(parseGSCRow).filter((r) => !isNoise(r.query));

  // 1. Quick wins : position 5-20 + impressions ≥ 30 + CTR faible
  const quickWins = queries
    .filter((q) => q.position >= 4 && q.position <= 20 && q.impressions >= 30)
    .map((q) => {
      // CTR attendu par position (médiane SERP 2025-2026 desktop+mobile mix)
      const expectedCTR =
        q.position <= 3 ? 25 : q.position <= 5 ? 10 : q.position <= 10 ? 4 : q.position <= 15 ? 1.5 : 0.6;
      const missedClicks = Math.max(0, Math.round((expectedCTR / 100 - q.ctr / 100) * q.impressions));
      return { ...q, expectedCTR, missedClicks };
    })
    .filter((q) => q.missedClicks > 0)
    .sort((a, b) => b.missedClicks - a.missedClicks);

  // 2. Pages à fort impression mais 0 clic
  const lowCTRPages = pages
    .filter((p) => p.impressions >= 100 && p.clicks === 0)
    .sort((a, b) => b.impressions - a.impressions);

  // 3. Pages avec position acceptable (≤ 20) mais CTR faible
  const lowCTRGoodPos = pages
    .filter((p) => p.position <= 20 && p.impressions >= 50)
    .map((p) => {
      const expectedCTR = p.position <= 5 ? 10 : p.position <= 10 ? 4 : p.position <= 15 ? 1.5 : 0.6;
      const missedClicks = Math.max(0, Math.round((expectedCTR / 100 - p.ctr / 100) * p.impressions));
      return { ...p, expectedCTR, missedClicks };
    })
    .filter((p) => p.missedClicks > 0)
    .sort((a, b) => b.missedClicks - a.missedClicks);

  // 4. Trous autocomplete : suggestions populaires sans match dans GSC
  let acData = { results: {} };
  try {
    const acFile = fs.readdirSync(AUTOCOMPLETE_DIR).filter((f) => f.startsWith('autocomplete-')).sort().pop();
    if (acFile) {
      acData = JSON.parse(fs.readFileSync(path.join(AUTOCOMPLETE_DIR, acFile), 'utf8'));
    }
  } catch {}

  const allAutocomplete = new Set();
  for (const list of Object.values(acData.results || {})) {
    for (const s of list) allAutocomplete.add(s);
  }
  const knownQueries = new Set(queries.map((q) => q.query.toLowerCase()));

  // Suggestions intéressantes = locale (bordeaux/gironde/communes), sans GSC
  const locales = ['bordeaux', 'gironde', 'mérignac', 'merignac', 'pessac', 'talence', 'bègles', 'begles', 'villenave', 'arcachon', 'libourne'];
  const topicWords = ['couvreur', 'toiture', 'démouss', 'demouss', 'nettoyage', 'réparation', 'reparation', 'urgence', 'fuite', 'zinguer', 'gouttière', 'goutti', 'velux', 'charpente', 'faîtage', 'faitage', 'hydrofuge', 'prix', 'tarif', 'devis'];

  const gaps = [...allAutocomplete]
    .filter((s) => !knownQueries.has(s))
    .filter((s) => locales.some((l) => s.includes(l)))
    .filter((s) => topicWords.some((t) => s.includes(t)))
    .slice(0, 100);

  // Write report
  const lines = [];
  lines.push(`# Quick Wins — Analyse GSC + Autocomplete`);
  lines.push(``);
  lines.push(`**Date** : ${new Date().toISOString()}`);
  lines.push(`**Période GSC** : ${queries.length} requêtes, ${pages.length} pages`);
  lines.push(``);
  lines.push(`## 1. Quick wins requêtes (position 4-20, ≥ 30 impressions, manque-à-gagner > 0)`);
  lines.push(``);
  lines.push(`Hypothèse CTR attendu : pos 1-3 = 25%, pos 4-5 = 10%, pos 6-10 = 4%, pos 11-15 = 1.5%, pos 16-20 = 0.6%`);
  lines.push(``);
  lines.push(`| Requête | Pos | Imp | Clics | CTR | CTR attendu | Manque-à-gagner |`);
  lines.push(`|---|---|---|---|---|---|---|`);
  for (const q of quickWins.slice(0, 30)) {
    lines.push(`| \`${q.query}\` | ${q.position.toFixed(1)} | ${q.impressions} | ${q.clicks} | ${q.ctr.toFixed(2)}% | ${q.expectedCTR}% | **+${q.missedClicks}** |`);
  }
  lines.push(``);
  const totalMissed = quickWins.reduce((s, q) => s + q.missedClicks, 0);
  lines.push(`**Total manque-à-gagner mensuel estimé : ${totalMissed} clics sur 28 jours**`);
  lines.push(``);

  lines.push(`## 2. Pages à fort potentiel (≥ 100 imp, 0 clic)`);
  lines.push(``);
  lines.push(`| Page | Imp | Pos |`);
  lines.push(`|---|---|---|`);
  for (const p of lowCTRPages.slice(0, 20)) {
    lines.push(`| \`${p.page.replace('https://www.couverturegironde.fr', '')}\` | ${p.impressions} | ${p.position.toFixed(1)} |`);
  }
  lines.push(``);

  lines.push(`## 3. Pages avec position correcte mais CTR sous-optimal`);
  lines.push(``);
  lines.push(`| Page | Pos | Imp | Clics | CTR | Manque-à-gagner |`);
  lines.push(`|---|---|---|---|---|---|`);
  for (const p of lowCTRGoodPos.slice(0, 20)) {
    lines.push(`| \`${p.page.replace('https://www.couverturegironde.fr', '')}\` | ${p.position.toFixed(1)} | ${p.impressions} | ${p.clicks} | ${p.ctr.toFixed(2)}% | +${p.missedClicks} |`);
  }
  lines.push(``);

  lines.push(`## 4. Trous : suggestions Google Autocomplete locales non-captées par GSC`);
  lines.push(``);
  lines.push(`(${gaps.length} suggestions où on n'a aucun signal GSC actuel — opportunités à cibler par page ou enrichissement contenu)`);
  lines.push(``);

  // Regroupe par mot-clé principal
  const groups = {};
  for (const g of gaps) {
    let key = 'autres';
    if (/couvreur.*bordeaux/i.test(g)) key = 'couvreur bordeaux';
    else if (/couvreur.*gironde/i.test(g)) key = 'couvreur gironde';
    else if (/couvreur.*mérignac/i.test(g) || /couvreur.*merignac/i.test(g)) key = 'couvreur mérignac';
    else if (/couvreur.*pessac/i.test(g)) key = 'couvreur pessac';
    else if (/couvreur.*talence/i.test(g)) key = 'couvreur talence';
    else if (/démouss/i.test(g) || /demouss/i.test(g)) key = 'démoussage';
    else if (/nettoyage/i.test(g)) key = 'nettoyage';
    else if (/urgence|fuite/i.test(g)) key = 'urgence';
    else if (/velux/i.test(g)) key = 'velux';
    else if (/charpent/i.test(g)) key = 'charpente';
    else if (/zinguer|goutti/i.test(g)) key = 'zinguerie';
    else if (/prix|tarif|devis/i.test(g)) key = 'prix-devis';
    groups[key] = groups[key] ?? [];
    groups[key].push(g);
  }

  for (const [k, items] of Object.entries(groups).sort((a, b) => b[1].length - a[1].length)) {
    lines.push(`### ${k} (${items.length})`);
    lines.push(``);
    for (const s of items.slice(0, 30)) {
      lines.push(`- ${s}`);
    }
    if (items.length > 30) lines.push(`- … (+${items.length - 30})`);
    lines.push(``);
  }

  // Bonus : par page, le top des requêtes générant le plus d'impressions, croisé au CTR
  lines.push(`## 5. Top requêtes par page (croisé)`);
  lines.push(``);

  // Group qbp by page
  const byPage = {};
  for (const r of qbp) {
    byPage[r.page] = byPage[r.page] ?? [];
    byPage[r.page].push(r);
  }
  const pagesSortedByImp = Object.entries(byPage)
    .map(([p, rows]) => ({ page: p, total: rows.reduce((s, r) => s + r.impressions, 0), rows }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 15);

  for (const { page, total, rows } of pagesSortedByImp) {
    lines.push(`### \`${page.replace('https://www.couverturegironde.fr', '')}\` (${total} imp)`);
    lines.push(``);
    lines.push(`| Requête | Pos | Imp | Clics | CTR |`);
    lines.push(`|---|---|---|---|---|`);
    for (const r of rows.sort((a, b) => b.impressions - a.impressions).slice(0, 10)) {
      lines.push(`| \`${r.query}\` | ${r.position.toFixed(1)} | ${r.impressions} | ${r.clicks} | ${r.ctr.toFixed(2)}% |`);
    }
    lines.push(``);
  }

  const outPath = path.join(OUT_REPORTS, `quickwins-${today}.md`);
  fs.writeFileSync(outPath, lines.join('\n'));

  console.log(`✅ Rapport : ${path.relative(projectRoot, outPath)}`);
  console.log(`\n📈 Résumé :`);
  console.log(`   ${quickWins.length} quick wins requêtes`);
  console.log(`   ${lowCTRPages.length} pages 0-clic à fort potentiel`);
  console.log(`   ${gaps.length} suggestions autocomplete non-captées`);
  console.log(`   Manque-à-gagner total estimé : ${totalMissed} clics/28j`);
}

main();
