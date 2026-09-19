# Décisions concurrents — 2026-09
Source : `brief-concurrents.md` (run 2026-09-10) **croisé avec la Search Console** (`gsc-audit/data/query_page_90.csv`, fenêtre 90 j 2026-06-04 → 2026-09-02).

---

## Verdict

**La file de création du brief ne tient pas le croisement GSC. Je ne recommande pas de créer 25 pages.**

Le brief classe par *couverture concurrente*, pas par *demande mesurée chez nous*. Une fois croisé :

| | requêtes | impressions 90 j | clics 90 j | requêtes à 0 impression |
|---|---|---|---|---|
| Les 27 « **Créer la page** » du brief | 27 | **669** (1,4 % du site) | **1** | **15 / 27** |
| Les 13 « **En place** » du brief | 13 | **7 904** (16,8 %) | 9 | 0 |

Le brief propose d'investir 25 jours de production sur 1,4 % de la demande mesurée, dont plus de la moitié n'a **jamais** déclenché une seule impression en 90 jours.

---

## 1. Cinq constats

### 1. Le problème n'est pas le classement, et créer des pages ne le touche pas
Hors bruit machine, sur 90 jours :

| position | requêtes | impressions | clics | CTR |
|---|---|---|---|---|
| 1 → 3 | 55 | 1 157 | **19** | 1,64 % |
| 3 → 5 | 37 | 719 | **0** | 0,00 % |
| 5 → 10 | 186 | 5 359 | 7 | 0,13 % |
| 10 → 20 | 323 | 11 464 | 15 | 0,13 % |

**92 requêtes sont en top 5. Elles pèsent 1 876 impressions et 19 clics — et les 19 clics viennent tous de « couverture gironde », la marque.** Les 91 autres requêtes en position 1 à 5 : 1 682 impressions, **zéro clic**.

Exemples nominatifs, tous à 0 clic :
- `prix nettoyage toiture hydrofuge bordeaux` — **position 1,7**, 53 imp
- `traitement hydrofuge gironde` — **position 3,0**, 133 imp
- `devis toiture bordeaux` — **position 3,6**, 91 imp
- `pose de gouttière bordeaux` — **position 5,4**, 45 imp
- `zinguerie bassin arcachon` — **position 5,6**, 174 imp

Être premier ne rapporte rien sur ces requêtes. Aucune page supplémentaire ne corrige ça.

### 2. Une partie substantielle de nos impressions n'est pas de la demande
**4 890 impressions sur 90 j (13,5 % des impressions attribuées) sont des recherches portant sur les *titres de page* d'un concurrent** : `gironde-toiture-service.fr expert en renovation`, `… charpente et toiture`, `… cuisine`. J'ai vérifié : c'est mot pour mot le `<title>` de leur accueil. 0 clic. Leur sitemap contient **3 URLs**.

Même signature sur une famille de requêtes en top 5 chez nous : `urgence-fuite toiture dans la gironde` (avec le tiret au milieu, pos 1,7), `service couverture gironde`, `pose couverture gironde`, `couverture toit gironde` — formulations de type slug, jamais cliquées.

Conséquence directe : **tout score calculé sur nos impressions est faussé**, et la croissance d'impressions ×2 sur un an est en partie fictive (déjà noté dans l'audit du 2026-09-05).

### 3. Le nombre de pages ne nous sépare pas des leaders — on les bat déjà sur tout ce que l'outil mesure
`afttoiture.fr`, classé leader par le brief, a **les mêmes slugs que nous** : `/nettoyage-toiture-bordeaux`, `/pose-velux-bordeaux`, `/zinguerie-bordeaux`, `/urgence-fuite-toiture-bordeaux`.

| | nous | afttoiture.fr |
|---|---|---|
| URLs | 76 | **25** |
| mots médians pages géo | 2 962 | **731** |
| âge du domaine | 27 mois | **11 mois** |

Ils ont 3× moins de pages, 4× moins de mots, un domaine 2,5× plus jeune — et ils rankent. L'outil mesure volume et longueur : deux axes sur lesquels nous sommes déjà devant. Il ne mesure donc rien qui discrimine.

### 4. En revanche, le schéma — le seul axe où l'outil les note (4,7/5) — est notre vrai retard technique
Vérifié dans le code : `lib/seo/schemas.ts` expose **15 générateurs**, et ils ne sont quasiment pas câblés.

