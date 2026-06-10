#!/usr/bin/env node
/**
 * Local SEO Grid — génération d'une grille GPS de vérification de positions
 * Google Maps autour d'un point central (atelier Mérignac par défaut).
 *
 * Pour chaque point GPS de la grille + mot-clé cible, génère une URL Google
 * Maps de recherche pré-positionnée. Tu cliques, tu notes la position où
 * "Couverture Gironde" apparaît dans les résultats Maps, et tu reportes dans
 * le CSV pour suivre l'évolution dans le temps.
 *
 * Inspiré du local rank grid de claude-seo (skill `seo-local`).
 *
 * Note : la "vraie" automatisation nécessiterait Google Maps Places API
 * (payante, ~$17 pour 1000 requêtes). Cette version pragmatique fait le
 * heavy lifting (génération des points + URLs) et laisse le user valider.
 *
 * Usage :
 *   npm run seo:local-grid
 *   npm run seo:local-grid -- --size 5 --radius 10  # 5x5 grille, 10km
 *   npm run seo:local-grid -- --keywords "couvreur bordeaux,démoussage toiture bordeaux"
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const OUT_REPORTS = path.join(projectRoot, 'seo-audit', 'reports');
fs.mkdirSync(OUT_REPORTS, { recursive: true });

const today = new Date().toISOString().slice(0, 10);

const args = process.argv.slice(2);
function arg(name, def) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 ? args[idx + 1] : def;
}

// Atelier Mérignac (NAP)
const CENTER_LAT = Number(arg('lat', '44.8332'));
const CENTER_LNG = Number(arg('lng', '-0.6432'));
const CENTER_LABEL = arg('label', 'Atelier Mérignac');

const GRID_SIZE = Number(arg('size', '5')); // 5x5 = 25 points
const RADIUS_KM = Number(arg('radius', '12'));
const ZOOM = Number(arg('zoom', '14'));
const KEYWORDS = arg(
  'keywords',
  'couvreur bordeaux,couvreur gironde,démoussage toiture bordeaux,urgence fuite toiture bordeaux,couvreur près de moi',
).split(',').map((k) => k.trim());

// Earth math : 1 degré ≈ 111.32 km en latitude. Longitude varie selon lat.
function offsetCoords(lat, lng, dxKm, dyKm) {
  const latOffset = dyKm / 111.32;
  const lngOffset = dxKm / (111.32 * Math.cos((lat * Math.PI) / 180));
  return { lat: lat + latOffset, lng: lng + lngOffset };
}

function generateGrid(centerLat, centerLng, gridSize, radiusKm) {
  // Step entre points : radius / floor(gridSize/2) → coin = ±radius
  const half = Math.floor(gridSize / 2);
  const step = radiusKm / Math.max(1, half);
  const points = [];
  for (let yi = -half; yi <= half; yi++) {
    for (let xi = -half; xi <= half; xi++) {
      const { lat, lng } = offsetCoords(centerLat, centerLng, xi * step, yi * step);
      const distance = Math.sqrt((xi * step) ** 2 + (yi * step) ** 2);
      points.push({
        gridX: xi + half + 1,
        gridY: yi + half + 1,
        lat: Number(lat.toFixed(5)),
        lng: Number(lng.toFixed(5)),
        distanceKm: Number(distance.toFixed(1)),
      });
    }
  }
  return points;
}

function googleMapsSearchUrl(lat, lng, query, zoom = 14) {
  // Format : pré-positionne la carte sur le point GPS + lance recherche
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps/search/${q}/@${lat},${lng},${zoom}z`;
}

function main() {
  const points = generateGrid(CENTER_LAT, CENTER_LNG, GRID_SIZE, RADIUS_KM);
  console.log(`📐 Grille Local SEO : ${points.length} points autour de ${CENTER_LABEL}`);
  console.log(`   Centre : ${CENTER_LAT}, ${CENTER_LNG}`);
  console.log(`   Taille : ${GRID_SIZE}×${GRID_SIZE}, rayon : ${RADIUS_KM} km`);
  console.log(`   Mots-clés : ${KEYWORDS.length} (${KEYWORDS.join(' | ')})\n`);

  // CSV avec colonnes pour annotation manuelle
  const csvLines = ['gridX,gridY,lat,lng,distance_km,keyword,maps_url,position_observed,date'];
  for (const kw of KEYWORDS) {
    for (const p of points) {
      const url = googleMapsSearchUrl(p.lat, p.lng, kw, ZOOM);
      csvLines.push(`${p.gridX},${p.gridY},${p.lat},${p.lng},${p.distanceKm},"${kw}","${url}",,`);
    }
  }

  const csvPath = path.join(OUT_REPORTS, `local-grid-${today}.csv`);
  fs.writeFileSync(csvPath, csvLines.join('\n'));

  // Markdown avec mode d'emploi
  const mdLines = [];
  mdLines.push(`# Local SEO Grid — ${today}`);
  mdLines.push(``);
  mdLines.push(`**Centre** : ${CENTER_LABEL} (${CENTER_LAT}, ${CENTER_LNG})`);
  mdLines.push(`**Grille** : ${GRID_SIZE}×${GRID_SIZE} points, rayon ${RADIUS_KM} km`);
  mdLines.push(`**Mots-clés** : ${KEYWORDS.length}`);
  mdLines.push(`**Points × mots-clés** : ${points.length * KEYWORDS.length} URLs Maps à vérifier`);
  mdLines.push(``);

  mdLines.push(`## Mode d'emploi`);
  mdLines.push(``);
  mdLines.push(`Pour chaque ligne du CSV :`);
  mdLines.push(`1. Clique sur l'URL Maps (\`maps_url\`)`);
  mdLines.push(`2. Cherche "Couverture Gironde" dans les résultats de la fiche Google Maps`);
  mdLines.push(`3. Note la position (1, 2, 3… ou "absent" si pas dans le top 20)`);
  mdLines.push(`4. Reporte dans la colonne \`position_observed\``);
  mdLines.push(`5. Date de vérification dans \`date\``);
  mdLines.push(``);
  mdLines.push(`Refais le test toutes les 4-8 semaines pour suivre l'évolution. La position varie selon le point GPS — c'est normal et c'est l'intérêt de la grille.`);
  mdLines.push(``);

  // Tableau résumé visuel
  mdLines.push(`## Cartographie des points`);
  mdLines.push(``);
  mdLines.push(`Distances en km depuis ${CENTER_LABEL} :`);
  mdLines.push(``);
  mdLines.push(`| ${Array(GRID_SIZE).fill('').map((_, i) => `X${i + 1}`).join(' | ')} |`);
  mdLines.push(`|${Array(GRID_SIZE).fill('---').join('|')}|`);
  for (let yi = GRID_SIZE; yi >= 1; yi--) {
    const row = [];
    for (let xi = 1; xi <= GRID_SIZE; xi++) {
      const p = points.find((pt) => pt.gridX === xi && pt.gridY === yi);
      row.push(p ? `${p.distanceKm} km` : '—');
    }
    mdLines.push(`| ${row.join(' | ')} |`);
  }
  mdLines.push(``);

  // Sample URLs (5 premiers points par mot-clé)
  mdLines.push(`## Exemples d'URLs (5 premiers points)`);
  mdLines.push(``);
  for (const kw of KEYWORDS.slice(0, 2)) {
    mdLines.push(`### \`${kw}\``);
    mdLines.push(``);
    for (const p of points.slice(0, 5)) {
      const url = googleMapsSearchUrl(p.lat, p.lng, kw, ZOOM);
      mdLines.push(`- Point (${p.gridX}, ${p.gridY}) — ${p.distanceKm} km : [${p.lat}, ${p.lng}](${url})`);
    }
    mdLines.push(``);
  }

  mdLines.push(`## Données complètes`);
  mdLines.push(``);
  mdLines.push(`Le fichier CSV complet (toutes URLs) est dans :`);
  mdLines.push(`\`${path.relative(projectRoot, csvPath)}\``);
  mdLines.push(``);
  mdLines.push(`Ouvre-le avec un tableur ou un éditeur. Tu peux trier par \`distance_km\` ou \`keyword\` pour organiser ton audit manuel.`);
  mdLines.push(``);

  const mdPath = path.join(OUT_REPORTS, `local-grid-${today}.md`);
  fs.writeFileSync(mdPath, mdLines.join('\n'));

  console.log(`✅ CSV : ${path.relative(projectRoot, csvPath)}`);
  console.log(`✅ Guide : ${path.relative(projectRoot, mdPath)}`);
  console.log(`\n💡 Ouvre le CSV avec Numbers/Excel, clique sur les URLs Maps, note les positions observées.`);
}

main();
