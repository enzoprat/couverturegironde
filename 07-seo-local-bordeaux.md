# Stratégie SEO local — domination Bordeaux & Gironde

## Villes prioritaires (par densité × pouvoir d'achat × volume search)

### Tier 1 — couverture obligatoire mois 1-2
| Ville | INSEE | Pop. | Priorité |
|---|---|---|---|
| Bordeaux | 33063 | 261 000 | ★★★★★ |
| Mérignac | 33281 | 72 000 | ★★★★★ (siège) |
| Pessac | 33318 | 65 000 | ★★★★★ |
| Talence | 33522 | 43 000 | ★★★★ |
| Bègles | 33039 | 28 000 | ★★★★ |
| Le Bouscat | 33069 | 24 000 | ★★★★ (CSP+) |
| Villenave-d'Ornon | 33550 | 33 000 | ★★★★ |
| Gradignan | 33192 | 26 000 | ★★★★ (CSP+) |

### Tier 2 — mois 2-3
Eysines, Cenon, Lormont, Floirac, Saint-Médard-en-Jalles, Bouliac, Bruges, Le Haillan, Saint-Aubin-de-Médoc, Cestas, Léognan, Martignas-sur-Jalle

### Tier 3 — mois 4-5
Saint-André-de-Cubzac, Libourne, Blanquefort, Parempuyre, Carbon-Blanc, Ambarès, Bassens, Artigues-près-Bordeaux, Tresses

## Pages preuves locales à créer

1. **Page galerie chantiers par ville** : `/realisations/{ville}` filtré
2. **Page avis géographique** : `/avis/clients-pessac` avec témoignages clients de Pessac
3. **Page zone d'intervention** : carte interactive (lazy-loaded, pas de Maps API qui plombe LCP — préférer image statique + lien Maps)
4. **Pages quartiers Bordeaux** (mois 4+) : grand impact local
5. **Page tarifs par typologie** : `/tarifs/refection-toiture-tuile-canal`

## Google Business Profile (CRUCIAL)

### Optimisation immédiate
- Nom **exact** : `Couverture Gironde` (pas de keyword stuffing du genre "Couverture Gironde - Couvreur Bordeaux Mérignac")
- Catégorie principale : **Couvreur** (Roofing contractor)
- Catégories secondaires : Démoussage, Charpentier, Zingueur, Entreprise de couverture
- Zone d'intervention : ajouter explicitement TOUTES les villes (jusqu'à 20)
- Photos : 1/semaine minimum (avant/après, équipe, chantier en cours)
- Posts : 1/semaine (offre saison, conseil, réalisation)
- Q&A : préparer 10 questions/réponses récurrentes
- **Avis** : viser +5/mois minimum, **répondre à 100%**, mentionner la ville + le service dans la réponse (signal local)

### Lien stratégique GBP ↔ Site
- Le lien "Site web" du GBP doit pointer vers `/` avec UTM (`?utm_source=gbp&utm_medium=organic`)
- Ajouter lien vers `/devis` aussi dans "Réservation"
- Numéro de tél : strictement identique à celui du site (NAP)

## Backlinks locaux à acquérir

### Annuaires métier (citations NAP)
- PagesJaunes
- Houzz France
- Trustpilot
- Yelp France
- 118000
- Kompass
- Societe.com
- LeBonCoin Pro (annonce service)
- IAD-Annuaire / Habitatpresto / Travaux.com (générateurs de leads — utiliser pour le backlink, pas forcément les leads)

### Locaux
- CCI Gironde
- Chambre des Métiers de la Gironde
- Bordeaux Métropole — répertoire artisans
- Mairies (annuaires des artisans communaux Mérignac, Pessac, etc.)
- Syndicats : Capeb 33, FFB Aquitaine

### Presse & blogs locaux
- Sud Ouest (interview, article expert)
- 20 minutes Bordeaux
- Bordeaux Métropole magazine
- Le Bonbon Bordeaux
- Blogs immobilier local (Square Habitat, Laforêt — partenariats)

### Partenariats artisans non-concurrents
- Maçons, carreleurs, plombiers locaux : échange de recommandations sur site (`/partenaires`)
- Architectes Gironde
- Diagnostiqueurs immobiliers
- Assurances (Maaf, Macif locales) — programme partenaire artisan

## Signaux locaux à intégrer dans le contenu

Chaque page ville DOIT mentionner :
- **Quartiers spécifiques** (ex: Pessac → Saige, Cap-de-Bos, Bourgailh, Pessac-centre)
- **Caractéristiques toitures locales** (Bordeaux = tuile canal, ardoise pour beaux quartiers, zinc années 70)
- **Climat océanique** (mousse récurrente humidité, tempêtes hivernales, hydrofuge stratégique)
- **1 référence chantier réel** dans la ville (anonymisée si nécessaire : "rue Pasteur", pas l'adresse complète)
- **Trajet depuis Mérignac** ("à 12 min de notre dépôt à Mérignac")
- **Mentions règlementaires locales** (PLU, ABF si secteur sauvegardé)

## FAQ locales (à dupliquer/adapter par ville)
- "Quel est le délai d'intervention à {Ville} ?"
- "Faut-il une autorisation d'urbanisme à {Ville} pour refaire sa toiture ?"
- "Quels sont les tarifs moyens d'un couvreur à {Ville} ?"
- "Êtes-vous joignables en urgence le week-end à {Ville} ?"
- "Quelle garantie sur vos travaux à {Ville} ?"

## NAP cohérence (CRITIQUE)
Sur **toutes les plateformes** strictement le même format :
```
Couverture Gironde
65 Rue de Malbos
33700 Mérignac
+33 7 68 69 78 48
```
- Pas de variation "Couverture Gironde SARL" vs "Couverture Gironde"
- Pas de "06 ..." sur un site et "+33 6..." sur un autre
- Pas d'adresse différente même sur les annuaires
- Audit annuel avec **BrightLocal** ou **Whitespark** (~30€/mois)
