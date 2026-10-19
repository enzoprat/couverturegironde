# Audit Search Console — couverturegironde.fr
**Propriété** : `sc-domain:couverturegironde.fr` (propriété Domaine)
**Date** : 2026-10-19 · **Audits précédents** : 2026-10-11, 2026-10-04, 2026-09-27, 2026-09-05
**Fenêtres** : 28 j = 2026-09-18 → 2026-10-16 · précédents = 2026-08-21 → 2026-09-18 · n-1 = 2025-09-18 → 2025-10-16 · 90 j = 2026-07-18 → 2026-10-16

> **Cinquième audit en 6 semaines.** Contrairement aux trois précédents, celui-ci sort deux signaux réels. La cadence hebdomadaire reste globalement trop serrée, mais cette semaine elle a attrapé quelque chose.

---

## 1. Ce que disent les chiffres

1. **Les clics progressent de 17,4 % (46 → 54) alors que les impressions chutent de 37,6 %.** Décomposition du Δclics (+8) : effet impressions **−17,3**, effet CTR **+25,3**. Le CTR passe de 0,29 % à **0,54 %**, il a presque doublé.
2. **Sur un an, le site fait 6 fois plus de clics** : 9 → 54, avec +131,6 % d'impressions et **−9,4 rangs** de position moyenne.
3. **Mais la position se dégrade pour la première fois depuis 4 audits** — et c'est confirmé sur panier constant : **291 requêtes communes, position pondérée 21,5 → 23,7 (+2,3 rangs)**. Ce n'est ni de la composition ni du bruit.
4. **Une rupture nette le 13 octobre.** La position journalière passe de ~21 à 25-27 et y reste. **Aucun déploiement depuis le 27 septembre** : la cause n'est pas le site.
5. **`/nettoyage-toiture-bordeaux` régresse réellement** : 7 de ses 10 requêtes principales perdent 6 à 14 rangs, et sa première requête en impressions disparaît complètement (724 → 0).

---

## 2. Fiabilité

| Contrôle | Valeur | 11/10 |
|---|---|---|
| Part anonymisée — clics | **72,2 %** (15 attribués sur 54) | 69,4 % |
| Historique | 486 j (2025-06-18 → 2026-10-16) | — |
| Volumétrie 28 j | 431 requêtes, 55 pages, 54 clics | 445 / 57 / 49 |
| Seuils | imp ≥ **30** · clics ≥ **3** | idem |

**15 clics attribués sur 54.** Les analyses par impressions, position et page sont solides ; celles par clics ne le sont pas.

**Non mesuré** : volet IA générative (export manuel non refait depuis le 27/09 — dernière mesure 418 imp / 2,8 %) · volumes de recherche · **concurrence SERP et pack local**, qui redevient l'hypothèse n°1 vu la rupture du 13 octobre.

---

## 3. Les actions

| # | Action | Preuve chiffrée | Effort |
|---|---|---|---|
| 1 | **Identifier ce qui s'est passé le 13 octobre.** Vérifier les communications Google sur une mise à jour d'algorithme à cette date. | Position journalière : 21,2 le 12/10 → **25,0 le 13**, 26,2 le 14, 26,6 le 15, 27,3 le 16. Rupture en un jour, maintenue 4 jours. Aucun déploiement depuis le 27/09. | S |
| 2 | **Diagnostiquer `/nettoyage-toiture-bordeaux`** — 2ᵉ page du site en impressions. | 7 requêtes sur 10 perdent 6 à 14 rangs ; « nettoyage de toiture bordeaux » 17,9 → **32,0** ; « entretien toiture bordeaux » 22,4 → 30,7. Page indexée, canonique correcte, **dernier crawl le 25/09**. | M |
| 3 | **Pousser les 4 commits en attente.** | Rien n'est en ligne depuis le 27/09, dont le crédit studio et le title Mérignac. | S |
| 4 | `noindex` + retrait du sitemap des 4 pages jamais crawlées | Aucun `lastCrawlTime`, 0 impression en 90 j | S |
| 5 | Trancher `/couvreur-gironde` | 0 clic / position > 40 ; **inchangé depuis 6 audits** | M |
| 6 | Refaire l'export IA générative | Non fait depuis le 27/09 | S |

---

## 4. Détail

### 4.1 Santé et tendance

| Période | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| **28 j** | **54** | 9 963 | **0,54 %** | 19,7 |
| 28 j précédents | 46 | 15 970 | 0,29 % | 17,9 |
| 28 j n-1 | **9** | 4 302 | 0,21 % | 29,0 |
| 90 j | 163 | 45 357 | 0,36 % | 18,3 |

- **vs précédent** : clics **+17,4 %**, impressions **−37,6 %**, position **+1,8 (dégradation)**
- **vs n-1** : clics **+500 %**, impressions +131,6 %, position **−9,4**
- **Décomposition du Δclics (+8)** : effet impressions **−17,3** · effet CTR **+25,3**

**Signature** : impressions en forte baisse **et** position en baisse. Selon la grille de lecture, c'est une perte de classement réelle. Le panier constant le confirme (§4.2). Le CTR compense largement, mais il compense une dégradation, il ne la contredit pas.

