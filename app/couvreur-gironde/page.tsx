import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('couvreur-gironde');

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
            Artisan couvreur-zingueur en{' '}
            <span className="text-[var(--color-terre)]">Gironde (33)</span>{' '}
            depuis 2005
          </>
        ),
        heroSubtitle:
          "Artisan couvreur-zingueur en Gironde (33) depuis 2005, spécialiste démoussage et nettoyage de toiture. Interventions sur Bordeaux Métropole, Médoc, Bassin d'Arcachon, Libournais et Sud-Gironde. Urgence fuite 7j/7, devis gratuit sous 24h, garantie décennale.",
        shortTitle: 'Couvreur Gironde',
        presentation: (
          <>
            <p>
              Couverture Gironde est une{' '}
              <strong>entreprise artisanale de couverture</strong> intervenant
              sur l'ensemble du département depuis 2005. Notre périmètre
              couvre Bordeaux Métropole en intervention quotidienne, et nous
              nous déplaçons sur tout le département pour les chantiers
              dimensionnés : Médoc, Bassin d'Arcachon, Libournais, Saint-Émilion,
              Entre-deux-Mers, Sud-Gironde, La Brède, Langon. Note 5/5 sur 52
              avis Google.
            </p>
            <p>
              Le département de la Gironde présente une diversité de
              contraintes climatiques et patrimoniales qui imposent à un
              couvreur une <strong>vraie polyvalence technique</strong>. Le
              climat océanique, avec ses 930 à 1100 mm de précipitations
              annuelles selon la zone, ses hivers doux et humides, et ses
              vents d'ouest réguliers, exige un entretien préventif
              rigoureux. Sur le littoral et le bassin, l'air salin attaque
              les pièces métalliques (zinguerie, faîtage scellé,
              quincaillerie). Dans le Médoc et le Libournais, l'exposition
              aux orages d'été et aux tempêtes hivernales multiplie les
              sinistres tuiles et faîtages.
            </p>
            <p>
              Côté patrimoine, la Gironde concentre une diversité
              architecturale unique : <strong>échoppes bordelaises</strong>{' '}
              et maisons de maître en tuile canal du XIXe siècle,{' '}
              <strong>chartreuses du Médoc</strong> en ardoise,{' '}
              <strong>villas balnéaires</strong> du Bassin d'Arcachon en tuile
              mécanique, et bâti rural en pierre et tuile romane. Cette
              diversité demande un savoir-faire ajusté à chaque typologie,
              pression de nettoyage adaptée, choix du produit anti-mousse,
              dimensionnement des gouttières et techniques de pose
              différenciées.
            </p>
            <p>
              Notre vocation : proposer un service complet, sérieux et
              accessible,{' '}
              <strong>sans intermédiaire et sans sous-traitance</strong>.
              C'est notre équipe qui se déplace, qui chiffre, qui réalise
              les travaux et qui assure le SAV. Quand vous appelez
              Couverture Gironde, vous parlez directement à l'artisan qui
              interviendra sur votre toiture. Cette continuité de
              l'interlocuteur est ce qui distingue un artisan d'une simple
              structure commerciale.
            </p>
            <p>
              Notre prestation phare est l'<strong>entretien préventif de
              toiture</strong> : démoussage professionnel, nettoyage maîtrisé
              et traitement hydrofuge garanti 10 ans. Le climat girondin fait
              que les toitures locales se dégradent 30 à 50 % plus vite que
              la moyenne nationale sans entretien régulier. Anticiper, c'est
              dépenser 10 fois moins qu'une réfection complète tardive.
            </p>
            <p>
              Atelier basé à <strong>Mérignac (65 rue de Malbos, 33700)</strong>,
              à proximité immédiate de l'A630 et de la rocade bordelaise. Cette
              position permet une couverture rapide de Bordeaux Métropole en
              moins d'une heure, et un accès dégagé vers le Médoc (1h),
              Arcachon (1h), Libourne (45 min) et le Sud-Gironde (1h15). Pour
              les chantiers de plusieurs jours dans le département, nous
              organisons des journées d'intervention groupées pour limiter les
              frais de déplacement.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Couvreur indépendant en direct',
            description:
              "Pas de franchise, pas de sous-traitance. L'artisan qui chiffre est celui qui travaille et qui assure le SAV. Vous n'avez qu'un seul interlocuteur.",
          },
          {
            title: 'Couverture département complet (33)',
            description:
              "Bordeaux Métropole en quotidien, Médoc, Bassin d'Arcachon, Libournais et Sud-Gironde sur devis. Maillage géographique optimisé pour limiter les frais de déplacement.",
          },
          {
            title: '20 ans d\'expérience en Gironde',
            description:
              "Note 5/5 sur 52 avis Google. Connaissance fine du bâti girondin : échoppes bordelaises, chartreuses Médoc, villas Arcachon, bâti rural Entre-deux-Mers.",
          },
          {
            title: 'Expertise climat océanique',
            description:
              "Pluviométrie élevée, vents d'ouest, air salin sur le littoral : nous adaptons matériaux et techniques aux contraintes locales spécifiques de chaque sous-zone du département.",
          },
          {
            title: 'Garantie décennale active',
            description:
              "Assurance décennale et responsabilité civile pro en cours de validité. Justificatifs fournis systématiquement avec le devis. Vous êtes protégé 10 ans.",
          },
          {
            title: 'Devis gratuit en 24h',
            description:
              "Vous nous contactez par téléphone ou formulaire. Réponse sous 24h ouvrées avec devis détaillé ligne par ligne, transparent et sans engagement.",
          },
        ],
        risques: [
          {
            title: 'Toiture non entretenue en climat humide',
            description:
              "Sans démoussage tous les 3 à 5 ans, les mousses retiennent l'humidité, dégradent les tuiles par gel-dégel et bouchent les gouttières. Conséquence : infiltrations, charpente fragilisée, réfection 10× plus chère.",
          },
          {
            title: 'Fuite non traitée',
            description:
              "Une fuite signalée et non traitée endommage isolant, charpente, plafonds en quelques semaines. Un sinistre étendu peut atteindre 10 000 à 30 000 € quand une réparation initiale aurait coûté 400 à 800 €.",
          },
          {
            title: 'Zinguerie en bord de mer non protégée',
            description:
              "Sur le Bassin d'Arcachon et le littoral médocain, l'air salin oxyde le zinc standard en 5 à 10 ans. Sans choix de qualité (zinc patiné, alliages adaptés), gouttières et faîtages sont à refaire.",
          },
          {
            title: 'Travaux non assurés (sous-traitance opaque)',
            description:
              "Faire intervenir un artisan sans décennale ni RC pro vous expose à 100 % du coût en cas de sinistre post-chantier. Toujours demander l'attestation et vérifier les dates de validité.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic gratuit sur site',
            description:
              "Visite technique sans engagement : état général, points faibles, mesures, photos. Nous repérons aussi les anomalies non visibles depuis le sol que vous ignoriez peut-être.",
          },
          {
            title: 'Devis détaillé sous 24h',
            description:
              "Devis chiffré ligne par ligne, sans ambiguïté. Vous savez exactement ce qui est fait, pourquoi, avec quels matériaux, et combien chaque poste coûte.",
          },
          {
            title: 'Planification et démarches administratives',
            description:
              "Selon les communes (PLU, ABF en secteur sauvegardé, occupation de voirie), nous gérons les autorisations. Vous n'avez qu'à signer.",
          },
          {
            title: 'Intervention par notre équipe',
            description:
              "Aucune sous-traitance. C'est notre équipe qui exécute le chantier, avec le matériel adapté et les protections nécessaires (riverains, abords, voisins).",
          },
          {
            title: 'Réception et photos avant/après',
            description:
              "Visite de fin de chantier avec vous. Photos avant/après remises systématiquement. Attestation décennale rappelée.",
          },
          {
            title: 'SAV et entretien programmé',
            description:
              "Garantie décennale + suivi entretien. Pour les démoussages et hydrofuges, nous proposons un rappel automatique à la fréquence recommandée (3 à 5 ans).",
          },
        ],
        tarifs: {
          intro:
            "Fourchettes de prix couvreur constatées sur l'ensemble du département de la Gironde en 2026, à titre indicatif. Les tarifs varient selon la commune (Bordeaux Métropole vs communes rurales), l'accessibilité, le matériau et l'état réel de la toiture. Seul un diagnostic sur site permet un chiffrage précis.",
          lines: [
            {
              service: 'Démoussage toiture (avec brossage)',
              range: '12 – 18 €/m²',
              note: 'Bordeaux Métropole, sans surcoût pour communes limitrophes',
            },
            {
              service: 'Démoussage + traitement hydrofuge 10 ans',
              range: '18 – 27 €/m²',
              note: 'Combo recommandé, meilleur rapport durabilité/prix',
            },
            {
              service: 'Nettoyage haute pression maîtrisé',
              range: '12 – 20 €/m²',
              note: 'Pression adaptée matériau (tuile canal, ardoise, zinc)',
            },
            {
              service: 'Réfection complète tuile canal Bordeaux',
              range: '85 – 145 €/m²',
              note: 'Tarif classique bâti bordelais',
            },
            {
              service: 'Réfection complète ardoise Médoc',
              range: '120 – 220 €/m²',
              note: 'Ardoise naturelle Angers ou Espagne',
            },
            {
              service: 'Zinguerie marine Bassin d\u2019Arcachon',
              range: '75 – 130 €/ml',
              note: 'Zinc patiné/prépatiné anti-air-salin',
            },
            {
              service: 'Charpente : traitement bois curatif',
              range: '25 – 45 €/m²',
              note: 'Traitement insectes + champignons',
            },
            {
              service: 'Urgence fuite Bordeaux Métropole',
              range: '250 – 550 €',
              note: 'Intervention 30-60 min heures ouvrées',
            },
            {
              service: 'Urgence fuite Sud-Gironde / Médoc',
              range: '350 – 750 €',
              note: 'Selon distance depuis Mérignac',
            },
            {
              service: 'Diagnostic complet + rapport photos',
              range: '0 – 180 €',
              note: 'Gratuit si chantier signé, sinon forfait',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, sécurité incluse. TVA 10 % applicable aux logements >2 ans. Échafaudage spécifique et intervention hors zone Bordeaux Métropole sur devis. Note 5/5 sur 52 avis Google publics.",
        },
        quartiersBordeaux: {
          intro:
            "Nous intervenons sur l'ensemble du département de la Gironde depuis notre atelier de Mérignac (65 rue de Malbos). Bordeaux Métropole en quotidien, secteurs plus éloignés (Médoc, Bassin, Libournais, Sud-Gironde) sur devis avec chantiers groupés pour maîtriser les frais de déplacement.",
          items: [
            {
              nom: 'Bordeaux',
              description:
                "Centre UNESCO + Chartrons + Caudéran + Saint-Augustin + Bastide + Lac. Bâti haussmannien, échoppes, tuile canal, ardoise patrimoniale.",
              href: '/couvreur-bordeaux',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune d\u2019atelier depuis 2005. Intervention 15-30 min, tarifs sans surcoût déplacement.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Quartiers boisés (Bourg-Madame, Cap-de-Bos), copropriétés universitaires. Démoussage + hydrofuge fortement recommandés.",
              href: '/couvreur-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Maisons bourgeoises + échoppes patrimoniales. Tuile canal traditionnelle, ardoise pour le bâti de maître.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Bègles',
              description:
                "Bâti ouvrier + ZAC récentes. Mix tuile canal, mécanique et toits-terrasses.",
              href: '/couvreur-begles',
            },
            {
              nom: "Villenave-d'Ornon",
              description:
                "Pavillonnaire étendu, tuile mécanique 70-90. Démoussages et réparations courantes.",
              href: '/couvreur-villenave-dornon',
            },
            {
              nom: 'Le Bouscat',
              description:
                "Quartier résidentiel patrimonial. Échoppes bordelaises, tuile canal, zinc à préserver.",
              href: '/couvreur-bouscat',
            },
            {
              nom: 'Gradignan',
              description:
                "Habitat pavillonnaire arboré. Mousses systématiques versants nord, hydrofuge indispensable.",
              href: '/couvreur-gradignan',
            },
            {
              nom: 'Eysines',
              description:
                "Pavillonnaire + habitat maraîcher. Toitures variées, tuile canal sur bâtisses anciennes.",
              href: '/couvreur-eysines',
            },
            {
              nom: 'Cenon (rive droite)',
              description:
                "Coteaux Haut Cenon + plateau Palmer. Bâti contrasté, gouttières section renforcée pour dénivelé.",
              href: '/couvreur-cenon',
            },
            {
              nom: 'Arcachon & Bassin',
              description:
                "Villas Ville d'Hiver, air salin. Zinc marine (patiné, alliage), démoussage adapté.",
              href: '/couvreur-arcachon',
            },
            {
              nom: 'Libourne & Libournais',
              description:
                "Bâti girondin traditionnel, pierre + tuile romane. Interventions groupées pour chantiers dimensionnés.",
              href: '/couvreur-libourne',
            },
          ],
        },
      }}
    />
  );
}
