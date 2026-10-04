# Audit Search Console — couverturegironde.fr
**Propriété** : `sc-domain:couverturegironde.fr` (propriété Domaine)
**Date** : 2026-10-04 · **Audits précédents** : 2026-09-27, 2026-09-05
**Fenêtres** : 28 j = 2026-09-03 → 2026-10-01 · précédents = 2026-08-06 → 2026-09-03 · n-1 = 2025-09-03 → 2025-10-01 · 90 j = 2026-07-03 → 2026-10-01 · historique = 2025-06-03 → 2026-10-01

> ⚠️ **Mise en garde sur la cadence.** Cet audit est lancé **7 jours** après le précédent. Les deux fenêtres de 28 jours se recouvrent sur **21 jours (75 %)**. Sur un site à 42 clics / 28 jours, la plupart des écarts hebdomadaires sont du bruit statistique et non des mouvements réels. Ce rapport ne commente que les écarts qui dépassent le bruit, et le dit quand ce n'est pas le cas. **La cadence utile pour cette propriété est mensuelle.**

---

## 0. Le diff

| Indicateur | 05/09 | 27/09 | 04/10 | Lecture |
|---|---|---|---|---|
| **Position moyenne 28 j** | 18,8 | 17,5 | **17,1** | ✅ 3 baisses consécutives |
| **Tendance position (régression 90 j)** | +0,15/j · R² 0,79 | +0,09/j · R² 0,38 | **+0,07/j · R² 0,27** | ✅ la pente s'éteint |
| Position vs n-1 | +2,9 | −2,0 | **−3,7** | ✅ |
| Clics 28 j | 47 | 47 | 42 | ↓ saisonnier |
| Impressions 28 j | 15 962 | 14 809 | **12 662** | ↓ −21 % — reflux de saison |
| **Effet CTR sur le Δclics** | −10,4 | −2,0 | **+5,0** | ✅ le CTR redevient positif |
| CTR agrégé à position 2 | 0,64 % | 1,80 % | 1,71 % | → stable |
| Impressions top-5 sans clic | 6 681 | 1 351 | **1 368** | → inchangé |
| Part de clics marque | 42,9 % | 9,1 % | 11,1 % | → stable, bas |
| Part de clics **locale** | 28,6 % | 63,6 % | **88,9 %** | ✅ |
| Cannibalisations critiques | 0 | 0 | 0 | → |
| Cannibalisations à surveiller | 61 | 57 | 56 | ✅ |
| Pages ≥100 imp / 0 clic | 21 | 21 | 22 | → bruit |
| Part desktop | 66,5 % | 71,1 % | 71,0 % | ❌ stable haut |
| Part de clics anonymisés | 70,2 % | 76,6 % | **78,6 %** | ❌ 9 clics attribués sur 42 |
| Anomalies de canonique | 0 | 0 | **0** | ✅ |

**Le correctif du 8 septembre a produit son effet, et il est maintenant mesurable sur une fenêtre entièrement post-déploiement.**

| Panier constant (292 requêtes) | 11/08 → 07/09 | 09/09 → 01/10 |
|---|---|---|
| Position pondérée | 22,2 | **19,8** (−2,4) |
| **La home** | pos 24,5 · 2 907 imp · **9 clics** | **pos 20,5** · 1 914 imp · **11 clics** |

La home gagne 4,0 rangs et **+2 clics malgré un tiers d'impressions en moins**.

---

## 1. Ce que disent les chiffres

1. **La dégradation est éteinte.** Troisième baisse consécutive de la position moyenne (18,8 → 17,5 → 17,1) et la pente de régression passe de +0,15 rang/j (R² 0,79) à +0,07 (R² 0,27). Il n'y a plus de tendance exploitable.
2. **La baisse de clics est entièrement imputable aux impressions.** Décomposition du Δclics (−5) : **effet impressions −10,0, effet CTR +5,0**. Le CTR s'améliore ; c'est le volume de demande qui recule, de 21,3 %.
3. **Et ce recul est saisonnier**, confirmé sur deux ans : S39 2026 = 2 137 impressions contre S39 2025 = 1 170. Le site encaisse le reflux d'automne avec **+83 % d'impressions par rapport à la même semaine l'an dernier**.
4. **Le site est devenu un site local** : 88,9 % des clics attribués viennent de requêtes géolocalisées, contre 28,6 % le 5 septembre. La part marque est stable à 11,1 %.
5. **Quatre pages n'ont jamais été crawlées par Google** — `/couvreur-gradignan` et les 3 pages quartier de Bordeaux. Ce n'est pas un problème de classement : Google les a découvertes et a refusé d'aller les chercher.

