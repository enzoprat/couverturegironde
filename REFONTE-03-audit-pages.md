# Audit page-par-page — décision finale

> Légende : 🟢 = à conserver / 🟡 = à refondre / 🔵 = à créer / 🟠 = à fusionner / 🔴 = à supprimer

## Pages existantes (21 URLs)

| URL actuelle | Décision | Action concrète | Justification |
|---|---|---|---|
| `/` | 🟡 | Refonte design + pivoter hero vers démoussage/nettoyage prioritaire tout en restant multi-services | Page la plus puissante. Hero actuel généraliste sous-exploite la priorité business. |
| `/couverture-bordeaux` | 🟠 | **301 → `/couvreur-bordeaux`** + refonte | Slug "couverture" peu cherché vs "couvreur". Pas de cannibalisation avec hub démoussage. Devient le hub métier généraliste. |
| `/reparation-toiture-bordeaux` | 🟡 | Conserver URL + refonte design + densifier contenu | Mot-clé fort, page existante a du jus. Aucune raison de toucher l'URL. |
| `/nettoyage-toiture-bordeaux` | 🟡 | Conserver URL + **refonte majeure** (page silo critique) | PAGE STRATÉGIQUE n°1. À enrichir : prix, méthode, garantie, FAQ locales, avant/après. |
| `/zinguerie-gouttieres-bordeaux` | 🟠 | **301 → `/zinguerie-bordeaux`** + refonte | URL plus courte, mieux ciblée. "Gouttières" couvert dans le contenu et h2. |
| `/urgence-fuite-toiture-bordeaux` | 🟡 | Conserver URL + refonte avec sticky urgence renforcée | Mot-clé "urgence fuite" = très forte intention. Optimiser CTA téléphone +++. |
| `/installation-velux-bordeaux` | 🟢 | Conserver URL + refonte design uniquement | URL propre, niche stable. |
| `/toiture-neuve-bordeaux` | 🟢 | Conserver URL + refonte design | OK. |
| `/traitement-hydrofuge-toiture-bordeaux` | 🟡 | Conserver URL + **refonte majeure** (silo prioritaire avec démoussage) | Complète parfaitement le silo nettoyage/démoussage. Souvent vendu en bundle. |
| `/faitage-toiture-bordeaux` | 🟢 | Conserver URL + refonte design | OK, niche mais conserver le jus. |
| `/ornements-toiture-bordeaux` | 🟢 | Conserver URL + refonte design léger | Faible volume mais 0 raison de jeter. Pas d'extension en pages villes. |
| `/charpente-bordeaux-reparation-traitement-renforcement---devis-gratuit` | 🟠 | **301 → `/charpente-bordeaux`** + refonte | URL catastrophique (78 caractères, triple tiret, "devis-gratuit" dans le slug). |
| `/couvreur-pessac` | 🟡 | Conserver URL + **refonte contenu critique** | Pages villes actuelles = quasi-duplicates (vérifié par diff HTML). Doivent devenir uniques avec spécificités Pessac. |
| `/couvreur-talence` | 🟡 | Conserver URL + **refonte contenu critique** | Idem. |
| `/couvreur-begles` | 🟡 | Conserver URL + **refonte contenu critique** | Idem. |
| `/nettoyage-toiture-pessac` | 🟡 | Conserver URL + **refonte contenu critique** | Page silo prioritaire, à booster avec contenu local Pessac et photos chantiers. |
| `/devis-couvreur-gironde` | 🟠 | **301 → `/devis`** + refonte | URL plus courte = meilleure UX + CTR. Préserver le jus avec 301. |
| `/realisations` | 🟡 | Conserver URL + refonte (galerie filtrable par service/ville) | Hub vers nouvelles pages /realisations/[slug]. |
| `/merci` | 🟢 | Conserver URL + ajouter noindex + amélioration UX post-conversion | Tracking conversion. |
| `/cookies` | 🟢 | Conserver | Légal. |
| `/politique-de-confidentialite` | 🟢 | Conserver | Légal. |

## Bilan pages existantes

- **À conserver tel quel (URL + design léger)** : 7 pages (urgence-fuite, velux, toiture-neuve, faitage, ornements, /merci, légales)
- **À refondre (URL conservée, contenu/design retravaillés)** : 9 pages (/, nettoyage-bordeaux, hydrofuge-bordeaux, urgence-fuite, pessac, talence, begles, nettoyage-pessac, reparation-toiture-bordeaux, realisations)
- **À fusionner/migrer (301)** : 4 pages (couverture-bordeaux → couvreur-bordeaux, zinguerie-gouttieres → zinguerie, charpente URL longue → charpente-bordeaux, devis-couvreur-gironde → devis)
- **À supprimer** : 0 (jamais de suppression, toujours 301)

