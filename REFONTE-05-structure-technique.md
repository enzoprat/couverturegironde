# Structure technique Next.js — couverturegironde.fr v2

## Stack arrêtée

- **Next.js 15** (App Router, React 19, Server Components par défaut)
- **TypeScript** strict
- **Tailwind CSS v4** (jit, design tokens dans config)
- **MDX** (`@next/mdx`) pour le contenu (1 fichier MDX = 1 page = 1 commit)
- **Hébergement** : Vercel Pro (Edge Network, ISR, Speed Insights, Analytics)
- **Domaine** : couverturegironde.fr (DNS pointé sur Vercel après cutover)
- **Versionning** : GitHub privé (branche `main` = prod, `dev` = preview deploy)
- **CI** : GitHub Actions (lint, typecheck, Lighthouse CI à chaque PR)

### Dépendances minimales (aucun bloat)
```json
{
  "dependencies": {
    "next": "^15",
    "react": "^19",
    "react-dom": "^19",
    "@next/mdx": "^15",
    "@mdx-js/loader": "^3",
    "@mdx-js/react": "^3",
    "lucide-react": "^0.460.0",
    "clsx": "^2",
    "schema-dts": "^1.1.5"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^22",
    "@types/react": "^19",
    "tailwindcss": "^4",
    "@tailwindcss/typography": "^0.5.15",
    "eslint": "^9",
    "eslint-config-next": "^15",
    "prettier": "^3"
  }
}
```

**Aucune dépendance UI lourde** (pas de shadcn entier — on copie uniquement les 3-4 composants nécessaires).
**Pas de jQuery, pas de Webflow, pas de framer-motion en phase 1** (CSS suffit pour les micro-interactions).

## Arborescence projet

