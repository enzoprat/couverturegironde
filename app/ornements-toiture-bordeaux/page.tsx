import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('ornements-toiture-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <>
      <ServicePageLayout
      content={{
        service: 'ornements',
        slug: PAGE.slug,
        h1: (
          <>
            Ornements toiture{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            épis, lambrequins zinc, girouettes patrimoniales
          </>
        ),
        heroSubtitle:
          "Pose et restauration d'ornements patrimoniaux : épis de faîtage terre cuite ou zinc, lambrequins zinc soudés étain, girouettes cuivre, rives décoratives. Techniques traditionnelles compatibles bâti girondin classé (échoppes, Chartrons, Bouscat). Devis 24h.",
        shortTitle: 'Ornements toiture',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
          bio: "Les ornements sont l'âme d'une toiture patrimoniale. Depuis 2005, je restaure épis de faîtage, lambrequins zinc, girouettes cuivre sur le bâti girondin classé. Découpe et pliage à l'atelier de Mérignac pour respect strict des modèles d'origine. Sur bâti UNESCO Bordeaux Centre ou ABF (Chartrons, Bouscat), techniques et matériaux d'origine OBLIGATOIRES.",
          badges: [
            'Depuis 2005',
            'Décennale active',
            '5/5 sur 52 avis Google',
            'Techniques traditionnelles',
          ],
        },
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

        // ————————————————————————————————————————————————
        // FAQ ORNEMENTS-FOCUSED (10 questions patrimoniales)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "Quels ornements peuvent être posés sur mon échoppe bordelaise ?",
            answer:
              "Les échoppes bordelaises XIXe traditionnelles portent typiquement : ÉPI DE FAÎTAGE en terre cuite ou zinc à l'axe central du faîtage (150-450 € pièce), LAMBREQUIN zinc soudé étain en bordure d'avant-toit (75-180 €/ml), rive décorative en tuile canal spécifique, corniche zinc en pignon. Nous restaurons chaque type à l'identique de l'original si les photos ou éléments d'époque sont disponibles.",
          },
          {
            question:
              "Combien coûte un épi de faîtage à Bordeaux en 2026 ?",
            answer:
              "Fourchettes 2026 : épi terre cuite standard 150-350 €, épi zinc soudé étain 250-550 €, épi restauration à l'identique (moulage sur modèle d'origine) 450-1 200 €, girouette cuivre standard 380-850 €, girouette sur mesure 850-2 500 €. Prix pose incluse (fixation + étanchéité). Sur mesure atelier Mérignac + pose site.",
          },
          {
            question:
              "Zinc, terre cuite ou cuivre : quel matériau choisir ?",
            answer:
              "Dépend du bâti d'origine. TERRE CUITE : compatible échoppes tuile canal, aspect chaud, coût modéré (150-450 €). ZINC : compatible bâti mixte, patine noble avec le temps, durabilité 40-60 ans (250-550 €). CUIVRE : bâti bourgeois, maisons de maître, aspect noble et patine verte iconique, durabilité 80-120 ans, coût élevé (450-2 500 €). Nous respectons TOUJOURS le matériau d'origine — sauf si la restauration l'exige.",
          },
          {
            question:
              "Faut-il un dossier ABF pour poser un épi ou une girouette ?",
            answer:
              "En secteur UNESCO Bordeaux Centre ou périmètre ABF (Chartrons, Bouscat centre, abords monuments historiques) : OUI si création d'un ornement nouveau ou changement de modèle. NON pour restauration à l'identique (même modèle, même matériau, même dimensions). Nous constituons systématiquement le dossier ABF si nécessaire. Délai instruction 2-4 mois.",
          },
          {
            question:
              "Combien de temps dure un ornement bien posé ?",
            answer:
              "Épi terre cuite : 40-60 ans si étanchéité respectée. Épi zinc soudé étain : 40-60 ans. Girouette cuivre : 80-120 ans (le cuivre s'améliore avec le temps). Lambrequin zinc soudé étain : 30-50 ans. Ces durées supposent une pose correcte (fixation + étanchéité + soudure sur place pour les éléments zinc). Nos ornements sont posés dans les règles de l'art pour tenir intergénérationnellement.",
          },
          {
            question:
              "Mon ornement d'origine est cassé — restauration ou remplacement ?",
            answer:
              "Dépend de l'état. RESTAURATION possible si : matériau récupérable, éléments manquants moulables à partir de l'existant, dommages localisés. Coût 60-70 % d'un neuf. REMPLACEMENT : matériau irrécupérable (terre cuite éclatée, zinc fortement corrodé), pièces multiples manquantes, réutilisation impossible. Nous privilégions TOUJOURS la restauration quand elle est techniquement viable — respect du bâti.",
          },
          {
            question:
              "Peut-on ajouter une girouette moderne sur une toiture ancienne ?",
            answer:
              "Techniquement oui, mais respectez l'ESTHÉTIQUE du bâti. Sur bâti girondin ancien, girouette de forme traditionnelle (coq, animal, motif floral) en cuivre ou zinc uniquement. Éviter les girouettes design contemporain ou en acier inoxydable sur échoppe XIXe — dissonance esthétique + refus ABF probable en secteur classé. Conseil personnalisé selon votre bâti.",
          },
          {
            question:
              "Comment se pose un lambrequin zinc ?",
            answer:
              "Découpe et pliage à l'atelier de Mérignac aux dimensions exactes relevées sur site. Motifs découpés à la scie sauteuse ou au laser selon complexité. Pose sur site avec fixation par clous cuivre (pas galvanisé — incompatible durée de vie zinc). Soudure étain de chaque jonction pour continuité étanche. Contrôle qualité soudure par soudure.",
          },
          {
            question:
              "Faut-il entretenir les ornements de toiture ?",
            answer:
              "Zinc et cuivre : AUCUN entretien, patine protectrice naturelle. NE PAS PEINDRE. Terre cuite : contrôle visuel tous les 5-10 ans, remplacement si fissuration (rare). Girouettes mécaniques : graissage discret du pivot tous les 15-20 ans si grincement. En général, un ornement bien posé se laisse tranquille pendant plusieurs décennies.",
          },
          {
            question:
              "Quelle garantie sur la pose d'ornements ?",
            answer:
              "Décennale (10 ans) sur l'ensemble de la prestation, obligation légale. Durabilité intrinsèque des matériaux : zinc 40-60 ans, cuivre 80-120 ans, terre cuite 40-60 ans. Fiche technique matériaux + attestation d'assurance + photos avant/après remises fin de chantier. Si défaut de fixation ou d'étanchéité dans les 10 ans, nous reprenons.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
