# Audit Search Console — couverturegironde.fr
**Propriété** : `sc-domain:couverturegironde.fr` (propriété Domaine — agrège http/https, www/non-www et les sous-domaines ; préférée à toute propriété Préfixe d'URL)
**Date** : 2026-09-27 · **Audit précédent** : 2026-09-05
**Fenêtres** : 28 j = 2026-08-27 → 2026-09-24 · précédents = 2026-07-30 → 2026-08-27 · n-1 = 2025-08-27 → 2025-09-24 · 90 j = 2026-06-26 → 2026-09-24 · historique = 2025-05-27 → 2026-09-24

---

## 0. Le diff — ce qui a bougé depuis le 5 septembre

C'est ce tableau qui compte. L'audit initial ne se vend qu'une fois.

| Indicateur | 05/09 | 27/09 | Verdict |
|---|---|---|---|
| **Tendance de position (régression 90 j)** | **+0,15 rang/j · R² 0,79** | **+0,09 rang/j · R² 0,38** | ✅ **la dégradation continue est cassée** |
| Position moyenne 28 j | 18,8 | **17,5** | ✅ −1,3 |
| Position vs n-1 | +2,9 (pire qu'il y a un an) | **−2,0 (meilleure)** | ✅ inversion |
| Clics 28 j | 47 | 47 | → stable |
| Impressions 28 j | 15 962 | 14 809 | ↓ −7 % (saisonnier, cf. 3.11) |
| CTR agrégé à position 2 (90 j) | 0,64 % | **1,80 %** | ✅ ×2,8 |
| Impressions top-5 à zéro clic (90 j) | **6 681** | **1 351** | ✅ −80 % |
| Part de clics « marque » | **42,9 %** | **9,1 %** | ✅ le site capte enfin du hors-marque |
| Cannibalisations à surveiller | 61 | 57 | ✅ −4 |
| Cannibalisations critiques | 0 | 0 | → |
| Pages ≥100 imp / 0 clic (90 j) | 21 | 21 | → |
| URLs sitemap à 0 impression | 22 / 77 | **26 / 76** | ❌ +4 |
| Pages indexées (sur celles inspectées) | 56 / 57 | **58 / 58** | ✅ |
| Anomalies de canonique | 0 | 0 | → |
| Part de clics anonymisés | 70,2 % | **76,6 %** | ❌ analyse par requête encore plus fragile |
| Volet IA générative | non mesuré | **418 imp · 2,8 %** | ✅ mesuré — et l'hypothèse IA est réfutée |
| Part desktop des impressions | 66,5 % | **71,1 %** | ❌ |

**Le correctif du 8 septembre a marché, mais pas assez pour valider ses propres critères.** Panier constant de 256 requêtes présentes avant ET après le déploiement : position pondérée **21,8 → 19,0 (−2,7 rangs)**. La home : **24,9 → 19,9 (−5,0 rangs)**, clics 7 → 8.

---

## 1. Ce que disent les chiffres

1. **La chute est enrayée.** La régression de position sur 90 jours passe de +0,15 rang/j (R² 0,79, tendance nette) à +0,09 (R² 0,38, tendance faible). Sur le panier constant autour du déploiement du 8 septembre, le site reprend 2,7 rangs et la home 5,0.
2. **Aucune cible du 5 septembre n'est atteinte** : 7 échecs, 0 réussite, 2 non concluantes. « couvreur bordeaux » gagne 6,3 rangs mais manque son seuil de 1,6 ; « couvreur mérignac » gagne 2,6 rangs et manque le sien de 0,9.
3. **Les clics baissent de 13 % (54 → 47) pour une raison saisonnière, pas de classement** : décomposition = **−5,0 clics imputables aux impressions**, −2,0 au CTR. Les impressions hebdomadaires sont passées de 5 104 (S30) à 2 691 (S38) — exactement le même reflux qu'en 2025.
4. **Sur un an, la progression est réelle** : +88 % de clics, +107,6 % d'impressions, −2,0 rangs.
5. **Le site ne vit plus de sa marque** : la part de clics marque tombe de 42,9 % à 9,1 %. Il capte de la demande locale hors marque — mais sur 11 clics attribués seulement, ce chiffre est fragile.
6. **L'IA générative n'est pas le problème** : 418 impressions sur 28 jours, soit 2,8 % du total. L'hypothèse que je portais depuis deux audits pour expliquer les impressions top-5 sans clic est **réfutée** (§4bis).

---

## 2. Fiabilité de l'analyse

| Contrôle | Valeur | Conséquence |
|---|---|---|
| Part anonymisée — clics | **76,6 %** (11 attribués sur 47) | ⚠️ **Au-delà du seuil de 60 %, et en hausse.** Toute conclusion par requête repose sur 11 observations. Le poids de l'audit bascule sur l'analyse par page. |
| Part anonymisée — impressions | 39,0 % | Acceptable |
| Historique | 486 jours (2025-05-27 → 2026-09-24) | > 13 mois → comparaison n-1 et saisonnalité valides |
| Volumétrie 28 j | 471 requêtes, 60 pages, 47 clics | Très faible volume : bruit statistique élevé |
| Seuil impressions | `max(30, p60)` = **30** | |
| Seuil clics | `max(3, p75)` = **3** | |

**Non mesuré :**
- **Volet IA générative** : ✅ **mesuré**, via l'export manuel de l'interface (pas d'API, pas de BigQuery). Voir §4bis. L'export ne contient que des impressions — ni clics, ni CTR, ni requêtes, ni position.
- **Volumes de recherche** : la GSC donne des impressions, pas des volumes. Aucun volume ne figure dans ce document.
- **Concurrence SERP** : hors de portée sans navigateur pilotable ni API.
- **Anomalies de CTR (3.3b)** : le calcul exige une médiane de référence non nulle, qui n'existe pas ici. **Rien à signaler sur ce point.**

---

## 3. Les 10 actions

Gain = plafond théorique, calculé sur le **CTR agrégé réellement mesuré sur ce site** (1,80 % à position 2), jamais sur une courbe de marché.

| # | Action | Page(s) | Preuve chiffrée | Gain plafond | Effort |
|---|---|---|---|---|---|
| 1 | **Ne rien changer sur la home avant le 25/10.** | `/` | La re-évaluation court depuis 19 j et produit −5,0 rangs. Elle s'étale sur 3 à 6 semaines : la dégradation de juillet a mis 4 semaines à se déployer. | — | S |
| 2 | **Exploiter la recherche Images.** | site | **9 clics / 5 859 impressions sur 90 j** — soit 5,6 % des clics du site, sur un canal jamais analysé. `/faitage-toiture-bordeaux` seul fait 2 314 impressions image à position 37,1. | 3-5 clics/28 j | M |
| 3 | **Trancher `/couvreur-gironde`.** | 1 page | 1 049 imp / **0 clic** / **position 40,8** sur 90 j, et elle cannibalise la home (home p8,5 vs page p47,2 sur « couvreur gironde », 2 353 imp). Inchangé depuis 3 audits. | ~1 clic/28 j | M |
| 4 | **Dé-optimiser `/contact`.** | 1 page | 665 imp / **0 clic** / **position 51,7**, et elle apparaît sur « couvreur gironde » (291 imp) et « pose couverture gironde » (77 imp). Une page contact ne doit pas concourir sur des requêtes service. | ~1 clic/28 j | S |
| 5 | **Récupérer `/installation-velux-bordeaux`.** | 1 page | **2 853 imp / 0 clic** sur 90 j — première page du site en impressions stériles. Position 24,8. « velux bordeaux » 129 imp à 12,5. | 2-3 clics/28 j | M |
| 6 | **Supprimer ou refondre les 3 guides.** | 3 pages | `/guides/prix-demoussage`, `/guides/aides-renovation-2026`, `/guides/quand-demousser` sont passés à **zéro impression sur 90 jours**. Deux ne sont plus recrawlés depuis juin. Le format guide ne prend pas sur cette propriété. | 0 | M |
| 7 | **Ajouter Cenon, Le Bouscat et Yvrac aux zones de la fiche Google.** | GBP | Trois demandes reçues sur ces communes début septembre ; aucune n'est déclarée dans les 13 zones de la fiche. Gratuit. | non mesurable | S |
| 8 | **Publier l'app GCP (OAuth « Testing » → « Production »).** | infra | Token expiré **11 fois**. Chaque audit coûte une re-validation manuelle. | 0 | S |
| 9 | **Mesurer la part du pack local dans les SERP cibles.** | — | L'hypothèse IA est **réfutée** (§4bis) : 418 impressions IA seulement, contre 1 351 impressions top-5 sans clic. Le pack local reste la seule explication non testée. | 0 | M |
| 10 | **Ne pas créer de page.** | — | 26 URLs du sitemap sur 76 font zéro impression en 90 j, dont les 3 pages quartier Bordeaux et 15 réalisations. Le stock existant n'est pas saturé. | 0 | S |

**Ce qu'aucune de ces actions ne change** : le site produit 47 clics / 28 jours, dont 11 attribuables. Le plafond cumulé des actions 2 à 5 est d'environ **10 clics/28 j**. C'est un doublement en proportion, et cela reste marginal en valeur absolue.

---

## 4. Détail par analyse

### 3.1 Santé et tendance → [`daily.csv`](../data/daily.csv)

| Période | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| 28 j | **47** | 14 809 | 0,32 % | **17,5** |
| 28 j précédents | 54 | 16 312 | 0,33 % | 18,6 |
| 28 j n-1 | 25 | 7 134 | 0,35 % | 19,4 |
| 90 j | 160 | 47 632 | 0,34 % | 16,4 |

- **vs précédent** : clics **−13,0 %**, impressions **−9,2 %**, position **−1,2 (amélioration)**
- **vs n-1** : clics **+88,0 %**, impressions **+107,6 %**, position **−2,0 (amélioration)**
- **Décomposition du Δclics (−7)** : effet impressions **−5,0** · effet CTR **−2,0**

**Signature diagnostique** : impressions en baisse **+ position en amélioration**. Ce n'est ni une perte de classement, ni un changement de SERP — c'est une **baisse de la demande**, confirmée par la saisonnalité (§3.11). Aucune action corrective n'est appelée.

**Régressions sur 90 jours** :

| Série | Pente | R² | Lecture |
|---|---|---|---|
| clics | −0,00/j | 0,00 | aucune tendance |
| impressions | +0,42/j | 0,00 | bruit |
| **position** | **+0,09/j** | **0,38** | **tendance faible — contre +0,15/j à R² 0,79 le 05/09** |

C'est le chiffre le plus important de cet audit : **la seule tendance statistiquement solide du diagnostic précédent s'est effondrée.** La dégradation continue qui courait depuis juillet n'est plus nette.

**Mensuel (clics / impressions)** : `2026-04 29/9513 · 05 33/10654 · 06 46/14113 · 07 58/16072 · 08 58/16891 · 09 37/11978 (partiel)`

### 3.2 Quick wins → [`quick_wins.csv`](quick_wins.csv)

38 requêtes qualifiées (position 4-15, ≥ 30 impressions, hors bruit concurrent). Top 10 :

| Requête | Page | Imp | Pos | Clics potentiels |
|---|---|---|---|---|
| velux bordeaux | `/installation-velux-bordeaux` | 129 | 12,5 | 2,3 |
| zinguerie bassin arcachon | `/couvreur-arcachon` | 104 | 6,8 | 1,9 |
| couverture arcachon | `/couvreur-arcachon` | 98 | 11,3 | 1,8 |
| couvreur arcachon | `/couvreur-arcachon` | 98 | 14,1 | 1,8 |
| couvreur merignac | `/` | 100 | 8,1 | 1,8 |
| nettoyage de toiture bordeaux | `/nettoyage-toiture-bordeaux` | 95 | 12,1 | 1,7 |
| démoussage toiture bordeaux | `/nettoyage-toiture-bordeaux` | 80 | 14,2 | 1,4 |
| zinguerie arcachon | `/couvreur-arcachon` | 77 | 7,3 | 1,4 |
| réparation fuite toiture pessac | `/reparation-toiture-pessac` | 64 | 10,3 | 1,2 |
| gouttieres en zinc a leognan | `/zinguerie-bordeaux` | 63 | 7,2 | 1,1 |

**Plafond théorique du top 18 : 23,4 clics / 28 j**, méthode `impressions × (1,80 % − ctr_actuel)`, où 1,80 % est le CTR agrégé mesuré du site à position 2. C'est un plafond, pas une prévision.

**`/couvreur-arcachon` concentre 4 des 10 premières lignes** (1 333 impressions sur 90 j, position pondérée 11,6 — la meilleure page du site). Arcachon est à 60 km de l'atelier : **trancher si c'est une zone à servir avant d'y investir.**

### 3.3 Courbe de CTR → [`ctr_curve.csv`](ctr_curve.csv)

**Le CTR médian du site reste nul à quasiment toutes les positions** (exceptions : 1,96 % à position 5 sur 2 requêtes, 0,43 % à 17, 0,42 % à 19). La courbe médiane est inexploitable — c'est un constat, pas un manque.

**CTR agrégé réel (90 j, couples requête × page, hors bruit concurrent)** :

| Position | Impressions | Clics | CTR | 05/09 |
|---|---|---|---|---|
| 1 | 292 | 0 | 0,00 % | 0,00 % |
| **2** | **887** | **16** | **1,80 %** | 0,64 % |
| 3 | 386 | 0 | 0,00 % | 0,00 % |
| 4-5 | 673 | 1 | 0,15 % | 0,00 % |
| 6-10 | 6 793 | 9 | 0,13 % | 0,18 % |
| 11-20 | 10 248 | 8 | 0,08 % | 0,10 % |
| 21-50 | 11 782 | 5 | 0,04 % | 0,01 % |
| 51+ | 2 175 | 0 | 0,00 % | — |
| **Total** | **33 572** | **40** | **0,12 %** | 0,12 % |

**Les impressions top-5 sans clic passent de 6 681 à 1 351 (−80 %).** La cause est identifiée : les requêtes contenant le domaine du concurrent (`gironde-toiture-service.fr`), qui représentaient 4 445 de ces impressions, ont quasiment disparu. Elles sont exclues du calcul ci-dessus.

Il reste **1 351 impressions en position 1, 3, 4 et 5 pour 1 clic**. À un CTR humain de 2 %, on attendrait 27 clics. **L'export IA générative, obtenu depuis, réfute l'hypothèse des AI Overviews** (§4bis) : le site ne totalise que 418 impressions IA sur 28 jours, toutes positions confondues. L'écart reste inexpliqué ; le pack local devient l'explication la plus probable.

### 3.4 Cannibalisation → [`cannibalisation.csv`](cannibalisation.csv)

**70 requêtes servies par ≥ 2 pages — 0 critique, 57 à surveiller, 13 bénignes.** (05/09 : 0 / 61 / 14.)

Les 5 cas qui justifient une action :

| Requête | Imp 90 j | Part dom. | Pages | Action unique |
|---|---|---|---|---|
| **couvreur gironde** | **2 353** | 0,58 | `/` (1 372 i, **p8,5**) · `/couvreur-gironde` (369 i, **p47,2**) · `/demande-devis` (321 i, p23,9) · `/contact` (291 i, **p54,0**) | Trancher `/couvreur-gironde` ; dé-optimiser `/contact` et `/demande-devis` |
| pose couverture gironde | 379 | **0,27** | `/` (102 i, p2,1) · `/couvreur-gironde` (81 i, p38,6) · `/contact` (77 i, p58,8) · `/demande-devis` (75 i, p13,1) | idem |
| couverture gironde | 434 | 0,43 | `/` (187 i, **p2,4, 16 clics**) · `/couvreur-gironde` (101 i, p5,7) · `/contact` (74 i) · `/demande-devis` (70 i) | Bénigne en pratique : la home prend 100 % des clics |
| démoussage toiture bordeaux | 468 | 0,46 | `/nettoyage-toiture-bordeaux` (215 i, p13,2) · `/demoussage-toiture-bordeaux` (191 i, p32,8) | **Déjà corrigé** — le 301 est en place, ces impressions sont résiduelles |
| nettoyage de toiture bordeaux | 561 | 0,53 | `/nettoyage-toiture-bordeaux` (300 i, p17,5) · `/tarifs` (174 i, p19,7) | Dé-optimiser `/tarifs` |

**Le motif est inchangé depuis le premier audit** : `/contact`, `/demande-devis` et `/tarifs` concourent sur des requêtes service et n'y produisent aucun clic.

### 3.5 Pages en perte → [`pages_perte.csv`](pages_perte.csv)

| Page | Clics | Préc. | Δ | Imp | Pos | Pos préc. | Effet imp | Effet CTR |
|---|---|---|---|---|---|---|---|---|
| `/` | 12 | 15 | −3 | 2 924 | **22,0** | 23,6 | −2,8 | −0,2 |
| `/nettoyage-toiture-bordeaux` | 2 | 5 | −3 | 1 477 | **17,5** | 19,1 | −2,1 | −0,9 |
| `/ornements-toiture-bordeaux` | 3 | 5 | −2 | 164 | 10,3 | 9,5 | −0,8 | −1,2 |
| `/a-propos` | 2 | 4 | −2 | 81 | 5,8 | 5,7 | +0,6 | −2,6 |
| `/faitage-toiture-bordeaux` | 2 | 4 | −2 | 1 312 | **10,4** | 11,8 | +3,8 | **−5,8** |

**Les cinq pages en perte de clics ont toutes une position stable ou meilleure.** La perte vient des impressions (saisonnalité) ou du CTR, jamais du classement. `/faitage-toiture-bordeaux` est le cas le plus net : +642 impressions, +1,4 rang, et −2 clics — son CTR s'effondre alors que tout le reste s'améliore. Seule page à investiguer côté SERP.

### 3.6 Requêtes gagnées / perdues → [`queries_gagnees_perdues.csv`](queries_gagnees_perdues.csv)

- **Perdues : 2.** « démoussage, traitement des toitures (entreprises) bordeaux » (749 imp, p10,1, 0 clic) et « réparation toiture » (126 imp, p40,9, 0 clic). Aucune ne produisait de clic — **aucune perte de valeur.**
- **Gagnées : 0** au-dessus du seuil.

Pas de dérive sémantique, pas de perte de classement.

### 3.7 Clusters par page → [`clusters.csv`](clusters.csv)

53 pages avec au moins une impression sur 90 j. Top 8 :

| Page | Requêtes | Clics | Imp | Pos pondérée | Requête principale |
|---|---|---|---|---|---|
| `/` | 215 | **22** | 8 014 | 21,4 | couvreur gironde |
| `/nettoyage-toiture-bordeaux` | 147 | 5 | 4 619 | 19,1 | démoussage, traitement des toitures (entreprises) bordeaux |
| `/installation-velux-bordeaux` | 72 | **0** | 2 853 | 24,8 | velux bordeaux |
| `/demande-devis` | 62 | **0** | 1 659 | 18,1 | couvreur gironde |
| `/couvreur-arcachon` | 32 | 1 | 1 333 | **11,6** | couvreur arcachon |
| `/couvreur-gironde` | 28 | **0** | 1 049 | **40,8** | couvreur gironde |
| `/urgence-fuite-toiture-bordeaux` | 37 | 2 | 969 | 14,4 | urgence-fuite toiture dans la gironde |
| `/couvreur-talence` | 24 | 1 | 947 | 16,8 | couvreur talence |

**La requête principale de la home n'est plus le nom de domaine d'un concurrent** — c'était le cas le 5 septembre. C'est maintenant « couvreur gironde ». Le bruit machine a disparu.

### 3.7b Intentions → [`intentions.csv`](intentions.csv)

Règles appliquées dans l'ordre : marque (`couverture gironde`, `couverturegironde`, `liroy`, `delsuc`) → transactionnelle → locale → informationnelle.

| Intention | Requêtes | Clics | Part clics | Impressions | Part imp |
|---|---|---|---|---|---|
| **Locale** | 185 | **7** | **63,6 %** | 5 847 | 65,4 % |
| Transactionnelle | 138 | 2 | 18,2 % | 2 039 | 22,8 % |
| **Marque** | 4 | 1 | **9,1 %** | 120 | 1,3 % |
| Non classée | 139 | 1 | 9,1 % | 936 | 10,5 % |

**La part de clics marque passe de 42,9 % à 9,1 %.** C'est le changement le plus significatif de cet audit : le site ne vit plus de gens qui le cherchent déjà par son nom, il capte de la demande locale nouvelle.

⚠️ **Cette conclusion repose sur 11 clics attribués.** Elle est directionnellement cohérente avec la progression de position, mais elle n'est pas robuste. À reconfirmer au prochain audit.

Clics hors marque :

| Requête | Clics | Imp | Pos | CTR |
|---|---|---|---|---|
| couvreur bordeaux | 2 | 590 | 26,6 | 0,3 % |
| couvreur begles | 1 | 11 | 13,1 | 9,1 % |
| couvreur en urgence | 1 | 3 | 5,3 | 33,3 % |
| couvreur mérignac | 1 | 237 | 18,9 | 0,4 % |
| demoussage toiture bordeaux | 1 | 42 | 10,5 | 2,4 % |
| fuite toiture bordeaux | 1 | 51 | 4,8 | 2,0 % |
| nettoyage toiture bordeaux | 1 | 230 | 16,5 | 0,4 % |
| nettoyage toiture pas cher | 1 | 47 | 6,5 | 2,1 % |

**Quand le site est réellement bien placé sur une requête humaine, il est cliqué normalement** : 9,1 %, 33,3 %, 2,4 %, 2,0 %, 2,1 %. Le CTR n'est pas le problème — le rang l'est.

### 3.8 Pages mortes → [`pages_mortes.csv`](pages_mortes.csv)

**21 pages ≥ 100 impressions et 0 clic sur 90 jours** (identique au 05/09). Les 8 premières :

| Page | Imp | Pos | Verdict |
|---|---|---|---|
| `/installation-velux-bordeaux` | **2 853** | 24,8 | **Améliorer** — 1ʳᵉ page stérile du site |
| `/demande-devis` | 1 659 | 18,1 | **Dé-optimiser** |
| `/couvreur-gironde` | 1 049 | **40,8** | **Trancher** — rediriger ou refondre |
| `/couvreur-eysines` | 869 | 15,2 | Améliorer |
| `/traitement-hydrofuge-toiture-bordeaux` | 848 | 15,1 | Améliorer |
| `/charpente-bordeaux` | 762 | 22,4 | Améliorer |
| `/reparation-toiture-bordeaux` | 760 | 26,6 | Améliorer |
| `/contact` | 665 | **51,7** | **Dé-optimiser** |

**26 URLs du sitemap sur 76 font zéro impression sur 90 jours** (22/77 au 05/09) :
les **3 guides** (nouveauté — ils faisaient encore quelques impressions en septembre), les 3 pages quartier Bordeaux (`-centre`, `-chartrons`, `-lac`), `/couvreur-gradignan`, les 3 pages légales (normal) et **16 réalisations sur 28**.

**11 pages à position moyenne > 30** : `/couvreur-gironde` (40,8), `/contact` (51,7), `/couvreur-bordeaux` (34,7), `/urgence` (32,4), `/demoussage-toiture-bordeaux` (31,7 — résiduel, redirigé), `/couverture-bordeaux` (40,6 — résiduel, redirigé), `/couvreur-villenave-dornon` (35,9), `/reparation-toiture-talence` (30,7), `/realisations` (53,8), `/reparation-toiture-apres-incendie-gironde` (41,1).

### 3.9 Mobile vs desktop

| Device | Clics | Impressions | Part | CTR | Position |
|---|---|---|---|---|---|
| **DESKTOP** | 21 | 22 259 | **71,1 %** | 0,09 % | 20,3 |
| **MOBILE** | 19 | 8 830 | 28,2 % | **0,22 %** | **14,2** |
| TABLET | 0 | 210 | 0,7 % | 0,00 % | 7,0 |

**La part desktop monte encore : 66,5 % → 71,1 %.** Sur un site de couvreur local, c'est anormal — un particulier cherche un couvreur sur mobile. Le desktop rank 6 rangs plus profond et convertit 2,4 fois moins.

Écarts de position mobile − desktop (mobile mieux placé) : `/faitage-toiture-bordeaux` **−23,3** · `/` **−14,8** (p11,6 mobile vs p26,4 desktop) · `/installation-velux-bordeaux` −2,3.
**Aucun écart supérieur à +2 rangs en défaveur du mobile → aucun signal technique mobile à investiguer.**

### 3.10 Pollution géographique

| Pays | Clics | Impressions | Part |
|---|---|---|---|
| **fra** | 40 | 27 297 | **87,2 %** |
| ind | 0 | 306 | 1,0 % |
| bra | 0 | 295 | 0,9 % |
| usa | 0 | 246 | 0,8 % |

**Part hors France : 12,8 %** — sous le seuil de 25 %. **Rien à signaler**, aucun recalcul filtré nécessaire.

### 3.11 Saisonnalité

486 jours d'historique → mesurable.

Impressions hebdomadaires 2026 : `S30 5104 · S31 4498 · S32 3943 · S33 3362 · S34 3927 · S35 4165 · S36 3907 · S37 3562 · S38 2691`
Mêmes semaines 2025 : `S30 1484 · S31 1363 · S32 1316 · S33 1344 · S34 2780 · S35 2251 · S36 2198 · S37 1510 · S38 993`

**Le reflux de fin septembre est confirmé sur les deux années.** En 2025 : pic S34 (2 780) puis chute à S38 (993), soit −64 %. En 2026 : pic S30 (5 104) puis S38 (2 691), soit −47 %. La baisse d'impressions de ce mois-ci **est saisonnière**, et le site amortit mieux le reflux que l'an dernier.

**Fenêtres récurrentes** : reprise dès S06-S09 (février-mars), pic d'été S30-S36.
**Dates de publication cible (8 semaines avant)** : **début janvier** pour le pic de printemps, **fin mai** pour le pic d'été.

### 3.12 Apparences → [`appearance.csv`](../data/appearance.csv)

| Apparence | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| PRODUCT_SNIPPETS | 6 | 1 512 | 0,40 % | 13,6 |

Une seule apparence enrichie active, inchangée. Son CTR (0,40 %) reste **3,3× supérieur au CTR global du site** (0,12 %). Aucune apparence perdue → **pas de balisage cassé**.

### 3.13 Recherche Images — analyse inédite

**Jamais mesurée dans les audits précédents.** Sur 90 jours, type `image` : **9 clics / 5 859 impressions**. C'est **5,6 % des clics du site** (9 sur 160).

| Page | Clics | Imp | Position |
|---|---|---|---|
| `/faitage-toiture-bordeaux` | 0 | **2 314** | 37,1 |
| `/realisations/creation-solin-zinc-jonction-mur-bordeaux-2024` | 1 | 516 | 54,2 |
| `/realisations/creation-entablement-cheneau-zinc-bordeaux-2024` | 2 | 368 | 33,4 |
| `/zinguerie-bordeaux` | 1 | 331 | 40,2 |
| `/traitement-hydrofuge-toiture-bordeaux` | 1 | 289 | 39,3 |

Types `video` et `discover` : **0 impression**, rien à signaler.

Les photos de chantier réelles produisent des clics là où les pages ne produisent rien. C'est le seul gisement neuf de cet audit — d'où l'action 2.

---

## 4bis. IA générative — AI Overviews et AI Mode → [`ia_generative.csv`](ia_generative.csv)

Source : export manuel de l'interface Search Console (aucune API, aucun export BigQuery ne fournit ces données).
Périmètre déclaré par l'export : **Type de recherche Web · 28 derniers jours (2026-08-28 → 2026-09-24)**.
**L'export ne contient que des impressions** : ni clics, ni CTR, ni requêtes, ni position. Rien de ce qui suit ne peut être converti en trafic.

| | Valeur |
|---|---|
| Impressions IA (28 j) | **418** |
| Impressions web (28 j) | 14 809 |
| **Part IA** | **2,8 % des impressions du site** |
| Moyenne journalière | 14,5 (min 3, max 28) — aucune tendance |
| Appareils | Ordinateur 212 (52 %) · Mobile 189 (46 %) · Tablette 6 (1 %) |
| France | 363 / 418 = **87 %** |

### L'hypothèse principale du diagnostic est réfutée

Depuis deux audits, j'avançais que les AI Overviews étaient l'explication n°1 des impressions en top-5 sans clic. **C'est faux.**

Le site totalise **418 impressions IA** toutes positions et toutes pages confondues, quand il faut expliquer **1 351 impressions en position 1, 3, 4 et 5 pour 1 clic**. L'ordre de grandeur ne colle pas. Même en supposant un CTR nul sur 100 % des apparitions IA, il resterait l'essentiel de l'anomalie.

**Ce qui reste comme explication la plus probable : le pack local.** Sur les requêtes « couvreur + ville », les trois fiches Google et la carte occupent le haut de la page ; une position organique 4 ou 5 se trouve physiquement sous le pli. C'est cohérent avec tout le reste du dossier — et cela explique pourquoi la fiche Google pèse davantage que le site sur ce marché. **Cette hypothèse n'est pas vérifiée** : elle demande des SERP géolocalisées, hors de portée sans API.

### Pages les plus exposées

| Page | Imp. IA | Imp. web | Clics web | Pos. web | Part IA |
|---|---|---|---|---|---|
| `/faitage-toiture-bordeaux` | **110** | 1 312 | 2 | 10,4 | **8,4 %** |
| `/zinguerie-bordeaux` | 41 | 627 | 2 | 17,7 | 6,5 % |
| `/realisations/creation-solin-zinc-jonction-mur-bordeaux-2024` | 29 | 110 | 3 | 6,9 | **26,4 %** |
| `/urgence-fuite-toiture-bordeaux` | 26 | 478 | 5 | 13,1 | 5,4 % |
| `/tarifs` | 24 | 239 | 3 | 14,9 | 10,0 % |
| `/nettoyage-toiture-bordeaux` | 22 | 1 477 | 2 | 17,5 | 1,5 % |
| `/toiture-neuve-bordeaux` | 20 | 431 | 1 | 15,3 | 4,6 % |
| `/` | 14 | 2 924 | 12 | 22,0 | 0,5 % |

**`/faitage-toiture-bordeaux` concentre 26 % de toutes les impressions IA du site.** C'est aussi la page repérée en §3.5 comme la seule anomalie de CTR : +642 impressions, +1,4 rang de position, et **−2 clics**.

L'IA contribue — 110 de ses 1 312 impressions — mais ne suffit pas : il reste 1 202 impressions classiques à position 10,4 pour 2 clics, soit 0,17 %. **Le compte n'y est toujours pas.**

À noter : c'est également la page n°1 en recherche Images (2 314 impressions, §3.13). Une même page domine trois canaux sans produire de clic dans aucun.

### Ce qu'on en fait

**Rien pour l'instant.** À 2,8 % des impressions et sans aucune donnée de clic, il n'y a pas de levier actionnable ni de mesure de perte possible. Aucune technique d'« optimisation GEO » n'a d'effet causal établi, et `llms.txt` n'est pas une piste — Google indique explicitement qu'aucun fichier de ce type n'est nécessaire.

La seule chose à faire est de **refaire cet export à chaque audit** et de surveiller la part IA. Si elle passe de 2,8 % à 15-20 %, la question deviendra sérieuse. Aujourd'hui elle ne l'est pas.

---

## 5. Indexation → [`indexation.csv`](indexation.csv)

**60 URLs inspectées** (top pages par impressions + pages de §3.8 + sitemap).

| État | Nombre |
|---|---|
| Submitted and indexed | **58** |
| Page with redirect | 1 — `/demoussage-toiture-bordeaux` → `/nettoyage-toiture-bordeaux`, **conforme à la fusion voulue** |
| URL is unknown to Google | 1 — `/realisations/creation-solin-jonction-mur-bordeaux-2024`, **artefact d'analyse** : cette URL renvoie 404 et n'est pas dans le sitemap (colonne décalée par une virgule dans une requête). À ignorer. |

- **Divergences canonique déclarée ≠ canonique retenue : 0.** Le contrôle le plus rentable de l'audit ne remonte rien pour le deuxième audit consécutif.
- `robotsTxtState` ALLOWED, `pageFetchState` SUCCESSFUL, crawl `MOBILE` sur les 58.
- **Toutes les pages réelles inspectées sont indexées.** L'indexation n'explique rien.

**Crawls les plus anciens** : `/realisations/renovation-faitage-bordeaux-centre-2024` (2026-06-10), `/charpente-bordeaux` (2026-06-22), puis 4 pages au 2026-07-03. Ces pages ne sont plus visitées depuis 3 mois.

**Sitemap** : `sitemap.xml` — dernier téléchargement **2026-09-18**, **0 warning, 0 erreur**, **76 URLs soumises**. *(Le champ `indexed=0` de l'API Sitemaps n'est pas fiable, l'inspection URL par URL fait foi.)*

---

## 6. Vérification des cibles du 5 septembre → [`verdict_cibles.csv`](verdict_cibles.csv)

Mesuré contre les critères fixés le 05/09, **jamais réécrits après coup**. Date de contrôle prévue : 03/10 — **6 jours d'avance**, à considérer comme une mesure intermédiaire.

| Requête | Départ | Aujourd'hui | Δ | Critère | Verdict |
|---|---|---|---|---|---|
| couvreur bordeaux | 32,9 | **26,6** | **−6,3** | < 25 | ÉCHOUÉ (de 1,6) |
| couvreur mérignac | 21,5 | **18,9** | **−2,6** | < 18 | ÉCHOUÉ (de 0,9) |
| nettoyage de toiture bordeaux | 14,8 | **12,1** | **−2,7** | < 12 | ÉCHOUÉ (de 0,1) |
| couvreur gironde | 24,0 | 26,5 | +2,5 | < 15 | **ÉCHOUÉ** |
| velux bordeaux | 11,8 | 12,5 | +0,7 | < 10 | ÉCHOUÉ |
| installateur velux bordeaux | 14,1 | 14,8 | +0,7 | < 12 | ÉCHOUÉ |
| démoussage toiture bordeaux | 13,9 | 14,2 | +0,3 | < 10 | ÉCHOUÉ |
| **couverture gironde** (témoin) | 2,3 | **2,6** | +0,3 | pos ≤ 4 | **POSITION OK** |
| devis toiture bordeaux | 5,7 | 5,4 | −0,3 | qualitatif | NON CONCLUANT |

**0 réussite, 7 échecs, 2 non concluantes.** Trois cibles échouent de moins de 2 rangs.

**Ce que je dois corriger dans ma propre méthode** : les critères fixés le 5 septembre étaient trop ambitieux pour l'horizon retenu. Passer de 32,9 à moins de 25 en 19 jours supposait un effet plus rapide que ce que la re-évaluation Google permet. La mesure honnête n'est pas le tableau ci-dessus mais le **panier constant autour du déploiement** :

| | 20/08 → 07/09 | 09/09 → 24/09 |
|---|---|---|
| Position pondérée (256 requêtes) | 21,8 | **19,0** (−2,7) |
| **La home** | pos 24,9 · 1 803 imp · 7 clics | **pos 19,9** · 1 583 imp · **8 clics** |

**Le correctif fonctionne.** Il n'a simplement pas encore atteint les seuils que je m'étais fixés.

**Le témoin de rollback n'est pas déclenché** : la marque tient à position 2,6 (critère ≤ 4). Le volet « ≥ 4 clics » du critère est inutilisable — la marque faisait déjà 3 clics avant le changement, à 54 impressions par mois la différence entre 1, 3 et 6 clics est du bruit. **Ce critère est retiré.**

---

## 7. Annexe — méthodes

| Métrique | Formule |
|---|---|
| Part anonymisée | `1 − (Σ clics des lignes query) / (clics totaux sans dimension)` |
| Seuil impressions | `max(30, percentile_60(impressions des requêtes 28 j))` = 30 |
| Seuil clics | `max(3, percentile_75(clics des pages 28 j))` = 3 |
| Décomposition Δclics | `Δimpressions × ctr_préc + impressions × Δctr` |
| Régression 90 j | moindres carrés sur la série journalière, 3 derniers jours exclus |
| CTR agrégé par position | `Σ clics / Σ impressions` par bucket, couples requête × page 90 j, hors requêtes contenant le domaine du concurrent |
| ctr_cible (quick wins) | CTR agrégé mesuré à position 2 = **1,80 %** — jamais une courbe de marché |
| Part dominante | `impressions page n°1 / impressions totales de la requête` ; pages retenues ≥ 10 % des impressions |
| Sévérité | CRITIQUE si `part < 0,55` **et** ≥ 2 pages avec clics ; SURVEILLER si `0,55 ≤ part < 0,80` ; sinon BÉNIGNE |
| Position pondérée | `Σ (position × impressions) / Σ impressions` |
| Panier constant | requêtes présentes dans les deux fenêtres, hors bruit concurrent |

**Données brutes** : `gsc-audit/data/` (12 CSV + `totals.json`). **Sorties** : `gsc-audit/out/` (10 CSV).

**Réserve principale** : avec 47 clics sur 28 jours et **76,6 % d'anonymisation**, toute conclusion tirée des clics par requête repose sur **11 observations**. Les analyses par impressions, par position et par page sont solides ; celles par clics ne le sont pas. Ce rapport s'appuie prioritairement sur les premières.

**Prochain contrôle : 2026-10-25** (28 jours), pour laisser la re-évaluation du correctif du 8 septembre se déployer complètement.