```
couverturegironde/
├── app/
│   ├── layout.tsx                          # Root layout + JSON-LD Organization + WebSite
│   ├── page.tsx                            # /
│   ├── sitemap.ts                          # sitemap.xml dynamique
│   ├── robots.ts                           # robots.txt
│   ├── not-found.tsx                       # 404 propre
│   ├── opengraph-image.tsx                 # OG image globale
│   │
│   ├── couvreur-bordeaux/page.tsx          # Hub couvreur Bordeaux (ex couverture-bordeaux)
│   │
│   ├── demoussage-toiture-bordeaux/page.tsx     # SILO PRIORITAIRE
│   ├── nettoyage-toiture-bordeaux/page.tsx      # SILO PRIORITAIRE
│   ├── traitement-hydrofuge-toiture-bordeaux/page.tsx  # SILO PRIORITAIRE
│   │
│   ├── reparation-toiture-bordeaux/page.tsx
│   ├── urgence-fuite-toiture-bordeaux/page.tsx
│   ├── zinguerie-bordeaux/page.tsx
│   ├── installation-velux-bordeaux/page.tsx
│   ├── toiture-neuve-bordeaux/page.tsx
│   ├── faitage-toiture-bordeaux/page.tsx
│   ├── ornements-toiture-bordeaux/page.tsx
│   ├── charpente-bordeaux/page.tsx
│   │
│   ├── [serviceVille]/page.tsx             # Dynamic: demoussage-toiture-pessac, etc.
│   │                                         # Matché contre data/service-ville.ts
│   │
│   ├── couvreur-[ville]/page.tsx           # Dynamic: couvreur-pessac, etc.
│   │
│   ├── guides/
│   │   ├── page.tsx                        # Hub guides
│   │   └── [slug]/page.tsx                 # Guide individuel (lit MDX)
│   │
│   ├── realisations/
│   │   ├── page.tsx                        # Hub réalisations (galerie filtrable)
│   │   └── [slug]/page.tsx                 # Réalisation individuelle
│   │
│   ├── avis/page.tsx
│   ├── devis/page.tsx                      # Formulaire long
│   ├── contact/page.tsx
│   ├── urgence/page.tsx                    # Page urgence + sticky tel renforcé
│   ├── a-propos/page.tsx
│   ├── tarifs/page.tsx
│   ├── zones-intervention/page.tsx
│   ├── merci/page.tsx                      # noindex, tracking conversion
│   │
│   ├── mentions-legales/page.tsx
│   ├── politique-de-confidentialite/page.tsx
│   ├── cookies/page.tsx
│   │
│   └── api/
│       ├── devis/route.ts                  # Endpoint formulaire (Resend ou SMTP)
│       ├── indexnow/route.ts               # Pour soumettre nouvelles URLs à Bing/Yandex
│       └── revalidate/route.ts             # Webhook revalidate (secret)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── StickyPhoneBar.tsx              # Sticky bottom mobile
│   │   ├── Breadcrumb.tsx                  # Génère breadcrumb + JSON-LD
│   │   └── WhatsAppButton.tsx              # Flottant après scroll 25%
│   │
│   ├── seo/
│   │   ├── JsonLd.tsx                      # Wrapper sécurisé pour JSON-LD
│   │   ├── schemas/Organization.ts
│   │   ├── schemas/LocalBusiness.ts
│   │   ├── schemas/Service.ts
│   │   ├── schemas/FAQPage.ts
│   │   ├── schemas/BreadcrumbList.ts
│   │   ├── schemas/Article.ts              # Guides
│   │   ├── schemas/Review.ts
│   │   └── schemas/AggregateRating.ts
│   │
│   ├── ui/
│   │   ├── Button.tsx                      # 3 variants
│   │   ├── Card.tsx
│   │   ├── Badge.tsx                       # Trust badges
│   │   ├── Container.tsx
│   │   ├── Eyebrow.tsx                     # Label pré-titre
│   │   └── Reveal.tsx                      # Fade-in au viewport (CSS only via intersection)
│   │
│   ├── sections/
│   │   ├── Hero.tsx                        # Variants : home, service, ville, urgence
│   │   ├── ServicesGrid.tsx
│   │   ├── TrustBar.tsx                    # Badges + note Google
│   │   ├── ProcessSteps.tsx                # Méthode en 5 étapes
│   │   ├── AvantApres.tsx                  # Slider avant/après
│   │   ├── AvisGoogle.tsx                  # 3-6 avis + lien vers /avis
│   │   ├── TarifsBlock.tsx
│   │   ├── ZoneIntervention.tsx            # Carte statique + liste villes
│   │   ├── FAQ.tsx                         # Accordion accessible + schema
│   │   ├── RelatedPages.tsx                # Maillage interne contextuel
│   │   ├── CTAFinal.tsx
│   │   ├── UrgenceBlock.tsx                # Sur pages urgence
│   │   └── RealisationsCarousel.tsx
│   │
│   ├── forms/
│   │   ├── DevisFormShort.tsx              # 3 champs (nom, tél, message)
│   │   ├── DevisFormLong.tsx               # 7 champs avec upload photo
│   │   └── ContactForm.tsx
│   │
│   └── content/
│       ├── ServiceTemplate.tsx             # Template page service (params)
│       ├── ServiceVilleTemplate.tsx        # Template service × ville
│       ├── VilleHubTemplate.tsx            # Template hub ville
│       └── GuideTemplate.tsx               # Template guide
│
├── content/
│   ├── services/
│   │   ├── demoussage-toiture-bordeaux.mdx
│   │   ├── nettoyage-toiture-bordeaux.mdx
│   │   ├── traitement-hydrofuge-toiture-bordeaux.mdx
│   │   └── ... (1 fichier par service Bordeaux)
│   ├── service-ville/
│   │   ├── demoussage-toiture-pessac.mdx
│   │   ├── demoussage-toiture-merignac.mdx
│   │   └── ... (1 fichier par couple service×ville)
│   ├── villes/
│   │   ├── couvreur-merignac.mdx
│   │   ├── couvreur-pessac.mdx
│   │   └── ...
│   ├── guides/
│   │   ├── prix-demoussage-toiture-bordeaux.mdx
│   │   └── ...
│   └── realisations/
│       ├── demoussage-toiture-tuile-canal-merignac.mdx
│       └── ...
│
├── data/
│   ├── villes.ts                           # INSEE, quartiers, code postal, voisinage géo
│   ├── services.ts                         # Liste services + métadonnées
│   ├── service-ville.ts                    # Mapping services × villes existants
│   ├── avis.ts                             # Avis Google (cachés 24h, sync via script)
│   ├── faq.ts                              # Banque FAQ réutilisable par service/ville
│   └── tarifs.ts                           # Grille tarifs indicatifs
│
├── lib/
│   ├── seo/
│   │   ├── metadata.ts                     # Helpers generateMetadata
│   │   ├── canonical.ts
│   │   └── jsonld.ts
│   ├── mdx/
│   │   └── loader.ts                       # Loader MDX + frontmatter parsing
│   ├── analytics.ts                        # Tracking events
│   ├── utils.ts                            # cn, slugify, etc.
│   └── constants.ts                        # NAP, contacts, etc.
│
├── public/
│   ├── images/                             # AVIF/WebP optimisés
│   │   ├── hero/
│   │   ├── realisations/
│   │   ├── services/
│   │   └── icons/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   └── site.webmanifest
│
├── scripts/
│   ├── sync-google-reviews.ts              # Cron pour rafraîchir avis Google
│   ├── submit-indexnow.ts                  # Soumettre nouvelles URLs à IndexNow
│   ├── audit-redirects.ts                  # Vérifier toutes les 301 post-deploy
│   └── lighthouse-ci.ts
│
├── styles/
│   └── globals.css                         # Tailwind directives + custom CSS minimal
│
├── tests/
│   └── e2e/
│       ├── seo.spec.ts                     # Vérifie titles, descriptions, canonical
│       ├── redirects.spec.ts               # Toutes les 301
│       └── schemas.spec.ts                 # JSON-LD valides
│
├── next.config.ts                          # Redirects 301 ici
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .github/workflows/ci.yml                # Lint + typecheck + Lighthouse
└── README.md
```

