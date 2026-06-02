import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Stratégie média à 3 niveaux :
 *
 *   1. Photo réelle (futur)   : /public/images/realisations/{slug}.webp
 *   2. Image curée (manuel)   : /public/images/services/{slug}.webp
 *   3. Placeholder SVG (auto) : généré à la volée, brandé, leger (~2 KB)
 *
 * SmartImage utilise ces fonctions pour résoudre l'URL au build.
 * Si l'image attendue n'existe pas, on bascule sur le placeholder SVG.
 */

const PUBLIC_DIR = join(process.cwd(), 'public');

export type ImageCategory = 'service' | 'realisation' | 'ville' | 'hero';
export type AspectRatio = '4/3' | '5/4' | '3/2' | '16/9' | '1/1' | 'square';

export type ResolvedImage = {
  /** URL utilisée par next/image (chemin absolu sous /public). */
  src: string;
  /** Vrai si une vraie photo a été trouvée (true) ou placeholder (false). */
  isReal: boolean;
  /** Alt text par défaut (peut être override par le composant). */
  defaultAlt: string;
};

const ASPECT_TO_QUERY: Record<AspectRatio, string> = {
  '4/3': '4x3',
  '5/4': '5x4',
  '3/2': '3x2',
  '16/9': '16x9',
  '1/1': '1x1',
  square: '1x1',
};

/** Résout l'image pour un service donné (slug d'image). */
export function resolveServiceImage(
  imageSlug: string,
  serviceName: string,
  aspect: AspectRatio = '4/3',
): ResolvedImage {
  const realisationPath = `/images/realisations/${imageSlug}.webp`;
  if (existsSync(join(PUBLIC_DIR, realisationPath))) {
    return {
      src: realisationPath,
      isReal: true,
      defaultAlt: `${serviceName} — chantier Couverture Gironde`,
    };
  }
  const servicePath = `/images/services/${imageSlug}.webp`;
  if (existsSync(join(PUBLIC_DIR, servicePath))) {
    return {
      src: servicePath,
      isReal: true,
      defaultAlt: `${serviceName} à Bordeaux et en Gironde`,
    };
  }
  return {
    src: getPlaceholderUrl(imageSlug, 'service', aspect),
    isReal: false,
    defaultAlt: `${serviceName} — illustration`,
  };
}

/** Résout l'image hero d'une page.
 *
 * Chaîne de fallback :
 *  1. /images/hero/{slug}.webp     (image hero dédiée si fournie)
 *  2. /images/services/{slug}.webp (réutilisation visuel service — pertinent pour pages services)
 *  3. Placeholder SVG brandé
 */
export function resolveHeroImage(
  slug: string,
  alt: string,
  aspect: AspectRatio = '5/4',
): ResolvedImage {
  const heroPath = `/images/hero/${slug}.webp`;
  if (existsSync(join(PUBLIC_DIR, heroPath))) {
    return { src: heroPath, isReal: true, defaultAlt: alt };
  }
  const servicePath = `/images/services/${slug}.webp`;
  if (existsSync(join(PUBLIC_DIR, servicePath))) {
    return { src: servicePath, isReal: true, defaultAlt: alt };
  }
  return {
    src: getPlaceholderUrl(slug, 'hero', aspect),
    isReal: false,
    defaultAlt: alt,
  };
}

/** Résout l'image d'une réalisation par son slug. */
export function resolveRealisationImage(
  slug: string,
  alt: string,
  aspect: AspectRatio = '4/3',
): ResolvedImage {
  const path = `/images/realisations/${slug}.webp`;
  if (existsSync(join(PUBLIC_DIR, path))) {
    return { src: path, isReal: true, defaultAlt: alt };
  }
  return {
    src: getPlaceholderUrl(slug, 'realisation', aspect),
    isReal: false,
    defaultAlt: alt,
  };
}

