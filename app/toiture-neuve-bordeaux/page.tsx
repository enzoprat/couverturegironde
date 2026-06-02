import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('toiture-neuve-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'neuve',
        slug: PAGE.slug,
        h1: (
          <>
            Toiture neuve à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            construction et extension sur mesure
          </>
        ),
        heroSubtitle:
          "Construction de toiture neuve par artisan couvreur-charpentier depuis 2005 : charpente, couverture, zinguerie, isolation. Maîtrise d'œuvre globale pour neuf, extension ou surélévation. Garantie décennale.",
        shortTitle: 'Toiture neuve',
        presentation: (
          <>
            <p>
              Construire une toiture neuve à Bordeaux est un projet
              structurel qui engage votre patrimoine pour les 50 prochaines
              années. Le choix du matériau, de la pente, de l'isolation, de
              la zinguerie et de la charpente conditionnent à la fois la
              performance thermique, la durabilité, l'esthétique et la
              valeur immobilière du bâti. C'est{' '}
              <strong>une décision qu'on ne reprend pas dix ans plus
              tard</strong>.
            </p>
            <p>
              Couverture Gironde intervient en{' '}
              <strong>maîtrise d'œuvre complète</strong> sur les
              constructions neuves, les extensions et les surélévations.
              Notre champ couvre l'intégralité de la séquence : étude des
              contraintes (PLU, ABF si secteur sauvegardé, normes
              thermiques RE 2020), <strong>conception de la charpente
              bois</strong> (traditionnelle ou industrielle),{' '}
              <strong>pose de la couverture</strong> (tuile canal, tuile
              mécanique, ardoise naturelle, zinc, bac acier),{' '}
              <strong>zinguerie sur mesure</strong> (gouttières, descentes,
              noues, abergements) et{' '}
              <strong>isolation thermique</strong> (sarking, combles
              perdus, rampants).
            </p>
            <p>
              Le <strong>choix du matériau</strong> dépend de plusieurs
              facteurs : style architectural du quartier (échoppes
              bordelaises = tuile canal traditionnelle), contraintes
              ABF dans les secteurs sauvegardés, pente disponible (tuile
              canal mini 25 %, ardoise mini 35 %, zinc dès 5 %), et budget.
              Sur Bordeaux Métropole, nous travaillons majoritairement la{' '}
              <strong>tuile canal</strong> (la plus économique et
              cohérente avec le bâti existant), l'<strong>ardoise
              naturelle</strong> sur le bâti bourgeois, et le{' '}
              <strong>zinc joint debout</strong> pour les architectures
              contemporaines.
            </p>
            <p>
              La <strong>charpente</strong> est l'autre brique critique.
              Charpente traditionnelle bois (chêne, douglas, sapin) pour
              les grandes portées et les esthétiques nobles ; charpente
              industrielle (fermettes) pour les budgets serrés ou les
              configurations simples. Nous{' '}
              <strong>dimensionnons selon les charges climatiques</strong>{' '}
              (région bordelaise = Eurocode 1 charges neige et vent
              spécifiques) et selon la couverture choisie. Une charpente
              sous-dimensionnée se déforme en quelques années ;
              sur-dimensionnée, elle gonfle inutilement le devis.
            </p>
            <p>
              Sur le neuf, la <strong>réglementation thermique RE 2020</strong>{' '}
              impose des performances d'isolation strictes. Nous
              dimensionnons l'isolation (laine de verre, laine de bois,
              ouate de cellulose, PIR) selon les exigences de votre
              permis de construire et selon l'usage prévu (résidence
              principale, secondaire, location). L'isolation est intégrée
              dès la conception, pas ajoutée a posteriori — gage
              d'efficacité thermique réelle.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Maîtrise d\u2019œuvre globale',
            description:
              "Charpente, couverture, zinguerie, isolation : un seul interlocuteur de A à Z. Vous évitez les jeux de renvois entre corps de métier.",
          },
          {
            title: 'Conformité PLU et ABF',
            description:
              "Étude des contraintes urbanistiques en amont. Choix de matériau, pente et couleur conformes au quartier et à l'avis ABF si nécessaire.",
          },
          {
            title: 'Dimensionnement charpente professionnel',
            description:
              "Calcul Eurocode 1 selon les charges climatiques bordelaises. Charpente ni sous- ni sur-dimensionnée — durabilité et budget optimisés.",
          },
          {
            title: 'Conformité RE 2020',
            description:
              "Isolation dimensionnée selon les exigences thermiques en vigueur. Performance énergétique réelle, pas seulement déclarative.",
          },
          {
            title: 'Coordination avec votre maître d\u2019œuvre',
            description:
              "Si vous avez déjà un architecte ou maître d'œuvre, nous nous intégrons à son équipe. Si non, nous prenons en charge la coordination.",
          },
          {
            title: 'Garantie décennale + dommages-ouvrage',
            description:
              "Sur le neuf, vous bénéficiez de notre décennale + de l'obligation d'assurance dommages-ouvrage. Vous êtes couvert intégralement.",
          },
        ],
        risques: [
          {
            title: 'Matériau incohérent avec le quartier',
            description:
              "Une couverture qui ne respecte pas l'esthétique du quartier (zinc moderne dans un quartier d'échoppes traditionnelles) déprécie la valeur du bien.",
          },
          {
            title: 'Charpente sous-dimensionnée',
            description:
              "Une charpente économique se déforme en 5-10 ans sous le poids de la couverture et des charges climatiques. Reprise structurelle très coûteuse.",
          },
          {
            title: 'Pont thermique à la jonction',
            description:
              "Une isolation discontinue entre rampants et combles crée des ponts thermiques : déperditions et condensation. Doit être conçu dès le départ.",
          },
          {
            title: 'Étanchéité d\u2019air défaillante',
            description:
              "Sans étanchéité d'air rigoureuse (pare-vapeur, jointoiement), la performance thermique théorique n'est jamais atteinte en pratique. RE 2020 non respectée.",
          },
        ],
        methode: [
          {
            title: 'Étude préalable et contraintes',
            description:
              "Analyse du permis de construire, du PLU, des avis ABF si secteur protégé. Choix concertés du matériau et de la pente.",
          },
          {
            title: 'Conception charpente et couverture',
            description:
              "Dimensionnement professionnel selon charges climatiques. Plans techniques, choix des bois et des éléments de couverture.",
          },
          {
            title: 'Devis détaillé global',
            description:
              "Chiffrage ligne par ligne : charpente, couverture, zinguerie, isolation, équipements. Aucune ambiguïté.",
          },
          {
            title: 'Préparation et livraison matériaux',
            description:
              "Commande des matériaux, planification du chantier, gestion des accès et stockage. Coordination avec les autres corps de métier.",
          },
          {
            title: 'Pose charpente et couverture',
            description:
              "Montage de la charpente, pose du voligeage/contre-lattage, pose de la couverture, finitions zinguerie. Étanchéité testée.",
          },
          {
            title: 'Isolation et finitions',
            description:
              "Pose de l'isolation thermique selon le type retenu, étanchéité d'air, finitions intérieures (placo, peinture si demandée). Réception et garanties.",
          },
        ],
      }}
    />
  );
}
