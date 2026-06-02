# Design System — Couverture Gironde v2

> Direction : **premium discret, local, rassurant**. L'opposé du "site couvreur classique" (gradients criards, bandeaux fluo, polices Comic-Sans-énergiques).
> Référence d'inspiration : Linear / Stripe / Hermès / artisans premium type Maison Pariente.

## 1. Palette de couleurs

### Couleurs principales

| Token | HEX | RGB | Usage |
|---|---|---|---|
| **Ardoise** | `#0F1E33` | 15 30 51 | Texte principal, fonds sombres, headings |
| **Ardoise-700** | `#1E2D44` | 30 45 68 | Hover sombre, surfaces sombres secondaires |
| **Pierre** | `#F5F2EC` | 245 242 236 | Background warm clair (pas de blanc cru) |
| **Crème** | `#FAF8F4` | 250 248 244 | Cards background |
| **Terre cuite** | `#C8542E` | 200 84 46 | CTA primaire, accents, lien actif |
| **Terre cuite 600** | `#A8421E` | 168 66 30 | Hover CTA |

### Couleurs fonctionnelles

| Token | HEX | Usage |
|---|---|---|
| **Vert garantie** | `#2F7A47` | Badges décennale, validation, "garanti" |
| **Vert garantie clair** | `#E8F1EB` | Background des badges garantie |
| **Bleu urgence** | `#0E5E8A` | Section urgence (PAS de rouge = anxiogène) |
| **Or expertise** | `#B7882E` | Badge "20 ans d'expérience", étoiles avis |
| **Gris 600** | `#5C6675` | Texte secondaire |
| **Gris 400** | `#9BA4B0` | Texte tertiaire, placeholders |
| **Gris 200** | `#E5E7EB` | Bordures, séparateurs |
| **Gris 100** | `#F3F4F6` | Fond input |