---

## 2. Fiabilité de l'analyse

| Contrôle | Valeur |
|---|---|
| Part anonymisée — clics | **78,6 %** — 9 clics attribués sur 42 |
| Part anonymisée — impressions | 41,0 % |
| Historique | 486 jours (2025-06-03 → 2026-10-01) |
| Volumétrie 28 j | 438 requêtes, 60 pages, 42 clics |
| Seuil impressions | `max(30, p60)` = **30** |
| Seuil clics | `max(3, p75)` = **3** |

⚠️ **78,6 % d'anonymisation, en hausse pour le troisième audit consécutif.** Toute conclusion tirée des clics par requête repose sur **9 observations**. Les analyses par impressions, par position et par page restent solides ; celles par clics ne le sont pas, et la part « intentions » (§3.7b) en particulier doit être lue comme directionnelle.

**Non mesuré :**
- **Volet IA générative** : l'export du 27/09 couvrait la fenêtre 28/08 → 24/09. Il n'a **pas été refait** pour cette fenêtre. Les chiffres du précédent audit (418 impressions, 2,8 %) restent la dernière mesure connue — ils ne sont pas reconduits ici.
- **Volumes de recherche** : la GSC donne des impressions, pas des volumes.
- **Concurrence SERP et pack local** : hors de portée sans API ni navigateur pilotable. **C'est l'hypothèse explicative n°1 restante** et elle reste non vérifiée.
- **Anomalies de CTR (3.3b)** : la médiane du site est nulle à la plupart des positions, le calcul n'a pas de base. **Rien à signaler.**

---

## 3. Les 10 actions

Gain = plafond théorique sur le **CTR agrégé mesuré du site** (1,71 % à position 2), jamais une courbe de marché.

| # | Action | Page(s) | Preuve chiffrée | Gain plafond | Effort |
|---|---|---|---|---|---|
| 1 | **Diagnostiquer `/faitage-toiture-bordeaux`.** | 1 page | **5 clics → 0** en un mois, à **1 026 impressions et position 9,9 — en amélioration de 1,1 rang**. Effet CTR −5,1. C'est la seule anomalie où le classement monte et les clics tombent à zéro. | 2-4 clics/28 j | M |
| 2 | **Passer les 4 pages jamais crawlées en `noindex` et les sortir du sitemap.** | `/couvreur-gradignan`, `/couvreur-bordeaux-centre`, `-chartrons`, `-lac` | **Jamais crawlées** (« URL is unknown » / « Discovered – currently not indexed », aucun `lastCrawlTime`), **0 impression en 90 jours**. Elles consomment du budget de crawl et diluent la qualité perçue du sitemap. | 0 | S |
| 3 | **Trancher `/couvreur-gironde`.** | 1 page | 1 062 imp / **0 clic** / **position 41,1** sur 90 j. Cannibalise la home sur « couvreur gironde » (home p9,1 vs page p46,3, 2 317 imp). **Inchangé depuis 4 audits.** | ~1 clic/28 j | M |
| 4 | **Dé-optimiser `/contact` et `/demande-devis`.** | 2 pages | `/contact` : 646 imp / 0 clic / **p53,1**. `/demande-devis` : 1 599 imp / **0 clic**. Elles figurent dans 4 des 8 pires cannibalisations. | ~1 clic/28 j | S |
| 5 | **Récupérer `/installation-velux-bordeaux`.** | 1 page | **2 647 imp / 0 clic** sur 90 j — 1ʳᵉ page stérile du site, position 26,0. | 2-3 clics/28 j | M |
| 6 | **Investiguer l'écart mobile de `/couvreur-talence`.** | 1 page | **position mobile 27,6 contre desktop 17,0 — écart de 10,6 rangs.** Premier écart mobile défavorable > 2 rangs jamais observé sur ce site. À croiser avec les Core Web Vitals mobile. | non mesurable | M |
| 7 | **Ajouter Cenon, Le Bouscat et Yvrac aux zones de la fiche Google.** | GBP | Trois demandes reçues sur ces communes ; aucune n'est dans les 13 zones déclarées. Gratuit, 5 minutes. **Demandé pour la 6ᵉ fois.** | non mesurable | S |
| 8 | **Publier l'app GCP (OAuth « Testing » → « Production »).** | infra | **Token expiré 12 fois.** | 0 | S |
| 9 | **Refaire l'export IA générative à chaque audit.** | GSC | Dernière mesure : 418 imp, 2,8 % (27/09). Seuil d'alerte fixé à 15-20 %. | 0 | S |
| 10 | **Passer en cadence mensuelle.** | — | 75 % de recouvrement entre deux audits hebdomadaires sur une propriété à 42 clics/28 j. Le signal est noyé. | 0 | S |

