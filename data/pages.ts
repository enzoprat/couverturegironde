import type { PageEntry, ServiceCategory } from './types';
import { SERVICES } from './services';
import { LOCATIONS } from './locations';

/**
 * REGISTRE DES PAGES — source unique de vérité.
 *
 * Ajouter une nouvelle page = ajouter une entrée ici. Automatiquement :
 *  - apparaît dans `sitemap.xml` (si indexable)
 *  - peut apparaître dans la nav / footer (si visibleIn... true)
 *  - rentre dans le maillage interne (via type/parentSlug/service/ville)
 *  - génère son breadcrumb (via parentSlug)
 */

const STATIC_PAGES: PageEntry[] = [
  // ============ HOMEPAGE ============
  {
    slug: '',
    path: '/',
    type: 'home',
    title: 'Accueil',
    seoTitle:
      'Couvreur à Bordeaux — Démoussage, nettoyage et entretien toiture',
    seoDescription:
      'Couvreur-zingueur à Bordeaux et en Gironde depuis 2005. Démoussage, nettoyage, traitement hydrofuge, réparation, urgence fuite 7j/7. Devis gratuit en 24h, garantie décennale.',
    visibleInNav: true,
    navOrder: 10,
    indexable: true,
    sitemapPriority: 1.0,
    sitemapChangeFrequency: 'weekly',
  },

  // ============ HUB COUVREUR (silo généraliste) ============
  {
    slug: 'couvreur-bordeaux',
    path: '/couvreur-bordeaux',
    type: 'service',
    service: 'couverture',
    title: 'Couvreur Bordeaux',
    seoTitle:
      'Couvreur à Bordeaux — Entreprise de couverture Gironde depuis 2005',
    seoDescription:
      "Entreprise de couverture à Bordeaux et en Gironde depuis 2005. Tous travaux de toiture : démoussage, nettoyage, réparation, zinguerie. Devis gratuit, garantie décennale.",
    indexable: true,
    visibleInFooter: true,
    footerSection: 'services',
  },

  // ============ SILO PRIORITAIRE (démoussage / nettoyage / hydrofuge) ============
  {
    slug: 'demoussage-toiture-bordeaux',
    path: '/demoussage-toiture-bordeaux',
    type: 'service',
    service: 'demoussage',
    title: 'Démoussage toiture Bordeaux',
    navLabel: 'Démoussage toiture',
    seoTitle:
      'Démoussage de toiture à Bordeaux — Élimination mousse et lichens',
    seoDescription:
      "Démoussage professionnel de toiture à Bordeaux et en Gironde. Élimination de la mousse et des lichens, traitement préventif. Devis gratuit, garantie décennale.",
    visibleInNav: true,
    navCategory: 'entretien',
    navOrder: 20,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'nettoyage-toiture-bordeaux',
    path: '/nettoyage-toiture-bordeaux',
    type: 'service',
    service: 'nettoyage',
    title: 'Nettoyage toiture Bordeaux',
    navLabel: 'Nettoyage toiture',
    seoTitle:
      'Nettoyage de toiture à Bordeaux — Démoussage et rinçage haute pression',
    seoDescription:
      "Nettoyage de toiture à Bordeaux et en Gironde par artisan couvreur. Nettoyage haute pression maîtrisé, démoussage et rinçage. Devis gratuit en 24h.",
    visibleInNav: true,
    navCategory: 'entretien',
    navOrder: 21,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'traitement-hydrofuge-toiture-bordeaux',
    path: '/traitement-hydrofuge-toiture-bordeaux',
    type: 'service',
    service: 'hydrofuge',
    title: 'Traitement hydrofuge Bordeaux',
    navLabel: 'Traitement hydrofuge',
    seoTitle:
      'Traitement hydrofuge toiture à Bordeaux — Protection longue durée',
    seoDescription:
      "Traitement hydrofuge de toiture à Bordeaux et en Gironde. Protection longue durée contre l'humidité et les mousses. Application professionnelle, garantie décennale.",
    visibleInNav: true,
    navCategory: 'entretien',
    navOrder: 22,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },

  // ============ SERVICES SECONDAIRES ============
  {
    slug: 'reparation-toiture-bordeaux',
    path: '/reparation-toiture-bordeaux',
    type: 'service',
    service: 'reparation',
    title: 'Réparation toiture Bordeaux',
    navLabel: 'Réparation toiture',
    seoTitle:
      'Réparation de toiture à Bordeaux — Tuiles, fuite, faîtage',
    seoDescription:
      "Réparation de toiture à Bordeaux et en Gironde. Remplacement de tuiles, étanchéité, reprise de faîtage. Diagnostic gratuit, intervention rapide, garantie décennale.",
    visibleInNav: true,
    navCategory: 'travaux',
    navOrder: 30,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'urgence-fuite-toiture-bordeaux',
    path: '/urgence-fuite-toiture-bordeaux',
    type: 'service',
    service: 'urgence',
    title: 'Urgence fuite toiture',
    navLabel: 'Urgence fuite 7j/7',
    seoTitle:
      'Urgence fuite toiture Bordeaux — Intervention rapide 7j/7',
    seoDescription:
      "Urgence fuite toiture à Bordeaux et en Gironde. Intervention rapide 7j/7, mise hors d'eau immédiate, devis de réparation détaillé. Couvreur depuis 2005.",
    visibleInNav: true,
    navCategory: 'urgence',
    navOrder: 40,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'zinguerie-bordeaux',
    path: '/zinguerie-bordeaux',
    type: 'service',
    service: 'zinguerie',
    title: 'Zinguerie Bordeaux',
    navLabel: 'Zinguerie & gouttières',
    seoTitle:
      'Zinguerie et gouttières à Bordeaux — Pose, rénovation, étanchéité',
    seoDescription:
      "Zinguerie à Bordeaux et en Gironde : gouttières, descentes, noues, chéneaux, habillages zinc. Garantie d'étanchéité, finition soignée.",
    visibleInNav: true,
    navCategory: 'travaux',
    navOrder: 31,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'installation-velux-bordeaux',
    path: '/installation-velux-bordeaux',
    type: 'service',
    service: 'velux',
    title: 'Installation Velux Bordeaux',
    navLabel: 'Pose Velux',
    seoTitle:
      'Installation Velux à Bordeaux — Pose et remplacement de fenêtres de toit',
    seoDescription:
      "Installation et remplacement de Velux à Bordeaux et en Gironde. Étanchéité garantie, conseil sur le modèle adapté. Devis gratuit, garantie décennale.",
    visibleInNav: true,
    navCategory: 'urgence',
    navOrder: 41,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'toiture-neuve-bordeaux',
    path: '/toiture-neuve-bordeaux',
    type: 'service',
    service: 'neuve',
    title: 'Toiture neuve Bordeaux',
    navLabel: 'Toiture neuve',
    seoTitle: 'Toiture neuve à Bordeaux — Construction et extension',
    seoDescription:
      "Construction de toiture neuve à Bordeaux et en Gironde : charpente, couverture, zinguerie, isolation. Maîtrise d'œuvre globale, garantie décennale.",
    visibleInNav: true,
    navCategory: 'travaux',
    navOrder: 32,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'faitage-toiture-bordeaux',
    path: '/faitage-toiture-bordeaux',
    type: 'service',
    service: 'faitage',
    title: 'Faîtage toiture Bordeaux',
    navLabel: 'Faîtage toiture',
    seoTitle: 'Faîtage de toiture à Bordeaux — Rénovation et étanchéité',
    seoDescription:
      "Rénovation de faîtage de toiture à Bordeaux et en Gironde. Faîtage scellé ou à sec, étanchéité garantie. Devis gratuit, intervention partout en Gironde.",
    visibleInNav: true,
    navCategory: 'travaux',
    navOrder: 33,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'ornements-toiture-bordeaux',
    path: '/ornements-toiture-bordeaux',
    type: 'service',
    service: 'ornements',
    title: 'Ornements de toiture Bordeaux',
    navLabel: 'Ornements traditionnels',
    seoTitle:
      'Ornements de toiture à Bordeaux — Épis, lambrequins, girouettes',
    seoDescription:
      "Ornements de toiture à Bordeaux : épis, lambrequins, girouettes, rives décoratives. Travail traditionnel et soigné, respect du bâti girondin.",
    visibleInNav: true,
    navCategory: 'travaux',
    navOrder: 34,
    indexable: true,
  },
  {
    slug: 'charpente-bordeaux',
    path: '/charpente-bordeaux',
    type: 'service',
    service: 'charpente',
    title: 'Charpente Bordeaux',
    navLabel: 'Charpente',
    seoTitle:
      'Charpente Bordeaux — Rénovation, traitement, renforcement',
    seoDescription:
      "Travaux de charpente à Bordeaux et en Gironde : diagnostic, traitement des bois, remplacement de pièces, renforcement structurel. Garantie décennale.",
    visibleInNav: true,
    navCategory: 'urgence',
    navOrder: 42,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },

  // ============ GUIDES COMMERCIAUX (money-keyword) ============
  {
    slug: 'guides/prix-demoussage-toiture-bordeaux',
    path: '/guides/prix-demoussage-toiture-bordeaux',
    type: 'guide',
    title: 'Prix démoussage toiture Bordeaux',
    seoTitle:
      'Prix démoussage toiture Bordeaux 2026 — Tarifs et facteurs de prix',
    seoDescription:
      "Combien coûte un démoussage de toiture à Bordeaux en 2026 ? Tarifs au m², facteurs de prix, exemples chiffrés, conseils pour comparer les devis.",
    indexable: true,
    sitemapPriority: 0.7,
  },
  {
    slug: 'guides/aides-renovation-toiture-2026',
    path: '/guides/aides-renovation-toiture-2026',
    type: 'guide',
    title: 'Aides rénovation toiture 2026',
    seoTitle:
      'Aides rénovation toiture 2026 — MaPrimeRénov, éco-PTZ, TVA réduite',
    seoDescription:
      "Quelles aides pour rénover votre toiture en 2026 ? MaPrimeRénov', éco-prêt à taux zéro, TVA 5,5 %, CEE. Conditions, montants et démarches détaillés.",
    indexable: true,
    sitemapPriority: 0.7,
  },
  {
    slug: 'guides/quand-demousser-toiture-gironde',
    path: '/guides/quand-demousser-toiture-gironde',
    type: 'guide',
    title: 'Quand démousser sa toiture en Gironde',
    seoTitle:
      'Quand démousser sa toiture en Gironde ? — Saison et fréquence idéales',
    seoDescription:
      "Quand démousser sa toiture à Bordeaux et en Gironde ? Quelle saison, quelle fréquence ? Signes d'alerte, conseils d'expert, calendrier d'entretien optimal.",
    indexable: true,
    sitemapPriority: 0.7,
  },

  // ============ HUBS VILLES ============
  {
    slug: 'couvreur-merignac',
    path: '/couvreur-merignac',
    type: 'ville',
    ville: 'merignac',
    title: 'Couvreur Mérignac',
    seoTitle:
      'Couvreur à Mérignac — Démoussage, nettoyage, réparation toiture',
    seoDescription:
      "Couvreur à Mérignac depuis 2005. Démoussage, nettoyage, réparation toiture et zinguerie. Atelier sur place rue de Malbos. Devis gratuit, garantie décennale.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-pessac',
    path: '/couvreur-pessac',
    type: 'ville',
    ville: 'pessac',
    title: 'Couvreur Pessac',
    seoTitle: 'Couvreur à Pessac — Démoussage, nettoyage, réparation toiture',
    seoDescription:
      "Couvreur à Pessac : démoussage, nettoyage, réparation toiture et zinguerie. Intervention rapide depuis Mérignac. Devis gratuit, garantie décennale.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-talence',
    path: '/couvreur-talence',
    type: 'ville',
    ville: 'talence',
    title: 'Couvreur Talence',
    seoTitle: 'Couvreur à Talence — Démoussage, nettoyage, réparation toiture',
    seoDescription:
      "Couvreur à Talence : démoussage, nettoyage, réparation toiture et zinguerie. Intervention rapide depuis Mérignac. Devis gratuit, garantie décennale.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-begles',
    path: '/couvreur-begles',
    type: 'ville',
    ville: 'begles',
    title: 'Couvreur Bègles',
    seoTitle: 'Couvreur à Bègles — Démoussage, nettoyage, réparation toiture',
    seoDescription:
      "Couvreur à Bègles : démoussage, nettoyage, réparation toiture et zinguerie. Intervention rapide depuis Mérignac. Devis gratuit, garantie décennale.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-villenave-dornon',
    path: '/couvreur-villenave-dornon',
    type: 'ville',
    ville: 'villenave-dornon',
    title: "Couvreur Villenave-d'Ornon",
    seoTitle:
      "Couvreur à Villenave-d'Ornon — Démoussage, réparation, zinguerie",
    seoDescription:
      "Couvreur à Villenave-d'Ornon : démoussage, nettoyage, réparation toiture et zinguerie. Intervention rapide depuis Mérignac (13 km). Devis gratuit, garantie décennale.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'nettoyage-toiture-pessac',
    path: '/nettoyage-toiture-pessac',
    type: 'service-ville',
    service: 'nettoyage',
    ville: 'pessac',
    parentSlug: 'nettoyage-toiture-bordeaux',
    title: 'Nettoyage toiture Pessac',
    seoTitle:
      'Nettoyage de toiture à Pessac — Démoussage et rinçage haute pression',
    seoDescription:
      "Nettoyage de toiture à Pessac par artisan couvreur depuis 2005. Démoussage, rinçage haute pression maîtrisé. Devis gratuit en 24h, garantie décennale.",
    indexable: true,
  },

  // ============ PAGES INSTITUTIONNELLES ============
  {
    slug: 'realisations',
    path: '/realisations',
    type: 'institutional',
    title: 'Réalisations',
    seoTitle: 'Nos réalisations de toiture à Bordeaux et en Gironde',
    seoDescription:
      "Découvrez nos chantiers récents : démoussage, nettoyage, réparation et zinguerie à Bordeaux et en Gironde. Photos avant/après et détails par projet.",
    visibleInNav: true,
    navOrder: 60,
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
    sitemapPriority: 0.7,
  },
  {
    slug: 'contact',
    path: '/contact',
    type: 'conversion',
    title: 'Contact',
    seoTitle: 'Contact Couverture Gironde — Mérignac, Bordeaux Métropole',
    seoDescription:
      "Contactez Couverture Gironde à Mérignac : adresse, téléphone, email, formulaire. Couvreur sur Bordeaux Métropole depuis 2005. Réponse sous 24h.",
    visibleInNav: true,
    navOrder: 80,
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
    sitemapPriority: 0.8,
  },
  {
    slug: 'a-propos',
    path: '/a-propos',
    type: 'institutional',
    title: 'À propos',
    seoTitle: 'À propos de Couverture Gironde — Artisan couvreur depuis 2005',
    seoDescription:
      "Couverture Gironde, artisan couvreur-zingueur depuis 2005 à Mérignac. Notre équipe, nos valeurs, notre engagement qualité. 20 ans d'expérience en Gironde.",
    visibleInNav: true,
    navOrder: 70,
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
  },
  {
    slug: 'tarifs',
    path: '/tarifs',
    type: 'institutional',
    title: 'Tarifs',
    seoTitle:
      'Tarifs couverture, démoussage et zinguerie à Bordeaux — Prix 2026',
    seoDescription:
      "Tarifs indicatifs 2026 d'un couvreur à Bordeaux et en Gironde : démoussage, nettoyage, hydrofuge, réparation, zinguerie. Prix transparents, devis gratuit personnalisé.",
    visibleInNav: true,
    navOrder: 50,
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
    sitemapPriority: 0.8,
  },
  {
    slug: 'urgence',
    path: '/urgence',
    type: 'institutional',
    title: 'Urgence toiture',
    seoTitle:
      'Urgence toiture Bordeaux — Intervention rapide 7j/7 fuite et tempête',
    seoDescription:
      "Urgence toiture à Bordeaux et en Gironde : intervention rapide 7j/7, mise hors d'eau immédiate, devis de réparation détaillé. Couvreur depuis 2005, garantie décennale.",
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
    sitemapPriority: 0.85,
  },
  {
    slug: 'demande-devis',
    path: '/demande-devis',
    type: 'conversion',
    title: 'Demande de devis',
    seoTitle: 'Demande de devis gratuit — Couverture Gironde',
    seoDescription:
      "Demandez votre devis gratuit pour démoussage, nettoyage, réparation ou réfection de toiture en Gironde. Réponse sous 24h ouvrées, sans engagement.",
    visibleInNav: true,
    navOrder: 60,
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
    sitemapPriority: 0.8,
  },
  {
    slug: 'merci',
    path: '/merci',
    type: 'conversion',
    title: 'Merci',
    seoTitle: 'Merci pour votre demande — Couverture Gironde',
    seoDescription: '',
    indexable: false,
  },

  // ============ LÉGALES ============
  {
    slug: 'mentions-legales',
    path: '/mentions-legales',
    type: 'legal',
    title: 'Mentions légales',
    seoTitle: 'Mentions légales — Couverture Gironde',
    seoDescription:
      'Mentions légales du site couverturegironde.fr — informations éditeur, hébergeur et responsabilité.',
    visibleInFooter: true,
    footerSection: 'legal',
    indexable: true,
    sitemapPriority: 0.3,
  },
  {
    slug: 'politique-confidentialite',
    path: '/politique-confidentialite',
    type: 'legal',
    title: 'Politique de confidentialité',
    seoTitle:
      'Politique de confidentialité — Couverture Gironde',
    seoDescription:
      'Politique de confidentialité du site couverturegironde.fr — traitement des données personnelles, droits RGPD.',
    visibleInFooter: true,
    footerSection: 'legal',
    indexable: true,
    sitemapPriority: 0.3,
  },
  {
    slug: 'cookies',
    path: '/cookies',
    type: 'legal',
    title: 'Cookies',
    seoTitle: 'Politique cookies — Couverture Gironde',
    seoDescription:
      "Politique de gestion des cookies sur le site couverturegironde.fr.",
    visibleInFooter: true,
    footerSection: 'legal',
    indexable: true,
    sitemapPriority: 0.3,
  },
];

