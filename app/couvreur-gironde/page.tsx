import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-gironde');

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
        service: 'couverture',
        slug: PAGE.slug,
        h1: (
          <>
            Couvreur en{' '}
            <span className="text-[var(--color-terre)]">Gironde (33)</span>{' '}
            — Médoc, Bassin d'Arcachon, Libournais &amp; Sud-Gironde
          </>
        ),
        heroSubtitle:
          "Artisan couvreur-zingueur en Gironde depuis 2005, atelier au 65 rue de Malbos à Mérignac. Interventions Bordeaux Métropole quotidiennes, Médoc + Bassin d'Arcachon + Libournais + Sud-Gironde sur devis avec chantiers groupés. Urgence 7j/7, devis 24h, décennale, 5/5 sur 52 avis Google.",
        shortTitle: 'Couvreur Gironde',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
          bio: "Je couvre la Gironde depuis 2005 depuis mon atelier de Mérignac. Bordeaux Métropole en quotidien (15-30 min Mérignac, 30-60 min Bordeaux Centre, 45-90 min communes limitrophes). Sur les zones plus éloignées (Médoc 1h, Bassin d'Arcachon 1h, Libournais 45 min, Sud-Gironde 1h15), j'organise des journées d'intervention GROUPÉES pour maîtriser les frais de déplacement — c'est ce qui rend nos tarifs compétitifs même hors métropole.",
          badges: [
            'Depuis 2005',
            'Décennale active',
            '5/5 sur 52 avis Google',
            'Départemental (33)',
          ],
        },
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

        // ————————————————————————————————————————————————
        // FAQ GIRONDE-FOCUSED (10 questions ICP départemental)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "Intervenez-vous partout en Gironde ou seulement à Bordeaux ?",
            answer:
              "PARTOUT en Gironde. Notre atelier est à Mérignac, ce qui nous place au centre géographique du département. Bordeaux Métropole en intervention quotidienne (15-90 min selon la commune). Zones plus éloignées sur devis : Médoc (1h, journées groupées), Bassin d'Arcachon (1h, zinc marine adapté), Libournais + Saint-Émilion (45 min), Sud-Gironde + Langon (1h15), Entre-deux-Mers (45-90 min selon commune). Pour ces zones, nous groupons les chantiers pour maîtriser les frais de déplacement.",
          },
          {
            question:
              "Combien coûte un couvreur en Gironde en 2026 ?",
            answer:
              "Fourchettes 2026 sur le département : démoussage 12-18 €/m², combo démoussage + hydrofuge 18-27 €/m², nettoyage haute pression 12-20 €/m², remplacement 5-10 tuiles 180-420 €, réfection tuile canal 85-145 €/m², réfection ardoise Médoc 120-220 €/m², zinguerie marine Bassin d'Arcachon 75-130 €/ml. Bordeaux Métropole sans surcoût. Zones éloignées : + 8-15 % pour déplacement selon distance, atténué par les chantiers groupés.",
          },
          {
            question:
              "Quel délai pour un devis en Gironde ?",
            answer:
              "Bordeaux Métropole : rappel sous 30 min ouvrées, diagnostic sur site sous 48h, devis chiffré sous 24h après visite. Zones plus éloignées : rappel sous 30 min ouvrées, diagnostic sous 5-7 jours (planification pour grouper avec d'autres chantiers de la zone), devis sous 24h après visite. Total actionnable en 3-8 jours ouvrés selon zone.",
          },
          {
            question:
              "Que faire pour une urgence fuite en Gironde éloignée ?",
            answer:
              "Appelez le 07 68 69 78 48. En heures ouvrées : mise hors d'eau 1-2h Bordeaux Métropole, 1h30-3h Libournais/Bassin, 2-4h Médoc/Sud-Gironde. Pour les urgences très éloignées (>1h30 de route), nous vous orientons vers un couvreur local partenaire pour la mise hors d'eau IMMÉDIATE, puis nous prenons le relais pour le devis + réparation définitive. Nous ne laissons jamais un client en Gironde sans solution urgence.",
          },
          {
            question:
              "Pourquoi choisir un couvreur mérignacais pour un chantier en Médoc ?",
            answer:
              "Trois avantages concrets : (1) atelier fixe et vérifiable (65 rue de Malbos, Mérignac) — pas un couvreur nomade qui disparaît après le chantier, (2) chantiers groupés qui rendent nos tarifs Médoc compétitifs face aux couvreurs locaux, (3) décennale et attestations vérifiables avec dates. La contrepartie : nos délais Médoc sont plus longs qu'un couvreur local pour les diagnostics non urgents (5-7 jours vs 1-2 jours en local).",
          },
          {
            question:
              "Faites-vous du bâti girondin traditionnel (tuile romane, pierre) ?",
            answer:
              "Oui, c'est notre spécialité sur le département. Bordeaux Métropole : échoppes tuile canal, haussmannien ardoise, pavillonnaire tuile mécanique. Médoc : chartreuses ardoise, châteaux viticoles tuile romane. Libournais + Saint-Émilion : maisons pierre + tuile romane, mortier chaux pour rejointoiement. Bassin d'Arcachon : villas Belle Époque Ville d'Hiver + maisons ostréicoles. Bâti rural Entre-deux-Mers : pierre + tuile canal traditionnelle. Nous adaptons matériaux et techniques à chaque typologie.",
          },
          {
            question:
              "L'air salin du Bassin d'Arcachon détériore-t-il la zinguerie ?",
            answer:
              "OUI, rapidement. Un zinc standard ou pire un acier galvanisé se dégrade en 5-10 ans en air salin direct (Le Pyla, Pereire, Moulleau). Nous utilisons EXCLUSIVEMENT du zinc marine prépatiné anti-air-salin sur Arcachon et le Bassin. Coût +20 % vs zinc standard mais résistance 30-50 ans conservée. Voir notre page dédiée /zinguerie-arcachon pour les détails techniques et tarifs marine.",
          },
          {
            question:
              "Quels matériaux privilégier selon la zone en Gironde ?",
            answer:
              "Bordeaux Métropole : tuile canal traditionnelle (échoppes) + tuile mécanique (pavillons) + ardoise (bâti bourgeois). Médoc : ardoise chartreuses + tuile romane secteur rural. Libournais + Saint-Émilion : tuile romane + pierre + zinc chéneau. Bassin d'Arcachon : ardoise villas Belle Époque + zinc marine. Sud-Gironde + Langon : tuile romane + tuile canal. Nous adaptons les matériaux au bâti local — jamais de tuile mécanique standard sur bâti girondin traditionnel.",
          },
          {
            question:
              "Comment vérifier votre décennale avant signature ?",
            answer:
              "Nous joignons systématiquement notre attestation d'assurance décennale à chaque devis, avec ses dates de validité. Un artisan qui rechigne à fournir ce document cache probablement une décennale périmée ou absente — refusez de signer. Sans décennale valide, aucun recours en cas de sinistre post-chantier. Vérifiable également sur notre fiche Google Business Profile ou en passant à l'atelier au 65 rue de Malbos à Mérignac.",
          },
          {
            question:
              "Combien de fois par an intervenez-vous hors métropole ?",
            answer:
              "Fréquence 2025 : Médoc 3-4 journées/mois (chantiers groupés), Bassin d'Arcachon 2-3 journées/mois, Libournais 3-4 journées/mois, Sud-Gironde 1-2 journées/mois. Cette rotation régulière assure une bonne réactivité et permet de proposer des tarifs cohérents avec la métropole. Pour les urgences immédiates hors métropole, nous nous appuyons sur un réseau de partenaires locaux pour la mise hors d'eau initiale.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
