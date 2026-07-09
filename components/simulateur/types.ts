/**
 * Types de configuration du simulateur de projet.
 *
 * TOUTE la logique de rendu vit dans `Simulateur.tsx`. Ce fichier ne décrit que
 * la FORME des données. Le contenu (branches, questions, options, textes de
 * sortie) est édité dans `data/simulateur.ts` — sans jamais toucher au composant.
 */

/** Contexte injecté par la page hôte (pertinence locale + payload lead). */
export type SimulateurContext = {
  /** Ville de la page (pré-remplit le récap, le formulaire de rappel et le mail). */
  ville?: { slug: string; name: string };
  /** Service de la page — si il matche une branche, le simulateur ouvre
   *  directement cette branche (utile sur les pages service). */
  service?: string;
};

/** Une option tappable d'une étape. Un tap = réponse + passage à l'étape suivante. */
export type StepOption = {
  /** Valeur machine, stockée dans les réponses + envoyée dans le mail. */
  value: string;
  /** Libellé affiché sur la carte/pilule. */
  label: string;
  /** Emoji optionnel (léger, aucune lib d'icône requise). */
  icon?: string;
  /** Sous-texte optionnel sous le label. */
  hint?: string;
};

/** Une étape = une question à choix unique, avec auto-advance au clic. */
export type Step = {
  /** Identifiant machine, sert de clé de réponse. */
  id: string;
  /** Question affichée (titre de l'étape). */
  question: string;
  /** Libellé lisible du champ correspondant dans le mail (ex. « Nature des travaux »). */
  mailLabel: string;
  /** Options proposées. */
  options: StepOption[];
};

/** Mode de l'écran de sortie — pilote le rendu de la valeur restituée. */
export type OutcomeMode =
  /** Fourchette €/m² large + disclaimer « pas un devis ». */
  | 'price-range'
  /** Pas de prix : on met en avant la réactivité / le délai. */
  | 'delay-only'
  /** Shunt urgence : gros bouton Appeler + délai d'intervention. */
  | 'urgence'
  /** Mini-check d'éligibilité indicative aux aides. */
  | 'eligibilite';

/** Écran de sortie d'une branche (déclaratif — aucune logique). */
export type Outcome = {
  mode: OutcomeMode;
  /** Titre de l'écran de sortie. */
  title: string;
  /** Paragraphes de corps. Le token `{ville}` est remplacé par « à Mérignac » etc. */
  body: string[];
  /** Fourchette de prix affichée (mode `price-range` uniquement). */
  priceRange?: string;
  /** Délai indicatif d'intervention/disponibilité (modes price-range, delay-only, urgence). */
  delai?: string;
  /** Mention prudente obligatoire pour price-range et eligibilite. */
  disclaimer?: string;
};

/** Une branche = un type de chantier (carte de l'étape 1) et son parcours. */
export type Branch = {
  /** Identifiant machine de la branche. */
  id: string;
  /** Libellé de la carte à l'étape 1. */
  label: string;
  /** Emoji de la carte. */
  icon: string;
  /** Sous-texte de la carte à l'étape 1. */
  hint?: string;
  /**
   * `standard` : parcours normal (étapes → écran de sortie).
   * `urgence`  : shunte les étapes, écran de sortie immédiat (fuite active).
   */
  kind: 'standard' | 'urgence';
  /** Étapes de la branche (3-4 max). Vide si `kind: 'urgence'`. */
  steps: Step[];
  /** Écran de sortie de la branche. */
  outcome: Outcome;
  /**
   * Slugs de services (data/services.ts) qui doivent ouvrir cette branche
   * directement quand la page hôte passe `service`. Ex. une page zinguerie
   * ouvre la branche zinguerie sans afficher la grille de cartes.
   */
  matchesService?: string[];
};

/** Payload transmis à `onLeadSubmit` (tracking) puis à Web3Forms. */
export type LeadPayload = {
  /** Libellé de la branche choisie. */
  typeChantier: string;
  /** Réponses des étapes, indexées par `mailLabel` → libellé d'option. */
  reponses: Record<string, string>;
  /** Nom de la ville (contexte page), si connu. */
  ville?: string;
  /** Prénom saisi (optionnel). */
  prenom?: string;
  /** Téléphone saisi. */
  telephone: string;
  /** Email saisi (optionnel). */
  email?: string;
  /** Horodatage ISO de la soumission. */
  horodatage: string;
};

/** Configuration complète du simulateur. */
export type SimulateurConfig = {
  /** Eyebrow de la section (pré-titre). */
  sectionEyebrow: string;
  /** Titre H2 de la section. */
  sectionTitle: string;
  /** Intro courte sous le titre (1 phrase — pas de bloc marketing long). */
  sectionIntro: string;
  /** Question de l'étape 1 (choix du type de chantier). */
  step1Question: string;
  /** Les branches proposées à l'étape 1. */
  branches: Branch[];
};
