import {
  PAGES,
  PAGES_BY_SLUG,
  GENERATED_SERVICE_VILLE,
} from '@/data/pages';
import { SERVICES } from '@/data/services';
import {
  LOCATIONS,
  getLocationBySlug,
  getNeighborLocations,
} from '@/data/locations';
import type { PageEntry, ServiceCategory } from '@/data/types';

/**
 * Helpers du registre — utilisés partout pour le maillage, la nav, le footer,
 * le sitemap et les breadcrumbs.
 *
 * Règle absolue : aucun composant ne doit accéder DIRECTEMENT à `PAGES`.
 * Toujours passer par ces fonctions, garantes de la cohérence.
 */

/** Retourne une page par son slug, ou `undefined` si absente. */
export function getPageBySlug(slug: string): PageEntry | undefined {
  return PAGES_BY_SLUG.get(slug);
}

/** Variante stricte : lance une erreur de build si la page est absente.
 *  À utiliser pour les liens "structurels" du site (header, footer, etc.). */
export function requirePage(slug: string): PageEntry {
  const p = PAGES_BY_SLUG.get(slug);
  if (!p) {
    throw new Error(
      `[pages] requirePage("${slug}") : page introuvable dans le registre.`,
    );
  }
  return p;
}

/** Vérifie l'existence d'une page sans lever d'exception.
 *  À utiliser avant tout rendu de lien dynamique pour éviter les liens morts. */
export function pageExists(slug: string): boolean {
  return PAGES_BY_SLUG.has(slug);
}

/** Toutes les pages indexables (utilisé par sitemap.ts). */
export function getIndexablePages(): PageEntry[] {
  return PAGES.filter((p) => p.indexable !== false && !p.draft);
}

/**
 * Retourne la page HUB (pilier) d'un service — le hub Bordeaux non lié à une
 * ville. Sert de cible de maillage remontant pour les réalisations : chaque
 * chantier pointe vers le pilier de son service (faîtage, zinguerie, couverture…),
 * jamais un fallback générique. `undefined` si aucun hub n'existe pour ce service.
 */
export function getServiceHubPage(
  service: ServiceCategory,
): PageEntry | undefined {
  return PAGES.find(
    (p) =>
      p.type === 'service' && p.service === service && !p.ville && !p.draft,
  );
}

/** Pages destinées au menu principal (header). Triées par `navOrder`. */
export function getNavPages(): PageEntry[] {
  return PAGES.filter((p) => p.visibleInNav && !p.draft).sort(
    (a, b) => (a.navOrder ?? 9999) - (b.navOrder ?? 9999),
  );
}

/**
 * Pages services groupées par catégorie pour le dropdown nav.
 * Retourne uniquement les services avec `navCategory` définie.
 */
export type NavServicesByCategory = {
  entretien: PageEntry[];
  travaux: PageEntry[];
  urgence: PageEntry[];
};

export function getNavServicesByCategory(): NavServicesByCategory {
  const result: NavServicesByCategory = {
    entretien: [],
    travaux: [],
    urgence: [],
  };
  for (const p of PAGES) {
    if (p.visibleInNav && p.navCategory && !p.draft) {
      result[p.navCategory].push(p);
    }
  }
  for (const key of Object.keys(result) as Array<keyof NavServicesByCategory>) {
    result[key].sort((a, b) => (a.navOrder ?? 9999) - (b.navOrder ?? 9999));
  }
  return result;
}

/**
 * Pages top-level de la nav (PAS dans le dropdown Services).
 * Triées par navOrder. Exclut la home (logo) et la page conversion devis (CTA séparé).
 */
export function getNavTopLevelPages(): PageEntry[] {
  return PAGES.filter(
    (p) =>
      p.visibleInNav &&
      !p.navCategory &&
      !p.draft &&
      p.slug !== '' &&
      p.slug !== 'demande-devis',
  ).sort((a, b) => (a.navOrder ?? 9999) - (b.navOrder ?? 9999));
}

