# Audit Search Console — couverturegironde.fr
**Propriété** : `sc-domain:couverturegironde.fr` (propriété Domaine)
**Date** : 2026-10-25 · **Audit précédent** : 2026-10-19
**Fenêtres** : 28 j = 2026-09-24 → 2026-10-22 · précédents = 2026-08-27 → 2026-09-24 · n-1 = 2025-09-24 → 2025-10-22 · 90 j = 2026-07-24 → 2026-10-22

> **Cet audit a un objet unique**, annoncé au rapport précédent : la rupture de position du 13 octobre est-elle une secousse ou une tendance ? **La réponse est : une tendance, et elle s'aggrave.** Tout le reste du rapport est secondaire.

---

## 1. Ce que disent les chiffres

1. **La dégradation du 13 octobre n'est pas une secousse.** Position pondérée **20,5 avant (29/09 → 12/10) contre 28,4 après (13/10 → 22/10)** — **7,9 rangs**. Et elle continue de se creuser : 26,4 sur les 5 premiers jours, **30,5 sur les 5 suivants**.
2. **Elle est uniforme.** Les **14 pages** à plus de 100 impressions perdent toutes du rang, de −3,0 à −15,8. Sur un panier constant de **197 requêtes**, la position passe de 25,2 à **31,7**. **16 requêtes perdent ≥ 3 rangs, 1 seule en gagne.**
3. **Ce n'est pas le site.** Aucun déploiement entre le 27 septembre et le 19 octobre. Techniquement tout est sain : HTTP 200 partout, `robots.txt` correct, `index, follow`, **0 anomalie de canonique**, 49 pages indexées sur 50, et Googlebot a **augmenté** son activité (18 pages recrawlées depuis le 13/10 contre 6 avant).
4. **Les clics résistent encore** : 51 contre 47 (+8,5 %), parce que le CTR a doublé (0,32 % → 0,54 %). Décomposition du Δclics (+4) : effet impressions **−17,0**, effet CTR **+21,0**. C'est un amortisseur, pas une immunité.
5. **La baisse d'impressions devient la tendance la plus solide jamais mesurée sur ce site** : **−4,51/jour, R² 0,40** sur 90 jours. C'était −1,66 (R² 0,06) il y a deux semaines.

---

## 2. Fiabilité

| Contrôle | Valeur | 19/10 |
|---|---|---|
| Part anonymisée — clics | **70,6 %** (15 attribués sur 51) | 72,2 % |
| Historique | 486 j (→ 2026-10-22) | — |
| Volumétrie 28 j | 428 requêtes, 56 pages, 51 clics | 431 / 55 / 54 |
| Seuils | imp ≥ **30** · clics ≥ **3** | idem |

**Le diagnostic principal de ce rapport ne repose pas sur les clics.** Il repose sur les positions et les impressions, mesurées sur panier constant — les deux séries les plus fiables de la propriété. La conclusion tient malgré 70,6 % d'anonymisation.

**Non mesuré** : volet IA générative (export manuel non refait depuis le 27/09) · volumes de recherche · **actions manuelles et problèmes de sécurité** : la Search Console ne les expose pas via API, **seule une vérification dans l'interface peut les écarter** (action n°1).

---

## 3. Les actions

| # | Action | Pourquoi | Effort |
|---|---|---|---|
| 1 | **Vérifier « Actions manuelles » et « Sécurité et actions manuelles » dans l'interface GSC.** | Une pénalité manuelle produit exactement cette signature : chute uniforme, site entier, date nette, sans changement technique. **Aucune API ne l'expose** — c'est le seul contrôle que je ne peux pas faire. **À faire en premier.** | S |
| 2 | **Ne rien modifier sur le site pendant 2 semaines.** | Vous avez déployé le 19/10, en pleine dégradation. Tout nouveau changement rendra impossible de distinguer l'effet d'une correction de la suite du mouvement. | S |
| 3 | **Refaire l'export IA générative.** | Si un AI Overview s'est généralisé sur les requêtes locales à partir du 13/10, il expliquerait à la fois la perte de position apparente et la chute d'impressions mobile. **Dernière mesure : 418 imp / 2,8 % le 27/09.** C'est la seule hypothèse testable immédiatement. | S |
| 4 | **Contrôler à nouveau le 2026-11-08.** | Deux semaines de recul permettront de distinguer une correction en cours d'un palier durable. | S |
| 5 | `noindex` + retrait du sitemap des 4 pages jamais crawlées | Inchangé depuis 4 audits | S |
| 6 | Trancher `/couvreur-gironde` | 199 imp / 0 clic / position 40,6 — **inchangé depuis 7 audits** | M |

