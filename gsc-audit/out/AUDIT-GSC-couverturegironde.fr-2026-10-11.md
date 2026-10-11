# Audit Search Console — couverturegironde.fr
**Propriété** : `sc-domain:couverturegironde.fr` (propriété Domaine)
**Date** : 2026-10-11 · **Audits précédents** : 2026-10-04, 2026-09-27, 2026-09-05
**Fenêtres** : 28 j = 2026-09-10 → 2026-10-08 · précédents = 2026-08-13 → 2026-09-10 · n-1 = 2025-09-10 → 2025-10-08 · 90 j = 2026-07-10 → 2026-10-08

> ⚠️ **Quatrième audit en 5 semaines, le troisième à 7 jours d'intervalle.** Les fenêtres de 28 jours se recouvrent à **75 %**. J'avais recommandé la cadence mensuelle au précédent rapport ; je la re-recommande. Ce document est donc **volontairement court** : il ne détaille que ce qui bouge au-delà du bruit, et dit « rien à signaler » partout ailleurs plutôt que de reproduire 12 sections identiques à celles du 04/10.

---

## 1. Ce que disent les chiffres

1. **Le CTR a bondi de 40 %** : 0,30 % → 0,42 %. C'est le seul mouvement réel de la semaine, et il est net.
2. **Les clics progressent (+2,1 %) alors que les impressions chutent de 27 %.** Décomposition du Δclics (+1) : effet impressions **−12,9**, effet CTR **+13,9**. Le CTR compense à lui seul l'effondrement saisonnier du volume.
3. **La home double ses clics : 9 → 18.** Elle porte à elle seule +9 des clics du site.
4. **Sur un an, l'écart se creuse** : +104 % de clics, +143 % d'impressions, **−5,8 rangs** de position moyenne.
5. **Deux fausses alertes évitées** : les « pertes » de `/nettoyage-toiture-bordeaux` et `/faitage-toiture-bordeaux` sont des effets de composition et du bruit (§5). Rien à corriger.

---

## 2. Fiabilité

| Contrôle | Valeur | 04/10 |
|---|---|---|
| Part anonymisée — clics | **69,4 %** (15 attribués sur 49) | 78,6 % |
| Part anonymisée — impressions | 40,3 % | 41,0 % |
| Historique | 486 j (2025-06-10 → 2026-10-08) | — |
| Volumétrie 28 j | 445 requêtes, 57 pages, 49 clics | 438 / 60 / 42 |
| Seuils | imp ≥ **30** · clics ≥ **3** | idem |

**L'anonymisation redescend sous 70 % pour la première fois depuis le 5 septembre.** L'analyse par requête reste fragile (15 observations) mais elle l'est moins qu'au dernier audit.

**Non mesuré** : volet IA générative (export manuel non refait depuis le 27/09 — dernière mesure 418 imp / 2,8 %) · volumes de recherche · concurrence SERP et pack local, qui reste **l'hypothèse explicative n°1 non vérifiée**.

---

## 3. Les actions

**Aucune action nouvelle.** Les trois actions site du 04/10 sont inchangées et toujours valides :

| # | Action | Preuve chiffrée | Effort |
|---|---|---|---|
| 1 | `noindex` + retrait du sitemap des 4 pages jamais crawlées | `/couvreur-gradignan`, `/couvreur-bordeaux-centre`, `-chartrons`, `-lac` : aucun `lastCrawlTime`, 0 impression en 90 j | S |
| 2 | Trancher `/couvreur-gironde` | **1 062 imp / 0 clic / position 44,6** ; cannibalise la home sur « couvreur gironde » (home p10,9 contre page p44,6, 2 351 imp) — **inchangé depuis 5 audits** | M |
| 3 | Dé-optimiser `/contact` | 324 imp / 0 clic / **position 56,4** sur « couvreur gironde » seule | S |

Et deux actions hors site, inchangées :

| # | Action | Statut |
|---|---|---|
| 4 | Publier l'app GCP (OAuth « Testing » → « Production ») | Le token a tenu cette semaine — premier audit sans re-validation depuis le 05/09 |
| 5 | Refaire l'export IA générative | Non fait depuis le 27/09 |

