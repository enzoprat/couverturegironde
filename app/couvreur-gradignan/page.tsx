import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-gradignan');

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
          villeSlug: 'gradignan',
          h1: (
            <>
              Couvreur à{' '}
              <span className="text-[var(--color-terre)]">Gradignan</span> depuis
              2005 — pavillons boisés, hydrofuge indispensable
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac (12 km)',
            bio: "Je couvre Gradignan depuis 2005 depuis mon atelier de Mérignac (12 km, 25 min). Gradignan est LE cas typique où l'hydrofuge après démoussage est INDISPENSABLE : couvert arboré très dense (parc bordelais, jardins des pavillons), versants nord ombragés, humidité retenue. Sans hydrofuge, les mousses reviennent en 2-3 ans après un démoussage. Avec hydrofuge, on tient 8-10 ans — ROI imbattable sur Gradignan.",
            badges: [
              'Depuis 2005',
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Urgence 45-75 min',
            ],
          },

          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro:
              "Notre atelier est à Mérignac, à 12 km (25 min) de Gradignan via A630 + rocade Sud. Intervention urgence 45-75 min en heures ouvrées.",
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
            "Couvreur-zingueur à Gradignan depuis 2005, atelier à Mérignac (12 km). Spécialiste pavillons sous couvert arboré : démoussage + hydrofuge OBLIGATOIRE pour tenir 8-10 ans. Intervention 45-75 min, décennale, 5/5 sur 52 avis Google.",
        contexteLocal: (
          <>
            <p>
              Gradignan est l'une des communes les plus pavillonnaires et
              boisées de Bordeaux Métropole, au sud de Pessac et Talence.
              Avec ses quartiers résidentiels de Madère, Laurenzane et
              Pont-de-la-Maye, la commune attache beaucoup d'importance à
              la qualité du cadre de vie et à l'entretien régulier des
              toitures. Nous intervenons quotidiennement sur ce territoire
              depuis notre atelier de Mérignac, situé à environ 12 km via
              la rocade.
            </p>
            <p>
              L'habitat gradignanais est largement{' '}
              <strong>pavillonnaire individuel</strong>, avec une dominante
              de constructions des années 1970 à 1990 mêlant tuiles
              mécaniques rouges, brunes et terre cuite naturelle. Le
              centre conserve quelques échoppes anciennes en tuile canal,
              et les quartiers résidentiels CSP+ comme Madère comptent
              plusieurs maisons bourgeoises en ardoise naturelle. Les
              toitures sont, dans l'ensemble, bien dimensionnées et
              entretenues — la culture d'entretien préventif est forte
              à Gradignan.
            </p>
            <p>
              La grande spécificité de Gradignan est son{' '}
              <strong>couvert arboré exceptionnel</strong> : la commune
              compte de nombreux parcs (Laurenzane, Sainte-Catherine,
              Moulineau) et une densité de jardins privés très élevée.
              Ce couvert végétal projette de l'ombre sur de nombreuses
              toitures, créant des conditions idéales pour le développement
              des mousses, lichens et algues, particulièrement sur les
              versants nord et est. Sous le climat océanique humide de
              Bordeaux Métropole (~930 mm de pluie/an), un{' '}
              <strong>démoussage tous les 3 à 5 ans</strong> est la norme
              à Gradignan, idéalement complété par un hydrofuge longue
              durée pour ralentir la recolonisation.
            </p>
            <p>
              Notre dépôt à Mérignac est à <strong>12 km</strong> de la
              mairie de Gradignan. Pour les urgences (fuite déclarée
              suite à orage, tempête, infiltration brutale), nous
              intervenons en <strong>45 à 75 minutes</strong> en heures
              ouvrées, avec mise hors d'eau immédiate par bâche et
              sécurisation. La connaissance du territoire gradignanais
              nous permet aussi d'anticiper les contraintes d'accès
              (rues étroites dans les vieux quartiers, riverains à
              prévenir pour échafaudage).
            </p>
            <p>
              Couverture Gironde travaille en{' '}
              <strong>direct sans sous-traitance</strong>. C'est l'artisan
              qui chiffre, qui exécute et qui assure le SAV. Cette
              continuité explique nos{' '}
              <strong>5/5 sur 52 avis Google</strong>, et la fidélité
              de nos clients gradignanais qui nous reviennent pour
              l'entretien programmé.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Expertise pavillonnaire sous couvert arboré',
            description:
              "Tuile mécanique, présence de jardins arborés en limite, exposition nord fréquente : nous identifions précisément les zones à risque mousse sur chaque toiture.",
          },
          {
            title: 'Travail soigné pour quartiers résidentiels CSP+',
            description:
              "Protection des allées, des plantations et des entrées voisines, information des riverains. Indispensable dans un environnement résidentiel exigeant.",
          },
          {
            title: 'Entretien préventif programmé',
            description:
              "Démoussage tous les 3 à 5 ans, rappel automatique avant la saison idéale. Beaucoup de toitures gradignanaises sont sur cycle programmé chez nous.",
          },
          {
            title: 'Couvreur à 12 km depuis Mérignac',
            description:
              "Intervention urgence en 45 à 75 minutes en heures ouvrées. Mise hors d'eau immédiate. Pas de surcoût de déplacement à vous facturer.",
          },
          {
            title: 'Travail direct, sans sous-traitance',
            description:
              "L'artisan qui chiffre est celui qui revient en SAV. Un seul interlocuteur du début à la fin du chantier.",
          },
          {
            title: 'Garantie décennale + RC active',
            description:
              "20 ans d'exercice, assurance décennale en cours, justificatifs fournis avec le devis. Vous êtes protégé 10 ans.",
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
            note: 'Combo recommandé sous couvert arboré',
          },
          {
            service: 'Nettoyage haute pression maîtrisé',
            range: '12 – 20 €/m²',
            note: 'Pression adaptée tuile mécanique',
          },
          {
            service: 'Réparation ponctuelle (≤ 10 tuiles)',
            range: '180 – 450 €',
            note: 'Forfait diagnostic + remplacement',
          },
          {
            service: 'Réfection de faîtage scellé',
            range: '45 – 75 €/ml',
            note: 'Mortier chaux ou ciment selon bâti',
          },
          {
            service: 'Pose de gouttières zinc demi-rondes',
            range: '50 – 85 €/ml',
            note: 'Demi-rondes Ø 25, soudure étain',
          },
          {
            service: "Urgence fuite, mise hors d'eau",
            range: '250 – 600 €',
            note: 'Bâche + sécurisation, devis répa. à part',
          },
          {
            service: 'Réfection complète de toiture',
            range: '85 – 150 €/m²',
            note: 'Selon matériau et complexité',
          },
        ],
        faqLocale: [
          {
            question: "Quel est votre délai d'intervention à Gradignan ?",
            answer:
              "En heures ouvrées, 45 à 75 minutes pour les urgences (fuite déclarée, infiltration brutale, dégât de tempête). Pour les visites de diagnostic gratuit sur rendez-vous, sous 48h ouvrées. Notre atelier est à 12 km via la rocade.",
          },
          {
            question:
              "Pourquoi les toitures gradignanaises se couvrent-elles autant de mousses ?",
            answer:
              "Gradignan a l'un des couverts arborés les plus denses de Bordeaux Métropole : nombreux parcs (Laurenzane, Sainte-Catherine), jardins privés étendus, alignements d'arbres dans les rues résidentielles. Ce couvert projette de l'ombre persistante sur les pans nord et est, créant l'environnement idéal pour les mousses, lichens et algues. Un démoussage tous les 3 à 5 ans est ici la norme.",
          },
          {
            question: "Travaillez-vous sur les maisons en ardoise des quartiers CSP+ ?",
            answer:
              "Oui. Plusieurs quartiers de Gradignan (notamment Madère) comptent des maisons bourgeoises en ardoise naturelle. Nous travaillons l'ardoise avec une pression réduite (60-80 bars maximum), des buses spécifiques et des crochets cuivre pour les remplacements ponctuels. Le savoir-faire est différent de la tuile et exige une vraie maîtrise.",
          },
          {
            question: "Quand est le meilleur moment pour démousser à Gradignan ?",
            answer:
              "Idéalement au printemps (mars-mai) ou à la fin de l'été (septembre-octobre), hors période de gel ou de fortes pluies. Sur un pavillon arboré gradignanais, le printemps est souvent privilégié pour préparer la toiture aux forts coups de chaleur estivaux et au cycle gel-dégel hivernal qui suit.",
          },
          {
            question: 'Faut-il une autorisation pour refaire sa toiture à Gradignan ?',
            answer:
              "À Gradignan, une déclaration préalable de travaux est requise en cas de modification de l'aspect extérieur (changement de matériau, couleur). Pour une réfection à l'identique, aucune formalité n'est en général exigée. Nous vous accompagnons pour la constitution du dossier si besoin.",
          },
          {
            question: "Couvrez-vous Madère, Laurenzane et Pont-de-la-Maye ?",
            answer:
              "Oui, l'ensemble du territoire communal gradignanais est couvert avec la même réactivité et les mêmes tarifs : Centre, Madère, Laurenzane, Pont-de-la-Maye, ainsi que les communes voisines (Pessac, Talence, Villenave-d'Ornon).",
          },
          {
            question: 'Acceptez-vous les paiements échelonnés ou éco-PTZ ?',
            answer:
              "Oui. Sur les chantiers supérieurs à 5 000 € HT, paiement en 2 ou 3 fois sans frais. Pour les éco-prêts à taux zéro liés à la rénovation énergétique de la toiture, nous fournissons toutes les pièces justificatives à votre banque.",
          },
          {
            question:
              "Pourquoi hydrofuge OBLIGATOIRE à Gradignan et pas ailleurs ?",
            answer:
              "Gradignan cumule 3 facteurs qui font revenir les mousses très vite après démoussage : (1) couvert arboré exceptionnel (parc bordelais, jardins boisés des pavillons), (2) versants nord ombragés majoritaires sur pavillonnaire XXe, (3) humidité retenue par le couvert. Résultat : sans hydrofuge, retour des mousses en 2-3 ans. Avec hydrofuge, 8-10 ans de tranquillité. Sur Gradignan, le combo démoussage + hydrofuge (18-27 €/m²) est le SEUL choix rentable — pas un upsell.",
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
            "3 questions à poser à tout couvreur pour Gradignan, en particulier sur pavillonnaire arboré où l'hydrofuge est indispensable.",
          items: [
            {
              question:
                "Recommandez-vous systématiquement l'hydrofuge sur Gradignan ?",
              answer:
                "Un artisan qui propose seulement un démoussage sur Gradignan sans mentionner l'hydrofuge ne connaît pas les spécificités locales (couvert arboré = retour mousses en 2-3 ans). Nous recommandons SYSTÉMATIQUEMENT le combo démoussage + hydrofuge sur Gradignan — c'est le SEUL choix rentable.",
            },
            {
              question:
                "Fréquence recommandée d'entretien sur mon pavillon ?",
              answer:
                "Sur Gradignan pavillonnaire arboré : contrôle tous les 2 ans, démoussage + hydrofuge tous les 8-10 ans. Un couvreur qui propose un entretien tous les 3-4 ans ne prend pas en compte la protection hydrofuge. Un artisan qui propose tous les 15-20 ans sous-estime le couvert végétal local.",
            },
            {
              question:
                "Votre devis inclut-il tous les postes ou reste-t-il des lignes ouvertes ?",
              answer:
                "Nos devis détaillent chaque poste (main d'œuvre, produits, accès, TVA). Aucune ligne « divers » — vous savez exactement ce que vous signez et le total ne bouge pas.",
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
