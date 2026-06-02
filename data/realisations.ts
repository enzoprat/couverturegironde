/**
 * Réalisations chantiers — alimenté avec les chantiers réels Couverture Gironde.
 *
 * Ajouter une nouvelle réalisation :
 *  1. Drop photos dans /public/images/realisations/{slug}-avant.webp et -apres.webp
 *  2. Ajouter une entrée ici
 *  3. (Optionnel) créer une page individuelle /realisations/[slug]
 *
 * Convention naming photos :
 *  - {slug}.webp          → image principale (si chantier sans avant/après)
 *  - {slug}-avant.webp    → image AVANT intervention
 *  - {slug}-apres.webp    → image APRÈS intervention
 *  - {slug}-pendant.webp  → image PENDANT (optionnelle, équipe en action)
 *  - {slug}-detail.webp   → vue de détail (optionnelle)
 */

export type Realisation = {
  /** Slug URL-safe utilisé pour les fichiers image et la page individuelle. */
  slug: string;
  /** Titre court du chantier. */
  title: string;
  /** Service principal réalisé (slug ServiceCategory). */
  service: string;
  /** Slug ville (cf. data/locations.ts). */
  villeSlug: string;
  /** Nom ville lisible. */
  villeName: string;
  /** Description courte (1-2 lignes). */
  description: string;
  /** Date (ISO). */
  date: string;
  /** Indique si l'image après-traitement est disponible. */
  hasAvantApres: boolean;
};

export const REALISATIONS: Realisation[] = [
  {
    slug: 'demoussage-toiture-pessac-vignoble-velux-2024',
    title: 'Démoussage toiture tuile canal avec Velux',
    service: 'demoussage',
    villeSlug: 'pessac',
    villeName: 'Pessac',
    description:
      "Démoussage complet d'une toiture en tuiles canal avec Velux, sur une maison face aux vignobles de Pessac-Léognan. Avant/après spectaculaire : disparition totale des mousses et des traînées noires, ravivage de la teinte d'origine.",
    date: '2024-05-29',
    hasAvantApres: true,
  },
  {
    slug: 'demoussage-toiture-merignac-2024',
    title: 'Démoussage toiture pavillon avec cheminée',
    service: 'demoussage',
    villeSlug: 'merignac',
    villeName: 'Mérignac',
    description:
      "Démoussage et nettoyage complet d'une toiture en tuile canal sur pavillon merignacais. Brossage manuel des zones critiques autour de la cheminée briques, traitement anti-mousse rémanent et rinçage des descentes.",
    date: '2024-05-29',
    hasAvantApres: true,
  },
  {
    slug: 'demoussage-toiture-talence-lichens-2026',
    title: 'Démoussage toiture fortement lichénifiée',
    service: 'demoussage',
    villeSlug: 'talence',
    villeName: 'Talence',
    description:
      "Démoussage d'une toiture talençaise envahie par les lichens blancs après plusieurs années sans entretien. Brossage manuel intensif, double passage anti-mousse rémanent, traitement hydrofuge longue durée.",
    date: '2026-05-05',
    hasAvantApres: true,
  },
  {
    slug: 'refection-complete-toiture-villenave-dornon-2024',
    title: 'Réfection complète toiture bâtisse ancienne',
    service: 'reparation',
    villeSlug: 'villenave-dornon',
    villeName: "Villenave-d'Ornon",
    description:
      "Réfection complète d'une toiture en tuile canal sur bâtisse traditionnelle. Dépose de la couverture défoncée, traitement charpente, pose de tuiles neuves type tradition. Avant/après spectaculaire : passage d'une toiture en fin de vie à une couverture neuve garantie.",
    date: '2024-06-27',
    hasAvantApres: true,
  },
  {
    slug: 'toiture-neuve-charpente-begles-2024',
    title: 'Toiture neuve avec charpente et isolation',
    service: 'neuve',
    villeSlug: 'begles',
    villeName: 'Bègles',
    description:
      "Construction d'une toiture neuve sur extension béglaise : charpente bois traditionnelle, voligeage chêne, écran sous-toiture HPV haute perméabilité, isolation laine de verre soufflée en combles perdus. Conformité RE 2020.",
    date: '2024-05-29',
    hasAvantApres: false,
  },
  {
    slug: 'renovation-faitage-bordeaux-centre-2024',
    title: 'Rénovation faîtage centre Bordeaux',
    service: 'faitage',
    villeSlug: 'bordeaux',
    villeName: 'Bordeaux',
    description:
      "Rénovation complète du faîtage d'une échoppe bordelaise du centre-ville. Dépose du faîtage scellé ancien, contrôle de la sous-face, pose de tuiles faîtières neuves avec mortier chaux compatible bâti ancien. Intervention équipe complète en milieu urbain dense.",
    date: '2024-05-29',
    hasAvantApres: true,
  },
  {
    slug: 'toiture-bac-acier-merignac-2024',
    title: 'Toiture bac acier extension',
    service: 'neuve',
    villeSlug: 'merignac',
    villeName: 'Mérignac',
    description:
      "Pose d'une toiture en bac acier teinte rouge brique sur une extension contemporaine à Mérignac. Voligeage, écran HPV, fixation mécanique du bac acier laqué, finitions zinguerie périmétrique.",
    date: '2024-05-29',
    hasAvantApres: true,
  },
  {
    slug: 'zinguerie-abergement-cheminee-merignac-2024',
    title: 'Zinguerie et abergement cheminée',
    service: 'zinguerie',
    villeSlug: 'merignac',
    villeName: 'Mérignac',
    description:
      "Reprise complète de l'abergement zinc d'une cheminée briques sur pavillon merignacais. Dépose de l'ancienne zinguerie défaillante, pose d'un abergement neuf en zinc naturel avec soudure étain sur place, étanchéité garantie décennale.",
    date: '2024-05-29',
    hasAvantApres: true,
  },
];

/** Récupère les N dernières réalisations (par date desc). */
export function getLatestRealisations(limit = 6): Realisation[] {
  return [...REALISATIONS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

/** Filtre par service ou ville. */
export function filterRealisations(opts: {
  service?: string;
  ville?: string;
}): Realisation[] {
  return REALISATIONS.filter((r) => {
    if (opts.service && r.service !== opts.service) return false;
    if (opts.ville && r.villeSlug !== opts.ville) return false;
    return true;
  });
}
