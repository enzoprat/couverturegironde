import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('faitage-toiture-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'faitage',
        slug: PAGE.slug,
        h1: (
          <>
            Faîtage de toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            rénovation, étanchéité, mise aux normes
          </>
        ),
        heroSubtitle:
          "Rénovation de faîtage de toiture à Bordeaux et en Gironde. Faîtage scellé au mortier ou à sec ventilé selon votre bâti. Étanchéité durable, conformité DTU 40.211, garantie décennale.",
        shortTitle: 'Faîtage toiture',
        presentation: (
          <>
            <p>
              Le faîtage est{' '}
              <strong>la ligne la plus haute de votre toiture</strong>, à
              la jonction des versants. C'est aussi l'un de ses{' '}
              <strong>points d'étanchéité les plus critiques</strong> :
              chaque tuile faîtière mal scellée ou cassée laisse passer
              l'eau directement dans la charpente, sans la moindre
              barrière intermédiaire. Une fuite au faîtage se traduit
              immédiatement en infiltration en sous-face et en dégât
              d'isolation.
            </p>
            <p>
              Sur le bâti bordelais, on rencontre principalement deux
              techniques de faîtage : le{' '}
              <strong>faîtage scellé au mortier</strong>, traditionnel,
              qui domine largement les toitures anciennes, et le{' '}
              <strong>faîtage à sec ventilé</strong>, technique
              contemporaine intégrant un closoir ventilé qui assure
              l'étanchéité et la ventilation de sous-toiture. Chaque
              technique a ses avantages et son contexte d'application —
              et chacune se rénove différemment.
            </p>
            <p>
              Le <strong>faîtage scellé</strong> est apprécié pour son
              aspect homogène avec les toitures anciennes (échoppes
              bordelaises, maisons bourgeoises, bâti traditionnel). Il
              utilise un mortier bâtard (chaux + ciment + sable) appliqué
              sur les rives des tuiles supérieures. Inconvénient :
              <strong> le mortier fissure et se décolle</strong> sous
              l'effet du gel, du retrait thermique et du temps. Une
              rénovation est généralement nécessaire tous les 25-40 ans.
            </p>
            <p>
              Le <strong>faîtage à sec ventilé</strong> représente
              l'évolution technique moderne. Un closoir auto-adhésif
              (plomb gaufré ou aluminium souple), un peigne ventilé en
              sous-face et un système de fixation mécanique remplacent le
              mortier. Avantages :{' '}
              <strong>
                ventilation continue de la sous-toiture, durabilité accrue,
                pas de mortier à reprendre
              </strong>
              . En revanche, l'aspect est moins traditionnel, à éviter
              en secteur ABF strict.
            </p>
            <p>
              Sur Bordeaux Métropole, nous rénovons quotidiennement les
              deux techniques. Notre approche standard :{' '}
              <strong>conservation de la technique d'origine</strong>{' '}
              lorsque le bâti est ancien ou en secteur protégé, et
              proposition du faîtage à sec ventilé sur les rénovations
              énergétiques où la ventilation de sous-toiture devient
              importante (combles isolés perdants). Le choix vous est
              expliqué au cours du diagnostic gratuit.
            </p>
            <p>
              Côté <strong>réglementation</strong>, la rénovation de
              faîtage est régie par le DTU 40.211 (couverture en tuiles
              de terre cuite). Une intervention dans les règles de l'art
              respecte les recouvrements, les sens de pose, et la
              ventilation de sous-toiture obligatoire en cas d'isolation
              renforcée. Nous garantissons cette conformité par notre
              décennale.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Maîtrise des deux techniques',
            description:
              "Faîtage scellé traditionnel et faîtage à sec ventilé : nous travaillons les deux quotidiennement et conseillons selon le contexte de votre bâti.",
          },
          {
            title: 'Mortier chaux pour bâti ancien',
            description:
              "Sur les bâtiments d'avant 1948, nous utilisons un mortier à la chaux compatible avec la tuile et la charpente d'origine. Pas de mortier ciment destructeur.",
          },
          {
            title: 'Closoir ventilé pour rénovation énergétique',
            description:
              "Si vous avez isolé vos combles, la ventilation de sous-toiture devient critique. Le closoir ventilé l'assure mécaniquement sans risque de condensation.",
          },
          {
            title: 'Conformité DTU 40.211',
            description:
              "Nos rénovations respectent les recouvrements, sens de pose et ventilation imposés par le DTU. Conformité technique garantie par notre décennale.",
          },
          {
            title: 'Inspection complète des autres points',
            description:
              "Pendant l'intervention sur le faîtage, nous inspectons noues, abergements, raccords. Nous repérons les points faibles avant qu'ils ne deviennent des fuites.",
          },
          {
            title: 'Tarif transparent au mètre linéaire',
            description:
              "Faîtage scellé : 45-75 €/ml. Faîtage à sec ventilé : 35-60 €/ml. Devis détaillé selon longueur exacte et accessibilité.",
          },
        ],
        risques: [
          {
            title: 'Infiltration directe en charpente',
            description:
              "Une tuile faîtière mal scellée ou fissurée laisse passer l'eau directement sur les chevrons. Risque structurel rapide : pourriture des bois, déformation.",
          },
          {
            title: 'Mortier ciment sur bâti ancien',
            description:
              "Le ciment Portland sur une charpente ancienne crée des contraintes mécaniques destructrices. Le mortier à la chaux est obligatoire pour préserver le bâti.",
          },
          {
            title: 'Faîtage scellé sans ventilation',
            description:
              "Un faîtage scellé étanche bouche la ventilation de sous-toiture. Si vous avez isolé vos combles, c'est la garantie de condensation et de mousses sous toiture.",
          },
          {
            title: 'Reprise partielle qui se propage',
            description:
              "Sceller à nouveau seulement les zones visiblement fissurées sans contrôler le reste du faîtage = nouvelle fuite garantie 2-3 ans plus tard.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic gratuit sur site',
            description:
              "Inspection visuelle du faîtage et de la sous-face. Identification de la technique d'origine et des défauts (mortier décollé, tuiles cassées, ventilation).",
          },
          {
            title: 'Conseil technique et devis',
            description:
              "Proposition de la technique adaptée (conserver scellé ou passer au sec ventilé). Devis détaillé au mètre linéaire, sous 24h.",
          },
          {
            title: 'Préparation du chantier',
            description:
              "Échafaudage si nécessaire, lignes de vie, bâchage temporaire. Information des voisins, gestion des autorisations si secteur protégé.",
          },
          {
            title: 'Dépose de l\u2019ancien faîtage',
            description:
              "Retrait des tuiles faîtières, grattage du mortier ancien, contrôle des chevrons et de l'isolation en sous-face. Photos des points contrôlés.",
          },
          {
            title: 'Pose du nouveau faîtage',
            description:
              "Pose du closoir ventilé OU application du mortier chaux selon technique retenue. Pose des tuiles faîtières neuves, contrôle des recouvrements.",
          },
          {
            title: 'Tests et réception',
            description:
              "Test d'étanchéité par aspersion contrôlée. Vérification visuelle finale, photos avant/après. Garantie décennale activée.",
          },
        ],
      }}
    />
  );
}
