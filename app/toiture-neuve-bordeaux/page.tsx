import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('toiture-neuve-bordeaux');

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
        service: 'neuve',
        slug: PAGE.slug,
        h1: (
          <>
            Toiture neuve{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            construction, extension, réfection 85-220 €/m²
          </>
        ),
        heroSubtitle:
          "Construction de toiture neuve : charpente + couverture + zinguerie + isolation en maîtrise d'œuvre unique. Neuf, extension, surélévation ou réfection complète. Tuile canal 85-145 €/m², ardoise 120-220 €/m². Décennale, devis 24h.",
        shortTitle: 'Toiture neuve',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-charpentier, fondateur — atelier Mérignac',
          bio: "Une toiture neuve est un chantier structurant qui doit tenir 50-80 ans. Depuis 2005, je réalise construction neuve, extension et réfection complète en MAÎTRISE D'ŒUVRE UNIQUE : charpente, couverture, zinguerie, isolation par mon équipe. Pas de sous-traitance en cascade — un seul interlocuteur du devis à la garantie décennale. Sur bâti neuf, DTU 40.211 respecté systématiquement.",
          badges: [
            'Depuis 2005',
            'Décennale active',
            '5/5 sur 52 avis Google',
            'Maîtrise d\u2019œuvre unique',
          ],
        },
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
              dès la conception, pas ajoutée a posteriori, gage
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
              "Calcul Eurocode 1 selon les charges climatiques bordelaises. Charpente ni sous- ni sur-dimensionnée, durabilité et budget optimisés.",
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

        // ————————————————————————————————————————————————
        // TARIFS TOITURE NEUVE
        // ————————————————————————————————————————————————
        tarifs: {
          intro:
            "Fourchettes 2026 pour construction de toiture neuve ou réfection complète sur Bordeaux Métropole. Prix TTC posé, hors surprises structurelles. Pour maison type 120 m² : réfection tuile canal 10 200-17 400 €, tuile mécanique 9 000-15 600 €, ardoise 14 400-26 400 €.",
          lines: [
            {
              service: 'Réfection complète tuile canal traditionnelle',
              range: '85 – 145 €/m²',
              note: 'Bâti bordelais classique, tuile récupérée si possible',
            },
            {
              service: 'Réfection complète tuile mécanique',
              range: '75 – 130 €/m²',
              note: 'Pavillonnaire standard, matériau moderne',
            },
            {
              service: 'Réfection complète ardoise naturelle',
              range: '120 – 220 €/m²',
              note: 'Ardoise Angers, clous cuivre, bâti bourgeois',
            },
            {
              service: 'Réfection complète zinc à joint debout',
              range: '150 – 250 €/m²',
              note: 'Toiture contemporaine ou courbe',
            },
            {
              service: 'Charpente traditionnelle bois (assemblages)',
              range: '80 – 150 €/m²',
              note: 'Neuf ou refente complète, compatibilité bâti ancien',
            },
            {
              service: 'Charpente fermette industrielle',
              range: '30 – 60 €/m²',
              note: 'Neuf uniquement, combles NON aménageables',
            },
            {
              service: 'Isolation thermique combles (RE2020)',
              range: '30 – 65 €/m²',
              note: 'Selon isolant (laine, ouate, fibre bois)',
            },
            {
              service: 'Écran sous-toiture HPV',
              range: '8 – 15 €/m²',
              note: 'Compatibilité fermette + tradition',
            },
            {
              service: 'Zinguerie complète (gouttières + descentes)',
              range: '65 – 130 €/ml',
              note: 'Zinc soudé étain, section dimensionnée',
            },
            {
              service: 'Extension toiture (avec charpente neuve)',
              range: '150 – 350 €/m²',
              note: 'Charpente + couverture + zinguerie + isolation',
            },
            {
              service: 'Surélévation toiture (rehausse murs)',
              range: '250 – 500 €/m²',
              note: 'Chantier complexe, coordination maçonnerie',
            },
            {
              service: 'Étude + devis détaillé (grand chantier)',
              range: '0 – 500 €',
              note: 'Gratuit si chantier signé, sinon forfait étude',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, sécurité incluse. Échafaudage spécifique, hauteur >12 m, accès complexe sur devis. Grands chantiers (>150 m²) : étude préalable dans le devis. Décennale + garantie parfait achèvement 1 an + garantie bon fonctionnement 2 ans.",
        },

        // ————————————————————————————————————————————————
        // FAQ TOITURE NEUVE-FOCUSED (10 questions ICP)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "Combien coûte une toiture neuve à Bordeaux en 2026 ?",
            answer:
              "Fourchettes 2026 par matériau : tuile canal traditionnelle 85-145 €/m², tuile mécanique 75-130 €/m², ardoise naturelle 120-220 €/m², zinc à joint debout 150-250 €/m². Ces tarifs incluent charpente + couverture + zinguerie + isolation. Pour maison type 120 m² : réfection complète tuile canal 10 200-17 400 € TTC, ardoise 14 400-26 400 € TTC. Extension avec charpente neuve : 150-350 €/m². Surélévation : 250-500 €/m².",
          },
          {
            question:
              "Réfection ou rénovation : comment décider ?",
            answer:
              "Critères objectifs : (1) âge de la couverture actuelle (>50 ans + peu d'entretien = envisager réfection), (2) état de la charpente (bois attaqués = réfection avec renforcement), (3) nombre de points faibles cumulés (>30 % défauts = réfection), (4) projet global d'aménagement des combles. Une réfection complète coûte 85-220 €/m² selon matériau. Une réparation ponctuelle : 180-420 € par intervention. Réfection = rentable si prévu de rester >15 ans dans le logement.",
          },
          {
            question:
              "Charpente traditionnelle ou fermette industrielle ?",
            answer:
              "FERMETTE (fermes industrielles préfabriquées) : 30-60 €/m², rapide à poser, moins chère. INCOMPATIBLE avec combles aménageables (encombrement structurel). CONVIENT pour construction neuve pavillonnaire standard. TRADITIONNELLE (chevrons + pannes + entrait + poinçon) : 80-150 €/m², plus chère. COMPATIBLE combles aménageables. OBLIGATOIRE sur bâti ancien girondin pour respect patrimoine + compatibilité PLU/ABF. Pour extension ou surélévation d'échoppe bordelaise : traditionnelle obligatoire.",
          },
          {
            question:
              "Isolation combles : quel isolant choisir ?",
            answer:
              "Selon RE2020 et budget. LAINE MINÉRALE (laine de verre/roche) : moins chère (30-45 €/m²), performances thermiques correctes, sensible à l'humidité. OUATE DE CELLULOSE : 45-60 €/m², écologique, excellente inertie thermique + phonique, très bonne performance été. FIBRE DE BOIS : 55-75 €/m², écologique, meilleure inertie thermique, meilleure protection été chaud (canicule Bordeaux). Notre recommandation par défaut sur Bordeaux : ouate de cellulose pour équilibre coût/performance.",
          },
          {
            question:
              "Faut-il un permis de construire pour refaire ma toiture ?",
            answer:
              "RÉFECTION À L'IDENTIQUE (même matériau, même teinte, même pente) : aucune formalité dans la majorité des cas. CHANGEMENT D'ASPECT (matériau différent, teinte, création Velux) : déclaration préalable de travaux obligatoire (1-2 mois d'instruction). SURÉLÉVATION ou EXTENSION >20 m² : permis de construire obligatoire (2-4 mois). En secteur UNESCO Bordeaux Centre ou ABF : avis Architecte des Bâtiments de France (2-4 mois supplémentaires). Nous constituons tous les dossiers pour vous.",
          },
          {
            question:
              "Combien de temps dure un chantier de toiture neuve ?",
            answer:
              "Réfection complète standard maison 120 m² : 2-4 semaines (dépose ancienne toiture 3-5 jours + éventuelle reprise charpente 2-5 jours + pose écran + tuile 4-8 jours + zinguerie 2-3 jours + isolation 2-3 jours + finitions 2-3 jours). Construction neuve (charpente + couverture) : 3-5 semaines. Extension avec charpente : 4-8 semaines. Surélévation : 6-12 semaines. Planning intègre créneaux météo et coordination éventuelle avec autres corps de métier (électricité, maçonnerie).",
          },
          {
            question:
              "Aides rénovation énergétique 2026 : MaPrimeRénov, éco-PTZ ?",
            answer:
              "L'isolation de toiture par l'extérieur (sarking) ou par l'intérieur (rampants + combles perdus) est éligible : (1) MaPrimeRénov' Sérénité pour ménages modestes (2 000-11 000 € selon revenus), (2) éco-PTZ jusqu'à 15 000 € pour rénovation énergétique globale, (3) CEE (Certificats d'Économie d'Énergie) 500-3 000 €. Nous vous orientons vers nos partenaires certifiés RGE pour préserver votre éligibilité (obligatoire depuis 2015 pour les aides). La couverture seule (sans isolation) n'est PAS éligible.",
          },
          {
            question:
              "Quelle durée de vie pour une toiture neuve ?",
            answer:
              "Selon matériau + entretien : tuile canal traditionnelle 60-80 ans avec entretien régulier, tuile mécanique 40-60 ans, ardoise naturelle 80-120 ans (le plus durable), zinc joint debout 60-80 ans. Ces durées supposent démoussage tous les 4-5 ans + hydrofuge tous les 8-10 ans sur toitures poreuses + contrôle visuel annuel. Sans entretien : durée de vie réduite de 30-50 %.",
          },
          {
            question:
              "Vous coordonnez avec les autres corps de métier ?",
            answer:
              "Oui pour les chantiers de toiture. Nous coordonnons directement avec le charpentier (souvent notre équipe), le zingueur (nous), l'isoleur (nous ou partenaire), l'électricien pour Velux motorisés, le maçon pour surélévation ou raccords maçonnerie. Pour un projet de rénovation globale (toiture + façade + fenêtres + isolation ITE), nous vous orientons vers un maître d'œuvre partenaire qui coordonne l'ensemble.",
          },
          {
            question:
              "Quelles garanties sur une toiture neuve ?",
            answer:
              "Décennale (10 ans) sur l'ensemble de la prestation, obligation légale — attestation active jointe à chaque devis. Garantie parfait achèvement (1 an) pour toute reprise de désordre constaté à la réception. Garantie bon fonctionnement (2 ans) sur les éléments d'équipement (Velux, gouttières, motorisations). Fiche technique matériaux + attestation d'assurance + photos avant/après + procès-verbal de réception remis en fin de chantier.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
