# Changelog SEO — 2026-09-05

Branche `seo/2026-09-05-restauration-home`. **Non déployée, non mergée.**
Contrôle des critères de réussite : **2026-10-03** (`.seo/targets.sqlite`, lot `2026-09-05-restauration-home`).

---

## Le constat qui commande tout le reste

Panier constant de **259 requêtes** présentes avant ET après la refonte de masse du **2026-07-05** (30 pages piliers réécrites en une journée, commits `13d344d` → `628f4a3`) :

| | avant (04/06 → 04/07) | après (05/08 → 02/09) |
|---|---|---|
| position pondérée | **13,2** | **21,2** (+7,9 rangs) |
| impressions | 6 598 | 8 041 (+22 %) |
| clics | 14 | 13 |

**19 des 24 pages** à ≥100 impressions se sont dégradées. Ce n'est pas une dilution de la moyenne : le panier est constant et ses impressions ont augmenté.

La home concentre la perte :

| Requête / page | avant | après | delta |
|---|---|---|---|
| page `/` | pos 7,5 · 6 744 imp · 15 clics | pos 24,2 · 3 188 imp · 11 clics | **−16,7 rangs** |
| « couvreur bordeaux » | 17,9 | 32,9 | **−15,0** |
| « couvreur gironde » | 8,7 | 24,0 | **−15,3** |
| « couvreur mérignac » | 15,6 | 21,5 | −5,9 |
| « couverture gironde » (marque) | 3,8 · 6 clics | 2,3 · 6 clics | +1,5 rang, **0 clic gagné** |

**Cause.** Le commit `628f4a3` (« refocalisation marque ») a retiré « Bordeaux » du title **et** du H1 de la home.

| | title | H1 |
|---|---|---|
| avant | `Couvreur Bordeaux ★ 5/5 sur 52 avis ★ Devis 24h, urgence 7j/7` | `Couvreur à Bordeaux : démoussage, nettoyage et entretien de toiture en Gironde` |
| après | `Couverture Gironde · Couvreur Mérignac depuis 2005 · 5/5` | `Couverture Gironde — artisan couvreur à Mérignac depuis 2005` |

L'objectif affiché était d'arrêter de cannibaliser les pages profondes. **Le transfert n'a pas eu lieu** : `/couvreur-bordeaux` est passé de 22,9 à 25,6, et `/couvreur-gironde` de **10,2 à 39,2** — alors que son propre title est **rigoureusement identique** avant et après (vérifié sur `a351c44^` vs `HEAD`).

C'est le point important : dé-optimiser la home n'a pas déplacé la pertinence vers les pages profondes, elle a fait perdre le sujet à **tout le site**. La home est la page au PageRank interne le plus élevé ; en retirant « couvreur Bordeaux » de son H1, on a coupé l'association thématique du domaine entier.

Et le gain de la refocalisation marque est mesuré, et il est nul : **6 clics avant, 6 clics après**.

---

## Changements appliqués

### Lot 1 — Restauration de la home (`268dc77`)

| Fichier | Champ | Avant | Après |
|---|---|---|---|
| `data/pages.ts` | `seoTitle` home | `Couverture Gironde · Couvreur Bordeaux, Mérignac & Gironde` | `Couvreur Bordeaux & Gironde · Couverture Gironde · Devis 24h` (60 c) |
| `data/pages.ts` | `seoDescription` home | `Couverture Gironde · Artisan couvreur-zingueur à Mérignac depuis 2005 · …` | `Couvreur-zingueur à Bordeaux et en Gironde depuis 2005 · Démoussage, réparation, urgence fuite 7j/7 · Couverture Gironde, atelier Mérignac · 5/5 (57 avis).` (155 c) |
| `app/page.tsx` | H1 | `Couverture Gironde — artisan couvreur à Mérignac depuis 2005` | `Couvreur à Bordeaux et en Gironde — Couverture Gironde, artisan depuis 2005` |

Le terme commercial repasse en tête, la marque est conservée dans les deux.

**Hypothèse testée** : le H1 et le title de la home portent la pertinence du site entier sur « couvreur bordeaux » et « couvreur gironde ».
**Réussite à J+28** : « couvreur gironde » < position 15 · « couvreur bordeaux » < position 25.
**Rollback** : « couverture gironde » > position 4 **ou** < 4 clics sur 28 jours.

### Lot 2 — Maillage vers `/installation-velux-bordeaux` (`f3edfbe`)

La page est la 2ᵉ du site en impressions (1 422 sur 28 j) et s'est effondrée de 12,2 à 28,3 avec −80 % de clics. Elle est liée depuis la nav et le footer des 77 pages, mais ne recevait que **3 liens en prose**, contre une **médiane de 44** sur le site (mesuré sur le graphe interne, `out/maillage.csv`).

| Fichier | Changement |
|---|---|
| `app/couvreur-bordeaux/page.tsx` | lien en prose, ancre « installation de fenêtres de toit Velux à Bordeaux » |
| `app/reparation-toiture-bordeaux/page.tsx` | lien en prose, ancre « pose et reprise d'étanchéité Velux » |

3 → 5 liens de corps. **Réussite à J+28** : « velux bordeaux » < position 10.

> Les deux paragraphes d'insertion sont **du texte généré**. À relire avant déploiement.

---

