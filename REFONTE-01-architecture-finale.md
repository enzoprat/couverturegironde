# Architecture finale — couverturegironde.fr v2

> Priorité business : **démoussage / nettoyage toiture**.
> Tout l'arbre est conçu pour pousser le jus SEO vers ce silo en premier.

## Principe de silos

```
                          ┌─────────────────┐
                          │   ACCUEIL (/)   │
                          └────────┬────────┘
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        │                          │                          │
        ▼                          ▼                          ▼
┌───────────────┐         ┌────────────────┐         ┌────────────────┐
│ SILO PRIORITÉ │         │ SILOS SERVICES │         │  SILOS LOCAUX  │
│  (démoussage) │         │  (secondaires) │         │  (par ville)   │
└───────┬───────┘         └────────┬───────┘         └───────┬────────┘
        │                          │                         │
        ▼                          ▼                         ▼
   service-ville              service-bordeaux         couvreur-{ville}
   (matrice)                                                 │
                                                             ▼
                                                       service-{ville}
                                                       (rejoint silo)
```

## Niveau 0 — Accueil

`/` — Hero démoussage/nettoyage prioritaire (mais site multi-services), preuves sociales, services, zones, FAQ, CTA.

## Niveau 1 — Silo prioritaire DÉMOUSSAGE/NETTOYAGE

### Hubs services money pages
- `/demoussage-toiture-bordeaux` ← **À CRÉER** (page mère du silo, manque actuellement)
- `/nettoyage-toiture-bordeaux` ← existe (à refondre)
- `/traitement-hydrofuge-toiture-bordeaux` ← existe (à refondre)

### Pages service × ville (priorité absolue)
- `/demoussage-toiture-merignac`
- `/demoussage-toiture-pessac`
- `/demoussage-toiture-talence`
- `/demoussage-toiture-begles`
- `/demoussage-toiture-villenave-dornon`
- `/nettoyage-toiture-merignac`
- `/nettoyage-toiture-pessac` ← existe (à refondre)
- `/nettoyage-toiture-talence`
- `/nettoyage-toiture-begles`
- `/nettoyage-toiture-villenave-dornon`
- `/traitement-hydrofuge-toiture-merignac`
- `/traitement-hydrofuge-toiture-pessac`
- `/traitement-hydrofuge-toiture-talence`
- `/traitement-hydrofuge-toiture-begles`

**Total silo principal : 17 pages prioritaires.**

## Niveau 1 — Silos services secondaires

(Conserver l'existant + corriger slugs)

- `/reparation-toiture-bordeaux` ← conservée
- `/urgence-fuite-toiture-bordeaux` ← conservée (mot-clé fort)
- `/zinguerie-bordeaux` ← redirect 301 depuis `/zinguerie-gouttieres-bordeaux`
- `/installation-velux-bordeaux` ← conservée
- `/toiture-neuve-bordeaux` ← conservée
- `/faitage-toiture-bordeaux` ← conservée
- `/charpente-bordeaux` ← redirect 301 depuis URL pourrie actuelle
- `/ornements-toiture-bordeaux` ← conservée (garde le jus, ne pas amplifier)
- `/couvreur-bordeaux` ← redirect 301 depuis `/couverture-bordeaux` (normalise le pattern)

## Niveau 1 — Hubs villes

- `/couvreur-merignac` ← **À CRÉER** (ville siège ! manque absolument)
- `/couvreur-pessac` ← existe
- `/couvreur-talence` ← existe
- `/couvreur-begles` ← existe
- `/couvreur-villenave-dornon` ← à créer

**Extension progressive (phase 4) :**
Le Bouscat, Gradignan, Eysines, Bruges, Cenon, Lormont, Floirac, Saint-Médard-en-Jalles, Blanquefort, Libourne, Arcachon, La Teste-de-Buch.

## Niveau 1 — Pages institutionnelles & conversion

- `/devis` ← redirect 301 depuis `/devis-couvreur-gironde`
- `/realisations` ← existe + nouvelles pages individuelles `/realisations/[slug]`
- `/a-propos` ← **À CRÉER** (E-E-A-T : équipe, ancienneté 2005, certifications)
- `/tarifs` ← **À CRÉER** (transparence prix = différenciateur fort)
- `/avis` ← **À CRÉER** (page dédiée avec schema Review)
- `/zones-intervention` ← **À CRÉER** (carte + liste villes)
- `/contact` ← **À CRÉER**
- `/urgence` ← **À CRÉER** (page urgence avec sticky téléphone, schema 24/7)

## Niveau 2 — Guides éditoriaux (UNIQUEMENT à intention commerciale)

**Aucun article générique type "comment nettoyer une toiture".** Seulement des guides money-keyword avec intention de devis.

- `/guides/prix-demoussage-toiture-bordeaux` (commercial, top funnel)
- `/guides/prix-nettoyage-toiture-gironde` (commercial)
- `/guides/aides-renovation-toiture-2026` (intent élevé sur "aides")
- `/guides/quand-demousser-toiture-gironde` (timing local = trigger devis)
- `/guides/garantie-decennale-couvreur` (réassurance avant achat)

**Maximum 5-8 guides total. Pas plus avant validation des positions des services.**

## Pages légales

- `/mentions-legales` ← **À CRÉER** (manquant aujourd'hui = risque légal)
- `/politique-de-confidentialite` ← conservée
- `/cookies` ← conservée
- `/merci` ← conservée (noindex)

## Récap volumes phase 1 (à 60 jours)

| Type | Existantes | À créer | À refondre | Total cible |
|---|---|---|---|---|
| Accueil | 1 | 0 | 1 | 1 |
| Services Bordeaux | 11 | 1 (démoussage) | 11 | 12 |
| Service × ville (silo démoussage) | 1 | 13 | 1 | 14 |
| Hubs villes | 3 | 2 | 3 | 5 |
| Conversion / institution | 2 (devis, realisations) | 6 | 2 | 8 |
| Guides | 0 | 3 (max prio) | 0 | 3 |
| Légales | 3 | 1 | 0 | 4 |
| **TOTAL phase 1** | **21** | **26** | **18** | **47** |

## Pages refusées (justification)

| Page envisageable | Verdict | Raison |
|---|---|---|
| `/comment-nettoyer-toiture` | NON | Intention informationnelle pure, ne convertit pas, cannibalise `/nettoyage-toiture-bordeaux` |
| `/blog/*` (hors guides money) | NON | Pas de blog "remplissage" — uniquement guides commerciaux |
| `/couvreur-bouliac` (en phase 1) | REPORTÉ | Volume search trop faible pour priorité 1, à activer phase 4 |
| `/couvreur-arcachon` (en phase 1) | REPORTÉ | Hors zone primaire, attendre solidification Bordeaux Métropole |
| `/services` (page parente services) | NON | Cannibalise l'accueil, redondant avec footer/nav |
| `/quartiers/*` Bordeaux | REPORTÉ | À ouvrir uniquement après domination métropole confirmée (phase 5+) |

## Structure d'URL — règles dures

- minuscules sans accents (`villenave-dornon` pas `villenave-d'ornon`)
- pas de trailing slash (`trailingSlash: false`)
- pattern unique : `{service}-toiture-{ville}` ou `{service}-bordeaux` ou `couvreur-{ville}` ou `/guides/{slug}` ou `/realisations/{slug}`
- max 60 caractères
- pas de stop-words
