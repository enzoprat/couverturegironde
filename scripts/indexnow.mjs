#!/usr/bin/env node
/**
 * IndexNow — soumission des URLs à Bing, Yandex, Naver, Seznam et Yep.
 *
 * ⚠️ Google NE PARTICIPE PAS à IndexNow et a confirmé publiquement ne pas
 * l'utiliser. Ce script n'a donc aucun effet sur le référencement Google,
 * qui est le seul canal de trafic mesurable de ce site. À utiliser comme
 * une hygiène gratuite, pas comme un levier.
 *
 * Fonctionnement du protocole :
 *  1. une clé est publiée en clair à la racine du site (public/<clé>.txt)
 *  2. on POST un JSON contenant l'hôte, la clé et la liste d'URLs
 *  3. le moteur relit le fichier de clé pour vérifier qu'on possède le domaine
 *
 * Utilisation :
 *   npm run seo:indexnow                    → toutes les URLs du sitemap
 *   npm run seo:indexnow -- --dry           → affiche sans soumettre
 *   npm run seo:indexnow -- /tarifs /urgence → seulement ces chemins
 *
 * Ne soumettre que ce qui a réellement changé : marteler l'API avec les 76
 * URLs à chaque déploiement n'accélère rien et peut être traité comme du spam.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const HOST = 'www.couverturegironde.fr';
const ORIGIN = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_URLS = 10000; // limite du protocole par requête

/** La clé est le nom du fichier `<clé>.txt` posé dans public/. */
function readKey() {
  const f = fs
    .readdirSync(PUBLIC)
    .find((n) => /^[0-9a-f]{8,128}\.txt$/i.test(n));
  if (!f) {
    console.error('❌ Aucun fichier de clé IndexNow dans public/.');
    console.error('   → créer public/<clé>.txt contenant exactement la clé.');
    process.exit(1);
  }
  const key = f.replace(/\.txt$/i, '');
  const contenu = fs.readFileSync(path.join(PUBLIC, f), 'utf8').trim();
  if (contenu !== key) {
    console.error(`❌ public/${f} doit contenir exactement « ${key} ».`);
    console.error(`   Contenu actuel : « ${contenu} »`);
    process.exit(1);
  }
  return key;
}

async function urlsDuSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml → HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const args = process.argv.slice(2);
const dry = args.includes('--dry');
const chemins = args.filter((a) => !a.startsWith('--'));

const key = readKey();
const keyLocation = `${ORIGIN}/${key}.txt`;

// Vérifier que le fichier de clé est bien servi AVANT de soumettre :
// une clé introuvable fait rejeter toutes les soumissions suivantes (403).
const check = await fetch(keyLocation).catch(() => null);
const checkTexte = check?.ok ? (await check.text()).trim() : null;
if (checkTexte !== key) {
  console.error(`❌ ${keyLocation} ne renvoie pas la clé (HTTP ${check?.status ?? 'échec'}).`);
  console.error('   Déploie le fichier de clé avant de lancer la soumission.');
  process.exit(1);
}
console.log(`✓ clé vérifiée en ligne : ${keyLocation}`);

const urlList = chemins.length
  ? chemins.map((c) => new URL(c, ORIGIN).href)
  : await urlsDuSitemap();

if (!urlList.length) {
  console.error('❌ Aucune URL à soumettre.');
  process.exit(1);
}
const horsHote = urlList.filter((u) => new URL(u).host !== HOST);
if (horsHote.length) {
  console.error(`❌ ${horsHote.length} URL(s) hors du domaine ${HOST} :`);
  horsHote.forEach((u) => console.error(`   ${u}`));
  process.exit(1);
}

console.log(`${urlList.length} URL(s) ${chemins.length ? '(sélection)' : '(sitemap complet)'}`);
if (dry) {
  urlList.forEach((u) => console.log(`   ${u.replace(ORIGIN, '')}`));
  console.log('\n--dry : rien n’a été soumis.');
  process.exit(0);
}

for (let i = 0; i < urlList.length; i += MAX_URLS) {
  const lot = urlList.slice(i, i + MAX_URLS);
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList: lot }),
  });
  const corps = await res.text().catch(() => '');
  const sens = {
    200: 'OK — URLs soumises',
    202: 'Accepté — validation de la clé en cours',
    400: 'Requête invalide',
    403: 'Clé refusée (fichier introuvable ou contenu incorrect)',
    422: 'URLs hors du domaine déclaré, ou clé non conforme',
    429: 'Trop de requêtes',
  }[res.status] ?? 'réponse inattendue';
  console.log(`HTTP ${res.status} — ${sens}${corps ? ` — ${corps.slice(0, 200)}` : ''}`);
  if (res.status >= 400) process.exitCode = 1;
}
