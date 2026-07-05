import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-bouscat');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <>
      <VillePageLayout
        content={{
          slug: PAGE.slug,
          villeSlug: 'bouscat',
          h1: (
            <>
              Couvreur au{' '}
              <span className="text-[var(--color-terre)]">Bouscat</span> depuis
              2005 — échoppes patrimoniales tuile canal + zinc
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac (5 km du Bouscat)',
            bio: "Je couvre Le Bouscat depuis 2005 depuis mon atelier de Mérignac (5 km, 10 min). Le Bouscat concentre un patrimoine architectural cossu : échoppes bordelaises XIXe en tuile canal traditionnelle, maisons de maître Champ-de-Courses/Lyautey en ardoise. La demande d'entretien y est forte car les propriétaires valorisent leur bâti. Techniques traditionnelles (mortier chaux, clous cuivre, zinc soudé étain) obligatoires pour respecter le caractère.",
            badges: [
              'Depuis 2005',
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Urgence 15-30 min',
            ],
          },

          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro:
              "Notre atelier est à Mérignac, à 5 km (10 min) du Bouscat. Cette proximité permet une intervention urgence en 15-30 minutes en heures ouvrées, sans surcoût de déplacement — comparable à Mérignac.",
            horaires: [
              { jours: 'Lundi – Vendredi', heures: '6h00 – 22h00' },
              { jours: 'Samedi – Dimanche', heures: 'Urgences 7j/7' },
            ],
            mapEmbedUrl:
              'https://www.google.com/maps?q=65+rue+de+Malbos+33700+M%C3%A9rignac&output=embed',
            itineraireUrl:
              'https://www.google.com/maps/dir//65+rue+de+Malbos,+33700+M%C3%A9rignac',
          },

          heroSubtitle:
            "Couvreur-zingueur au Bouscat depuis 2005, atelier à Mérignac (5 km, 15-30 min). Spécialiste patrimoine cossu : échoppes tuile canal XIXe, maisons de maître Champ-de-Courses/Lyautey ardoise, zinc soudé étain. Décennale, 5/5 sur 52 avis Google.",
        contexteLocal: (
          <>
            <p>
              Le Bouscat est l'une des communes les plus résidentielles et
              soignées de Bordeaux Métropole, située juste au nord de
              Bordeaux. Avec son tissu d'<strong>échoppes bordelaises</strong>{' '}
              et de <strong>maisons bourgeoises</strong> autour de
              Sainte-Germaine et Lyautey, son ambiance pavillonnaire CSP+ et
              son célèbre Champ-de-Courses, la commune attache une importance
              particulière à l'esthétique et à l'entretien des toitures.
              Nous intervenons quotidiennement sur ce territoire depuis
              notre atelier voisin de Mérignac.
            </p>
            <p>
              Les toitures bouscataises sont dominées par la{' '}
              <strong>tuile canal traditionnelle</strong> sur les échoppes et
              maisons anciennes du centre, et par la{' '}
              <strong>tuile mécanique</strong> sur les pavillons d'après-guerre
              vers le Champ-de-Courses. Quelques toitures en{' '}
              <strong>ardoise naturelle</strong> subsistent sur les maisons
              de maître les plus prestigieuses. Cette typologie patrimoniale
              demande une rigueur particulière : pression de lavage limitée
              sur la tuile canal pour ne pas casser les éléments anciens,
              choix de mortiers chaux pour les rénovations de faîtage, respect
              des proportions et de la pose d'origine.
            </p>
            <p>
              Le climat du Bouscat est strictement identique à celui de
              Bordeaux centre : <strong>climat océanique humide</strong>,
              hivers doux et pluvieux, pluviométrie annuelle d'environ 930 mm.
              Combiné à un couvert végétal très présent (parcs, alignements
              d'arbres dans les rues résidentielles), il favorise nettement
              la prolifération des mousses, lichens et algues sur les pans
              nord et les zones ombragées. Sur les belles toitures du Bouscat,{' '}
              <strong>un démoussage tous les 3 à 4 ans</strong> est la norme,
              souvent associé à un traitement hydrofuge longue durée pour
              préserver l'aspect visuel et la valeur du bien.
            </p>
            <p>
              Notre proximité géographique avec Le Bouscat est un vrai atout.
              Notre dépôt et atelier sont à <strong>5 km seulement</strong>{' '}
              de la mairie du Bouscat, à Mérignac. En urgence (fuite déclarée,
              tuile envolée par un coup de vent, débordement de gouttière),
              nous intervenons généralement en{' '}
              <strong>30 à 45 minutes</strong> en heures ouvrées, avec
              mise hors d'eau immédiate par bâche et sécurisation. Aucun
              surcoût de déplacement à vous facturer.
            </p>
            <p>
              Couverture Gironde travaille en{' '}
              <strong>direct sans sous-traitance</strong>. C'est l'artisan
              qui se déplace, qui chiffre, qui réalise les travaux et qui
              assure le SAV à long terme. Cette relation directe est ce qui
              nous a permis d'accumuler une{' '}
              <strong>note de 5/5 sur 52 avis Google</strong>, un signal de
              confiance que nous protégeons sur chaque chantier bouscatais.
              Beaucoup de nos clients du Bouscat nous reviennent tous les
              3-4 ans pour l'entretien préventif programmé.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Expertise des échoppes et maisons bourgeoises',
            description:
              "Tuile canal, ardoise, faîtages scellés au mortier chaux : nous respectons le caractère du bâti bouscatais sans le dénaturer.",
          },
          {
            title: 'Réactivité 5 km depuis Mérignac',
            description:
              "Notre atelier est à 5 km de la mairie du Bouscat. Intervention urgence en 30 à 45 minutes en heures ouvrées. Pas de surcoût de déplacement.",
          },
          {
            title: 'Travail soigné pour quartiers résidentiels',
            description:
              "Protection des trottoirs et façades, information des voisins, propreté du chantier. Indispensable dans un environnement résidentiel CSP+.",
          },
          {
            title: 'Entretien préventif programmé',
            description:
              "Démoussage tous les 3 à 4 ans, rappel automatique avant la saison idéale. La majorité des toitures bouscataises sont entretenues sur ce rythme.",
          },
          {
            title: 'Devis gratuit en 24h, prix transparents',
            description:
              "Réponse sous 24h ouvrées, devis détaillé ligne par ligne, sans engagement. Aucun frais de déplacement ni d'établissement de devis.",
          },
          {
            title: 'Garantie décennale active depuis 2005',
            description:
              "20 ans d'exercice à Bordeaux Métropole, assurance décennale en cours, justificatifs fournis avec le devis.",
          },
        ],
        tarifsLines: [
          {
            service: 'Démoussage toiture (avec brossage manuel)',
            range: '12 – 18 €/m²',
            note: 'Pour 100 m² : 1 200 à 1 800 € HT',
          },
          {
            service: 'Démoussage + traitement hydrofuge',
            range: '18 – 28 €/m²',
            note: 'Combo recommandé sur les belles toitures',
          },
          {
            service: 'Nettoyage haute pression maîtrisé',
            range: '12 – 20 €/m²',
            note: 'Pression adaptée à la tuile canal',
          },
          {
            service: 'Réparation ponctuelle (≤ 10 tuiles)',
            range: '180 – 450 €',
            note: 'Forfait diagnostic + remplacement',
          },
          {
            service: 'Réfection de faîtage scellé chaux',
            range: '45 – 75 €/ml',
            note: 'Mortier chaux compatible bâti ancien',
          },
          {
            service: 'Pose de gouttières zinc demi-rondes',
            range: '50 – 85 €/ml',
            note: 'Soudure étain sur place',
          },
          {
            service: "Urgence fuite, mise hors d'eau",
            range: '250 – 600 €',
            note: 'Bâche + sécurisation, devis répa. à part',
          },
          {
            service: 'Réfection complète de toiture',
            range: '85 – 150 €/m²',
            note: 'Selon matériau : canal, mécanique, ardoise',
          },
        ],
        faqLocale: [
          {
            question: "Quel est votre délai d'intervention au Bouscat ?",
            answer:
              "En heures ouvrées, nous intervenons au Bouscat en 30 à 45 minutes pour les urgences (fuite déclarée, tuile envolée). Pour les diagnostics gratuits sur rendez-vous, sous 48h ouvrées. Notre atelier est à seulement 5 km à Mérignac.",
          },
          {
            question: 'Travaillez-vous sur les maisons en copropriété au Bouscat ?',
            answer:
              "Oui, nous intervenons régulièrement en copropriété sur Le Bouscat (résidences autour du Champ-de-Courses, programmes Sainte-Germaine, etc.). Nous fournissons les devis et attestations nécessaires au syndic et aux assemblées générales. Acompte raisonnable adapté aux usages copropriété.",
          },
          {
            question:
              "Mon échoppe bordelaise a un faîtage à reprendre. Comment travaillez-vous le bâti ancien ?",
            answer:
              "Les échoppes bordelaises du Bouscat exigent un savoir-faire spécifique : mortier chaux pour le scellement du faîtage (et non ciment, qui rigidifie et fissure), tuiles d'origine récupérées et nettoyées si possible, respect de la ligne de faîte d'origine. Nous travaillons quotidiennement ce type de bâti.",
          },
          {
            question: 'Faut-il une autorisation pour refaire sa toiture au Bouscat ?',
            answer:
              "Au Bouscat, une déclaration préalable de travaux est requise dès qu'il y a modification de l'aspect extérieur (changement de matériau, de couleur). Pour une réfection à l'identique avec tuiles de remplacement compatibles, aucune formalité n'est en général exigée. Nous vous accompagnons pour la constitution du dossier le cas échéant.",
          },
          {
            question: 'Couvrez-vous Lyautey, Sainte-Germaine et le Champ-de-Courses ?',
            answer:
              "Oui, l'ensemble du territoire communal bouscatais est couvert avec la même réactivité et les mêmes tarifs : Champ-de-Courses, Lyautey, Sainte-Germaine, ainsi que les communes voisines (Mérignac, Bordeaux Nord, Bruges, Eysines).",
          },
          {
            question: 'Quelle fréquence de démoussage recommandez-vous au Bouscat ?',
            answer:
              "Sur les belles toitures bouscataises (tuile canal, ardoise), un démoussage tous les 3 à 4 ans est l'idéal pour préserver l'aspect visuel et la valeur du bien, surtout sous couvert arboré ou sur les versants nord. Le combo démoussage + hydrofuge double la durée entre deux interventions.",
          },
          {
            question: 'Acceptez-vous les paiements échelonnés ?',
            answer:
              "Oui. Sur les chantiers supérieurs à 5 000 € HT, paiement en 2 ou 3 fois sans frais. Pour les éco-PTZ liés à la rénovation énergétique de la toiture, nous fournissons toutes les pièces justificatives à votre banque.",
          },
          {
            question:
              "Zinc naturel ou prépatiné sur les échoppes du Bouscat ?",
            answer:
              "Sur bâti patrimonial cossu, nous recommandons ZINC PRÉPATINÉ (anthra-zinc anthracite ou quartz-zinc gris clair) qui offre l'aspect vieilli DÈS la pose — harmonie immédiate avec l'esthétique traditionnelle des échoppes bordelaises. Coût +15-25 % vs zinc naturel, mais le zinc naturel mettra 2-5 ans à patiner et gênerait visuellement pendant ce délai. Sur maisons de maître Champ-de-Courses/Lyautey, prépatiné indispensable.",
          },
          {
            question:
              "Comment vérifier votre décennale avant signature ?",
            answer:
              "Nous joignons systématiquement notre attestation d'assurance décennale à chaque devis, avec ses dates de validité. Un artisan qui rechigne à fournir ce document cache probablement une décennale périmée ou absente.",
          },
        ],

        questionsCouvreur: {
          intro:
            "3 questions à poser à tout couvreur pour Le Bouscat, quartier patrimonial cossu où le respect du bâti d'origine est essentiel.",
          items: [
            {
              question:
                "Utilisez-vous du mortier de chaux ou du mortier ciment sur mes tuiles anciennes ?",
              answer:
                "Sur bâti bouscatais patrimonial, mortier chaux OBLIGATOIRE (respire, compatible tuile ancienne). Un couvreur qui propose du ciment moderne sur échoppe XIXe = danger : ciment dur qui fissure la tuile ancienne. Nous utilisons EXCLUSIVEMENT du mortier de chaux.",
            },
            {
              question:
                "Zinc naturel ou prépatiné pour préserver l'aspect de mon échoppe ?",
              answer:
                "Le Bouscat est un quartier où les propriétaires investissent dans la conservation esthétique. Prépatiné recommandé dès la pose (aspect vieilli immédiat). Un couvreur qui propose systématiquement du zinc naturel sur bâti patrimonial ne prend pas en compte l'esthétique locale.",
            },
            {
              question:
                "Prenez-vous en charge la déclaration préalable et l'ABF si applicable ?",
              answer:
                "Certains secteurs du Bouscat sont soumis à l'ABF (proximité monuments historiques, périmètres protégés). Un couvreur sérieux constitue le dossier ABF. Nous nous en occupons systématiquement — vous signez, c'est tout.",
            },
          ],
        },
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