## Déjà appliqué plus tôt dans la journée (branche `main`, commits `995bc8a` et `703aa3b`)

- Réconciliation d'entité site ↔ fiche GBP : `alternateName`, `legalName`, `sameAs`, `hasMap` sur `Organization` et `RoofingContractor` ; identité juridique en footer et mentions légales.
- Fusion `/demoussage-toiture-bordeaux` → `/nettoyage-toiture-bordeaux` (301), title/H1/meta de la page conservée absorbant « démoussage », 6 liens et 3 mappings repointés.
- Dé-optimisation service de `/demande-devis`.
- Synchronisation 55 → 57 avis (70 occurrences, 42 fichiers).

---

## Ce qui a été volontairement écarté

| Action envisagée | Décision | Raison chiffrée |
|---|---|---|
| 301 `/couvreur-gironde` → `/` | **Écartée** | Elle était en **position 10,2 le 04/07**. Sa chute à 39,2 vient de la home, pas d'elle-même — son title n'a pas changé. Rediriger une page récupérable aurait détruit un actif. Elle est aussi la destination de **5 redirects legacy**. |
| Suppression des 15 réalisations à 0 impression | **Écartée** | Le motif invoqué (budget de crawl) ne tient pas à 77 URLs. Ce sont des preuves de chantiers réels — signal E-E-A-T. |
| Retrait de « depuis 2005 » (132 occurrences) | **En attente** | Dépend du SIREN et de la date de création réelle, non communiqués. Ne pas modifier tant que le fait n'est pas établi. |
| Création de pages ville × service manquantes | **Écartée** | Les 3 pages quartier Bordeaux existantes (`-centre`, `-chartrons`, `-lac`) font **0 impression sur 90 jours** malgré un maillage correct. Rien n'indique qu'une page de plus produirait davantage. |

---

## Limites de la méthode — contrainte « zéro outil payant »

- **Volumes de recherche** : non mesurés. La Search Console donne des impressions, pas des volumes. Aucun volume n'apparaît dans ce document.
- **Top 3 concurrent et matrice d'écart** : **non réalisés**. Google est bloqué dans le navigateur intégré et l'extension Claude in Chrome n'est pas connectée. Aucun écart concurrentiel n'est documenté ici — les hypothèses ci-dessus portent uniquement sur des comparaisons avant/après du site lui-même.
- **Profil de backlinks** : non mesuré, aucune source gratuite ne le donne.
- **Positions réelles hors Search Console** : non mesurées. La position moyenne GSC reste la seule mesure disponible.
- **Grille géographique du pack local** : hors de portée sans API.
- **Mesure GEO** : non réalisée. Voir ci-dessous.

## Hygiène GEO — vérifiée

| Contrôle | Résultat |
|---|---|
| GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot | **200** sur `/` — aucun blocage, `robots.txt` en `Allow: /` |
| Contenu clé en texte dans le HTML servi | ✅ 1 720 à 3 561 mots par page, SSG, aucun rendu JS différé |
| `Organization` + `RoofingContractor` + `sameAs` | ✅ sur les 77 pages |
| Cohérence balisage / texte visible | ✅ après déploiement du passage à 57 avis |
| Types de schema | `Organization` 77 · `WebSite` 77 · `RoofingContractor` 77 · `BreadcrumbList` 76 · `Person` 74 · `FAQPage` 44 · `Article` 30 · `HowTo` 23 · `Service` 23 · `Review` 20 |
| Titles hors plage 25-62 c | 16 pages, dont **15 réalisations** (enjeu nul : 0 impression) |
| Images sans `alt` | 154 sur 1 372 — à vérifier, une partie est décorative (`aria-hidden`) |

Aucune technique d'« optimisation GEO » n'a d'effet causal établi. `llms.txt` n'est pas recommandé : Google indique explicitement qu'aucun fichier de ce type n'est nécessaire.

---

## Contrôle à J+28 — 2026-10-03

Réextraire la Search Console et rendre un verdict par cible contre le critère fixé **aujourd'hui**, jamais contre un critère réécrit après coup.

| Requête | Page | Position de départ | Imp 28 j | Clics | Critère de réussite |
|---|---|---|---|---|---|
| couvreur gironde | `/` | **24,0** | 562 | 0 | position < 15 |
| couvreur bordeaux | `/` | **32,9** | 506 | 0 | position < 25 |
| couvreur mérignac | `/` | 21,5 | 226 | 0 | position < 18 |
| **couverture gironde** (témoin) | `/` | **2,3** | 61 | **6** | **≤ 4 et ≥ 4 clics — sinon rollback du lot** |
| velux bordeaux | `/installation-velux-bordeaux` | 11,8 | 141 | 0 | position < 10 |
| installateur velux bordeaux | `/installation-velux-bordeaux` | 14,1 | 72 | 0 | position < 12 |
| démoussage toiture bordeaux | `/nettoyage-toiture-bordeaux` | 13,9 | 87 | 0 | position < 10 |
| nettoyage de toiture bordeaux | `/nettoyage-toiture-bordeaux` | 14,8 | 143 | 0 | position < 12 |

Une réextraction plus tôt que J+28 ne conclut rien : la re-évaluation d'une page modifiée s'étale sur 3 à 6 semaines — c'est exactement ce qu'a montré la dégradation progressive du 05/07 au 03/08.
