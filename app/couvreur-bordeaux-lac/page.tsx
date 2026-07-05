import type { Metadata } from 'next';
import { QuartierBordeauxPageLayout } from '@/components/content/QuartierBordeauxPageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-bordeaux-lac');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <>
      <QuartierBordeauxPageLayout
        content={{
          slug: PAGE.slug,
          quartier: 'Lac',
          quartierInflected: 'de Bordeaux Lac',
          h1: (
            <>
              Couvreur à{' '}
              <span className="text-[var(--color-terre)]">Bordeaux Lac</span> —
              Ginko, Bassins à flot, toits-terrasses EPDM
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
            bio: "Bordeaux Lac (Ginko, Bassins à flot, Parc Floral) = quartier récent avec architecture contemporaine dominante : toits-terrasses EPDM/SEL sur copropriétés, zinguerie à joint debout sur programmes neufs, ossature bois + bac acier sur logements sociaux. Techniques différentes du bâti ancien. Depuis 2005, j'ai suivi la croissance de ce quartier et j'y interviens régulièrement.",
            badges: [
              'Depuis 2005',
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Étanchéité EPDM/SEL',
            ],
          },

          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro:
              "Notre atelier est à Mérignac, à 10 km (25-40 min) de Bordeaux Lac via A630 + rocade nord. Intervention urgence sous 45-60 min.",
            horaires: [
              { jours: 'Lundi – Vendredi', heures: '6h00 – 22h00' },
              { jours: 'Samedi – Dimanche', heures: 'Urgences 7j/7' },
            ],
            mapEmbedUrl:
              'https://www.google.com/maps?q=65+rue+de+Malbos+33700+M%C3%A9rignac&output=embed',
            itineraireUrl:
              'https://www.google.com/maps/dir//65+rue+de+Malbos,+33700+M%C3%A9rignac',
          },

          questionsCouvreur: {
            intro:
              "3 questions à poser à tout couvreur pour Bordeaux Lac, particulièrement sur toits-terrasses copropriétés.",
            items: [
              {
                question:
                  "EPDM ou SEL : quelle étanchéité pour mon toit-terrasse Ginko ?",
                answer:
                  "EPDM (caoutchouc synthétique) : durée 30-50 ans, résistant UV, pose collée. Idéal terrasses accessibles neuves. SEL (Système Étanchéité Liquide, polyuréthane) : durée 15-25 ans, sans joints, idéal reprises ponctuelles. Sur Ginko/Bassins à flot majoritairement EPDM. Nous procédons par diagnostic pour évaluer reprise localisée vs étanchéité complète.",
              },
              {
                question:
                  "Intervenez-vous en format copropriété avec syndic ?",
                answer:
                  "Oui, régulièrement. Format syndic maîtrisé : devis adapté, attestations d'assurance, planning compatible AG, acompte adapté. Nous fournissons tous les éléments nécessaires au syndic.",
              },
              {
                question: "Comment vérifier votre décennale ?",
                answer:
                  "Nous joignons systématiquement notre attestation d'assurance décennale à chaque devis, avec ses dates de validité. Sur toits-terrasses en particulier, décennale valide indispensable — les infiltrations post-chantier sont un risque majeur.",
              },
            ],
          },

        microZones: [
          'Ginko',
          'Bassins à flot',
          'Parc Floral',
          'Lac Nord',
          'Aubiers',
          'Cours de la Marne',
          'Boulevard des Frères-Moga',
          'Avenue de la Jallère',
          'Avenue des Quarante-Journaux',
          'Stade Matmut Atlantique',
          'Lac Sud',
          'Bordeaux Métropole Aréna',
        ],
        heroSubtitle:
          "Couvreur-zingueur à Bordeaux Lac depuis 2005, spécialiste des toits-terrasses des programmes neufs Ginko, Bassins à flot et Lac Nord. Étanchéité EPDM, bitume modifié, isolation toit-terrasse, copropriétés. Devis gratuit sous 24h, garantie décennale.",
        contexteUrbain: (
          <>
            <p>
              Bordeaux Lac est un quartier presque entièrement{' '}
              <strong>contemporain</strong>, sorti de terre dans les
              années 60-70 (Aubiers, immeubles haussmanniens nord) puis
              massivement urbanisé depuis 2010 avec les programmes Ginko
              et Bassins à flot. C'est aujourd'hui le périmètre Bordeaux
              le plus actif en construction neuve, avec un profil
              architectural très différent du centre patrimonial : peu
              d'échoppes traditionnelles, beaucoup de{' '}
              <strong>copropriétés contemporaines</strong>, et des
              <strong> toits-terrasses étanchés</strong> qui dominent
              largement.
            </p>
            <p>
              L'architecture du Lac impose au couvreur une spécialisation
              différente du bâti ancien. La majorité des bâtiments
              utilisent des <strong>toits-terrasses EPDM</strong> ou
              <strong> bitume modifié</strong>, parfois végétalisés à
              Ginko, avec relevés d'étanchéité au pied des murs d'attique,
              skydoms de désenfumage, et chemins de roulement de
              maintenance. Sur les programmes les plus récents, on trouve
              aussi des <strong>bacs acier</strong>, des couvertures zinc
              joint debout pour les architectures signature, et des
              isolations toiture-terrasse XPS ou PUR avec hautes performances
              thermiques (RT 2012, RE 2020). Les anciens Aubiers conservent
              des couvertures plus classiques en tuile mécanique.
            </p>
            <p>
              Notre métier dominant sur Bordeaux Lac est l'<strong>étanchéité
              de toit-terrasse</strong>. C'est un sujet technique très
              différent de la couverture pente : diagnostic des relevés,
              tests d'étanchéité par mise en eau, réparation EPDM par
              chauffage et soudure, recouvrement bitumineux avec primer
              et bandes, ou rénovation complète avec dépose et pose neuve.
              Nous intervenons aussi sur le diagnostic de pathologies
              récurrentes : décollement de l'étanchéité au droit des
              relevés, infiltrations autour de skydoms, accumulation de
              végétation sur toits végétalisés.
            </p>
            <p>
              Notre atelier à Mérignac est à <strong>9 km</strong> de
              Bordeaux Lac via la rocade. Pour les urgences (fuite en
              copropriété, étanchéité défaillante après orage, sinistre
              tempête), nous intervenons en{' '}
              <strong>45 minutes à 1 heure</strong> en heures ouvrées,
              avec mise hors d'eau immédiate. La typologie copropriété
              dominante du Lac demande une gestion administrative spécifique
              (devis pour syndic, attestations, AG) que nous maîtrisons.
            </p>
            <p>
              Couverture Gironde travaille en{' '}
              <strong>direct sans sous-traitance</strong>. C'est l'artisan
              qui chiffre, qui exécute le chantier Bordeaux Lac, qui revient
              en SAV. Sur les copropriétés du Lac, beaucoup de nos clients
              syndics nous reviennent tous les 3-5 ans pour les
              maintenances programmées d'étanchéité.{' '}
              <strong>5/5 sur 52 avis Google</strong>.
            </p>
          </>
        ),
        urgenceFuite: {
          intro: (
            <>
              <p>
                Une fuite à Bordeaux Lac est presque toujours liée à une{' '}
                <strong>étanchéité de toit-terrasse défaillante</strong>.
                Contrairement à un pavillon traditionnel où la fuite est
                visible (tuile cassée, faîtage envolé), une fuite de
                toit-terrasse peut migrer sur plusieurs mètres avant de
                se manifester en sous-face, ce qui rend le diagnostic
                délicat. Nous intervenons sur Bordeaux Lac 7j/7, avec
                mise hors d'eau immédiate (bâche provisoire si rétention
                d'eau) et diagnostic précis sous 48h.
              </p>
              <p>
                Les fuites Bordeaux Lac que nous traitons le plus souvent
                concernent les{' '}
                <strong>relevés d'étanchéité au pied des murs d'attique</strong>{' '}
                qui se décollent avec les cycles thermiques, les{' '}
                <strong>raccords autour de skydoms et de ventilation</strong>{' '}
                vieillissants, et les{' '}
                <strong>perforations EPDM</strong> dues à des objets
                tombés ou à du poids mal réparti (climatiseur, mobilier
                de jardin sur terrasse accessible).
              </p>
            </>
          ),
          casTypiques: [
            {
              title: 'Relevé d\u2019étanchéité décollé (mur d\u2019attique)',
              description:
                "Reprise complète du relevé avec primer + bande EPDM ou résine. Test de mise en eau pour valider l'étanchéité avant remise en service.",
            },
            {
              title: 'Infiltration autour d\u2019un skydom',
              description:
                "Diagnostic du raccord d'étanchéité périphérique. Reprise du joint et de la bande de soudure. Si le skydom est vieillissant, devis remplacement.",
            },
            {
              title: 'Perforation EPDM (objet tombé)',
              description:
                "Diagnostic visuel + test mise en eau. Réparation locale par chauffage + soudure EPDM ou patch. Délai 1-2h sur site.",
            },
            {
              title: 'Étanchéité bitume vieillissante (recouvrement)',
              description:
                "Sur étanchéité de 15-20 ans, recouvrement avec une nouvelle membrane bitumineuse + protection. Économie 50-60 % vs rénovation complète.",
            },
            {
              title: 'Fuite via siphon de toit-terrasse',
              description:
                "Bouchage ou rupture du siphon. Démontage, nettoyage, remplacement si nécessaire. Test mise en eau du réseau évacuation.",
            },
            {
              title: 'Sinistre copropriété (parties communes)',
              description:
                "Devis dédié syndic, attestation décennale, coordination AG. Souvent prise en charge assurance copropriété pour parties communes.",
            },
          ],
        },
        raisonsLocales: [
          {
            title: 'Spécialiste étanchéité toits-terrasses',
            description:
              "EPDM, bitume modifié, résines, étanchéité végétalisée : nous traitons quotidiennement ce type d'ouvrage sur Bordeaux Lac.",
          },
          {
            title: 'Maintenance programmée copropriétés',
            description:
              "Inspection annuelle, nettoyage des siphons et zones de rétention, vérification des relevés. Contrats récurrents sur les programmes Ginko et Bassins à flot.",
          },
          {
            title: 'Isolation toit-terrasse RE 2020',
            description:
              "Isolation XPS ou PUR conformes aux dernières normes, sur étanchéité existante (sandwich) ou en rénovation complète.",
          },
          {
            title: 'Couvreur à 9 km, urgence 45 min',
            description:
              "Atelier à Mérignac, accès rapide à Bordeaux Lac par rocade. Mise hors d'eau immédiate sur les urgences, intervention équipe spécialisée étanchéité.",
          },
          {
            title: 'Devis adaptés syndics et copropriétés',
            description:
              "Devis détaillé ligne par ligne pour syndic, attestation décennale fournie, coordination AG, options recouvrement vs rénovation complète chiffrées.",
          },
          {
            title: 'Travail direct, sans sous-traitance',
            description:
              "L'artisan qui chiffre est celui qui exécute le chantier étanchéité et qui assure le SAV. Un seul interlocuteur du devis à la garantie.",
          },
        ],
        faqLocale: [
          {
            question: "Travaillez-vous sur les programmes neufs Ginko et Bassins à flot ?",
            answer:
              "Oui, c'est une grande partie de notre activité Bordeaux Lac. Ginko et les Bassins à flot regroupent une majorité de copropriétés avec toits-terrasses étanchés EPDM ou bitume modifié. Nous intervenons pour diagnostics annuels, réparations ponctuelles, recouvrement (étanchéité 15-25 ans), ou rénovation complète (étanchéité de fin de vie, généralement 25-30 ans).",
          },
          {
            question: "Quel est le coût d'une rénovation complète de toit-terrasse ?",
            answer:
              "Une rénovation complète d'étanchéité de toit-terrasse (dépose ancienne membrane + isolation + nouvelle étanchéité + protection) coûte généralement entre 110 et 180 €/m² selon la complexité, la pente, les relevés et les exigences thermiques (RT 2012 ou RE 2020). Pour 150 m² de surface plane, comptez 16 500 à 27 000 € HT. Un recouvrement (sur étanchéité en milieu de vie) coûte 50-60 % moins cher.",
          },
          {
            question: "Mon toit-terrasse fuit. Comment localisez-vous la fuite ?",
            answer:
              "Le diagnostic d'une fuite de toit-terrasse est plus complexe qu'une fuite de couverture pente : l'eau peut migrer plusieurs mètres avant de se manifester en sous-face. Nous procédons par inspection visuelle (zones de rétention, relevés, raccords), test de mise en eau ciblé sur les zones suspectes, et parfois sondage destructif limité si le diagnostic visuel ne suffit pas. Le but : localiser précisément le défaut pour éviter une rénovation totale inutile.",
          },
          {
            question: "Quel est votre délai d'intervention en urgence ?",
            answer:
              "En heures ouvrées, 45 minutes à 1 heure. Notre atelier est à 9 km à Mérignac, accès direct à Bordeaux Lac par rocade. Mise hors d'eau immédiate avec bâche provisoire si rétention d'eau, devis de réparation définitif sous 48h. Pour les copropriétés, nous coordonnons avec le syndic pour validation.",
          },
          {
            question: "Pouvez-vous gérer la maintenance annuelle de l'étanchéité ?",
            answer:
              "Oui. Nous proposons des contrats de maintenance annuelle pour copropriétés : inspection visuelle complète, nettoyage des siphons et zones de rétention, vérification des relevés et raccords, rapport détaillé. C'est l'investissement le plus rentable pour éviter les sinistres d'étanchéité, qui sont coûteux à réparer une fois déclarés.",
          },
          {
            question: "Intervenez-vous sur les Aubiers et le périmètre nord ?",
            answer:
              "Oui. Les Aubiers et le périmètre nord Bordeaux Lac (Cours de la Marne, Avenue de la Jallère) sont intégralement couverts. Les immeubles plus anciens des Aubiers (années 60-70) ont des problématiques différentes des programmes Ginko : couvertures tuile mécanique avec étanchéité chéneaux vieillissante. Nous adaptons notre approche au type de bâti.",
          },
          {
            question: "Quelle est la durée de vie d'une étanchéité EPDM ?",
            answer:
              "Une étanchéité EPDM bien posée et bien entretenue tient 25 à 35 ans. Le bitume modifié tient 20 à 25 ans. Au-delà, les risques de fuite augmentent significativement et un recouvrement ou une rénovation complète devient économiquement préférable à des réparations répétées. Une inspection visuelle tous les 3-5 ans permet d'anticiper la fin de vie.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