| schéma | pages qui l'émettent (sur 44) |
|---|---|
| `Person` (Liroy) | 44 |
| `FAQPage` | **4** |
| `Review` | 3 |
| `Service` | **1** |
| `BreadcrumbList` | **1** |
| `Offer` / `PriceSpecification` | **1** |

Global (`app/layout.tsx`) : `Organization`, `WebSite`, `LocalBusiness` seulement.

Chaque page service d'afttoiture émet, elle : `RoofingContractor` + `Service` + `Offer` + `UnitPriceSpecification` + `FAQPage` + `BreadcrumbList` + `AggregateRating` + `City`. C'est du câblage, pas de la rédaction — coût quasi nul, et c'est le seul écart réel identifié.

### 5. La cannibalisation est déjà critique, et chaque page neuve l'aggrave
**63 requêtes à ≥ 50 impressions sont éclatées sur ≥ 3 URLs.** Les pires :

| requête | URLs en concurrence | imp 90 j | clics |
|---|---|---|---|
| démoussage toiture bordeaux | **15** | 752 | 2 |
| couvreur bordeaux | 7 | 1 703 | 1 |
| couvreur mérignac | 7 | 1 063 | 3 |
| devis toiture bordeaux | 7 | 350 | 0 |
| couvreur gironde | 6 | 2 341 | 1 |

Et **44 des 59 pages ayant des impressions n'ont produit aucun clic en 90 jours.**

Le rituel « 1 nouvelle page/jour » est ce qui a produit ces deux chiffres. Il faut le convertir en **1 page renforcée/jour** au moins jusqu'au contrôle du 2026-10-03.

---

## 2. File de 10 — contrainte : 9 cibles sont sous test jusqu'au 2026-10-03

`gsc-audit/out/cibles.csv` : l'expérience de restauration de la home (`268dc77`, mergée le 2026-09-05) est à **J+6 sur 28**. Les variables testées sont les title/H1 de `/`, `/nettoyage-toiture-bordeaux`, `/installation-velux-bordeaux`, `/demande-devis`, plus le maillage en prose de `/installation-velux-bordeaux`.

**Y toucher maintenant détruit la mesure, et la refonte de masse du 2026-07-05 a déjà coûté 7,9 rangs.** La file est donc coupée en deux lots.

### Lot A — pages hors test, à traiter maintenant (1/jour)

**A1. Renforcer `/reparation-toiture-bordeaux`** — 1 059 imp · **0 clic** · pos 22,6 · 6 URLs en concurrence
- Principale : `réparation toiture bordeaux` (235 imp, pos 15,5)
- Secondaires : `réparation de toiture bordeaux` (97, pos 15,5) · `diagnostic toiture bordeaux` (82, **pos 6,6**) · `capotage toiture bordeaux` (49, pos 37,6 — page dédiée existante, arbitrer)
- Mailler depuis : `/couvreur-bordeaux`, `/urgence-fuite-toiture-bordeaux`, `/realisations/renovation-faitage-bordeaux-centre-2024`
- Angle : la page ne porte aucun schéma `Service`/`Offer`/`FAQPage`. Câbler d'abord, rédiger ensuite. Arbitrer le doublon `capotage` (pos 37,6 sur sa propre page vs 2,5 ailleurs).
- Concurrents : `afttoiture.fr` (structure vérifiée : 961-1 365 mots, 5-8 H2, FAQ + prix en schéma) · `cm-renovation-toiture.fr` — **position SERP à relever manuellement** (voir §5)

**A2. Renforcer `/traitement-hydrofuge-toiture-bordeaux`** — 842 imp · **0 clic** · pos 16,5
- Principale : `traitement hydrofuge gironde` (133 imp, **pos 3,0**, 0 clic)
- Secondaires : `hydrofuge toiture garantie 10 ans` (148, pos 11,5) · `entreprise hydrofuge toiture` (178, pos 21,1) · `prix nettoyage toiture hydrofuge bordeaux` (53, **pos 1,7**, 0 clic)
- Mailler depuis : `/nettoyage-toiture-bordeaux`, `/traitement-toiture-bordeaux`
- Angle : **cas de CTR pur, pas de position.** Deux requêtes en top 3 à 0 clic → le title/description ne sont pas le problème de classement mais de clic. Travailler la description et l'`AggregateRating` en rich snippet, pas le contenu. C'est aussi le meilleur candidat pour tester si le Local Pack absorbe tout (§3).
- Concurrents : `biocouverture.fr` (326 URLs, pages `details-…` en longue traîne) — relevé SERP requis

