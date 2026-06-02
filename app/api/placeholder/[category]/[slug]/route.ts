import { NextResponse } from 'next/server';
import {
  getPlaceholderTheme,
  ICON_PATHS,
  type ImageCategory,
} from '@/lib/images';

const VALID_CATEGORIES: ImageCategory[] = [
  'service',
  'realisation',
  'ville',
  'hero',
];

/**
 * Endpoint placeholder SVG — sert un SVG brandé léger (~2 KB).
 *
 * URL : `/api/placeholder/{category}/{slug}?ratio=4x3`
 *
 * Le paramètre `ratio` (optionnel) accepte `4x3`, `5x4`, `3x2`, `16x9`, `1x1`.
 * Permet de garantir un aspect-ratio cohérent avec le container CSS,
 * indispensable pour passer l'audit `image-aspect-ratio` de Lighthouse.
 *
 * Cache : 1 an, immutable.
 *
 * Pas de `force-static` car on lit `request.url` query params (ratio).
 * La perf reste excellente : génération string + cache CDN 1 an.
 */
export const dynamic = 'force-dynamic';

const RATIO_DIMENSIONS: Record<string, { w: number; h: number }> = {
  '4x3': { w: 1600, h: 1200 },
  '5x4': { w: 1500, h: 1200 },
  '3x2': { w: 1500, h: 1000 },
  '16x9': { w: 1600, h: 900 },
  '1x1': { w: 1200, h: 1200 },
};

export async function GET(
  req: Request,
  { params }: { params: Promise<{ category: string; slug: string }> },
) {
  const { category, slug } = await params;
  const safeCategory = VALID_CATEGORIES.includes(category as ImageCategory)
    ? (category as ImageCategory)
    : 'service';
  const safeSlug = decodeURIComponent(slug).replace(/[^a-z0-9-]/gi, '');

  const url = new URL(req.url);
  const requestedRatio = url.searchParams.get('ratio');
  const dims =
    (requestedRatio ? RATIO_DIMENSIONS[requestedRatio] : undefined) ??
    RATIO_DIMENSIONS['4x3']!;
  const w = dims.w;
  const h = dims.h;

  const theme = getPlaceholderTheme(safeSlug, safeCategory);
  const iconPath = ICON_PATHS[theme.icon];

  const cx = w / 2;
  const cy = h / 2;
  const iconBox = 120;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" preserveAspectRatio="xMidYMid slice" aria-label="${safeSlug.replace(/-/g, ' ')}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${theme.bg}" stop-opacity="1"/>
        <stop offset="100%" stop-color="${theme.bg}" stop-opacity="0.92"/>
      </linearGradient>
      <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.4" fill="${theme.fg}" fill-opacity="0.04"/>
      </pattern>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <rect width="${w}" height="${h}" fill="url(#dots)"/>
    <g transform="translate(${cx - iconBox / 2}, ${cy - iconBox - 20})">
      <rect x="0" y="0" width="${iconBox}" height="${iconBox}" rx="24" fill="${theme.accent}" fill-opacity="0.12"/>
      <g transform="translate(${iconBox / 2 - 12}, ${iconBox / 2 - 12})" fill="none" stroke="${theme.accent}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="${iconPath}"/>
      </g>
    </g>
    <text x="${cx}" y="${cy + 80}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="600" fill="${theme.fg}" fill-opacity="0.72" letter-spacing="0.04em">COUVERTURE GIRONDE</text>
  </svg>`;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
