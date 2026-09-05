# Audit Search Console — couverturegironde.fr
**Propriété analysée** : `sc-domain:couverturegironde.fr` (propriété Domaine)
**Date de l'audit** : 2026-09-05
**Fenêtres** : 28 j = 2026-08-05 → 2026-09-02 · 28 j précédents = 2026-07-08 → 2026-08-05 · n-1 = 2025-08-05 → 2025-09-02 · 90 j = 2026-06-04 → 2026-09-02 · historique = 2025-05-05 → 2026-09-02

---

## 1. Ce que disent les chiffres

1. **Le trafic n'est pas un problème de classement, c'est un problème de clic.** Sur 90 jours, les positions 1 à 5 ont généré **6 877 impressions pour 19 clics**, et ces 19 clics viennent tous d'une seule requête (« couverture gironde »). **6 681 impressions en top-5 ont produit zéro clic.**
2. **Une part majeure des impressions n'est pas humaine.** Les requêtes contenant le domaine d'un concurrent (`gironde-toiture-service.fr …`) totalisent **9 114 impressions et 0 clic sur 16 mois**, jusqu'à **26 % de toutes les impressions du site en juin 2026**. La croissance d'impressions ×2 sur un an est donc en partie fictive.
3. **Le seul canal qui progresse réellement, c'est le mobile** : 8 clics en août 2025 → **32 clics en août 2026** (×4), à impressions quasi constantes (5 104 → 5 723, +12 %). Le desktop, lui, est passé de 3 057 à 11 083 impressions (+263 %) pour 11 → 26 clics : **66 % des impressions, CTR 0,09 %, position moyenne 18,6**.
4. **La baisse des clics sur 28 j (58 → 47, −19 %) est intégralement un effet CTR**, pas un effet volume : décomposition = −0,6 clic imputable aux impressions, **−10,4 clics imputables au CTR**. Les impressions sont stables (−1,1 %).
5. **L'indexation est saine et n'explique rien** : 56 URLs sur 57 inspectées sont « Submitted and indexed », **zéro divergence de canonique**, sitemap sans erreur téléchargé le 2026-08-29.

---

## 2. Fiabilité de l'analyse

| Contrôle | Valeur | Conséquence |
|---|---|---|
| Part anonymisée — clics | **70,2 %** (14 clics attribués sur 47) | ⚠️ **Au-delà du seuil de 60 %.** L'analyse par requête porte sur moins d'un tiers des clics. Le poids du diagnostic bascule sur l'analyse par page. |
| Part anonymisée — impressions | 30,4 % (11 107 / 15 962) | Acceptable pour l'analyse d'impressions |
| Historique disponible | 486 jours (2025-05-05 → 2026-09-02) | > 13 mois → comparaison n-1 et saisonnalité valides |
| Volumétrie 28 j | 545 requêtes, 57 pages, 47 clics | Site à très faible volume : seuils bas, bruit statistique élevé |
| Seuil impressions (p60 requêtes) | **≥ 30** | Utilisé en 3.2 / 3.3 / 3.4 / 3.6 |
| Seuil clics (p75 pages) | **≥ 3** | Utilisé en 3.5 |

**Non mesuré / non mesurable :**
- **Courbe de CTR par position** : le CTR **médian** du site est de **0,00 % à toutes les positions de 2 à 20**. Impossible de construire un `ctr_cible` médian. J'ai donc utilisé le **CTR agrégé réel** (§3.3), qui est mesuré, plutôt qu'un CTR de marché qui serait inventé.
- **Anomalies de CTR** (§3.3b) : aucune ligne exploitable — le calcul suppose une médiane non nulle, qui n'existe pas ici. **Rien à signaler sur ce point, faute de base de comparaison.**
- **Volet IA générative** (AI Overviews / AI Mode) : **non mesuré**. Aucune API, aucun export BigQuery. Nécessite un export CSV manuel depuis l'interface GSC → à déposer dans `data/manual/ai_generative.csv`.
- **Volumes de recherche** : la GSC ne les fournit pas. Aucun chiffre de volume n'apparaît dans ce rapport.

---

## 3. Les 10 actions

Le « gain » est un **plafond théorique** calculé sur le CTR agrégé réellement mesuré sur ce site (§3.3), pas sur une courbe de marché. Ce n'est pas une promesse.

