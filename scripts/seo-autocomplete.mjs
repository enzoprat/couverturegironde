#!/usr/bin/env node
/**
 * Google Autocomplete — récolte les suggestions de l'endpoint public.
 *
 * Pour chaque seed (mot-clé), on récupère les complétions de Google et on
 * itère avec a-z + chiffres + qui/quoi/comment pour étendre la couverture.
 *
 * Endpoint : http://suggestqueries.google.com/complete/search?client=firefox&q=...
 * (réponse JSON public, no key, rate-limited à ~50-100 req/min)
 *
 * Output : seo-audit/raw/autocomplete-{date}.json + reports/.md
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

const SEEDS = [
  // Cœur de métier (intention transactionnelle)
  'couvreur bordeaux',
  'couvreur gironde',
  'couvreur 33',
  'couvreur mérignac',
  'couvreur pessac',
  'couvreur talence',
  'couvreur bègles',
  'couvreur villenave',
  'couvreur arcachon',
  'couvreur libourne',
  'couvreur le bouscat',
  'couvreur gradignan',
  'couvreur eysines',
  // Services (transactionnel + commercial)
  'démoussage toiture bordeaux',
  'nettoyage toiture bordeaux',
  'réparation toiture bordeaux',
  'urgence toiture bordeaux',
  'fuite toiture bordeaux',
  'zinguerie bordeaux',
  'gouttière bordeaux',
  'velux bordeaux',
  'charpente bordeaux',
  'hydrofuge toiture bordeaux',
  'faîtage toiture bordeaux',
  'toiture neuve bordeaux',
  'isolation toiture bordeaux',
  // Prix / informationnel
  'prix démoussage toiture',
  'prix nettoyage toiture',
  'prix réfection toiture',
  'tarif couvreur',
  'devis toiture bordeaux',
  // Questions long-tail
  'comment démousser toiture',
  'quand démousser toiture',
  'pourquoi démousser toiture',
  'aide toiture 2026',
];

const QUESTIONS = ['qui', 'quoi', 'comment', 'quand', 'où', 'pourquoi', 'combien', 'quel', 'quelle'];
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchSuggestions(query) {
  // Utilise l'endpoint Firefox qui retourne du JSON propre
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=fr&gl=fr&q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; couverturegironde-seo-audit)' },
    });
    if (!res.ok) return [];
    const data = await res.json();
    // Format : [query, [suggestion1, suggestion2, ...]]
    return Array.isArray(data) && Array.isArray(data[1]) ? data[1] : [];
  } catch (err) {
    return [];
  }
}

async function expandSeed(seed) {
  const allSuggestions = new Set();
  const queries = [
    seed,
    ...QUESTIONS.map((q) => `${q} ${seed}`),
    ...ALPHABET.map((l) => `${seed} ${l}`),
  ];

  let done = 0;
  for (const q of queries) {
    const sugg = await fetchSuggestions(q);
    sugg.forEach((s) => allSuggestions.add(s.toLowerCase()));
    done++;
    if (done % 5 === 0) await sleep(200); // rate limit
  }

  return [...allSuggestions];
}

async function main() {
  console.log(`🔎 Google Autocomplete — ${SEEDS.length} seeds`);
  const start = Date.now();

  const results = {};
  let totalSeen = 0;
  for (let i = 0; i < SEEDS.length; i++) {
    const seed = SEEDS[i];
    process.stdout.write(`   [${i + 1}/${SEEDS.length}] ${seed} ... `);
    const sugg = await expandSeed(seed);
    results[seed] = sugg;
    totalSeen += sugg.length;
    console.log(`${sugg.length} suggestions`);
  }

  const elapsed = Math.round((Date.now() - start) / 1000);
  console.log(`\n⏱  ${elapsed}s — ${totalSeen} suggestions cumulées (avec doublons inter-seeds)\n`);

  // Dedup global + buckets par intention
  const allUnique = new Set();
  for (const list of Object.values(results)) {
    for (const s of list) allUnique.add(s);
  }
  console.log(`🎯 ${allUnique.size} suggestions uniques au total`);

  const rawPath = path.join(OUT_RAW, `autocomplete-${today}.json`);
  fs.writeFileSync(
    rawPath,
    JSON.stringify({ runAt: new Date().toISOString(), seeds: SEEDS, results, totalUnique: allUnique.size }, null, 2),
  );

  // Render markdown
  const mdPath = path.join(OUT_REPORTS, `autocomplete-${today}.md`);
  fs.writeFileSync(mdPath, renderMarkdown(results, allUnique));

  console.log(`\n✅ Raw : ${path.relative(projectRoot, rawPath)}`);
  console.log(`✅ Report: ${path.relative(projectRoot, mdPath)}`);
}

function classifyIntent(query) {
  // Heuristique simple
  if (/\b(prix|tarif|coût|combien|cout)\b/i.test(query)) return 'commercial';
  if (/\b(qui|quoi|comment|quand|pourquoi|où|ou)\b/i.test(query)) return 'informational';
  if (/\b(devis|gratuit|urgence|près de|autour|proche)\b/i.test(query)) return 'transactional';
  if (/\b(meilleur|avis|comparatif|top)\b/i.test(query)) return 'navigational';
  return 'transactional';
}

function classifyTheme(query) {
  if (/démouss|nettoy|hydrofuge|entretien/i.test(query)) return 'entretien';
  if (/urgenc|fuit|tempête|dépanage/i.test(query)) return 'urgence';
  if (/zinguer|goutti/i.test(query)) return 'zinguerie';
  if (/velux|fenêtre/i.test(query)) return 'velux';
  if (/charpent/i.test(query)) return 'charpente';
  if (/faîtage|faitage/i.test(query)) return 'faitage';
  if (/neuve|neuf|construction|réfection|refection/i.test(query)) return 'gros-oeuvre';
  if (/répar|tuil/i.test(query)) return 'reparation';
  return 'généraliste';
}

function classifyGeo(query) {
  const villes = ['bordeaux', 'mérignac', 'merignac', 'pessac', 'talence', 'bègles', 'begles', 'villenave', 'arcachon', 'libourne', 'le bouscat', 'gradignan', 'eysines', 'bruges'];
  for (const v of villes) {
    if (query.includes(v)) return v.replace(/é/g, 'e').replace(/è/g, 'e');
  }
  if (/\b(gironde|33|sud[- ]ouest)\b/i.test(query)) return 'gironde';
  return 'non-géo';
}

function renderMarkdown(results, allUnique) {
  const lines = [];
  lines.push(`# Google Autocomplete — Récolte`);
  lines.push(``);
  lines.push(`**Date** : ${new Date().toISOString()}`);
  lines.push(`**Seeds** : ${Object.keys(results).length}`);
  lines.push(`**Suggestions uniques** : ${allUnique.size}`);
  lines.push(``);

  // Classification globale
  const byIntent = {};
  const byTheme = {};
  const byGeo = {};
  for (const q of allUnique) {
    const i = classifyIntent(q);
    const t = classifyTheme(q);
    const g = classifyGeo(q);
    byIntent[i] = (byIntent[i] || 0) + 1;
    byTheme[t] = (byTheme[t] || 0) + 1;
    byGeo[g] = (byGeo[g] || 0) + 1;
  }

  lines.push(`## Distribution par intention`);
  lines.push(``);
  lines.push(`| Intention | Suggestions |`);
  lines.push(`|---|---|`);
  for (const [k, v] of Object.entries(byIntent).sort((a, b) => b[1] - a[1])) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push(``);
  lines.push(`## Distribution par thématique`);
  lines.push(``);
  lines.push(`| Thème | Suggestions |`);
  lines.push(`|---|---|`);
  for (const [k, v] of Object.entries(byTheme).sort((a, b) => b[1] - a[1])) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push(``);
  lines.push(`## Distribution géographique`);
  lines.push(``);
  lines.push(`| Géo | Suggestions |`);
  lines.push(`|---|---|`);
  for (const [k, v] of Object.entries(byGeo).sort((a, b) => b[1] - a[1])) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push(``);
  lines.push(`## Suggestions par seed`);
  lines.push(``);
  for (const [seed, sugg] of Object.entries(results)) {
    if (!sugg.length) continue;
    lines.push(`### \`${seed}\` (${sugg.length})`);
    lines.push(``);
    for (const s of sugg.slice(0, 50)) {
      lines.push(`- ${s}`);
    }
    if (sugg.length > 50) lines.push(`- … (+${sugg.length - 50})`);
    lines.push(``);
  }
  return lines.join('\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
