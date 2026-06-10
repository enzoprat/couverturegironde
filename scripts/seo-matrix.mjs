#!/usr/bin/env node
/**
 * Matrice Service × Ville — identifie les trous SEO local prioritaires.
 *
 * Pour chaque combinaison (service, ville cible) :
 *  - Page dédiée existante ?
 *  - Si oui : signaux GSC (impressions, position) sur cette page
 *  - Si non : suggestions autocomplete pour ce couple (preuve de demande)
 *
 * Output : seo-audit/reports/matrix-{date}.md
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const GSC_DIR = path.join(projectRoot, '_gsc-data');
const AC_DIR = path.join(projectRoot, 'seo-audit', 'raw');
const OUT_REPORTS = path.join(projectRoot, 'seo-audit', 'reports');

const today = new Date().toISOString().slice(0, 10);

// === Services ===
const SERVICES = [
  { slug: 'demoussage', label: 'Démoussage', keywords: ['démoussage', 'demoussage', 'mousse'] },
  { slug: 'nettoyage', label: 'Nettoyage', keywords: ['nettoyage', 'nettoyer'] },
  { slug: 'hydrofuge', label: 'Hydrofuge', keywords: ['hydrofuge'] },
  { slug: 'reparation', label: 'Réparation', keywords: ['réparation', 'reparation'] },
  { slug: 'urgence', label: 'Urgence fuite', keywords: ['urgence', 'fuite'] },
  { slug: 'zinguerie', label: 'Zinguerie', keywords: ['zinguerie', 'gouttière', 'gouttiere'] },
  { slug: 'velux', label: 'Velux', keywords: ['velux'] },
  { slug: 'charpente', label: 'Charpente', keywords: ['charpente'] },
  { slug: 'neuve', label: 'Toiture neuve', keywords: ['neuve', 'neuf'] },
  { slug: 'faitage', label: 'Faîtage', keywords: ['faîtage', 'faitage'] },
  { slug: 'couvreur', label: 'Couvreur (hub)', keywords: ['couvreur'] },
];

// === Villes prioritaires (par densité population + signaux GSC) ===
const VILLES = [
  { slug: 'bordeaux', label: 'Bordeaux', priorité: 1 },
  { slug: 'merignac', label: 'Mérignac', priorité: 1 },
  { slug: 'pessac', label: 'Pessac', priorité: 1 },
  { slug: 'talence', label: 'Talence', priorité: 1 },
  { slug: 'begles', label: 'Bègles', priorité: 2 },
  { slug: 'villenave-dornon', label: "Villenave-d'Ornon", priorité: 2 },
  { slug: 'le-bouscat', label: 'Le Bouscat', priorité: 2 },
  { slug: 'gradignan', label: 'Gradignan', priorité: 2 },
  { slug: 'eysines', label: 'Eysines', priorité: 2 },
  { slug: 'bruges', label: 'Bruges', priorité: 3 },
  { slug: 'libourne', label: 'Libourne', priorité: 2 },
  { slug: 'arcachon', label: 'Arcachon', priorité: 2 },
  { slug: 'gironde', label: 'Gironde (33)', priorité: 1 },
];

// === Pages existantes (depuis l'app/) ===
function listExistingPages() {
  const appDir = path.join(projectRoot, 'app');
  const pages = new Set();
  const walk = (dir, prefix = '') => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        // Skip /api, /[slug], etc.
        if (entry.name.startsWith('[') || entry.name === 'api' || entry.name.startsWith('.')) continue;
        walk(path.join(dir, entry.name), `${prefix}/${entry.name}`);
      } else if (entry.name === 'page.tsx' || entry.name === 'page.mdx') {
        pages.add(prefix || '/');
      }
    }
  };
  walk(appDir);
  return [...pages];
}

function findExisting(serviceSlug, villeSlug) {
  const candidates = [
    `/${serviceSlug}-toiture-${villeSlug}`,
    `/${serviceSlug}-${villeSlug}`,
    `/couvreur-${villeSlug}`,
    `/${serviceSlug}-toiture-bordeaux`, // hub services
  ];
  return candidates.find((c) => existingPages.has(c));
}

// === GSC ===
function loadCSV(prefix) {
  const re = new RegExp(`^${prefix}\\d{4}-\\d{2}-\\d{2}\\.csv$`);
  const f = fs.readdirSync(GSC_DIR).filter((x) => re.test(x)).sort().pop();
  if (!f) return [];
  const c = fs.readFileSync(path.join(GSC_DIR, f), 'utf8').trim().split('\n');
  const headers = c[0].split(',');
  return c.slice(1).map((line) => {
    const fields = [];
    let cur = '', inQuote = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (ch === '"') inQuote = !inQuote;
      else if (ch === ',' && !inQuote) { fields.push(cur); cur = ''; }
      else cur += ch;
    }
    fields.push(cur);
    const row = {};
    headers.forEach((h, i) => (row[h.trim()] = fields[i] ?? ''));
    return row;
  });
}

const existingPages = new Set(listExistingPages());

function main() {
  console.log(`📐 Matrice Service × Ville (${SERVICES.length} × ${VILLES.length} = ${SERVICES.length * VILLES.length} couples)\n`);

  const queries = loadCSV('queries-');
  const acData = (() => {
    try {
      const f = fs.readdirSync(AC_DIR).filter((x) => x.startsWith('autocomplete-')).sort().pop();
      if (!f) return { results: {} };
      return JSON.parse(fs.readFileSync(path.join(AC_DIR, f), 'utf8'));
    } catch { return { results: {} }; }
  })();
  const allAutocomplete = new Set();
  for (const list of Object.values(acData.results || {})) {
    for (const s of list) allAutocomplete.add(s);
  }

  function gscMatchScore(serviceKws, villeLabel) {
    let imp = 0, clicks = 0, bestPos = 100;
    const villeLow = villeLabel.toLowerCase();
    for (const q of queries) {
      const ql = (q.query || '').toLowerCase();
      const hasService = serviceKws.some((k) => ql.includes(k));
      const hasVille = ql.includes(villeLow) || (villeLow === 'gironde (33)' && (ql.includes('gironde') || ql.includes(' 33')));
      if (hasService && hasVille) {
        imp += Number(q.impressions) || 0;
        clicks += Number(q.clicks) || 0;
        const pos = Number(q.position) || 100;
        if (pos < bestPos) bestPos = pos;
      }
    }
    return { imp, clicks, bestPos: bestPos === 100 ? null : bestPos };
  }

  function acMatchCount(serviceKws, villeLabel) {
    const villeLow = villeLabel.toLowerCase().replace(/[éèê]/g, 'e');
    let count = 0;
    const samples = [];
    for (const s of allAutocomplete) {
      const sl = s.toLowerCase().replace(/[éèê]/g, 'e');
      const hasService = serviceKws.some((k) => sl.includes(k.replace(/[éèê]/g, 'e')));
      const hasVille = sl.includes(villeLow);
      if (hasService && hasVille) {
        count++;
        if (samples.length < 3) samples.push(s);
      }
    }
    return { count, samples };
  }

  // Build matrix
  const rows = [];
  for (const ville of VILLES) {
    for (const service of SERVICES) {
      const existing = findExisting(service.slug, ville.slug);
      const gsc = gscMatchScore(service.keywords, ville.label);
      const ac = acMatchCount(service.keywords, ville.label);

      let opportunityScore = 0;
      // Plus on a d'impressions, plus c'est urgent
      if (gsc.imp > 100) opportunityScore += 3;
      else if (gsc.imp > 30) opportunityScore += 2;
      else if (gsc.imp > 0) opportunityScore += 1;
      // Plus on est mal positionné, plus on a marge
      if (gsc.bestPos && gsc.bestPos > 10) opportunityScore += 2;
      if (gsc.bestPos && gsc.bestPos > 20) opportunityScore += 2;
      // Pas de page dédiée + signal AC = opportunité
      if (!existing && ac.count > 0) opportunityScore += 3;
      // Priorité ville (1 = forte)
      opportunityScore += (4 - ville.priorité);

      rows.push({
        ville: ville.label,
        priorité: ville.priorité,
        service: service.label,
        existing: existing || '—',
        gscImp: gsc.imp,
        gscClicks: gsc.clicks,
        gscBestPos: gsc.bestPos,
        acCount: ac.count,
        acSamples: ac.samples,
        score: opportunityScore,
      });
    }
  }

  // Top opportunities
  const opportunities = rows
    .filter((r) => !r.existing.startsWith('/couvreur-toiture-bordeaux') && r.score >= 5)
    .sort((a, b) => b.score - a.score);

  // Render
  const lines = [];
  lines.push(`# Matrice Service × Ville — Trous prioritaires`);
  lines.push(``);
  lines.push(`**Date** : ${new Date().toISOString()}`);
  lines.push(`**Couples analysés** : ${rows.length} (${SERVICES.length} services × ${VILLES.length} villes)`);
  lines.push(`**Opportunités score ≥ 5** : ${opportunities.length}`);
  lines.push(``);
  lines.push(`Méthode : score = (impressions GSC) + (mauvais classement) + (pas de page + signal Autocomplete) + (priorité ville)`);
  lines.push(``);

  lines.push(`## Top opportunités (par score)`);
  lines.push(``);
  lines.push(`| Score | Ville | Service | Page existante | GSC imp | GSC pos | Autocomplete | Action |`);
  lines.push(`|---|---|---|---|---|---|---|---|`);
  for (const r of opportunities.slice(0, 40)) {
    const action = r.existing === '—'
      ? `Créer **/${r.service.toLowerCase().replace(/ /g, '-').replace(/[éè]/g, 'e')}-${r.ville.toLowerCase().replace(/ /g, '-').replace(/[éè]/g, 'e').replace(/'/g, '-')}**`
      : `Optimiser ${r.existing}`;
    lines.push(`| ${r.score} | ${r.ville} | ${r.service} | \`${r.existing}\` | ${r.gscImp} | ${r.gscBestPos ?? '—'} | ${r.acCount > 0 ? `${r.acCount} (ex: "${r.acSamples[0]}")` : '—'} | ${action} |`);
  }
  lines.push(``);

  lines.push(`## Matrice complète`);
  lines.push(``);
  lines.push(`### Légende`);
  lines.push(`- ✅ : page dédiée existe`);
  lines.push(`- 🟡 : pas de page dédiée mais hub existant capte`);
  lines.push(`- ❌ : trou (à créer si demande prouvée)`);
  lines.push(``);

  // Cell shorthand
  const cell = (r) => {
    if (r.existing !== '—') return `✅`;
    if (r.acCount > 0 || r.gscImp > 0) return `🟡 (${r.acCount}ac/${r.gscImp}imp)`;
    return `❌`;
  };

  lines.push(`| Ville \\ Service | ${SERVICES.map((s) => s.label).join(' | ')} |`);
  lines.push(`|---|${SERVICES.map(() => '---').join('|')}|`);
  for (const ville of VILLES) {
    const row = SERVICES.map((s) => {
      const r = rows.find((x) => x.ville === ville.label && x.service === s.label);
      return cell(r);
    });
    lines.push(`| **${ville.label}** | ${row.join(' | ')} |`);
  }
  lines.push(``);

  const outPath = path.join(OUT_REPORTS, `matrix-${today}.md`);
  fs.writeFileSync(outPath, lines.join('\n'));

  console.log(`✅ Rapport : ${path.relative(projectRoot, outPath)}`);
  console.log(`\n📐 Résumé :`);
  console.log(`   ${rows.filter((r) => r.existing !== '—').length} couples couverts par une page`);
  console.log(`   ${rows.filter((r) => r.existing === '—' && r.gscImp > 0).length} trous avec signal GSC`);
  console.log(`   ${rows.filter((r) => r.existing === '—' && r.acCount > 0).length} trous avec signal Autocomplete`);
  console.log(`   ${opportunities.length} opportunités score ≥ 5`);
}

main();
