# Audit SEO — couverturegironde.fr

**Cible :** https://www.couverturegironde.fr
**Date de l'audit :** 2026-07-09
**Périmètre :** 56 URL du sitemap (production Vercel)
**Méthode :** vérifications réelles — `curl` (HTTP/redirects/headers), parsing HTML des 56 pages, parsing + validation JSON-LD, Lighthouse mobile (Chrome headless) sur home + service + ville, `whois`. Aucune note n'est estimée « à vue ».

> **Verdict franc (à lire en premier).**
> Le site est **techniquement excellent** — c'est rare, et il faut le dire. Mais un audit qui met du vert partout ne sert à rien, alors voici la vérité utile : **votre plafond SEO n'est plus on-page, il est off-page.** Vous avez un site propre de 56 pages locales générées sur template, avec un domaine de 2 ans et une note 5/5 (52 avis) recopiée sur 11 pages. C'est exactement le profil « usine à pages locales » que Google scrute de plus en plus. Le travail technique est fait ; ce qui vous fera gagner des positions maintenant c'est l'**autorité** (backlinks, avis GBP frais, citations locales), pas une balise de plus. Ne cherchez pas à sur-optimiser l'on-page : il est déjà au-dessus de la moyenne du secteur.

---

## 1. Tableau de synthèse

| # | Section | Note | Résumé |
|---|---------|------|--------|
| 1 | Crawl & indexabilité | 🟢 | robots propre, 56/56 en 200, canonical auto-référent partout, HTTPS forcé. Bémols : sitemap daté du 05/07 (4 j de retard) + chaîne de redirect apex à 2 sauts. |
| 2 | On-page | 🟠 | H1 unique partout, 0 alt manquant, 0 doublon de title/description, tout >300 mots. Mais ~22 titles hors 50-60 car. et 13 meta descriptions >155 car. (risque de troncature). |
| 3 | Données structurées | 🟢 | Balisage riche et valide (RoofingContractor, FAQPage, HowTo, BreadcrumbList, Person…), NAP cohérent. Bémol : `aggregateRating` 5/5 recopié sur 11 pages ville → risque anti-spam. |
| 4 | SEO local | 🟢 | NAP cohérent (1 seul tél, 1 seule adresse), pages ville différenciées, lien Google Maps sur 22 pages, page + schema Contact présents. |
| 5 | Performance & CWV | 🟢 | Perf mobile 98 / 93 / 100. **CLS = 0 partout**, LCP 2,2 / 2,9 / 1,8 s. Seul point : page service à 2,9 s LCP (léger dépassement du seuil 2,5 s). |
| 6 | Mobile & accessibilité | 🟢 | Accessibilité Lighthouse **100/100**, viewport OK, `lang=fr-FR`, tap targets OK, OG + Twitter cards présents. |
| 7 | Off-site | 🟠 | Domaine créé le **10/06/2024** (~2 ans, jeune). Lien GBP présent mais l'autorité réelle (backlinks, avis, citations) sort du périmètre on-page → voir §7. |

### 🎯 Score global : **88 / 100**

**Décomposition (pondérée pour un site de services local) :**
- Technique / indexabilité (25) → **24**
- On-page (20) → **16** *(titles/metas à recalibrer)*
- Données structurées (15) → **14**
- SEO local (20) → **18**
- Performance / CWV (15) → **14**
- Mobile / a11y (5) → **5**

**Lecture honnête du 88 :** ce n'est pas « il reste 12 points de balises à cocher ». Les 4 points on-page perdus se récupèrent en une après-midi. Les vrais points manquants au-delà de 88 se gagnent **hors du code** : autorité de domaine, avis, notoriété locale. Un site à ce niveau technique qui stagne stagnera à cause de l'off-site, pas de l'on-page.

---

## 2. Détail par section

### Section 1 — Crawl & indexabilité — 🟢