## Nouvelles pages à créer (phase 1 — 30 jours)

### Priorité 1 — Hub manquant
| URL | Justification | Volume estimé |
|---|---|---|
| `/demoussage-toiture-bordeaux` | **Page mère silo prioritaire**, manque actuellement = trou stratégique majeur | TRÈS ÉLEVÉ |

### Priorité 2 — Silo démoussage par ville (13 pages)
| URL | Justification |
|---|---|
| `/demoussage-toiture-merignac` | Ville siège, requête forte |
| `/demoussage-toiture-pessac` | Tier 1, climat humide |
| `/demoussage-toiture-talence` | Tier 1 |
| `/demoussage-toiture-begles` | Tier 1 |
| `/demoussage-toiture-villenave-dornon` | Tier 1, habitat pavillonnaire = mousse fréquente |
| `/nettoyage-toiture-merignac` | Compléter le silo |
| `/nettoyage-toiture-talence` | Compléter le silo |
| `/nettoyage-toiture-begles` | Compléter le silo |
| `/nettoyage-toiture-villenave-dornon` | Compléter le silo |
| `/traitement-hydrofuge-toiture-merignac` | Bundle naturel avec démoussage |
| `/traitement-hydrofuge-toiture-pessac` | Idem |
| `/traitement-hydrofuge-toiture-talence` | Idem |
| `/traitement-hydrofuge-toiture-begles` | Idem |

### Priorité 3 — Hubs villes manquants (2 pages)
| URL | Justification |
|---|---|
| `/couvreur-merignac` | Ville SIÈGE, manque inacceptable |
| `/couvreur-villenave-dornon` | Tier 1, complète le quintet métropole |

### Priorité 4 — Pages institutionnelles / E-E-A-T (6 pages)
| URL | Justification |
|---|---|
| `/a-propos` | E-E-A-T : équipe, ancienneté 2005, certifications, présentation artisan |
| `/tarifs` | Transparence = différenciateur majeur dans le métier. Filtrable par service. |
| `/avis` | Page dédiée avec schema Review, agrège tous les avis Google |
| `/zones-intervention` | Carte + liste villes, capture longue traîne "couvreur près de moi" |
| `/contact` | Page complète avec formulaire long + plan d'accès atelier Mérignac |
| `/urgence` | Page urgence fuite 24/7 avec sticky téléphone XXL + schema OpeningHours |

### Priorité 5 — Guides commerciaux (3 max en phase 1)
| URL | Intention | Justification |
|---|---|---|
| `/guides/prix-demoussage-toiture-bordeaux` | Commercial | "Prix" = funnel haut, capture l'intention avant la décision |
| `/guides/aides-renovation-toiture-2026` | Commercial | "Aides" = filtre client mature, fort CTR sur les SERP |
| `/guides/quand-demousser-toiture-gironde` | Saisonnier | Timing-trigger pour devis printemps/automne |

### Priorité 6 — Légal manquant (1 page)
| URL | Justification |
|---|---|
| `/mentions-legales` | OBLIGATION LÉGALE actuellement non remplie |

## Refus argumentés (pages que je NE crée PAS)

| Page envisagée | Refus | Raison |
|---|---|---|
| `/blog` ou `/actualites` | NON | Pas de blog généraliste. Uniquement guides commerciaux ciblés. |
| `/services` (page parent) | NON | Cannibalise l'accueil et le menu. Redondant. |
| `/equipe`, `/notre-histoire` | NON | Fusionné dans `/a-propos`. |
| `/galerie-photos` séparée | NON | `/realisations` couvre déjà ce besoin. |
| `/comment-nettoyer-toiture-soi-meme` | NON | Anti-conversion : on enseigne au client à NE PAS appeler. Demande user explicite refusée. |
| `/comment-demousser-toiture` | NON | Idem. |
| `/glossaire-toiture` | NON | Aucune intention commerciale, aucun convert. |
| `/faq` page dédiée | NON | Les FAQ vivent **dans** chaque page service/ville pour le schema FAQPage local. Pas de page agrégée. |
| `/couvreur-bordeaux/chartrons` (quartier) | REPORTÉ | Phase 5+ après domination métropole. |
| `/sitemap` HTML public | OUI (mais low-key) | À ajouter en footer, c'est gratuit niveau crawl. Pas une "vraie page". |
| Pages par type de tuile (`/toiture-tuile-canal`) | REPORTÉ | À étudier phase 6 selon Search Console : si requêtes émergent, créer. Sinon non. |

## Bilan total phase 1

- **18 pages existantes refondues** (contenu + design)
- **4 pages migrées avec 301** (URL change)
- **26 pages nouvelles créées**
- **Total final phase 1** : 47 pages indexables (contre 21 actuellement → +124%)