**Aucune action d'optimisation on-page n'est recommandée.** Pendant une dégradation d'origine externe non identifiée, modifier le site ajoute une variable sans en retirer aucune.

---

## 4. Le diagnostic principal

### 4.1 La série journalière

| Date | Clics | Impressions | Position |
|---|---|---|---|
| 2026-10-08 | 3 | 321 | 18,8 |
| 2026-10-11 | 3 | 204 | 21,2 |
| 2026-10-12 | 2 | 218 | 21,2 |
| **2026-10-13** | 3 | 341 | **25,0** |
| 2026-10-14 | 1 | 332 | 26,2 |
| 2026-10-16 | 1 | 311 | 27,3 |
| 2026-10-18 | 0 | 264 | **30,2** |
| 2026-10-20 | 0 | 283 | 29,9 |
| 2026-10-21 | 2 | 338 | 31,0 |
| **2026-10-22** | 1 | 286 | **33,2** |

| | 29/09 → 12/10 (14 j) | 13/10 → 22/10 (10 j) |
|---|---|---|
| Position pondérée | **20,5** | **28,4** |
| Clics | 28 (2,0/j) | 15 (1,5/j) |
| Impressions | 4 858 (347/j) | 3 116 (312/j) |

**Et la dégradation n'a pas atteint de palier** : 26,4 sur les 5 premiers jours, **30,5 sur les 5 suivants**. Le 22 octobre est le plus mauvais jour de la série.

### 4.2 Elle touche tout le site

**Par page** — les 14 pages à ≥100 impressions, **toutes en perte** :

| Page | Avant | Après | Δ |
|---|---|---|---|
| `/nettoyage-toiture-bordeaux` | 25,3 | **41,1** | +15,8 |
| `/couvreur-eysines` | 17,6 | 32,2 | +14,6 |
| `/couvreur-bordeaux` | 29,2 | 43,0 | +13,9 |
| `/traitement-hydrofuge-toiture-bordeaux` | 14,1 | 27,0 | +13,0 |
| `/urgence` | 30,6 | 43,6 | +12,9 |
| `/couvreur-arcachon` | 11,7 | 23,7 | +12,0 |
| `/installation-velux-bordeaux` | 27,8 | 38,6 | +10,8 |
| `/urgence-fuite-toiture-bordeaux` | 12,1 | 20,5 | +8,4 |
| `/couvreur-talence` | 18,6 | 26,2 | +7,6 |
| `/couvreur-gironde` | 34,1 | 40,6 | +6,5 |
| **`/`** | 26,8 | 30,9 | +4,2 |
| `/faitage-toiture-bordeaux` | 9,0 | 12,1 | +3,0 |

**Panier constant de 197 requêtes** présentes dans les deux périodes : position pondérée **25,2 → 31,7 (+6,6)**. **16 requêtes perdent ≥ 3 rangs ; 1 seule en gagne ≥ 3.**

**Par appareil** :

| | Avant | Après |
|---|---|---|
| Mobile | 1 569 imp (112/j) · pos **13,4** | 772 imp (**77/j**) · pos **17,6** |
| Desktop | 3 272 imp (234/j) · pos **24,0** | 2 332 imp (233/j) · pos **32,1** |

