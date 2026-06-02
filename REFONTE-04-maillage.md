# Matrice de maillage interne

> Principe : faire circuler le jus SEO vers le silo prioritaire **démoussage/nettoyage** sans sur-optimisation détectable.
> Règle : chaque page = 3 à 7 liens internes contextuels sortants (hors header/footer).

## Schéma du flux de jus

```
                     ACCUEIL
                        │
       ┌────────────────┼────────────────┐
       │                │                │
       ▼                ▼                ▼
  /demoussage-     /nettoyage-     /traitement-
  toiture-          toiture-        hydrofuge-
  bordeaux          bordeaux        toiture-bordeaux
       │                │                │
       └────┬───────────┴────────┬───────┘
            │                    │
            ▼                    ▼
    /demoussage-          /nettoyage-
    toiture-{ville}       toiture-{ville}
       ▲   │                ▲   │
       │   └──── voisines ──┘   │
       │                        │
       └──── hub /couvreur-{ville} ◄──── liens autres services
```

## Règles de pointage (par typologie)

### 1. Accueil (`/`)
Liens internes sortants (hors menu/footer) :
- **3 services prioritaires** (démoussage, nettoyage, hydrofuge) — ancres exactes ou partielles
- **3 services secondaires** (urgence-fuite, réparation, zinguerie)
- **4 hubs villes principales** (Mérignac, Pessac, Talence, Bègles)
- **3 réalisations récentes** (avec ville mentionnée)
- **1 lien vers `/avis`** (preuves)
- **1 lien vers `/devis`** (conversion)

Total : ~15 liens internes contextuels.

### 2. Hub service prioritaire (`/demoussage-toiture-bordeaux`)
- **Vers parent** : `/couvreur-bordeaux` (1 lien, ancre "entreprise de couverture à Bordeaux")
- **Vers services frères silo** : `/nettoyage-toiture-bordeaux`, `/traitement-hydrofuge-toiture-bordeaux` (2 liens, ancres exactes)
- **Vers services complémentaires** : `/reparation-toiture-bordeaux`, `/faitage-toiture-bordeaux` (2 liens, ancres naturelles)
- **Vers les 5 villes du silo** : `/demoussage-toiture-merignac`, `/demoussage-toiture-pessac`, `/demoussage-toiture-talence`, `/demoussage-toiture-begles`, `/demoussage-toiture-villenave-dornon` (5 liens, ancres "Démoussage à {Ville}" en variant 50% exactes / 50% partielles)
- **Vers guides** : `/guides/prix-demoussage-toiture-bordeaux`, `/guides/quand-demousser-toiture-gironde` (2 liens)
- **Vers 1 réalisation type démoussage** : `/realisations/demoussage-toiture-tuile-canal-merignac` (1 lien)
- **Vers `/devis`** : ancre contextuelle "demander un devis démoussage gratuit"
- **Vers `/avis`** : ancre "consulter les avis clients"

Total : ~14 liens internes.

### 3. Page service × ville prioritaire (ex: `/demoussage-toiture-pessac`)
- **Vers hub service** : `/demoussage-toiture-bordeaux` — ancre "Démoussage de toiture à Bordeaux"
- **Vers hub ville** : `/couvreur-pessac` — ancre "Couvreur à Pessac"
- **Vers 3 villes voisines même service** :
  - `/demoussage-toiture-talence` (ancre "Démoussage à Talence")
  - `/demoussage-toiture-merignac` (ancre "Intervention à Mérignac")
  - `/demoussage-toiture-begles` (ancre "Démoussage Bègles")
- **Vers 2 services complémentaires même ville (si existent)** :
  - `/nettoyage-toiture-pessac` (ancre exacte)
  - `/traitement-hydrofuge-toiture-pessac` (ancre exacte ou "traitement hydrofuge à Pessac")
- **Vers `/devis`** : ancre contextuelle "Devis démoussage gratuit"
- **Vers `/realisations/{slug-local}`** : 1 lien si réalisation locale dispo

Total : ~9 liens internes.

### 4. Hub ville (`/couvreur-pessac`)
- **Vers `/couvreur-bordeaux`** : ancre "entreprise de couverture Bordeaux Métropole"
- **Vers 6 services à Pessac** :
  - `/demoussage-toiture-pessac` (priorité, ancre exacte)
  - `/nettoyage-toiture-pessac`
  - `/traitement-hydrofuge-toiture-pessac`
  - `/reparation-toiture-bordeaux` (lien vers hub si pas de page service×ville pour ce service)
  - `/urgence-fuite-toiture-bordeaux`
  - `/zinguerie-bordeaux`
- **Vers 3 villes voisines** : `/couvreur-talence`, `/couvreur-merignac`, `/couvreur-begles`
- **Vers 1 guide local** : `/guides/aides-renovation-toiture-2026`
- **Vers `/devis`** : ancre "Devis couvreur Pessac"

Total : ~12 liens internes.