**Ne rien changer d'autre.** Le correctif du 8 septembre produit toujours : la home gagne 9 clics cette semaine. Toute modification maintenant brouillerait une mesure en cours.

---

## 4. Détail — ce qui a bougé

### 4.1 Santé et tendance

| Période | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| **28 j** | **49** | 11 737 | **0,42 %** | 17,8 |
| 28 j précédents | 48 | 16 068 | 0,30 % | 18,7 |
| 28 j n-1 | 24 | 4 834 | 0,50 % | 23,6 |
| 90 j | 158 | 46 261 | 0,34 % | 17,6 |

- **vs précédent** : clics **+2,1 %**, impressions **−27,0 %**, position −0,9
- **vs n-1** : clics **+104,2 %**, impressions **+142,8 %**, position **−5,8**
- **Décomposition du Δclics (+1)** : effet impressions **−12,9** · effet CTR **+13,9**

**Signature** : impressions en forte baisse, position stable, CTR en forte hausse. Le site convertit mieux une demande plus faible. C'est le meilleur profil possible en période de reflux.

| Régression 90 j | Pente | R² | 04/10 | 27/09 | 05/09 |
|---|---|---|---|---|---|
| **position** | **+0,05/j** | **0,20** | +0,07 · 0,27 | +0,09 · 0,38 | +0,15 · **0,79** |

Quatrième affaiblissement consécutif. Il n'y a plus de tendance de position exploitable sur cette propriété.

**Mensuel** : `2026-07 58/16072 · 08 58/16891 · 09 42/13631 · 10 21/3347 (partiel)`

### 4.2 La home — le mouvement de la semaine

| | 13/08 → 10/09 | 10/09 → 08/10 |
|---|---|---|
| Clics | 9 | **18** |
| Impressions | 2 905 | 2 558 |
| Position | 24,3 | 22,8 |
| Effet CTR sur le Δ | — | **+10,4** |

Détail des clics attribués à la page :

| Requête | Avant | Après |
|---|---|---|
| couverture gironde | 3 clics · p2,7 | **4 clics** · p2,5 |
| couvreur bordeaux | 1 clic · **p35,2** | **2 clics** · **p25,4** |
| couvreur merignac | 1 clic · p8,3 | 1 clic · p7,4 |
| couvreur mérignac | — | **1 clic** · p14,8 |
| **Total attribué** | **6** | **8** |
| **Total réel de la page** | **9** | **18** |

**10 des 18 clics sont anonymisés**, contre 3 avant. Les clics sont réels — les totaux par page sont exacts — mais **on ne peut pas dire sur quelles requêtes ils sont arrivés**. Le seul gain attribuable et explicable est « couvreur bordeaux », qui passe de la position 35,2 à 25,4 et double ses clics.

### 4.3 Courbe de CTR

| Position | Impressions | Clics | CTR | 04/10 |
|---|---|---|---|---|
| 1 | 212 | 0 | 0,00 % | 0,00 % |
| **2** | 904 | 14 | **1,55 %** | 1,71 % |
| 3 | 389 | 0 | 0,00 % | 0,00 % |
| 4-5 | 407 | **2** | **0,49 %** | 0,15 % |
| **6-10** | 4 331 | 10 | **0,23 %** | 0,16 % |
| 11-20 | 9 607 | 9 | 0,09 % | 0,08 % |
| 21-50 | 12 770 | 6 | 0,05 % | 0,04 % |
| **Total** | **32 820** | **41** | 0,12 % | 0,12 % |

**L'anomalie centrale s'allège un peu** : les positions 1, 3, 4-5 passent de 1 368 impressions / 1 clic à **1 086 impressions / 2 clics**. C'est mieux, mais reste très loin de ce qu'on attendrait (≈22 clics à 2 % de CTR). **Le pack local demeure l'explication la plus probable, et elle reste non testée.**

Le CTR à position 6-10 progresse nettement : 0,16 % → **0,23 %**.

### 4.4 Quick wins → [`quick_wins.csv`](quick_wins.csv)