**Les impressions mobile chutent de 31 % par jour pendant que le desktop reste strictement stable.** Le mobile perd 4,2 rangs, le desktop 8,1. C'est le seul endroit où le mouvement n'est pas uniforme — et c'est le canal qui porte le CTR du site (0,21 % contre 0,12 %).

**France seule** : 19,1 → **27,5**. Ce n'est pas un effet de trafic international.

### 4.3 Ce n'est pas le site

| Contrôle | Résultat |
|---|---|
| Déploiements entre le 27/09 et le 19/10 | **aucun** — la rupture du 13/10 tombe dans une fenêtre sans changement |
| Disponibilité | HTTP 200 sur `/`, `/nettoyage-toiture-bordeaux`, `/couvreur-arcachon`, `/robots.txt`, `/sitemap.xml` — 0,15 à 0,42 s |
| `robots.txt` | `Allow: /`, seuls `/api/` et `/merci` exclus |
| Balise robots | `index, follow` · `X-Robots-Tag: index, follow` |
| Indexation (top 50) | **49 indexées**, 1 « Crawled – currently not indexed » |
| Canonique déclarée ≠ retenue | **0** — sixième audit consécutif |
| `robotsTxtState` / `pageFetchState` | ALLOWED / SUCCESSFUL sur les 50 |
| Activité de crawl | **18 pages sur 50 recrawlées depuis le 13/10**, contre 6 sur 50 au rapport précédent. Googlebot vient **plus** souvent, pas moins. |
| Sitemap | téléchargé le 16/10, 0 warning, 0 erreur, 76 URLs |

**Rien n'est cassé.** La dégradation est un pur mouvement de classement.

### 4.4 Contexte externe — ce qu'on sait et ce qu'on ne sait pas

Recherche effectuée le 2026-10-25 sur l'actualité algorithmique :

- **Aucune mise à jour Google confirmée ne couvre le 13 octobre.** Le dernier événement officiel au tableau de bord Google est la **mise à jour spam de septembre 2026**, déployée du 24 septembre au **8 octobre** — soit terminée 5 jours avant la rupture.
- Une **volatilité sectorielle est rapportée** autour du 9 au 16 octobre par plusieurs sources de l'industrie, sans confirmation officielle. Des observateurs signalent notamment **une localisation accrue des résultats**, ce qui serait directement pertinent pour un artisan local.

**L'attribution n'est pas établie.** Ces sources sont des blogs SEO tiers, pas Google. Je les cite comme contexte, pas comme cause. Trois hypothèses restent ouvertes, par ordre de vraisemblance :

1. **Mouvement algorithmique non confirmé** — cohérent avec la volatilité rapportée et la signature uniforme.
2. **Action manuelle ou problème de sécurité** — produirait exactement cette signature. **Non vérifiable par API : action n°1.**
3. **Changement de composition de la SERP locale** (pack local élargi, AI Overview) — testable par l'export IA générative, action n°3.

---

## 5. Le reste

### 5.1 Santé globale

| Période | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| **28 j** | **51** | 9 463 | **0,54 %** | **22,8** |
| 28 j précédents | 47 | 14 809 | 0,32 % | 17,5 |
| 28 j n-1 | **11** | 4 345 | 0,25 % | 31,6 |
| 90 j | 156 | 43 646 | 0,36 % | 19,1 |

- **vs précédent** : clics **+8,5 %**, impressions **−36,1 %**, position **+5,3**
- **vs n-1** : clics **+363,6 %**, impressions +117,8 %, position **−8,8**
- **Décomposition du Δclics (+4)** : effet impressions **−17,0** · effet CTR **+21,0**

| Régression 90 j | Pente | R² | 19/10 | 11/10 |
|---|---|---|---|---|
| clics | −0,00/j | 0,00 | −0,00 | −0,01 |
| **impressions** | **−4,51/j** | **0,40** | −3,50 · 0,25 | −1,66 · 0,06 |
| position | +0,05/j | 0,18 | +0,04 · 0,13 | +0,05 · 0,20 |