---

## 4. Détail par analyse

### 3.1 Santé et tendance → [`daily.csv`](../data/daily.csv)

| Période | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| 28 j | **42** | 12 662 | 0,33 % | **17,1** |
| 28 j précédents | 47 | 16 082 | 0,29 % | 18,7 |
| 28 j n-1 | 24 | 6 025 | 0,40 % | 20,8 |
| 90 j | 154 | 46 104 | 0,33 % | 16,9 |

- **vs précédent** : clics −10,6 %, impressions **−21,3 %**, position **−1,6 (amélioration)**
- **vs n-1** : clics **+75,0 %**, impressions **+110,2 %**, position **−3,7 (amélioration)**
- **Décomposition du Δclics (−5)** : effet impressions **−10,0** · effet CTR **+5,0**

**Signature** : impressions en forte baisse, position en amélioration, CTR en amélioration. Ce n'est ni une perte de classement ni une dégradation de SERP — c'est une **baisse de la demande**, et le site la traverse en progressant. Aucune action corrective.

| Régression 90 j | Pente | R² | 27/09 |
|---|---|---|---|
| clics | −0,01/j | 0,02 | −0,00 · 0,00 |
| impressions | −0,47/j | 0,01 | +0,42 · 0,00 |
| **position** | **+0,07/j** | **0,27** | +0,09 · 0,38 |

Aucune des trois séries n'a de tendance exploitable. **Le diagnostic de dégradation continue, qui tenait encore le 5 septembre avec un R² de 0,79, est définitivement clos.**

**Mensuel** : `2026-06 46/14113 · 07 58/16072 · 08 58/16891 · 09 42/13631 · 10 2/365 (partiel)`

### 3.2 Quick wins → [`quick_wins.csv`](quick_wins.csv)

27 requêtes qualifiées. Top 8 :

| Requête | Page | Imp | Pos | Clics pot. |
|---|---|---|---|---|
| nettoyage toiture bordeaux | `/nettoyage-toiture-bordeaux` | 246 | 14,9 | 3,2 |
| velux bordeaux | `/installation-velux-bordeaux` | 112 | 13,1 | 1,9 |
| zinguerie bassin arcachon | `/couvreur-arcachon` | 97 | **7,3** | 1,7 |
| couverture arcachon | `/couvreur-arcachon` | 81 | 11,7 | 1,4 |
| couvreur arcachon | `/couvreur-arcachon` | 79 | 14,2 | 1,4 |
| entreprise hydrofuge toiture | `/traitement-hydrofuge-toiture-bordeaux` | 71 | 14,4 | 1,2 |
| nettoyage de toiture bordeaux | `/nettoyage-toiture-bordeaux` | 67 | 12,1 | 1,1 |
| zinguerie arcachon | `/couvreur-arcachon` | 66 | **7,6** | 1,1 |

**Plafond théorique du top 15 : 18,7 clics / 28 j**, méthode `impressions × (1,71 % − ctr_actuel)`.

`/couvreur-arcachon` reste la meilleure page du site (1 344 imp, position pondérée 11,6) et concentre 4 des 8 premières lignes. **Arcachon est à 60 km de l'atelier : décision de zone à prendre avant d'y investir.**

### 3.3 Courbe de CTR → [`ctr_curve.csv`](ctr_curve.csv)

Le CTR médian reste nul à la plupart des positions. La courbe médiane est inexploitable.

**CTR agrégé réel (90 j, couples requête × page, hors bruit concurrent)** :

