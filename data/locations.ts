/**
 * Catalogue des villes desservies.
 *
 * Chaque entrée contient les infos nécessaires à :
 *  - la génération automatique du contenu local
 *  - les schemas Place / City / areaServed
 *  - le maillage géographique (villes voisines)
 *  - les pages de zones desservies
 *
 * Ajouter une nouvelle ville = ajouter une entrée ici, rien d'autre.
 */

export type LocationDefinition = {
  /** Slug URL-safe sans accent, ex. `merignac`, `villenave-dornon`. */
  slug: string;
  /** Nom officiel avec accent et apostrophe corrects, ex. `Villenave-d'Ornon`. */
  name: string;
  /** Nom pour les phrases ("à Mérignac", "depuis Bordeaux"). */
  nameInflected: string;
  postalCode: string;
  inseeCode: string;
  population: number;
  /** Quartiers / lieux-dits notables (pour rédaction contextuelle des pages). */
  quartiers: string[];
  /** Spécificités d'habitat / toiture locales (pour rédaction). */
  habitatNotes: string;
  /** Coordonnées géographiques (latitude/longitude). */
  geo: { lat: number; lng: number };
  /** Slugs des villes voisines (pour maillage géographique). */
  neighbors: string[];
  /** Distance approximative depuis le siège Mérignac (km). */
  distanceFromMerignac: number;
  /** Tier de priorité business (1 = principal, 3 = élargissement). */
  tier: 1 | 2 | 3;
  /** Visible dans le footer (villes principales uniquement). */
  visibleInFooter?: boolean;
};