### 5. Pages services secondaires (réparation, urgence, velux, etc.)
- **Vers `/couvreur-bordeaux`** : 1 lien
- **Vers 2 services complémentaires** : ex. depuis réparation → urgence-fuite + zinguerie
- **Vers les 5 villes principales** (en mode "intervention à...") avec ancres variées
- **Vers `/devis`** : 1 lien
- **Vers `/realisations`** : 1 lien
- **Mention discrète des services prioritaires** (1 phrase + 1 lien naturel vers démoussage si pertinent)

### 6. Guides
- **Vers le ou les services concernés** : ancres mot-clé naturelles
- **Vers 1-2 autres guides** du même cluster
- **Vers `/devis`** : ancre soft type "obtenir un devis personnalisé"

### 7. Réalisations
- **Vers le service correspondant** (ancre exacte du service)
- **Vers la ville correspondante** (hub ville)
- **Vers `/realisations`** : retour au hub
- **Vers `/devis`** : conversion

## Tableau de maillage prioritaire (silo démoussage)

| Page source | Liens vers (priorité 1) | Ancres recommandées |
|---|---|---|
| `/` | `/demoussage-toiture-bordeaux` | "Démoussage toiture" / "découvrir notre démoussage" |
| `/couvreur-bordeaux` | `/demoussage-toiture-bordeaux` | "démoussage de toiture" |
| `/nettoyage-toiture-bordeaux` | `/demoussage-toiture-bordeaux` | "démoussage complémentaire" / "démoussage et traitement" |
| `/traitement-hydrofuge-toiture-bordeaux` | `/demoussage-toiture-bordeaux` | "démoussage préalable" |
| `/demoussage-toiture-bordeaux` | toutes les /demoussage-toiture-{ville} | "à Mérignac", "intervention à Pessac", etc. |
| `/demoussage-toiture-pessac` | `/demoussage-toiture-talence`, `/demoussage-toiture-merignac` | "communes voisines : Talence", etc. |
| `/couvreur-pessac` | `/demoussage-toiture-pessac` | "démoussage de toiture à Pessac" |
| `/realisations/*` | `/demoussage-toiture-{ville}` correspondante | nom du service + ville |
| `/avis` | `/demoussage-toiture-bordeaux` (le plus avisé) | "service démoussage le plus demandé" |
| `/guides/prix-demoussage-toiture-bordeaux` | `/demoussage-toiture-bordeaux` | "notre service démoussage à Bordeaux" |
| `/guides/quand-demousser-toiture-gironde` | `/demoussage-toiture-bordeaux` | "faire appel à un professionnel" |

## Stratégie d'ancres (anti sur-optimisation)

Répartition cible des ancres internes pointant vers la page silo (`/demoussage-toiture-bordeaux`) :

| Type d'ancre | % cible | Exemples |
|---|---|---|
| Exacte | 25% | "démoussage toiture Bordeaux" |
| Partielle | 35% | "démoussage de toiture", "notre démoussage" |
| Branded | 15% | "Couverture Gironde démoussage" |
| Naturelle / contextuelle | 20% | "service le plus demandé", "intervention complète" |
| URL ou nom de domaine | 5% | "couverturegironde.fr/demoussage..." |

**Jamais** : "cliquez ici", "ici", "en savoir plus" seul sans contexte.

## Profondeur de clic — règle absolue

Toute page indexable doit être atteignable en **≤ 3 clics depuis l'accueil**.

Validation par crawl Screaming Frog avant chaque mise en production majeure.

## Composants techniques pour le maillage

### `<RelatedServicesByCity>` (sur pages /demoussage-toiture-{ville})
Liste les 3-4 services frères dans la même ville si pages existent.

### `<NeighborCitiesByService>` (sur pages /demoussage-toiture-{ville})
Liste 3-4 pages /demoussage-toiture-{ville voisine} avec calcul de distance ou voisinage géographique précalculé.

### `<RelatedRealisations>` (sur services et villes)
Filtre les réalisations matching service ou ville.

### `<ContextualCTA>` (toutes les pages)
CTA `/devis` mais avec **ancre contextuelle dynamique** (passe le service/ville en prop).

### `<Breadcrumb>` (toutes les pages sauf accueil)
Génère breadcrumb depuis le pathname + JSON-LD BreadcrumbList.

## Sitemap.xml — priorisation

Hiérarchie de priorité dans le sitemap dynamique :

| Type | Priority | ChangeFreq |
|---|---|---|
| `/` | 1.0 | weekly |
| Hubs services silo prioritaire (démoussage, nettoyage, hydrofuge) | 0.9 | weekly |
| Service × ville silo prioritaire | 0.85 | monthly |
| Autres services Bordeaux | 0.8 | monthly |
| Hubs villes | 0.8 | monthly |
| Service × ville secondaire | 0.75 | monthly |
| Guides | 0.7 | monthly |
| Réalisations individuelles | 0.6 | yearly |
| `/avis`, `/realisations`, `/tarifs`, `/a-propos` | 0.7 | monthly |
| `/devis`, `/contact`, `/urgence` | 0.7 | yearly |
| `/merci`, légales | exclu du sitemap | — |
