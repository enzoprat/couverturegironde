import type {
  Article,
  BreadcrumbList,
  FAQPage,
  HowTo,
  ImageObject,
  LocalBusiness,
  Organization,
  Person,
  Place,
  Review,
  Service,
  Thing,
  WebSite,
  WithContext,
} from 'schema-dts';
import { NAP, OPENING_HOURS, SITE, TRUST } from '@/lib/constants';
import { getLocationBySlug, LOCATIONS } from '@/data/locations';
import type { BreadcrumbItem } from '@/lib/pages';

/**
 * Schemas JSON-LD — source unique. Tous typés via schema-dts.
 *
 * Convention : `getXSchema` retourne le payload prêt à passer à `<JsonLd>`.
 */

/* ============================================================
   SITEWIDE (embarqués dans le layout root)
   ============================================================ */

export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    foundingDate: String(SITE.foundingYear),
    // E-E-A-T : signaler explicitement le fondateur (Person) pour Google.
    founder: {
      '@type': 'Person',
      name: 'Liroy Delsuc',
      jobTitle: 'Couvreur-zingueur, fondateur',
      worksFor: { '@id': `${SITE.url}/#organization` },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.streetAddress,
      postalCode: NAP.postalCode,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      addressCountry: NAP.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: NAP.phone,
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['French'],
    },
  };
}

/**
 * Schema Person pour Liroy Delsuc — signal E-E-A-T fort.
 * Émis sur les pages piliers signées par lui, avec `@id` crossref-able.
 */
export function getPersonLiroySchema(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/#liroy-delsuc`,
    name: 'Liroy Delsuc',
    givenName: 'Liroy',
    familyName: 'Delsuc',
    jobTitle: 'Couvreur-zingueur, fondateur de Couverture Gironde',
    description:
      "Artisan couvreur-zingueur à Bordeaux et en Gironde depuis 2005. Fondateur de Couverture Gironde, atelier au 65 rue de Malbos à Mérignac. 20 ans d'expérience sur le bâti bordelais.",
    worksFor: { '@id': `${SITE.url}/#organization` },
    knowsAbout: [
      'Couverture toiture',
      'Zinguerie',
      'Démoussage toiture',
      'Traitement hydrofuge',
      'Charpente traditionnelle',
      'Étanchéité toit-terrasse',
      'Pose Velux',
      'Tuile canal traditionnelle',
      'Ardoise naturelle',
    ],
    workLocation: {
      '@type': 'Place',
      name: 'Atelier Couverture Gironde',
      address: {
        '@type': 'PostalAddress',
        streetAddress: NAP.streetAddress,
        postalCode: NAP.postalCode,
        addressLocality: NAP.addressLocality,
        addressRegion: NAP.addressRegion,
        addressCountry: NAP.addressCountry,
      },
    },
  };
}

export function getWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'fr-FR',
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

export function getLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/og-default.jpg`,
    telephone: NAP.phone,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.streetAddress,
      postalCode: NAP.postalCode,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...OPENING_HOURS.dayOfWeek],
        opens: OPENING_HOURS.opens,
        closes: OPENING_HOURS.closes,
      },
    ],
    // NOTE : aggregateRating retiré du LocalBusiness sitewide.
    // Quand un Service schema référence le LocalBusiness via @id, Google
    // résout la référence et rattache aggregateRating au contexte Service,
    // ce qui est invalide ("Type d'objet non valide" dans GSC sur
    // /charpente-bordeaux et autres pages service).
    // L'AggregateRating + Reviews individuels sont injectés sur les pages
    // où c'est pertinent (home, /a-propos, /tarifs) via getReviewSchemas
    // qui produit des Review individuels. Google peut afficher les étoiles
    // à partir de ces Reviews + AggregateRating visible dans le HTML.
    areaServed: Object.values(LOCATIONS).map((l) => ({
      '@type': 'City',
      name: l.name,
    })),
  };
}

/* ============================================================
   PAGE-SPECIFIC
   ============================================================ */

/** BreadcrumbList — généré à partir du fil d'Ariane dynamique. */
export function getBreadcrumbSchema(
  items: BreadcrumbItem[],
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.title,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

/** Service générique (pages service Bordeaux).
 *
 * NOTE : on ne joint PAS d'`aggregateRating` ici. Google ne supporte pas les
 * rich results review snippet sur le type `Service` (uniquement Book, Course,
 * Event, HowTo, LocalBusiness, Movie, Product, Recipe, SoftwareApplication).
 * Ajouter aggregateRating sur Service génère l'erreur "Type d'objet non valide
 * pour le champ <parent_node>" dans Google Search Console.
 * L'AggregateRating est porté par LocalBusiness@sitewide (cf. layout root).
 */
export function getServiceSchema(params: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  imageUrl?: string;
}): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    serviceType: params.serviceType,
    url: params.url,
    image: params.imageUrl,
    provider: { '@id': `${SITE.url}/#localbusiness` },
    areaServed: Object.values(LOCATIONS).map((l) => ({
      '@type': 'City',
      name: l.name,
    })),
  };
}

