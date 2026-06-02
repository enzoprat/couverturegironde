import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('ornements-toiture-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'ornements',
        slug: PAGE.slug,
        h1: (
          <>
            Ornements de toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            épis, lambrequins, girouettes
          </>
        ),
        heroSubtitle:
          "Pose et restauration d'ornements de toiture traditionnels par artisan couvreur depuis 2005. Épis de faîtage, lambrequins zinc, girouettes, rives décoratives. Respect du bâti girondin classé.",
        shortTitle: 'Ornements toiture',
        presentation: (
          <>
            <p>
              Les ornements de toiture sont la{' '}
              <strong>signature architecturale</strong> du bâti girondin
              traditionnel. Épis de faîtage en terre cuite ou en zinc,
              lambrequins ajourés, girouettes ouvragées, rives
              décoratives, crêtes faîtières : ces éléments distinguent
              une toiture banale d'un patrimoine vivant. Sur les{' '}
              <strong>échoppes bordelaises</strong>, les{' '}
              <strong>chartreuses</strong>, les{' '}
              <strong>maisons bourgeoises XIXe</strong> et plus largement
              tout le bâti ancien de Bordeaux Métropole, ces ornements
              sont protégés par les règles d'urbanisme.
            </p>
            <p>
              Notre savoir-faire couvre la <strong>restauration</strong>{' '}
              comme la <strong>pose neuve</strong> d'ornements
              traditionnels. Restauration : démontage soigneux, nettoyage,
              reprise des fixations rouillées, remplacement des pièces
              cassées avec recherche de modèles compatibles. Pose neuve :
              choix d'éléments conformes au caractère du bâti, fabrication
              sur mesure en zinc lorsque nécessaire, installation respectant
              les techniques d'origine.
            </p>
            <p>
              Les <strong>épis de faîtage</strong> sont l'ornement le plus
              fréquent sur le bâti bordelais. Traditionnellement en{' '}
              <strong>terre cuite émaillée</strong> (vert, brun, parfois
              jaune) ou en <strong>zinc</strong> pour les maisons plus
              récentes, ils marquent la jonction des arêtiers et le pic
              du faîtage. Leur fixation est critique : un épi mal fixé se
              décroche au premier coup de vent et peut tomber dans la
              cour. Nous reprenons systématiquement la fixation par
              scellement traditionnel ou par ancrage mécanique selon
              l'état du support.
            </p>
            <p>
              Les <strong>lambrequins en zinc</strong> ornent les rives
              des toitures et débords. Découpés et ajourés selon des
              motifs traditionnels (palmettes, trèfles, fleurs de lys), ils
              demandent un travail de zingueur fin. Sur les rénovations,
              nous travaillons à partir d'un modèle existant à conserver,
              ou de modèles documentés dans les archives du bâti
              bordelais. Pose soudée à l'étain, sans collage.
            </p>
            <p>
              Les <strong>girouettes</strong> et{' '}
              <strong>épis girouettes</strong> combinent ornement et
              fonction (indication du vent). Elles sont fréquentes sur les
              chartreuses et les bâtiments à caractère. Restauration ou
              pose neuve avec roulement à billes pour rotation sans
              grippage, peinture protectrice antirouille, vérification de
              l'alignement.
            </p>
            <p>
              Côté <strong>secteur ABF</strong>, les zones protégées de
              Bordeaux centre (Chartrons, Saint-Pierre, Triangle d'or),
              Saint-André-de-Cubzac et certains quartiers de Pessac
              imposent le respect strict des ornements d'origine. Toute
              suppression ou modification nécessite un dossier ABF. Nous
              accompagnons ces démarches dans le cadre des restaurations
              patrimoniales.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Connaissance du patrimoine girondin',
            description:
              "Échoppes, chartreuses, maisons bourgeoises : nous connaissons les codes ornementaux locaux et les techniques de pose traditionnelles.",
          },
          {
            title: 'Travail zinc soudé étain',
            description:
              "Pour les lambrequins, crêtes, girouettes zinc : soudure étain sur place. Durabilité supérieure à tout collage ou clipsage industriel.",
          },
          {
            title: 'Recherche de modèles compatibles',
            description:
              "Pour les restaurations, nous recherchons des éléments en terre cuite ou zinc compatibles avec ceux d'origine. Pas de réparation visuellement criante.",
          },
          {
            title: 'Conformité ABF en secteur protégé',
            description:
              "Nous accompagnons les dossiers ABF pour les rénovations en secteur sauvegardé. Conformité garantie avec les exigences patrimoniales.",
          },
          {
            title: 'Fixation pérenne',
            description:
              "Scellement traditionnel ou ancrage mécanique selon l'état. Un ornement bien fixé tient des décennies sans intervention.",
          },
          {
            title: 'Devis transparent par élément',
            description:
              "Chiffrage détaillé par ornement (épi, lambrequin, girouette, rive). Vous savez exactement ce que coûte chaque élément.",
          },
        ],
        risques: [
          {
            title: 'Chute d\u2019un ornement mal fixé',
            description:
              "Un épi de faîtage descellé peut tomber à plusieurs mètres et causer des dégâts ou blessures. La fixation doit être contrôlée tous les 10-15 ans.",
          },
          {
            title: 'Perte de valeur patrimoniale',
            description:
              "La suppression d'ornements caractéristiques (lambrequin zinc, girouette) déprécie un bien patrimonial. Sur le marché bordelais, l'authenticité valorise fortement.",
          },
          {
            title: 'Restauration approximative criante',
            description:
              "Un élément de remplacement non compatible (couleur, matière, époque) altère l'esthétique d'ensemble. Particulièrement visible sur les beaux quartiers.",
          },
          {
            title: 'Sanction en secteur ABF',
            description:
              "Modifier ou supprimer un ornement protégé sans accord ABF expose à un arrêté de remise en état. Toujours vérifier le statut du bâti avant intervention.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic du patrimoine ornemental',
            description:
              "Inventaire des ornements existants : épis, lambrequins, girouettes, rives. État des fixations, des matériaux, des éléments à conserver/restaurer/remplacer.",
          },
          {
            title: 'Recherche de compatibilité',
            description:
              "Pour les éléments à remplacer : recherche de modèles compatibles (récupération, fabrication sur mesure, équivalent stocké). Choix avec vous.",
          },
          {
            title: 'Démarches ABF si secteur protégé',
            description:
              "En secteur sauvegardé, constitution du dossier ABF avec photos avant/après et descriptif technique. Délai d'instruction 1-2 mois.",
          },
          {
            title: 'Démontage et restauration',
            description:
              "Démontage soigneux des éléments à restaurer. Nettoyage, reprise des fixations, peinture protectrice si zinc. Conservation maximale des originaux.",
          },
          {
            title: 'Fabrication et pose des éléments neufs',
            description:
              "Pour le zinc : découpe et soudure étain en atelier puis pose soudée sur place. Pour la terre cuite : choix de modèles équivalents.",
          },
          {
            title: 'Vérification et réception',
            description:
              "Contrôle d'alignement, de fixation, d'étanchéité. Photos avant/après remises avec attestation. Conseils d'entretien pour les décennies suivantes.",
          },
        ],
      }}
    />
  );
}
