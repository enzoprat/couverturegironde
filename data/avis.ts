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
  /**
   * Lien interne contextuel affiché SOUS l'avis (jamais dans son texte).
   *
   * ⚠️ On n'insère JAMAIS de lien à l'intérieur du texte d'un avis : ce serait
   * altérer le témoignage d'un client (trompeur pour le lecteur, et contraire
   * aux règles Google sur la restitution des avis). Le maillage interne passe
   * par ce tag « prestation », qui reste honnête et tout aussi efficace.
   */
  link?: { label: string; href: string };
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
export const AVIS: AvisClient[] = [
  {
    id: 'avis-louann-menges',
    author: 'Louann Menges',
    city: 'Pompignac',
    rating: 5,
    date: '2026-07-15',
    service: 'Toiture neuve',
    text: "Intervention pour un changement de toiture et de gouttières sur ma maison à Pompignac. Travail sérieux et résultat impeccable. Devis correct.",
    link: { label: 'Toiture neuve', href: '/toiture-neuve-bordeaux' },
  },
  {
    id: 'avis-norman-lieval',
    author: 'Norman Lieval',
    city: '',
    rating: 5,
    date: '2026-05-20',
    service: 'Recherche de fuite',
    text: "Je recommande vivement cette société de couverture ! Suite à plusieurs fuites sur notre toiture, ils sont intervenus rapidement avec beaucoup de professionnalisme. Le diagnostic a été clair, les travaux réalisés avec soin.",
    link: { label: 'Urgence fuite', href: '/urgence-fuite-toiture-bordeaux' },
  },
  {
    id: 'avis-nori-turowski',
    author: 'nori turowski',
    city: '',
    rating: 5,
    date: '2026-05-10',
    text: "Super entreprise et une intervention qui s'est bien passée, merci.",
  },
  {
    id: 'avis-reda-dubois',
    author: 'Réda DUBOIS',
    city: '',
    rating: 5,
    date: '2026-03-18',
    service: 'Réparation de toiture',
    text: "Quel soulagement ! Couverture Gironde a réparé ma toiture en un temps record. Travail net, sans retard et à tarif abordable dans ma ville voisine. J'apprécie la qualité de leur prestation, mon toit est comme neuf. Un grand merci à vous.",
    link: {
      label: 'Réparation de toiture',
      href: '/reparation-toiture-bordeaux',
    },
  },
  {
    id: 'avis-yacine-hafsi',
    author: 'Yacine Hafsi',
    city: 'Bruges',
    rating: 5,
    date: '2026-01-22',
    service: 'Nettoyage de toiture',
    text: 'Nettoyage de toiture effectué sur Bruges, devis correct, intervention rapide, je recommande !',
    link: {
      label: 'Nettoyage de toiture',
      href: '/nettoyage-toiture-bordeaux',
    },
  },
  {
    id: 'avis-jonathan-j',
    author: 'Jonathan J.',
    city: '',
    rating: 5,
    date: '2025-11-12',
    service: 'Zinguerie',
    text: "Remplacement intégral des gouttières, bandeaux et débords de toit sur notre maison. Travail sérieux et de qualité, équipe sympathique et excellente communication tout au long du projet.",
    link: { label: 'Gouttières & zinguerie', href: '/zinguerie-bordeaux' },
  },
  {
    id: 'avis-atlan-arie',
    author: 'Atlan Arié',
    city: 'Bordeaux',
    rating: 5,
    date: '2025-10-20',
    service: 'Urgence fuite',
    text: "Intervention aux Chartrons le week-end dernier, j'avais une fuite dans ma toiture, c'était une tuile cassée. Devis reçu rapidement, intervention le lendemain, travailleurs sérieux, je recommande !",
    link: {
      label: 'Couvreur Chartrons',
      href: '/couvreur-bordeaux-chartrons',
    },
  },
  {
    id: 'avis-nils-bouchilloux',
    author: 'Nils Bouchilloux',
    city: 'Bordeaux',
    rating: 5,
    date: '2025-10-14',
    service: 'Recherche de fuite',
    text: "Suite à une fuite près de la cheminée, j'ai contacté Couverture Gironde. Le couvreur est intervenu rapidement, a trouvé l'origine du problème et a réparé efficacement la toiture. Excellent rapport qualité-prix et très bonne communication. Ils sont venus jusqu'à Nansouty me faire ça, c'est top.",
    link: { label: 'Urgence fuite', href: '/urgence-fuite-toiture-bordeaux' },
  },
  {
    id: 'avis-cargou-consulting',
    author: 'Cargou Consulting',
    city: 'Bordeaux',
    rating: 5,
    date: '2025-10-08',
    service: 'Rénovation de toiture',
    text: "Rénovation complète de la toiture réalisée par Couverture Gironde sur notre maison à Bordeaux. Résultat impeccable, délais respectés et devis clair dès le départ. Merci pour le professionnalisme, je conseille cette entreprise de couverture sans hésitation.",
    link: { label: 'Couvreur Bordeaux', href: '/couvreur-bordeaux' },
  },
  {
    id: 'avis-marguerite-juille',
    author: 'Marguerite Juillé',
    city: '',
    rating: 5,
    date: '2025-01-16',
    text: "Je recommande vivement cette entreprise. Très beau travail ! Bravo ! J'ai été recontactée très rapidement après avoir envoyé une photo du travail à réaliser, après quelques précisions je recevais un devis chiffré en bonne et due forme.",
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
