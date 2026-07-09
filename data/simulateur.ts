import type { SimulateurConfig } from '@/components/simulateur/types';

/**
 * CONFIG DU SIMULATEUR DE PROJET — 100 % éditable ici, sans toucher à la logique.
 *
 * Comment ça marche :
 *  - Étape 1 = choix du `type de chantier` = les cartes `branches` ci-dessous.
 *  - Chaque branche enchaîne ses `steps` (une question par écran, choix unique).
 *    Un clic sur une option passe DIRECTEMENT à l'étape suivante (auto-advance),
 *    aucun bouton « Continuer ». Le bouton retour reste toujours disponible.
 *  - Après la dernière étape, l'`outcome` (écran de sortie) restitue une valeur
 *    utile mais NON ENGAGEANTE, puis propose 2 actions : Appeler / Être rappelé.
 *  - Une branche `kind: 'urgence'` shunte les étapes : écran de sortie immédiat.
 *
 * Règles rédactionnelles (SEO) :
 *  - Ce sont des LABELS de questions/options + textes de sortie courts.
 *    PAS de bloc marketing long répété : le contenu unique de la page reste
 *    la substance dominante.
 *  - Le token `{ville}` dans les `body`/`outcome` est remplacé à l'affichage par
 *    « à Mérignac » / « au Bouscat » (grammaire gérée par le composant).
 */
