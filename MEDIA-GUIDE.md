# Guide média — gestion des photos du site

## Principe

Le site fonctionne avec **3 niveaux d'images** gérés par `<SmartImage>` :

1. **Photo réelle** (idéal) → `/public/images/realisations/{slug}.webp`
2. **Image curée** (transition) → `/public/images/services/{slug}.webp`
3. **Placeholder SVG brandé** (fallback auto) → généré par `/api/placeholder/...`

Le composant choisit automatiquement la meilleure disponible. **Aucune image cassée possible.**

## Arborescence

```
public/images/
├── services/                    ← Photos curées par service (étape transitoire)
│   ├── demoussage-toiture.webp
│   ├── nettoyage-toiture.webp
│   ├── traitement-hydrofuge.webp
│   ├── reparation-toiture.webp
│   ├── urgence-fuite-toiture.webp
│   ├── zinguerie-gouttieres.webp
│   ├── installation-velux.webp
│   ├── toiture-neuve.webp
│   ├── faitage-toiture.webp
│   ├── ornements-toiture.webp
│   ├── charpente.webp
│   └── couvreur-bordeaux.webp
│
├── realisations/                ← Photos RÉELLES de chantiers (priorité absolue)
│   ├── {slug-realisation}.webp  ← ex. `demoussage-toiture-merignac-2026-01.webp`
│   └── ...
│
├── hero/                        ← Visuels hero des pages clés
│   ├── home.webp
│   ├── demoussage.webp
│   ├── nettoyage.webp
│   └── ...
│
└── locations/                   ← Visuels villes (optionnel — fallback OK)
    ├── bordeaux.webp
    └── ...
```

## Workflow recommandé

### Étape 1 — Démarrage (placeholders auto)
Aucun travail. Tous les SmartImage rendent un placeholder SVG brandé. **Site jamais cassé.**

### Étape 2 — Curation rapide (1-2h, gratuit)
Curer 12 photos Pexels et les sauvegarder dans `/public/images/services/` au format `.webp`.

**Requêtes Pexels recommandées** (toutes les photos sont gratuites, license `pexels.com/license`, sans attribution obligatoire) :

| Fichier cible | Requête de recherche Pexels | URL recherche |
|---|---|---|
| `demoussage-toiture.webp` | "moss roof tile" | https://www.pexels.com/search/moss%20roof%20tile/ |
| `nettoyage-toiture.webp` | "roof cleaning" | https://www.pexels.com/search/roof%20cleaning/ |
| `traitement-hydrofuge.webp` | "roof spray treatment" | https://www.pexels.com/search/roof%20spray%20treatment/ |
| `reparation-toiture.webp` | "roof repair tiles" | https://www.pexels.com/search/roof%20repair%20tiles/ |
| `urgence-fuite-toiture.webp` | "roof leak rain" | https://www.pexels.com/search/roof%20leak%20rain/ |
| `zinguerie-gouttieres.webp` | "rain gutter zinc" | https://www.pexels.com/search/rain%20gutter%20zinc/ |
| `installation-velux.webp` | "roof window skylight" | https://www.pexels.com/search/roof%20window%20skylight/ |
| `toiture-neuve.webp` | "new roof tiles construction" | https://www.pexels.com/search/new%20roof%20tiles%20construction/ |
| `faitage-toiture.webp` | "roof ridge tiles" | https://www.pexels.com/search/roof%20ridge%20tiles/ |
| `ornements-toiture.webp` | "ornamental roof france" | https://www.pexels.com/search/ornamental%20roof%20france/ |
| `charpente.webp` | "wooden roof structure" | https://www.pexels.com/search/wooden%20roof%20structure/ |
| `couvreur-bordeaux.webp` | "roofer working tiles" | https://www.pexels.com/search/roofer%20working%20tiles/ |

**Critères de sélection** :
- ✅ Lumière naturelle, pas de filtre criard
- ✅ Composition serrée sur le travail / matériau
- ✅ Pas d'éléments non-français (publicités, panneaux, etc.)
- ❌ Pas de "ouvrier-souriant-pouce-levé"
- ❌ Pas de scènes industrielles US (toitures à bardeaux d'asphalte typique US)
- ❌ Pas d'images surexposées ou de stock évident

### Étape 3 — Format & optim
Convertir chaque image téléchargée en `.webp` :
```bash
# macOS — installer si besoin : brew install webp
cwebp -q 82 photo.jpg -o public/images/services/demoussage-toiture.webp
```
Ou via [Squoosh.app](https://squoosh.app) (drag & drop, gratuit, navigateur).

Dimensions cibles :
- Hero : 1920 × 1280 (ou 1600 × 1067)
- Services / réalisations : 1600 × 1200 (ratio 4:3)
- Poids cible : < 80 KB par image

### Étape 4 — Vraies photos chantier (objectif final)
À chaque chantier terminé :
1. Photo iPhone en mode "1×" (pas zoom numérique), lumière du jour
2. Cadrage : un détail + une vue d'ensemble + 1 avant / 1 après si possible
3. Renommer : `{service}-{ville}-{annee}-{numero-chrono}.webp`
   - ex. `demoussage-toiture-merignac-2026-01.webp`
4. Drop dans `/public/images/realisations/`
5. Commit / push → Vercel auto-rebuild → image en ligne

## Alt text — règles SEO

Le composant `<SmartImage>` génère un alt text par défaut intelligent :
- Service : `"{nom du service} à Bordeaux et en Gironde"`
- Réalisation : `"{description du chantier}"`

Tu peux toujours override en passant `alt="..."`. Pour le SEO :
- Décrire le sujet réel de l'image (pas "photo de chantier")
- Mentionner ville + service quand pertinent
- Pas de keyword stuffing (max 1 mention par image)
- Max ~125 caractères

## Performance

Le composant gère automatiquement :
- ✅ AVIF + WebP via `next/image`
- ✅ Lazy loading par défaut (`priority={true}` à activer manuellement pour le hero)
- ✅ Tailles responsives via `sizes`
- ✅ Cache 1 an pour les placeholders SVG
- ✅ Aspect-ratio fixe (pas de CLS)

## Composant avant/après

`<AvantApresSlider>` (à créer dans les sections) prend en props deux SmartImage. Si seulement "avant" disponible, le composant masque le slider et n'affiche que l'image disponible avec un label discret.

## Checklist avant mise en prod

- [ ] Au moins 4 images curées dans `/public/images/services/` (les 4 silos prioritaires)
- [ ] Une image hero pour `/`
- [ ] Le reste tourne en placeholders SVG → c'est OK
- [ ] Toutes les images sont en `.webp` < 100 KB
- [ ] Vérifier 0 image > 300 KB dans `/public/images/`
