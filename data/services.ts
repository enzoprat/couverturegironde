import type { ServiceCategory } from './types';

/**
 * Catalogue des services proposés.
 *
 * Source de vérité unique pour :
 *  - les cartes services (homepage, footer)
 *  - les pages services Bordeaux (génération via [slug])
 *  - le maillage interne (services complémentaires)
 *  - les schemas Service / OfferCatalog
 */

export type ServiceDefinition = {
  id: ServiceCategory;
  /** Nom court (pour titre de carte, breadcrumb). */
  name: string;
  /** Verbe + objet pour H1 / accroche. */
  shortHeadline: string;
  /** Description courte (1-2 lignes) — utilisée sur les cards. */
  shortDescription: string;
  /** Bénéfice principal (mis en avant). */
  primaryBenefit: string;
  /** Slug du fichier image associé dans /public/images/services/{slug}.webp */
  imageSlug: string;
  /** Identifiant icône Lucide (rendu côté composant). */
  iconName:
    | 'Sparkles'
    | 'Droplets'
    | 'Shield'
    | 'Wrench'
    | 'AlertTriangle'
    | 'Wind'
    | 'Sun'
    | 'Hammer'
    | 'Mountain'
    | 'Award'
    | 'Home'
    | 'TreePine';
  /** Catégorie d'urgence du service (impacte le CTA et le rendu visuel). */
  urgency: 'standard' | 'high' | 'emergency';
  /** Indice de priorité business (1 = silo prioritaire, 5 = secondaire). */
  businessPriority: 1 | 2 | 3 | 4 | 5;
  /** Liste des services complémentaires (cross-sell SEO + UX). */
  relatedServices: ServiceCategory[];
};