**A3. Renforcer `/couvreur-arcachon`** — 955 imp · 1 clic · pos 11,8 · **890 mots seulement** (notre médiane géo : 2 962)
- Principale : `couvreur arcachon` (306 imp, pos 12,5)
- Secondaires : `zinguerie bassin arcachon` (174, **pos 5,6**) · `couverture arcachon` (115, pos 11,0) · `zinguerie arcachon` (101, pos 8,0)
- Mailler depuis : `/zinguerie-arcachon`, `/couvreur-gironde`, `/realisations/changement-closoir-ventile-faitage-andernos-les-bains-2024`
- Angle : la page absorbe déjà 8 requêtes Arcachon dont `couvreur bassin d'arcachon` (52 imp, **pos 10,3**). **Le brief veut créer une page « couvreur bassin d'arcachon » (score 81,8) : c'est un doublon**, la règle du brief elle-même l'interdit. Enrichir celle-ci (890 → ~2 000 mots) : zinc et embruns, ville d'hiver, chalets, contrainte vent du Bassin.
- Concurrents : `avenir-etancheite-bordeaux.fr`, `biocouverture.fr` — relevé SERP requis

**A4. Renforcer `/couvreur-eysines`** — 687 imp · 1 clic · pos 13,3
- Principale : `couvreur eysines` (199 imp, pos 13,4)
- Secondaires : `entretien de couverture à eysines` (86, pos 8,4) · `démoussage eysines` (70, pos 9,4) · `zinguerie à eysines` (54, pos 11,0)
- Mailler depuis : `/couvreur-merignac`, `/nettoyage-toiture-bordeaux`
- Angle : **aucune réalisation Eysines en base** (28 chantiers, zéro à Eysines). C'est le trou de preuve le plus rentable : 8 requêtes Eysines déjà en pos 8-19. Photographier le prochain chantier Eysines avant toute autre production.
- Concurrents : relevé SERP requis (22 sites couvrent Eysines selon le brief)

**A5. Renforcer `/zinguerie-bordeaux`** — absorbe déjà « gouttière »
- Principale : `installation zinguerie gironde` (51 imp, **pos 5,7**, 0 clic)
- Secondaires : `pose de gouttière bordeaux` (45, **pos 5,4**) · `gouttieres en zinc a leognan` (103, pos 15,6) · `gouttiere bordeaux` (32, pos 7,1 — arrive via le 301 de `/zinguerie-gouttieres-bordeaux`)
- Mailler depuis : `/couvreur-bordeaux`, `/realisations/creation-entablement-cheneau-zinc-bordeaux-2024` (60 imp, pos 9,4 en propre)
- Angle : **le brief veut créer « gouttière Bordeaux » (score 77,3) — la requête est déjà sur cette page en position 7,1 via une redirection 301.** Créer la page casserait la chaîne. Ajouter un H2 « gouttières » et un `Service` schéma dédié suffit. Traiter aussi `gouttieres en zinc a leognan` : Léognan n'a pas de page, 103 imp.
- Concurrents : `afttoiture.fr/zinguerie-bordeaux.html` · relevé SERP requis

**A6. Décider du sort de `/couvreur-gironde`** — 786 imp · **0 clic** · **pos 40,3**
- Principale : `couvreur gironde` (254 imp sur cette URL, pos 51,7 — la home la porte à 18,6)
- Secondaires : `couvreur 33` (139, pos 11,9) · `couverture gironde` (73, pos 6,9) · `pose couverture gironde` (66, pos 37,3)
- Angle : page passée de **10,2 → 39,2** lors de la refonte du 05/07 alors que son title n'a pas bougé. Elle est aujourd'hui à 40,3, elle ne remonte pas, et elle cannibalise la home sur la requête la plus chère du site. **Décision à prendre, pas contenu à ajouter** : soit elle devient un hub départemental qui ne vise plus « couvreur gironde », soit 301 vers la home. Ne rien faire avant le 2026-10-03 : c'est la requête sous test.
- ⚠️ Cette ligne est un arbitrage, pas une tâche de rédaction.