/** Pages destinées au footer, regroupées par section. */
export function getFooterSections(): Record<string, PageEntry[]> {
  const sections: Record<string, PageEntry[]> = {
    services: [],
    villes: [],
    entreprise: [],
    legal: [],
  };
  for (const p of PAGES) {
    if (p.visibleInFooter && p.footerSection && !p.draft) {
      sections[p.footerSection]?.push(p);
    }
  }
  return sections;
}

/**
 * Récupère les pages reliées à une page donnée pour le maillage interne.
 *
 * Stratégie :
 *  1. Si `relatedSlugs` explicite, on l'utilise (override manuel).
 *  2. Sinon, on combine selon le type :
 *     - service       → ses pages service-ville + 3 services complémentaires
 *     - ville         → services prioritaires sur cette ville + villes voisines
 *     - service-ville → page service mère + 3 villes voisines + services complémentaires
 *     - autre         → silos parents
 *
 *  Exclut TOUJOURS la page courante elle-même.
 *  Ne retourne QUE des pages existantes dans le registre (pas de lien mort).
 */
export type RelatedPagesResult = {
  /** Le hub service / parent du silo. */
  parent?: PageEntry;
  /** Pages du même silo (ex: autres villes pour ce service). */
  sameSilo: PageEntry[];
  /** Services complémentaires (ex: nettoyage + hydrofuge sur page démoussage). */
  relatedServices: PageEntry[];
  /** Villes proches géographiquement (pour pages ville et service-ville). */
  nearbyLocations: PageEntry[];
  /** Page conversion (toujours présente). */
  conversion: PageEntry;
};

export function getRelatedPages(slug: string): RelatedPagesResult {
  const page = getPageBySlug(slug);
  const conversion = requirePage('demande-devis');

  if (!page) {
    return {
      sameSilo: [],
      relatedServices: [],
      nearbyLocations: [],
      conversion,
    };
  }

  // Override explicite — court-circuite la logique automatique.
  if (page.relatedSlugs?.length) {
    const explicit = page.relatedSlugs
      .map((s) => getPageBySlug(s))
      .filter((p): p is PageEntry => p !== undefined && p.slug !== slug);
    return {
      sameSilo: explicit,
      relatedServices: [],
      nearbyLocations: [],
      conversion,
    };
  }

  const result: RelatedPagesResult = {
    sameSilo: [],
    relatedServices: [],
    nearbyLocations: [],
    conversion,
  };

  if (page.type === 'service' && page.service) {
    // Pages service-ville utilisant ce service
    result.sameSilo = PAGES.filter(
      (p) =>
        p.type === 'service-ville' &&
        p.service === page.service &&
        p.slug !== slug &&
        !p.draft,
    ).slice(0, 5);

    // Services complémentaires
    const svc = SERVICES[page.service];
    result.relatedServices = svc.relatedServices
      .map((relatedId) =>
        PAGES.find(
          (p) =>
            p.type === 'service' &&
            p.service === relatedId &&
            !p.ville &&
            !p.draft,
        ),
      )
      .filter((p): p is PageEntry => p !== undefined && p.slug !== slug)
      .slice(0, 3);
  } else if (page.type === 'ville' && page.ville) {
    // Pages service-ville pour cette ville
    result.sameSilo = PAGES.filter(
      (p) =>
        p.type === 'service-ville' &&
        p.ville === page.ville &&
        p.slug !== slug &&
        !p.draft,
    ).slice(0, 6);

    // Villes voisines
    const neighbors = getNeighborLocations(page.ville, 4).map((l) => l.slug);
    result.nearbyLocations = neighbors
      .map((vSlug) =>
        PAGES.find(
          (p) => p.type === 'ville' && p.ville === vSlug && !p.draft,
        ),
      )
      .filter((p): p is PageEntry => p !== undefined && p.slug !== slug)
      .slice(0, 4);
  } else if (
    page.type === 'service-ville' &&
    page.service &&
    page.ville
  ) {
    // Page parente : le hub service Bordeaux
    if (page.parentSlug) {
      result.parent = getPageBySlug(page.parentSlug);
    }

    // Mêmes services dans villes voisines
    const neighbors = getNeighborLocations(page.ville, 5).map((l) => l.slug);
    result.sameSilo = neighbors
      .map((vSlug) =>
        PAGES.find(
          (p) =>
            p.type === 'service-ville' &&
            p.service === page.service &&
            p.ville === vSlug &&
            !p.draft,
        ),
      )
      .filter((p): p is PageEntry => p !== undefined && p.slug !== slug)
      .slice(0, 4);

    // Services frères dans la MÊME ville
    const svc = SERVICES[page.service];
    result.relatedServices = svc.relatedServices
      .map((relatedId) =>
        PAGES.find(
          (p) =>
            p.type === 'service-ville' &&
            p.service === relatedId &&
            p.ville === page.ville &&
            !p.draft,
        ),
      )
      .filter((p): p is PageEntry => p !== undefined && p.slug !== slug)
      .slice(0, 3);

    // Hub ville si existe
    const villeHub = PAGES.find(
      (p) => p.type === 'ville' && p.ville === page.ville && !p.draft,
    );
    if (villeHub) {
      result.nearbyLocations = [villeHub];
    }
  }

  return result;
}

