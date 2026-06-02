# Roadmap d'exécution — 9 phases

> Principe : refonte technique d'abord, puis croissance par silo. Chaque phase = objectif SEO mesurable.

## Phase 1 — Refonte technique et conservation du SEO existant (J0 → J14)

### Pages à recréer en Next.js (21 existantes, à l'identique d'abord)
Toutes les URLs actuelles doivent répondre 200 avec contenu équivalent ou amélioré avant cutover DNS.

### Travaux techniques
- Setup repo GitHub + Next.js 15 + Tailwind + MDX
- Design system implémenté (tokens, composants UI, layout)
- 21 pages existantes recréées en MDX + templates
- 4 redirections 301 configurées (next.config)
- sitemap.ts dynamique fonctionnel
- robots.ts propre (pas de leftover wp-admin)
- Schemas JSON-LD complets (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, AggregateRating)
- Tous les `generateMetadata` configurés
- Lighthouse mobile ≥ 95 perf, 100 SEO sur les 5 pages clés (home, démoussage, nettoyage, pessac, urgence)
- Script de vérification 301 préparé

### Pages à créer
0 (uniquement recréation de l'existant)

### Pages à améliorer
- Toutes les pages refondues : nouveaux H1, titles optimisés, méta-descriptions affinées
- Pages villes (Pessac, Talence, Bègles, nettoyage-Pessac) : **fin du duplicate content**, contenu réécrit avec spécificités locales

### Priorité
🔴 **CRITIQUE** — aucune mise en prod tant que cette phase n'est pas validée à 100%.

### Objectif SEO
- Zéro perte de positions
- Zéro 404
- Zéro chaîne de 301
- Maintien des 21 URLs en SERP

### Impact attendu
Neutre (objectif = conservation), avec **gain de 10-25% sur les positions des pages villes** grâce à la fin du duplicate content.

### Livrables
- Site preview sur Vercel
- Rapport Lighthouse complet
- Script de tests de redirection passant à 100%

---

## Phase 2 — Cutover DNS + optimisation existant (J14 → J21)

### Travaux
- Switch DNS vers Vercel
- Soumission nouveau sitemap à Google Search Console + Bing Webmaster
- Indexing API call sur les 4 URLs modifiées (anciennes vers nouvelles)
- Surveillance GSC quotidienne (erreurs de crawl, 4xx, baisses de position)
- Création des comptes Bing Webmaster + Yandex Webmaster
- Validation NAP cohérence cross-platform (site, Google Business, annuaires existants)
- Audit backlinks (Ahrefs/Majestic gratuit ou Search Console) : identifier les liens entrants pointant vers les 4 URLs modifiées

### Optimisation des pages existantes
Sur les 9 pages refondues, **améliorer le contenu** au-delà de la simple migration :
- Titles : ajouter ville + bénéfice + power word
- Meta descriptions : 150-160 caractères, inclure CTA implicite
- H1 : 1 seul par page, mot-clé naturel
- Ajout FAQs locales sur chaque page (3-6 questions avec schema)
- Ajout de témoignages locaux (avec mention ville)
- Densification du contenu : passer chaque page à 800+ mots utiles

### Priorité
🔴 CRITIQUE

### Objectif SEO
Confirmer la conservation totale et préparer la croissance.

### Impact attendu
- +15-30% de positions sur pages services (Bordeaux) grâce au contenu enrichi
- Levée des 4 alertes potentielles de pages villes en duplicate

---

## Phase 3 — Création du silo nettoyage / démoussage (J21 → J45)

### Pages à créer (15 pages = 1 page/jour ~ 15 jours ouvrés)

**Hubs services manquants (1 page)**
- `/demoussage-toiture-bordeaux` ← jour 1 (PAGE MÈRE DU SILO, priorité absolue)

**Service × ville silo prioritaire (13 pages)**
- `/demoussage-toiture-merignac` (jour 2)
- `/demoussage-toiture-pessac` (jour 3)
- `/demoussage-toiture-talence` (jour 4)
- `/demoussage-toiture-begles` (jour 5)
- `/demoussage-toiture-villenave-dornon` (jour 6)
- `/nettoyage-toiture-merignac` (jour 7)
- `/nettoyage-toiture-talence` (jour 8)
- `/nettoyage-toiture-begles` (jour 9)
- `/nettoyage-toiture-villenave-dornon` (jour 10)
- `/traitement-hydrofuge-toiture-merignac` (jour 11)
- `/traitement-hydrofuge-toiture-pessac` (jour 12)
- `/traitement-hydrofuge-toiture-talence` (jour 13)
- `/traitement-hydrofuge-toiture-begles` (jour 14)

**Hub ville manquant prioritaire (1 page)**
- `/couvreur-merignac` (jour 15) ← ville SIÈGE, absolument requis

### Règles dures sur chaque page
- 700-1000 mots uniques minimum
- Mention de **3 quartiers/lieux-dits** spécifiques de la ville
- Référence à **1 caractéristique d'habitat local** (tuile canal, ardoise, zinc, toits-terrasses, etc.)
- Mention du **climat océanique** et de son impact (mousse, lichens, humidité)
- **2 avis clients locaux** avec ville mentionnée
- **1 photo avant/après** (si disponible)
- **4-6 FAQs locales** avec schema FAQPage
- Maillage : 3-7 liens internes sortants vers hub service + voisines + services complémentaires + /devis

### Priorité
🔴 CRITIQUE (silo prioritaire = priorité business n°1)

### Objectif SEO
- Conquérir le top 10 sur "démoussage toiture Bordeaux" et "démoussage toiture {ville}" pour les 5 villes principales
- Première vague de demandes de devis attribuables au nouveau site (cible : +50% vs base)

### Impact attendu
- Trafic organique : +40-80% sur le silo démoussage à 90 jours
- Demandes de devis : +30-60% à 60 jours

---

## Phase 4 — Ajout d'une page locale par jour (J45 → J120)

### Pages à créer (75 jours × 1 page = ~75 pages)

**Vague 1 : Extension villes secondaires (priorité business : démoussage/nettoyage d'abord)**
Pour chaque ville suivante, créer le bundle prioritaire (démoussage + nettoyage + hydrofuge + couvreur-hub) :

- **Le Bouscat** (4 pages) : démoussage, nettoyage, hydrofuge, couvreur-le-bouscat
- **Gradignan** (4 pages)
- **Eysines** (4 pages)
- **Bruges** (4 pages)
- **Cenon** (4 pages)
- **Lormont** (4 pages)
- **Floirac** (4 pages)
- **Saint-Médard-en-Jalles** (4 pages)

→ 32 pages

**Vague 2 : Compléter les autres services pour les villes tier 1**
- /reparation-toiture-merignac, /reparation-toiture-pessac, /reparation-toiture-talence, /reparation-toiture-begles
- /urgence-fuite-toiture-merignac, /urgence-fuite-toiture-pessac, /urgence-fuite-toiture-talence, /urgence-fuite-toiture-begles
- /zinguerie-merignac, /zinguerie-pessac, /zinguerie-talence, /zinguerie-begles

→ 12 pages

**Vague 3 : Pages institutionnelles + guides commerciaux**
- `/a-propos` (jour J46)
- `/tarifs` (jour J47)
- `/avis` (jour J48)
- `/zones-intervention` (jour J49)
- `/contact` (jour J50)
- `/urgence` (jour J51)
- `/mentions-legales` (jour J52)
- `/guides/prix-demoussage-toiture-bordeaux` (jour J53)
- `/guides/aides-renovation-toiture-2026` (jour J54)
- `/guides/quand-demousser-toiture-gironde` (jour J55)

→ 10 pages

**Vague 4 : Réalisations chantiers** (15 fiches selon disponibilité photos)
- `/realisations/[slug]` × 15

→ 15 pages

**Vague 5 : Élargissement Sud-Gironde / Médoc** (selon trafic GSC)
Si la phase 3 a montré des impressions sur Blanquefort/Libourne/Cestas/Léognan/Saint-André-de-Cubzac → créer le bundle prioritaire.

→ 6-12 pages

### Règles dures (rappel)
- Pas de page sans 700+ mots uniques
- Pas de copier-coller entre villes (template autorisé, contenu jamais)
- Photo réelle obligatoire (pas de stock)
- 3-7 liens internes sortants
- Schemas adaptés au type de page

### Priorité
🟠 HAUTE

### Objectif SEO
Couvrir l'ensemble de Bordeaux Métropole sur le silo prioritaire + monter en positions sur les services secondaires.

### Impact attendu
- Trafic organique : x2 à x3 vs phase 2
- Demandes de devis : x2

---

## Phase 5 — Renforcement maillage interne (en continu à partir de J45)

### Travaux
- Audit du maillage actuel toutes les 2 semaines
- Identifier les pages "orphelines" (moins de 2 backlinks internes) → ajouter des liens contextuels depuis les pages parentes
- Revue des ancres : varier les formulations selon la matrice 25/35/15/20/5
- Création de blocs "Communes voisines" sur chaque page service×ville
- Création de blocs "Services à {Ville}" sur chaque hub ville
- Audit Screaming Frog mensuel pour valider profondeur ≤ 3 clics

### Objectif SEO
Optimiser la circulation du jus vers le silo prioritaire.

### Impact attendu
- +10-20% de positions sur les pages du silo
- Réduction du bounce rate (+ pages vues / session)

---

## Phase 6 — Optimisation Google Search Console (à partir de J60, en continu)

### Travaux
- Setup Google Search Console (propriété domaine, pas URL)
- Setup Bing Webmaster
- Revue hebdo des données :
  - **Pages avec impressions mais 0 clic** → optimiser title/meta
  - **Pages position 11-20** → enrichir le contenu, ajouter ancres internes
  - **Pages position 4-10** → snippet optimization (FAQ schema, balises forte mise en avant)
  - **Requêtes émergentes** → vérifier si une page existe ou à créer
- Surveillance des erreurs : 404, soft 404, redirects, crawl errors
- Submit régulier des nouvelles URLs via Indexing API
- Surveillance des Core Web Vitals via GSC

### Outils complémentaires
- Plausible Analytics (privacy-friendly, plus léger que GA4)
- Vercel Analytics + Speed Insights
- Optionnel : SE Ranking ou Mangools (suivi positions)

### Objectif SEO
Boucle de feedback rapide pour itérer sur le contenu.

### Impact attendu
- +15-25% de CTR moyen via optimisation titles/meta sur 3 mois
- Détection précoce des baisses

---

## Phase 7 — Google Business Profile (à partir de J0, en continu)

### Setup immédiat (jour 1)
- Vérifier que le GBP est revendiqué et bien renseigné
- Nom strict : "Couverture Gironde"
- Catégorie principale : **Couvreur** (Roofing contractor)
- Catégories secondaires (jusqu'à 9) : Démoussage, Charpentier, Zingueur, Entreprise de couverture, Entreprise BTP, Service d'urgence
- Zone d'intervention : ajouter explicitement les 20 villes tier 1 + tier 2
- Photos : faire un upload massif (équipe, chantiers en cours, avant/après, logo, atelier Mérignac)
- Horaires : LU-DI 6h-22h (cohérent avec le site)
- Lien site web : `https://www.couverturegironde.fr/?utm_source=gbp&utm_medium=organic`
- Lien "Devis" / "Réservation" : `/devis`
- Numéro tél : `+33 7 68 69 78 48` (identique partout)
- Description : 750 caractères incluant : services principaux, villes desservies, ancienneté, garantie, USP

### Routine hebdomadaire
- **1 photo nouvelle** par semaine (chantier de la semaine)
- **1 post Google Business** par semaine (offre saison, conseil, avant/après)
- **Réponse à 100% des avis** sous 48h, mentionner ville + service dans la réponse
- **Demander 5 nouveaux avis par mois** aux clients satisfaits (envoyer lien direct GBP)

### Q&A
- Préparer et publier 10 questions/réponses fréquentes en mode "self-Q&A"

### Objectif SEO
Dominer le Local Pack sur "couvreur Bordeaux", "démoussage toiture Bordeaux" et villes secondaires.

### Impact attendu
- +50-100% de clics vers le site depuis Maps/Local Pack à 90 jours
- Apparition dans le Local Pack sur 8-15 requêtes locales

---

## Phase 8 — Preuves locales / avis / photos chantier (en continu à partir de J21)

### Travaux
- Mise en place d'un protocole post-chantier :
  - Photos avant/après (smartphone OK, mais lumière naturelle, cadrage soigné)
  - Demande d'avis Google immédiate à la fin du chantier (lien envoyé par SMS)
  - Mini-interview client (2 questions) pour témoignage texte
- Création de la page `/avis` avec schema Review
- Création de fiches `/realisations/[slug]` (1-2 par mois)
- Intégration des avis dans les pages service et ville (preuve sociale contextuelle)
- Badge "Note Google 5/5 sur X avis" visible header

### Objectif SEO + conversion
- Améliorer le CTR via rich snippets (étoiles dans SERP)
- Augmenter le taux de conversion devis (preuve sociale = +20-30% de conversion typique)

### Impact attendu
- 5-10 nouveaux avis Google par mois
- +20-30% de conversion devis
- Rich snippets étoiles sur les pages services

---

## Phase 9 — Extension à d'autres services (J120+)

### Conditions préalables
- Phase 3 (silo démoussage) **doit avoir atteint top 10** sur au moins 80% des pages
- Demandes de devis stabilisées à +100% vs baseline pré-refonte

### Travaux
- Service × ville pour les services secondaires (réparation, urgence-fuite, zinguerie) sur toutes les villes tier 1-2
- Élargissement géographique : Blanquefort, Libourne, Arcachon (si data search valide), La Teste-de-Buch
- Nouveaux services si demande : `/diagnostic-toiture-bordeaux`, `/refection-toiture-bordeaux`, `/isolation-toiture-bordeaux`, `/etancheite-toiture-terrasse-bordeaux`
- Pages quartiers Bordeaux : `/couvreur-bordeaux/chartrons`, `/saint-pierre`, etc. (uniquement si Bordeaux centre est en top 5)
- 5-10 guides commerciaux additionnels selon emerging keywords

### Priorité
🟡 MOYENNE — déclencher uniquement quand la phase 3 a tenu ses promesses.

### Objectif SEO
Capture de la longue traîne et expansion géographique.

### Impact attendu
- +50% de pages indexées
- Diversification des sources de trafic (moins de dépendance au silo démoussage)

---

## Synthèse calendaire

| Phase | Période | Pages créées | Pages refondues | Volume mensuel |
|---|---|---|---|---|
| 1 | J0 → J14 | 0 | 21 | — (sprint refonte) |
| 2 | J14 → J21 | 0 | 9 (densification) | — |
| 3 | J21 → J45 | 15 | — | ~20 pages |
| 4 | J45 → J120 | 75 | — | ~25-30 pages/mois |
| 5-8 | Continu | — | — | optimisations |
| 9 | J120+ | ~30+ | — | ~20 pages/mois |

**Total pages à J120 : ~111** (21 existantes + 15 silo prioritaire + 75 phase 4) — vs **21 actuellement**.

## KPIs de pilotage

À suivre hebdomadairement dans un Notion/Sheets :

1. **Nombre d'URLs indexées Google** (GSC)
2. **Trafic organique** (Plausible, semaine vs semaine N-1)
3. **Positions top 10** sur les 20 mots-clés cibles
4. **Demandes de devis** (formulaire + tél tracking)
5. **Note moyenne avis Google** (cible : 4.9+)
6. **Nombre d'avis** (cible : +5/mois)
7. **Apparitions Local Pack** sur 10 requêtes test
8. **Core Web Vitals** (% URLs en "Good")
9. **CTR moyen GSC** (cible : > 5%)
10. **Pages avec 0 backlink interne** (cible : 0)