| Régression 90 j | Pente | R² | 11/10 |
|---|---|---|---|
| clics | −0,00/j | 0,00 | −0,01 · 0,01 |
| **impressions** | **−3,50/j** | **0,25** | −1,66 · 0,06 |
| position | +0,04/j | 0,13 | +0,05 · 0,20 |

**La baisse d'impressions devient pour la première fois une tendance mesurable** (R² 0,25 contre 0,06 la semaine dernière). La position, elle, n'a toujours pas de tendance exploitable sur 90 jours — la dégradation est récente et concentrée.

**Mensuel** : `2026-07 58/16072 · 08 58/16891 · 09 42/13631 · 10 35/5572 (partiel)`

### 4.2 Le panier constant — le test qui tranche

| 291 requêtes présentes dans les deux fenêtres | 21/08 → 18/09 | 18/09 → 16/10 |
|---|---|---|
| **Position pondérée** | **21,5** | **23,7** (+2,3) |
| Impressions | 8 722 | 5 818 |
| **Clics** | 11 | **14** |

**La dégradation de position est réelle** : sur un panier strictement identique, le site perd 2,3 rangs. Ce n'est pas un effet de composition.

**Et pourtant les clics montent sur ce même panier** (11 → 14). Les deux faits coexistent : le site recule dans les classements et convertit mieux ce qui reste.

### 4.3 La rupture du 13 octobre

| Date | Clics | Impressions | Position |
|---|---|---|---|
| 2026-10-08 | 3 | 321 | 18,8 |
| 2026-10-09 | 1 | 238 | 20,8 |
| 2026-10-10 | 0 | 203 | 20,7 |
| 2026-10-11 | 3 | 204 | 21,2 |
| 2026-10-12 | 2 | 218 | 21,2 |
| **2026-10-13** | **3** | **341** | **25,0** |
| 2026-10-14 | 1 | 332 | 26,2 |
| 2026-10-15 | 3 | 378 | 26,6 |
| 2026-10-16 | 1 | 311 | 27,3 |

**Marche d'escalier de 3,8 rangs en un jour, qui se creuse ensuite.** Les impressions remontent en même temps (218 → 341), ce qui est cohérent avec un élargissement sur des requêtes plus profondes.

**Ce n'est pas le site** : le dernier déploiement date du **27 septembre** (`cfe2b64`). Les 4 commits locaux — crédit studio, title Mérignac — ne sont pas poussés. Rien n'a changé en ligne depuis 3 semaines.

Les causes possibles, par ordre de vraisemblance : mise à jour d'algorithme Google, changement de composition de la SERP sur les requêtes locales, mouvement concurrentiel. **Aucune n'est vérifiable avec les données dont je dispose** — c'est l'action n°1.

### 4.4 `/nettoyage-toiture-bordeaux` — la régression réelle

Page n°2 du site en impressions. 4 clics → **0**. Position 14,5 → **25,5**. Impressions 2 287 → 1 103.

Vérification au niveau requête, pour écarter l'effet de composition :

| Requête | Avant | Après | Impressions |
|---|---|---|---|
| **démoussage, traitement des toitures (entreprises) bordeaux** | p8,9 | **disparue** | 724 → **0** |
| nettoyage de toiture bordeaux | p17,9 | **p32,0** | 93 → 29 |
| entretien toiture bordeaux | p22,4 | **p30,7** | 109 → 38 |
| entretien toiture gironde | p13,3 | **p23,6** | 45 → 17 |
| nettoyage toiture devis | p21,8 | p29,5 | 96 → 56 |
| nettoyage toiture gironde | p12,2 | p18,7 | 74 → 42 |
| démoussage toiture bordeaux | p8,2 | p14,8 | 77 → 20 |
| nettoyage toiture bordeaux | p12,3 | p13,5 | 189 → 181 |

**Ce n'est pas de la composition.** 7 requêtes sur 10 perdent entre 6 et 14 rangs. Seule « nettoyage toiture bordeaux », la requête principale, tient (12,3 → 13,5).

La disparition de « démoussage, traitement des toitures (entreprises) bordeaux » (724 impressions → 0) explique 61 % de la perte d'impressions à elle seule. Cette requête ne produisait aucun clic — sa perte n'a pas de coût direct, mais elle signale que Google a cessé d'associer la page à ce libellé.

**État technique** : indexée, canonique déclarée = canonique retenue, **dernier crawl le 25 septembre** — il y a 24 jours.

### 4.5 Pages en gain

| Page | Clics | Préc. | Δ | Imp | Pos | Pos préc. | Effet CTR |
|---|---|---|---|---|---|---|---|
| **`/`** | **19** | 10 | **+9** | 2 179 | 24,9 | 23,0 | **+11,7** |
| **`/ornements-toiture-bordeaux`** | **10** | 3 | **+7** | 96 | **9,2** | 10,1 | **+8,5** |
| `/couvreur-begles` | 3 | 0 | +3 | 173 | 15,1 | 18,3 | +3,0 |