/**
 * Construit le fil d'Ariane d'une page.
 * Format : `Accueil > [Parent] > Page courante`.
 *
 * Les liens sont validés contre le registre — pas de lien mort possible.
 */
export type BreadcrumbItem = {
  title: string;
  path: string;
  /** True si c'est la page courante (pas de lien). */
  current?: boolean;
};

export function getBreadcrumb(slug: string): BreadcrumbItem[] {
  const page = getPageBySlug(slug);
  if (!page || page.type === 'home') {
    return [{ title: 'Accueil', path: '/', current: page?.type === 'home' }];
  }

  const trail: BreadcrumbItem[] = [{ title: 'Accueil', path: '/' }];

  // Chaîne parentSlug → racine
  const ancestors: PageEntry[] = [];
  let cursor: PageEntry | undefined = page.parentSlug
    ? getPageBySlug(page.parentSlug)
    : undefined;
  while (cursor) {
    ancestors.unshift(cursor);
    cursor = cursor.parentSlug ? getPageBySlug(cursor.parentSlug) : undefined;
  }

  for (const a of ancestors) {
    trail.push({ title: a.title, path: a.path });
  }
  trail.push({ title: page.title, path: page.path, current: true });

  return trail;
}

/** Construit un slug `service-toiture-ville` valide. */
export function buildServiceVilleSlug(
  service: ServiceCategory,
  villeSlug: string,
): string {
  const serviceSlugMap: Record<ServiceCategory, string> = {
    demoussage: 'demoussage-toiture',
    nettoyage: 'nettoyage-toiture',
    hydrofuge: 'traitement-hydrofuge-toiture',
    traitement: 'traitement-toiture',
    reparation: 'reparation-toiture',
    urgence: 'urgence-fuite-toiture',
    zinguerie: 'zinguerie',
    velux: 'installation-velux',
    neuve: 'toiture-neuve',
    faitage: 'faitage-toiture',
    ornements: 'ornements-toiture',
    charpente: 'charpente',
    couverture: 'couvreur',
  };
  return `${serviceSlugMap[service]}-${villeSlug}`;
}

/** Vérifie si un slug appartient au GENERATED_SERVICE_VILLE — utilisé par la route dynamique. */
export function getGeneratedServiceVille(slug: string): {
  service: ServiceCategory;
  ville: string;
} | undefined {
  for (const entry of GENERATED_SERVICE_VILLE) {
    if (buildServiceVilleSlug(entry.service, entry.ville) === slug) {
      return entry;
    }
  }
  return undefined;
}

export { LOCATIONS, SERVICES, getLocationBySlug };
