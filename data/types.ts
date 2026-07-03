/**
 * Types centraux du registre des pages.
 * Toute page indexable du site PASSE par ces types.
 */

export type PageType =
  | 'home'
  | 'service'
  | 'ville'
  | 'service-ville'
  | 'realisation'
  | 'guide'
  | 'conversion'
  | 'institutional'
  | 'legal';

export type ServiceCategory =
  | 'demoussage'
  | 'nettoyage'
  | 'hydrofuge'
  | 'traitement'
  | 'reparation'
  | 'urgence'
  | 'zinguerie'
  | 'velux'
  | 'neuve'
  | 'faitage'
  | 'ornements'
  | 'charpente'
  | 'couverture';

/**
 * Catégories du dropdown nav "Services" (organisation par intention utilisateur).
 *  - entretien : démoussage, nettoyage, hydrofuge (silo prioritaire)
 *  - travaux   : réparation, zinguerie, faîtage, ornements, toiture neuve
 *  - urgence   : urgence fuite, velux, charpente (interventions spécifiques)
 */
export type NavCategory = 'entretien' | 'travaux' | 'urgence';

export type PageEntry = {
  /** Slug sans slash initial, ex. `demoussage-toiture-bordeaux`. La home a slug `''`. */
  slug: string;
  /** URL complète (avec `/`). Dérivée du slug. */
  path: string;
  /** Type structurel pour le pilotage du maillage et du sitemap. */
  type: PageType;
  /** Titre court (utilisé pour breadcrumb, cards, ancres internes). */
  title: string;
  /** Titre SEO complet (balise `<title>` sans le suffixe template). */
  seoTitle: string;
  /** Meta description 150-160 caractères. */
  seoDescription: string;
  /** H1 affiché sur la page. Différent du title si bénéfique. */
  h1?: string;
  /** Catégorie service si pertinent (pages service et service-ville). */
  service?: ServiceCategory;
  /** Slug de la ville si pertinent (pages ville et service-ville). */
  ville?: string;
  /** Slug parent dans la hiérarchie. Vide = enfant direct de la home. */
  parentSlug?: string;
  /** Slugs explicitement reliés (override du maillage automatique). */
  relatedSlugs?: string[];
  /** Visible dans la nav header (item top-level OU dans dropdown). */
  visibleInNav?: boolean;
  /** Position de tri dans la nav (asc). */
  navOrder?: number;
  /** Si défini, la page est groupée dans le dropdown "Services" sous cette catégorie. */
  navCategory?: NavCategory;
  /** Label court pour le dropdown nav (sinon `title`). */
  navLabel?: string;
  /** Visible dans le footer. Par défaut : false. */
  visibleInFooter?: boolean;
  /** Section du footer où apparaître. */
  footerSection?: 'services' | 'villes' | 'entreprise' | 'legal';
  /** Indexable et présent dans sitemap. Par défaut : true. */
  indexable?: boolean;
  /** Priorité sitemap.xml (0.0 à 1.0). Par défaut calculée selon `type`. */
  sitemapPriority?: number;
  /** Fréquence de changement sitemap.xml. */
  sitemapChangeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  /** Indique que la page est encore à construire — n'apparaît pas dans le sitemap ni le maillage. */
  draft?: boolean;
};
