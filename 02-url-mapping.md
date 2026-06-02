# Mapping URLs anciennes → nouvelles (migration 301)

## Règle de nommage retenue
Pattern unique scalable :
- Services Bordeaux (hub) : `/{service}-bordeaux/`
- Services ville : `/{service}-{ville}/`
- Hub ville : `/couvreur-{ville}/`
- Guides : `/guides/{slug}/`
- Réalisations : `/realisations/{slug}/`
- Pages légales conservées telles quelles

`/` final décidé : **SANS slash de fin** (pour éviter doublons canonical, choix Vercel par défaut + Next.js `trailingSlash: false`)

## Mapping de migration

| Ancienne URL | Nouvelle URL | Statut | Note |
|---|---|---|---|
| `/` | `/` | conservée | mise à jour contenu |
| `/couverture-bordeaux` | `/couvreur-bordeaux` | **301** | normalisation pattern (couvreur > couverture comme noun-of-art) |
| `/reparation-toiture-bordeaux` | `/reparation-toiture-bordeaux` | conservée | OK |
| `/nettoyage-toiture-bordeaux` | `/nettoyage-toiture-bordeaux` | conservée | OK |
| `/zinguerie-gouttieres-bordeaux` | `/zinguerie-bordeaux` | **301** | clarification (gouttières = sous-page) |
| `/urgence-fuite-toiture-bordeaux` | `/urgence-fuite-toiture-bordeaux` | conservée | OK (mot-clé fort) |
| `/installation-velux-bordeaux` | `/installation-velux-bordeaux` | conservée | OK |
| `/toiture-neuve-bordeaux` | `/toiture-neuve-bordeaux` | conservée | OK |
| `/traitement-hydrofuge-toiture-bordeaux` | `/traitement-hydrofuge-toiture-bordeaux` | conservée | OK |
| `/faitage-toiture-bordeaux` | `/faitage-toiture-bordeaux` | conservée | OK |
| `/ornements-toiture-bordeaux` | `/ornements-toiture-bordeaux` | conservée | OK (faible volume mais conserver le jus) |
| `/charpente-bordeaux-reparation-traitement-renforcement---devis-gratuit` | `/charpente-bordeaux` | **301** | URL atroce → URL propre |
| `/couvreur-pessac` | `/couvreur-pessac` | conservée | OK |
| `/couvreur-talence` | `/couvreur-talence` | conservée | OK |
| `/couvreur-begles` | `/couvreur-begles` | conservée | OK |
| `/nettoyage-toiture-pessac` | `/nettoyage-toiture-pessac` | conservée | OK |
| `/devis-couvreur-gironde` | `/devis` | **301** | shorter = better, garde le hub |
| `/realisations` | `/realisations` | conservée | OK |
| `/merci` | `/merci` | conservée | conversion |
| `/cookies` | `/cookies` | conservée | légal |
| `/politique-de-confidentialite` | `/politique-de-confidentialite` | conservée | légal |

## Pièges à éviter pendant la migration

1. **NE PAS supprimer l'ancien sitemap.xml** avant que Google ait découvert les 301
2. **Garder les 301 en place 24 mois minimum** (norme : indéfiniment, mais minimum 12-24 mois)
3. **Ne pas faire de chaînes de redirection** (301 → 301 → 200 = perte de PageRank). Chaque ancienne URL doit pointer directement à la finale
4. **Vérifier que la canonical sur chaque nouvelle page pointe bien sur elle-même** (pas sur l'ancienne)
5. **Soumettre le nouveau sitemap.xml à Google Search Console** dès go-live
6. **Conserver les paramètres UTM et les hashes** : redirect uniquement le path, garder query string
7. **Tester avec curl -I chaque ancienne URL** avant go-live et 48h après
8. **Préserver le NAP exact** (Nom-Adresse-Téléphone) sur toutes les pages — facteur SEO local critique
9. **Ne pas casser les liens externes** : audit Ahrefs/Majestic des backlinks puis 301 dédiées
10. **Ne pas changer les ancres internes pendant les premières 4 semaines** post-migration
11. **WWW vs non-WWW** : conserver www comme canonique (déjà en place)
12. **Forcer hreflang fr-FR** sur toutes les pages (utile pour Bordeaux+international)

## Implémentation Next.js
Dans `next.config.js` :
```js
async redirects() {
  return [
    { source: '/couverture-bordeaux', destination: '/couvreur-bordeaux', permanent: true },
    { source: '/zinguerie-gouttieres-bordeaux', destination: '/zinguerie-bordeaux', permanent: true },
    { source: '/charpente-bordeaux-reparation-traitement-renforcement---devis-gratuit', destination: '/charpente-bordeaux', permanent: true },
    { source: '/devis-couvreur-gironde', destination: '/devis', permanent: true },
  ];
}
```
