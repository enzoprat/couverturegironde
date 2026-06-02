# Roadmap 6 mois — 1 page/jour, croissance pilotée

Hypothèse : 30 pages/mois ouvrées (rythme soutenable). Total 180 pages sur 6 mois.

## MOIS 1 — Migration + fondations (30 pages)
**Objectif** : zéro perte de jus, base technique solide.

### Semaine 1 — Migration
- Setup Next.js + Vercel + GitHub + domaine
- Recréation 21 pages existantes en Next.js (identiques contenu, design refondu)
- Mise en place 301 (cf. mapping)
- sitemap.xml dynamique, robots.txt propre
- Submission Google Search Console (nouvelle propriété + ancienne en parallèle)
- Schemas JSON-LD complets, breadcrumb partout

### Semaines 2-4 — Compléter le hub services (9 pages manquantes)
- `/demoussage-toiture-bordeaux` (gros volume)
- `/renovation-toiture-bordeaux`
- `/isolation-toiture-bordeaux`
- `/pose-gouttieres-bordeaux`
- `/diagnostic-toiture-bordeaux`
- `/refection-toiture-bordeaux`
- `/ramonage-cheminee-bordeaux` (si périmètre)
- `/etancheite-toiture-terrasse-bordeaux`
- `/depannage-toiture-bordeaux`

### Reste mois 1 (12 pages)
- 8 hubs villes manquants : `/couvreur-merignac`, `/couvreur-gradignan`, `/couvreur-le-bouscat`, `/couvreur-villenave-d-ornon`, `/couvreur-eysines`, `/couvreur-cenon`, `/couvreur-lormont`, `/couvreur-saint-medard-en-jalles`
- 4 pages institution : `/a-propos`, `/tarifs`, `/contact`, `/mentions-legales`

**KPI fin mois 1** : ~50 URLs indexées, 0 erreur 4xx/5xx en Search Console, Core Web Vitals tous "Good".

---

## MOIS 2 — Matrice service×ville prioritaire (30 pages)
**Objectif** : capturer la longue traîne géographique principale.

Pages = top services × villes principales :
- Demoussage × 8 villes (Mérignac, Pessac, Talence, Bègles, Gradignan, Le Bouscat, Eysines, Villenave-d'Ornon)
- Réparation toiture × 8 villes (mêmes villes)
- Urgence fuite × 8 villes
- Zinguerie × 6 villes

**Priorité** : services à forte intention commerciale + villes à forte densité (Mérignac, Pessac > Bouliac, Cenon).

**Maillage** : chaque page service×ville → 4 villes voisines pour ce service + 3 autres services dans la même ville + hub service Bordeaux + hub ville.

---

## MOIS 3 — Élargissement géo + guides (30 pages)
**Objectif** : autorité éditoriale + couverture géographique complète.

- 15 pages service×ville complémentaires (extension Sud-Gironde / Médoc proche : Saint-André-de-Cubzac, Libourne, Cestas, Léognan, Mérignac, Floirac)
- 10 guides éditoriaux à forte intention :
  - `/guides/prix-refection-toiture-bordeaux`
  - `/guides/aides-renovation-toiture-2026`
  - `/guides/quand-demousser-toiture`
  - `/guides/garantie-decennale-couvreur`
  - `/guides/choisir-tuile-canal-bordelaise`
  - `/guides/reglementation-velux-bordeaux`
  - `/guides/toiture-tempete-assurance`
  - `/guides/entretien-zinc-gironde`
  - `/guides/isolation-toiture-aides-2026`
  - `/guides/devis-couvreur-comment-comparer`
- 5 pages réalisations (chacune = 1 chantier, photos avant/après, lieu précis = backlinks géo internes)

**KPI** : début de positions sur "demoussage toiture pessac", "couvreur urgence merignac", etc.

---

## MOIS 4 — Densification + quartiers Bordeaux (30 pages)
- 8 quartiers Bordeaux : `/couvreur-bordeaux/chartrons`, `/centre`, `/saint-pierre`, `/caudéran`, `/saint-augustin`, `/bastide`, `/saint-michel`, `/nansouty`
- 15 service×ville (vagues 2 et 3 de villes)
- 7 guides supplémentaires

---

## MOIS 5 — Pages preuves + longue traîne problèmes (30 pages)
- 10 pages "problème → solution" haute conversion :
  - `/probleme/toiture-qui-fuit-que-faire`
  - `/probleme/mousse-toiture-dangers`
  - `/probleme/tuile-cassee-remplacer`
  - `/probleme/gouttiere-bouchee`
  - etc.
- 10 pages réalisations supplémentaires
- 10 pages avis géographiques : `/avis/clients-pessac`, `/avis/clients-merignac`, etc.

---

## MOIS 6 — Consolidation + saisonnalité (30 pages)
- 10 pages saisonnières (à publier 3-6 semaines avant pic recherche) :
  - `/demoussage-toiture-automne-bordeaux`
  - `/preparer-toiture-hiver-gironde`
  - `/urgence-toiture-tempete-gironde`
- 10 service×ville restants
- 10 guides comparatifs/calculateurs :
  - `/outils/estimer-prix-refection-toiture`
  - `/outils/estimer-prix-demoussage`
- Refresh des 10 pages les mieux positionnées du mois 1-2 (mise à jour contenu, schemas)

---

## Règles d'or pour tenir le rythme
1. **JAMAIS publier sans contenu unique 600+ mots minimum** sur pages service×ville
2. **JAMAIS deux pages avec le même H1** ou le même `<title>` paramétré uniquement
3. **TOUJOURS** ping `/api/revalidate` + soumission Google Indexing API ou Bing IndexNow à chaque publication
4. **TOUJOURS** ajouter au moins 3 liens internes sortants depuis chaque nouvelle page
5. **TOUJOURS** mettre à jour le sitemap dynamiquement (Next.js sitemap.ts qui scan le filesystem)
6. **Programmer Google Search Console** : check hebdo CTR, position, pages avec impressions mais 0 clic → optimiser title/meta
7. **Backlinks en parallèle** : annuaires locaux (PagesJaunes, GoogleBusiness, 118000, Yelp), CCI Gironde, partenariats artisans non-concurrents (carreleurs, maçons, plombiers)
