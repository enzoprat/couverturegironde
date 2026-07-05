import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-eysines');

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
          villeSlug: 'eysines',
          h1: (
            <>
              Couvreur à{' '}
              <span className="text-[var(--color-terre)]">Eysines</span> depuis
              2005 — atelier voisin (4 km), urgence 15-30 min
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac (4 km d\u2019Eysines)',
            bio: "Je couvre Eysines depuis 2005 depuis mon atelier de Mérignac (4 km, 8 min). C'est ma commune voisine — les délais et tarifs sont identiques à ceux de Mérignac. Eysines présente un mix pavillonnaire + habitat maraîcher traditionnel (Le Vigean, Migron) avec tuile canal sur bâtisses anciennes. Sur ce bâti maraîcher patrimonial, techniques traditionnelles (mortier chaux, tuile récupération) essentielles.",
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
              "Notre atelier est à Mérignac, à 4 km (8 min) d'Eysines — commune voisine directe. Cette proximité permet une intervention urgence 15-30 min en heures ouvrées, avec les mêmes tarifs qu'à Mérignac (aucun surcoût déplacement).",
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
            "Couvreur-zingueur à Eysines depuis 2005, atelier à Mérignac (4 km, 8 min). Commune voisine directe : intervention 15-30 min, tarifs identiques à Mérignac. Spécialiste pavillonnaire + habitat maraîcher traditionnel Le Vigean/Migron. 5/5 sur 52 avis Google, décennale.",
        contexteLocal: (
          <>
            <p>
              Eysines fait partie de Bordeaux Métropole et nous touche
              directement depuis notre atelier de Mérignac : à peine{' '}
              <strong>4 km</strong>, sans avoir à entrer dans le trafic
              bordelais. C'est aujourd'hui la commune la plus proche que
              nous couvrons, ce qui permet à nos équipes d'y intervenir
              quotidiennement, avec une réactivité comparable à celle
              dont bénéficient nos clients de Mérignac.
            </p>
            <p>
              L'habitat eysinais est marqué par sa diversité : à côté du
              tissu pavillonnaire des années 1960-1990 dominant au Vigean
              et à Carès-Cantinolle, on trouve encore beaucoup de{' '}
              <strong>maisons maraîchères traditionnelles</strong> en
              centre-ville et à Migron, témoins du passé agricole de la
              commune. Les toitures sont majoritairement en{' '}
              <strong>tuile canal</strong> sur le bâti ancien et en{' '}
              <strong>tuile mécanique</strong> sur les pavillons plus
              récents, avec quelques toits-terrasses sur les programmes
              immobiliers du centre.
            </p>
            <p>
              Sous le climat océanique humide de Bordeaux Métropole (~930 mm
              de pluie par an), les toitures eysinaises sont exposées comme
              partout à la prolifération des mousses et lichens. La
              spécificité d'Eysines : un{' '}
              <strong>tissu pavillonnaire très arboré</strong>, beaucoup
              de jardins et de haies en limite, qui créent des zones
              d'ombre persistantes sur certains pans de toiture. Sur ces
              zones, un démoussage tous les 3 à 5 ans est indispensable
              pour éviter la dégradation accélérée des tuiles par
              cycles gel-dégel.
            </p>
            <p>
              Notre atelier à Mérignac (65 rue de Malbos, 33700) est à{' '}
              <strong>4 km</strong> à peine du centre d'Eysines. Pour
              les urgences (fuite déclarée, dégât de tempête, gouttière
              débordante), nous intervenons en{' '}
              <strong>20 à 40 minutes</strong> en heures ouvrées. La
              proximité géographique est un vrai avantage économique
              pour vous : pas de surcoût de déplacement à vous facturer,
              et un suivi facile dans le temps si une seconde intervention
              s'avère nécessaire.
            </p>
            <p>
              Couverture Gironde travaille en{' '}
              <strong>direct sans sous-traitance</strong>. L'artisan qui
              chiffre est celui qui exécute le chantier et qui assure le
              SAV. Cette continuité explique nos{' '}
              <strong>5/5 sur 52 avis Google</strong>, une note que nous
              défendons activement sur chaque chantier eysinais.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'À 4 km depuis notre atelier de Mérignac',
            description:
              "L'une des communes les plus proches de notre dépôt. Urgence en 20 à 40 minutes en heures ouvrées. Pas de surcoût de déplacement.",
          },
          {
            title: 'Expertise tuile canal et habitat maraîcher ancien',
            description:
              "Bâti agricole traditionnel et tuile canal abondante : nous travaillons quotidiennement ce type de toiture en respectant ses caractéristiques.",
          },
          {
            title: 'Pavillonnaire sous couvert arboré',
            description:
              "Beaucoup de jardins en limite et de haies créent des zones d'ombre persistantes. Nous identifions les pans à risque et adaptons le programme d'entretien.",
          },
          {
            title: 'Travail soigné, sans sous-traitance',
            description:
              "L'artisan qui chiffre est celui qui revient en SAV. Vous avez un seul interlocuteur, du devis au chantier final.",
          },
          {
            title: 'Devis gratuit en 24h ouvrées',
            description:
              "Réponse rapide et transparente, devis détaillé ligne par ligne. Pas d'engagement ni de frais cachés.",
          },
          {
            title: 'Garantie décennale + assurance RC active',
            description:
              "20 ans d'exercice, justificatifs fournis avec le devis. Vous êtes protégé 10 ans après réception du chantier.",
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
            note: 'Combo recommandé sur pavillons arborés',
          },
          {
            service: 'Nettoyage haute pression maîtrisé',
            range: '12 – 20 €/m²',
            note: 'Pression adaptée tuile canal / mécanique',
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
            question: "Quel est votre délai d'intervention à Eysines ?",
            answer:
              "En heures ouvrées, 20 à 40 minutes pour les urgences (fuite déclarée, dégât de tempête, gouttière débordante). Pour les visites de diagnostic gratuit sur rendez-vous, sous 48h ouvrées. Notre atelier est à seulement 4 km au cœur de Mérignac.",
          },
          {
            question: 'Travaillez-vous sur les maisons maraîchères anciennes ?',
            answer:
              "Oui, c'est un type de bâti que nous travaillons régulièrement à Eysines, surtout autour de Migron et dans le centre. Charpente bois traditionnelle, tuile canal, faîtage scellé chaux : nous respectons les caractéristiques d'origine sans dénaturer la valeur patrimoniale du bien.",
          },
          {
            question: "À quelle fréquence faut-il démousser un pavillon arboré à Eysines ?",
            answer:
              "Sur un pavillon avec jardin arboré ou haies hautes en limite, le couvert végétal projette de l'ombre persistante sur les pans nord. Un démoussage tous les 3 à 5 ans est l'idéal, plus rapproché si les mousses recolonisent vite. Le combo démoussage + hydrofuge prolonge nettement l'intervalle.",
          },
          {
            question: "Couvrez-vous Le Vigean, Carès-Cantinolle et Migron ?",
            answer:
              "Oui, l'ensemble du territoire communal eysinais est couvert avec la même réactivité et les mêmes tarifs : Centre, Le Vigean, Carès-Cantinolle, Migron, ainsi que les communes voisines (Mérignac, Le Bouscat, Bruges, Saint-Médard-en-Jalles).",
          },
          {
            question: 'Faut-il une autorisation pour refaire sa toiture à Eysines ?',
            answer:
              "À Eysines, une déclaration préalable de travaux est requise en cas de modification de l'aspect extérieur (changement de matériau ou couleur). Pour une réfection à l'identique, aucune formalité n'est en général exigée. Nous vous accompagnons sur les démarches si besoin.",
          },
          {
            question: 'Travaillez-vous sur les copropriétés et bailleurs sociaux ?',
            answer:
              "Oui, nous intervenons en copropriété sur Eysines (résidences du centre, programmes du Vigean), avec devis et attestations adaptés aux usages syndic + assemblées générales. Acomptes raisonnables, facturation conforme.",
          },
          {
            question: 'Acceptez-vous les paiements échelonnés ?',
            answer:
              "Oui, sur les chantiers supérieurs à 5 000 € HT, paiement en 2 ou 3 fois sans frais. Pour les éco-PTZ rénovation énergétique de toiture, justificatifs fournis à votre banque.",
          },
          {
            question:
              "Facturez-vous un surcoût déplacement pour Eysines ?",
            answer:
              "NON. Eysines est notre commune voisine directe (4 km, 8 min via A630). Nos petites interventions (remplacement 5 tuiles, contrôle ponctuel, reprise zinguerie) sont facturées SANS surcoût kilométrique, tarifs identiques à Mérignac. Un couvreur qui vous facture un forfait déplacement 80-120 € pour Eysines n'est probablement pas voisin.",
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
            "3 questions à poser à tout couvreur qui vous propose un devis pour Eysines.",
          items: [
            {
              question:
                "Quel est votre délai réel d'intervention à Eysines en urgence ?",
              answer:
                "Un couvreur voisin (Mérignac, Bordeaux Nord) répond 15-30 min en heures ouvrées. Notre atelier est à 4 km (8 min via A630). Si un couvreur annonce « 2-4 heures » ou « dans la journée », il envoie probablement une équipe depuis Bordeaux ou hors métropole = perte de temps critique en urgence tempête.",
            },
            {
              question:
                "Facturez-vous un forfait déplacement kilométrique ?",
              answer:
                "Un artisan voisin ne facture PAS de kilométrique sur Eysines. Nos petits chantiers (5 tuiles, contrôle, reprise ponctuelle) sont sans surcoût déplacement. Un couvreur qui ajoute 80-120 € forfait déplacement pour Eysines n'est pas voisin.",
            },
            {
              question:
                "Votre devis inclut-il tous les postes ou reste-t-il des lignes ouvertes ?",
              answer:
                "Nos devis détaillent chaque poste (main d'œuvre, matériaux, sécurité, accès, TVA). Aucune ligne « divers » — vous savez exactement ce que vous signez et le total ne bouge pas.",
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