| Position | Impressions | Clics | CTR | 27/09 |
|---|---|---|---|---|
| 1 | 285 | **0** | 0,00 % | 0,00 % |
| **2** | 819 | **14** | **1,71 %** | 1,80 % |
| 3 | 419 | **0** | 0,00 % | 0,00 % |
| 4-5 | 664 | 1 | 0,15 % | 0,15 % |
| 6-10 | 6 360 | 10 | 0,16 % | 0,13 % |
| 11-20 | 9 713 | 8 | 0,08 % | 0,08 % |
| 21-50 | 11 765 | 5 | 0,04 % | 0,04 % |
| 51+ | 2 257 | 0 | 0,00 % | 0,00 % |
| **Total** | **32 282** | **38** | **0,12 %** | 0,12 % |

**L'anomalie centrale n'a pas bougé** : les positions 1, 3, 4 et 5 cumulent **1 368 impressions pour 1 clic**. À 2 % de CTR on attendrait 27 clics. La position 2 fait 14 clics sur 819 impressions — la différence entre la position 2 et la position 3 n'est pas explicable par le rang seul.

L'hypothèse AI Overviews a été **réfutée** à l'audit précédent (418 impressions IA sur tout le site). **Le pack local reste la seule explication non testée**, et elle le reste faute d'accès aux SERP géolocalisées.

### 3.4 Cannibalisation → [`cannibalisation.csv`](cannibalisation.csv)

**66 requêtes multi-pages — 0 critique, 56 à surveiller, 10 bénignes.** (27/09 : 0 / 57 / 13.)

| Requête | Imp 90 j | Part dom. | Pages | Action |
|---|---|---|---|---|
| **couvreur gironde** | **2 317** | 0,56 | `/` (1 288 i, **p9,1**) · `/couvreur-gironde` (394 i, **p46,3**) · `/demande-devis` (334 i, p24,0) · `/contact` (301 i, **p53,9**) | Trancher la page, dé-optimiser contact et devis |
| couvreur bordeaux | 1 685 | 0,67 | `/` (1 127 i, p27,9, 2 clics) · `/couvreur-bordeaux` (554 i, p33,3, 1 clic) | Laisser — Google a tranché pour la home |
| couvreur mérignac | 841 | 0,60 | `/` (505 i, **p18,9**, 1 clic) · `/couvreur-merignac` (311 i, p28,5) | La home gagne ; `/couvreur-merignac` n'a pas de métier |
| nettoyage de toiture bordeaux | 540 | 0,51 | `/nettoyage-toiture-bordeaux` (278 i, p18,2) · `/tarifs` (174 i, p19,7) | Dé-optimiser `/tarifs` |
| pose couverture gironde | 349 | **0,27** | `/` (95 i, p2,1) · `/couvreur-gironde` (74 i, p40,6) · `/demande-devis` (73 i) · `/contact` (72 i) | idem ligne 1 |

Le motif est **identique depuis le premier audit** : `/contact`, `/demande-devis` et `/tarifs` concourent sur des requêtes service et n'y produisent aucun clic.

### 3.5 Pages en perte → [`pages_perte.csv`](pages_perte.csv)

| Page | Clics | Préc. | Δ | Imp | Pos | Pos préc. | Effet imp | Effet CTR |
|---|---|---|---|---|---|---|---|---|
| **`/faitage-toiture-bordeaux`** | **0** | 5 | **−5** | 1 026 | **9,9** | 11,0 | +0,1 | **−5,1** |
| `/a-propos` | 1 | 5 | −4 | 73 | 6,1 | 5,5 | −0,1 | −3,9 |
| `/nettoyage-toiture-bordeaux` | 1 | 5 | −4 | 1 249 | 17,7 | 16,8 | −2,5 | −1,5 |
| `/urgence-fuite-toiture-bordeaux` | 3 | 4 | −1 | 371 | **12,0** | 15,9 | −1,4 | +0,4 |

**`/faitage-toiture-bordeaux` est l'anomalie du mois** : impressions stables (1 006 → 1 026), position **améliorée** de 11,0 à 9,9, et les clics passent de 5 à **zéro**. L'effet CTR porte −5,1 des −5 clics. C'est la seule page du site dont le classement progresse pendant que les clics s'effondrent.

Rappel de l'audit précédent : cette même page concentrait **26 % des impressions IA du site** (110) et **2 314 impressions en recherche Images**. Trois canaux, zéro clic.

**Pages en gain** :