**La baisse d'impressions est désormais la tendance la mieux établie de la propriété** (R² 0,40, en progression constante sur trois audits). La position, mesurée sur 90 jours, reste noyée — parce que la dégradation est récente et concentrée sur 10 jours.

**Malgré tout, le site reste très au-dessus de l'an dernier** : 51 clics contre 11, position 22,8 contre 31,6.

### 5.2 Ce qui tient

| Page | Clics | Préc. | Δ | Pos | Effet CTR |
|---|---|---|---|---|---|
| **`/`** | 18 | 12 | **+6** | 27,8 | +8,6 |
| **`/ornements-toiture-bordeaux`** | 9 | 3 | **+6** | **9,2** | +7,4 |

`/ornements-toiture-bordeaux` fait **9 clics sur 90 impressions à position 9,2 — soit 10,0 % de CTR**, contre 0,20 % pour le site à cette position. Confirmé pour le deuxième audit consécutif (10,4 % la semaine dernière). **Ce n'est plus du bruit.** Cette page mérite d'être comprise — mais pas pendant la dégradation.

### 5.3 CTR agrégé (90 j, hors bruit concurrent)

| Position | Impressions | Clics | CTR |
|---|---|---|---|
| 1 | 189 | 0 | 0,00 % |
| **2** | 467 | 16 | **3,43 %** |
| 3 | 449 | 0 | 0,00 % |
| 4-5 | 398 | 2 | 0,50 % |
| 6-10 | 3 437 | 7 | 0,20 % |
| 11-20 | 8 998 | 6 | 0,07 % |
| 21-50 | 14 885 | 8 | 0,05 % |
| **Total** | **32 259** | **39** | 0,12 % |

Les positions 1, 3 et 4-5 restent à **1 036 impressions pour 2 clics**. Inchangé depuis quatre audits.

### 5.4 Les analyses sans mouvement

- **Quick wins** : 13 requêtes seulement, contre 21 au dernier audit — **conséquence directe de la dégradation**, les requêtes sortent de la fenêtre 4-15. Plafond théorique 14,1 clics/28 j.
- **Cannibalisation** : 65 requêtes multi-pages, **0 critique**, 50 à surveiller. **Rien à signaler.**
- **Pages mortes** : 23 pages ≥100 imp / 0 clic, 13 à position > 30. **Rien à signaler.**
- **Intentions** : marque 46,7 % des clics (7 sur 15). Indicateur non lisible à ce volume, je ne le commente plus.
- **Pollution géographique** : hors France 15,5 %, sous le seuil. **Rien à signaler.**
- **Apparences** : PRODUCT_SNIPPETS seule, inchangée. Aucune apparence perdue. **Rien à signaler.**
- **Recherche Images** : 9 clics / 6 733 impressions sur 90 j. Stable.

---

## 6. Annexe

| Métrique | Formule |
|---|---|
| Part anonymisée | `1 − (Σ clics des lignes query) / (clics totaux sans dimension)` |
| Panier constant | requêtes présentes dans les deux fenêtres, hors requêtes contenant le domaine du concurrent |
| Position pondérée | `Σ (position × impressions) / Σ impressions` |
| Décomposition Δclics | `Δimpressions × ctr_préc + impressions × Δctr` |
| Régression 90 j | moindres carrés sur la série journalière, 3 derniers jours exclus |
| CTR agrégé par position | `Σ clics / Σ impressions` par bucket, couples requête × page 90 j |

**Réserve** : 51 clics sur 28 jours, 70,6 % d'anonymisation. **Le diagnostic principal ne dépend pas des clics** — il repose sur les positions et impressions en panier constant.