## next.config.ts — config critique

```ts
import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const config: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  trailingSlash: false,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
    remotePatterns: [], // strict : aucune image externe
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
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Migration depuis l'ancien site Webflow
      { source: '/couverture-bordeaux', destination: '/couvreur-bordeaux', permanent: true },
      { source: '/zinguerie-gouttieres-bordeaux', destination: '/zinguerie-bordeaux', permanent: true },
      { source: '/charpente-bordeaux-reparation-traitement-renforcement---devis-gratuit', destination: '/charpente-bordeaux', permanent: true },
      { source: '/devis-couvreur-gironde', destination: '/devis', permanent: true },
      // Normalisation trailing slash (sécurité)
      // Géré par trailingSlash: false
    ];
  },
};

export default createMDX({ extension: /\.mdx?$/ })(config);
```

## app/sitemap.ts — dynamique

Lit le filesystem (`content/`) + le routing statique, génère le sitemap avec priorités et lastmod issus de git :

```ts
import { MetadataRoute } from 'next';
import { getAllServices, getAllVilles, getAllServiceVille, getAllGuides, getAllRealisations } from '@/lib/mdx/loader';

const BASE = 'https://www.couverturegironde.fr';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE}/devis`, priority: 0.8 },
    { url: `${BASE}/contact`, priority: 0.7 },
    { url: `${BASE}/avis`, priority: 0.7 },
    { url: `${BASE}/a-propos`, priority: 0.6 },
    { url: `${BASE}/tarifs`, priority: 0.7 },
    { url: `${BASE}/zones-intervention`, priority: 0.7 },
    { url: `${BASE}/urgence`, priority: 0.8 },
    { url: `${BASE}/realisations`, priority: 0.7 },
    { url: `${BASE}/guides`, priority: 0.6 },
  ];

  const services = (await getAllServices()).map(s => ({
    url: `${BASE}/${s.slug}`,
    lastModified: s.lastModified,
    priority: s.priority ?? 0.9,
    changeFrequency: 'weekly' as const,
  }));
  // idem pour villes, service-ville, guides, realisations...

  return [...staticPages, ...services, ...villes, ...serviceVille, ...guides, ...realisations];
}
```

## app/robots.ts

```ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/merci', '/_next/', '/admin'],
      },
      // Bloquer crawlers IA si choix stratégique (à décider avec le client)
      // { userAgent: 'GPTBot', disallow: '/' },
    ],
    sitemap: 'https://www.couverturegironde.fr/sitemap.xml',
    host: 'https://www.couverturegironde.fr',
  };
}
```

## generateMetadata — pattern type

Toutes les pages utilisent `generateMetadata` (App Router) avec helper centralisé :

```ts
// lib/seo/metadata.ts
export function buildMetadata({
  title, description, path, image, type = 'website',
}: BuildMetadataParams): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `https://www.couverturegironde.fr${path}` },
    openGraph: {
      title, description, type,
      url: `https://www.couverturegironde.fr${path}`,
      siteName: 'Couverture Gironde',
      locale: 'fr_FR',
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image] : undefined },
    robots: {
      index: true, follow: true,
      googleBot: { 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}
```

## JSON-LD — composants typés

Utilisation de `schema-dts` pour typer les schemas. Chaque page injecte le bon schema via `<JsonLd data={...} />`.

Schemas systématiques :
- **Layout root** : Organization + WebSite + LocalBusiness (RoofingContractor)
- **Pages service** : Service + FAQPage + BreadcrumbList + AggregateRating
- **Pages service×ville** : Service avec `areaServed: City` + FAQPage + BreadcrumbList
- **Pages ville** : LocalBusiness avec `areaServed: City` + BreadcrumbList
- **Guides** : Article + Author + BreadcrumbList + Publisher
- **Réalisations** : Article + ImageObject + Place
- **Avis** : Review + AggregateRating

## Performance — checklist Core Web Vitals

### LCP (cible < 1.8s mobile)
- Hero image : `next/image` avec `priority`, `fetchPriority="high"`, sizes correct
- 1 seule famille de police (Plus Jakarta Sans, weights 500/600/700/800)
- Preload de la font critique (next/font le fait automatiquement)
- Pas de JS bloquant dans `<head>`
- Critical CSS inliné par Next.js automatiquement
- Preconnect uniquement vers ressources critiques

### CLS (cible < 0.05)
- `width`/`height` sur 100% des images
- `next/image` avec `sizes` strict
- Pas de bannière injectée après load (cookies = hauteur réservée)
- Web font : display swap + size-adjust pour matcher fallback
- Skeleton sur sections async

### INP (cible < 200ms)
- Pas de JS first-load > 100 KB
- Pas de jQuery
- Pas de framework UI lourd
- Animations en CSS uniquement
- Event handlers légers, `useTransition` si lourd

### TBT
- Server Components partout sauf interactivité (formulaires, menu mobile, accordion)
- Lazy import des composants lourds (`dynamic`)
- GTM en `afterInteractive` ou supprimé au profit de Vercel Analytics + Plausible

## Vercel — config

- Région : `cdg1` (Paris) pour la latence FR
- Framework preset : Next.js
- Branche prod : `main`
- Preview deployments : sur toutes les branches
- Variables d'env :
  - `RESEND_API_KEY` (envoi mail devis)
  - `INDEXNOW_KEY` (soumission Bing/Yandex)
  - `GOOGLE_INDEXING_API_KEY` (soumission Google)
  - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
  - `GOOGLE_PLACES_API_KEY` (sync avis)
- Vercel Speed Insights + Web Analytics activés
- Cache headers automatiques

## Tests / qualité

- **Lighthouse CI** sur chaque PR (échec si < 95 perf mobile, < 100 SEO)
- **Playwright** : tests E2E sur 301, canonical, métadonnées présentes
- **Pa11y** : audit accessibilité automatique
- **Schema.org validator** : check à chaque PR via API

## Indexation rapide post-déploiement

À chaque push vers `main`, GitHub Action :
1. Détecte les nouvelles pages (`content/**/*.mdx` ajoutés/modifiés)
2. Appelle Google Indexing API pour chaque URL nouvelle/modifiée
3. Appelle IndexNow API pour Bing/Yandex
4. Soumet sitemap.xml à GSC API

Résultat : indexation typique 12-48h vs 1-3 semaines en passif.

## Migration domaine — séquence

1. Setup repo + Next.js fresh
2. Build des 47 pages phase 1 en preview Vercel (URL `couverturegironde-preview.vercel.app`)
3. QA complète (Lighthouse, Schema, redirects, content)
4. **Switch DNS** : changer A/CNAME pour pointer vers Vercel
5. Vercel attache le domaine, génère certif Let's Encrypt automatique
6. **Vérifier toutes les 301** avec script post-deploy
7. Submit nouveau sitemap à Google Search Console
8. Surveiller GSC quotidiennement les 30 premiers jours (erreurs, perte de positions)
9. Maintenir 301 indéfiniment
