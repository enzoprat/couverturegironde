/**
 * process-images.mjs
 *
 * Convertit les JPG de chantier en WebP optimisés avec naming SEO-friendly.
 * Organise dans /public/images/{realisations,services,hero}/
 *
 * Cible : <100 KB par image, format WebP qualité 78, max 1600×1200.
 *
 * Usage : node scripts/process-images.mjs
 */

import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC = join(ROOT, 'public/images');

// ============================================================
// MAPPING : SOURCE → DESTINATION + VARIANTES
// ============================================================
// Chaque entrée : { src, dest, role, maxW?, maxH? }
// role: 'real-avant' | 'real-apres' | 'real-single' | 'service' | 'hero' | 'about'

const MAPPING = [
  // ============ CHANTIER 1 — Démoussage Mérignac (pavillon, cheminée briques) ============
  {
    src: 'PHOTO-2024-05-29-22-51-15.jpg',
    dest: 'realisations/demoussage-toiture-merignac-2024-avant.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-51-15 2.jpg',
    dest: 'realisations/demoussage-toiture-merignac-2024-apres.webp',
  },
  // Cette photo APRÈS sert aussi de hero du service Démoussage et d'image principale chantier
  {
    src: 'PHOTO-2024-05-29-22-51-15 2.jpg',
    dest: 'services/demoussage-toiture.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-51-15 2.jpg',
    dest: 'services/nettoyage-toiture.webp',
  },

  // ============ CHANTIER 2 — Démoussage Pessac (panorama vignoble + Velux) ============
  {
    src: 'PHOTO-2024-05-29-22-51-19.jpg',
    dest: 'realisations/demoussage-toiture-pessac-vignoble-velux-2024-avant.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-51-20.jpg',
    dest: 'realisations/demoussage-toiture-pessac-vignoble-velux-2024-apres.webp',
  },
  // Cette photo panorama coucher de soleil = hero de la home (la plus iconique)
  {
    src: 'PHOTO-2024-05-29-22-51-20.jpg',
    dest: 'hero/home.webp',
    maxW: 1920,
    maxH: 1280,
  },
  // Sert aussi pour Velux service
  {
    src: 'PHOTO-2024-05-29-22-51-19.jpg',
    dest: 'services/installation-velux.webp',
  },

  // ============ CHANTIER 3 — Démoussage Talence (forte colonisation lichens) ============
  {
    src: 'PHOTO-2026-05-05-22-03-18.jpg',
    dest: 'realisations/demoussage-toiture-talence-lichens-2026-avant.webp',
  },
  {
    src: 'PHOTO-2026-05-05-22-03-28.jpg',
    dest: 'realisations/demoussage-toiture-talence-lichens-2026-apres.webp',
  },
  // Sert pour le service traitement-hydrofuge (image artisan en intervention)
  {
    src: 'PHOTO-2026-05-05-22-03-28.jpg',
    dest: 'services/traitement-hydrofuge.webp',
  },

  // ============ CHANTIER 4 — Réfection complète Villenave-d'Ornon (bâtisse traditionnelle) ============
  {
    src: 'PHOTO-2024-06-27-19-01-37.jpg',
    dest: 'realisations/refection-complete-toiture-villenave-dornon-2024-avant.webp',
  },
  {
    src: 'PHOTO-2024-06-27-19-02-45.jpg',
    dest: 'realisations/refection-complete-toiture-villenave-dornon-2024-apres.webp',
  },
  // Sert aussi pour service réparation toiture
  {
    src: 'PHOTO-2024-06-27-19-02-45.jpg',
    dest: 'services/reparation-toiture.webp',
  },
  // Et urgence-fuite (l'avant montre l'état d'urgence d'une toiture délabrée)
  {
    src: 'PHOTO-2024-06-27-19-01-37.jpg',
    dest: 'services/urgence-fuite-toiture.webp',
  },

  // ============ CHANTIER 5 — Toiture neuve + charpente + isolation Bègles ============
  {
    src: 'PHOTO-2024-05-29-22-49-31.jpg',
    dest: 'realisations/toiture-neuve-charpente-begles-2024.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-52-02.jpg',
    dest: 'realisations/toiture-neuve-charpente-begles-2024-voligeage.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-49-31 2.jpg',
    dest: 'realisations/toiture-neuve-charpente-begles-2024-isolation.webp',
  },
  // Services associés
  {
    src: 'PHOTO-2024-05-29-22-49-31.jpg',
    dest: 'services/charpente.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-52-02.jpg',
    dest: 'services/toiture-neuve.webp',
  },

  // ============ CHANTIER 6 — Rénovation faîtage Bordeaux centre (équipe visible) ============
  {
    src: 'PHOTO-2024-05-29-22-52-05.jpg',
    dest: 'realisations/renovation-faitage-bordeaux-centre-2024-avant.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-52-07.jpg',
    dest: 'realisations/renovation-faitage-bordeaux-centre-2024-pendant.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-52-03.jpg',
    dest: 'realisations/renovation-faitage-bordeaux-centre-2024-apres.webp',
  },
  // Services
  {
    src: 'PHOTO-2024-05-29-22-52-03.jpg',
    dest: 'services/faitage-toiture.webp',
  },
  // Image équipe = couvreur-bordeaux generaliste
  {
    src: 'PHOTO-2024-05-29-22-52-05.jpg',
    dest: 'services/couvreur-bordeaux.webp',
  },

  // ============ CHANTIER 7 — Toiture bac acier Mérignac (extension neuve) ============
  {
    src: 'PHOTO-2024-05-29-22-51-18 3.jpg',
    dest: 'realisations/toiture-bac-acier-merignac-2024-avant.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-51-18 4.jpg',
    dest: 'realisations/toiture-bac-acier-merignac-2024-apres.webp',
  },

  // ============ CHANTIER 8 — Zinguerie + abergement cheminée Mérignac ============
  {
    src: 'PHOTO-2024-05-29-22-51-15 3.jpg',
    dest: 'realisations/zinguerie-abergement-cheminee-merignac-2024-avant.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-51-16.jpg',
    dest: 'realisations/zinguerie-abergement-cheminee-merignac-2024-pendant.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-51-18.jpg',
    dest: 'realisations/zinguerie-abergement-cheminee-merignac-2024-detail.webp',
  },
  {
    src: 'PHOTO-2024-05-29-22-51-18 2.jpg',
    dest: 'realisations/zinguerie-abergement-cheminee-merignac-2024-apres.webp',
  },
  // Service zinguerie
  {
    src: 'PHOTO-2024-05-29-22-51-16.jpg',
    dest: 'services/zinguerie-gouttieres.webp',
  },

  // ============ Vue détaillée tuile canal pour ornements + services restants ============
  {
    src: 'PHOTO-2024-05-29-22-52-02 5.jpg',
    dest: 'services/ornements-toiture.webp',
  },
];

