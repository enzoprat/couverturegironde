import type { Metadata } from 'next';
import { QuartierBordeauxPageLayout } from '@/components/content/QuartierBordeauxPageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('couvreur-bordeaux-rive-droite');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <QuartierBordeauxPageLayout
      content={{
        slug: PAGE.slug,
        quartier: 'Rive Droite',
        quartierInflected: 'de la Rive Droite',
        microZones: [
          'La Bastide',
          'Brazza',
          'Niel',
          'Benauge',
          'Bastide Niel',
          'Queyries',
          'Galin',
          'Thiers',
          'Jardin Botanique',
          'Garonne Eiffel',
          'Quai des Queyries',
          'Avenue Thiers',
        ],
        heroSubtitle:
          "Couvreur-zingueur sur la Rive Droite de Bordeaux depuis 2005, intervention quotidienne sur les pavillons de la Bastide, les programmes neufs de Brazza et Niel, et les copropriétés de Benauge. Démoussage, réparation, urgence fuite 7j/7. Atelier accessible à 10 km, devis gratuit sous 24h.",
        contexteUrbain: (
          <>
            <p>
              La Rive Droite de Bordeaux est en plein renouvellement urbain
              depuis 15 ans. C'est aujourd'hui l'un des secteurs les plus
              dynamiques de la métropole, avec un{' '}
              <strong>mix architectural unique</strong> : pavillons
              traditionnels de la Bastide, programmes neufs ambitieux de
              Brazza, Bastide-Niel et Garonne-Eiffel, immeubles
              haussmanniens historiques cours Victor-Hugo, copropriétés
              années 60-70 à Benauge, et villas bourgeoises sur les
              hauteurs de Queyries et de l'avenue Thiers.
            </p>
            <p>
              Cette diversité demande une vraie polyvalence du couvreur.
              Les pavillons anciens de la Bastide et de Queyries sont
              majoritairement en <strong>tuile canal traditionnelle</strong>
              ou tuile mécanique, avec quelques toitures ardoise sur les
              maisons bourgeoises de l'avenue Thiers. Les programmes neufs
              de Brazza, Niel et Garonne-Eiffel reposent sur des{' '}
              <strong>toits-terrasses étanchés</strong> (EPDM, bitume
              modifié, parfois végétalisés), des bacs acier pour les
              extensions contemporaines, et des couvertures zinc joint
              debout sur les architectures signature. Les copropriétés
              années 60-70 de Benauge utilisent souvent des tuiles
              mécaniques avec ondulations métalliques en toiture commune.
            </p>
            <p>
              Le climat de la Rive Droite est strictement identique à la
              Rive Gauche : <strong>océanique humide</strong>, ~930 mm de
              pluie par an, hivers doux. Spécificité topographique : les
              hauteurs de Queyries et du Jardin Botanique exposent plus
              directement aux vents d'ouest qui causent des sinistres
              tempête sur les faîtages et zingueries fragiles. Sur les
              pavillons proches de la Garonne, l'humidité du sol et la
              proximité du fleuve accélèrent la prolifération des mousses.
            </p>
            <p>
              Notre atelier à Mérignac est à <strong>10 km</strong> de la
              Bastide via le pont de pierre ou le pont Saint-Jean. En
              heures creuses, accès rapide ; en heures de pointe, le
              pont peut être congestionné, mais nous adaptons les
              déplacements urgence en conséquence. Pour les urgences
              fuite, nous intervenons en{' '}
              <strong>1 heure à 1h15</strong> en heures ouvrées, avec
              mise hors d'eau immédiate.
            </p>
            <p>
              Couverture Gironde travaille en{' '}
              <strong>direct sans sous-traitance</strong>. C'est l'artisan
              qui chiffre, qui exécute le chantier sur la Rive Droite,
              qui revient en SAV. Cette continuité explique nos{' '}
              <strong>5/5 sur 54 avis Google</strong> et notre
              recommandation régulière par syndics et copropriétaires de
              Brazza, Niel et Benauge.
            </p>
          </>
        ),
        urgenceFuite: {
          intro: (
            <>
              <p>
                Une fuite sur la Rive Droite peut prendre des formes très
                différentes selon que vous êtes en pavillon Bastide
                traditionnel ou en programme neuf Brazza. Nous intervenons
                en urgence 7j/7 sur l'ensemble du périmètre Rive Droite,
                avec mise hors d'eau immédiate et devis de réparation
                définitif sous 48h.
              </p>
              <p>
                Sur les pavillons anciens, les fuites concernent souvent
                les <strong>tuiles canal cassées</strong>, les{' '}
                <strong>faîtages scellés</strong> qui ont vieilli, ou
                les <strong>noues zinc oxydées</strong>. Sur les
                programmes neufs, les fuites sont principalement des
                <strong> infiltrations en étanchéité de toit-terrasse</strong>{' '}
                (EPDM ou bitume vieillissant), des défauts de raccord
                autour des skydoms ou des relevés d'étanchéité au pied
                des murs en attique.
              </p>
            </>
          ),
          casTypiques: [
            {
              title: 'Tuile canal cassée (pavillon Bastide)',
              description:
                "Coup de vent ou usure : remplacement à l'identique avec tuiles d'origine. Diagnostic des tuiles adjacentes pour anticiper de futures casses.",
            },
            {
              title: 'Infiltration toit-terrasse EPDM (Brazza, Niel)',
              description:
                "Diagnostic du défaut d'étanchéité (raccord, perforation, vieillissement). Réparation locale ou recouvrement selon état général.",
            },
            {
              title: 'Faîtage scellé fissuré',
              description:
                "Sur les pavillons Bastide ou Queyries, mortier ciment dur fissuré. Reprise au mortier chaux compatible bâti ancien.",
            },
            {
              title: 'Noue zinc percée',
              description:
                "Sur les toitures à plusieurs pans (Bastide, Thiers). Soudure si récupérable, sinon remplacement complet en zinc qualité Bassin.",
            },
            {
              title: 'Relevé d\u2019étanchéité défaillant (toit-terrasse)',
              description:
                "Au pied du mur d'attique ou autour d'un skydom, l'étanchéité se décolle. Reprise propre avec primer + bande EPDM ou résine.",
            },
            {
              title: 'Tempête sur pavillon (sinistre assurance)',
              description:
                "Sécurisation immédiate par bâche, dossier assurance constitué (photos + devis), réfection planifiée après accord expert.",
            },
          ],
        },
        raisonsLocales: [
          {
            title: 'Polyvalence tuile + toit-terrasse',
            description:
              "Pavillons Bastide en tuile canal d'un côté, programmes neufs Brazza en étanchéité EPDM de l'autre. Nous traitons les deux quotidiennement.",
          },
          {
            title: 'Étanchéité toits-terrasses contemporains',
            description:
              "EPDM, bitume modifié, résines : diagnostic, réparation, recouvrement, rénovation complète. Devis dédié pour syndics.",
          },
          {
            title: 'Couvreur à 10 km, urgence en 1h-1h15',
            description:
              "Accès Rive Droite par ponts de pierre ou Saint-Jean. Mise hors d'eau immédiate sur les urgences fuite, sans surcoût de déplacement.",
          },
          {
            title: 'Connaissance des programmes neufs',
            description:
              "Brazza, Bastide Niel, Garonne Eiffel : nous travaillons régulièrement sur ces périmètres et connaissons leurs spécificités (étanchéité, ventilation, accès chantier).",
          },
          {
            title: 'Devis adaptés copropriétés',
            description:
              "Nombreuses copropriétés à Benauge et sur les programmes récents. Devis détaillé syndic, attestation décennale, coordination AG.",
          },
          {
            title: 'Travail direct, sans sous-traitance',
            description:
              "L'artisan qui chiffre est celui qui exécute sur la Rive Droite et qui assure le SAV. Un seul interlocuteur du devis à la garantie.",
          },
        ],
        faqLocale: [
          {
            question: "Travaillez-vous sur les toits-terrasses des programmes neufs Brazza et Niel ?",
            answer:
              "Oui, c'est une partie importante de notre activité Rive Droite. Les programmes Brazza, Bastide Niel et Garonne Eiffel utilisent massivement des étanchéités EPDM ou bitume modifié sur toits-terrasses. Nous intervenons pour diagnostic, réparation ponctuelle (raccords défaillants, perforations), recouvrement (étanchéité en milieu de vie) ou rénovation complète (en fin de vie, généralement 25-30 ans après pose).",
          },
          {
            question: "Quel est votre délai d'intervention en urgence sur la Rive Droite ?",
            answer:
              "En heures ouvrées, environ 1 heure à 1h15. Notre atelier est à 10 km à Mérignac, accès par pont de pierre ou pont Saint-Jean. En heures de pointe, le passage du pont peut allonger légèrement le délai, mais la mise hors d'eau reste réalisée le jour même. Nous adaptons les déplacements urgence aux conditions de circulation.",
          },
          {
            question: "Intervenez-vous sur les copropriétés de Benauge ?",
            answer:
              "Oui. Les copropriétés années 60-70 de Benauge ont des besoins toiture récurrents (tuiles mécaniques vieillissantes, zinguerie oxydée, étanchéité chéneau). Nous fournissons devis détaillés pour syndic et attestations d'assurance adaptés aux usages AG. Acompte raisonnable, solde après réception.",
          },
          {
            question: "Mon pavillon Bastide a une vieille toiture en tuile canal. Vous le traitez ?",
            answer:
              "Oui, c'est l'un de nos types de chantier les plus fréquents Rive Droite. Pavillons traditionnels Bastide, Queyries, avenue Thiers : tuile canal sur charpente bois, faîtage scellé chaux ou ciment, zinguerie demi-ronde zinc. Démoussage, réparation ponctuelle, réfection complète : nous traitons tout le cycle de vie de votre toiture.",
          },
          {
            question: "Faut-il une autorisation pour refaire ma toiture Rive Droite ?",
            answer:
              "À Bordeaux, une déclaration préalable de travaux est requise en cas de modification de l'aspect extérieur (changement de matériau, de teinte, ajout de Velux). Pour une réfection à l'identique, généralement aucune formalité. Sur les hauteurs proches du Jardin Botanique ou des secteurs anciens, vérification ABF possible — nous gérons les démarches dans le cadre de nos prestations.",
          },
          {
            question: "Couvrez-vous Garonne Eiffel et les programmes en cours ?",
            answer:
              "Oui, Garonne Eiffel est intégralement couverte. Sur les programmes en cours de livraison, nous intervenons pour les SAV constructeur (étanchéité défaillante en cours de garantie) ou pour les copropriétaires souhaitant compléter les prestations livrées (Velux supplémentaires, isolation toit-terrasse, etc.).",
          },
          {
            question: "Quel est le tarif pour rénover une étanchéité EPDM ?",
            answer:
              "Une réparation locale d'étanchéité EPDM (raccord, petit défaut) coûte généralement entre 350 et 800 €. Un recouvrement de toit-terrasse en milieu de vie se situe entre 75 et 110 €/m² (économique vs rénovation complète). Une rénovation complète (dépose + pose neuve) est entre 110 et 180 €/m². Devis personnalisé après diagnostic visuel.",
          },
        ],
      }}
    />
  );
}
