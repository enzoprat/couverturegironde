import type { Metadata } from 'next';
import { ServiceVillePageLayout } from '@/components/content/ServiceVillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('reparation-toiture-pessac');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <>
      <ServiceVillePageLayout
        content={{
          slug: PAGE.slug,
          service: 'reparation',
          villeSlug: 'pessac',
          h1: (
            <>
              Réparation fuite toiture à{' '}
              <span className="text-[var(--color-terre)]">Pessac</span> —
              intervention 30-60 min 7j/7
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac (7 km de Pessac)',
            bio: "Je répare les toitures pessacaises depuis 2005. Intervention 30-60 min en heures ouvrées depuis mon atelier Mérignac (7 km). Sur Pessac : tuiles cassées par branches sous couvert Bourgailh, faîtages fissurés bâti ancien centre, noues zinc percées échoppes. Dossier assurance constitué systématiquement.",
            badges: ['Depuis 2005', 'Décennale active', '5/5 sur 52 avis Google', 'Urgence 30-60 min'],
          },

          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro: "Atelier à 7 km (15 min) de Pessac via A630. Intervention 30-60 min en heures ouvrées.",
            horaires: [
              { jours: 'Lundi – Vendredi', heures: '6h00 – 22h00' },
              { jours: 'Samedi – Dimanche', heures: 'Urgences 7j/7' },
            ],
            mapEmbedUrl: 'https://www.google.com/maps?q=65+rue+de+Malbos+33700+M%C3%A9rignac&output=embed',
            itineraireUrl: 'https://www.google.com/maps/dir//65+rue+de+Malbos,+33700+M%C3%A9rignac',
          },
        heroSubtitle:
          "Réparation fuite toiture à Pessac par artisan couvreur depuis 2005. Intervention 30-60 min heures ouvrées depuis notre atelier de Mérignac (7 km). Tuiles cassées, faîtage disloqué, noue zinc percée, abergement cheminée. Devis gratuit sous 24h, garantie décennale.",
        presentation: (
          <>
            <p>
              Une fuite de toiture à Pessac est presque toujours une urgence
              à traiter dans les <strong>24 à 48 heures</strong>. Le climat
              océanique local (930 mm/an, hivers doux et humides) et le
              couvert végétal dense de la commune (Bourg-Madame, Cap-de-Bos,
              secteur universitaire) accélèrent la dégradation de l'isolant,
              du plâtre et de la charpente dès qu'une infiltration s'installe.
              Nous intervenons sur Pessac{' '}
              <strong>chaque jour depuis 2005</strong>, ce qui garantit une
              disponibilité rapide et une connaissance fine du bâti local.
            </p>
            <p>
              Les <strong>fuites pessacaises les plus courantes</strong> se
              concentrent sur quatre points faibles typiques : tuiles cassées
              par chute de branches sous couvert arboré, faîtages scellés
              fissurés par les cycles gel-dégel, raccords zinc autour des
              cheminées des échoppes du centre, et gouttières débordantes qui
              refluent en pied de mur après orages. Notre méthode :
              sécurisation immédiate par bâche, diagnostic précis dans les
              48h, devis chiffré ligne par ligne, exécution une fois validé.
            </p>
            <p>
              Sur le plan tarifaire, comptez une <strong>mise hors d'eau
              d'urgence entre 250 et 550 €</strong> selon la gravité et
              l'accessibilité. La réparation définitive dépend de la cause :
              remplacement ponctuel de 5-10 tuiles (180-420 €), reprise de
              faîtage scellé chaux (45-70 €/ml), remplacement d'abergement
              zinc (380-850 €), reprise de noue avec soudure étain sur place
              (180-420 €/ml). Diagnostic gratuit, devis transparent, aucun
              supplément surprise.
            </p>
            <p>
              Chaque intervention est couverte par notre{' '}
              <strong>assurance décennale</strong> en cours de validité (justificatifs
              fournis sur demande) et notre responsabilité civile pro. Nous
              établissons systématiquement le rapport photo et l'attestation
              nécessaires à votre déclaration d'assurance en cas de sinistre
              couvert, et restons disponibles pour tout échange avec l'expert
              d'assurance mandaté.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Intervention en 30-60 min heures ouvrées',
            description:
              "Depuis notre atelier de Mérignac (7 km, 15 min), nous atteignons Pessac plus vite que toute structure bordelaise centre qui doit traverser la métropole. Pour les urgences vraies, chaque minute compte.",
          },
          {
            title: 'Diagnostic remonte à la cause',
            description:
              "Une fuite déclarée à un endroit a souvent son origine ailleurs (faîtage, noue distante, abergement). Nous inspectons toute la toiture avant devis pour ne réparer qu'une fois.",
          },
          {
            title: 'Compatibilité matériaux respectée',
            description:
              "Tuile canal traditionnelle pessacaise, tuile mécanique 70-90 des pavillons Saige, ardoise des maisons bourgeoises : nous fournissons les matériaux compatibles avec votre couverture existante.",
          },
          {
            title: 'Dossier assurance pris en charge',
            description:
              "Photos, devis chiffré, attestation décennale, échanges avec l'expert : nous constituons le dossier complet pour votre déclaration d'assurance.",
          },
          {
            title: 'Garantie décennale sur la réparation',
            description:
              "Toutes nos interventions de réparation sont couvertes par notre décennale. En cas de résurgence de la fuite dans les 10 ans, nous revenons.",
          },
          {
            title: 'Tarif transparent, aucun supplément',
            description:
              "Devis chiffré ligne par ligne, acompte limité à 30 %, solde à la satisfaction confirmée. Aucun frais caché en cours de chantier.",
          },
        ],
        risques: [
          {
            title: 'Fuite ignorée pendant un hiver',
            description:
              "Une petite fuite laissée pendant 2-3 mois imprègne isolant et chevrons, provoque effondrement de plafond BA13, et peut atteindre 3-8 k€ de dégâts intérieurs pour une réparation initiale à 400 €.",
          },
          {
            title: 'Bâchage temporaire non pérenne',
            description:
              "Une bâche mal fixée par le propriétaire s'envole au prochain vent, l'eau reprend son chemin. Une mise hors d'eau professionnelle tient 3-6 mois si nécessaire, sans reprise.",
          },
          {
            title: 'Sinistre d\u2019assurance refusé',
            description:
              "Un sinistre déclaré sans dossier photo/devis peut être refusé par l'assureur au motif de défaut d'entretien. Notre intervention rapide fournit les preuves nécessaires.",
          },
          {
            title: 'Réparation sans diagnostic amont',
            description:
              "Remplacer 3 tuiles sans inspecter la noue ou le faîtage adjacent = reprise de fuite 2 mois après. Un diagnostic complet coûte 0-180 € et évite deux interventions payées.",
          },
        ],
        methode: [
          {
            title: 'Appel + description au téléphone',
            description:
              "Décrivez ce que vous voyez (photos bienvenues au 07 68 69 78 48). Nous évaluons l'urgence, planifions une mise hors d'eau si nécessaire, sinon un diagnostic dans 24-48h.",
          },
          {
            title: "Mise hors d'eau immédiate (si urgent)",
            description:
              "Bâche professionnelle fixée, sécurisation zone, protection intérieure si dégât en cours. Cette étape n'est pas facturée si le devis de réparation définitive est signé dans la foulée.",
          },
          {
            title: 'Diagnostic complet sur site',
            description:
              "Inspection complète de la couverture, pas seulement la zone signalée. Photos, mesures, identification de la vraie cause. Rapport écrit remis.",
          },
          {
            title: 'Devis détaillé sous 24-48h',
            description:
              "Vous recevez un devis chiffré ligne par ligne : main d'œuvre, matériaux, sécurité, accès. Choix possible entre réparation minimale et reprise complète des points faibles.",
          },
          {
            title: 'Réparation et tests d\u2019étanchéité',
            description:
              "Remplacement des éléments défectueux, soudure étain sur place pour zinguerie, vérification par aspersion contrôlée. Photos avant/après systématiques.",
          },
          {
            title: 'Réception et garantie',
            description:
              "Visite fin de chantier avec vous, remise des photos, attestation décennale, conseils prévention. Solde à votre validation confirmée.",
          },
        ],
        faqLocale: [
          {
            question:
              "Quel est votre délai d'intervention urgence à Pessac ?",
            answer:
              "Depuis notre atelier de Mérignac (7 km), nous atteignons Pessac en 30 à 60 minutes en heures ouvrées pour une mise hors d'eau. Pour les urgences nuit ou week-end, laissez message vocal au 07 68 69 78 48 : nous rappelons en priorité absolue dès la première heure du jour suivant.",
          },
          {
            question:
              "Combien coûte une mise hors d'eau d'urgence à Pessac ?",
            answer:
              "Comptez 250 à 550 € pour une mise hors d'eau professionnelle (bâche + sécurisation + diagnostic photo). Ce montant n'est pas facturé si le devis de réparation définitive est signé dans la foulée. La réparation définitive dépend de la cause : voir tableau tarifs indicatifs.",
          },
          {
            question:
              "Pourquoi les fuites sont-elles fréquentes à Pessac ?",
            answer:
              "Trois facteurs conjoints : (1) le couvert végétal dense (Bourg-Madame, Bourgailh, secteur universitaire) qui laisse tomber branches et feuilles, (2) le climat humide (930 mm/an) qui gorge la mousse et fragilise les tuiles, (3) le bâti majoritairement en tuile mécanique années 70-90 qui atteint sa fin de vie moyenne. La prévention par démoussage tous les 4-5 ans réduit significativement le risque.",
          },
          {
            question:
              "Ma fuite est causée par une tempête, mon assurance couvre-t-elle ?",
            answer:
              "Oui, les sinistres liés à un événement climatique (tempête, grêle, chute de branche) sont couverts par votre assurance habitation multirisque. Nous fournissons systématiquement le dossier photo + devis + attestation décennale que vous transmettez à votre assureur. Nous restons disponibles pour tout échange direct avec l'expert d'assurance.",
          },
          {
            question:
              "Faut-il faire réparer ou refaire toute la toiture ?",
            answer:
              "Ça dépend de l'âge et de l'état général. Une réparation ponctuelle est presque toujours plus économique qu'une réfection tardive (facteur 6 à 10). Mais si votre toiture a plus de 50 ans, a été peu entretenue, et présente plusieurs points faibles simultanés, une réfection complète peut être plus rentable à long terme. Nous vous donnons l'analyse honnête après diagnostic.",
          },
          {
            question:
              "Intervenez-vous sur les copropriétés pessacaises ?",
            answer:
              "Oui, nous intervenons régulièrement en copropriété sur Pessac (résidences Alouette, Saige, Cap-de-Bos, etc.). Devis adapté format syndic, attestations d'assurance, planning compatible AG. Pour les urgences fuite avant AG, nous acceptons une commande en émergence auprès du syndic avec régularisation ensuite.",
          },
          {
            question:
              "Quelles garanties fournissez-vous sur la réparation ?",
            answer:
              "Garantie décennale (10 ans) sur l'ensemble de l'intervention, obligation légale. Garantie biennale (2 ans) sur les éléments d'équipement (Velux, gouttières). Fiche technique des matériaux utilisés + attestation d'assurance remises à la fin du chantier. Si la même fuite reprend au même endroit dans les 10 ans, nous revenons.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