/**
 * Génère l'URL d'un placeholder SVG brandé avec ratio cohérent.
 * Le SVG est servi par `/api/placeholder/[category]/[slug]?ratio=X`.
 */
export function getPlaceholderUrl(
  slug: string,
  category: ImageCategory,
  aspect: AspectRatio = '4/3',
): string {
  const ratio = ASPECT_TO_QUERY[aspect] ?? '4x3';
  return `/api/placeholder/${category}/${encodeURIComponent(slug)}?ratio=${ratio}`;
}

/**
 * Slug d'icône SVG choisi en fonction du category+slug, pour rendre des
 * placeholders thématiques (toit, gouttière, etc.).
 */
export function getPlaceholderTheme(slug: string, category: ImageCategory): {
  bg: string;
  fg: string;
  accent: string;
  icon: 'roof' | 'drop' | 'shield' | 'wrench' | 'sun' | 'home' | 'tree' | 'lightning';
} {
  const palette = {
    ardoise: '#0F1E33',
    pierre: '#F5F2EC',
    creme: '#FAF8F4',
    terre: '#C8542E',
    or: '#B7882E',
    garantie: '#2F7A47',
    urgence: '#0E5E8A',
  };

  let icon: ReturnType<typeof getPlaceholderTheme>['icon'] = 'roof';
  let accent = palette.terre;

  if (slug.includes('demouss') || slug.includes('nettoy')) {
    icon = 'drop';
    accent = palette.garantie;
  } else if (slug.includes('hydrofuge')) {
    icon = 'shield';
    accent = palette.urgence;
  } else if (slug.includes('reparation')) {
    icon = 'wrench';
    accent = palette.terre;
  } else if (slug.includes('urgence') || slug.includes('fuite')) {
    icon = 'lightning';
    accent = palette.urgence;
  } else if (slug.includes('velux')) {
    icon = 'sun';
    accent = palette.or;
  } else if (slug.includes('charpente') || slug.includes('bois')) {
    icon = 'tree';
    accent = palette.garantie;
  } else if (slug.includes('neuve') || slug.includes('couvreur')) {
    icon = 'home';
    accent = palette.terre;
  }

  if (category === 'hero') {
    return { bg: palette.ardoise, fg: palette.pierre, accent, icon };
  }
  return { bg: palette.creme, fg: palette.ardoise, accent, icon };
}

/** SVG paths centralisés (utilisés par l'API placeholder). */
export const ICON_PATHS: Record<
  ReturnType<typeof getPlaceholderTheme>['icon'],
  string
> = {
  roof: 'M3 12 L12 4 L21 12 M5 11 V20 H19 V11 M9 20 V14 H15 V20',
  drop: 'M12 3 C12 3 6 11 6 15 A6 6 0 0 0 18 15 C18 11 12 3 12 3 Z',
  shield:
    'M12 3 L20 6 V12 C20 16 16.5 19.5 12 21 C7.5 19.5 4 16 4 12 V6 Z M9 12 L11 14 L15 10',
  wrench:
    'M14.7 6.3 A4 4 0 0 0 9 9.7 L4 14.7 L7.3 18 L12.3 13 A4 4 0 0 0 17 11 L14.7 8.7 L13.3 10 L12 8.7 L13.3 7.3 Z',
  sun: 'M12 7 A5 5 0 1 0 12 17 A5 5 0 1 0 12 7 Z M12 2 V4 M12 20 V22 M4 12 H2 M22 12 H20 M5.6 5.6 L4.2 4.2 M19.8 19.8 L18.4 18.4 M18.4 5.6 L19.8 4.2 M4.2 19.8 L5.6 18.4',
  home: 'M3 10 L12 3 L21 10 V20 H14 V14 H10 V20 H3 Z',
  tree: 'M12 3 L6 12 H9 L4 19 H10 V21 H14 V19 H20 L15 12 H18 Z',
  lightning: 'M13 2 L5 14 H11 L9 22 L19 8 H13 Z',
};
