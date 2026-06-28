import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('reparation-toiture-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'reparation',
        slug: PAGE.slug,
        h1: (
          <>
            Réparation de toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> et en
            Gironde
          </>
        ),
        heroSubtitle:
          "Tuiles cassées, faîtage défaillant, infiltration, fissure, dégât de tempête. Diagnostic gratuit, intervention rapide, devis transparent. Couvreur depuis 2005 sur Bordeaux Métropole.",
        shortTitle: 'Réparation toiture',
        presentation: (
          <>
            <p>
              Une toiture qui faiblit ne se voit pas toujours du sol. Quelques
              tuiles déplacées par le vent, une fissure dans un faîtage, un
              joint qui se décolle : autant de signaux qui, ignorés, finissent
              en infiltrations, dégâts d'isolation et coût décuplé.{' '}
              <strong>
                La réparation ciblée est presque toujours plus économique que
                la réfection complète
              </strong>
              , à condition d'intervenir à temps.
            </p>
            <p>
              Nous traitons l'ensemble des réparations courantes sur les
              toitures bordelaises :{' '}
              <strong>
                remplacement de tuiles cassées, reprise de faîtage scellé ou à
                sec, étanchéité de raccords, réparation de zinguerie, traitement
                des points faibles autour des cheminées, abergements
              </strong>
              . Diagnostic gratuit, devis détaillé sous 24h.
            </p>
            <p>
              Notre démarche : remonter à la cause, pas juste boucher le
              symptôme. Une fuite déclarée à un endroit a souvent son origine
              ailleurs. C'est pourquoi nous prenons systématiquement le temps
              d'inspecter la toiture entière avant de chiffrer une réparation
              ponctuelle. Vous évitez ainsi de payer deux fois.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Diagnostic complet, pas juste le symptôme',
            description:
              "Nous inspectons toute la toiture, pas seulement la zone signalée. Une fuite a souvent une cause distante (faîtage, abergement, descente). Trouver la vraie cause = ne réparer qu'une fois.",
          },
          {
            title: 'Compatibilité matériaux respectée',
            description:
              "Tuile canal du Sud-Ouest, ardoise d'Angers, zinc patiné : nous fournissons les matériaux compatibles avec votre couverture existante. Pas de patch visuellement criant.",
          },
          {
            title: 'Intervention rapide',
            description:
              "Pour les réparations urgentes (fuite déclarée, dégât de tempête), intervention dans la journée ou le lendemain matin sur Bordeaux Métropole.",
          },
          {
            title: 'Devis transparent ligne par ligne',
            description:
              "Vous voyez exactement ce qui est facturé : main d'œuvre, matériaux, accès. Aucun supplément surprise. Acompte limité, paiement à la satisfaction.",
          },
          {
            title: 'Garantie décennale',
            description:
              "Toutes nos réparations sont couvertes par notre assurance décennale. Vous êtes protégé pendant 10 ans.",
          },
        ],
        risques: [
          {
            title: 'Infiltrations chroniques',
            description:
              "Une petite fuite ignorée pendant un hiver imprègne les isolants, les chevrons, les plafonds. Les dégâts intérieurs coûtent souvent plus cher que la réparation initiale.",
          },
          {
            title: 'Dégradation accélérée par le vent',
            description:
              "Une tuile mal fixée en entraîne d'autres au prochain coup de vent. Le bord d'attaque des versants ouest est particulièrement exposé à Bordeaux. Chaque tempête aggrave l'état.",
          },
          {
            title: 'Perte de la garantie décennale antérieure',
            description:
              "Si votre toiture est sous garantie décennale et que vous laissez se dégrader un défaut signalable, vous perdez la protection. Faire intervenir un professionnel à temps préserve vos droits.",
          },
          {
            title: 'Sinistre d\u2019assurance refusé',
            description:
              "Les assureurs habitation refusent les sinistres liés à un défaut d'entretien manifeste. Faire intervenir un couvreur à temps = preuves photographiques et factures = dossier solide.",
          },
        ],
        methode: [
          {
            title: 'Appel et description du problème',
            description:
              "Décrivez ce que vous observez (photos bienvenues). Nous évaluons l'urgence et planifions une visite, immédiate si urgence, sous 48h sinon.",
          },
          {
            title: 'Diagnostic sur place',
            description:
              "Inspection visuelle complète, sondages si nécessaire, photos. Identification précise de la cause et des éléments à remplacer ou remettre en état.",
          },
          {
            title: 'Devis détaillé sous 24h',
            description:
              "Vous recevez un devis chiffré ligne par ligne avec photo des points concernés. Choix possible entre réparation minimale et reprise complète des points faibles.",
          },
          {
            title: 'Préparation et sécurisation',
            description:
              "Installation des protections (échafaudage si nécessaire, harnais), bâchage si pluie probable, mise hors d'eau provisoire en cas d'urgence.",
          },
          {
            title: 'Réparation et tests',
            description:
              "Remplacement des éléments défectueux, vérification de l'étanchéité, contrôle des raccords zinguerie. Tests d'étanchéité par aspersion contrôlée si nécessaire.",
          },
          {
            title: 'Réception et garantie',
            description:
              "Visite de fin de chantier avec vous, remise des photos avant/après, attestation décennale. Conseils pour prévenir un futur problème équivalent.",
          },
        ],
        tarifs: {
          intro:
            "Fourchettes de prix indicatives pour les réparations courantes sur Bordeaux Métropole en 2026. Une réparation ciblée coûte généralement entre 10 et 50 fois moins qu'une réfection complète tardive : intervenir vite est l'investissement le plus rentable.",
          lines: [
            {
              service: 'Remplacement 1 à 5 tuiles cassées',
              range: '180 – 340 €',
              note: 'Forfait diagnostic + intervention + matériaux',
            },
            {
              service: 'Remplacement 5 à 15 tuiles',
              range: '320 – 580 €',
              note: 'Tarif dégressif au-delà de 5 tuiles',
            },
            {
              service: 'Réparation faîtage scellé (par ml)',
              range: '45 – 70 €/ml',
              note: 'Mortier de chaux pour bâti ancien',
            },
            {
              service: 'Réparation faîtage à sec ventilé',
              range: '38 – 60 €/ml',
              note: 'Système moderne avec closoir ventilé',
            },
            {
              service: "Reprise d'abergement cheminée",
              range: '380 – 850 €',
              note: 'Zinguerie + étanchéité au pied de cheminée',
            },
            {
              service: 'Réparation noue zinguerie',
              range: '180 – 420 €/ml',
              note: 'Selon longueur et accessibilité',
            },
            {
              service: 'Remplacement section gouttière zinc',
              range: '85 – 140 €/ml',
              note: 'Avec soudure étain sur place',
            },
            {
              service: 'Remplacement descente EP zinc',
              range: '95 – 160 €/ml',
              note: 'Section dimensionnée pluviométrie 930 mm',
            },
            {
              service: 'Réparation Velux (étanchéité)',
              range: '320 – 750 €',
              note: 'Kit Velux d\u2019origine, garantie constructeur',
            },
            {
              service: 'Réparation tuile faîtière scellée cassée',
              range: '120 – 250 €',
              note: 'Intervention rapide, intervention seule possible',
            },
            {
              service: "Mise hors d'eau d'urgence (bâchage)",
              range: '250 – 450 €',
              note: '24/24 en saison tempête, devis sous 24h',
            },
            {
              service: 'Diagnostic complet + rapport photos',
              range: '0 – 180 €',
              note: 'Gratuit si chantier signé, sinon forfait',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, garantie décennale incluse. Échafaudage spécifique, hauteur >12m, accès difficile ou intervention nuit/weekend sur devis. En urgence : intervention sous 2-4h en heures ouvrées, 24/24 en saison tempête.",
        },
        quartiersBordeaux: {
          intro:
            "Nous intervenons rapidement sur tous les quartiers de Bordeaux Métropole. Notre proximité Mérignac permet des délais inégalables (15-30 minutes en heures ouvrées sur Bordeaux Ouest, 30-60 minutes ailleurs).",
          items: [
            {
              nom: 'Bordeaux Centre',
              description:
                "Échoppes XIXᵉ et immeubles haussmanniens : réparations soignées respectant les matériaux d'origine (tuile canal, ardoise, zinc patiné).",
              href: '/couvreur-bordeaux-centre',
            },
            {
              nom: 'Chartrons',
              description:
                "Maisons d'armateurs et entrepôts réhabilités : zinguerie patrimoniale, abergements complexes. Savoir-faire spécifique.",
              href: '/couvreur-bordeaux-chartrons',
            },
            {
              nom: 'Caudéran',
              description:
                "Pavillons tuile mécanique : tuiles cassées, faîtages dégradés, gouttières percées sont les réparations les plus fréquentes.",
              href: '/couvreur-bordeaux-cauderan',
            },
            {
              nom: 'Saint-Augustin',
              description:
                "Échoppes tuile canal : remplacements ponctuels et reprise de faîtage scellé au mortier de chaux pour respecter le bâti.",
              href: '/couvreur-bordeaux-saint-augustin',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune : intervention urgence sous 15-30 min, tarif sans surcoût déplacement. Atelier sur place rue de Malbos.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Pavillonnaire et copropriétés : reprise zinguerie, étanchéité points faibles, remplacement tuiles courantes.",
              href: '/reparation-toiture-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Mix bourgeois ardoise + résidences étudiantes tuile mécanique. Réparations adaptées à chaque typologie.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Le Bouscat',
              description:
                "Quartier patrimonial : réparations soignées sur tuile canal et zinc, respect strict des matériaux d\u2019origine.",
              href: '/couvreur-bouscat',
            },
            {
              nom: 'Bègles, Villenave, Gradignan',
              description:
                "Pavillonnaire étendu : tuiles cassées par tempête ou branches, faîtages vieillissants, gouttières à reprendre.",
            },
          ],
        },
      }}
    />
  );
}