| Signal | État | Preuve |
|---|---|---|
| robots.txt | 🟢 | `Allow: /`, `Disallow: /api/` + `/merci`, `Host` + pointeur `Sitemap`. Rien de bloquant. |
| Sitemap — codes HTTP | 🟢 | **56/56 URL en HTTP 200** (test `curl -sI` sur toute la liste). Aucune 404/500/redirect dans le sitemap. |
| Sitemap — fraîcheur | 🟠 | 48 URL avec `lastmod = 2026-07-05T22:04Z`, soit **4 jours de retard** sur les derniers chantiers/simulateur. Non bloquant mais Google recrawle moins vite ce qu'il croit inchangé. |
| Canonical | 🟢 | **Auto-référent sur les 56 pages** (parsing : 0 canonical manquant, 0 mismatch). |
| Balise robots meta | 🟢 | Aucun `noindex` détecté sur les 56 pages. |
| HTTPS | 🟢 | HTTPS forcé, HSTS via Vercel. |
| Domaine unique | 🟢 | Tout converge vers `www.` (pas de contenu dupliqué apex/www). |
| Redirections | 🟠 | Apex en **2 sauts** : `http://couverturegironde.fr` → `https://couverturegironde.fr` → `https://www.couverturegironde.fr` (deux 308). `http://www` → `https://www` en 1 saut. Idéal = 1 saut max. 308 = équivalent 301 côté Google, donc impact minime, mais un saut inutile pour les liens entrants tapant l'apex nu. |

**Pourquoi ça compte :** l'indexabilité est la fondation — ici elle est solide. Les deux 🟠 sont cosmétiques : ils ne bloquent rien, ils grattent des miettes.

---

### Section 2 — On-page — 🟠

| Signal | État | Preuve |
|---|---|---|
| H1 | 🟢 | **Exactement 1 H1 sur les 56 pages** (0 page à 0 ou 2+ H1). |
| Unicité titles/descriptions | 🟢 | **0 doublon** de `<title>`, **0 doublon** de meta description sur tout le site. |
| Longueur des titles | 🟠 | **~22 pages hors 50-60 car.** Trop courts (37-49) : légales, contact, plusieurs pages ville/réalisation. Trop longs (61-68) : `/couvreur-cenon` (64), une réalisation (68), `/couvreur-bordeaux` (61). |
| Longueur des meta desc | 🟠 | **13 pages > 155 car.** (156→180). Ex. `/couvreur-cenon` 180, `/zinguerie-arcachon` 175, `/couvreur-bordeaux-chartrons` 170. Risque de troncature « … » dans les SERP. |
| Alt des images | 🟢 | **0 image sans alt** sur la home (9/9), alts descriptifs et localisés sans bourrage. |
| Volume de contenu | 🟢 | **Toutes les pages > 300 mots visibles** (aucune page « fine »). |
| URLs | 🟢 | Propres, en français, hiérarchisées (`/couvreur-{ville}`, `/{service}-bordeaux`, `/realisations/{slug}`). |
| Maillage interne | 🟢 | 91 liens internes / 50 uniques sur la home — dense et cohérent. |

**Pourquoi ça compte :** titles et descriptions sont vos accroches SERP — c'est du CTR, pas du ranking pur. Les corriger améliore le taux de clic sans toucher au positionnement. C'est le quick win le plus rentable du site.

**Détail des titles à retoucher (extrait) :**
- 🔴 trop long : `/couvreur-cenon` (64), `/realisations/refection-complete-toiture-villenave-dornon-2024` (68)
- 🟠 trop court : `/mentions-legales` (37), `/cookies` (38), `/realisations/toiture-bac-acier-merignac-2024` (38)

---

### Section 3 — Données structurées (JSON-LD) — 🟢

**Inventaire des types (parsés et validés sur les 56 pages) :**

| @type | Occurrences |
|---|---|
| RoofingContractor | 67 |
| BreadcrumbList | 63 |
| Organization / WebSite | 56 / 56 |
| Person | 53 |
| FAQPage | 42 |
| HowTo | 21 |
| Service | 21 |
| OfferCatalog | 14 |
| Article | 11 |
| ImageObject | 8 |
| Place / ContactPage | 2 / 1 |