| # | Action | Page(s) | Preuve chiffrée | Gain plafond | Effort |
|---|---|---|---|---|---|
| 1 | **Arrêter de piloter sur les impressions et la position moyenne.** Passer le reporting sur : clics mobile + appels GBP. | — | 9 114 impressions concurrent à 0 clic ; 66 % des impressions en desktop à CTR 0,09 % | 0 clic (mais évite de mauvaises décisions) | S |
| 2 | **Fusionner `/demoussage-toiture-bordeaux` → `/nettoyage-toiture-bordeaux` (301).** | 2 pages | « démoussage toiture bordeaux » : 214 imp/p12,8 vs 212 imp/p28,9 — part dominante 0,45. `/demoussage-toiture-bordeaux` = 661 imp / **0 clic** / pos 29 sur 90 j | ~2 clics/28 j | S |
| 3 | **Dé-optimiser `/demande-devis`, `/contact` et `/tarifs`** sur les requêtes service : retirer les mentions service+ville des title/H1/meta. | 3 pages | `/demande-devis` = **1 596 imp / 0 clic** (90 j) et capte « devis toiture bordeaux » en p3,6, « entreprise traitement toiture bordeaux » en p19,8. `/contact` = 553 imp / 0 clic / pos 46,8 | ~3 clics/28 j | M |
| 4 | **Trancher `/couvreur-gironde`** : 786 imp / **0 clic** / **position 40,3**, et il cannibalise la home sur « couvreur gironde » (home 1 555 imp p7,3 vs page 254 imp p51,7). Soit refonte complète, soit 301 vers la home. | 1 page | part dominante 0,66 ; la page ne concourt à rien depuis 90 j | ~1 clic/28 j | M |
| 5 | **Réparer le CTR de `/` sur mobile.** Title/meta + rich snippet. | `/` | Home : 3 188 imp / 11 clics / CTR 0,35 % / **pos 24,2 contre 14,6 le mois précédent** (−9,6 rangs). Écart mobile/desktop : p11,4 mobile vs p29,7 desktop | ~5 clics/28 j | M |
| 6 | **Corriger `/installation-velux-bordeaux`** : 1 422 imp / 1 clic, position dégradée 18,2 → 28,3 en un mois, −80 % de clics. « velux bordeaux » 141 imp p11,8 / 0 clic. | 1 page | 2ᵉ page du site en impressions, 3ᵉ perte de clics | ~4 clics/28 j | M |
| 7 | **Supprimer ou fusionner les 15 réalisations à zéro impression sur 90 j** (sur 28 en ligne). Elles diluent le crawl sans rien produire. | 15 URLs | 22 URLs du sitemap sur 77 ont **0 impression sur 90 j**, dont 15 réalisations | 0 clic direct — gain de budget de crawl | M |
| 8 | **Relancer l'indexation de `/couverture-bordeaux`** : seule URL non indexée (« Crawled – currently not indexed »), **dernier crawl le 2026-04-20** (4,5 mois). Soit on la renforce, soit on la 301. | 1 page | 255 imp / 0 clic / pos 33 sur 90 j | ~0 clic — décision de propreté | S |
| 9 | **Ne rien faire sur les 61 cannibalisations « à surveiller »** hors celles listées en 2/3/4. | — | 0 cannibalisation classée CRITIQUE sur 75 requêtes multi-pages | — | S |
| 10 | **Publier avant fin septembre pour le pic de mars.** Le pic mesuré est S30→S35 (juil.–août, 5 104 imp en S30) et un second départ dès S09 (février). Cible de publication : **8 semaines avant**, soit début janvier pour le pic de mars. | — | 16 mois d'historique hebdomadaire disponibles (§3.11) | — | M |

**Ce qu'aucune de ces 10 actions ne changera** : le site produit **47 clics / 28 jours**, dont 14 seulement attribuables à une requête, dont 6 sur la marque. Même en réussissant les 10 actions au plafond théorique (~15 clics/28 j), on reste sur un ordre de grandeur qui ne fait pas basculer un volume d'affaires. **Le SEO on-page a atteint son plafond sur cette propriété.**

---

## 4. Détail par analyse

### 3.1 Santé globale et tendance → [`daily.csv`](../data/daily.csv)

| Période | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| 28 j | **47** | 15 962 | 0,29 % | 18,8 |
| 28 j précédents | 58 | 16 142 | 0,36 % | 15,7 |
| 28 j n-1 | 18 | 7 865 | 0,23 % | 21,7 |

- **vs période précédente** : clics **−19,0 %**, impressions −1,1 %, position **+3,1 rangs (dégradation)**
- **vs n-1** : clics **+161,1 %**, impressions **+102,9 %**, position −2,9 rangs (amélioration)
- **Décomposition du Δclics (−11)** : effet impressions **−0,6** · effet CTR **−10,4**

**Signature diagnostique** : impressions stables + position en baisse + CTR en baisse. Ce n'est ni une baisse de demande, ni une perte de classement franche : c'est une **dilution** — le site accumule des impressions à des positions de plus en plus profondes.