21 requêtes qualifiées, **plafond du top 10 : 10,0 clics / 28 j** (méthode `impressions × (1,55 % − ctr_actuel)`).

`/couvreur-arcachon` concentre **4 des 10 premières lignes** — zinguerie bassin arcachon (94 imp, p6,7), couvreur arcachon (76 imp, p14,6), couverture arcachon (71 imp, p11,5), zinguerie arcachon (60 imp, p7,5). **Décision de zone toujours en attente : Arcachon est à 60 km de l'atelier.**

### 4.5 Cannibalisation → [`cannibalisation.csv`](cannibalisation.csv)

**64 requêtes multi-pages — 0 critique, 56 à surveiller, 8 bénignes.** (04/10 : 0 / 56 / 10.) Aucun changement de nature.

Le cas qui ne bouge pas depuis cinq audits :

| Requête | Imp 90 j | Part dom. | Pages |
|---|---|---|---|
| **couvreur gironde** | **2 351** | **0,51** | `/` (1 206 i, **p10,9**) · `/couvreur-gironde` (467 i, **p44,6**) · `/demande-devis` (354 i, p23,8) · `/contact` (324 i, **p56,4**) |

### 4.6 Pages

**Gains** :

| Page | Clics | Préc. | Δ | Pos | Pos préc. |
|---|---|---|---|---|---|
| **`/`** | **18** | 9 | **+9** | 22,8 | 24,3 |
| `/ornements-toiture-bordeaux` | 6 | 3 | +3 | **8,6** | 10,6 |
| `/couvreur-begles` | 2 | 0 | +2 | 14,6 | 18,5 |

**Pertes apparentes** : `/nettoyage-toiture-bordeaux` (5 → 0), `/urgence-fuite-toiture-bordeaux` (5 → 2), `/faitage-toiture-bordeaux` (4 → 2). **Les trois sont écartées en §5.**

### 4.7 Requêtes gagnées / perdues

- **Perdues : 3** — « démoussage, traitement des toitures (entreprises) bordeaux » (749 imp, **0 clic**), « installateur velux agréé » (129 imp, p44,6, 0 clic), « gouttieres leognan » (41 imp, p27,2, 0 clic). Aucune ne produisait de clic.
- **Gagnées : 0.**

### 4.8 Intentions

| Intention | Requêtes | Clics | Part clics |
|---|---|---|---|
| Locale | 183 | 7 | 46,7 % |
| **Marque** | 4 | **4** | **26,7 %** |
| Transactionnelle | 134 | 3 | 20,0 % |

La part marque remonte de 11,1 % à 26,7 %. **Ce n'est pas un signal** : elle repose sur 4 clics sur « couverture gironde » contre 1 la semaine précédente. À ce volume, l'indicateur oscille d'un audit à l'autre sans rien dire. Sur les trois derniers audits : 9,1 % → 11,1 % → 26,7 %, pour 1, 1 et 4 clics.

### 4.9 Les analyses sans mouvement

- **Pages mortes** : 22 pages ≥100 imp / 0 clic (identique), 13 pages à position > 30 (contre 11). **Rien à signaler.**
- **Mobile vs desktop** : desktop 72,2 % des impressions (CTR 0,11 %, pos 22,2), mobile 27,3 % (CTR 0,21 %, pos 15,2). Stable depuis trois audits. **Rien à signaler.**
- **Pollution géographique** : hors France 13,9 %, sous le seuil de 25 %. **Rien à signaler.**
- **Apparences** : PRODUCT_SNIPPETS seule, 6 clics / 1 589 impressions / CTR 0,38 %. Inchangée depuis quatre audits, aucune apparence perdue. **Rien à signaler.**
- **Saisonnalité** : le reflux d'automne se poursuit comme prévu et comme en 2025. Aucune lecture nouvelle à 7 jours d'intervalle. **Rien à signaler.**
- **Recherche Images** : 8 clics / 6 609 impressions sur 90 j. Stable.
- **Anomalies de CTR** : la médiane du site est nulle à la plupart des positions, le calcul n'a pas de base. **Rien à signaler.**

---

## 5. Deux fausses alertes écartées avant publication