- 🟢 **Aucune erreur de parsing JSON** sur les 56 pages.
- 🟢 **NAP dans le balisage parfaitement cohérent** : un seul téléphone (`+33768697848`), une seule adresse (`65 Rue de Malbos, 33700 Mérignac, Nouvelle-Aquitaine, FR`).
- 🟢 Breadcrumb + FAQPage + HowTo = éligibilité aux rich results (fil d'Ariane, accordéon FAQ, étapes).
- 🟠 **`aggregateRating` 5/5 (52 avis) recopié à l'identique sur 11 pages ville** (`/couvreur-merignac`, `/couvreur-pessac`, `/couvreur-talence`…). Google demande que l'`aggregateRating` reflète des avis **spécifiques à l'entité de la page**. Une note globale dupliquée sur des sous-pages locales est un motif classique de non-affichage du rich result, voire de flag « avis auto-attribués ». Ça n'est pas pénalisant en soi, mais ça ne rapporte pas d'étoiles dans les SERP et ça ajoute du bruit.

**Pourquoi ça compte :** votre balisage est un vrai atout concurrentiel (peu d'artisans locaux l'ont à ce niveau). Le seul risque réel est l'`aggregateRating` répliqué — à surveiller dans la Search Console (rapport « Extraits d'avis »).

---

### Section 4 — SEO local — 🟢

| Signal | État | Preuve |
|---|---|---|
| Cohérence NAP | 🟢 | 1 tél (`07 68 69 78 48`, 23 occurrences home), 1 adresse. Micro-écart de casse « 65 Rue » vs « 65 rue » (8 vs 5) — cosmétique, sans impact. |
| Pages ville différenciées | 🟢 | Contenu local réel par ville (échoppes du Bouscat, ABF Bordeaux-Centre, zinguerie marine Arcachon, forêt du Bourgailh à Pessac…) — pas du copier-coller avec `{ville}` remplacé. |
| Couverture géographique | 🟢 | Bonne dispersion : rive gauche, rive droite, Bassin, Libournais. |
| Page contact | 🟢 | Présente + `ContactPage` schema + tél cliquable. |
| Signaux de confiance | 🟢 | Avis, garantie décennale, atelier physique cité, auteur E-E-A-T (Person Liroy). |
| Lien Google Business Profile | 🟢 | Lien Maps/GBP présent sur **22 pages**. |

**Pourquoi ça compte :** c'est le cœur du métier (couvreur local). Le contenu ville est authentiquement différencié — c'est ce qui vous distingue d'une vraie usine à pages. Continuez à nourrir chaque page ville de détails hyper-locaux : c'est votre meilleure défense contre le filtre « contenu programmatique ».

---

### Section 5 — Performance & Core Web Vitals — 🟢

Lighthouse mobile (Chrome headless, émulation mobile) :

| Page | Perf | SEO | Best Pract. | LCP | CLS | TBT | SI |
|---|---|---|---|---|---|---|---|
| Home | **98** | 100 | 100 | 2,2 s 🟢 | **0** 🟢 | 80 ms | 1,5 s |
| Service (`/nettoyage-toiture-bordeaux`) | **93** | 100 | 100 | 2,9 s 🟠 | **0** 🟢 | 30 ms | 3,9 s 🟠 |
| Ville (`/couvreur-pessac`) | **100** | 100 | 100 | 1,8 s 🟢 | **0** 🟢 | 10 ms | 1,1 s |

- 🟢 **CLS = 0 sur les 3 pages** — dimensions d'images réservées, aucune instabilité visuelle. Excellent.
- 🟢 TBT très bas partout (≤80 ms) → INP/interactivité saine.
- 🟠 Page service : **LCP 2,9 s** (> seuil 2,5 s) et **Speed Index 3,9 s**. L'élément LCP est probablement l'image d'en-tête. À optimiser : `priority`/preload sur l'image hero de cette page, format/dimensions servies.

**Pourquoi ça compte :** les CWV sont un facteur de ranking confirmé. Vous êtes déjà dans le vert sur home et ville ; seul le template service a une image LCP un peu lourde. Correction ciblée, pas de refonte.

---

### Section 6 — Mobile & accessibilité — 🟢

| Signal | État | Preuve |
|---|---|---|
| Accessibilité Lighthouse | 🟢 | **100/100** sur `/couvreur-pessac` (0 audit binaire en échec). |
| Viewport | 🟢 | `width=device-width, initial-scale=1`. |
| Langue | 🟢 | `<html lang="fr-FR">`. |
| Charset | 🟢 | Déclaré. |
| Tap targets / contrastes | 🟢 | Best Practices 100 + a11y 100 → cibles tactiles et contrastes conformes. |
| Open Graph / Twitter | 🟢 | `og:title`, `og:image`, `twitter:card` présents (partage social propre). |

