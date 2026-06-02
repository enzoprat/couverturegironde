# Audit couverturegironde.fr — État au 26/05/2026

## Domaine
- HTTPS OK, HSTS OK, redirect non-www→www 301 OK, http→https 301 OK
- CDN Cloudflare actif (cf-ray, cf-cache HIT)
- Tech actuelle : Webflow (generator meta, cdn website-files.com)

## Sitemap (21 URLs)
- Core : `/`, `/cookies`, `/politique-de-confidentialite`, `/merci`
- Conversion : `/devis-couvreur-gironde`, `/realisations`
- Services Bordeaux (11) : couverture-bordeaux, reparation-toiture-bordeaux, nettoyage-toiture-bordeaux, zinguerie-gouttieres-bordeaux, urgence-fuite-toiture-bordeaux, installation-velux-bordeaux, toiture-neuve-bordeaux, traitement-hydrofuge-toiture-bordeaux, faitage-toiture-bordeaux, ornements-toiture-bordeaux, charpente-bordeaux-reparation-traitement-renforcement---devis-gratuit
- Villes (4) : couvreur-pessac, couvreur-talence, couvreur-begles, nettoyage-toiture-pessac

## Problèmes critiques détectés
1. **Sitemap servi en `application/rss+xml`** (devrait être `application/xml`)
2. **Sitemap sans `<lastmod>`, `<priority>`, `<changefreq>`** — signaux faibles pour Google
3. **robots.txt bloque `/wp-admin/`** : leftover WordPress sur un site Webflow → totalement inutile, suggère manque de soin
4. **URL catastrophe** : `/charpente-bordeaux-reparation-traitement-renforcement---devis-gratuit` (78 caractères, triple `-`, devis-gratuit dans l'URL)
5. **Inconsistance pattern URL** : `couverture-bordeaux` vs `couvreur-pessac` vs `nettoyage-toiture-pessac` → pas scalable
6. **Pages villes quasi-duplicates** : Talence/Bègles/Pessac = même template avec ville remplacée (vérifié par diff HTML — seul le nom change)
7. **8 fonts Google chargés** : Open Sans, Karla, Manrope, Poppins, Raleway, Roboto, Outfit, DM Sans → catastrophe LCP/FCP
8. **Bundle Webflow shared CSS 286 KB** + jQuery 3.5.1 + Webflow JS + Webfont.js + GTM
9. **0 attribut `alt=""` détecté ≠ images sans alt** : à vérifier précisément (homepage a 5 images, charpente 0 alt vide → peut-être renseignés)
10. **Pas de BreadcrumbList schema** détecté — manqué pour le rich snippet fil d'Ariane
11. **HTML 77-85 KB par page** : très lourd pour le contenu réel
12. **Lien interne homepage → /couverture-bordeaux** alors qu'il faudrait `/couvreur-bordeaux` pour la cohérence

## Points positifs à PROTÉGER
- Schemas riches (LocalBusiness, AggregateRating 5/5 sur 54 avis, FAQPage, Service, Offer, OfferCatalog, Organization, ContactPoint, GeoCoordinates, OpeningHoursSpecification, ImageObject)
- Canonical tags présents et corrects
- Open Graph + Twitter Card OK
- WebP utilisé pour les images
- Avis Google solides (5/5, 54 reviews) → signal de confiance fort
- HTTPS + HSTS + redirects propres
- Titles et meta descriptions personnalisés par page
- Domaine âgé de ~2 ans = un peu d'autorité accumulée
- NAP cohérent (65 Rue de Malbos, 33700 Mérignac, +33 7 68 69 78 48)

## Profondeur de maillage (échantillon)
- Page Pessac → 13 liens internes (services + 1 ville)
- Page Couverture-Bordeaux → 12 liens internes (services seulement, AUCUNE ville)
- **Asymétrie** : les pages services ne renvoient pas vers les pages villes = silos cassés

## Verdict global
Site correct mais loin de "machine SEO". Sur 2 ans, **seulement 21 URLs** indexées et **4 pages villes** dont 3 sont du contenu quasi-dupliqué = potentiel non exploité à >90%.
Score actuel estimé : 4.5/10 (potentiel 9.5/10).