/** Service localisé à une ville (pages service-ville). */
export function getLocalServiceSchema(params: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  villeSlug: string;
  imageUrl?: string;
}): WithContext<Service> {
  const ville = getLocationBySlug(params.villeSlug);
  const cityName = ville?.name ?? params.villeSlug;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    serviceType: params.serviceType,
    url: params.url,
    image: params.imageUrl,
    provider: { '@id': `${SITE.url}/#localbusiness` },
    areaServed: {
      '@type': 'City',
      name: cityName,
      ...(ville
        ? {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: ville.geo.lat,
              longitude: ville.geo.lng,
            },
          }
        : {}),
    },
  };
}

/** FAQPage — uniquement quand on a réellement des questions. */
export function getFAQSchema(
  items: Array<{ question: string; answer: string }>,
): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/* ============================================================
   PRICE CATALOG — page /tarifs
   ============================================================ */

export type TarifSection = {
  title: string;
  services: Array<{ name: string; range: string; details: string }>;
};

/**
 * Parse une chaîne de range type "12 – 19 €/m²", "180 – 480 €", "Gratuit".
 * Retourne { min, max, unit } ou null si non parsable.
 */
function parsePriceRange(
  range: string,
): { min: number; max: number; unit: string | null } | null {
  if (/gratuit/i.test(range)) {
    return { min: 0, max: 0, unit: null };
  }
  // "12 – 19 €/m²" or "180 – 480 €" — supporte tiret simple et demi-cadratin
  const m = range.match(/(\d[\d\s]*)\s*[–-]\s*(\d[\d\s]*)\s*€(?:\s*\/\s*(\S+))?/);
  if (!m || !m[1] || !m[2]) return null;
  const min = Number(m[1].replace(/\s/g, ''));
  const max = Number(m[2].replace(/\s/g, ''));
  const unit = m[3] ?? null;
  if (!Number.isFinite(min) || !Number.isFinite(max)) return null;
  return { min, max, unit };
}

/**
 * OfferCatalog pour /tarifs. Aide les LLMs (ChatGPT/Perplexity/Claude/AIO) à
 * citer notre grille tarifaire au lieu de moyennes génériques.
 *
 * Note : typage en `Record<string, unknown>` car schema-dts n'a pas de type
 * pratique pour OfferCatalog avec sous-catalogues récursifs. Le JSON émis est
 * valide schema.org (vérifié rich-results validator).
 */
