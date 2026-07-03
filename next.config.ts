import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const ContentSecurityPolicy = [
  "default-src 'self'",
  // Next.js a besoin de 'unsafe-inline' pour ses styles inline (critical CSS)
  "style-src 'self' 'unsafe-inline'",
  // 'unsafe-inline' nécessaire pour le runtime Next.js
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "manifest-src 'self'",
].join('; ');

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  trailingSlash: false,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
    // SVG placeholders : on autorise le contenu SVG inline servi par /api/placeholder
    dangerouslyAllowSVG: true,
    // 'inline' (et non 'attachment') pour que Googlebot Image affiche les
    // images directement, condition critique pour l'indexation correcte
    // de la page et son rendu mobile-first. 'attachment' provoquait
    // l'erreur "Autre erreur" sur les ressources image dans GSC.
    contentDispositionType: 'inline',
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value:
              'accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy,
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1',
          },
        ],
      },
      // /merci : noindex via header (double-sécurité avec le meta robots)
      {
        source: '/merci',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Migration depuis l'ancien site Webflow — préservation du SEO
      {
        source: '/couverture-bordeaux',
        destination: '/couvreur-bordeaux',
        permanent: true,
      },
      {
        source: '/zinguerie-gouttieres-bordeaux',
        destination: '/zinguerie-bordeaux',
        permanent: true,
      },
      {
        source:
          '/charpente-bordeaux-reparation-traitement-renforcement---devis-gratuit',
        destination: '/charpente-bordeaux',
        permanent: true,
      },
      {
        source: '/devis-couvreur-gironde',
        destination: '/demande-devis',
        permanent: true,
      },
      // Anciennes pages politique/cookies à migrer vers les nouveaux slugs
      {
        source: '/politique-de-confidentialite',
        destination: '/politique-confidentialite',
        permanent: true,
      },
      // Legacy Webflow "demande de devis" avec tirets
      {
        source: '/demande-de-devis',
        destination: '/demande-devis',
        permanent: true,
      },
      // Requêtes GSC sans page : on capte le trafic vers la bonne destination
      {
        source: '/couvreur-33',
        destination: '/couvreur-gironde',
        permanent: true,
      },
      {
        source: '/charpentier-couvreur-bordeaux',
        destination: '/charpente-bordeaux',
        permanent: true,
      },
      {
        source: '/charpentier-couvreur-gironde',
        destination: '/charpente-bordeaux',
        permanent: true,
      },
      {
        source: '/devis-toiture-bordeaux',
        destination: '/demande-devis',
        permanent: true,
      },
      {
        source: '/entretien-toiture-bordeaux',
        destination: '/demoussage-toiture-bordeaux',
        permanent: true,
      },
      {
        source: '/nettoyage-toiture-gironde',
        destination: '/nettoyage-toiture-bordeaux',
        permanent: true,
      },
      {
        source: '/reparation-toiture-gironde',
        destination: '/reparation-toiture-bordeaux',
        permanent: true,
      },
      {
        source: '/urgence-toiture-bordeaux',
        destination: '/urgence-fuite-toiture-bordeaux',
        permanent: true,
      },
      // Long-tail captures (audit AI Citability, juin 2026)
      {
        source: '/artisan-couvreur-zingueur-33',
        destination: '/couvreur-gironde',
        permanent: true,
      },
      {
        source: '/artisan-couvreur-bordeaux',
        destination: '/couvreur-bordeaux',
        permanent: true,
      },
      {
        source: '/artisan-couvreur-gironde',
        destination: '/couvreur-gironde',
        permanent: true,
      },
      {
        source: '/couvreur-zingueur-bordeaux',
        destination: '/couvreur-bordeaux',
        permanent: true,
      },
      {
        source: '/couvreur-zingueur-33',
        destination: '/couvreur-gironde',
        permanent: true,
      },
      // Sprint 2 communes : variante "le bouscat" (avec article) → bouscat (slug court)
      {
        source: '/couvreur-le-bouscat',
        destination: '/couvreur-bouscat',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