Application de la leçon du 04/10 : tester au niveau requête avant d'annoncer un signal.

### `/nettoyage-toiture-bordeaux` : 5 → 0 clics, position 15,3 → 21,3

**Effet de composition, pas une perte.** La requête principale **progresse** :

| Requête | Avant | Après |
|---|---|---|
| **nettoyage toiture bordeaux** | p13,4 · 183 imp | **p11,5 · 201 imp** |
| prix nettoyage toiture hydrofuge bordeaux | p1,9 · 12 imp | **p1,2 · 37 imp** |
| entreprise demoussage toiture | p23,8 · 11 imp | p33,2 · **57 imp** |
| entreprise nettoyage toiture | p37,6 · 84 imp | p52,9 · 73 imp |

La position agrégée se dégrade parce que des requêtes profondes gagnent du poids en impressions, pas parce que la page recule. Côté clics : 3 attribués avant → 0, sur 1 200 impressions à position 11-20 où le CTR mesuré du site est de 0,09 %, soit **~1 clic attendu**. Zéro est banal.

### `/faitage-toiture-bordeaux` : 4 → 2 clics

Déjà réfuté au précédent audit. 811 impressions à position 9,1, CTR du site à cette position 0,23 % → **~1,9 clic attendu**. Observer 2 clics est exactement la médiane. **Il n'y a rien.**

---

## 6. Indexation → [`indexation.csv`](indexation.csv)

**Top 50 par impressions inspecté** (échantillon aligné sur celui du 27/09, pas sur celui du 04/10 — cf. la mise en garde de ce rapport).

| État | Nombre |
|---|---|
| Submitted and indexed | **49** |
| Page with redirect | 1 — `/demoussage-toiture-bordeaux`, conforme à la fusion voulue |

- **Divergences canonique déclarée ≠ canonique retenue : 0.** Quatrième audit consécutif.
- **Sitemap** : téléchargé le **2026-10-07**, 0 warning, 0 erreur, 76 URLs soumises.

**Fraîcheur de crawl** : seulement **6 pages sur 50 ont été recrawlées depuis le 1er octobre**, et **9 pages n'ont pas été visitées depuis août** :

| Page | Dernier crawl |
|---|---|
| `/realisations/renovation-faitage-bordeaux-centre-2024` | 2026-06-10 |
| `/charpente-bordeaux` | 2026-06-22 |
| `/reparation-toiture-pessac` · `-merignac` · `-talence` · `/capotage-toiture-bordeaux` | 2026-07-03 |
| 3 réalisations | 2026-07-11 / 07-12 |

**C'est le seul indicateur technique qui se dégrade** : Googlebot espace ses passages sur des pages indexées et actives. Sur un site de 76 URLs, c'est un signal de budget de crawl contraint — cohérent avec les 25 URLs du sitemap qui ne produisent aucune impression, et avec l'action n°1 (sortir les pages jamais crawlées du sitemap).

---

## 7. Annexe

| Métrique | Formule |
|---|---|
| Part anonymisée | `1 − (Σ clics des lignes query) / (clics totaux sans dimension)` |
| Seuils | `max(30, p60(impressions))` · `max(3, p75(clics pages))` |
| Décomposition Δclics | `Δimpressions × ctr_préc + impressions × Δctr` |
| Régression 90 j | moindres carrés, 3 derniers jours exclus |
| CTR agrégé par position | `Σ clics / Σ impressions` par bucket, couples requête × page 90 j, hors requêtes contenant le domaine du concurrent |
| ctr_cible | CTR agrégé mesuré à position 2 = **1,55 %** |
| Part dominante | `impressions page n°1 / impressions totales` ; pages retenues ≥ 10 % des impressions |

**Réserve** : 49 clics sur 28 jours, 69,4 % d'anonymisation, **15 clics attribués**. Les analyses par impressions, position et page sont solides ; celles par clics ne le sont pas.

**Prochain audit : 2026-11-08** — cadence mensuelle. Un audit à 7 jours sur cette propriété ne produit pas d'information nouvelle, comme le montre la section 4.9 : sept analyses sur douze n'ont rien à signaler.