export const LOCATIONS: Record<string, LocationDefinition> = {
  bordeaux: {
    slug: 'bordeaux',
    name: 'Bordeaux',
    nameInflected: 'Bordeaux',
    postalCode: '33000',
    inseeCode: '33063',
    population: 261000,
    quartiers: [
      'Centre',
      'Chartrons',
      'Saint-Pierre',
      'Caudéran',
      'Saint-Augustin',
      'Bastide',
      'Saint-Michel',
      'Nansouty',
    ],
    habitatNotes:
      "Habitat haussmannien et échoppes bordelaises, toitures majoritairement en tuiles canal traditionnelles et ardoise dans les beaux quartiers. Patrimoine UNESCO imposant le respect du bâti ancien et les autorisations ABF dans les secteurs sauvegardés.",
    geo: { lat: 44.8378, lng: -0.5792 },
    neighbors: ['merignac', 'pessac', 'talence', 'begles', 'bouscat', 'cenon'],
    distanceFromMerignac: 8,
    tier: 1,
    visibleInFooter: true,
  },
  merignac: {
    slug: 'merignac',
    name: 'Mérignac',
    nameInflected: 'Mérignac',
    postalCode: '33700',
    inseeCode: '33281',
    population: 72000,
    quartiers: [
      'Capeyron',
      'Beutre',
      'Bourranville',
      'Pichey',
      'Chemin-Long',
      'Arlac',
    ],
    habitatNotes:
      "Pavillonnaire dominant, tuiles canal et tuiles plates, zones de lotissements années 70-90. Présence d'immeubles collectifs récents avec toits-terrasses.",
    geo: { lat: 44.8332, lng: -0.6432 },
    neighbors: ['bordeaux', 'pessac', 'bouscat', 'eysines', 'saint-medard-en-jalles'],
    distanceFromMerignac: 0,
    tier: 1,
    visibleInFooter: true,
  },
  pessac: {
    slug: 'pessac',
    name: 'Pessac',
    nameInflected: 'Pessac',
    postalCode: '33600',
    inseeCode: '33318',
    population: 65000,
    quartiers: ['Saige', 'Cap-de-Bos', 'Bourgailh', 'Pessac-centre', 'Toctoucau', 'Compostelle'],
    habitatNotes:
      "Mix de pavillons individuels et résidences universitaires, présence du domaine universitaire. Toitures variées : tuiles canal, mécaniques et quelques ardoises dans le centre historique.",
    geo: { lat: 44.8067, lng: -0.6311 },
    neighbors: ['merignac', 'talence', 'gradignan', 'bordeaux', 'villenave-dornon'],
    distanceFromMerignac: 7,
    tier: 1,
    visibleInFooter: true,
  },
  talence: {
    slug: 'talence',
    name: 'Talence',
    nameInflected: 'Talence',
    postalCode: '33400',
    inseeCode: '33522',
    population: 43000,
    quartiers: ['Thouars', 'Médoquine', 'Peixotto', 'Compostelle'],
    habitatNotes:
      "Maisons bourgeoises et échoppes bordelaises caractéristiques. Toitures en tuiles canal traditionnelles, présence de patrimoine architectural à préserver.",
    geo: { lat: 44.8089, lng: -0.5847 },
    neighbors: ['bordeaux', 'pessac', 'begles', 'gradignan'],
    distanceFromMerignac: 9,
    tier: 1,
    visibleInFooter: true,
  },
  begles: {
    slug: 'begles',
    name: 'Bègles',
    nameInflected: 'Bègles',
    postalCode: '33130',
    inseeCode: '33039',
    population: 28000,
    quartiers: ['Mairie', 'Terres-Neuves', 'Birambits', 'Carle-Vernet'],
    habitatNotes:
      "Tissu urbain dense en bord de Garonne, échoppes et pavillons. Programmes immobiliers récents avec toits-terrasses, anciennes maisons ouvrières à tuiles plates.",
    geo: { lat: 44.8089, lng: -0.5475 },
    neighbors: ['bordeaux', 'talence', 'villenave-dornon', 'floirac'],
    distanceFromMerignac: 11,
    tier: 1,
    visibleInFooter: true,
  },
  'villenave-dornon': {
    slug: 'villenave-dornon',
    name: "Villenave-d'Ornon",
    nameInflected: "Villenave-d'Ornon",
    postalCode: '33140',
    inseeCode: '33550',
    population: 33000,
    quartiers: ['Centre', 'Chambéry', 'Courréjean', 'Pont-de-la-Maye'],
    habitatNotes:
      "Pavillonnaire à dominante individuelle, beaucoup de toitures tuiles canal exposées à la mousse en raison du couvert végétal dense.",
    geo: { lat: 44.7775, lng: -0.5667 },
    neighbors: ['begles', 'talence', 'gradignan', 'pessac'],
    distanceFromMerignac: 13,
    tier: 1,
    visibleInFooter: true,
  },
  bouscat: {
    slug: 'bouscat',
    name: 'Le Bouscat',
    // Forme contractée pour "à + Le Bouscat" = "au Bouscat" (grammaire FR).
    // Utilisé dans les phrases courantes ("intervention au Bouscat").
    nameInflected: 'Le Bouscat',
    postalCode: '33110',
    inseeCode: '33069',
    population: 24000,
    quartiers: ['Champ-de-Courses', 'Lyautey', 'Sainte-Germaine'],
    habitatNotes:
      "Quartier résidentiel CSP+, échoppes bordelaises et maisons bourgeoises. Toitures soignées, demande forte d'entretien régulier.",
    geo: { lat: 44.8633, lng: -0.5972 },
    neighbors: ['bordeaux', 'merignac', 'bruges', 'eysines'],
    distanceFromMerignac: 5,
    tier: 2,
  },
  gradignan: {
    slug: 'gradignan',
    name: 'Gradignan',
    nameInflected: 'Gradignan',
    postalCode: '33170',
    inseeCode: '33192',
    population: 26000,
    quartiers: ['Centre', 'Madère', 'Laurenzane', 'Pont-de-la-Maye'],
    habitatNotes:
      "Habitat individuel, beaucoup de pavillons sous couvert arboré favorisant les mousses. CSP+, demande d'entretien préventif fréquente.",
    geo: { lat: 44.7728, lng: -0.6164 },
    neighbors: ['pessac', 'talence', 'villenave-dornon'],
    distanceFromMerignac: 12,
    tier: 2,
  },
  eysines: {
    slug: 'eysines',
    name: 'Eysines',
    nameInflected: 'Eysines',
    postalCode: '33320',
    inseeCode: '33162',
    population: 24000,
    quartiers: ['Centre', 'Le Vigean', 'Carès-Cantinolle', 'Migron'],
    habitatNotes:
      "Pavillonnaire et habitat maraîcher traditionnel, toitures variées avec présence de tuiles canal sur les bâtisses anciennes.",
    geo: { lat: 44.8856, lng: -0.6486 },
    neighbors: ['bouscat', 'merignac', 'bruges', 'saint-medard-en-jalles'],
    distanceFromMerignac: 4,
    tier: 2,
  },
  arcachon: {
    slug: 'arcachon',
    name: 'Arcachon',
    nameInflected: 'Arcachon',
    postalCode: '33120',
    inseeCode: '33009',
    population: 11000,
    quartiers: ['Ville d\u2019Hiver', 'Pereire', 'Le Moulleau', 'Aiguillon', 'Abatilles'],
    habitatNotes:
      "Bâti balnéaire : villas Belle Époque protégées dans la Ville d'Hiver, maisons ostréicoles, pavillons contemporains. Air salin agressif sur la zinguerie : préférer zinc patiné/pré-oxydé ou alliage marine.",
    geo: { lat: 44.6582, lng: -1.1684 },
    neighbors: [],
    distanceFromMerignac: 60,
    tier: 2,
  },
  libourne: {
    slug: 'libourne',
    name: 'Libourne',
    nameInflected: 'Libourne',
    postalCode: '33500',
    inseeCode: '33243',
    population: 25000,
    quartiers: ['Centre', 'Sud', 'Gare', 'Verdet'],
    habitatNotes:
      "Bâti girondin : maisons en pierre et tuile romane/canal, échoppes typiques du Libournais, châteaux viticoles environnants. Sensibilité aux orages d'été et coups de vent sur faîtage et zinguerie.",
    geo: { lat: 44.9133, lng: -0.2436 },
    neighbors: [],
    distanceFromMerignac: 45,
    tier: 2,
  },
};

/** Liste triée par tier puis population décroissante. */
export function getAllLocations(): LocationDefinition[] {
  return Object.values(LOCATIONS).sort(
    (a, b) => a.tier - b.tier || b.population - a.population,
  );
}

/** Villes visibles dans le footer. */
export function getFooterLocations(): LocationDefinition[] {
  return getAllLocations().filter((l) => l.visibleInFooter);
}

/** Récupère une ville par slug — utilisé par les pages dynamiques. */
export function getLocationBySlug(slug: string): LocationDefinition | undefined {
  return LOCATIONS[slug];
}

/** Villes voisines d'une ville donnée, dans l'ordre du tableau. */
export function getNeighborLocations(
  slug: string,
  limit = 4,
): LocationDefinition[] {
  const loc = getLocationBySlug(slug);
  if (!loc) return [];
  return loc.neighbors
    .map((n) => getLocationBySlug(n))
    .filter((l): l is LocationDefinition => Boolean(l))
    .slice(0, limit);
}