**Sources du contexte externe** (consultées le 2026-10-25, blogs SEO tiers, pas Google) :
[searchenginewatch.com](https://searchenginewatch.com/google-october-2026-update-rumors/) · [seroundtable.com](https://www.seroundtable.com/google-search-ranking-volatility-chatter-42317.html) · [seovendor.co](https://seovendor.co/google-algorithm-updates-october-2026/)

**Prochain contrôle : 2026-11-08.**

---

## 7. Complément du 2026-10-25 — l'hypothèse « action manuelle » est écartée, et la nature du mouvement est identifiée

**Vérification faite par le propriétaire du site** : « Actions manuelles » et « Sécurité et actions manuelles » n'affichent **aucune action requise**. L'hypothèse n°2 du §4.4 est éliminée.

### Où les impressions sont parties

Distribution par bande de position, **normalisée par jour** (14 jours avant, 10 jours après) :

| Position | imp/jour avant | imp/jour après | Δ | Clics avant | Clics après |
|---|---|---|---|---|---|
| 1 – 3 | 11,6 | 14,1 | **+21 %** | 1 | **3** |
| **4 – 10** | **17,5** | **5,7** | **−67 %** | 4 | **0** |
| 11 – 20 | 54,9 | 35,9 | −35 % | 2 | 0 |
| **21 – 50** | **116,5** | **154,9** | **+33 %** | 1 | 0 |
| **51 +** | **28,1** | **68,0** | **+142 %** | 1 | 0 |

**Le site n'a pas perdu de visibilité : il a perdu de la visibilité *utile*.** Les bandes profondes gonflent pendant que la bande 4-10 s'effondre. C'est un déplacement de toute la distribution vers le bas.

### Ce n'est pas un changement de couverture

| | Résultat |
|---|---|
| Requêtes ≥30 impressions présentes avant et **disparues** après | **0** |
| Requêtes ≥30 impressions **nouvelles** après | **0** |

**Le jeu de requêtes est strictement identique.** Google montre le site sur exactement les mêmes recherches, systématiquement plus bas. Ce n'est ni une perte de pertinence thématique, ni une désindexation, ni une dérive sémantique.

### Ce qui est tombé de la bande 4-10

| Requête | Avant | Après |
|---|---|---|
| zinguerie arcachon | 9,5 | **21,8** |
| zinguerie bassin arcachon | 6,7 | **17,4** |
| traitement hydrofuge gironde | 8,1 | 15,7 |
| démoussage eysines | 9,6 | 14,8 |
| fuites mise en eau toiture gironde | 6,7 | 11,4 |
| réparation fuite toiture pessac | 9,9 | 11,7 |
| couvreur bordeaux bastide | 9,8 | 11,2 |

Ce sont des requêtes locales réelles, pas du bruit machine.

### Nuance sur la bande 1-3 — ne pas sur-interpréter

La bande 1-3 passe de 11,6 à 14,1 impressions/jour, mais **le nombre de requêtes qui s'y trouvent recule de 27 à 19** et le total d'impressions de 147 à 117. Par jour c'est à peu près stable, pas une amélioration.

Les 3 clics de cette bande viennent **entièrement** d'une seule requête : « couverture gironde », la marque, passée de la position 4,8 à **2,6**. Le reste du top 3 est occupé par les formulations non naturelles déjà documentées (« pose couverture gironde », « couverture toit gironde », « service couverture gironde »), qui ne produisent aucun clic depuis le premier audit.

### Ce que ça coûte réellement

**La bande 4-10 produisait 4 clics en 14 jours. Elle en produit 0 en 10 jours.** Le coût direct mesuré de cette dégradation est d'environ **4 clics sur la période**.

C'est un signal sérieux sur la trajectoire — la bande 4-10 est l'antichambre du top 3 — mais il faut garder la proportion : à ce stade, la perte business est marginale, et les clics totaux du site sont **en hausse** (51 contre 47).

### Ce qui reste ouvert

Avec l'action manuelle écartée, il reste deux hypothèses, et une seule est testable :

1. **Mouvement algorithmique non confirmé** — cohérent avec la volatilité sectorielle rapportée du 9 au 16 octobre. **Non testable** : rien dans la GSC ne distingue un mouvement algorithmique d'un changement de SERP.
2. **Densification de la SERP locale** (pack local élargi, AI Overview) — cohérent avec un effondrement spécifique de la bande 4-10 : sur une SERP plus dense, les résultats organiques 4 à 10 passent sous le pli et cessent d'être comptés comme vus. **Testable par l'export IA générative** : si la part IA est passée de 2,8 % à un niveau nettement supérieur depuis le 13 octobre, l'hypothèse se renforce.

**L'export IA générative devient l'action n°1.**

---

## 8. L'hypothèse IA est réfutée à son tour — et je n'ai plus de cause testable

Export IA générative du 2026-10-25 (Type « Web (textuel) », 28 derniers jours, 26/09 → 23/10).

### Le test

| | Impressions IA | Par jour |
|---|---|---|
| Avant le 13/10 (17 j) | 195 | **11,5** |
| À partir du 13/10 (11 j) | 123 | **11,2** |
| | | **−2,5 %** |

**Aucune rupture.** La présence du site dans les AI Overviews est strictement plate de part et d'autre du 13 octobre, pendant que sa position moyenne s'effondrait de 7,9 rangs.

### Et en absolu, l'IA recule

| | 27/09 | 25/10 |
|---|---|---|
| Impressions IA | 418 | **318** (−24 %) |
| Impressions web | 14 809 | 9 463 |
| **Part IA** | 2,8 % | **3,4 %** |

La part monte, mais **uniquement parce que les impressions web chutent plus vite que les impressions IA**. En valeur absolue, l'exposition IA du site a *diminué*. Lire ce 2,8 % → 3,4 % comme une progression de l'IA serait une erreur de dénominateur.

`/faitage-toiture-bordeaux` reste la page la plus exposée (82 impressions sur 318, soit 26 % — même proportion qu'au 27/09).

### ⚠️ Ce que ce rapport ne mesure PAS

Le rapport « IA générative » de la Search Console couvre les **AI Overviews et l'AI Mode**. Il **ne mesure pas le pack local**, qui est une fonctionnalité de SERP distincte.

**Réfuter « les AI Overviews ont causé la chute » ne réfute donc pas « le pack local s'est densifié ».** Cette dernière hypothèse reste entière — et elle n'est mesurable par aucune donnée de la Search Console.

### État des hypothèses

| # | Hypothèse | Statut |
|---|---|---|
| 1 | Changement sur le site | **Écartée** — aucun déploiement 27/09 → 19/10, tout sain techniquement |
| 2 | Action manuelle / sécurité | **Écartée** — vérifié dans l'interface, aucune action requise |
| 3 | Densification par AI Overview | **Écartée** — présence IA plate et en recul absolu |
| 4 | Mouvement algorithmique non confirmé | **Ouverte, non testable** avec les données disponibles |
| 5 | Densification du pack local | **Ouverte, non testable** — hors périmètre de la GSC |

**Je ne peux pas déterminer la cause avec les données dont je dispose. Je ne vais pas en inventer une.**

### La seule piste restante, et elle demande 10 minutes de ta part

Les hypothèses 4 et 5 ne se distinguent que **en regardant les SERP elles-mêmes**. Je n'y ai pas accès — Google est bloqué dans le navigateur intégré et l'extension Chrome n'est pas connectée.

**Observation manuelle à faire**, sur mobile de préférence, en navigation privée :

| Requête | Position organique mesurée avant → après |
|---|---|
| `zinguerie arcachon` | 9,5 → 21,8 |
| `zinguerie bassin arcachon` | 6,7 → 17,4 |
| `traitement hydrofuge gironde` | 8,1 → 15,7 |
| `démoussage eysines` | 9,6 → 14,8 |

Pour chacune, noter **ce qui occupe l'écran avant le premier résultat organique** : pack local (combien de fiches ?), AI Overview, annonces, People Also Ask, carrousels. Si le pack local ou un nouveau bloc occupe désormais la hauteur qui était celle des résultats 4 à 10, l'hypothèse 5 est confirmée.

C'est la seule chose qui peut encore faire avancer ce dossier.
