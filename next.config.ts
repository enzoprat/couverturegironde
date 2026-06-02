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
    contentDispositionType: 'attachment',
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
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
