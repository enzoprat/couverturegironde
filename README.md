# Couverture Gironde — couverturegironde.fr

Site officiel de **Couverture Gironde**, artisan couvreur-zingueur à Mérignac depuis 2005, intervenant sur Bordeaux Métropole et toute la Gironde.

Refonte 2026 : migration de Webflow vers Next.js 15 / Vercel, avec un focus SEO local maximal.

---

## Stack technique

- **Framework** : Next.js 15 (App Router, React 19, Server Components)
- **Langage** : TypeScript strict
- **Styling** : Tailwind CSS v4 (design tokens custom)
- **Contenu** : MDX + registre de pages data-driven
- **Hébergement** : Vercel (Edge Network, ISR, Speed Insights)
- **Polices** : Plus Jakarta Sans (self-hosted via `next/font`)
- **Icônes** : Lucide React
- **Schemas SEO** : `schema-dts` typé

---

## Démarrage local

```bash
npm install
npm run dev
# → http://localhost:3000
```

### Build production

```bash
npm run build
npm run start
```

### Typecheck

```bash
npm run typecheck
```

---

## Architecture

```
app/                          # Next.js App Router (~30 pages)
├── (services Bordeaux)
├── couvreur-[ville]
├── guides/[slug]
├── realisations/[slug]
├── api/
└── ...

components/
├── content/                  # Templates de pages (ServicePageLayout, etc.)
├── layout/                   # Header, Footer, MobileMenu, Breadcrumb
├── sections/                 # Hero, FAQ, AvisGoogle, Reassurance, etc.
├── seo/                      # JsonLd
├── ui/                       # Button, Card, SmartImage, Badge…
└── forms/                    # DevisForm

data/                         # Source unique de vérité (registres TS)
├── pages.ts                  # Registre central de toutes les pages
├── services.ts               # Catalogue des 12 services
├── locations.ts              # Catalogue des villes desservies
├── faq.ts                    # FAQ par service
├── avis.ts                   # Avis clients
├── realisations.ts           # Chantiers réalisés
└── types.ts

lib/
├── pages.ts                  # Helpers maillage (getPageBySlug, getRelatedPages, getBreadcrumb)
├── images.ts                 # Résolveur SmartImage (3 niveaux fallback)
├── seo/
│   ├── metadata.ts           # generateMetadata helper
│   └── schemas.ts            # Schemas JSON-LD typés
└── constants.ts              # NAP, configs sitewide

public/
└── images/                   # WebP optimisés (logo, hero, services, realisations)

scripts/
└── process-images.mjs        # Pipeline sharp pour conversion WebP

content/                      # MDX (réservé phase 2)
```

---

## Principes de l'architecture

### Data-driven (zero hardcode)
La navbar, le footer, le sitemap, les breadcrumbs et le maillage interne sont **tous générés** depuis `data/pages.ts`. Ajouter une page = ajouter une entrée dans le registre + créer son fichier `app/.../page.tsx`. Aucun composant à modifier.

### Système média à 3 niveaux
`<SmartImage>` résout dans l'ordre :
1. `/public/images/realisations/{slug}.webp` (photo réelle si disponible)
2. `/public/images/services/{slug}.webp` (image curée Pexels)
3. Placeholder SVG brandé (généré par `/api/placeholder/...`)

Aucune image cassée possible.

### SEO maximal
- Lighthouse 100/100/100/100 sur les pages principales
- Schemas riches : Organization, RoofingContractor, Service, FAQPage, HowTo, BreadcrumbList, Review, Article, ImageObject, Place
- 5 redirections 301 préservant le SEO des anciennes URLs Webflow
- Sitemap dynamique alimenté depuis le registre
- hreflang fr-FR, CSP stricte, security.txt RFC 9116

---

## Documentation stratégique

Les `.md` à la racine contiennent toute la stratégie SEO et de design :

- `01-audit-actuel.md` → audit du site Webflow initial
- `02-url-mapping.md` → mapping des redirections 301
- `03-architecture.md` → architecture en silos
- `04-roadmap-6-mois.md` → plan de publication
- `05-silos-maillage.md` → matrice de maillage interne
- `06-seo-technique-nextjs.md` → stack technique
- `07-seo-local-bordeaux.md` → stratégie SEO local
- `08-ux-conversion.md` → UX & conversion
- `REFONTE-01` à `REFONTE-06` → livrables de refonte
- `MEDIA-GUIDE.md` → guide curation photos

---

## Workflow de publication

1. **Ajouter une nouvelle page** : nouvelle entrée dans `data/pages.ts` + fichier `app/.../page.tsx`
2. **Photos** : drop dans `/public/images/realisations/{slug}.webp` (Next/Image fait l'optimisation)
3. **Réalisation** : entrée dans `data/realisations.ts` (page individuelle générée auto via `/realisations/[slug]`)
4. **Commit & push** sur `main` → Vercel build + déploiement
5. **Soumettre nouvelle URL** à Google Indexing API + IndexNow

---

## NAP officiel (à ne JAMAIS modifier)

```
Couverture Gironde
65 Rue de Malbos
33700 Mérignac
+33 7 68 69 78 48
contact@couverturegironde.fr
```

La cohérence du NAP cross-platform (site / Google Business Profile / annuaires) est critique pour le SEO local.

---

## Variables d'environnement

Voir `.env.example`. Variables actuellement non-bloquantes (TODOs phase 2 : Resend pour envoi mail devis, Google Indexing API, Plausible Analytics).

---

## Licence

© 2026 Couverture Gironde — Tous droits réservés.