**`/ornements-toiture-bordeaux` fait 10 clics sur 96 impressions à position 9,2 — soit un CTR de 10,4 %.** C'est 45 fois le CTR agrégé du site à cette position (0,23 %). C'est la seule page du site qui se comporte comme une page normale. À comprendre et à répliquer, si c'est réplicable.

**La home** gagne 9 clics avec une position qui se dégrade de 1,9 rang. Le détail attribué :

| Requête | Avant | Après |
|---|---|---|
| **couverture gironde** | 1 clic · p2,7 | **6 clics** · p3,2 |
| couvreur bordeaux | 1 clic · p29,4 | 2 clics · p28,0 |
| couvreur merignac | 1 clic · p7,2 | 1 clic · p10,2 |
| **Total attribué** | 5 | 9 |
| **Total réel** | 10 | 19 |

**Le gain de la home est à 60 % une affaire de marque** : « couverture gironde » passe de 1 à 6 clics. 10 des 19 clics restent anonymisés.

### 4.6 Intentions

| Intention | Requêtes | Clics | Part clics |
|---|---|---|---|
| **Marque** | 3 | **6** | **40,0 %** |
| Locale | 170 | 5 | 33,3 % |
| Transactionnelle | 142 | 3 | 20,0 % |

La part marque remonte à 40 %, contre 26,7 % et 11,1 % aux deux audits précédents. Sur 15 clics attribués, **cet indicateur n'est pas lisible d'un audit à l'autre** : il a fait 9,1 → 11,1 → 26,7 → 40,0 % en un mois, pour 1, 1, 4 et 6 clics. Je cesse de le commenter en hebdomadaire.

### 4.7 CTR agrégé (90 j, hors bruit concurrent)

| Position | Impressions | Clics | CTR | 11/10 |
|---|---|---|---|---|
| 1 | 191 | 0 | 0,00 % | 0,00 % |
| **2** | 801 | 16 | **2,00 %** | 1,55 % |
| 3 | 535 | 0 | 0,00 % | 0,00 % |
| 4-5 | 403 | 2 | 0,50 % | 0,49 % |
| 6-10 | 3 926 | 9 | 0,23 % | 0,23 % |
| 11-20 | 9 877 | 8 | 0,08 % | 0,09 % |
| 21-50 | 13 557 | 6 | 0,04 % | 0,05 % |
| **Total** | **32 598** | **42** | 0,13 % | 0,12 % |

Les positions 1, 3, 4-5 restent à **1 143 impressions pour 2 clics**. Inchangé depuis trois audits. **Le pack local demeure l'explication la plus probable, toujours non testée.**

### 4.8 Les analyses sans mouvement

- **Cannibalisation** : 65 requêtes multi-pages, **0 critique**, 52 à surveiller (contre 56). Rien de nouveau.
- **Pages mortes** : 22 pages ≥100 imp / 0 clic, 13 à position > 30 — identique au 11/10. **Rien à signaler.**
- **Mobile vs desktop** : desktop 73,7 % (CTR 0,12 %, pos 23,1), mobile 25,9 % (CTR 0,21 %, pos 16,0). Stable. **Rien à signaler.**
- **Pollution géographique** : hors France 14,8 %, sous le seuil. **Rien à signaler.**
- **Apparences** : PRODUCT_SNIPPETS seule, 7 clics / 1 504 impressions / CTR 0,47 %. Aucune apparence perdue. **Rien à signaler.**
- **Requêtes gagnées / perdues**, **saisonnalité**, **anomalies de CTR** : rien d'exploitable à 8 jours d'intervalle.
- **Recherche Images** : 9 clics / 6 735 impressions sur 90 j. Stable.

---

## 5. Indexation

| État (top 50 par impressions) | Nombre |
|---|---|
| Submitted and indexed | **49** |
| Crawled – currently not indexed | 1 |

- **Divergences canonique déclarée ≠ canonique retenue : 0.** Cinquième audit consécutif.
- **Sitemap** : téléchargé le **2026-10-16**, 0 warning, 0 erreur, 76 URLs soumises.
- **Fraîcheur de crawl** : **6 pages sur 50 recrawlées depuis le 8 octobre**, **9 pages non visitées depuis août**. Identique à la semaine dernière — le budget de crawl reste contraint.

---

## 6. Annexe

| Métrique | Formule |
|---|---|
| Part anonymisée | `1 − (Σ clics des lignes query) / (clics totaux sans dimension)` |
| Seuils | `max(30, p60(impressions))` · `max(3, p75(clics pages))` |
| Décomposition Δclics | `Δimpressions × ctr_préc + impressions × Δctr` |
| Panier constant | requêtes présentes dans les deux fenêtres, hors bruit concurrent |
| CTR agrégé par position | `Σ clics / Σ impressions` par bucket, couples requête × page 90 j |
| Régression 90 j | moindres carrés, 3 derniers jours exclus |

**Réserve** : 54 clics sur 28 jours, 72,2 % d'anonymisation, **15 clics attribués**.

**Prochain audit : 2026-11-16** — sauf si la dégradation du 13 octobre se poursuit, auquel cas un contrôle au **2026-10-26** est justifié pour distinguer une secousse d'une tendance.