| Page | Clics | Préc. | Δ | Pos | Pos préc. |
|---|---|---|---|---|---|
| **`/`** | **13** | 9 | **+4** | **21,7** | 24,2 |
| `/ornements-toiture-bordeaux` | 5 | 3 | +2 | 9,7 | 10,4 |
| `/tarifs` | 3 | 1 | +2 | **12,3** | 24,1 |
| `/couvreur-begles` | 2 | 0 | +2 | 14,1 | 17,6 |

**La home gagne 4 clics et 2,5 rangs.** C'est le correctif du 8 septembre qui produit.

### 3.6 Requêtes gagnées / perdues → [`queries_gagnees_perdues.csv`](queries_gagnees_perdues.csv)

- **Perdues : 2** — « démoussage, traitement des toitures (entreprises) bordeaux » (749 imp, p10,1, **0 clic**) et « couvreur pessac » (41 imp, p17,4, 0 clic). Aucune ne produisait de clic.
- **Gagnées : 0** au-dessus du seuil.

Pas de dérive sémantique, pas de perte de valeur.

### 3.7 Clusters → [`clusters.csv`](clusters.csv)

| Page | Requêtes | Clics | Imp | Pos pondérée |
|---|---|---|---|---|
| `/` | 212 | **21** | 7 587 | 22,3 |
| `/nettoyage-toiture-bordeaux` | 137 | 4 | 4 578 | 19,2 |
| `/installation-velux-bordeaux` | 69 | **0** | 2 647 | 26,0 |
| `/demande-devis` | 61 | **0** | 1 599 | 18,9 |
| `/couvreur-arcachon` | 32 | 1 | 1 344 | **11,6** |
| `/couvreur-gironde` | 28 | **0** | 1 062 | **41,1** |
| `/couvreur-talence` | 24 | 1 | 911 | 17,2 |
| `/couvreur-eysines` | 19 | **0** | 868 | 15,3 |

La home porte **21 des 38 clics attribués** du site.

### 3.7b Intentions → [`intentions.csv`](intentions.csv)

| Intention | Requêtes | Clics | Part clics | Impressions | Part imp |
|---|---|---|---|---|---|
| **Locale** | 180 | **8** | **88,9 %** | 4 999 | 67,3 % |
| Marque | 4 | 1 | 11,1 % | 90 | 1,2 % |
| Transactionnelle | 125 | 0 | 0,0 % | 1 691 | 22,7 % |
| Non classée | 125 | 0 | 0,0 % | 653 | 8,8 % |

**La bascule constatée le 27/09 se confirme** : le site vit désormais de requêtes locales (88,9 % des clics) et non de sa marque (11,1 %, contre 42,9 % le 5 septembre).

⚠️ **Sur 9 clics attribués.** Directionnel, pas robuste.

Clics hors marque — 7 requêtes, toutes locales : couvreur bordeaux (2 clics, 563 imp, p25,6) · couvreur begles (1, 17 imp, p11,3, **CTR 5,9 %**) · couvreur merignac (1, 83 imp, p8,7) · couvreur mérignac (1, 220 imp, p19,1) · demoussage toiture bordeaux (1, 38 imp, p10,0, 2,6 %) · fuite toiture bordeaux (1, 40 imp, **p4,5**, 2,5 %) · nettoyage toiture bordeaux (1, 246 imp, p14,9).

**Quand le site est bien placé sur une requête humaine, il est cliqué normalement** (5,9 %, 2,6 %, 2,5 %). Le CTR n'est pas le problème ; le rang l'est.

### 3.8 Pages mortes → [`pages_mortes.csv`](pages_mortes.csv)

**22 pages ≥ 100 impressions et 0 clic sur 90 jours** (21 au 27/09 — écart dans le bruit).

| Page | Imp | Pos | Verdict |
|---|---|---|---|
| `/installation-velux-bordeaux` | **2 647** | 26,0 | Améliorer |
| `/demande-devis` | 1 599 | 18,9 | Dé-optimiser |
| `/couvreur-gironde` | 1 062 | **41,1** | Trancher |
| `/couvreur-eysines` | 868 | 15,3 | Améliorer |
| `/traitement-hydrofuge-toiture-bordeaux` | 823 | 14,9 | Améliorer |
| `/charpente-bordeaux` | 749 | 22,9 | Améliorer |
| `/contact` | 646 | **53,1** | Dé-optimiser |
| `/demoussage-toiture-bordeaux` | 523 | 33,1 | Résiduel (301 en place) |
| `/faitage-toiture-bordeaux` | 438 | 22,1 | **Diagnostiquer (action 1)** |