### Règles de combinaison
- **Texte sur Pierre/Crème** : Ardoise (#0F1E33). Jamais gris pour le texte principal.
- **Texte sur Ardoise** : Pierre (#F5F2EC). Jamais blanc cru.
- **CTA primaire** : Terre cuite sur Ardoise, ou Terre cuite sur Pierre.
- **CTA secondaire** : outline Ardoise sur Pierre.
- **Contraste minimum** : WCAG AA partout, AAA sur les CTA (4.5:1 et 7:1).

## 2. Typographie

### Choix : **UNE seule famille — Plus Jakarta Sans** (variable font, self-hosted via `next/font/google`)

- Weights utilisés : **500, 600, 700, 800**
- Total téléchargé : ~80 KB woff2 (vs ~600 KB actuel avec 8 fonts)
- Display swap pour éviter FOIT

### Échelle typographique (mobile-first, fluid via `clamp`)

| Token | Mobile | Desktop | Weight | Usage |
|---|---|---|---|---|
| `display` | 36px / 1.05 | 64px / 1.05 | 800 | H1 hero accueil |
| `h1` | 32px / 1.1 | 48px / 1.1 | 700 | H1 pages |
| `h2` | 26px / 1.15 | 36px / 1.15 | 700 | Sections |
| `h3` | 20px / 1.2 | 24px / 1.25 | 700 | Sous-sections |
| `h4` | 18px / 1.3 | 20px / 1.3 | 600 | Cards |
| `lead` | 18px / 1.5 | 20px / 1.55 | 500 | Sous-titres hero |
| `body` | 16px / 1.6 | 17px / 1.65 | 400 | Paragraphes |
| `small` | 14px / 1.5 | 15px / 1.5 | 500 | Légendes, badges |
| `xs` | 12px / 1.4 | 13px / 1.4 | 600 | Tags, eyebrows |

### Règles
- `letter-spacing: -0.02em` sur H1/H2 (resserrement premium)
- `letter-spacing: 0` sur le body
- `font-feature-settings: "ss01", "cv11"` (alternates premium quand dispo)
- Maximum **65-72 caractères par ligne** sur le body (`max-width: 68ch`)
- **Une seule famille suffit** — l'élégance vient de la hiérarchie, pas du mix de polices

## 3. Spacing scale (4px base)

| Token | Valeur |
|---|---|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |
| `space-32` | 128px |

- **Section padding desktop** : 96px vertical, 24-48px horizontal
- **Section padding mobile** : 64px vertical, 20px horizontal
- **Gap entre cards** : 24px mobile, 32px desktop
- **Gap intra-card** : 12-16px

## 4. Radius

| Token | Valeur | Usage |
|---|---|---|
| `radius-sm` | 6px | Badges, tags |
| `radius-md` | 12px | Inputs, buttons |
| `radius-lg` | 16px | Cards |
| `radius-xl` | 24px | Hero images, sections featured |
| `radius-full` | 9999px | Pills, avatar |

## 5. Shadows (très sobres, pas de "card flottante 2015")

| Token | CSS |
|---|---|
| `shadow-xs` | `0 1px 2px rgba(15, 30, 51, 0.04)` |
| `shadow-sm` | `0 2px 4px rgba(15, 30, 51, 0.05), 0 1px 2px rgba(15, 30, 51, 0.03)` |
| `shadow-md` | `0 4px 12px rgba(15, 30, 51, 0.06), 0 2px 4px rgba(15, 30, 51, 0.04)` |
| `shadow-lg` | `0 12px 32px rgba(15, 30, 51, 0.08)` (uniquement hero CTA hover) |

**Pas de shadow colorée**. Pas de glow. Pas de neumorphism.

## 6. Composants

### Button — 3 variants

**Primary (Terre cuite)**
- bg: `#C8542E`, text: `#FAF8F4`, weight 600
- Hover: bg `#A8421E`
- Active: scale 0.98
- Padding: 14px 24px (mobile), 16px 28px (desktop)
- Radius: 12px
- Avec icône à droite (flèche / téléphone)

**Secondary (Outline Ardoise)**
- border 1.5px `#0F1E33`, text `#0F1E33`, bg transparent
- Hover: bg `#0F1E33`, text `#FAF8F4`

**Ghost**
- text only avec underline animée gauche-droite au hover
- Pour liens "en savoir plus", liens de section

### Card service
- bg Crème, border 1px gris 200
- radius lg (16px)
- padding 24-32px
- Icône en haut (32-40px) — pictogramme sobre, pas emoji, pas illustration cartoon
- Titre H4
- Description 2-3 lignes max
- Lien "Découvrir →" en ghost button
- Hover : border devient Ardoise, légère élévation shadow-md

### Card avis
- bg Pierre, radius lg
- 5 étoiles or expertise en haut
- Texte italique italic light, 2-3 lignes
- Footer : avatar (cercle 40px) + prénom + ville + date
- Source mentionnée (badge Google)

### Card avant/après
- Slider horizontal (composant léger sans dépendance type @react-image-magnify)
- Ratio 4:3, radius xl (24px)
- Label "Avant" / "Après" pill en surimpression
- Caption : ville + service + date

### Badge de confiance
- pill arrondi
- Icône à gauche (16px) + texte 14px weight 600
- Variants : décennale (vert), Google 5/5 (or), 20 ans (or), 7j/7 (bleu urgence)

### Sticky phone bar (mobile uniquement)
- Position fixed bottom 0, hauteur 64px
- bg Ardoise, text Pierre
- Téléphone à gauche (icône + numéro), CTA Terre cuite à droite ("Devis gratuit")
- Tap target 48px minimum
- Visible dès scroll > 200px
- Cache automatiquement quand formulaire visible (évite recouvrement)

### Form (devis)
- Inputs : bg gris 100, border transparent, focus border Terre cuite, radius 12px, padding 14px 16px
- Label flottant au focus
- Erreur en gris 600 (pas rouge — moins anxiogène)
- Submit : bouton primary plein largeur sur mobile
- Indicateur de progression discret si form multi-étapes

### Hero
- H1 display, max-width 16ch desktop
- Sous-titre lead, max-width 50ch
- 2 CTA côte à côte (primary + secondary)
- Trust badges en ligne en dessous (4 max, scroll horizontal mobile)
- Image hero : ratio 5:4 mobile, 4:3 desktop, AVIF, priority + fetchPriority="high"
- Gradient overlay subtil sur l'image pour lisibilité H1 si superposition (sinon image à droite)

## 7. Iconographie

- **Lucide React** (sobre, premium, license MIT, tree-shakeable)
- Stroke width 1.75
- Taille standard 20-24px
- Couleur héritée du parent
- **Aucune emoji décorative** dans les pages publiques (uniquement éventuellement en hero label si vraiment pertinent)

## 8. Imagerie

### Style photographique attendu
- Photos réelles de chantiers (pas de stock)
- Lumière naturelle, pas de filtre
- Mise en valeur du travail (avant/après, gros plan détails)
- Présence humaine occasionnelle (équipe en intervention, casque)
- **Bannir** : photos stock générique "ouvrier souriant pouce levé"

### Specs techniques
- AVIF en premier choix, WebP fallback, JPEG dernier recours
- Sizes : 640 / 1080 / 1440 / 1920
- Placeholder blur base64 ≤ 200 bytes
- Alt obligatoire et descriptif (pas de "image", pas de "photo de chantier" — décrire l'action + ville)
- Ratio standardisés : hero 4:3, card service 1:1, avant/après 4:3, gallery 3:2

## 9. Micro-interactions

- **Fade-in à l'apparition** : `opacity 0 → 1`, `translateY 8px → 0`, durée 400ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`
- **Hover button** : background transition 200ms, scale sur active 0.98
- **Hover card** : border + shadow transition 250ms
- **Hover link** : underline animée gauche-droite (background-size animation, pas border)
- **Focus visible** : ring 2px Terre cuite, offset 2px
- **PAS de parallax**, **PAS d'animation au scroll lourde**, **PAS d'autoplay**, **PAS de carousel auto-rotate**

## 10. Layout

### Grille
- Container max : 1280px (paddings 24-48px)
- Container narrow (texte article) : 720px
- Grid de cards : 1 col mobile, 2 cols tablette, 3-4 cols desktop selon contexte

### Breakpoints (mobile-first)
- `sm` 640px
- `md` 768px
- `lg` 1024px
- `xl` 1280px

### Header
- Hauteur 72px desktop / 64px mobile
- bg Pierre avec border-bottom 1px gris 200
- Sticky avec subtle backdrop-blur au scroll
- Logo gauche, nav centre/droite desktop
- Téléphone visible desktop (lien `tel:`)
- CTA "Devis gratuit" Terre cuite à droite
- Mobile : hamburger 24px, drawer plein écran depuis la droite

### Footer
- bg Ardoise, text Pierre
- 4 colonnes desktop / 1 col mobile (accordion possible)
- Colonnes : Services / Villes / À propos / Contact (NAP visible)
- Bottom : copyright + mentions légales + cookies + plan du site
- Schema Organization embedded JSON-LD

## 11. Dark mode ?

**Non, pas en phase 1.** Cible client = recherche locale urgente, dark mode = overhead inutile. À envisager phase 2 si data utilisateur le justifie.

## 12. Mood board (références)

- **Aesthetic** : Aesop (typo, espace, beige warm), Hermès (élégance discrète), Frank Body (warm palette), Atelier de l'Argoat (artisan premium FR)
- **Layout** : Linear (whitespace, hiérarchie), Apple (clarity), Stripe (cards subtiles)
- **Photographie** : style "documentaire artisan", lumière dorée fin de journée, pas de filtres saturés

## 13. Don'ts

- ❌ Gradient bleu→orange criard
- ❌ Police italique Pacifico ou Lobster
- ❌ Boutons gros avec ombre 3D
- ❌ Carousel avec dots violets
- ❌ "Cliquez ici" en bouton
- ❌ Compteurs animés "+1234 clients satisfaits"
- ❌ Banner cookies plein écran modal
- ❌ Chatbot popup auto-ouvert
- ❌ Sticky CTA qui tape à 5s d'arrivée
- ❌ Bannière "promo limitée" anxiogène
- ❌ Polices Comic-style ou pseudo-écriture-manuscrite
- ❌ Curseur custom
- ❌ Animations Lottie de 200 KB