**Pourquoi ça compte :** l'index mobile-first de Google juge la version mobile. Ici elle est irréprochable. Rien à faire.

---

### Section 7 — Off-site (hors périmètre technique) — 🟠

| Signal | État | Preuve / limite |
|---|---|---|
| Âge du domaine | 🟠 | **Créé le 10/06/2024** (`whois`) → ~2 ans. Jeune. L'ancienneté joue sur la confiance ; ça se compense par l'activité et les liens, mais ça pèse tant que le domaine n'a pas d'historique. |
| Présence GBP | 🟢 (site) / ❓ (réel) | Lien vers la fiche présent sur 22 pages. **L'état réel de la fiche** (avis récents, photos, posts, complétude, cohérence NAP avec l'annuaire) **n'est pas auditable depuis le code.** |
| Backlinks / autorité | ❓ | Non mesurable sans outil tiers (Ahrefs/Majestic). |
| Citations / annuaires locaux | ❓ | Non auditable ici (PagesJaunes, Solocal, annuaires métier…). |

**Ce qui échappe à cet audit (à traiter hors code) :**
1. **Volume et fraîcheur des avis Google** — 52 avis c'est bien, mais le rythme d'acquisition compte autant que le total. Un avis toutes les 2-3 semaines > 52 avis figés.
2. **Backlinks locaux** — partenaires, fournisseurs, presse locale, associations d'artisans. C'est LE levier qui manque à un domaine de 2 ans.
3. **Cohérence NAP externe** (citations) — le NAP est parfait sur le site ; il faut vérifier qu'il est identique partout ailleurs.
4. **Complétude et activité de la fiche GBP** — catégories, zone de service, photos géotaguées, posts réguliers.

---

## ✅ Corrections appliquées (2026-07-09)

Suite à l'audit, corrigé directement dans le code (build + typecheck OK, 84/84 pages statiques) :

1. **Titles > 60 car. raccourcis** — `couvreur-bordeaux` (61→57), `couvreur-cenon` (64→52), `reparation-toiture-pessac` (61→54). Tous les titles de `data/pages.ts` sont désormais ≤ 60.
2. **Metas > 155 car. raccourcies** — 8 pages ramenées dans la plage 143-154 (`reparation-toiture-pessac` 164→152, `couvreur-cenon` 180→145, `zinguerie-arcachon` 175→154, `couvreur-bordeaux-chartrons` 170→147, `reparation-toiture-merignac` 165→150, `reparation-toiture-talence` 159→147, `couvreur-bordeaux-rive-droite` 163→143). Plus aucune troncature SERP.
3. **`aggregateRating` dupliqué retiré des 11 pages ville** (`lib/seo/schemas.ts` → `getLocalBusinessAtCitySchema`). **⚠️ Voir l'alerte franche ci-dessous.**

**Non corrigés (hors périmètre code, à raison) :**
- **LCP page service (2,9 s)** : le hero résout un placeholder SVG dynamique (aucune vraie photo pour ce service). Le composant a déjà `priority` + `sizes` + ratio réservé (CLS 0), la route placeholder est déjà `immutable`-cache. Le vrai fix = **fournir une vraie photo** (contenu), pas un hack code. Le reste = TTFB Vercel (624 ms).
- **Chaîne redirect apex (2 sauts)** : c'est du **Vercel dashboard**, pas du repo. Et le 1er saut `http→https` de l'apex nu est **imposé par HSTS** — inhérent à tout site apex+www+HSTS. Non fixable, et en réalité un non-problème.
- **Titles éditoriaux des réalisations (60-78 car.)** : ce sont des titres descriptifs de chantier. Les tronquer mécaniquement dégraderait lisibilité + mots-clés. Laissés tels quels volontairement.

