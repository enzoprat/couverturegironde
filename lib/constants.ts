/**
 * Constantes globales — NAP, contacts, URLs canoniques.
 * Source unique de vérité pour le NAP (Name-Address-Phone) — critique SEO local.
 * Toute variation entre site/GBP/annuaires = pénalité.
 */

export const SITE = {
  name: 'Couverture Gironde',
  legalName: 'Couverture Gironde',
  url: 'https://www.couverturegironde.fr',
  locale: 'fr-FR',
  tagline:
    'Couvreur-zingueur à Bordeaux et en Gironde depuis 2005. Démoussage, nettoyage, réparation, urgence 7j/7.',
  foundingYear: 2005,
} as const;

export const NAP = {
  name: 'Couverture Gironde',
  streetAddress: '65 Rue de Malbos',
  postalCode: '33700',
  addressLocality: 'Mérignac',
  addressRegion: 'Nouvelle-Aquitaine',
  addressCountry: 'FR',
  // Téléphone international + version locale d'affichage
  phone: '+33768697848',
  phoneDisplay: '07 68 69 78 48',
  phoneHref: 'tel:+33768697848',
  // WhatsApp : format international sans + (0768697848 → 33768697848)
  whatsappHref: 'https://wa.me/33768697848',
  geo: {
    latitude: 44.8332,
    longitude: -0.6432,
  },
} as const;

/**
 * Clé Web3Forms — backend du formulaire de demande de devis.
 * Clé publique par design (visible côté client dans le bundle JS).
 * Le mail destinataire est configuré côté Web3Forms (non-visible côté site).
 */
export const WEB3FORMS_KEY = '8fec8ecc-b7b8-4fe4-85cd-021052e0b9ce';

export const OPENING_HOURS = {
  dayOfWeek: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  opens: '06:00',
  closes: '22:00',
} as const;

export const SOCIAL = {
  // Fiche Google Business Profile (lien court g.page officiel).
  google: 'https://share.google/RlXzdyVol8f1t6nKO',
  // Deep-link "écrire un avis" — ouvre directement la fenêtre de rédaction
  // d'avis Google. À utiliser en CTA de sollicitation d'avis.
  googleReview: 'https://g.page/r/CYcnAtj5cBPVEAE/review',
  // Carte intégrée de la fiche GBP (footer sitewide). Le clic sur la carte
  // renvoie vers la fiche (SOCIAL.google), pas vers une simple adresse.
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.2839323614126!2d-0.6520652882571153!3d44.81577997634758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d91c3c0a8983%3A0xd51370f9d8022787!2sCouverture%20Gironde!5e0!3m2!1sfr!2sfr!4v1785602086514!5m2!1sfr!2sfr',
  // Ajouter d'autres profils à mesure
} as const;

export const TRUST = {
  experienceYears: 20, // depuis 2005
  guaranteeYears: 10, // décennale
  googleRating: 5,
  // Vérifié sur fiche GBP réelle (2026-08-01) : 5,0 / 55 avis
  // ⚠️ Mettre à jour mensuellement avec le nombre exact affiché sur GBP
  googleReviewCount: 55,
  responseTimeHours: 24,
  emergencyAvailability: '7j/7',
} as const;
