/**
 * Banque de FAQ — pilote des sections FAQ contextuelles.
 *
 * Organisation :
 *  - FAQ "general" : réutilisable sur la home et pages institutionnelles
 *  - FAQ "per-service" : injectée sur les pages services correspondantes
 *  - FAQ "per-ville" : injectée sur les pages villes (peut être combinée avec service)
 *
 * Règle SEO : la balise FAQPage ne s'injecte QUE si la FAQ est réellement
 * visible sur la page. Pas de FAQ fantôme.
 */

export type FAQItem = {
  question: string;
  /** Réponse en HTML léger (paragraphes courts conseillés). */
  answer: string;
};

export const FAQ_GENERAL: FAQItem[] = [
  {
    question: 'Quels services propose Couverture Gironde ?',
    answer:
      "Nous intervenons sur l'ensemble des travaux de toiture : démoussage, nettoyage, traitement hydrofuge, réparation de fuite, zinguerie et gouttières, installation de Velux, faîtage, charpente et travaux neufs. Notre spécialité prioritaire est l'entretien de toiture (démoussage + nettoyage + hydrofuge).",
  },
  {
    question: 'Sur quel secteur intervenez-vous ?',
    answer:
      "Atelier basé à Mérignac, nous intervenons sur tout Bordeaux Métropole : Bordeaux, Mérignac, Pessac, Talence, Bègles, Villenave-d'Ornon, Le Bouscat, Gradignan, Eysines, Bruges, et toute la Gironde sur devis (Sud-Gironde, Médoc, Libournais).",
  },
  {
    question: 'Quel est le délai pour obtenir un devis ?',
    answer:
      "Sous 24h ouvrées. Nous étudions votre demande, vous proposons une visite si nécessaire (gratuite et sans engagement) puis vous envoyons un devis chiffré ligne par ligne, transparent.",
  },
  {
    question: 'Êtes-vous couverts par une assurance décennale ?',
    answer:
      "Oui. Tous nos chantiers sont couverts par notre assurance décennale. Vous êtes protégé pendant 10 ans après réception des travaux. Le justificatif d'assurance peut être joint à votre devis sur demande.",
  },
  {
    question: 'Êtes-vous disponibles en urgence ?',
    answer:
      "Oui, 7 jours sur 7 pour les fuites et dégâts urgents. Nous effectuons une mise hors d'eau dans les heures qui suivent votre appel, puis vous remettons un devis détaillé pour la réparation définitive.",
  },
  {
    question: 'Quelle est votre méthode de paiement ?',
    answer:
      "Acompte raisonnable à la signature (30 % maximum), solde à la fin du chantier après vérification de votre satisfaction. Paiement par virement bancaire ou chèque. Aucun acompte exigé sur les devis inférieurs à 500 €.",
  },
];

export const FAQ_DEMOUSSAGE: FAQItem[] = [
  {
    question: 'À quelle fréquence faut-il démousser sa toiture en Gironde ?',
    answer:
      "Le climat océanique de la Gironde favorise la pousse de mousses et lichens. Un démoussage tous les 3 à 5 ans est recommandé, plus fréquent (2-3 ans) si votre toiture est ombragée ou exposée au nord.",
  },
  {
    question: 'Démoussage par grattage ou par traitement chimique ?',
    answer:
      "Notre méthode combine les deux : brossage manuel des zones les plus colonisées puis application d'un produit anti-mousse adapté à votre matériau (tuile, ardoise, fibrociment). C'est l'approche la plus durable, sans abîmer la toiture.",
  },
  {
    question: 'Combien coûte un démoussage de toiture à Bordeaux ?',
    answer:
      "À titre indicatif : entre 12 et 25 €/m² selon la surface, l'accessibilité et l'état de la toiture. Un démoussage complet avec traitement hydrofuge se situe généralement entre 1 500 € et 3 500 € pour une maison individuelle.",
  },
  {
    question: 'Faut-il faire un démoussage avant un hydrofuge ?',
    answer:
      "Oui, impérativement. L'hydrofuge ne doit jamais être appliqué sur une toiture sale ou colonisée par les mousses. Notre prestation combine systématiquement les deux étapes pour un résultat durable.",
  },
  {
    question: 'Combien de temps dure un démoussage de toiture ?',
    answer:
      "Compter 1 à 2 jours pour une toiture de maison individuelle de 100 à 150 m² (incluant le brossage, le démoussage chimique et le rinçage). Si traitement hydrofuge inclus, ajouter une demi-journée.",
  },
];

export const FAQ_NETTOYAGE: FAQItem[] = [
  {
    question: 'Faut-il nettoyer ou démousser sa toiture ?',
    answer:
      "Les deux opérations sont complémentaires. Le démoussage élimine les végétaux installés, le nettoyage retire les dépôts (poussière, pollution, lichens morts). Nous combinons généralement les deux en une seule intervention.",
  },
  {
    question: "Le nettoyage haute pression n'abîme-t-il pas les tuiles ?",
    answer:
      "Pas si la pression est maîtrisée et l'angle correctement orienté. Nous utilisons des buses adaptées à chaque matériau (tuile, ardoise, zinc). En aucun cas nous n'utilisons un nettoyeur grand public sans précaution.",
  },
  {
    question: 'Combien coûte un nettoyage de toiture ?',
    answer:
      "À titre indicatif : entre 12 et 20 €/m² selon la surface, l'accessibilité et l'état de la toiture. Devis personnalisé après visite ou photos détaillées.",
  },
  {
    question: 'Quand est-il préférable de nettoyer sa toiture ?',
    answer:
      "Idéalement au printemps (mars-mai) ou à la fin de l'été (septembre-octobre), hors période de gel ou de fortes pluies. C'est le moment optimal pour préparer la toiture à affronter la saison suivante.",
  },
];

