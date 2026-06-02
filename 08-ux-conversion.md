# UX & Conversion — Premium discret

## Principes directeurs
- **Discrétion >> bling** : un site couvreur premium doit inspirer la fiabilité, pas l'agressivité commerciale
- **Mobile-first strict** : 75%+ des recherches "couvreur Bordeaux" sont mobile
- **Friction zéro pour appeler** : le téléphone est le canal principal pour ce métier

## Layout type

### Header (sticky, ~64px)
- Logo gauche
- Menu desktop (Services / Villes / Réalisations / Tarifs / Guides / Avis)
- **Téléphone visible** (icône + numéro cliquable `tel:`)
- Bouton CTA "Devis gratuit" (couleur d'accent discrète)

### Hero
- H1 clair (service + localisation)
- Sous-titre : USP (depuis 2005, garantie décennale, devis 24h)
- 2 CTA : `Appeler maintenant` (primaire) + `Devis en ligne` (secondaire)
- Trust badges en ligne : Décennale + Note Google 5/5 (54 avis) + RGE si éligible
- Image ou vidéo statique (jamais d'autoplay vidéo qui plombe LCP)

### Sections page service
1. Présentation service + bénéfices (3-4 puces)
2. Notre méthode en 5 étapes (icônes + courte description)
3. Tarifs indicatifs (transparence = différenciation forte)
4. Avant/Après (slider léger, 3-4 chantiers)
5. Témoignages locaux (avec ville mentionnée)
6. Zone d'intervention (carte statique + liste villes liées)
7. FAQ (8-10 questions avec schema)
8. CTA fort de fin

### Sections page ville
1. Hero local + USP
2. Services proposés dans cette ville (grille de 6-8 cartes liens)
3. Quartiers couverts (liste + carte)
4. Pourquoi nous choisir à {Ville} (4 raisons)
5. Tarifs locaux indicatifs
6. Réalisations dans la ville (1-3 si dispo)
7. FAQ locale
8. Villes voisines (4 cartes)
9. CTA contact local

### Footer
- 4 colonnes : Services / Villes principales / À propos / Contact
- NAP complet
- Mentions légales + cookies + politique
- Schema Organization + LocalBusiness embarqué
- Plan du site lien direct

## CTAs intelligents
- **Téléphone** : sticky bar mobile EN BAS (pas en haut, plus accessible au pouce)
- **WhatsApp** : bouton flottant uniquement en mobile, après scroll 25% (pas dès l'arrivée)
- **Formulaire** : 3 champs max sur la version courte (Nom, Téléphone, Photo/Description optionnelle)
- **Devis en ligne** : version longue (5-7 champs) sur `/devis` avec étapes visuelles

## Formulaires
- Pas de captcha visible (utiliser Cloudflare Turnstile invisible ou hCaptcha)
- Validation inline en temps réel
- Téléphone : format auto +33
- Champ "Photo de la toiture" optionnel mais MIS EN VALEUR (booste conversion)
- Page `/merci` avec :
  - Numéro de tél mis en avant ("nous vous rappelons sous 2h ouvrées")
  - Lien WhatsApp direct
  - Mention `<meta robots="noindex">`
  - Event GA4 / GTM `lead_submitted`

## Preuves sociales

### Avis
- Widget natif (pas iframe Google qui ralentit) : on tire les avis via API Place Details (cache 24h) ou copie manuelle mensuelle
- **TOUJOURS** afficher : nom prénom, ville, note, date, contenu
- Page dédiée `/avis` avec schema Review
- Avis intégrés dans pages service et pages ville (pertinence locale)

### Réalisations
- Photos haute qualité avant/après
- Lieu (ville + quartier si OK)
- Description courte (problème → solution)
- Schema ImageObject + Article si page dédiée
- Lien vers service et ville correspondants

### Badges de confiance
- Décennale (logo assurance)
- Avis Google 5/5 avec lien direct
- 20 ans d'expérience (depuis 2005)
- Devis sous 24h
- 7j/7 urgences
- Garantie travaux
- Artisan local (différenciation vs majors type IsoTip)

## Téléphone sticky mobile
```
┌───────────────────────────────┐
│   📞 07 68 69 78 48           │
│      Devis gratuit 24h        │
└───────────────────────────────┘
```
- Fond plein, contraste fort
- Toujours visible (sticky bottom)
- Action `tel:+33768697848`
- Tracking GA4 event `phone_click`

## WhatsApp
- Bouton flottant droite bas (52×52px)
- Apparaît après 5s ou 25% scroll
- Message prérempli : "Bonjour, je souhaite un devis pour {service détecté depuis l'URL}"
- Tracking event `whatsapp_click`

## Vitesse perçue
- Skeleton screens sur sections lourdes (réalisations carousel)
- Préchargement liens au hover (Next.js Link prefetch)
- Animations subtiles (fade-in à 200ms, pas plus)

## Accessibilité
- Contraste WCAG AA minimum (AAA sur les CTA)
- Focus visible sur tous les éléments interactifs
- alt sur 100% des images informatives
- `aria-label` sur boutons icônes
- Skip-link pour le menu
- Navigation clavier complète

## Mesure de conversion
Événements GA4 / Plausible custom :
- `phone_click` (header + sticky + footer + page service)
- `whatsapp_click`
- `form_start`, `form_submit`
- `quote_completed` (sur `/merci`)
- `scroll_75` (engagement)
- `realisation_viewed`
