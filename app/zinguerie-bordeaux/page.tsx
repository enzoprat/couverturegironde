import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('zinguerie-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'zinguerie',
        slug: PAGE.slug,
        h1: (
          <>
            Zinguerie à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            gouttières, descentes, finitions zinc
          </>
        ),
        heroSubtitle:
          "Pose et rénovation de gouttières, chéneaux, descentes et habillages zinc par artisan zingueur depuis 2005. Travail traditionnel ou contemporain, finition soignée, garantie d'étanchéité.",
        shortTitle: 'Zinguerie',
        presentation: (
          <>
            <p>
              La zinguerie est l'art d'évacuer l'eau de votre toiture et de
              finir les jonctions avec les murs et les ouvertures. Mal faite,
              elle est invisible jusqu'au jour où elle déborde et tache vos
              façades. Bien faite, elle dure 30 à 50 ans sans entretien et
              valorise immédiatement le bâti.
            </p>
            <p>
              <strong>
                À Bordeaux, le zinc reste la référence absolue pour les
                échoppes, les maisons bourgeoises et les bâtisses anciennes
              </strong>
              . Sa patine naturelle, sa durabilité et sa compatibilité avec
              tous les matériaux de couverture en font le choix par défaut des
              architectes des bâtiments de France et des couvreurs sérieux.
            </p>
            <p>
              Notre atelier travaille toutes les configurations : gouttières
              demi-rondes traditionnelles, gouttières havraises, chéneaux
              encaissés, descentes carrées ou rondes, noues, raccords muraux,
              habillages de souches de cheminée, abergements de Velux. Nous
              soudons à l'étain sur place pour les jonctions exposées —
              garantie d'étanchéité supérieure à n'importe quel collage.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Zinc naturel ou prépatiné selon contexte',
            description:
              "Zinc naturel qui se patine sur 2-3 ans pour bâti traditionnel. Prépatiné anthracite pour rendu contemporain immédiat. Choix conseillé selon le style de votre maison et l'environnement.",
          },
          {
            title: 'Soudure étain sur place',
            description:
              "Toutes les jonctions critiques sont soudées à l'étain sur le chantier. Étanchéité supérieure et durable, contrairement aux assemblages collés ou clipsés qui finissent par lâcher.",
          },
          {
            title: 'Dimensionnement adapté à la pluviométrie',
            description:
              "À Bordeaux, la pluie peut tomber très intense lors d'épisodes orageux. Nous dimensionnons gouttières et descentes selon la surface réelle de toiture pour éviter tout débordement.",
          },
          {
            title: 'Respect du bâti ancien',
            description:
              "Pour les échoppes et bâtisses bordelaises, nous travaillons dans le respect des codes architecturaux : gouttières demi-rondes Ø 25, descentes carrées 80x80 ou rondes Ø 80 selon usage local.",
          },
          {
            title: 'Garantie 30 ans matériau',
            description:
              "Le zinc bien posé a une durée de vie de 30 à 50 ans. Notre garantie décennale couvre la pose ; le matériau est garanti par le fabricant pour 30 ans minimum.",
          },
        ],
        risques: [
          {
            title: 'PVC qui durcit et craque',
            description:
              "Les gouttières PVC perdent leur élasticité en 10-15 ans à cause des UV. Elles craquent, lâchent leurs fixations et déversent l'eau le long des murs. Le PVC est faux ami en zone exposée.",
          },
          {
            title: 'Coulures noires sur les façades',
            description:
              "Une zinguerie défaillante laisse l'eau ruisseler le long des murs. Les coulures noires sur la pierre bordelaise sont presque impossibles à nettoyer une fois installées.",
          },
          {
            title: 'Infiltrations en pied de mur',
            description:
              "L'eau qui déborde des gouttières crée des infiltrations en pied de mur et dans les fondations. Humidité chronique, salpêtre, dégâts d'enduit — chaîne de dommages très coûteuse.",
          },
          {
            title: 'Mauvaise évacuation en cas d\u2019orage',
            description:
              "Une gouttière sous-dimensionnée déborde dès la première pluie intense. Vos voisins, votre jardin, vos plantations — tout en pâtit. Le dimensionnement est non négociable.",
          },
        ],
        methode: [
          {
            title: 'Visite et relevé',
            description:
              "Mesure précise de la surface de toiture, identification des contraintes (alignement existant, contraintes ABF si secteur sauvegardé), choix esthétique selon votre bâti.",
          },
          {
            title: 'Devis matériau et finitions',
            description:
              "Détail du devis : type de zinc (naturel/prépatiné), section gouttière, dimensionnement descentes, points de jonction soudée. Aucune zone grise.",
          },
          {
            title: 'Préparation des éléments',
            description:
              "Découpe et pliage en atelier de la majorité des éléments aux cotes exactes. Gain de temps sur chantier, précision augmentée.",
          },
          {
            title: 'Pose des supports',
            description:
              "Installation des crochets ou colliers avec respect strict de la pente d'écoulement (1 cm par mètre minimum). Espacement régulier pour éviter toute déformation à long terme.",
          },
          {
            title: 'Pose et soudure sur place',
            description:
              "Pose des éléments, soudure étain des jonctions critiques, ajustement des descentes. Test à l'eau immédiat pour valider l'écoulement.",
          },
          {
            title: 'Finitions et nettoyage',
            description:
              "Pose des bouchons et finitions décoratives (rosaces, ornements éventuels). Nettoyage complet du chantier. Photos et garantie remises.",
          },
        ],
      }}
    />
  );
}
