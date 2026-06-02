# Silos sémantiques & maillage interne

## Matrice du jus SEO

```
                  ┌───────────────┐
                  │   ACCUEIL /   │
                  └───────┬───────┘
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
  ┌──────────┐      ┌──────────┐      ┌──────────┐
  │ SERVICES │      │  VILLES  │      │  GUIDES  │
  │   (N1)   │      │   (N1)   │      │   (N1)   │
  └─────┬────┘      └─────┬────┘      └────┬─────┘
        │                 │                 │
        ▼                 ▼                 ▼
  ┌──────────┐      ┌──────────┐      ┌──────────┐
  │ Service× │◄────►│ Service× │      │   Guide  │
  │   Ville  │      │   Ville  │      │ détaillé │
  │   (N2)   │      │   (N2)   │      │   (N2)   │
  └─────┬────┘      └─────┬────┘      └────┬─────┘
        │                 │                 │
        └────────┬────────┴─────────────────┘
                 ▼
         ┌──────────────┐
         │ Réalisations │
         │  / Preuves   │
         └──────┬───────┘
                ▼
         ┌──────────────┐
         │    /devis    │
         │  CONVERSION  │
         └──────────────┘
```

## Règles de pointage (qui pointe vers qui)

### Accueil
- Liens vers : 6 hubs services prioritaires + 4 villes prioritaires + 3 guides phares + /devis + /realisations
- Ne pointe **PAS** vers : pages légales (footer uniquement), service×ville (trop nombreux)

### Hub service Bordeaux (ex: `/demoussage-toiture-bordeaux`)
- Pointe vers :
  - 8 pages service×ville (toutes les villes principales pour ce service) — ancre "Démoussage à {Ville}"
  - 3 services connexes (ex: nettoyage, hydrofuge, faîtage) — ancre exacte du service
  - 2 guides liés (ex: "Quand démousser sa toiture", "Prix démoussage")
  - 1 réalisation type (ex: chantier démoussage Mérignac)
  - /devis avec ancre "Devis démoussage gratuit"
- Reçoit du : accueil + toutes les pages service×ville de démoussage + sidebar / cross-link des autres services

### Hub ville (ex: `/couvreur-pessac`)
- Pointe vers :
  - 8 pages service×ville pour Pessac (reparation-toiture-pessac, etc.)
  - 4 villes voisines (Mérignac, Talence, Gradignan, Bègles)
  - 1 guide local (ex: "Aides Bordeaux Métropole")
  - 1 réalisation locale (chantier à Pessac)
  - /devis avec ancre "Devis couvreur Pessac"

### Page service×ville (ex: `/demoussage-toiture-pessac`)
- Pointe vers :
  - Hub service (`/demoussage-toiture-bordeaux`) — ancre "Démoussage toiture à Bordeaux"
  - Hub ville (`/couvreur-pessac`) — ancre "Couvreur Pessac"
  - 4 villes voisines pour ce même service : `/demoussage-toiture-merignac`, `/demoussage-toiture-talence`, etc.
  - 3 autres services dans la même ville : `/reparation-toiture-pessac`, `/zinguerie-pessac`, `/urgence-fuite-pessac`
  - 1 réalisation locale si dispo
  - /devis (ancre contextuelle)

### Guides
- Pointe vers :
  - 1-2 services concernés (ancres mot-clé naturelles)
  - 2-3 autres guides du même cluster
  - /devis (ancre soft type "demandez l'avis d'un expert")
- Reçoit du : Hub /guides + services liés + autres guides

### Réalisations
- Pointe vers : 1 service correspondant + 1 ville + /devis
- Sont citées depuis : services correspondants + page ville correspondante

## Ancres recommandées (variation pour éviter sur-optimisation)

### Bonnes ancres (varier)
- Exactes : "couvreur Bordeaux", "démoussage toiture Pessac"
- Partielles : "démoussage à Pessac", "intervention à Pessac"
- Branded : "Couverture Gironde", "notre équipe"
- Génériques contextuelles : "en savoir plus sur la démoussage", "découvrir nos tarifs"
- Naturelles : "comment démousser sa toiture", "quels sont les prix"

### À éviter
- 100% exact-match sur toutes les pages (over-optimisation pénalisée Penguin)
- "cliquez ici", "ici" (zero valeur SEO)
- Liens images sans `alt` (perte de jus)
- Liens nofollow internes (jamais, sauf /merci et pages légales si besoin)

## Profondeur maximale
- N0 → N1 : 1 clic
- N0 → N2 : 2 clics maximum
- N0 → N3 (longue traîne) : 3 clics maximum
- **AUCUNE page** ne doit être à >3 clics de l'accueil

## Implémentation Next.js
- Composant `<RelatedPages>` data-driven (lit un JSON par page)
- Composant `<Breadcrumb>` automatique depuis le pathname
- Footer global avec sitemap visible (lien vers /plan-du-site HTML pour Google + UX)
- Composant `<ServiceCrossLink>` sur les hubs services qui liste les villes
- Composant `<CityCrossLink>` sur les hubs villes qui liste les services
