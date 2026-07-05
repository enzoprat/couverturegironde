import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-villenave-dornon');

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
          villeSlug: 'villenave-dornon',
          h1: (
            <>
              Couvreur à{' '}
              <span className="text-[var(--color-terre)]">Villenave-d'Ornon</span>{' '}
              depuis 2005 — pavillonnaire tuile mécanique 70-90
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac (13 km)',
            bio: "Je couvre Villenave-d'Ornon depuis 2005 depuis mon atelier de Mérignac (13 km, 25 min). Villenave présente un pavillonnaire étendu tuile mécanique années 70-90 qui atteint sa fin de vie moyenne. Les tuiles mécaniques poreuses de cette époque + le couvert végétal dense (jardins, alignements) = mousses SYSTÉMATIQUES versants nord. Hydrofuge après démoussage vivement recommandé pour tenir 8-10 ans.",
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
              "Notre atelier est à Mérignac, à 13 km (25 min) de Villenave-d'Ornon via A630 + rocade Sud. Intervention urgence 45-75 min en heures ouvrées.",
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
            "Couvreur-zingueur à Villenave-d'Ornon depuis 2005, atelier à Mérignac (13 km). Spécialiste pavillonnaire tuile mécanique 70-90 : démoussage + hydrofuge fortement recommandé (mousses versants nord). Intervention 45-75 min, décennale, 5/5 sur 52 avis Google.",
        contexteLocal: (
          <>
            <p>
              Villenave-d'Ornon est une commune au caractère pavillonnaire
              marqué, située au sud-est de Bordeaux. Elle réunit{' '}
              <strong>plusieurs typologies d'habitat</strong> représentatives
              du sud de Bordeaux Métropole : pavillons individuels classiques
              dans les quartiers de Chambéry, Courréjean et Pont-de-la-Maye,
              maisons plus récentes en lotissements proches du tramway, et
              quelques bâtisses anciennes dans le centre historique. Cette
              diversité impose à un couvreur une polyvalence réelle —
              ce qui correspond exactement à notre profil d'artisan
              généraliste expérimenté.
            </p>
            <p>
              Les toitures villenavaises sont majoritairement{' '}
              <strong>en tuile canal traditionnelle</strong> sur les
              pavillons anciens et <strong>en tuile mécanique</strong> sur
              les lotissements plus récents. Le couvert végétal dense qui
              caractérise la ville, héritage des grands parcs et de la
              proximité avec la forêt landaise, favorise particulièrement{' '}
              <strong>la prolifération des mousses</strong> sur les versants
              ombragés. Une grande proportion de nos chantiers démoussage à
              Villenave-d'Ornon concerne des toitures jamais entretenues
              depuis 10-15 ans, dont la réfection devient nécessaire si on
              attend trop longtemps.
            </p>
            <p>
              Le <strong>climat villenavais</strong> reproduit le profil
              océanique girondin avec une nuance : la commune étant en bord
              de Garonne et entourée d'une zone semi-rurale,{' '}
              <strong>l'humidité ambiante est légèrement supérieure</strong>{' '}
              à celle de Bordeaux centre. Les brumes matinales d'automne
              sont fréquentes, ce qui retient l'humidité au contact des
              tuiles plus longtemps qu'ailleurs. Conséquence : un démoussage
              tous les 3 à 4 ans est ici recommandé (au lieu de 4-5 ans dans
              des zones plus aérées), combiné systématiquement à un
              traitement hydrofuge longue durée pour ralentir le retour des
              mousses.
            </p>
            <p>
              Nous intervenons à Villenave-d'Ornon quotidiennement. En heures
              ouvrées, nous sommes sur place en 30 à 45 minutes pour les
              urgences. Pour les{' '}
              <strong>chantiers programmés</strong>, nous intervenons
              régulièrement sur la commune, la zone fait partie de notre
              périmètre habituel et nous y avons traité des dizaines de
              toitures depuis 2005. Aucun surcoût de déplacement n'est
              appliqué.
            </p>
            <p>
              Côté <strong>typologie de demandes</strong>, Villenave-d'Ornon
              concentre 3 besoins récurrents : (1) <strong>démoussage et
              hydrofuge</strong> sur pavillon individuel, c'est notre
              prestation la plus demandée ; (2){' '}
              <strong>réparation après tempête</strong>, la commune est
              exposée aux vents d'ouest en hiver et les chutes d'arbres ou
              de tuiles sont fréquentes ; (3){' '}
              <strong>étanchéité de toits-terrasses</strong> sur les
              programmes immobiliers récents autour du tramway. Nous
              maîtrisons ces 3 typologies en interne, sans sous-traitance.
            </p>
            <p>
              Pour les <strong>autorisations administratives</strong>,
              Villenave-d'Ornon applique le PLU de Bordeaux Métropole.
              Les réfections à l'identique ne demandent généralement pas
              de formalités. Les changements de matériau ou de couleur
              passent par une déclaration préalable en mairie. Aucun
              secteur ABF particulier ne contraint la commune. Nous
              constituons les dossiers administratifs pour vous quand
              nécessaire.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Présence régulière depuis 2005',
            description:
              "Nous intervenons sur Villenave-d'Ornon depuis 20 ans. Dizaines de chantiers réalisés sur la commune. Nous connaissons les quartiers et leurs spécificités.",
          },
          {
            title: 'Pas de surcoût kilométrique',
            description:
              "13 km de notre atelier merignacais. Cette distance n'entraîne aucun forfait de déplacement supplémentaire. Vous payez le travail.",
          },
          {
            title: 'Spécialistes du démoussage + hydrofuge',
            description:
              "L'humidité villenavaise demande un entretien plus rapproché. Notre formule démoussage + hydrofuge garantie 10 ans est la plus adaptée.",
          },
          {
            title: 'Étanchéité toits-terrasses copropriétés récentes',
            description:
              "Programmes immobiliers proches du tramway : EPDM, bitume, membrane PVC. Nous maîtrisons les techniques modernes d'étanchéité.",
          },
          {
            title: 'Dossiers assurance tempête',
            description:
              "Photos avant/après, devis détaillé, attestations : nous constituons un dossier solide pour votre déclaration de sinistre habitation après tempête.",
          },
          {
            title: 'Devis sous 24h, garantie décennale',
            description:
              "Réponse rapide, chiffrage transparent ligne par ligne. Travaux couverts par notre assurance décennale active depuis 2005.",
          },
        ],
        tarifsLines: [
          {
            service: 'Démoussage toiture (brossage manuel)',
            range: '12 – 18 €/m²',
            note: 'Tarif standard métropole',
          },
          {
            service: 'Démoussage + traitement hydrofuge',
            range: '18 – 28 €/m²',
            note: 'Combo recommandé pour climat villenavais',
          },
          {
            service: 'Nettoyage haute pression maîtrisé',
            range: '12 – 21 €/m²',
            note: 'Pression adaptée tuile canal',
          },
          {
            service: 'Étanchéité toit-terrasse (EPDM)',
            range: '60 – 110 €/m²',
            note: 'Selon technique et complexité',
          },
          {
            service: 'Remplacement tuiles cassées (≤10)',
            range: '180 – 450 €',
            note: 'Forfait diagnostic + intervention',
          },
          {
            service: 'Pose gouttières zinc',
            range: '55 – 90 €/ml',
            note: 'Soudure étain sur place',
          },
          {
            service: "Urgence fuite 7j/7",
            range: '280 – 600 €',
            note: "Mise hors d'eau + photos assurance",
          },
          {
            service: 'Diagnostic post-tempête',
            range: 'Gratuit',
            note: 'Photos + chiffrage pour assurance',
          },
        ],
        faqLocale: [
          {
            question:
              "Intervenez-vous dans tous les quartiers de Villenave-d'Ornon ?",
            answer:
              "Oui, l'intégralité du territoire communal : Centre, Chambéry, Courréjean, Pont-de-la-Maye, ainsi que les zones limitrophes avec Bègles, Talence, Gradignan et Pessac. Tarifs identiques sur toute la commune.",
          },
          {
            question:
              "Combien de temps mettez-vous pour intervenir en urgence ?",
            answer:
              "En heures ouvrées, nous sommes sur place en 30 à 45 minutes. Pour les urgences nocturnes ou de week-end, laissez un message vocal au 07 68 69 78 48, rappel prioritaire dès la première heure de la journée suivante avec créneau d'intervention.",
          },
          {
            question:
              "Mon pavillon est sous couvert d'arbres, démoussage fréquent obligatoire ?",
            answer:
              "Oui, sur Villenave-d'Ornon particulièrement, les pavillons sous couvert arboré présentent un environnement humide qui favorise la réinstallation rapide des mousses. Nous recommandons un démoussage complet tous les 3-4 ans (au lieu de 4-5 ans en zone aérée), combiné systématiquement à un traitement hydrofuge longue durée (garantie 10 ans) qui ralentit considérablement le retour des mousses.",
          },
          {
            question:
              "Vous occupez-vous des toits-terrasses des copropriétés récentes ?",
            answer:
              "Oui, nous traitons l'étanchéité de toits-terrasses sur les programmes immobiliers récents de Villenave-d'Ornon, notamment ceux proches du tramway. Techniques EPDM, bitume modifié, ou membrane PVC selon les configurations. Devis adapté au format syndic, attestations d'assurance, planning compatible AG.",
          },
          {
            question:
              "Après une tempête, vous gérez le dossier d'assurance ?",
            answer:
              "Oui, nous constituons un dossier complet : photos détaillées des dégâts, chiffrage ligne par ligne pour la réparation, attestations d'assurance, échanges éventuels avec l'expert mandaté par votre assurance. Beaucoup de nos chantiers tempête villenavais sont pris en charge à 80-100 % par les assureurs habitation.",
          },
          {
            question:
              "Faut-il une autorisation pour refaire sa toiture à Villenave-d'Ornon ?",
            answer:
              "Pour une réfection à l'identique (même matériau, même teinte, même pente), pas de formalité administrative dans la majorité des cas. Pour un changement de matériau ou de couleur, une déclaration préalable de travaux est obligatoire auprès du service urbanisme communal. Aucun secteur ABF particulier ne contraint Villenave-d'Ornon. Nous vous indiquons précisément les démarches dès le diagnostic.",
          },
          {
            question:
              "Acceptez-vous les paiements échelonnés pour gros chantiers ?",
            answer:
              "Oui, pour les chantiers supérieurs à 5 000 € HT, paiement en 2 ou 3 fois sans frais à convenir à la signature. Pour les rénovations énergétiques éligibles à MaPrimeRénov' ou à l'éco-PTZ, nous fournissons tous les justificatifs nécessaires à votre dossier.",
          },
          {
            question:
              "Ma tuile mécanique 70-90 approche fin de vie — réparer ou refaire ?",
            answer:
              "Critères objectifs : (1) si <20 % des tuiles présentent des défauts, réparation ciblée + démoussage + hydrofuge = 15-20 ans de durée de vie supplémentaire (18-27 €/m² combo), (2) si >30 % des tuiles présentent des défauts ou faîtages disloqués ou noues percées, réfection complète devient plus rentable (85-145 €/m² tuile mécanique). Diagnostic sur site indispensable pour analyse honnête.",
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
            "3 questions à poser à tout couvreur pour Villenave-d'Ornon, particulièrement sur pavillonnaire tuile mécanique années 70-90 en fin de vie.",
          items: [
            {
              question:
                "Diagnostic honnête : réparer ou refaire ma tuile mécanique 70-90 ?",
              answer:
                "Un artisan sérieux vous donne l'analyse chiffrée objective (nombre de tuiles défectueuses, état faîtage, noues) avec 2 options chiffrées (réparation vs réfection). Un commercial pousse la réfection pour maximiser le devis. Nous privilégions toujours la réparation quand elle est techniquement suffisante.",
            },
            {
              question:
                "Combien d'hydrofuges avez-vous appliqués sur Villenave ?",
              answer:
                "Un couvreur qui travaille vraiment Villenave depuis plusieurs années a des dizaines de références de démoussages + hydrofuges sur les pavillons Villenavais. Nous en réalisons 15-25 par an sur la commune depuis 2005.",
            },
            {
              question:
                "Votre devis inclut-il tous les postes ou reste-t-il des lignes ouvertes ?",
              answer:
                "Nos devis détaillent chaque poste : main d'œuvre, matériaux, sécurité, accès. Aucune ligne « divers et imprévus » — vous savez exactement ce que vous signez et le total ne bouge pas.",
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
