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

/**
 * IMPORTANT — Politique zéro-placeholder :
 * Ce tableau doit UNIQUEMENT contenir des avis Google Business Profile
 * réellement postés par des clients de Couverture Gironde, copiés depuis
 * la fiche GBP par Liroy.
 *
 * Tant que Liroy n'a pas fourni les copies vérifiées (auteur exact tel
 * qu'affiché sur GBP + texte exact + date + ville si mentionnée), ce
 * tableau reste vide. Aucun avis fabriqué ne doit être ajouté.
 *
 * Format à respecter :
 *   {
 *     id: 'avis-xxx',
 *     author: 'Prénom NomInitial' (exactement comme sur GBP),
 *     city: 'Ville' (si mentionnée dans l'avis, sinon champ vide),
 *     rating: 5,
 *     date: 'YYYY-MM-DD' (date de publication GBP),
 *     text: '...' (extrait fidèle, éventuellement raccourci mais non modifié),
 *   }
 */
export const AVIS: AvisClient[] = [];

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