export function getPriceCatalogSchema(
  sections: TarifSection[],
  pageUrl: string,
): WithContext<Thing> {
  // schema-dts est strict sur les sous-types ; on construit en objet ouvert
  // puis on cast en WithContext<Thing>. Le JSON émis est valide schema.org
  // (vérifié rich-results validator).
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `Tarifs Couverture Gironde ${new Date().getFullYear()}`,
    url: pageUrl,
    provider: { '@id': `${SITE.url}/#localbusiness` },
    itemListElement: sections.map((section, sIdx) => ({
      '@type': 'OfferCatalog',
      name: section.title,
      itemListElement: section.services.map((s, idx) => {
        const parsed = parsePriceRange(s.range);
        const offer: Record<string, unknown> = {
          '@type': 'Offer',
          position: sIdx * 100 + idx + 1,
          itemOffered: {
            '@type': 'Service',
            name: s.name,
            description: s.details,
            provider: { '@id': `${SITE.url}/#localbusiness` },
            areaServed: [
              { '@type': 'City', name: 'Bordeaux' },
              { '@type': 'AdministrativeArea', name: 'Gironde' },
            ],
          },
        };
        if (parsed) {
          if (parsed.min === 0 && parsed.max === 0) {
            offer.price = '0';
            offer.priceCurrency = 'EUR';
          } else {
            offer.priceSpecification = {
              '@type': 'PriceSpecification',
              priceCurrency: 'EUR',
              minPrice: parsed.min,
              maxPrice: parsed.max,
              valueAddedTaxIncluded: false,
              ...(parsed.unit
                ? {
                    referenceQuantity: {
                      '@type': 'QuantitativeValue',
                      value: 1,
                      unitText: parsed.unit,
                    },
                  }
                : {}),
            };
          }
        }
        return offer;
      }),
    })),
  };
  return schema as unknown as WithContext<Thing>;
}

/** Article — pour guides et pages détaillées éventuelles. */
export function getArticleSchema(params: {
  headline: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
}): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    url: params.url,
    image: params.imageUrl,
    // Auteur = Person Liroy (E-E-A-T signal), publisher = Organization
    author: { '@id': `${SITE.url}/#liroy-delsuc` },
    publisher: { '@id': `${SITE.url}/#organization` },
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
  };
}

/** Helper pour combiner plusieurs schemas en un seul tableau. */
export function combineSchemas(
  ...schemas: WithContext<Thing>[]
): WithContext<Thing>[] {
  return schemas;
}

/* ============================================================
   HOW-TO — étapes d'une méthode (pages services)
   ============================================================ */

export function getHowToSchema(params: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string }>;
  imageUrl?: string;
}): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    totalTime: params.totalTime,
    image: params.imageUrl,
    step: params.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/* ============================================================
   PLACE — siège géolocalisé (NAP)
   ============================================================ */

export function getPlaceSchema(): WithContext<Place> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: NAP.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.streetAddress,
      postalCode: NAP.postalCode,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
  };
}

/* ============================================================
   REVIEW — avis individuels (en complément de l'AggregateRating)
   ============================================================ */

export function getReviewSchemas(
  reviews: Array<{
    author: string;
    rating: number;
    date: string;
    text: string;
  }>,
): WithContext<Review>[] {
  return reviews.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: r.date,
    reviewBody: r.text,
    itemReviewed: { '@id': `${SITE.url}/#localbusiness` },
  }));
}

/* ============================================================
   IMAGE OBJECT — pour images marquantes (avant/après, hero)
   ============================================================ */

export function getImageObjectSchema(params: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
}): WithContext<ImageObject> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: params.url,
    caption: params.caption,
    ...(params.width !== undefined && { width: `${params.width}` }),
    ...(params.height !== undefined && { height: `${params.height}` }),
    creditText: SITE.name,
    creator: { '@id': `${SITE.url}/#organization` },
    copyrightNotice: `© ${new Date().getFullYear()} ${SITE.legalName}`,
  };
}

/* ============================================================
   LOCAL BUSINESS spécialisé par ville (pages villes)
   ============================================================ */

export function getLocalBusinessAtCitySchema(params: {
  cityName: string;
  cityLat: number;
  cityLng: number;
  url: string;
}): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: `${SITE.name} — ${params.cityName}`,
    url: params.url,
    telephone: NAP.phone,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.streetAddress,
      postalCode: NAP.postalCode,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: params.cityName,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: params.cityLat,
        longitude: params.cityLng,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: TRUST.googleRating,
      reviewCount: TRUST.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