**A7. Renforcer `/couvreur-talence`** — 987 imp · 2 clics · pos 15,0
- Principale : `couvreur talence` (486 imp cumulées, pos 11,6)
- Secondaires : `réparation fuite toiture talence` (141, 4 URLs en concurrence) · `démoussage talence` · `couvreur à talence`
- Mailler depuis : `/reparation-toiture-talence`, `/realisations/demoussage-toiture-talence-lichens-2026`
- Angle : résoudre d'abord la cannibalisation à 4 URLs sur `réparation fuite toiture talence`. Échoppes bordelaises, tuile canal à faible pente, mitoyenneté — appuyer sur le chantier lichens 2026 qui est le seul de 2026 en base.

### Lot B — après le contrôle du 2026-10-03, et seulement si le test est validé

**B8. Renforcer `/nettoyage-toiture-bordeaux`** — 4 412 imp · 4 clics · pos 18,1 — **page la plus exposée du site après la home**
- Principale : `nettoyage toiture bordeaux` (707 imp, pos 15,8, 6 URLs)
- Secondaires : `démoussage traitement des toitures (entreprises) bordeaux` (**749 imp**, pos 10,1) · `nettoyage de toiture bordeaux` (143, pos 14,8) · `démoussage toiture bordeaux` (87, pos 13,9, **15 URLs en concurrence**)
- Concurrents **vérifiés** : `afttoiture.fr/nettoyage-toiture-bordeaux.html` — 961 mots, 5 H2 (« 3 étapes… », « Quand nettoyer sa toiture à Bordeaux ? », « **Combien ça coûte ?** », « Demandez votre devis », « Questions fréquentes »), schéma `FAQPage`+`Offer`+`UnitPriceSpecification`+`AggregateRating`. Et `afttoiture.fr/blog/demoussage-toiture-bordeaux-prix-methode.html`.
- Angle : la requête à 749 imp contient « entreprises » au pluriel → intention comparateur, SERP de type annuaire. Voir §3.
- ⚠️ Title et H1 sous test. Ne pas y toucher avant le 2026-10-03.

**B9. Renforcer `/installation-velux-bordeaux`** — 2 702 imp · 1 clic · **pos 22,7 · CTR 0,037 %** — pire ratio du site
- Principale : `pose velux bordeaux` (411 imp, pos 10,5, 3 URLs)
- Secondaires : `velux bordeaux` (141, pos 11,8) · `installateur velux bordeaux` (72, pos 14,1) · `devis faire poser velux` (68, pos 27)
- Concurrent **vérifié** : `afttoiture.fr/pose-velux-bordeaux.html` — 1 365 mots, 8 H2, dont « **6 modèles Velux que nous installons à Bordeaux** », « **Calculez votre prix Velux en 10 secondes** » (simulateur), « Ils ont posé un Velux avec nous » (avis en page). Nous : 1 380 mots, aucun simulateur sur cette page alors que `components/simulateur/` existe.
- ⚠️ Title, H1 **et maillage en prose** sous test. Ne pas y toucher avant le 2026-10-03.

**B10. Les deux seules créations que je valide — et seulement après le 2026-10-03**

| page | justification | ce qui la rend défendable |
|---|---|---|
| `/couvreur-gujan-mestras` | 12 concurrents, 22 153 hab., le brief la classe 73,5 | **chantier réel en base** : `refection-couverture-isolation-gujan-mestras-2024` |
| `/couvreur-andernos-les-bains` | 10 concurrents, 12 710 hab., brief 71,0 | **chantier réel en base** : `changement-closoir-ventile-faitage-andernos-les-bains-2024` |

Ce sont les **seules** villes neuves du top 40 du brief pour lesquelles nous avons une preuve photographique locale. Sans chantier, une page ville ne tient pas le standard « jamais de doorway » et va rejoindre les 44 pages à zéro clic.

**Refusé explicitement :** `renovation toiture bordeaux` (score 77,3 au brief — 92 imp, pos 33,6, déjà éclatée sur 4 URLs : créer une 5ᵉ URL est absurde), `isolation toiture bordeaux`, `ravalement facade bordeaux`, `panneaux solaires bordeaux`, `étanchéité toiture bordeaux`, `couvreur cestas / la teste / andernos… en service×ville`, `zingueur merignac/pessac/talence`, `fuite toiture merignac`, `toit terrasse merignac` — **toutes à 0 impression sur 90 jours.** Le ravalement de façade et les panneaux solaires ne sont même pas notre métier ; les ajouter diluerait la thématique du domaine, ce qui est précisément ce qui a coûté 7,9 rangs en juillet.

---

## 3. Actions hors site — c'est là qu'est le levier

