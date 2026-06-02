import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('couvreur-talence');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <VillePageLayout
      content={{
        slug: PAGE.slug,
        villeSlug: 'talence',
        heroSubtitle:
          "Couvreur-zingueur à Talence depuis 2005. Démoussage, nettoyage, réparation et zinguerie sur l'ensemble de la commune et des quartiers proches. Intervention rapide depuis Mérignac, garantie décennale.",
        contexteLocal: (
          <>
            <p>
              Talence est l'une des communes les plus denses et architecturalement
              riches de Bordeaux Métropole. Située directement au sud de
              Bordeaux, elle conserve un{' '}
              <strong>patrimoine bâti remarquable</strong> : nombreuses échoppes
              bordelaises traditionnelles, maisons bourgeoises XIXe siècle dans
              les quartiers Thouars et Peixotto, et villas plus récentes en
              limite de Pessac. Cette diversité architecturale impose à un
              couvreur talençais une grande polyvalence technique.
            </p>
            <p>
              Les <strong>toitures en tuiles canal</strong> dominent largement
              sur Talence, héritage des constructions XIXe et début XXe siècle.
              Elles demandent un savoir-faire spécifique : pression de
              nettoyage limitée à 80-100 bars, brossage manuel des zones très
              colonisées, et respect du rythme et de la pose d'origine pour ne
              pas dénaturer le caractère du bâti. Quelques toitures en{' '}
              <strong>ardoise</strong> subsistent sur des maisons de maître,
              notamment vers la Médoquine, et nécessitent une approche encore
              différente — pression réduite à 60-80 bars maximum, buse adaptée,
              outillage spécifique.
            </p>
            <p>
              Le climat océanique de Talence est très proche de celui de
              Bordeaux centre : <strong>humidité élevée</strong>, alternance
              pluies-soleil, hivers doux. Cette météo, combinée à la densité
              des alignements d'arbres (cours de la Libération, parc Peixotto,
              campus universitaire),{' '}
              <strong>favorise le développement des mousses</strong>{' '}
              particulièrement sur les versants nord et les pans ombragés. Les
              toitures talençaises non entretenues sont colonisées en moins de
              5 ans.
            </p>
            <p>
              Notre dépôt est à <strong>9 km</strong> de Talence à Mérignac
              (65 rue de Malbos, 33700). Nous intervenons quotidiennement sur
              la commune en moins d'une heure depuis l'atelier. Cette
              proximité permet une vraie réactivité pour les{' '}
              <strong>urgences fuite</strong> qui sont fréquentes après les
              tempêtes ou les fortes pluies d'automne — mise hors d'eau
              généralement réalisée dans les 2 à 4 heures suivant l'appel,
              devis de réparation détaillé sous 48h.
            </p>
            <p>
              Talence présente aussi un{' '}
              <strong>contexte urbain particulier</strong> : rues étroites
              dans les vieux quartiers, riverains à informer pour les
              chantiers nécessitant un échafaudage ou une nacelle. Nous gérons
              toutes les démarches administratives : déclarations préalables,
              demande d'occupation de la voirie auprès des services
              municipaux, autorisations ABF si secteur sauvegardé. L'objectif
              est de vous décharger entièrement de la logistique
              administrative et de vous livrer un chantier propre, dans les
              délais.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Expertise du bâti ancien talençais',
            description:
              "Échoppes bordelaises, maisons bourgeoises, tuiles canal traditionnelles. Nous respectons les caractéristiques du bâti d'origine sans le dénaturer.",
          },
          {
            title: 'Pression et buse adaptées par matériau',
            description:
              "Tuile canal : 80-100 bars. Ardoise : 60-80 bars. Pas de nettoyage agressif standard. C'est la garantie d'une toiture qui dure.",
          },
          {
            title: 'Réactivité 9 km depuis Mérignac',
            description:
              "Intervention urgence en 30-60 minutes en heures ouvrées. Notre proximité géographique évite les surcoûts de déplacement.",
          },
          {
            title: 'Gestion complète des démarches administratives',
            description:
              "Déclaration préalable, occupation de voirie, ABF si nécessaire : nous nous occupons de tout pour que vous n'ayez qu'à signer.",
          },
          {
            title: 'Travail soigné en milieu urbain dense',
            description:
              "Information des voisins, protection des trottoirs, gestion des écoulements pluviaux. Le chantier ne perturbe pas votre quotidien ni celui des riverains.",
          },
          {
            title: 'Garantie décennale + assurance RC active',
            description:
              "Justificatifs d'assurance fournis avec le devis. Vous êtes protégé pendant 10 ans après réception des travaux.",
          },
        ],
        tarifsLines: [
          {
            service: 'Démoussage toiture (avec brossage manuel)',
            range: '13 – 19 €/m²',
            note: 'Tarif urbain — accessibilité parfois complexe',
          },
          {
            service: 'Démoussage + traitement hydrofuge',
            range: '19 – 28 €/m²',
            note: 'Recommandé pour le climat humide local',
          },
          {
            service: 'Nettoyage haute pression maîtrisé',
            range: '13 – 21 €/m²',
            note: 'Démoussage chimique léger inclus',
          },
          {
            service: 'Remplacement de tuiles cassées',
            range: '180 – 480 €',
            note: 'Forfait diagnostic + intervention',
          },
          {
            service: 'Réfection de faîtage scellé',
            range: '45 – 75 €/ml',
            note: 'Mortier chaux pour bâti ancien',
          },
          {
            service: 'Zinguerie complète (gouttières + descentes)',
            range: '60 – 95 €/ml',
            note: 'Zinc naturel ou prépatiné',
          },
          {
            service: "Urgence fuite 7j/7",
            range: '280 – 650 €',
            note: 'Mise hors d\u2019eau immédiate',
          },
          {
            service: 'Réfection complète tuile canal',
            range: '95 – 165 €/m²',
            note: 'Conservation matériau d\u2019origine',
          },
        ],
        faqLocale: [
          {
            question: 'Intervenez-vous dans toute Talence ?',
            answer:
              "Oui, nous couvrons l'ensemble du territoire talençais : Thouars, Médoquine, Peixotto, Compostelle, ainsi que les zones limitrophes avec Pessac et Bordeaux. Tarifs identiques sur toute la commune.",
          },
          {
            question:
              'Faut-il une autorisation pour refaire sa toiture à Talence ?',
            answer:
              "Pour une réfection à l'identique (même matériau, même teinte, même pente), aucune formalité administrative n'est généralement requise. Pour un changement de matériau ou de couleur, une déclaration préalable de travaux est obligatoire. Certaines zones de Talence (proximité du parc Peixotto, abords de monuments) peuvent être soumises à l'avis de l'Architecte des Bâtiments de France. Nous vous indiquons les démarches dès le diagnostic.",
          },
          {
            question:
              'Mon échoppe bordelaise a 100 ans, pouvez-vous restaurer sa toiture traditionnelle ?',
            answer:
              "Oui, c'est même notre spécialité sur Talence. Restauration de tuile canal traditionnelle, conservation du caractère ancien, reprise des faîtages au mortier chaux, remplacement éventuel des tuiles cassées avec des modèles assortis. Nous fournissons des tuiles de récupération si nécessaire.",
          },
          {
            question:
              'Combien de temps dure un chantier de démoussage à Talence ?',
            answer:
              "Pour une toiture de maison individuelle (100 à 150 m²), comptez 1 à 2 jours selon l'accessibilité et l'état initial. Si traitement hydrofuge inclus, ajouter une demi-journée d'application + 12-24h de séchage avant test final.",
          },
          {
            question:
              "Les gouttières en zinc s'oxydent-elles dans le climat humide bordelais ?",
            answer:
              "Le zinc forme naturellement une patine protectrice (carbonate de zinc) qui le rend très résistant à l'humidité. Une gouttière zinc bien posée à Talence tient 30 à 50 ans sans entretien majeur, contrairement au PVC qui devient cassant en 10-15 ans.",
          },
          {
            question:
              'Acceptez-vous d\u2019intervenir en copropriété à Talence ?',
            answer:
              "Oui, nous intervenons fréquemment en copropriété sur Talence (résidences quartier Peixotto, Médoquine). Devis adapté au format syndic, attestations d'assurance, planning compatible AG. Acompte limité.",
          },
          {
            question:
              'Comment se passe une urgence fuite la nuit ou le week-end ?',
            answer:
              "Pour les urgences nuit/week-end, laissez un message vocal au 07 68 69 78 48. Nous rappelons en priorité absolue dès la première heure de la journée suivante avec un créneau d'intervention prioritaire. La mise hors d'eau intervient dans la matinée.",
          },
        ],
      }}
    />
  );
}