// ============================================================
// CONVERSION
// ============================================================

async function process({ src, dest, maxW = 1600, maxH = 1200 }) {
  const srcPath = join(SRC, src);
  const destPath = join(SRC, dest);

  if (!existsSync(srcPath)) {
    console.warn(`  ⚠ Source manquante : ${src}`);
    return false;
  }

  await mkdir(dirname(destPath), { recursive: true });

  await sharp(srcPath)
    .rotate() // applique EXIF orientation
    .resize({
      width: maxW,
      height: maxH,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: 78, effort: 5 })
    .toFile(destPath);

  return true;
}

const start = Date.now();
let ok = 0;
let fail = 0;

for (const entry of MAPPING) {
  try {
    const success = await process(entry);
    if (success) {
      ok++;
      const stat = await import('node:fs').then((m) =>
        m.promises.stat(join(SRC, entry.dest)),
      );
      const kb = (stat.size / 1024).toFixed(0);
      console.log(`  ✓ ${entry.dest} (${kb} KB)`);
    } else {
      fail++;
    }
  } catch (e) {
    fail++;
    console.error(`  ✗ ${entry.dest} : ${e.message}`);
  }
}

console.log(
  `\n✅ ${ok} OK / ${fail} fail en ${((Date.now() - start) / 1000).toFixed(1)}s`,
);
