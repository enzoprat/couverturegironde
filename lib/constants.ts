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
  google:
    'https://www.google.com/search?q=Couverture+Gironde+M%C3%A9rignac',
  // Ajouter d'autres profils à mesure
} as const;

export const TRUST = {
  experienceYears: 20, // depuis 2005
  guaranteeYears: 10, // décennale
  googleRating: 5,
  googleReviewCount: 54, // mettre à jour mensuellement
  responseTimeHours: 24,
  emergencyAvailability: '7j/7',
} as const;
