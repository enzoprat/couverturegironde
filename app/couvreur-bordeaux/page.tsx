import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('couvreur-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'couverture',
        slug: PAGE.slug,
        h1: (
          <>
            Couvreur à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> depuis
            2005 : artisan couverture Bordeaux Métropole
          </>
        ),
        heroSubtitle:
          "Couvreur-zingueur artisan depuis 2005, atelier à Mérignac. Tous travaux de toiture : démoussage, nettoyage, réparation, zinguerie, charpente, neuf et rénovation. Devis gratuit sous 24h, garantie décennale.",
        shortTitle: 'Couvreur Bordeaux',
        presentation: (
          <>
            <p>
              Couverture Gironde est une <strong>entreprise artisanale de
              couverture</strong> implantée à Mérignac depuis 2005,
              intervenant sur l'ensemble de Bordeaux Métropole et de la
              Gironde. Notre vocation : proposer un service de couverture
              complet, sérieux et accessible, sans intermédiaire et sans
              sous-traitance. C'est notre équipe qui se déplace, qui
              chiffre, qui réalise les travaux et qui assure le SAV.
            </p>
            <p>
              Cette continuité de l'interlocuteur est ce qui distingue un
              artisan d'une simple structure commerciale.{' '}
              <strong>
                Quand vous appelez Couverture Gironde, vous parlez à
                l'artisan qui interviendra sur votre toiture.
              </strong>{' '}
              Quand vous recevez un devis, c'est lui qui l'a rédigé. Quand
              un problème se pose plus tard, vous parlez à la même personne.
              C'est l'inverse du modèle franchise/sous-traitance dominant le
              marché.
            </p>
            <p>
              Notre savoir-faire couvre l'ensemble des techniques
              traditionnelles et contemporaines : tuile canal et tuile
              mécanique pour l'habitat bordelais classique,{' '}
              <strong>ardoise naturelle</strong> pour les maisons
              bourgeoises, <strong>zinguerie sur mesure</strong> avec
              soudure étain sur place, <strong>étanchéité de toits-terrasses</strong>{' '}
              pour les copropriétés récentes, et{' '}
              <strong>charpente bois</strong> pour les rénovations
              structurelles. Cette polyvalence permet de traiter votre
              projet de A à Z, sans qu'aucun chantier ne sorte de notre
              champ de compétences.
            </p>
            <p>
              Notre prestation phare reste l'<strong>entretien préventif
              de toiture</strong> : démoussage professionnel, nettoyage
              maîtrisé et traitement hydrofuge garanti 10 ans. Le climat
              océanique humide de la Gironde, 930 mm de pluie par an,
              hivers doux, couvert végétal dense sur Bordeaux Métropole —
              fait que les toitures locales se dégradent 30 à 50 % plus
              vite que la moyenne nationale sans entretien régulier.
              Anticiper, c'est dépenser 10 fois moins qu'une réfection
              complète tardive.
            </p>
            <p>
              Notre dépôt est situé au{' '}
              <strong>65 rue de Malbos à Mérignac (33700)</strong>, à
              moins de 15 minutes de Bordeaux centre, Pessac, Talence,
              Bègles, Le Bouscat et Villenave-d'Ornon. Cette proximité
              géographique garantit une <strong>réactivité en urgence</strong>{' '}
              (mise hors d'eau sous 2-4h en heures ouvrées), des frais de
              déplacement maîtrisés, et une connaissance fine du bâti
              local. Nous travaillons 7j/7 de 6h à 22h pour les urgences,
              et en horaires standards pour les chantiers programmés.
            </p>
            <p>
              Au-delà du métier technique, nous portons une exigence forte
              sur la transparence commerciale :{' '}
              <strong>devis chiffré ligne par ligne</strong>, acompte
              limité à 30 %, solde à la fin du chantier après vérification
              de votre satisfaction. Pas de "divers et imprévus" cachés,
              pas de supplément surprise, pas de pression commerciale. La
              note <strong>5/5 sur 54 avis Google</strong> est la
              traduction concrète de cette éthique au quotidien.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Artisan local depuis 2005',
            description:
              "20 ans d'exercice sur Bordeaux Métropole. Une équipe stable, formée et qualifiée. Connaissance intime du bâti et du climat girondins.",
          },
          {
            title: 'Travail direct, sans sous-traitance',
            description:
              "L'artisan qui chiffre est celui qui réalise les travaux et qui assure le SAV. Vous n'avez qu'un interlocuteur du devis à la garantie décennale.",
          },
          {
            title: 'Polyvalence complète',
            description:
              "Couverture, zinguerie, démoussage, charpente, étanchéité, Velux : tous les corps de métier de la toiture sous un seul interlocuteur.",
          },
          {
            title: 'Devis détaillé sous 24h',
            description:
              "Réponse rapide, chiffrage transparent ligne par ligne, aucun supplément caché. Vous décidez à froid, sans pression commerciale.",
          },
          {
            title: 'Garantie décennale active',
            description:
              "Tous nos chantiers sont couverts par notre assurance décennale. Vous êtes protégé pendant 10 ans après réception des travaux.",
          },
          {
            title: 'Urgence 7j/7',
            description:
              "Fuite, tempête, sinistre : intervention sous quelques heures en heures ouvrées. Mise hors d'eau immédiate, dossier d'assurance constitué.",
          },
        ],
        risques: [
          {
            title: 'Sous-traitance en cascade chez les concurrents',
            description:
              "Beaucoup d'entreprises bordelaises sous-traitent à des équipes externes peu identifiables. Vous perdez la traçabilité, et le SAV devient un parcours du combattant.",
          },
          {
            title: 'Devis flous et imprévus en cours de chantier',
            description:
              "Les pratiques commerciales agressives multiplient les \"divers\" et les suppléments en cours de chantier. À l'arrivée, la facture peut dépasser de 30-50 % le devis initial.",
          },
          {
            title: 'Absence de couverture décennale',
            description:
              "Certains opérateurs ne sont pas correctement assurés. En cas de sinistre ultérieur, vous n'avez aucun recours. Toujours exiger l'attestation décennale avant signature.",
          },
          {
            title: 'Entretien différé qui se paye en réfection',
            description:
              "Une toiture mal entretenue vieillit 30-50 % plus vite. Là où un démoussage régulier coûte 2-3 €/m² par an lissé, une réfection complète tardive coûte 80-150 €/m².",
          },
        ],
        methode: [
          {
            title: 'Premier contact',
            description:
              "Appel ou formulaire en ligne. Nous évaluons votre besoin, vous indiquons les premières fourchettes de prix et planifions une visite si nécessaire.",
          },
          {
            title: 'Visite de diagnostic gratuite',
            description:
              "Un de nos artisans se déplace, inspecte la toiture, prend des photos, identifie les points critiques. Aucun engagement à ce stade.",
          },
          {
            title: 'Devis détaillé sous 24h',
            description:
              "Vous recevez un devis chiffré ligne par ligne avec photos des zones concernées. Comparable, transparent, sans piège.",
          },
          {
            title: 'Préparation du chantier',
            description:
              "Planification, gestion des autorisations (DP, voirie, ABF si secteur sauvegardé), information du voisinage, livraison des matériaux.",
          },
          {
            title: 'Réalisation des travaux',
            description:
              "Notre équipe interne intervient avec le matériel et les équipements de sécurité. Contrôle qualité à chaque étape, photos avant/après systématiques.",
          },
          {
            title: 'Réception et garantie',
            description:
              "Visite de fin de chantier avec vous, remise des photos et de l'attestation décennale. Le solde se règle à votre satisfaction confirmée.",
          },
        ],
        tarifs: {
          intro:
            "Fourchettes de prix observées sur Bordeaux Métropole en 2026 pour les prestations courantes de couverture. Ces tarifs sont indicatifs : seul un diagnostic sur site permet de chiffrer précisément, en fonction de l'accessibilité, de l'état réel et des matériaux nécessaires.",
          lines: [
            {
              service: 'Démoussage toiture + brossage',
              range: '12 – 18 €/m²',
              note: 'Versants nord et zones ombragées prioritaires',
            },
            {
              service: 'Démoussage + traitement hydrofuge',
              range: '18 – 27 €/m²',
              note: 'Combo recommandé climat océanique girondin',
            },
            {
              service: 'Nettoyage haute pression maîtrisé',
              range: '12 – 20 €/m²',
              note: 'Pression adaptée tuile / ardoise / zinc',
            },
            {
              service: 'Remplacement tuiles cassées (≤10)',
              range: '180 – 420 €',
              note: 'Forfait diagnostic + intervention',
            },
            {
              service: 'Réparation faîtage scellé',
              range: '45 – 70 €/ml',
              note: 'Mortier chaux pour bâti ancien bordelais',
            },
            {
              service: 'Pose gouttières zinc dimensionnées',
              range: '55 – 90 €/ml',
              note: 'Section adaptée 930 mm/an pluviométrie',
            },
            {
              service: 'Pose Velux (fenêtre + kit étanchéité)',
              range: '1 200 – 2 400 €',
              note: 'Selon modèle (Standard, Tout Confort, Solaire)',
            },
            {
              service: "Urgence fuite, mise hors d'eau",
              range: '250 – 550 €',
              note: 'Intervention 7j/7, devis sous 24h',
            },
            {
              service: 'Réfection complète tuile canal',
              range: '85 – 145 €/m²',
              note: 'Selon état charpente, isolation et écran sous-toiture',
            },
            {
              service: 'Réfection complète ardoise',
              range: '120 – 220 €/m²',
              note: 'Ardoise naturelle d\u2019Angers, finitions soignées',
            },
            {
              service: 'Étanchéité toit-terrasse (SEL ou EPDM)',
              range: '70 – 130 €/m²',
              note: 'Avec préparation support et relevés',
            },
            {
              service: 'Charpente bois : reprise sablière',
              range: '450 – 1 200 € /ml',
              note: 'Selon section et accessibilité',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, hors échafaudage spécifique et hors situations particulières (ABF, hauteur >12m, accès complexe). Devis personnalisé gratuit sous 24h.",
        },
        quartiersBordeaux: {
          intro:
            "Nous intervenons sur l'ensemble des quartiers de Bordeaux et sa métropole. Chaque secteur a son bâti, ses contraintes urbanistiques et ses spécificités de toiture : nous les connaissons pour avoir réalisé des chantiers dans tous ces secteurs depuis 2005.",
          items: [
            {
              nom: 'Bordeaux Centre',
              description:
                "Échoppes XIXᵉ en tuile canal, immeubles haussmanniens en ardoise, secteur sauvegardé UNESCO avec avis ABF systématique.",
              href: '/couvreur-bordeaux-centre',
            },
            {
              nom: 'Chartrons',
              description:
                "Maisons d'armateurs et entrepôts réhabilités, toitures complexes mêlant tuile, zinc et ardoise. Contraintes ABF fréquentes.",
              href: '/couvreur-bordeaux-chartrons',
            },
            {
              nom: 'Caudéran',
              description:
                "Quartier pavillonnaire majoritairement tuile canal et mécanique des années 1920-1960. Démoussage et reprise zinguerie courants.",
              href: '/couvreur-bordeaux-cauderan',
            },
            {
              nom: 'Saint-Augustin',
              description:
                "Échoppes bordelaises bien préservées et maisons de ville. Tuile canal traditionnelle, beaucoup de chéneaux zinc à entretenir.",
              href: '/couvreur-bordeaux-saint-augustin',
            },
            {
              nom: 'Bastide',
              description:
                "Rive droite réhabilitée, mix bâti ancien et programmes récents avec toits-terrasses EPDM et zinguerie contemporaine.",
              href: '/couvreur-bordeaux-bastide',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune d\u2019atelier depuis 2005. Intervention urgence en 15-30 minutes, tarifs sans surcoût déplacement.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Pavillonnaire dense années 60-90, copropriétés universitaires, parc Bourg-Madame. Démoussage et étanchéité courants.",
              href: '/couvreur-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Mix maisons bourgeoises et résidences étudiantes. Couverture tuile mécanique majoritaire, ardoise pour le bâti bourgeois.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Le Bouscat',
              description:
                "Quartier résidentiel cossu, échoppes et maisons de maître. Tuile canal et zinc patrimoniaux à préserver à l\u2019identique.",
              href: '/couvreur-bouscat',
            },
            {
              nom: 'Bègles',
              description:
                "Bâti ouvrier traditionnel et nouvelles ZAC. Mix tuile canal, mécanique et toits-terrasses sur programmes récents.",
              href: '/couvreur-begles',
            },
            {
              nom: "Villenave-d'Ornon",
              description:
                "Pavillonnaire étendu, toiture tuile mécanique 70-90 majoritaire. Démoussages réguliers et réparations courantes.",
              href: '/couvreur-villenave-dornon',
            },
            {
              nom: 'Gradignan',
              description:
                "Maisons individuelles avec grands jardins boisés, prolifération mousses sur versants nord. Hydrofuge fortement recommandé.",
              href: '/couvreur-gradignan',
            },
          ],
        },
      }}
    />
  );
}
