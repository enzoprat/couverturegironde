import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('urgence-fuite-toiture-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'urgence',
        slug: PAGE.slug,
        h1: (
          <>
            Urgence fuite toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span>, 7j/7
          </>
        ),
        heroSubtitle:
          "Fuite d'eau, dégât de tempête, tuiles arrachées : intervention rapide sur Bordeaux Métropole. Mise hors d'eau dans la journée (heures ouvrées), devis de réparation détaillé sous 48h.",
        shortTitle: 'Urgence fuite',
        presentation: (
          <>
            <p>
              Une fuite de toiture, c'est un compte à rebours. Chaque heure
              perdue = plus d'eau dans l'isolant, plus de dégâts au plafond,
              plus de risque structurel. Notre service d'urgence est conçu pour
              une seule chose :{' '}
              <strong>
                arrêter l'eau le plus vite possible, puis chiffrer une
                réparation propre dans les jours qui suivent
              </strong>
              .
            </p>
            <p>
              Nous intervenons 7 jours sur 7, de 6h à 22h, sur tout Bordeaux
              Métropole. Le délai moyen d'intervention est de{' '}
              <strong>2 à 4 heures en heures ouvrées</strong>. Pour les
              urgences nocturnes, laissez un message vocal, vous êtes rappelé
              dès la première heure de la journée avec un créneau prioritaire.
            </p>
            <p>
              Notre approche en deux temps évite la panique et les décisions
              précipitées : mise hors d'eau provisoire immédiate (bâche
              technique, sécurisation, désencombrement), puis devis de
              réparation définitive sous 48h après diagnostic complet. Vous
              n'êtes jamais forcé à décider en urgence pour des travaux
              importants.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Intervention dans la journée',
            description:
              "Délai moyen 2-4h en heures ouvrées sur Bordeaux Métropole. Notre planning prévoit des créneaux d'urgence chaque jour pour absorber les sinistres imprévus.",
          },
          {
            title: 'Mise hors d\u2019eau puis devis',
            description:
              "On commence par arrêter l'eau (bâche, sécurisation). Le devis de réparation définitive vient ensuite, à froid, sans vous mettre la pression pour signer immédiatement.",
          },
          {
            title: 'Photos et constat pour votre assurance',
            description:
              "Nous photographions et documentons tout. Vous récupérez un dossier solide pour votre déclaration d'assurance habitation : preuves, factures, attestations.",
          },
          {
            title: 'Pas de surfacturation urgence',
            description:
              "Notre tarif d'urgence est connu à l'avance et raisonnable (250-600 € pour une mise hors d'eau). Pas de profit fait sur la détresse client.",
          },
          {
            title: 'Conseil immédiat au téléphone',
            description:
              "Pendant que nous arrivons, nous vous indiquons les gestes à faire pour limiter les dégâts (couper l'électricité, déplacer les meubles, etc.). Vous n'êtes pas seul face au problème.",
          },
        ],
        risques: [
          {
            title: 'Dégât d\u2019isolation aggravé d\u2019heure en heure',
            description:
              "La laine de verre saturée perd 90 % de ses performances thermiques. Les panneaux d'isolation rigide se déforment. Plus on attend, plus la facture finale gonfle.",
          },
          {
            title: 'Risque électrique en plafond',
            description:
              "L'eau qui ruisselle sur les câbles et boîtiers électriques en plafond peut provoquer court-circuit ou incendie. Mise hors tension immédiate à conseiller en attendant intervention.",
          },
          {
            title: 'Dommages aux chevrons et structure',
            description:
              "Une infiltration prolongée pourrit les chevrons en quelques semaines. La réfection structurelle coûte ensuite des milliers d'euros, là où une fuite traitée en quelques heures coûte quelques centaines.",
          },
          {
            title: 'Refus d\u2019assurance pour défaut d\u2019entretien',
            description:
              "L'assureur peut refuser le sinistre s'il considère qu'un entretien régulier aurait évité le problème. Notre intervention rapide + photos = preuves qu'aucune négligence n'est en cause.",
          },
        ],
        methode: [
          {
            title: 'Appel d\u2019urgence',
            description:
              "Appelez le 07 68 69 78 48. Nous évaluons l'urgence par téléphone, vous donnons les gestes immédiats à effectuer, et planifions notre arrivée.",
          },
          {
            title: 'Arrivée sur site',
            description:
              "Notre artisan arrive avec le matériel adapté (bâches techniques, harnais, outillage). Sécurisation immédiate de la zone, accès au point de fuite identifié.",
          },
          {
            title: 'Diagnostic rapide',
            description:
              "Identification de la cause exacte (tuile manquante, faîtage cassé, raccord défaillant). Photos systématiques pour votre dossier d'assurance.",
          },
          {
            title: 'Mise hors d\u2019eau provisoire',
            description:
              "Pose d'une bâche technique ancrée correctement, remplacement provisoire des tuiles disponibles, scellement temporaire si nécessaire. Vous êtes hors d'eau le jour même.",
          },
          {
            title: 'Devis de réparation définitive',
            description:
              "Sous 48h, vous recevez un devis détaillé pour la réparation définitive. Photos, chiffrage ligne par ligne, délai d'intervention, garantie.",
          },
          {
            title: 'Travaux de réparation',
            description:
              "Selon urgence et planning, intervention de réparation définitive sous 1 à 2 semaines. Garantie décennale, attestation remise.",
          },
        ],
      }}
    />
  );
}