export const SIMULATEUR_CONFIG: SimulateurConfig = {
  sectionEyebrow: 'Simulateur de projet',
  sectionTitle: 'Estimez votre projet en 30 secondes',
  sectionIntro:
    'Quelques questions ciblées, une estimation indicative immédiate, et un rappel sous 24h si vous le souhaitez. Sans engagement.',
  step1Question: 'Quel est votre projet ?',

  branches: [
    /* ============================================================
       A. COUVERTURE / RÉFECTION
       Sortie : fourchette €/m² large + honnête + délai indicatif.
       ============================================================ */
    {
      id: 'couverture',
      label: 'Couverture / réfection',
      icon: '🏠',
      hint: 'Toiture neuve, réfection ou réparation',
      kind: 'standard',
      matchesService: ['couverture', 'neuve', 'reparation', 'faitage'],
      steps: [
        {
          id: 'nature',
          question: 'De quel type de travaux s\u2019agit-il ?',
          mailLabel: 'Nature des travaux',
          options: [
            { value: 'refection', label: 'Réfection complète', icon: '🔨', hint: 'Refaire toute la toiture' },
            { value: 'reparation', label: 'Réparation ponctuelle', icon: '🩹', hint: 'Quelques tuiles, une zone' },
            { value: 'neuf', label: 'Toiture neuve', icon: '✨', hint: 'Construction ou extension' },
          ],
        },
        {
          id: 'surface',
          question: 'Quelle surface de toiture, environ ?',
          mailLabel: 'Surface approximative',
          options: [
            { value: '<50', label: 'Moins de 50 m²' },
            { value: '50-100', label: '50 à 100 m²' },
            { value: '100-150', label: '100 à 150 m²' },
            { value: '>150', label: 'Plus de 150 m²' },
          ],
        },
        {
          id: 'delai',
          question: 'Dans quel délai souhaitez-vous intervenir ?',
          mailLabel: 'Délai souhaité',
          options: [
            { value: 'urgent', label: 'C\u2019est urgent', icon: '⚡' },
            { value: '<1mois', label: 'Sous 1 mois', icon: '📅' },
            { value: 'renseigne', label: 'Je me renseigne', icon: '🔍' },
          ],
        },
      ],
      outcome: {
        mode: 'price-range',
        title: 'Estimation indicative de votre réfection',
        body: [
          'D\u2019après vos réponses, voici une fourchette indicative pour un projet {ville}. Le prix exact dépend du matériau, de l\u2019état de la charpente et de l\u2019accès — il se détermine lors d\u2019un devis gratuit sur place.',
        ],
        priceRange: '90 à 220 €/m²',
        delai: 'Intervention planifiable sous 2 à 4 semaines (immédiate en cas d\u2019urgence).',
        disclaimer:
          'Estimation indicative, ce n\u2019est pas un devis. Seule une visite permet un chiffrage exact — gratuit et sans engagement.',
      },
    },

    /* ============================================================
       B. ZINGUERIE
       Sortie : PAS de prix (trop variable). Valeur = réactivité + délai.
       ============================================================ */
    {
      id: 'zinguerie',
      label: 'Zinguerie',
      icon: '🔧',
      hint: 'Gouttières, chéneaux, solins',
      kind: 'standard',
      matchesService: ['zinguerie', 'velux', 'ornements'],
      steps: [
        {
          id: 'type',
          question: 'Quel élément de zinguerie est concerné ?',
          mailLabel: 'Type de zinguerie',
          options: [
            { value: 'gouttieres', label: 'Gouttières', icon: '🌧️' },
            { value: 'cheneaux', label: 'Chéneaux', icon: '📐' },
            { value: 'solins', label: 'Solins', icon: '🧱' },
            { value: 'autre', label: 'Autre / je ne sais pas', icon: '❓' },
          ],
        },
        {
          id: 'operation',
          question: 'Remplacement ou réparation ?',
          mailLabel: 'Opération',
          options: [
            { value: 'remplacement', label: 'Remplacement', icon: '♻️' },
            { value: 'reparation', label: 'Réparation', icon: '🩹' },
            { value: 'incertain', label: 'À évaluer sur place', icon: '👀' },
          ],
        },
        {
          id: 'delai',
          question: 'Dans quel délai ?',
          mailLabel: 'Délai souhaité',
          options: [
            { value: 'urgent', label: 'C\u2019est urgent', icon: '⚡' },
            { value: '<1mois', label: 'Sous 1 mois', icon: '📅' },
            { value: 'renseigne', label: 'Je me renseigne', icon: '🔍' },
          ],
        },
      ],
      outcome: {
        mode: 'delay-only',
        title: 'Votre demande de zinguerie est prête',
        body: [
          'La zinguerie se chiffre au cas par cas (longueur, matériau, accès) : un prix annoncé à l\u2019aveugle serait faux. En revanche, nous pouvons vous rappeler vite {ville} et vous établir un devis précis sous 24h.',
        ],
        delai: 'Devis gratuit sous 24h · intervention selon planning, souvent sous 1 à 2 semaines.',
      },
    },

    /* ============================================================
       C. URGENCE / FUITE
       kind: 'urgence' → shunt total. Écran immédiat : Appeler + délai.
       On n'impose JAMAIS 4 étapes à quelqu'un qui a une fuite active.
       ============================================================ */
    {
      id: 'urgence',
      label: 'Urgence / fuite',
      icon: '🚨',
      hint: 'Fuite active, tempête, dégât des eaux',
      kind: 'urgence',
      matchesService: ['urgence'],
      steps: [],
      outcome: {
        mode: 'urgence',
        title: 'Fuite en cours ? Ne perdez pas de temps',
        body: [
          'Pour une fuite active, le plus efficace reste l\u2019appel direct : nous évaluons la situation en 2 minutes et organisons une mise hors d\u2019eau rapide {ville}.',
        ],
        delai: 'Couvreur sur place généralement sous 2 à 4 h en journée.',
      },
    },

    /* ============================================================
       D. ISOLATION / AIDES
       Sortie : mini-check d'éligibilité INDICATIVE (prudent, à confirmer).
       ============================================================ */
    {
      id: 'isolation',
      label: 'Isolation / aides',
      icon: '🌡️',
      hint: 'Isolation toiture/combles, MaPrimeRénov\u2019',
      kind: 'standard',
      steps: [
        {
          id: 'zone',
          question: 'Quelle partie souhaitez-vous isoler ?',
          mailLabel: 'Zone à isoler',
          options: [
            { value: 'combles-perdus', label: 'Combles perdus', icon: '📦' },
            { value: 'combles-amenages', label: 'Combles aménagés', icon: '🛏️' },
            { value: 'toiture', label: 'Toiture (par l\u2019extérieur)', icon: '🏠' },
            { value: 'incertain', label: 'Je ne sais pas encore', icon: '❓' },
          ],
        },
        {
          id: 'statut',
          question: 'Vous êtes…',
          mailLabel: 'Statut d\u2019occupation',
          options: [
            { value: 'proprio-occupant', label: 'Propriétaire occupant', icon: '🔑' },
            { value: 'bailleur', label: 'Propriétaire bailleur', icon: '🏘️' },
            { value: 'autre', label: 'Autre situation', icon: '❓' },
          ],
        },
      ],
      outcome: {
        mode: 'eligibilite',
        title: 'Votre projet semble éligible aux aides',
        body: [
          'D\u2019après votre situation, votre projet d\u2019isolation {ville} paraît éligible à des aides à la rénovation énergétique (MaPrimeRénov\u2019, TVA réduite, CEE selon les cas).',
          'Le montant réel dépend de vos revenus et du détail du chantier. Nous pouvons vous rappeler pour vérifier votre éligibilité précise et monter le dossier.',
        ],
        disclaimer:
          'Éligibilité indicative, à confirmer selon vos revenus et les barèmes en vigueur. Nous ne sommes pas un organisme d\u2019État : nous vous orientons et constituons le dossier technique.',
      },
    },
  ],
};