**11 pages à position moyenne > 30**, dont `/couvreur-gironde` (41,1), `/contact` (53,1), `/urgence` (32,6), `/couvreur-villenave-dornon` (35,9).

**25 URLs du sitemap sur 76 font zéro impression sur 90 jours.**

### 3.9 Mobile vs desktop

| Device | Clics | Impressions | Part | CTR | Position |
|---|---|---|---|---|---|
| **DESKTOP** | 21 | 21 251 | **71,0 %** | 0,10 % | 21,1 |
| **MOBILE** | 17 | 8 470 | 28,3 % | **0,20 %** | **14,7** |
| TABLET | 0 | 192 | 0,6 % | 0,00 % | 7,4 |

La part desktop est stable à 71 %. Sur un site de couvreur local, c'est anormal, et c'est le seul indicateur structurel qui ne s'améliore pas depuis le premier audit.

**⚠️ Signal technique neuf** :

| Page | Imp mobile | Pos mobile | Imp desktop | Pos desktop | Écart |
|---|---|---|---|---|---|
| **`/couvreur-talence`** | 85 | **27,6** | 122 | **17,0** | **+10,6** |
| `/` | 408 | 13,7 | 1 676 | 25,5 | −11,8 |
| `/faitage-toiture-bordeaux` | 100 | 12,9 | 66 | 33,0 | −20,1 |

**`/couvreur-talence` est la première page de ce site à présenter un écart mobile défavorable supérieur à 2 rangs**, et il est de 10,6. Sur toutes les autres pages, le mobile est mieux placé. À croiser avec les Core Web Vitals mobile et le rendu de cette page spécifiquement.

### 3.10 Pollution géographique

France **87,0 %** (26 018 imp, 38 clics). Hors France **13,0 %** — sous le seuil de 25 %. **Rien à signaler.**

### 3.11 Saisonnalité

| Semaine | 2026 | 2025 | Écart |
|---|---|---|---|
| S34 | 3 927 | 2 780 | +41 % |
| S35 | 4 165 | 2 251 | +85 % |
| S36 | 3 907 | 2 198 | +78 % |
| S37 | 3 562 | 1 510 | +136 % |
| S38 | 2 691 | 993 | +171 % |
| **S39** | **2 137** | **1 170** | **+83 %** |

**Le reflux d'automne est confirmé sur les deux années.** La baisse d'impressions de ce mois n'est pas une anomalie : c'est le même mouvement qu'en 2025, sur une base deux fois plus haute.

**Dates de publication cible (8 semaines avant le pic)** : **début janvier** pour la reprise de S06-S09, **fin mai** pour le pic S30-S36.

### 3.12 Apparences

| Apparence | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| PRODUCT_SNIPPETS | 6 | 1 569 | 0,38 % | 13,6 |

Une seule apparence, inchangée depuis trois audits. Son CTR reste **3,2× supérieur** au CTR global du site. Aucune apparence perdue → **pas de balisage cassé**.

### 3.13 Recherche Images

**9 clics / 6 221 impressions sur 90 jours** — 5,8 % des clics du site. Types `video` et `discover` : 0 impression.

---

## 5. Indexation → [`indexation.csv`](indexation.csv)

**60 URLs inspectées.** ⚠️ **L'échantillon a changé par rapport au 27/09** : il est cette fois construit à partir du sitemap complet, et non du top 60 par impressions. Il inclut donc la traîne jamais servie, absente de l'échantillon précédent.

| État | Nombre |
|---|---|
| Submitted and indexed | 51 |
| Discovered – currently not indexed | 4 |
| URL is unknown to Google | 3 |
| Crawled – currently not indexed | 2 |

**Ce n'est PAS une dégradation.** Le « 58/58 » du 27/09 portait sur un échantillon qui excluait ces pages. Les 9 URLs en difficulté sont exactement celles qui n'ont jamais eu d'impression.

- **Divergences canonique déclarée ≠ canonique retenue : 0.** Troisième audit consécutif sans anomalie.

### Le diagnostic neuf

