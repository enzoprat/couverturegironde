# Architecture SEO scalable — couverturegironde.fr v2

## Principe de niveaux
- **N0** : Accueil
- **N1** : Hubs (services, villes, guides, réalisations)
- **N2** : Pages atomiques (service×ville, guide spécifique, réalisation)
- **N3** : Variantes longue-traîne (problème spécifique, matériau, urgence locale)

## Structure complète

```
/                                                    [N0 — hub principal]
│
├── /couvreur-bordeaux                                [N1 — hub service principal]
│   ├── /couvreur-bordeaux/centre
│   ├── /couvreur-bordeaux/chartrons
│   ├── /couvreur-bordeaux/saint-pierre
│   └── /couvreur-bordeaux/caudéran             (quartiers — phase 5+)
│
├── Services Bordeaux (N1)
│   ├── /reparation-toiture-bordeaux
│   ├── /nettoyage-toiture-bordeaux
│   ├── /demoussage-toiture-bordeaux                  (NOUVEAU — gros volume search)
│   ├── /zinguerie-bordeaux
│   ├── /urgence-fuite-toiture-bordeaux
│   ├── /installation-velux-bordeaux
│   ├── /toiture-neuve-bordeaux
│   ├── /renovation-toiture-bordeaux                  (NOUVEAU)
│   ├── /traitement-hydrofuge-toiture-bordeaux
│   ├── /faitage-toiture-bordeaux
│   ├── /ornements-toiture-bordeaux
│   ├── /charpente-bordeaux
│   ├── /isolation-toiture-bordeaux                   (NOUVEAU — RGE)
│   └── /pose-gouttieres-bordeaux                     (NOUVEAU)
│
├── Hubs Villes (N1)
│   ├── /couvreur-merignac
│   ├── /couvreur-pessac
│   ├── /couvreur-talence
│   ├── /couvreur-begles
│   ├── /couvreur-gradignan
│   ├── /couvreur-le-bouscat
│   ├── /couvreur-villenave-d-ornon
│   ├── /couvreur-eysines
│   ├── /couvreur-cenon
│   ├── /couvreur-lormont
│   ├── /couvreur-floirac
│   ├── /couvreur-bouliac
│   └── /couvreur-saint-medard-en-jalles
│
├── Service × Ville (N2 — matrice scalable, 15 services × ~25 villes = 375 pages potentielles)
│   ├── /demoussage-toiture-merignac
│   ├── /demoussage-toiture-pessac
│   ├── /demoussage-toiture-talence
│   ├── /nettoyage-toiture-pessac (existante)
│   ├── /reparation-toiture-merignac
│   ├── /zinguerie-pessac
│   ├── /urgence-fuite-merignac
│   └── ...
│
├── /guides                                           [N1 — hub éditorial]
│   ├── /guides/prix-refection-toiture-bordeaux
│   ├── /guides/quand-demousser-toiture
│   ├── /guides/aides-renovation-toiture-2026
│   ├── /guides/choisir-tuile-region-bordelaise
│   ├── /guides/garantie-decennale-couvreur
│   ├── /guides/assurance-degats-toiture-tempete
│   └── ...
│
├── /realisations                                     [N1 — hub portfolio]
│   ├── /realisations/refection-toiture-tuile-canal-merignac
│   ├── /realisations/zinguerie-chartrons-bordeaux
│   └── ...
│
├── /a-propos                                         [N1 — E-E-A-T]
├── /tarifs                                           [N1 — money page]
├── /devis                                            [N1 — conversion principale]
├── /contact                                          [N1]
├── /avis                                             [N1 — preuves sociales]
├── /urgence                                          [N1 — conversion d'urgence]
│
├── /cookies                                          [légal]
├── /politique-de-confidentialite                     [légal]
├── /mentions-legales                                 [légal — manquant !]
└── /merci                                            [post-conversion, noindex]
```

## Volumes cibles à 12 mois
- 14 pages services Bordeaux
- 25 pages villes (hub couvreur-{ville})
- ~150 pages service×ville (matrice progressive)
- ~30 guides
- ~30 réalisations
- ~10 pages quartiers Bordeaux
- ~10 pages preuves/avis
**Total cible : ~270 pages — 21 actuellement.**

## Règles de scalabilité techniques
1. Templates Next.js dynamiques `[service]-[ville].tsx` avec data sourcée d'un JSON/MDX
2. Schema JSON-LD générique paramétré par ville (LocalBusiness avec `areaServed`)
3. Contenu unique exigé : 600+ mots, mention au moins 1 quartier de la ville, 1 spécificité locale (climat océanique, toiture en tuile canal, etc.)
4. **PAS de génération automatique sans relecture humaine** — chaque page = 1 commit GitHub avec contenu validé
5. Breadcrumb dynamique : Accueil > Service > Ville
6. Inter-linking automatique : chaque page service×ville liste 4 villes voisines + 3 services connexes

## URLs : règles dures
- minuscules
- pas d'accents (`saint-medard` pas `saint-médard`)
- pas de stop-words inutiles (pas de `/le-`, `/de-`)
- pas de trailing slash (Next.js `trailingSlash: false`)
- pas de query string pour le contenu
- limite 60 caractères path
