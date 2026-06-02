import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('couvreur-pessac');

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
        villeSlug: 'pessac',
        heroSubtitle:
          "Couvreur-zingueur basé à Mérignac, nous intervenons à Pessac tous les jours pour le démoussage, le nettoyage, la réparation et la zinguerie. 20 ans d'expérience, garantie décennale, devis gratuit sous 24h.",
        contexteLocal: (
          <>
            <p>
              Pessac est l'une des communes les plus arborées de Bordeaux
              Métropole. Entre le domaine universitaire, le Bourgailh et les
              vastes zones pavillonnaires de Saige, Cap-de-Bos ou Toctoucau,
              une grande partie des toitures pessacaises souffrent d'une{' '}
              <strong>exposition prolongée à l'humidité et aux mousses</strong>{' '}
              en raison du couvert végétal dense qui caractérise la ville. Nos
              équipes interviennent quotidiennement sur ce territoire et
              connaissent précisément les contraintes locales.
            </p>
            <p>
              Les toitures pessacaises mêlent plusieurs typologies :{' '}
              <strong>tuiles canal traditionnelles</strong> sur les bâtisses
              anciennes du centre, <strong>tuiles mécaniques</strong> sur la
              majorité des pavillons d'après-guerre, et quelques{' '}
              <strong>ardoises</strong> sur les maisons bourgeoises. Cette
              diversité demande un savoir-faire ajusté à chaque matériau : la
              pression de nettoyage, le choix du produit anti-mousse, ou le
              dimensionnement des gouttières ne se traitent pas de la même
              manière entre une échoppe Saige et une villa Bourgailh.
            </p>
            <p>
              Le climat océanique de Pessac — pluviométrie annuelle moyenne de
              930 mm, hivers doux et humides — favorise particulièrement la
              prolifération des mousses, lichens et algues sur les versants
              nord et les pans ombragés.{' '}
              <strong>
                Un démoussage tous les 3 à 5 ans est ici la norme
              </strong>
              , combiné à un traitement hydrofuge longue durée pour protéger
              durablement la couverture des cycles gel-dégel. Sans cet
              entretien, les toitures pessacaises vieillissent 30 à 50% plus
              vite que la moyenne.
            </p>
            <p>
              Notre dépôt est situé à seulement <strong>7 km</strong> de Pessac
              à Mérignac (65 rue de Malbos, 33700). Cette proximité garantit
              une <strong>intervention rapide en cas d'urgence</strong> (fuite
              déclarée, tempête, dégât des eaux) : nos équipes peuvent être sur
              place en 30 à 60 minutes en heures ouvrées pour une mise hors
              d'eau immédiate. La connaissance fine du territoire pessacais
              permet aussi d'anticiper les contraintes d'accès (rues étroites
              dans certains quartiers, riverains à informer).
            </p>
            <p>
              Couverture Gironde travaille en <strong>direct sans
              sous-traitance</strong>. C'est notre équipe qui se déplace, qui
              chiffre, qui réalise les travaux et qui assure le SAV. Cette
              relation directe avec le client est ce qui nous a permis
              d'accumuler une note de {''}
              <strong>5/5 sur 54 avis Google</strong>, un signal de confiance
              que nous protégeons sur chaque chantier pessacais.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Connaissance des toitures pessacaises',
            description:
              "Tuile canal du centre, tuiles mécaniques des pavillons Saige, ardoise des maisons bourgeoises. Chaque matériau a sa technique, sa pression, son produit. Nous traitons les trois quotidiennement.",
          },
          {
            title: 'Réactivité 7 km depuis Mérignac',
            description:
              "Notre dépôt à Mérignac est à 7 km de Pessac. En urgence, 30-60 min de délai d'intervention en heures ouvrées. Pas de déplacement coûteux à vous facturer.",
          },
          {
            title: 'Expertise climat océanique humide',
            description:
              "930 mm de pluie/an, couvert végétal dense, exposition nord fréquente : les toitures pessacaises ont des besoins d'entretien spécifiques. Nous les connaissons parfaitement.",
          },
          {
            title: 'Travail direct, sans sous-traitance',
            description:
              "L'équipe qui chiffre est celle qui travaille et qui revient en SAV. Vous n'avez qu'un interlocuteur tout au long du projet.",
          },
          {
            title: 'Devis gratuit en 24h',
            description:
              "Vous nous contactez, nous étudions votre demande et vous répondons sous 24h ouvrées avec un devis détaillé ligne par ligne.",
          },
          {
            title: 'Garantie décennale active depuis 2005',
            description:
              "20 ans d'exercice à Bordeaux Métropole, assurance décennale en cours de validité, justificatifs fournis sur demande avec le devis.",
          },
        ],
        tarifsLines: [
          {
            service: 'Démoussage toiture (avec brossage manuel)',
            range: '12 – 18 €/m²',
            note: 'Pour 100 m² de toiture : 1 200 à 1 800 € HT',
          },
          {
            service: 'Démoussage + traitement hydrofuge',
            range: '18 – 28 €/m²',
            note: 'Combo recommandé, garantie 10 ans hydrofuge',
          },
          {
            service: 'Nettoyage haute pression maîtrisé',
            range: '12 – 20 €/m²',
            note: 'Inclut démoussage chimique léger',
          },
          {
            service: 'Réparation ponctuelle (≤ 10 tuiles)',
            range: '180 – 450 €',
            note: 'Forfait diagnostic + remplacement',
          },
          {
            service: 'Réfection de faîtage',
            range: '40 – 70 €/ml',
            note: 'Scellé ou à sec selon configuration',
          },
          {
            service: 'Pose de gouttières zinc',
            range: '50 – 85 €/ml',
            note: 'Demi-rondes Ø 25, soudure étain',
          },
          {
            service: "Urgence fuite — mise hors d'eau",
            range: '250 – 600 €',
            note: 'Bâche + sécurisation, devis répa. à part',
          },
          {
            service: 'Réfection complète de toiture',
            range: '85 – 150 €/m²',
            note: 'Selon matériau : tuile, ardoise, zinc',
          },
        ],
        faqLocale: [
          {
            question: 'Quel est votre délai d\u2019intervention à Pessac ?',
            answer:
              "Notre dépôt étant à Mérignac (à 7 km), nous intervenons en 30 à 60 minutes en heures ouvrées pour les urgences (fuite déclarée, dégât de tempête). Pour les visites de diagnostic gratuit, nous proposons un rendez-vous sous 48h ouvrées.",
          },
          {
            question:
              "Faut-il une autorisation pour refaire sa toiture à Pessac ?",
            answer:
              "À Pessac, une déclaration préalable de travaux est requise pour la modification de l'aspect extérieur (changement de matériau, couleur). Pour une réfection à l'identique, aucune formalité n'est généralement nécessaire. Nous vous accompagnons dans la constitution du dossier si besoin. Les quartiers situés à proximité immédiate du château Pape-Clément ou des zones classées peuvent être soumis à l'avis de l'ABF.",
          },
          {
            question:
              'Pourquoi les toitures pessacaises ont-elles autant de mousses ?',
            answer:
              "Le couvert végétal très dense de Pessac (forêt du Bourgailh, parc Bordelais, alignements d'arbres dans les lotissements) crée un microclimat humide et peu ensoleillé sur de nombreuses toitures. L'humidité retenue, combinée à des températures douces toute l'année, est l'environnement idéal pour les mousses, lichens et algues. Un démoussage tous les 3 à 5 ans est ici la norme.",
          },
          {
            question:
              "Quel est le meilleur moment pour démousser sa toiture à Pessac ?",
            answer:
              "Idéalement au printemps (mars-mai) ou à la fin de l'été (septembre-octobre), hors période de gel ou de fortes pluies. C'est le moment où la mousse est la moins active, et où l'on peut appliquer un traitement hydrofuge dans les meilleures conditions de séchage.",
          },
          {
            question:
              "Couvrez-vous tous les quartiers de Pessac, y compris Toctoucau ou Compostelle ?",
            answer:
              "Oui, l'ensemble du territoire communal pessacais est couvert avec la même réactivité et les mêmes tarifs : Saige, Cap-de-Bos, Bourgailh, Pessac-centre, Toctoucau, Compostelle, ainsi que les communes voisines (Mérignac, Talence, Gradignan).",
          },
          {
            question:
              "Travaillez-vous sur les maisons en copropriété à Pessac ?",
            answer:
              "Oui, nous intervenons régulièrement en copropriété sur Pessac (résidences de l'Alouette, Saige, etc.). Nous fournissons les devis et attestations nécessaires au syndic et aux assemblées générales. Acompte raisonnable adapté aux usages copropriété.",
          },
          {
            question:
              "Acceptez-vous les paiements par mensualités ou via un éco-prêt ?",
            answer:
              "Nous acceptons les paiements échelonnés en 2 à 3 fois sans frais sur les chantiers supérieurs à 5 000 € HT. Pour les éco-prêts à taux zéro liés à la rénovation énergétique, nous fournissons toutes les pièces justificatives nécessaires à votre dossier bancaire.",
          },
        ],
      }}
    />
  );
}