| URL | État | Dernier crawl |
|---|---|---|
| `/couvreur-gradignan` | URL is unknown to Google | **jamais** |
| `/couvreur-bordeaux-centre` | URL is unknown to Google | **jamais** |
| `/couvreur-bordeaux-chartrons` | Discovered – currently not indexed | **jamais** |
| `/couvreur-bordeaux-lac` | Discovered – currently not indexed | **jamais** |
| `/mentions-legales` | Discovered – currently not indexed | jamais |
| `/politique-confidentialite` | URL is unknown to Google | jamais |
| `/cookies` | Discovered – currently not indexed | jamais |
| `/guides/aides-renovation-toiture-2026` | Crawled – currently not indexed | 2026-06-07 |
| `/nettoyage-toiture-pessac` | Crawled – currently not indexed | 2026-06-07 |

**Les 4 pages quartier/Gradignan n'ont jamais été crawlées.** On savait depuis le premier audit qu'elles faisaient zéro impression ; on sait maintenant **pourquoi** : Google les a découvertes dans le sitemap et a **refusé d'aller les chercher**. Ce n'est pas un problème de contenu ni de classement — c'est un refus de crawl, et c'est un signal de qualité perçue du site.

Les 3 pages légales dans le même état sont **normales et sans enjeu**.

**Sitemap** : dernier téléchargement **2026-09-28**, 0 warning, 0 erreur, 76 URLs soumises.

---

## 6. Verdict définitif sur les cibles du 5 septembre → [`verdict_cibles.csv`](verdict_cibles.csv)

**La date de contrôle fixée au 03/10 est dépassée.** Fenêtre 03/09 → 01/10, intégralement post-déploiement.

| Requête | 05/09 | 04/10 | Δ | Critère | Verdict |
|---|---|---|---|---|---|
| couvreur bordeaux | 32,9 | **25,6** | **−7,3** | < 25 | ÉCHOUÉ (de 0,6) |
| nettoyage de toiture bordeaux | 14,8 | **12,1** | **−2,7** | < 12 | ÉCHOUÉ (de 0,1) |
| couvreur mérignac | 21,5 | **19,1** | **−2,4** | < 18 | ÉCHOUÉ (de 1,1) |
| couvreur gironde | 24,0 | 25,6 | +1,6 | < 15 | **ÉCHOUÉ** |
| velux bordeaux | 11,8 | 13,1 | +1,3 | < 10 | ÉCHOUÉ |
| installateur velux bordeaux | 14,1 | 14,7 | +0,6 | < 12 | ÉCHOUÉ |
| démoussage toiture bordeaux | 13,9 | 16,0 | +2,1 | < 10 | ÉCHOUÉ |
| **couverture gironde** (témoin) | 2,3 | **2,5** | +0,2 | pos ≤ 4 | **POSITION OK** |
| devis toiture bordeaux | 5,7 | 4,7 | −1,0 | qualitatif | NON CONCLUANT |

**0 réussite, 7 échecs.** Trois cibles échouent de moins de 1,1 rang, dont une de 0,1.

**Le verdict formel est un échec ; le verdict factuel ne l'est pas.** Le panier constant de 292 requêtes passe de 22,2 à **19,8 (−2,4 rangs)** et la home de 24,5 à **20,5 (−4,0 rangs) en gagnant 2 clics malgré un tiers d'impressions en moins**.

**Ce que je corrige dans ma méthode** : fixer des seuils absolus de position à 28 jours sur une propriété à 42 clics était une erreur. Les prochains critères porteront sur le **panier constant** et sur les **clics de la page cible**, pas sur des seuils de rang par requête.

**Témoin de rollback non déclenché** : la marque tient à 2,5 (critère ≤ 4). Le volet « ≥ 4 clics » avait déjà été retiré au précédent audit comme inutilisable à ce volume.

---

## 7. Annexe — méthodes

