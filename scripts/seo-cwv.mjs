#!/usr/bin/env node
/**
 * Core Web Vitals — PageSpeed Insights API.
 *
 * Mesure LCP / INP / CLS / TTFB / FCP / score Performance pour les pages
 * stratégiques en mobile (priorité Google) et desktop.
 *
 * API : https://www.googleapis.com/pagespeedonline/v5/runPagespeed
 * - Gratuite, pas de clé requise (rate limit ~25 req/jour sans clé)
 * - Avec clé Google Cloud (PSI API activée) : 25 000 req/jour
 *
 * Setup (optionnel pour quota élevé) :
 *   1. console.cloud.google.com → Activer "PageSpeed Insights API"
 *   2. Credentials → Create API key
 *   3. Mettre la clé dans _secrets/psi-api-key.txt (un seul ligne, gitignored)
 *
 * Usage :
 *   npm run seo:cwv                      # 10 pages clés, mobile + desktop
 *   npm run seo:cwv -- --strategy mobile # Mobile seulement
 *   npm run seo:cwv -- --urls /,/tarifs  # URLs spécifiques (relatives)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const OUT_RAW = path.join(projectRoot, 'seo-audit', 'raw');
const OUT_REPORTS = path.join(projectRoot, 'seo-audit', 'reports');
const KEY_PATH = path.join(projectRoot, '_secrets', 'psi-api-key.txt');
fs.mkdirSync(OUT_RAW, { recursive: true });
fs.mkdirSync(OUT_REPORTS, { recursive: true });

const today = new Date().toISOString().slice(0, 10);

// CLI args
const args = process.argv.slice(2);
function arg(name, def) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 ? args[idx + 1] : def;
}
const BASE_URL = arg('base', 'https://www.couverturegironde.fr');
const STRATEGIES_RAW = arg('strategy', 'mobile,desktop').split(',');
const URLS_RAW = arg('urls', '/,/couvreur-bordeaux,/couvreur-gironde,/demoussage-toiture-bordeaux,/nettoyage-toiture-bordeaux,/reparation-toiture-bordeaux,/urgence-fuite-toiture-bordeaux,/tarifs,/couvreur-pessac,/couvreur-arcachon')
  .split(',');

const API_KEY = fs.existsSync(KEY_PATH) ? fs.readFileSync(KEY_PATH, 'utf8').trim() : null;
if (!API_KEY) {
  console.log(`ℹ  Pas de clé PSI dans ${path.relative(projectRoot, KEY_PATH)} — quota gratuit limité à ~25 req/jour`);
}

// Core Web Vitals thresholds (web.dev officiel)
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // ms
  INP: { good: 200, poor: 500 },   // ms
  CLS: { good: 0.1, poor: 0.25 },  // score
  FCP: { good: 1800, poor: 3000 }, // ms
  TTFB: { good: 800, poor: 1800 }, // ms
};

function rate(metric, value) {
  if (value == null) return '—';
  const t = THRESHOLDS[metric];
  if (!t) return '—';
  if (value <= t.good) return '✅ Bon';
  if (value <= t.poor) return '⚠ À améliorer';
  return '❌ Mauvais';
}

async function fetchPSI(url, strategy) {
  const params = new URLSearchParams({
    url,
    strategy,
    category: 'performance',
    category: 'accessibility',
    category: 'best-practices',
    category: 'seo',
    locale: 'fr',
  });
  // URLSearchParams collapse les category duplicates → on les ajoute correctement
  const search = `url=${encodeURIComponent(url)}&strategy=${strategy}&category=performance&category=accessibility&category=best-practices&category=seo&locale=fr${API_KEY ? `&key=${API_KEY}` : ''}`;
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${search}`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      const txt = await res.text();
      return { error: `HTTP ${res.status}: ${txt.slice(0, 200)}` };
    }
    const data = await res.json();
    return { data };
  } catch (err) {
    return { error: err.message };
  }
}

function extractMetrics(data) {
  if (!data) return null;
  const lhr = data.lighthouseResult;
  const audits = lhr?.audits || {};
  const categories = lhr?.categories || {};

  // Field data (CrUX réelle, si dispo)
  const cruxMetrics = data.loadingExperience?.metrics || {};
  const cruxOrigin = data.originLoadingExperience?.metrics || {};

  return {
    scores: {
      performance: Math.round((categories.performance?.score ?? 0) * 100),
      accessibility: Math.round((categories.accessibility?.score ?? 0) * 100),
      bestPractices: Math.round((categories['best-practices']?.score ?? 0) * 100),
      seo: Math.round((categories.seo?.score ?? 0) * 100),
    },
    // Lab metrics (Lighthouse simulation)
    lab: {
      LCP: audits['largest-contentful-paint']?.numericValue,
      FCP: audits['first-contentful-paint']?.numericValue,
      TBT: audits['total-blocking-time']?.numericValue,
      CLS: audits['cumulative-layout-shift']?.numericValue,
      TTFB: audits['server-response-time']?.numericValue,
      Speed: audits['speed-index']?.numericValue,
    },
    // Field data (CrUX) — la vérité Google
    field: {
      LCP: cruxMetrics.LARGEST_CONTENTFUL_PAINT_MS?.percentile,
      INP: cruxMetrics.INTERACTION_TO_NEXT_PAINT?.percentile,
      CLS: cruxMetrics.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile / 100,
      FCP: cruxMetrics.FIRST_CONTENTFUL_PAINT_MS?.percentile,
      TTFB: cruxMetrics.EXPERIMENTAL_TIME_TO_FIRST_BYTE?.percentile,
    },
    fieldOrigin: {
      LCP: cruxOrigin.LARGEST_CONTENTFUL_PAINT_MS?.percentile,
      INP: cruxOrigin.INTERACTION_TO_NEXT_PAINT?.percentile,
      CLS: cruxOrigin.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile / 100,
    },
    opportunities: Object.values(audits)
      .filter((a) => a.details?.type === 'opportunity' && a.numericValue > 100)
      .map((a) => ({ id: a.id, title: a.title, savings: a.numericValue, displayValue: a.displayValue }))
      .sort((a, b) => b.savings - a.savings)
      .slice(0, 5),
  };
}

async function main() {
  console.log(`🚀 Core Web Vitals — ${BASE_URL}`);
  console.log(`   URLs : ${URLS_RAW.length} × strategies : ${STRATEGIES_RAW.join(', ')} = ${URLS_RAW.length * STRATEGIES_RAW.length} requêtes\n`);

  const results = [];
  for (const urlPath of URLS_RAW) {
    const fullUrl = `${BASE_URL}${urlPath}`;
    for (const strategy of STRATEGIES_RAW) {
      process.stdout.write(`  ${strategy.padEnd(7)} ${urlPath.padEnd(40)} `);
      const { data, error } = await fetchPSI(fullUrl, strategy);
      if (error) {
        console.log(`❌ ${error.slice(0, 80)}`);
        results.push({ url: urlPath, strategy, error });
        continue;
      }
      const m = extractMetrics(data);
      console.log(`✓ perf:${m.scores.performance} a11y:${m.scores.accessibility} seo:${m.scores.seo}`);
      results.push({ url: urlPath, strategy, ...m });
      // Rate limit politeness
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  // Persist
  const rawPath = path.join(OUT_RAW, `cwv-${today}.json`);
  fs.writeFileSync(rawPath, JSON.stringify({ runAt: new Date().toISOString(), base: BASE_URL, results }, null, 2));

  // Report
  const mdPath = path.join(OUT_REPORTS, `cwv-${today}.md`);
  fs.writeFileSync(mdPath, renderMarkdown(results));

  console.log(`\n✅ Raw : ${path.relative(projectRoot, rawPath)}`);
  console.log(`✅ Report: ${path.relative(projectRoot, mdPath)}`);
}

function renderMarkdown(results) {
  const lines = [];
  lines.push(`# Core Web Vitals — ${BASE_URL}`);
  lines.push(``);
  lines.push(`**Date** : ${new Date().toISOString()}`);
  lines.push(`**Mesures** : ${results.length} (URLs × strategies)`);
  lines.push(``);
  lines.push(`Seuils Google (web.dev) :`);
  lines.push(`- LCP : ≤ 2.5s bon, ≤ 4s à améliorer`);
  lines.push(`- INP : ≤ 200ms bon, ≤ 500ms à améliorer`);
  lines.push(`- CLS : ≤ 0.1 bon, ≤ 0.25 à améliorer`);
  lines.push(`- FCP : ≤ 1.8s bon, ≤ 3s à améliorer`);
  lines.push(`- TTFB : ≤ 800ms bon, ≤ 1.8s à améliorer`);
  lines.push(``);
  lines.push(`## Scores synthétiques (Lighthouse)`);
  lines.push(``);
  lines.push(`| URL | Strategy | Perf | A11y | Best Pract. | SEO |`);
  lines.push(`|---|---|---|---|---|---|`);
  for (const r of results) {
    if (r.error) {
      lines.push(`| \`${r.url}\` | ${r.strategy} | — | — | — | ERROR: ${r.error.slice(0, 50)} |`);
      continue;
    }
    const s = r.scores;
    lines.push(`| \`${r.url}\` | ${r.strategy} | ${s.performance} | ${s.accessibility} | ${s.bestPractices} | ${s.seo} |`);
  }
  lines.push(``);
  lines.push(`## Core Web Vitals — Lab data (Lighthouse simulation)`);
  lines.push(``);
  lines.push(`| URL | Strat. | LCP | INP/TBT | CLS | TTFB | Verdict LCP |`);
  lines.push(`|---|---|---|---|---|---|---|`);
  for (const r of results) {
    if (r.error || !r.lab) continue;
    const lcp = r.lab.LCP != null ? `${Math.round(r.lab.LCP)}ms` : '—';
    const tbt = r.lab.TBT != null ? `${Math.round(r.lab.TBT)}ms` : '—';
    const cls = r.lab.CLS != null ? r.lab.CLS.toFixed(3) : '—';
    const ttfb = r.lab.TTFB != null ? `${Math.round(r.lab.TTFB)}ms` : '—';
    lines.push(`| \`${r.url}\` | ${r.strategy} | ${lcp} | ${tbt} | ${cls} | ${ttfb} | ${rate('LCP', r.lab.LCP)} |`);
  }
  lines.push(``);
  lines.push(`## Core Web Vitals — Field data (CrUX, réalité utilisateurs)`);
  lines.push(``);
  lines.push(`Données réelles agrégées par Google sur les 28 derniers jours. Si vide = page pas assez visitée.`);
  lines.push(``);
  lines.push(`| URL | Strat. | LCP | INP | CLS | Verdict |`);
  lines.push(`|---|---|---|---|---|---|`);
  for (const r of results) {
    if (r.error || !r.field) continue;
    const lcp = r.field.LCP != null ? `${r.field.LCP}ms` : '—';
    const inp = r.field.INP != null ? `${r.field.INP}ms` : '—';
    const cls = r.field.CLS != null ? r.field.CLS.toFixed(3) : '—';
    const verdict = [rate('LCP', r.field.LCP), rate('INP', r.field.INP), rate('CLS', r.field.CLS)].join(' | ');
    lines.push(`| \`${r.url}\` | ${r.strategy} | ${lcp} | ${inp} | ${cls} | ${verdict} |`);
  }
  lines.push(``);
  lines.push(`## Opportunités d'optimisation (top 5 par page)`);
  lines.push(``);
  for (const r of results) {
    if (r.error || !r.opportunities?.length) continue;
    lines.push(`### \`${r.url}\` (${r.strategy})`);
    lines.push(``);
    for (const o of r.opportunities) {
      lines.push(`- **${o.title}** — gain potentiel : ${o.displayValue ?? `${Math.round(o.savings)}ms`}`);
    }
    lines.push(``);
  }
  return lines.join('\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