- **Régression 90 j** : clics **+0,00/j** (R² 0,00 — aucune tendance) · impressions **+1,87/j** (R² 0,09 — bruit) · **position +0,15 rang/j (R² 0,79 — tendance nette et régulière de dégradation)**.
  → Le seul indicateur avec une tendance statistiquement solide sur 90 jours est **la dégradation continue de la position moyenne**.

**Clics / impressions par mois (16 mois)** :
```
2025-05  9/4448   2025-06 32/5979   2025-07 20/6044   2025-08 19/8175
2025-09 25/6323   2025-10 12/4238   2025-11 13/3494   2025-12  5/3385
2026-01 38/3778   2026-02 35/4978   2026-03 22/9726   2026-04 29/9513
2026-05 33/10654  2026-06 46/14113  2026-07 58/16072  2026-08 58/16891
2026-09  2/1334 (mois partiel)
```
Les impressions ont ×5 entre décembre 2025 et août 2026. Les clics sont passés de 5 à 58 — mais **38 clics étaient déjà atteints en janvier 2026 avec 3 778 impressions**. Autrement dit : **janvier faisait autant de clics qu'aujourd'hui avec 4,5 fois moins d'impressions.** Le CTR s'est effondré de 1,01 % à 0,34 %.

### 3.2 Quick wins (position 4-15) → [`quick_wins.csv`](quick_wins.csv)

47 requêtes qualifiées (position 4–15, ≥ 30 impressions). Top 12 :

| Requête | Page | Imp | Pos | Clics |
|---|---|---|---|---|
| démoussage, traitement des toitures (entreprises) bordeaux | /nettoyage-toiture-bordeaux | 749 | 10,1 | 0 |
| nettoyage de toiture bordeaux | /nettoyage-toiture-bordeaux | 143 | 14,8 | 0 |
| velux bordeaux | /installation-velux-bordeaux | 141 | 11,8 | 0 |
| couvreur talence | /couvreur-talence | 132 | 13,1 | 0 |
| couvreur arcachon | /couvreur-arcachon | 121 | 12,6 | 1 |
| couvreur eysines | /couvreur-eysines | 102 | 14,5 | 0 |
| couverture arcachon | /couvreur-arcachon | 90 | 11,2 | 0 |
| démoussage toiture bordeaux | /nettoyage-toiture-bordeaux | 87 | 13,9 | 0 |
| zinguerie arcachon | /couvreur-arcachon | 76 | 8,1 | 0 |
| installateur velux bordeaux | /installation-velux-bordeaux | 72 | 14,1 | 0 |
| zinguerie bassin arcachon | /couvreur-arcachon | 71 | 5,8 | 0 |
| réparation fuite toiture pessac | /reparation-toiture-pessac | 67 | 11,3 | 0 |

**⚠️ Correction méthodologique importante.** Le CSV `quick_wins.csv` a été calculé avec un `ctr_cible` de **5 %**, valeur de repli **non mesurée sur ce site** (le CTR médian étant nul à toutes les positions). Le plafond de 129 clics/28 j qui en découle **n'est pas défendable**.

Recalculé sur le **CTR agrégé réellement observé** (§3.3), la cible réaliste pour une remontée en position 6-10 est **0,18 %** et en position 2 **0,64 %**. Sur les 749 impressions de la meilleure ligne, cela donne **1 à 5 clics/28 j**, pas 37,5. **Les colonnes `ctr_cible` et `clics_potentiels` du CSV sont à ignorer.**

**`/couvreur-arcachon` mérite un traitement à part** : 4 requêtes dans le top 12, 955 impressions sur 90 j, position pondérée 11,8 — la meilleure page du site en potentiel non exploité. Et une intervention à Arcachon est à 60 km de l'atelier de Mérignac : **vérifier que c'est une zone qu'on veut réellement servir avant d'y investir.**

### 3.3 Courbe de CTR → [`ctr_curve.csv`](ctr_curve.csv)

**CTR médian par position : 0,00 % de la position 2 à la position 20.** La courbe médiane est inexploitable — c'est un constat en soi.

**CTR agrégé réel (90 j, couples requête × page)** — la vraie courbe de ce site :

| Position | Impressions | Clics | CTR |
|---|---|---|---|
| 1 | 382 | **0** | 0,00 % |
| 2 | 2 985 | 19 | 0,64 % |
| 3 | 553 | **0** | 0,00 % |
| 4–5 | 2 849 | **0** | 0,00 % |
| 6–10 | 7 217 | 13 | 0,18 % |
| 11–20 | 9 461 | 9 | 0,10 % |
| 21–50 | 10 490 | 1 | 0,01 % |
| **Total** | **36 273** | **43** | **0,12 %** |