| Métrique | Formule |
|---|---|
| Part anonymisée | `1 − (Σ clics des lignes query) / (clics totaux sans dimension)` |
| Seuils | `max(30, p60(impressions))` et `max(3, p75(clics pages))` |
| Décomposition Δclics | `Δimpressions × ctr_préc + impressions × Δctr` |
| Régression 90 j | moindres carrés sur la série journalière, 3 derniers jours exclus |
| CTR agrégé par position | `Σ clics / Σ impressions` par bucket, couples requête × page 90 j, hors requêtes contenant le domaine du concurrent |
| ctr_cible | CTR agrégé mesuré à position 2 = **1,71 %** |
| Part dominante | `impressions page n°1 / impressions totales` ; pages retenues ≥ 10 % des impressions |
| Sévérité | CRITIQUE si `part < 0,55` **et** ≥ 2 pages avec clics ; SURVEILLER si `0,55 ≤ part < 0,80` ; sinon BÉNIGNE |
| Panier constant | requêtes présentes dans les deux fenêtres, hors bruit concurrent |

**Données brutes** : `gsc-audit/data/` · **Sorties** : `gsc-audit/out/`

**Réserve principale** : 42 clics sur 28 jours, **78,6 % d'anonymisation**, **9 clics attribués**. Les analyses par impressions, position et page sont solides ; celles par clics ne le sont pas.

**Prochain audit : 2026-11-01** (cadence mensuelle — cf. action 10).

---

## 8. Correction — les deux « signaux neufs » ne tiennent pas

Vérification faite après rédaction, au niveau requête. **Les deux anomalies annoncées plus haut sont des artefacts. Elles sont retirées du plan d'action.**

### `/faitage-toiture-bordeaux` : c'est du bruit, pas une anomalie

Les 5 clics du mois précédent **ne venaient d'aucune des requêtes visibles** : les 8 premières requêtes de la page affichent 0 clic dans les deux périodes. Ces 5 clics étaient dans la traîne anonymisée.

| | Mois précédent | Ce mois |
|---|---|---|
| Impressions | 1 006 | 1 026 |
| Clics | 5 | 0 |
| CTR | **0,50 %** | 0,00 % |
| CTR mesuré du site à position 6-10 | **0,16 %** | 0,16 % |

À 0,16 % de CTR, 1 026 impressions donnent **1,6 clic attendu**, et `P(0 clic) = e^−1,6 = 19 %`. Observer zéro clic est banal.

**C'est le mois précédent qui était l'exception** : 0,50 % de CTR, soit 3 fois la moyenne du site à cette position. La page est revenue à la normale, elle ne s'est pas effondrée.

→ **L'action n°1 du §3 est annulée.** Il n'y a rien à diagnostiquer.

### `/couvreur-talence` : paradoxe de Simpson, pas un problème mobile

L'écart agrégé de +10,6 rangs disparaît dès qu'on descend au niveau requête :

| Requête | Device | Imp | Position |
|---|---|---|---|
| **couvreur talence** | **MOBILE** | 230 | **10,8** |
| **couvreur talence** | DESKTOP | 183 | 15,0 |
| réparation fuite toiture talence | DESKTOP | 92 | 7,4 |
| entreprise de couverture talence | DESKTOP | 83 | 14,4 |
| entreprise traitement toiture talence | MOBILE | 45 | 31,4 |

Sur la requête principale, **le mobile est mieux placé de 4,2 rangs**. L'écart agrégé vient d'un effet de composition : le desktop est servi sur des requêtes où la page est bien placée et que le mobile ne voit presque pas, le mobile sur des requêtes profondes.

→ **L'action n°6 du §3 est annulée.** Aucun signal technique mobile.

### Ce que ça change au plan d'action

Il reste **trois** actions site défendables, pas six :

| # | Action | Preuve | Effort |
|---|---|---|---|
| 1 | `noindex` + retrait du sitemap des 4 pages jamais crawlées | « URL is unknown » / « Discovered – currently not indexed », aucun `lastCrawlTime`, 0 impression en 90 j | S |
| 2 | Trancher `/couvreur-gironde` | 1 062 imp / **0 clic** / position 41,1 ; cannibalise la home (p9,1 contre p46,3) — **inchangé depuis 4 audits** | M |
| 3 | Dé-optimiser `/contact` | 646 imp / **0 clic** / position **53,1**, et elle ranke sur « couvreur gironde » (301 imp) | S |

Tout le reste relève de l'attente : le correctif du 8 septembre produit encore (panier constant −2,4 rangs, home −4,0 rangs et +2 clics), et y toucher brouillerait la mesure.

**Leçon de méthode** : un écart de clics sur une page à faible CTR, et un écart de position agrégé entre devices, doivent être testés au niveau requête avant d'être annoncés comme des signaux. Je ne l'avais pas fait ; les deux sont tombés.