export const FAQ_HYDROFUGE: FAQItem[] = [
  {
    question: "Qu'apporte un traitement hydrofuge sur une toiture ?",
    answer:
      "Il rend la tuile imperméable à l'eau tout en la laissant respirer. Résultat : moins d'humidité retenue, moins de gel-dégel destructeur, et un retour des mousses considérablement ralenti. La toiture vieillit moins vite.",
  },
  {
    question: 'Combien de temps tient un traitement hydrofuge ?',
    answer:
      "Un hydrofuge professionnel de qualité tient entre 8 et 12 ans selon l'exposition. Nous proposons une garantie de 10 ans sur les produits que nous appliquons.",
  },
  {
    question: 'Hydrofuge incolore ou coloré ?',
    answer:
      "Nous proposons les deux. L'hydrofuge incolore préserve l'aspect naturel de la tuile. L'hydrofuge coloré (oxyde de fer) ravive la teinte d'une toiture vieillie. Le choix dépend de l'état initial et de votre préférence esthétique.",
  },
];

export const FAQ_REPARATION: FAQItem[] = [
  {
    question: 'Pouvez-vous remplacer juste quelques tuiles ?',
    answer:
      "Oui, c'est même notre intervention la plus courante. Nous vérifions ensuite l'état général de la toiture pour vous alerter si d'autres tuiles sont à risque court terme.",
  },
  {
    question: 'Comment se passe un diagnostic toiture ?',
    answer:
      "Un de nos artisans se déplace gratuitement, inspecte la toiture depuis l'extérieur et la sous-face (si accessible), photographie les points faibles et vous remet un compte rendu et un devis sous 24h.",
  },
  {
    question: 'Travaux pris en charge par assurance ?',
    answer:
      "En cas de sinistre (tempête, intrusion d'eau, tuiles cassées par chute d'arbre), nous fournissons les devis et photos nécessaires à votre dossier d'assurance habitation et coordonnons avec l'expert si besoin.",
  },
];

export const FAQ_URGENCE: FAQItem[] = [
  {
    question: 'Comment vous joindre en urgence ?',
    answer:
      "Appelez directement notre numéro 07 68 69 78 48, 7 jours sur 7 entre 6h et 22h. Pour les urgences nocturnes, laissez un message vocal — nous rappelons en priorité absolue dès la première heure de la journée.",
  },
  {
    question: 'Quel délai pour une mise hors d\u2019eau ?',
    answer:
      "En heures ouvrées, nous intervenons généralement dans les 2 à 4 heures pour les urgences avérées sur Bordeaux Métropole. Mise en place d'une bâche provisoire et sécurisation, puis devis de réparation définitif sous 48h.",
  },
  {
    question: "Quel est le coût d'une intervention d'urgence ?",
    answer:
      "La mise hors d'eau (bâche, sécurisation) coûte entre 250 et 600 € selon la surface et la difficulté d'accès. La réparation définitive est chiffrée séparément après diagnostic.",
  },
];

export const FAQ_ZINGUERIE: FAQItem[] = [
  {
    question: 'Quelle est la durée de vie de gouttières en zinc ?',
    answer:
      "Le zinc bien posé tient entre 30 et 50 ans sans entretien majeur, contre 10 à 15 ans pour le PVC. C'est un investissement rentable à moyen terme.",
  },
  {
    question: "Quand faut-il refaire la zinguerie d'une toiture ?",
    answer:
      "Dès que vous observez des coulures noires sur les murs, des débordements en cas de pluie, des fixations corrodées ou des perforations. Notre diagnostic permet de prioriser ce qui doit être remplacé.",
  },
  {
    question: "Pose de gouttières alu, zinc ou PVC : que choisir ?",
    answer:
      "Pour les façades anciennes bordelaises et le bâti traditionnel, le zinc est notre recommandation : esthétique, durable, conforme. L'aluminium convient sur le neuf. Le PVC est à réserver à des annexes secondaires.",
  },
];

/** Map service → FAQ associée. */
import type { ServiceCategory } from './types';

export const FAQ_BY_SERVICE: Partial<Record<ServiceCategory, FAQItem[]>> = {
  demoussage: FAQ_DEMOUSSAGE,
  nettoyage: FAQ_NETTOYAGE,
  hydrofuge: FAQ_HYDROFUGE,
  reparation: FAQ_REPARATION,
  urgence: FAQ_URGENCE,
  zinguerie: FAQ_ZINGUERIE,
};

/** Helper : récupère la FAQ d'un service (avec fallback sur la FAQ générale). */
export function getFAQForService(service: ServiceCategory): FAQItem[] {
  return FAQ_BY_SERVICE[service] ?? FAQ_GENERAL;
}
