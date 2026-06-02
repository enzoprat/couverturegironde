# Stack technique Next.js — SEO maximal

## Choix architecturaux

### Framework & rendering
- **Next.js 15 App Router** (server components par défaut)
- **SSG par défaut** pour toutes les pages SEO (services, villes, guides, réalisations)
- **ISR** uniquement pour pages dynamiques avec contenu fréquemment mis à jour (avis Google, météo si pertinent)
- **PAS de SSR pure** pour les pages SEO — SSG + revalidate au build = vitesse maximale + crawl-friendly

### Hébergement
- **Vercel Pro** minimum (Edge functions, ISR, analytics, Speed Insights)
- **Edge runtime** pour `/api/devis`, `/api/contact`
- CDN automatique global

### Stratégie de build
- Build trigger : push sur `main` → déploiement preview puis production
- Hooks Vercel : webhook depuis CMS (si Sanity/Contentful) → revalidate spécifique
- Ou full MDX dans le repo (recommandé pour 1 page/jour) : push = déploiement = indexation

## Configuration SEO essentielle

### `next.config.js`
```js
module.exports = {
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
  async redirects() { /* cf. 02-url-mapping.md */ },
};
```

### `app/sitemap.ts` (dynamique)
- Lit tous les MDX/JSON du repo
- Génère `<url>` avec `lastModified` (depuis git mtime), `changeFrequency`, `priority`
- Split en plusieurs sitemaps si >50k URLs (pas notre cas, mais prévoir `sitemap-index.xml`)
- **Soumettre à GSC + Bing Webmaster + IndexNow**

### `app/robots.ts`
```ts
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/merci', '/_next/', '/admin'] },
      { userAgent: 'GPTBot', disallow: '/' },     // ou allow selon ta stratégie IA
      { userAgent: 'CCBot', disallow: '/' },
    ],
    sitemap: 'https://www.couverturegironde.fr/sitemap.xml',
    host: 'https://www.couverturegironde.fr',
  };
}
```

### Données structurées (JSON-LD) — composants typés
Schemas à intégrer systématiquement :

1. **Organization** (sitewide, dans layout root)
2. **LocalBusiness** type `RoofingContractor` (sitewide + spécialisé par page ville avec `areaServed`)
3. **BreadcrumbList** (sur toutes les pages sauf accueil)
4. **FAQPage** (chaque page ayant un bloc FAQ)
5. **Service** (chaque page service avec `provider`, `areaServed`, `offers`)
6. **AggregateRating** + **Review** (sur LocalBusiness et services principaux)
7. **Article** + **Author** sur les guides (E-E-A-T)
8. **HowTo** sur pages "comment faire" si pertinent
9. **ImageObject** sur photos réalisations
10. **WebSite** + **SearchAction** (sitewide)
11. **Place** / **PostalAddress** pour pages villes

### Métadonnées Next.js (`generateMetadata`)
```ts
export const generateMetadata = ({ params }) => ({
  title: `Démoussage toiture ${capitalize(params.ville)} | Couverture Gironde`,
  description: `Démoussage de toiture à ${ville} par artisan couvreur depuis 2005. Devis gratuit 24h, garantie décennale. Tarifs transparents.`,
  alternates: { canonical: `https://www.couverturegironde.fr/demoussage-toiture-${slug}` },
  openGraph: { ... },
  twitter: { card: 'summary_large_image', ... },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
});
```

## Performance Core Web Vitals

### LCP < 2.5s (cible <1.8s)
- Hero image : `next/image` avec `priority` + `fetchPriority="high"`
- Format AVIF en premier, WebP fallback
- Préchargement font display via `next/font/google` (auto-self-hosted)
- **1 SEULE FAMILLE de font** (pas 8 comme actuellement). Recommandation : **Inter** ou **Plus Jakarta Sans** (poids 400/600/700), 100% suffit
- Image hero `loading="eager"`, le reste `loading="lazy"`
- Preconnect uniquement vers CDN images (et rien d'autre, surtout pas Google Fonts en runtime)

### CLS < 0.1
- Toujours `width`/`height` sur images
- `next/image` avec `sizes` correct
- Pas de bannières insérées dynamiquement
- Cookie banner avec hauteur réservée
- Web font `display: swap` sans FOUT visible (utiliser `next/font` qui gère le swap proprement)

### INP < 200ms (remplace FID)
- Pas de JS lourd au load
- Defer GTM en `afterInteractive`
- Pas de jQuery (à bannir)
- Animations en CSS, pas en JS
- Évènements click avec `useTransition` si lourds

### Bundle JS
- Cible < 100 KB JS first-load
- Pas de framework UI lourd (pas de MUI/Antd). Préférer **Tailwind + headless UI (Radix)**
- Pages SEO = quasi 100% server components, JS uniquement pour formulaires et menu mobile
- Code-splitting agressif

### Images
- AVIF + WebP automatique (`next/image`)
- Lazy loading par défaut sauf hero
- `placeholder="blur"` avec base64 < 200 bytes
- Hébergement : Vercel Image Optimization OU Cloudflare Images si volume important

## Sécurité & propreté
- CSP stricte (header) sur les pages publiques
- `Permissions-Policy` désactive géolocalisation/microphone/caméra non utilisés
- Pas d'inline scripts (sauf JSON-LD)

## Monitoring & indexation
- Google Search Console (propriété domaine, pas URL)
- Bing Webmaster
- Vercel Analytics + Speed Insights
- Plausible ou Umami (privacy-friendly, plus léger que GA4)
- **Google Indexing API** ou **Bing IndexNow** à chaque publication (webhook depuis CI)
- Surveillance des 404 via Vercel logs → 301 réactives

## Cible Lighthouse
| Métrique | Cible |
|---|---|
| Performance mobile | ≥ 95 |
| Performance desktop | ≥ 98 |
| SEO | 100 |
| Accessibility | ≥ 95 |
| Best practices | 100 |
| LCP mobile | < 1.8s |
| INP | < 200ms |
| CLS | < 0.05 |
| TBT | < 150ms |
| TTI | < 2.5s |