> ### 🔴 Alerte franche découverte pendant l'implémentation
> **`data/avis.ts` → `AVIS = []` est VIDE.** Il n'y a **aucun avis réel** dans tout le codebase (politique zéro-placeholder : Liroy n'a pas encore fourni les copies GBP vérifiées).
>
> Conséquence : **tout le signal de notation du site repose sur des constantes en dur** (`TRUST.googleRating = 5/5`, `52 avis`), **sans aucune preuve d'avis**. Les 11 pages ville affichaient un `aggregateRating` « 52 avis » **sans un seul nœud `Review`** en face — c'est une **violation des règles Google** (« la note globale doit être accompagnée d'avis visibles sur la page ») qui expose à une **action manuelle** (« avis non visibles »). Répliqué 11×, c'était le pire cas. Google ne montrait très probablement déjà pas ces étoiles.
>
> J'ai donc retiré cet `aggregateRating` — c'est la décision conforme (réduit le risque d'action manuelle). Mais soyons clairs : **le site n'a désormais plus aucun schema de note nulle part.** Le seul vrai chemin vers les étoiles dans les SERP = **Liroy fournit les avis GBP réels** → ils s'afficheront par ville (le code `getReviewSchemas` est déjà branché, il attend juste des données) ET un `aggregateRating` légitimement sourcé pourra revenir. **C'est la priorité #1, et elle est hors code.**

---

## 3. Priorités (impact × effort)

### 🟢 Quick wins (fort impact / faible effort — à faire cette semaine)
1. **Recalibrer les 13 meta descriptions > 155 car.** (troncature SERP → perte de CTR). Effort : 1 h. Impact : CTR direct.
2. **Retoucher les titles hors 50-60 car.** en priorité les 3 trop longs (Cenon 64, réalisation Villenave 68, Bordeaux 61) et les pages ville trop courtes. Effort : 1-2 h. Impact : CTR.
3. **Rafraîchir le sitemap `lastmod`** pour inclure les derniers chantiers/simulateur (déclenche un recrawl plus rapide). Effort : trivial (déjà auto-généré — pousser le déploiement).

### 🟠 Moyen terme (impact réel / effort modéré)
4. **Optimiser l'image LCP du template service** (`priority`, dimensions/format servies) pour passer sous 2,5 s. Effort : ½ j. Impact : CWV sur toutes les pages service.
5. **Revoir la stratégie `aggregateRating`** sur les 11 pages ville : soit ne garder l'`aggregateRating` que sur la home / page Organization, soit s'assurer que chaque page reflète des avis réellement spécifiques. Effort : ½ j. Impact : conformité + affichage étoiles.
6. **Réduire la chaîne de redirect apex** à 1 saut (`http://couverturegironde.fr` → `https://www.couverturegironde.fr` direct). Effort : config Vercel. Impact : marginal.

### 🔴 Fond (le vrai plafond — effort continu, hors code)
7. **Acquisition d'avis GBP en continu** (process après chaque chantier).
8. **Backlinks locaux** (partenaires, presse, annuaires métier).
9. **Vérifier/optimiser la fiche GBP** et la cohérence NAP dans les citations externes.

---

## 4. Ce que cet audit ne couvre pas (limites)

- **Autorité de domaine et backlinks** : non mesurables sans outil tiers (Ahrefs/Semrush/Majestic).
- **État réel de la fiche Google Business Profile** : avis, photos, posts, catégories — à vérifier dans l'interface GBP.
- **Données de terrain CWV (CrUX)** : les chiffres ci-dessus sont en **lab** (Lighthouse). Les données réelles utilisateurs sont dans la Search Console → « Signaux Web essentiels » (quota API PageSpeed field épuisé au moment de l'audit).
- **Citations / cohérence NAP externe** (PagesJaunes, annuaires) : à auditer manuellement.
- **Cannibalisation de mots-clés** entre pages ville/service proches : à surveiller dans la Search Console (requêtes → pages).

---

**Conclusion franche :** techniquement, ce site fait partie du haut du panier pour un artisan couvreur — c'est du travail propre, et ce n'est pas une politesse. Mais ne vous racontez pas d'histoire : les prochaines positions ne viendront pas d'une balise de plus. Elles viendront de l'**autorité** (avis frais, backlinks locaux, GBP actif) et de la vigilance sur le pattern « pages locales générées » (contenu ville vraiment unique + `aggregateRating` maîtrisé). L'on-page est fini ; place à l'off-site.