**C'est le chiffre central de cet audit.** Les positions 1 à 5 cumulent 6 877 impressions et 19 clics — et **les 19 clics viennent tous de la seule requête « couverture gironde » (194 impressions)**. Les **6 681 impressions restantes en top-5 ont produit 0 clic**.

Si ces impressions correspondaient à des recherches humaines avec un CTR ne serait-ce que de 2 %, la probabilité d'observer zéro clic serait de e⁻¹³⁴ — c'est-à-dire nulle. **La conclusion est donc factuelle, pas interprétative : une grande partie des impressions en top-5 ne correspond pas à des recherches humaines exploitables.**

Décomposition de ces 6 681 impressions :
- **4 445 imp (67 %)** = requêtes contenant `gironde-toiture-service.fr` (le domaine d'un concurrent)
- **2 236 imp (33 %)** = formulations métier non naturelles (« pose couverture gironde », « service couverture gironde », « couverture toit gironde », « fuites mise en eau toiture gironde »…), à ~1 impression/jour chacune

### 3.3b Anomalies de CTR → [`ctr_anomalies.csv`](ctr_anomalies.csv)

**Rien à signaler** : le calcul exige une médiane de référence non nulle, qui n'existe pas sur ce site (§3.3).

### 3.4 Cannibalisation → [`cannibalisation.csv`](cannibalisation.csv)

**75 requêtes servies par ≥ 2 pages** — dont **0 CRITIQUE**, 61 à surveiller, 14 bénignes.

Les 6 cas qui justifient une action (part dominante la plus basse × volume) :

| Requête | Imp 90 j | Part dom. | Pages | Action unique |
|---|---|---|---|---|
| pose couverture gironde | 381 | **0,28** | `/` (108 i, p1,9) · `/couvreur-gironde` (66 i, p37) · `/contact` (64 i, p57) · `/demande-devis` (58 i, p13) | Dé-optimiser `/contact` et `/demande-devis` ; trancher `/couvreur-gironde` |
| devis toiture bordeaux | 350 | **0,26** | `/demande-devis` (91 i, p3,6) · `/tarifs` (79 i, p14) · `/couverture-bordeaux` (68 i, p17) · `/devis-couvreur-gironde` (68 i, p9,9) | 4 pages pour une intention : garder `/devis-couvreur-gironde`, 301 `/couverture-bordeaux` |
| entreprise traitement toiture bordeaux | 255 | **0,29** | `/traitement-hydrofuge…` · `/demande-devis` · `/nettoyage-toiture-bordeaux` · `/traitement-toiture-bordeaux` | Différencier hydrofuge vs traitement ; sortir `/demande-devis` |
| capotage toiture bordeaux | 194 | **0,32** | `/capotage-toiture-bordeaux` (62 i, **p2,5**) · `/` (51 i, p26) · `/reparation-toiture-bordeaux` (49 i, p38) | Maillage interne vers `/capotage-toiture-bordeaux` |
| démoussage toiture bordeaux | 472 | **0,45** | `/nettoyage-toiture-bordeaux` (214 i, p12,8) · `/demoussage-toiture-bordeaux` (212 i, **p28,9**) | **Fusion + 301** (action n°2) |
| couvreur mérignac | 782 | **0,56** | `/` (441 i, p19,4) · `/couvreur-merignac` (294 i, p24,2) | Recâbler le maillage vers `/couvreur-merignac` |

**Le motif dominant est clair** : `/demande-devis` et `/contact` apparaissent dans 6 des 10 requêtes les plus cannibalisées, toujours en position profonde et toujours à 0 clic. Ce sont des pages de conversion qui ne devraient pas concourir sur des requêtes service.

### 3.5 Pages en perte → [`pages_perte.csv`](pages_perte.csv)

| Page | Clics | Préc. | Δ | Imp | Pos | Pos préc. | Effet imp | Effet CTR |
|---|---|---|---|---|---|---|---|---|
| `/` | 11 | 18 | **−7** | 3 188 | **24,2** | 14,6 | −4,8 | −2,2 |
| `/ornements-toiture-bordeaux` | 3 | 7 | −4 | 213 | 10,3 | 8,6 | +8,1 | **−12,1** |
| `/installation-velux-bordeaux` | 1 | 5 | −4 | 1 422 | **28,3** | 18,2 | +0,9 | −4,9 |
| `/realisations/…entablement-cheneau-zinc…` | 1 | 4 | −3 | 159 | 8,6 | 8,8 | −0,5 | −2,5 |
| `/realisations/…capot-zinc-cheminee-pessac…` | 0 | 3 | −3 | 58 | 8,8 | 10,9 | −0,1 | −2,9 |
| `/toiture-neuve-bordeaux` | 0 | 3 | −3 | 364 | 21,2 | 15,7 | +1,0 | −4,0 |

**La home domine la perte** (−7 clics) et c'est le seul cas où l'effet impressions l'emporte : elle a perdu 1 147 impressions **et** 9,6 rangs. Sur les 5 autres, **l'effet CTR domine partout** — les impressions montent, les clics tombent.

**Pages en gain** : `/a-propos` +5 clics (0 → 5, position 7 → 5,4), `/faitage-toiture-bordeaux` +2, `/couvreur-bouscat` +2.
`/a-propos` qui passe de 0 à 5 clics est le meilleur mouvement du mois — signal E-E-A-T, cohérent avec le travail d'entité fait sur le site.

### 3.6 Requêtes gagnées / perdues → [`queries_gagnees_perdues.csv`](queries_gagnees_perdues.csv)

- **Perdues : 0.** Aucune requête au-dessus du seuil n'a disparu. Pas de perte de classement.
- **Gagnées : 2.** « démoussage, traitement des toitures (entreprises) bordeaux » (749 imp, p10,1, 0 clic) et « installateur velux agréé » (88 imp, **p45**, 0 clic).

La première est intéressante : c'est le libellé exact d'une catégorie d'annuaire. 749 impressions en un mois à position 10 sans un clic — cohérent avec le §3.3.

### 3.7 Clusters par page → [`clusters.csv`](clusters.csv)

59 pages avec au moins une impression sur 90 j. Top 10 :

| Page | Requêtes | Clics | Imp | Pos pondérée | Requête principale |
|---|---|---|---|---|---|
| `/` | 225 | 23 | 12 470 | 13,5 | gironde-toiture-service.fr charpente et toiture |
| `/nettoyage-toiture-bordeaux` | 139 | 4 | 4 412 | 18,1 | démoussage, traitement des toitures (entreprises) bordeaux |
| `/installation-velux-bordeaux` | 70 | 1 | 2 702 | 22,7 | velux bordeaux |
| `/demande-devis` | 60 | **0** | 1 596 | 16,8 | gironde-toiture-service.fr charpente et toiture |
| `/reparation-toiture-bordeaux` | 51 | **0** | 1 059 | 22,6 | réparation toiture bordeaux |
| `/urgence-fuite-toiture-bordeaux` | 37 | 2 | 1 006 | 13,6 | urgence-fuite toiture dans la gironde |
| `/couvreur-talence` | 21 | 2 | 987 | 15,0 | couvreur talence |
| `/couvreur-arcachon` | 32 | 1 | 955 | 11,8 | couvreur arcachon |
| `/traitement-hydrofuge-toiture-bordeaux` | 41 | **0** | 842 | 16,5 | entreprise hydrofuge toiture |
| `/couvreur-gironde` | 28 | **0** | 786 | **40,3** | couvreur gironde |

**La requête principale de la home et de `/demande-devis` est le nom de domaine d'un concurrent.** C'est le résumé de la situation en une ligne.

### 3.7b Intentions → [`intentions.csv`](intentions.csv)

Règles appliquées dans l'ordre : marque (`couverture gironde`, `couverturegironde`, `liroy`, `delsuc`) → transactionnelle → locale → informationnelle.

| Intention | Requêtes | Clics | Part clics | Impressions | Part imp |
|---|---|---|---|---|---|
| **Marque** | 4 | 6 | **42,9 %** | 136 | 1,2 % |
| Locale | 201 | 4 | 28,6 % | 6 468 | 58,2 % |
| Transactionnelle | 165 | 3 | 21,4 % | 3 330 | 30,0 % |
| Non classée | 174 | 1 | 7,1 % | 1 169 | 10,5 % |
| Informationnelle | 1 | 0 | 0,0 % | 4 | 0,0 % |

**Part marque : 42,9 % des clics attribués, pour 1,2 % des impressions.** Sur 4 requêtes seulement, dont une seule produit des clics (« couverture gironde », 6 clics, position 2,3, CTR 9,8 %).

C'est **le diagnostic le plus important de ce rapport** : hors marque, le site produit **8 clics attribués en 28 jours**, répartis sur 7 requêtes distinctes qui font toutes 1 ou 2 clics :

| Requête | Intention | Clics | Imp | Pos | CTR |
|---|---|---|---|---|---|
| nettoyage toiture pas cher | transactionnelle | 2 | 29 | 7,0 | 6,9 % |
| couvreur arcachon | locale | 1 | 121 | 12,6 | 0,8 % |
| couvreur cenon | locale | 1 | 22 | 11,0 | 4,5 % |
| couvreur en urgence | transactionnelle | 1 | 5 | 5,0 | 20,0 % |
| couvreur le bouscat | locale | 1 | 32 | 10,7 | 3,1 % |
| couvreur merignac | locale | 1 | 86 | 9,1 | 1,2 % |
| oui, merci. | non classée | 1 | 1 | 4,0 | 100 % |

**Le site ne capte quasiment aucune demande nouvelle.** Il est trouvé par ceux qui le cherchent déjà par son nom.

À noter : sur les 3 requêtes où le site est en position ≤ 7 (« nettoyage toiture pas cher » 6,9 %, « couvreur en urgence » 20 %, « couvreur cenon » 4,5 %), **le CTR est normal**. Quand le site est réellement bien placé sur une requête réellement humaine, il est cliqué. Le problème n'est pas la page — c'est qu'il n'y a que 3 requêtes dans ce cas.

### 3.8 Pages mortes → [`pages_mortes.csv`](pages_mortes.csv)

**21 pages avec ≥ 100 impressions et 0 clic sur 90 jours** :

| Page | Imp | Pos | Verdict |
|---|---|---|---|
| `/demande-devis` | 1 596 | 16,8 | **Dé-optimiser** — page de conversion, ne doit pas ranker sur des requêtes service |
| `/reparation-toiture-bordeaux` | 1 059 | 22,6 | **Améliorer** — page pilier légitime, position trop profonde |
| `/traitement-hydrofuge-toiture-bordeaux` | 842 | 16,5 | **Améliorer** — différencier de `/traitement-toiture-bordeaux` |
| `/couvreur-gironde` | 786 | 40,3 | **Rediriger vers `/`** — position 40 après 90 j, ne concourt à rien |
| `/demoussage-toiture-bordeaux` | 661 | 29,0 | **Fusionner → `/nettoyage-toiture-bordeaux`** |
| `/couvreur-libourne` | 580 | 20,9 | **Améliorer** — Libourne à 40 km, contenu local réel ou abandon |
| `/contact` | 553 | 46,8 | **Dé-optimiser** |
| `/charpente-bordeaux` | 528 | 20,8 | **Améliorer** |
| `/toiture-neuve-bordeaux` | 521 | 18,7 | **Améliorer** |
| `/couvreur-pessac` | 472 | 13,5 | **Améliorer** — meilleure position du lot, la plus proche du seuil |
| `/devis-couvreur-gironde` | 424 | 19,6 | **Garder comme cible devis** (cf. §3.4) |
| `/zinguerie-bordeaux` | 420 | 21,5 | **Fusionner** avec `/zinguerie-gouttieres-bordeaux` (198 imp, p13,6) |
| `/faitage-toiture-bordeaux` | 326 | 21,9 | Améliorer *(a gagné +2 clics sur 28 j — surveiller avant d'agir)* |
| `/couverture-bordeaux` | 255 | 33,0 | **Rediriger** — non indexée (§4) |
| `/zinguerie-gouttieres-bordeaux` | 198 | 13,6 | Cible de la fusion zinguerie |
| `/couvreur-begles` | 168 | 14,7 | Améliorer |
| `/reparation-toiture-pessac` | 168 | 9,6 | **Améliorer en priorité** — position 9,6, la plus proche du top-5 |
| `/couvreur-villenave-dornon` | 149 | 36,3 | **Supprimer ou refondre** |
| `/realisations/pose-toiture-bac-acier-lanton-2024` | 121 | 11,9 | Garder |
| `/realisations/demoussage-toiture-talence-lichens-2026` | 106 | 19,7 | Garder |
| `/reparation-toiture-talence` | 101 | 28,0 | **Fusionner → `/couvreur-talence`** (cannibalise « réparation fissure maison talence ») |

**22 URLs du sitemap sur 77 ont zéro impression sur 90 jours** — Google les connaît mais ne les sert jamais :
`/couvreur-gradignan`, `/couvreur-bordeaux-centre`, `/couvreur-bordeaux-chartrons`, `/couvreur-bordeaux-lac`, les 3 pages légales *(normal)*, et **15 pages `/realisations/`** sur les 28 en ligne.

→ Les pages quartier de Bordeaux (`-centre`, `-chartrons`, `-lac`) sont **mortes à la naissance** : zéro impression malgré l'indexation. Le maillage P1/P2 déployé cet été ne les a pas débloquées.

**12 pages avec une position moyenne > 30** (le contenu ne concourt pas) : `/couvreur-gironde` (40,3), `/contact` (46,8), `/couvreur-bordeaux` (34,4), `/urgence` (31,0), `/couverture-bordeaux` (33,0), `/couvreur-villenave-dornon` (36,3), `/nettoyage-toiture-pessac` (32,7), `/realisations` (53,8), `/reparation-toiture-apres-incendie-gironde` (46,2), `/guides/prix-demoussage-toiture-bordeaux` (43,8), `/guides/aides-renovation-toiture-2026` (35,5).

⚠️ **`/reparation-toiture-apres-incendie-gironde` : 11 impressions, position 46,2 sur 90 jours.** La page mère incendie ne prend pas.

### 3.9 Mobile vs desktop

| Device | Clics | Impressions | Part imp | CTR | Position pondérée |
|---|---|---|---|---|---|
| **DESKTOP** | 19 | 21 544 | **66,5 %** | 0,09 % | 18,6 |
| **MOBILE** | 24 | 10 494 | 32,4 % | **0,23 %** | **11,6** |
| TABLET | 0 | 348 | 1,1 % | 0,00 % | 5,5 |

**Sur un site de couvreur local, 66,5 % d'impressions desktop est anormal.** Un particulier qui cherche un couvreur est sur mobile. Le desktop rank 7 rangs plus profond et convertit 2,5× moins bien.

**Évolution sur 12 mois** — c'est ici que se lit la vraie progression :

| | Août 2025 | Août 2026 | Évolution |
|---|---|---|---|
| Impressions mobile | 5 104 | 5 723 | **+12 %** |
| Clics mobile | 8 | **32** | **+300 %** |
| Impressions desktop | 3 057 | 11 083 | **+263 %** |
| Clics desktop | 11 | 26 | +136 % |

**Toute la croissance d'impressions de l'année est desktop.** Le mobile — le seul canal où se trouvent les clients — est resté plat en visibilité mais a **quadruplé en clics**. C'est la seule bonne nouvelle de cet audit, et elle est réelle.

**Écarts de position mobile − desktop les plus forts** (mobile mieux placé) :
`/faitage-toiture-bordeaux` −27,1 · `/` **−18,3** (p11,4 mobile vs p29,7 desktop) · `/nettoyage-toiture-bordeaux` −11,2 · `/couvreur-eysines` −8,0.
Aucun écart supérieur à +2 rangs en défaveur du mobile → **aucun signal technique mobile à investiguer.**

### 3.10 Pollution géographique

| Pays | Clics | Impressions | Part |
|---|---|---|---|
| **fra** | 42 | 28 976 | **89,5 %** |
| ind | 0 | 260 | 0,8 % |
| usa | 0 | 250 | 0,8 % |
| bra | 0 | 190 | 0,6 % |
| idn | 0 | 183 | 0,6 % |

**Part hors France : 10,5 %** — sous le seuil de 25 %. **Rien à signaler**, aucun re-calcul filtré nécessaire.

### 3.11 Saisonnalité

486 jours d'historique → **mesurable**.

Impressions hebdomadaires, points saillants :
- **2025** : pic **S34–S36** (2 780 / 2 251 / 2 198), puis effondrement jusqu'au creux **S53 (98)** et un plateau hivernal à ~800/semaine
- **2026** : redémarrage dès **S06** (1 126) → **S10–S12** (2 293 / 2 277 / 2 580), plateau printanier ~2 200–2 500, puis **pic S30 (5 104)**, S31 (4 498), S35 (4 165)

**Deux fenêtres récurrentes** : fin d'été (S30–S36) et début de printemps (S09–S12). Le creux est décembre–janvier.

**Dates de publication cible (règle des 8 semaines avant le pic)** :
- pour le pic de printemps S09 → publier **début janvier (S01)**
- pour le pic d'été S30 → publier **fin mai (S22)**

⚠️ La comparaison n'est valable que sur les impressions : le volume de clics (5 à 58/mois) est trop faible pour mesurer une saisonnalité de clics.

### 3.12 Apparences dans la recherche → `appearance.csv`

| Apparence | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| PRODUCT_SNIPPETS | 6 | 1 059 | 0,57 % | 13,4 |

**Une seule apparence enrichie active**, et c'est `PRODUCT_SNIPPETS` — pas le type attendu pour un artisan. Aucun `REVIEW_SNIPPET`, aucun `FAQ_RICH_SNIPPET`, aucun `BREADCRUMB` remonté par l'API.

Son CTR (0,57 %) est **4,75× supérieur au CTR global du site (0,12 %)** à une position comparable. C'est le seul levier de rich result qui fonctionne.

**Aucune apparence perdue** par rapport à la période précédente (une seule ligne dans les deux périodes) → pas de balisage cassé.

---

## 4. Indexation → [`indexation.csv`](indexation.csv)

**57 URLs inspectées via l'URL Inspection API** (top pages par impressions + toutes les pages sorties en §3.8).

| État | Nombre |
|---|---|
| Submitted and indexed | **56** |
| Crawled – currently not indexed | 1 |

- **Divergences canonique déclarée ≠ canonique retenue par Google : 0.** Le contrôle le plus rentable de l'audit ne remonte rien — la gestion des canoniques est propre.
- `robotsTxtState` = ALLOWED, `pageFetchState` = SUCCESSFUL, `indexingState` = INDEXING_ALLOWED sur les 57.
- Toutes crawlées en `MOBILE` (mobile-first, conforme).

**Seule anomalie** : `/couverture-bordeaux` — « Crawled – currently not indexed », **dernier crawl le 2026-04-20** (4 mois et demi). Google l'a vue et a décidé de ne pas l'indexer. Elle capte pourtant 255 impressions/90 j (via d'autres pages) et cannibalise « devis toiture bordeaux ». → **La rediriger.**

**Pages crawlées le plus anciennement** (signal de désintérêt de Googlebot) :
`/couverture-bordeaux` (2026-04-20) · `/guides/prix-demoussage-toiture-bordeaux` et `/guides/quand-demousser-toiture-gironde` (2026-06-07) · `/realisations/renovation-faitage-bordeaux-centre-2024` (2026-06-10) · `/charpente-bordeaux` (2026-06-22).

→ **Les deux guides n'ont pas été recrawlés depuis 3 mois** et sont en position 43,8 et hors classement. Le format guide ne prend pas sur cette propriété.

**Sitemaps** : `https://www.couverturegironde.fr/sitemap.xml` — dernier téléchargement **2026-08-29**, **0 warning, 0 erreur**, **77 URLs soumises**. *(Le champ `indexed=0` renvoyé par l'API Sitemaps n'est pas fiable et est ignoré ; l'inspection URL par URL ci-dessus fait foi.)*

---

## 5. Volet IA générative

**Non mesuré.** Le rapport « IA générative » de la Search Console (impressions en AI Overviews et AI Mode) n'a **pas d'API** et n'est pas dans l'export BigQuery. Il ne contient d'ailleurs que des impressions — ni clics, ni CTR, ni requêtes, ni position.

Pour le mesurer : GSC → Performances → Résultats de recherche → onglet « IA générative » → Exporter, puis déposer le CSV dans `gsc-audit/data/manual/ai_generative.csv`.

**C'est la piste à vérifier en priorité pour expliquer le §3.3** : si les AI Overviews se déclenchent sur les requêtes « X gironde » où le site est en position 1-5, cela expliquerait mécaniquement un CTR nul à ces positions. **Cette hypothèse n'est pas vérifiée à ce stade** — je ne l'affirme pas, je dis comment la tester.

---

## 6. Annexe — méthodes de calcul

| Métrique | Formule | Source |
|---|---|---|
| Part anonymisée | `1 − (Σ clics des lignes query) / (clics totaux sans dimension)` | `totals.json` vs `query_28.csv` |
| Seuil impressions | `max(30, percentile_60(impressions des requêtes 28 j))` = **30** | `query_28.csv` |
| Seuil clics | `max(3, percentile_75(clics des pages 28 j))` = **3** | `page_28.csv` |
| Décomposition Δclics | `Δimpressions × ctr_préc + impressions × Δctr` | `totals.json`, `page_28*.csv` |
| Régression 90 j | moindres carrés sur la série journalière, `lag = 3 j` exclu | `daily.csv` |
| CTR agrégé par position | `Σ clics / Σ impressions` par bucket, sur les couples requête × page 90 j | `query_page_90.csv` |
| Part dominante (cannibalisation) | `impressions de la page n°1 / impressions totales de la requête` ; pages retenues = celles ≥ 10 % des impressions | `query_page_90.csv` |
| Sévérité | CRITIQUE si `part < 0,55` **et** ≥ 2 pages avec clics ; SURVEILLER si `0,55 ≤ part < 0,80` ; sinon BÉNIGNE | idem |
| Position pondérée | `Σ (position × impressions) / Σ impressions` | `query_page_90.csv` |
| P(0 clic) | loi binomiale approchée : `e^(−n×p)` avec `n = 6 681`, `p = 0,02` | §3.3 |

**Données brutes** : `gsc-audit/data/` (12 CSV + `totals.json`).
**Sorties d'analyse** : `gsc-audit/out/` (9 CSV).

**Réserve principale** : avec 47 clics sur 28 jours et 70,2 % d'anonymisation, **toute conclusion tirée du niveau des clics par requête repose sur 14 observations**. Les analyses par impressions et par page sont, elles, solides. C'est pourquoi ce rapport s'appuie prioritairement sur les impressions, les positions et les taux agrégés, et non sur les clics individuels.
