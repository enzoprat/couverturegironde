import type { Metadata } from 'next';
import { QuartierBordeauxPageLayout } from '@/components/content/QuartierBordeauxPageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('couvreur-bordeaux-centre');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <QuartierBordeauxPageLayout
      content={{
        slug: PAGE.slug,
        quartier: 'Centre',
        quartierInflected: 'du centre de Bordeaux',
        microZones: [
          'Triangle d\u2019Or',
          'Saint-Pierre',
          'Sainte-Catherine',
          'Saint-Michel',
          'Saint-Paul',
          'Place Pey-Berland',
          'Cours Victor-Hugo',
          'Place de la Bourse',
          'Quai du Maréchal-Lyautey',
          'Allées de Tourny',
          'Cours de l\u2019Intendance',
          'Mériadeck',
        ],
        heroSubtitle:
          "Couvreur-zingueur à Bordeaux Centre depuis 2005, intervention chaque jour sur les toitures du Triangle d'Or, Saint-Pierre, Sainte-Catherine et Saint-Michel. Spécialiste des échoppes bordelaises, hôtels particuliers et bâti UNESCO classé. Démarches ABF gérées, intervention sous 1h en urgence, devis gratuit sous 24h.",
        contexteUrbain: (
          <>
            <p>
              Le centre de Bordeaux est l'un des territoires les plus exigeants
              de la métropole pour un couvreur. Classé{' '}
              <strong>UNESCO patrimoine mondial</strong> depuis 2007, il
              concentre un patrimoine bâti exceptionnel : hôtels particuliers
              XVIII<sup>e</sup>, échoppes bordelaises traditionnelles,
              immeubles haussmanniens du Triangle d'Or, façades classées
              place de la Bourse et cours de l'Intendance. Chaque chantier
              de toiture y impose le respect d'un cadre patrimonial strict,
              et beaucoup nécessitent l'<strong>avis de l'Architecte des
              Bâtiments de France (ABF)</strong>.
            </p>
            <p>
              Les toitures du centre-ville sont majoritairement en{' '}
              <strong>tuile canal traditionnelle</strong>, héritage des
              constructions XVII<sup>e</sup>-XIX<sup>e</sup> siècles, avec
              quelques bâtisses XX<sup>e</sup> en{' '}
              <strong>ardoise naturelle</strong> (Mériadeck excepté, plus
              moderne). La densité urbaine impose des contraintes lourdes :
              accès chantier par rues étroites, occupation de la voirie à
              négocier avec les services municipaux, riverains à informer
              en amont. Nous gérons systématiquement ces formalités dans
              le cadre de nos prestations.
            </p>
            <p>
              Le bâti ancien du centre demande un savoir-faire spécifique :
              <strong> mortier chaux</strong> et non ciment pour le scellement
              des faîtages (le ciment rigidifie et fissure), pression de
              nettoyage limitée à 80 bars sur tuile canal centenaire,
              respect des proportions et de la pose d'origine pour ne pas
              dénaturer le caractère du bâtiment, récupération maximale
              des tuiles d'époque. Sur les immeubles avec copropriété, nous
              fournissons les devis et attestations adaptés aux usages syndic
              et assemblées générales.
            </p>
            <p>
              Notre atelier de Mérignac est à <strong>8 km</strong> du
              centre de Bordeaux, via la rocade ou le pont Saint-Jean.
              Pour les urgences (fuite déclarée, tuile envolée par un
              coup de vent, infiltration brutale), nous intervenons en{' '}
              <strong>1 heure environ</strong> en heures ouvrées, avec
              mise hors d'eau immédiate. La connaissance fine du
              territoire bordelais centre nous permet d'anticiper les
              contraintes d'accès (rues piétonnes, secteurs sauvegardés
              où les véhicules sont limités).
            </p>
            <p>
              Couverture Gironde travaille en{' '}
              <strong>direct sans sous-traitance</strong>. C'est l'artisan
              qui se déplace, qui chiffre, qui exécute et qui assure le
              SAV à long terme. Ce mode opératoire explique nos{' '}
              <strong>5/5 sur 54 avis Google</strong>, et la
              recommandation de syndics et de copropriétaires du centre
              qui nous renvoient régulièrement des chantiers.
            </p>
          </>
        ),
        urgenceFuite: {
          intro: (
            <>
              <p>
                Une fuite de toiture dans le centre de Bordeaux est presque
                toujours une urgence absolue. Le bâti dense, les copropriétés
                imbriquées, les{' '}
                <strong>plafonds peints d'hôtels particuliers</strong> ou les
                <strong> mezzanines bois d'échoppes anciennes</strong> peuvent
                être ruinés en quelques heures par une infiltration non
                stoppée. Nous intervenons sur le centre Bordeaux 7j/7 pour
                mise hors d'eau immédiate avec bâche et sécurisation, suivi
                d'un devis de réparation détaillé sous 48h.
              </p>
              <p>
                Les fuites du centre que nous traitons le plus souvent
                concernent les <strong>faîtages scellés au mortier ciment</strong>{' '}
                qui fissurent avec les cycles gel-dégel, les{' '}
                <strong>abergements de cheminées briques</strong> oxydés
                après 25-30 ans, et les{' '}
                <strong>noues zinc des toitures à plusieurs pans</strong>{' '}
                d'hôtels particuliers, zones critiques d'évacuation d'eau.
              </p>
            </>
          ),
          casTypiques: [
            {
              title: 'Faîtage scellé fissuré (échoppe)',
              description:
                "Le mortier ciment rigide a cédé sous les cycles gel-dégel. Reprise complète au mortier chaux compatible bâti UNESCO. Délai 1-2 jours selon linéaire.",
            },
            {
              title: 'Abergement de cheminée briques détérioré',
              description:
                "Sur le bâti XIXe du Triangle d'Or, abergement zinc fatigué et oxydé. Dépose et pose d'un abergement neuf avec soudure étain in situ.",
            },
            {
              title: 'Noue zinc percée (hôtel particulier)',
              description:
                "Toitures à plusieurs pans avec noues centrales. Diagnostic par sondage, soudure si récupérable, sinon remplacement avec zinc qualité patrimoine.",
            },
            {
              title: 'Tuile canal cassée par tempête',
              description:
                "Sécurisation immédiate, remplacement à l'identique avec tuiles d'origine récupérées sur place quand possible. Diagnostic des tuiles adjacentes.",
            },
            {
              title: 'Étanchéité de zinguerie sur rive haute',
              description:
                "Sur les façades classées, rives hautes en zinc patiné à reprendre. Travail sur échafaudage avec accord ABF si secteur sauvegardé.",
            },
            {
              title: 'Infiltration sur copropriété ancienne',
              description:
                "Bâti partagé entre plusieurs propriétaires. Devis dédié au syndic, attestation décennale fournie, coordination avec l'AG pour décision.",
            },
          ],
        },
        raisonsLocales: [
          {
            title: 'Expertise UNESCO et avis ABF',
            description:
              "20 ans d'intervention sur le centre Bordeaux classé. Nous gérons les démarches ABF dans le cadre de nos prestations, sans surcoût administratif.",
          },
          {
            title: 'Mortier chaux pour bâti ancien',
            description:
              "Pas de ciment dur sur les échoppes XIXe ou les hôtels particuliers : chaque scellement de faîtage utilise un mortier chaux compatible avec le bâti.",
          },
          {
            title: 'Couvreur à 8 km du centre, urgence en 1h',
            description:
              "Atelier à Mérignac, accès rapide au centre par rocade ou pont. Mise hors d'eau immédiate sur les urgences fuite, sans surcoût de déplacement.",
          },
          {
            title: 'Connaissance des rues étroites du centre',
            description:
              "Accès chantier en secteur piétonnier négocié avec la mairie. Information riverains gérée par notre équipe. Pas de surprise le jour J.",
          },
          {
            title: 'Devis adaptés aux copropriétés',
            description:
              "Sur les nombreuses copropriétés du centre, devis détaillé pour syndic, attestation décennale, coordination AG. Acompte raisonnable.",
          },
          {
            title: 'Travail direct, sans sous-traitance',
            description:
              "L'artisan qui chiffre est celui qui exécute le chantier sur place et qui revient en SAV. Un seul interlocuteur du devis à la garantie.",
          },
        ],
        faqLocale: [
          {
            question: "Faut-il l'avis de l'ABF pour refaire ma toiture dans le centre de Bordeaux ?",
            answer:
              "Oui, dans la majorité des cas. Le centre historique de Bordeaux est en grande partie en secteur sauvegardé (UNESCO). Toute modification visible de l'extérieur (changement de matériau, de teinte, ajout de Velux) nécessite l'avis préalable de l'Architecte des Bâtiments de France. Nous prenons en charge ces démarches dans le cadre de nos prestations, sans frais supplémentaire de notre côté (les éventuelles taxes de l'instruction restent à votre charge).",
          },
          {
            question: "Pouvez-vous intervenir sur les échoppes bordelaises classiques ?",
            answer:
              "Oui, c'est une partie essentielle de notre activité au centre. L'échoppe bordelaise classique (tuile canal sur charpente bois, faîtage scellé chaux, fronton frise) demande un savoir-faire spécifique que nous appliquons quotidiennement : récupération maximale des tuiles d'origine, mortier chaux pour les scellements, respect des proportions et de la pose.",
          },
          {
            question: "Quel est votre délai d'intervention en urgence dans le centre ?",
            answer:
              "En heures ouvrées, environ 1 heure pour les urgences (fuite déclarée, tuile envolée, infiltration brutale). Notre atelier est à 8 km à Mérignac, avec accès rapide par rocade ou pont Saint-Jean. Pour les rues piétonnes ou les secteurs sauvegardés, nous adaptons le déplacement aux contraintes d'accès.",
          },
          {
            question: "Travaillez-vous avec les syndics et copropriétés du centre ?",
            answer:
              "Oui, c'est l'un de nos métiers réguliers au centre. Nous fournissons devis détaillés ligne par ligne adaptés aux usages syndic et assemblées générales, attestations d'assurance décennale, et coordonnons les interventions avec les contraintes de propriété partagée. Acompte raisonnable (30 % maximum), solde après réception.",
          },
          {
            question: "Comment gérez-vous les accès chantier en zone piétonne ?",
            answer:
              "Sur les rues piétonnes du Triangle d'Or, de Saint-Pierre ou de Sainte-Catherine, nous négocions les arrêtés municipaux nécessaires (occupation de voirie, autorisation d'accès véhicule technique en heures contraintes). Nous informons les riverains en amont par flyer ou affichage. La logistique chantier est intégralement prise en charge.",
          },
          {
            question: "Couvrez-vous tous les quartiers du centre ?",
            answer:
              "Oui : Triangle d'Or, Saint-Pierre, Sainte-Catherine, Saint-Michel, Saint-Paul, Pey-Berland, Bourse, Tourny, Intendance, Mériadeck, et les quartiers limitrophes (Saint-Seurin, Capucins). Mêmes tarifs et même réactivité partout dans le périmètre centre Bordeaux.",
          },
          {
            question: "Acceptez-vous les paiements échelonnés ?",
            answer:
              "Oui. Sur les chantiers supérieurs à 5 000 € HT (fréquent au centre vu la complexité des bâtis classés), paiement en 2 ou 3 fois sans frais. Pour les éco-PTZ liés à la rénovation énergétique de toiture, justificatifs fournis à votre banque.",
          },
        ],
      }}
    />
  );
}