Le constat n°1 (91 requêtes en top 5, zéro clic) a une seule explication cohérente : **sur ces SERP, la réponse visible n'est pas le résultat organique.** C'est la règle n°8 du brief, et elle prime sur tout le reste ici.

### 3.1 Google Business Profile — priorité absolue
Baseline connue : 15 appels sur 6 mois, 90 % de la découverte via la marque d'un concurrent. Le site n'est pas le canal de leads, et le §1 montre pourquoi : le Local Pack capte le clic.
- **Vérifier la catégorie principale = « Couvreur »** (déjà identifié comme à corriger, non fait à ma connaissance)
- Catégories secondaires à aligner sur nos 3 pages à impressions : zinguerie, nettoyage/démoussage, urgence fuite
- Maintenir le rythme en place (1 post lundi, 2 avis/semaine) — c'est le seul levier dont l'effet est démontré sur ce marché
- **Photos géolocalisées par commune d'intervention** : Eysines et Arcachon en priorité (A3, A4), aucune preuve locale en base

### 3.2 Annuaires — la requête à 749 impressions le dit littéralement
`démoussage traitement des toitures (entreprises) bordeaux`, 749 imp, pos 10,1, 0 clic. Le pluriel « entreprises » = SERP de comparateur.
- PagesJaunes, Travaux.com, AlloVoisins, Bilik : inscription/optimisation de la fiche, avec le NAP Mérignac strictement identique
- À traiter comme une action de production au même titre qu'une page — c'est le canal où cette requête se joue

### 3.3 Citations NAP gratuites
Poursuivre le rythme 2-3/semaine déjà en place. **Arbitrage franc : les backlinks des leaders sont un chantier à faible rendement ici.** `afttoiture.fr` a 11 mois et ranke — son profil de liens est forcément quasi vide. Faire le relevé Ahrefs/Moz sur les 5 leaders coûte 2 h ; je le mettrais après les annuaires, pas avant.

### 3.4 Hygiène de mesure
Exclure manuellement la famille `gironde-toiture-service.fr *` de tout calcul de score (13,5 % des impressions, 0 clic). Aucun filtre GSC ne le fait : c'est à coder dans le script d'analyse.

---

## 4. Ce qui a changé depuis le run précédent

**Il n'y a pas de run précédent.** Le dossier `concurrents-seo/` n'existe pas dans le dépôt — l'outil tourne hors projet, et ni `resultats.json` ni `lastmod_recent_90d` ne m'ont été fournis. Je ne peux donc pas produire le diff « nouveaux concurrents / nouvelles pages chez les leaders » demandé au point 4 du format.

Ce qui a changé **de notre côté** depuis l'audit du 2026-09-05 :
- `268dc77` (2026-09-05) restauration du title/H1 de la home — **mergée dans `main`**, contrairement à ce qu'indique encore le changelog
- `1506507` remise de « Mérignac » dans le title de la home — sur la branche `seo/2026-09-08-pages-communes`, **non mergée** (1 commit d'avance sur `main`)
- 9 cibles sous contrôle au **2026-10-03**, actuellement à J+6/28
- Aucune page créée depuis le 2026-09-05

**À produire pour le prochain run**, pour que le point 4 soit exploitable : versionner `concurrents-seo/out/resultats.json` (ou au moins `concurrents.csv`) à chaque run, en dehors de `.gitignore`.

---

## 5. Ce que je n'ai pas pu faire

- **Relevé SERP frais (étape 1 de la boucle).** Google renvoie un CAPTCHA sur les requêtes automatisées depuis cette IP. Je ne contourne pas les CAPTCHA. Les positions concurrentes du §2 sont donc **non vérifiées** sauf mention « vérifié » — là, j'ai téléchargé la page directement (mots, H2, schémas réels).
- **Contrôle de 10 lignes d'`opportunites.csv`** (étape 3) : le fichier n'est pas dans le dépôt.
- **Volumes absolus** (Keyword Planner) : non consultés. Aucun chiffre de volume n'apparaît dans ce document — tous les chiffres viennent de la GSC ou de pages téléchargées.
- **Local Pack** : `data/local_pack.tsv` non fourni. C'est pourtant la mesure qui validerait ou infirmerait le constat n°1. **C'est le relevé le plus utile à faire avant le prochain run** — à la main, en navigation privée localisée Bordeaux, sur les 10 requêtes du §1 qui sont en top 5 à 0 clic.
