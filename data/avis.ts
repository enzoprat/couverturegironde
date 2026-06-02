/**
 * Avis clients — à éditer manuellement.
 *
 * En phase 1, on alimente à la main. En phase ultérieure, on synchronisera
 * automatiquement depuis Google Places API (script /scripts/sync-google-reviews.ts).
 *
 * Règles :
 *  - mention de la ville obligatoire (signal SEO local)
 *  - mention du service quand pertinent
 *  - garder 6 à 10 avis affichables au total
 *  - tourner régulièrement pour fraîcheur
 */

export type AvisClient = {
  /** Identifiant stable (pour key React et tri). */
  id: string;
  /** Nom + initiale (RGPD : pas de nom complet). */
  author: string;
  /** Ville du client (signal local). */
  city: string;
  /** Note sur 5. */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Date affichée ("Janvier 2026") — ISO en interne. */
  date: string;
  /** Service concerné, pour filtrer si besoin. */
  service?: string;
  /** Texte de l'avis (max ~3 lignes recommandées). */
  text: string;
};

export const AVIS: AvisClient[] = [
  {
    id: 'avis-001',
    author: 'Marie L.',
    city: 'Mérignac',
    rating: 5,
    date: '2026-03-12',
    service: 'Démoussage toiture',
    text: "Équipe ponctuelle, professionnelle et soigneuse. Démoussage et traitement hydrofuge faits dans les règles, ma toiture est comme neuve. Devis transparent, je recommande.",
  },
  {
    id: 'avis-002',
    author: 'Thomas D.',
    city: 'Pessac',
    rating: 5,
    date: '2026-02-28',
    service: 'Urgence fuite toiture',
    text: "Intervention en urgence un dimanche soir après une grosse averse. Réactivité impeccable, mise hors d'eau immédiate, et réparation propre la semaine suivante. Service rare.",
  },
  {
    id: 'avis-003',
    author: 'Sophie B.',
    city: 'Talence',
    rating: 5,
    date: '2026-02-10',
    service: 'Nettoyage toiture',
    text: "Travail propre, respectueux du voisinage et du jardin. L'artisan a pris le temps d'expliquer chaque étape. Tarifs honnêtes, exactement le devis. Très satisfaite.",
  },
  {
    id: 'avis-004',
    author: 'Jean-Pierre M.',
    city: 'Bordeaux',
    rating: 5,
    date: '2026-01-22',
    service: 'Réparation toiture',
    text: "Diagnostic gratuit en moins de 24h. Remplacement de tuiles et reprise du faîtage, fini en une journée. Aucun stress, aucune surprise. Bravo à toute l'équipe.",
  },
  {
    id: 'avis-005',
    author: 'Caroline R.',
    city: 'Le Bouscat',
    rating: 5,
    date: '2026-01-08',
    service: 'Zinguerie',
    text: "Pose de nouvelles gouttières en zinc, finition irréprochable. Conseils précieux sur l'évacuation des eaux. On sent l'artisan qui connaît son métier.",
  },
  {
    id: 'avis-006',
    author: 'Olivier P.',
    city: 'Villenave-d\u2019Ornon',
    rating: 5,
    date: '2025-12-15',
    service: 'Démoussage toiture',
    text: "Toiture nettoyée et traitée en hydrofuge avant l'hiver. Tarif compétitif, équipe sérieuse. Une vraie tranquillité d'esprit pour les prochaines années.",
  },
];

/** Format affichable de la date pour l'UI ("Mars 2026"). */
export function formatAvisDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
}

/** Récupère N avis aléatoires (mais stables pour SSR). */
export function getAvis(limit = 6, filterCity?: string): AvisClient[] {
  let filtered = AVIS;
  if (filterCity) {
    filtered = AVIS.filter(
      (a) =>
        a.city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') ===
        filterCity.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
    );
  }
  return filtered.slice(0, limit);
}