export const SERVICES: Record<ServiceCategory, ServiceDefinition> = {
  demoussage: {
    id: 'demoussage',
    name: 'Démoussage toiture',
    shortHeadline: 'Démoussage complet de votre toiture',
    shortDescription:
      'Élimination de la mousse, des lichens et des dépôts par traitement professionnel. Préserve l\u2019étanchéité et prolonge la durée de vie de la couverture.',
    primaryBenefit: 'Toiture saine, étanchéité préservée',
    imageSlug: 'demoussage-toiture',
    iconName: 'Sparkles',
    urgency: 'standard',
    businessPriority: 1,
    relatedServices: ['nettoyage', 'hydrofuge', 'reparation'],
  },
  nettoyage: {
    id: 'nettoyage',
    name: 'Nettoyage toiture',
    shortHeadline: 'Nettoyage en profondeur de votre toiture',
    shortDescription:
      'Nettoyage haute pression maîtrisé, démoussage complémentaire et rinçage. Respect de la tuile, de l\u2019ardoise et de la zinguerie.',
    primaryBenefit: 'Toiture comme neuve, sans dégradation',
    imageSlug: 'nettoyage-toiture',
    iconName: 'Droplets',
    urgency: 'standard',
    businessPriority: 1,
    relatedServices: ['demoussage', 'hydrofuge', 'reparation'],
  },
  hydrofuge: {
    id: 'hydrofuge',
    name: 'Traitement hydrofuge',
    shortHeadline: 'Protection longue durée de votre toiture',
    shortDescription:
      'Application d\u2019un traitement hydrofuge professionnel après démoussage. Protège durablement contre l\u2019humidité, les mousses et le gel.',
    primaryBenefit: 'Toiture protégée jusqu\u2019à 10 ans',
    imageSlug: 'traitement-hydrofuge',
    iconName: 'Shield',
    urgency: 'standard',
    businessPriority: 1,
    relatedServices: ['demoussage', 'nettoyage', 'reparation'],
  },
  traitement: {
    id: 'traitement',
    name: 'Traitement toiture',
    shortHeadline: 'Traitement complet préventif et curatif',
    shortDescription:
      "Hub des traitements de toiture : nettoyage, démoussage, hydrofuge et anti-lichens. Choix de la solution selon l\u2019état, le matériau et l\u2019exposition.",
    primaryBenefit: 'La bonne solution pour votre toiture',
    imageSlug: 'traitement-hydrofuge',
    iconName: 'Shield',
    urgency: 'standard',
    businessPriority: 4,
    relatedServices: ['demoussage', 'nettoyage', 'hydrofuge'],
  },
  reparation: {
    id: 'reparation',
    name: 'Réparation toiture',
    shortHeadline: 'Réparation rapide et durable',
    shortDescription:
      'Remplacement de tuiles cassées, étanchéité, reprise de faîtage, fissures. Diagnostic précis et intervention rapide partout en Gironde.',
    primaryBenefit: 'Diagnostic gratuit, réparation garantie',
    imageSlug: 'reparation-toiture',
    iconName: 'Wrench',
    urgency: 'high',
    businessPriority: 2,
    relatedServices: ['urgence', 'zinguerie', 'demoussage'],
  },
  urgence: {
    id: 'urgence',
    name: 'Urgence fuite toiture',
    shortHeadline: 'Intervention d\u2019urgence 7j/7',
    shortDescription:
      'Fuite, tempête, dégât des eaux ? Intervention sous quelques heures, mise hors d\u2019eau immédiate, devis de réparation détaillé.',
    primaryBenefit: 'Mise hors d\u2019eau immédiate, 7j/7',
    imageSlug: 'urgence-fuite-toiture',
    iconName: 'AlertTriangle',
    urgency: 'emergency',
    businessPriority: 2,
    relatedServices: ['reparation', 'zinguerie', 'hydrofuge'],
  },
  zinguerie: {
    id: 'zinguerie',
    name: 'Zinguerie & gouttières',
    shortHeadline: 'Zinguerie sur mesure',
    shortDescription:
      'Pose et rénovation de gouttières, descentes, noues, chéneaux et habillages zinc. Garantie d\u2019étanchéité, finition soignée.',
    primaryBenefit: 'Évacuation des eaux maîtrisée',
    imageSlug: 'zinguerie-gouttieres',
    iconName: 'Wind',
    urgency: 'high',
    businessPriority: 2,
    relatedServices: ['reparation', 'urgence', 'faitage'],
  },
  velux: {
    id: 'velux',
    name: 'Installation Velux',
    shortHeadline: 'Pose et remplacement de fenêtres de toit',
    shortDescription:
      'Installation, remplacement et étanchéité de fenêtres de toit Velux. Conseil sur le modèle adapté, dimensionnement et orientation.',
    primaryBenefit: 'Luminosité et étanchéité garanties',
    imageSlug: 'installation-velux',
    iconName: 'Sun',
    urgency: 'standard',
    businessPriority: 3,
    relatedServices: ['reparation', 'zinguerie'],
  },
  neuve: {
    id: 'neuve',
    name: 'Toiture neuve',
    shortHeadline: 'Construction de toiture sur mesure',
    shortDescription:
      'Construction complète de toiture pour neuf ou extension : charpente, couverture, zinguerie, isolation. Maîtrise d\u2019\u0153uvre globale.',
    primaryBenefit: 'Une toiture conçue pour durer 50 ans',
    imageSlug: 'toiture-neuve',
    iconName: 'Home',
    urgency: 'standard',
    businessPriority: 3,
    relatedServices: ['charpente', 'zinguerie', 'hydrofuge'],
  },
  faitage: {
    id: 'faitage',
    name: 'Faîtage toiture',
    shortHeadline: 'Rénovation et étanchéité du faîtage',
    shortDescription:
      'Reprise de faîtage scellé ou à sec, remplacement des éléments défectueux. Garantit l\u2019étanchéité au point haut de la toiture.',
    primaryBenefit: 'Étanchéité durable au sommet',
    imageSlug: 'faitage-toiture',
    iconName: 'Mountain',
    urgency: 'standard',
    businessPriority: 3,
    relatedServices: ['reparation', 'zinguerie', 'demoussage'],
  },
  ornements: {
    id: 'ornements',
    name: 'Ornements de toiture',
    shortHeadline: 'Ornements et finitions traditionnelles',
    shortDescription:
      'Pose et restauration d\u2019épis, lambrequins, girouettes, rives décoratives. Travail traditionnel et soigné, respect du bâti girondin.',
    primaryBenefit: 'Caractère préservé du bâti ancien',
    imageSlug: 'ornements-toiture',
    iconName: 'Award',
    urgency: 'standard',
    businessPriority: 4,
    relatedServices: ['faitage', 'reparation', 'charpente'],
  },
  charpente: {
    id: 'charpente',
    name: 'Charpente',
    shortHeadline: 'Rénovation et renforcement de charpente',
    shortDescription:
      'Diagnostic, traitement des bois, remplacement de pièces, renforcement structurel. Traitement curatif insectes et champignons.',
    primaryBenefit: 'Charpente saine et structurellement fiable',
    imageSlug: 'charpente',
    iconName: 'TreePine',
    urgency: 'standard',
    businessPriority: 3,
    relatedServices: ['neuve', 'reparation', 'faitage'],
  },
  couverture: {
    id: 'couverture',
    name: 'Couverture générale',
    shortHeadline: 'Entreprise de couverture à Bordeaux',
    shortDescription:
      'Tous travaux de couverture : neuf, rénovation, réfection, entretien. Tuile, ardoise, zinc, bac acier. 20 ans d\u2019expérience en Gironde.',
    primaryBenefit: 'Un interlocuteur unique pour toute la toiture',
    imageSlug: 'couvreur-bordeaux',
    iconName: 'Hammer',
    urgency: 'standard',
    businessPriority: 2,
    relatedServices: ['demoussage', 'reparation', 'zinguerie'],
  },
};

/** Retourne les services triés par priorité business (1 d'abord). */
export function getServicesByPriority(): ServiceDefinition[] {
  return Object.values(SERVICES).sort(
    (a, b) => a.businessPriority - b.businessPriority,
  );
}

/** Services du silo prioritaire (démoussage / nettoyage / hydrofuge). */
export function getPrioritySiloServices(): ServiceDefinition[] {
  return [SERVICES.demoussage, SERVICES.nettoyage, SERVICES.hydrofuge];
}

/** Services "secondaires" mis en avant à côté du silo. */
export function getSecondaryServices(): ServiceDefinition[] {
  return [SERVICES.reparation, SERVICES.urgence, SERVICES.zinguerie];
}
