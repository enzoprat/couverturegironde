import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('demoussage-toiture-bordeaux');

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
          service: 'demoussage',
          slug: PAGE.slug,
          h1: (
            <>
              Démoussage toiture{' '}
              <span className="text-[var(--color-terre)]">Bordeaux</span> —
              traitement anti-mousse rémanent 12-18 €/m²
            </>
          ),
          heroSubtitle:
            "Mousses, lichens, traînées noires sur votre toiture ? Nous éliminons les végétaux installés (brossage manuel + produit rémanent professionnel), appliquons un traitement préventif et rinçons les descentes. Tarif transparent 12-18 €/m², devis gratuit sous 24h, garantie décennale.",
          shortTitle: 'Démoussage toiture',

          // ————————————————————————————————————————————————
          // AUTEUR — E-E-A-T
          // ————————————————————————————————————————————————
          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
            bio: "Je fais du démoussage professionnel depuis 2005 sur Bordeaux Métropole. Chaque devis rédigé et chaque chantier supervisé personnellement, aucune sous-traitance. Le climat girondin (930 mm/an, versants nord ombragés) impose un rythme d'entretien tous les 4-5 ans qu'il faut respecter — je vous dis honnêtement quand c'est nécessaire et quand c'est prématuré.",
            badges: [
              'Depuis 2005',
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Atelier Mérignac',
            ],
          },

          presentation: (
            <>
              <p>
                Le climat océanique de la Gironde — humidité quasi-permanente,
                hivers doux, alternance pluies-soleil, 930 mm de pluie par an —
                crée des conditions idéales pour la prolifération des mousses,
                lichens et algues sur les toitures bordelaises. À Bordeaux
                comme à Mérignac, Pessac ou Talence, une toiture non entretenue
                se voit envahir en quelques années, surtout sur les{' '}
                <strong>versants nord ou sous couvert arboré</strong>{' '}
                (Caudéran, Bourgailh à Pessac, coteaux Cenon, quartiers boisés
                de Gradignan).
              </p>
              <p>
                <strong>Une toiture colonisée par les mousses n'est pas un
                problème esthétique : c'est un problème structurel.</strong>{' '}
                Les végétaux retiennent l'eau, accélèrent le vieillissement
                des tuiles, infiltrent les joints et favorisent les
                micro-fissures que le gel transforme en cassures. Une toiture
                mal entretenue peut perdre 20 à 30 % de ses tuiles en 10 ans
                et voir sa durée de vie réduite de 30 à 50 %.
              </p>
              <p>
                <strong>Démoussage ≠ nettoyage ≠ hydrofuge.</strong> Ces trois
                prestations sont souvent confondues : le nettoyage haute
                pression retire les dépôts superficiels (pollution, algues) ;
                le démoussage traite chimiquement les végétaux installés
                (mousses, lichens) et éradique les spores ; l'hydrofuge est
                un traitement de protection appliqué APRÈS démoussage qui
                retarde la ré-installation pendant 5-10 ans. Un démoussage
                seul suffit sur une toiture avec mousses ponctuelles.
                Combo démoussage + hydrofuge pour une toiture très colonisée
                ou pour prolonger la durée de vie de manière significative.
              </p>
              <p>
                Notre approche depuis 2005 combine{' '}
                <strong>brossage manuel des zones critiques</strong> (versants
                nord, autour des cheminées, raccords zinc), application d'un{' '}
                <strong>produit anti-mousse rémanent professionnel adapté au
                matériau</strong> (tuile canal, mécanique, ardoise,
                fibrociment), et finition par traitement hydrofuge à la
                demande. Pas de sous-traitance, pas d'agression de la
                couverture au karcher grande puissance, pas de dépôt
                anti-écologique laissé à la pluie. Nous protégeons
                systématiquement les massifs et les évacuations pluviales.
              </p>
            </>
          ),

          pourquoiRaisons: [
            {
              title: 'Diagnostic avant intervention',
              description:
                "Nous montons sur votre toiture avant de chiffrer. Vérification de l'état des tuiles, des points faibles, des éléments à remplacer. Un démoussage ne sert à rien si la toiture présente des défauts à corriger en amont.",
            },
            {
              title: 'Produit professionnel rémanent',
              description:
                "Nous utilisons des produits anti-mousses professionnels rémanents (action longue 3-5 ans). Pas de javel diluée, pas de produit grand public qui ronge la couverture. Choix du produit selon le matériau.",
            },
            {
              title: 'Brossage manuel des zones critiques',
              description:
                "Sur les versants nord ou les zones très colonisées, le seul produit chimique ne suffit pas. Nous brossons manuellement à la brosse souple pour retirer les amas avant traitement.",
            },
            {
              title: 'Prix chiffrés visibles avant devis',
              description:
                "12-18 €/m² pour démoussage seul, 18-27 €/m² combo démoussage + hydrofuge 10 ans. Tarifs affichés publiquement plus bas. Aucune concurrence bordelaise ne le fait — vous savez à quoi vous attendre avant même de nous contacter.",
            },
            {
              title: 'Protection du voisinage et écoulements',
              description:
                "Bâchage des massifs, gestion des écoulements pour ne pas polluer le jardin ni la voirie. Travail propre, voisins informés. Nettoyage des descentes d'eau pluviale en fin d'intervention.",
            },
            {
              title: 'Devis transparent ligne par ligne',
              description:
                "Surface précise, produits utilisés, nombre de passages, garantie : tout est détaillé. Aucun supplément surprise. Acompte plafonné à 30 %.",
            },
          ],

          risques: [
            {
              title: "Infiltrations et fuites d'eau",
              description:
                "Les mousses retiennent l'humidité contre les tuiles. À terme, elles s'infiltrent dans les joints et les sous-couvertures, provoquant fuites en combles, dégâts d'isolation et auréoles au plafond.",
            },
            {
              title: 'Cassure des tuiles par gel-dégel',
              description:
                "L'eau retenue par les mousses gèle l'hiver. Les micro-cycles gel-dégel fissurent la céramique. Une toiture mal entretenue peut perdre 20 % de ses tuiles en 10 ans.",
            },
            {
              title: 'Bouchage des gouttières et descentes',
              description:
                "Les débris végétaux finissent dans les chéneaux et les descentes. Conséquence : débordements, coulures sur les façades, infiltrations en pied de mur, dégâts sur l'enduit.",
            },
            {
              title: "Réfection complète 6-10× plus chère",
              description:
                "Un démoussage régulier coûte 12-18 €/m² tous les 4-5 ans. Une réfection complète après négligence prolongée coûte 85-220 €/m². Facteur 6 à 10 sur le coût final.",
            },
          ],

          methode: [
            {
              title: 'Diagnostic gratuit sur site',
              description:
                "Visite de votre toiture par notre équipe. Inspection complète, photos des points critiques, identification des éléments à traiter ou remplacer. Aucun engagement à ce stade.",
            },
            {
              title: 'Devis détaillé sous 24h',
              description:
                "Vous recevez un devis chiffré ligne par ligne : surface, accessibilité, produits, garanties. Choix possible entre démoussage seul (12-18 €/m²) ou démoussage + hydrofuge 10 ans (18-27 €/m²).",
            },
            {
              title: 'Installation et sécurité',
              description:
                "Mise en place de l'équipement (échafaudage si nécessaire, lignes de vie), bâchage des massifs et des évacuations. Sécurisation du chantier et information des voisins.",
            },
            {
              title: 'Brossage manuel ciblé',
              description:
                "Brossage à la brosse souple des zones les plus colonisées (versants nord, autour des cheminées, raccords zinc) pour retirer les amas avant traitement chimique.",
            },
            {
              title: 'Application du démoussant rémanent',
              description:
                "Pulvérisation basse pression du produit anti-mousse rémanent sur l'ensemble de la couverture. Couverture homogène, respect des dosages, attention aux raccords zinguerie.",
            },
            {
              title: 'Rinçage et remise en état',
              description:
                "Rinçage des descentes d'eau pluviale (les résidus ne doivent pas obstruer le réseau), retrait de l'équipement, nettoyage complet des abords. Photos avant/après remises.",
            },
          ],

          // ————————————————————————————————————————————————
          // TARIFS (bloc chiffré unique dans le SERP)
          // ————————————————————————————————————————————————
          tarifs: {
            intro:
              "Tarifs 2026 constatés sur Bordeaux Métropole pour les prestations de démoussage. Pour une maison type 120 m² de toiture, un démoussage seul représente 1 440-2 160 € TTC, un combo démoussage + hydrofuge 2 160-3 240 € TTC. TVA 10 % applicable aux logements >2 ans. Fréquence recommandée à Bordeaux : tous les 4-5 ans (versants nord et zones ombragées prioritaires).",
            lines: [
              {
                service: 'Démoussage tuile mécanique + brossage',
                range: '12 – 16 €/m²',
                note: 'Pavillonnaire années 70-90 majoritaire',
              },
              {
                service: 'Démoussage tuile canal traditionnelle',
                range: '13 – 18 €/m²',
                note: 'Échoppes bordelaises, technique douce',
              },
              {
                service: 'Démoussage ardoise naturelle',
                range: '15 – 22 €/m²',
                note: 'Buse douce, produit adapté ardoise',
              },
              {
                service: 'Démoussage zinc patiné',
                range: '18 – 28 €/m²',
                note: 'Produit non corrosif, pression <50 bars',
              },
              {
                service: 'Combo démoussage + hydrofuge 10 ans',
                range: '18 – 27 €/m²',
                note: 'Meilleur rapport coût/durabilité',
              },
              {
                service: 'Combo complet nettoyage + démoussage + hydrofuge',
                range: '25 – 38 €/m²',
                note: 'Toiture très colonisée depuis 5+ ans',
              },
              {
                service: 'Traitement anti-lichens curatif ciblé',
                range: '15 – 22 €/m²',
                note: 'Lichens tenaces sur ardoise ou tuile émaillée',
              },
              {
                service: 'Nettoyage gouttières + descentes',
                range: '8 – 15 €/ml',
                note: 'Souvent inclus dans démoussage complet',
              },
              {
                service: 'Forfait déplacement (surface <30 m²)',
                range: '280 – 420 €',
                note: 'Intervention courte, minimum facturable',
              },
              {
                service: 'Diagnostic + rapport photo (sans chantier)',
                range: '0 – 180 €',
                note: 'Gratuit si chantier signé, sinon forfait',
              },
            ],
            disclaimer:
              "Tarifs TTC, posé, sécurité incluse. TVA 10 % applicable aux logements achevés depuis plus de 2 ans. Échafaudage spécifique, accès difficile ou hauteur >12 m sur devis. Décennale active.",
          },

          // ————————————————————————————————————————————————
          // QUARTIERS BORDEAUX (couverture géo + maillage)
          // ————————————————————————————————————————————————
          quartiersBordeaux: {
            intro:
              "Chaque quartier de Bordeaux Métropole présente un profil d'encrassement différent selon son bâti et son couvert végétal. Nos recommandations de démoussage varient en conséquence, jamais de solution générique.",
            items: [
              {
                nom: 'Bordeaux Centre',
                description:
                  "Échoppes tuile canal + haussmannien ardoise. Démoussage doux tous les 4-5 ans, secteur UNESCO/ABF, respect du bâti.",
                href: '/couvreur-bordeaux-centre',
              },
              {
                nom: 'Chartrons',
                description:
                  "Ardoise + zinc patrimonial. Pression strictement maîtrisée pour préserver la patine.",
                href: '/couvreur-bordeaux-chartrons',
              },
              {
                nom: 'Caudéran',
                description:
                  "Quartier arboré : mousses abondantes versants nord. Combo démoussage + hydrofuge fortement recommandé.",
                href: '/couvreur-bordeaux-cauderan',
              },
              {
                nom: 'Saint-Augustin',
                description:
                  "Échoppes tuile canal préservées. Démoussage régulier maintient l'esthétique traditionnelle.",
                href: '/couvreur-bordeaux-saint-augustin',
              },
              {
                nom: 'Mérignac',
                description:
                  "Notre commune : intervention sans surcoût déplacement. Pavillonnaire majoritaire, démoussage classique.",
                href: '/couvreur-merignac',
              },
              {
                nom: 'Pessac',
                description:
                  "Bourg-Madame + Cap-de-Bos très boisés. Mousses très présentes, combo démoussage + hydrofuge tous les 4 ans.",
                href: '/couvreur-pessac',
              },
              {
                nom: 'Talence',
                description:
                  "Bâti bourgeois ardoise + tuile mécanique. Traitement adapté au matériau, jamais uniforme.",
                href: '/couvreur-talence',
              },
              {
                nom: 'Le Bouscat',
                description:
                  "Quartier patrimonial cossu. Démoussage soigné pour préserver les zincs et tuiles historiques.",
                href: '/couvreur-bouscat',
              },
              {
                nom: 'Bègles',
                description:
                  "Bâti ouvrier + ZAC récentes. Démoussage standard + prévention hydrofuge sur constructions neuves.",
                href: '/couvreur-begles',
              },
              {
                nom: "Villenave-d'Ornon",
                description:
                  "Pavillonnaire étendu, tuile mécanique 70-90. Démoussages réguliers tous les 4-5 ans, gouttières à surveiller.",
                href: '/couvreur-villenave-dornon',
              },
              {
                nom: 'Gradignan',
                description:
                  "Habitat pavillonnaire arboré, mousses systématiques versants nord. Hydrofuge fortement recommandé.",
                href: '/couvreur-gradignan',
              },
              {
                nom: 'Cenon rive droite',
                description:
                  "Coteaux Haut Cenon exposés vents Garonne. Démoussage adapté au relief et à l'exposition ouest.",
                href: '/couvreur-cenon',
              },
            ],
          },

          // ————————————————————————————————————————————————
          // FAQ DÉMOUSSAGE-FOCUSED (10 questions ICP)
          // ————————————————————————————————————————————————
          faqOverride: [
            {
              question:
                "Quelle est la différence entre démoussage, nettoyage et hydrofuge ?",
              answer:
                "Trois prestations complémentaires mais DISTINCTES. Le NETTOYAGE haute pression retire la saleté superficielle (pollution, dépôts, algues) — 12-20 €/m². Le DÉMOUSSAGE traite chimiquement les mousses/lichens installés + brossage + éradication spores — 12-18 €/m². L'HYDROFUGE est un traitement de protection appliqué APRÈS démoussage qui rend la tuile hydrophobe et retarde la ré-installation pendant 5-10 ans — 6-10 €/m² en supplément. Combo démoussage + hydrofuge (18-27 €/m²) = meilleur rapport durabilité.",
            },
            {
              question:
                "À quelle fréquence faut-il démousser une toiture à Bordeaux ?",
              answer:
                "Le climat océanique bordelais (930 mm/an, hivers doux, couvert végétal dense) accélère l'encrassement de 30-50 % vs moyenne nationale. Recommandations : contrôle visuel tous les 2 ans, démoussage tous les 4-5 ans sans hydrofuge, tous les 8-10 ans avec hydrofuge. Versants nord et zones ombragées prioritaires. Toitures sous couvert dense (Caudéran, Gradignan, coteaux Cenon) : rythme plus soutenu.",
            },
            {
              question: "Combien coûte un démoussage à Bordeaux en 2026 ?",
              answer:
                "Fourchettes 2026 : tuile mécanique 12-16 €/m², tuile canal 13-18 €/m², ardoise 15-22 €/m², zinc 18-28 €/m². Combo démoussage + hydrofuge 10 ans 18-27 €/m². Combo complet nettoyage + démoussage + hydrofuge 25-38 €/m². Pour une maison type 120 m², démoussage seul 1 440-2 160 € TTC, combo hydrofuge 2 160-3 240 € TTC. TVA 10 % pour logements >2 ans.",
            },
            {
              question:
                "Quel est le meilleur moment pour démousser à Bordeaux ?",
              answer:
                "Idéalement au printemps (mars-mai) ou fin d'été (septembre-octobre), hors période de gel ou fortes pluies. La mousse est moins active à ces saisons et l'on peut appliquer un traitement hydrofuge dans les meilleures conditions de séchage (12-24h sans pluie annoncée). Éviter juillet-août (chaleur qui accélère l'évaporation du produit) et décembre-février (risque de gel qui compromet l'efficacité).",
            },
            {
              question:
                "Un traitement au karcher grand public suffit-il ?",
              answer:
                "Non — c'est même la cause n°1 de dégradations post-nettoyage sur les toitures bordelaises. Un karcher grand public à pleine puissance avec buse standard provoque des micro-fissures dans la céramique, sable l'engobe protecteur et accélère le vieillissement de 3-5 ans. Sur ardoise, il peut carrément désolidariser les ardoises. Un démoussage professionnel utilise pression et buse ADAPTÉES au matériau (80-100 bars tuile canal, 60-80 bars ardoise, <50 bars zinc).",
            },
            {
              question:
                "Le produit anti-mousse est-il dangereux pour mon jardin ?",
              answer:
                "Nous utilisons des produits professionnels rémanents autorisés en couverture, biodégradables sous 48-72h. Nous bâchons systématiquement les évacuations sensibles, protégeons les descentes d'eau pluviale qui vont au potager ou au récupérateur, et redirigeons les ruissellements. Aucun cas de dégât sur végétation ou nappe phréatique n'est remonté depuis 20 ans d'exercice. Précautions d'usage documentées dans notre devis.",
            },
            {
              question:
                "L'hydrofuge est-il vraiment utile après démoussage ?",
              answer:
                "OUI sur les toitures poreuses (tuile canal, tuile mécanique non émaillée) et exposées au couvert végétal ou versant nord. L'hydrofuge coloré ou incolore forme un film hydrophobe qui empêche l'eau de pénétrer dans la tuile, ralentit le retour des mousses (spores qui ont besoin d'humidité), et protège du cycle gel-dégel. Sur ardoise ou tuile émaillée récente, l'utilité est plus limitée : le matériau est déjà peu poreux. Nous vous conseillons honnêtement selon votre situation.",
            },
            {
              question:
                "Combien de temps dure un chantier de démoussage ?",
              answer:
                "Pour une toiture de maison individuelle (100-150 m²) : démoussage + brossage = 1 jour, combo démoussage + hydrofuge = 1,5 à 2 jours (avec temps de séchage entre les deux passes), traitement complet nettoyage + démoussage + hydrofuge = 2 à 3 jours. Le planning intègre systématiquement les créneaux météo (pas de pluie prévue dans les 12-24h suivant l'hydrofuge, températures >5°C).",
            },
            {
              question:
                "Quelles garanties fournissez-vous sur le démoussage ?",
              answer:
                "Décennale (10 ans) sur l'ensemble de la prestation, obligation légale. Garantie constructeur 10 ans sur l'hydrofuge professionnel appliqué selon les prescriptions fabricant. Garantie 3-5 ans sur l'efficacité anti-mousse selon exposition et porosité du support. Attestations remises à la fin du chantier + fiche technique produits utilisés + photos avant/après.",
            },
            {
              question:
                "Refusez-vous parfois un chantier de démoussage ?",
              answer:
                "Oui, régulièrement. Nous refusons de démousser une toiture qui présente des défauts structurels préalables à corriger (tuiles cassées à remplacer, faîtage disloqué, noue percée) : démousser sans réparer d'abord est du gaspillage d'argent. Nous refusons aussi les toitures récentes qui n'en ont pas encore besoin — un démoussage prématuré n'apporte rien. La crédibilité d'un artisan se construit aussi sur ce qu'il ne vend pas.",
            },
          ],
        }}
      />
      {/* Schema Person Liroy — E-E-A-T signal auteur */}
      <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