/**
 * Construit le registre complet, avec validation runtime des invariants critiques.
 * En cas d'incohérence (slug en double, parent inexistant), erreur dès l'import.
 */
function buildRegistry(): PageEntry[] {
  const pages = [...STATIC_PAGES];

  // Validation : slugs uniques
  const seen = new Map<string, PageEntry>();
  for (const p of pages) {
    if (seen.has(p.slug)) {
      throw new Error(`[pages registry] Slug dupliqué : "${p.slug}"`);
    }
    seen.set(p.slug, p);
  }

  // Validation : références cohérentes
  for (const p of pages) {
    if (p.parentSlug && !seen.has(p.parentSlug)) {
      throw new Error(
        `[pages registry] Parent introuvable pour "${p.slug}" : "${p.parentSlug}"`,
      );
    }
    if (p.service && !SERVICES[p.service]) {
      throw new Error(`[pages registry] Service inconnu pour "${p.slug}" : "${p.service}"`);
    }
    if (p.ville && !LOCATIONS[p.ville]) {
      throw new Error(`[pages registry] Ville inconnue pour "${p.slug}" : "${p.ville}"`);
    }
  }

  return pages;
}

export const PAGES: PageEntry[] = buildRegistry();
export const PAGES_BY_SLUG: ReadonlyMap<string, PageEntry> = new Map(
  PAGES.map((p) => [p.slug, p]),
);

/** Slugs réservés aux pages "service-ville" générées dynamiquement.
 *  Pour ajouter une combinaison non listée dans STATIC_PAGES, l'ajouter ici. */
export const GENERATED_SERVICE_VILLE: Array<{
  service: ServiceCategory;
  ville: string;
}> = [
  // Phase 3 — à ajouter au fur et à mesure (1 page/jour)
  // { service: 'demoussage', ville: 'merignac' },
  // { service: 'demoussage', ville: 'pessac' },
  // ...
];
