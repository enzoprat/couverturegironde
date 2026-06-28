import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('nettoyage-toiture-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'nettoyage',
        slug: PAGE.slug,
        h1: (
          <>
            Nettoyage de toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> et en
            Gironde
          </>
        ),
        heroSubtitle:
          "Nettoyage haute pression maîtrisé, démoussage et rinçage par artisan couvreur. Respect de la tuile, de l'ardoise et de la zinguerie. Devis gratuit sous 24h, intervention sur tout Bordeaux Métropole et la Gironde.",
        shortTitle: 'Nettoyage toiture',
        presentation: (
          <>
            <p>
              Le nettoyage de toiture est un acte technique : il ne s'agit pas
              de "passer le karcher" comme on lave une terrasse. Une toiture
              mal nettoyée, pression trop forte, angle inadapté, matériau
              maltraité, c'est plusieurs années d'usure gagnée pour rien et
              parfois des tuiles à remplacer dès la fin du chantier.
            </p>
            <p>
              <strong>Notre approche du nettoyage de toiture allie efficacité
              et respect du matériau.</strong>{' '}
              Nous adaptons la pression, la buse et la distance à chaque
              support : tuile canal traditionnelle bordelaise, tuile mécanique,
              ardoise naturelle, zinc, fibrociment, bac acier. Chaque
              couverture a sa technique, sa température d'eau, son produit
              complémentaire.
            </p>
            <p>
              Nous combinons systématiquement nettoyage et démoussage dans la
              même intervention. Nettoyer sans démousser, c'est laisser les
              spores en place, la mousse revient en deux ans.{' '}
              <strong>
                Démousser sans nettoyer, c'est laisser les dépôts de pollution,
                les coulures et les algues sur la tuile.
              </strong>{' '}
              Les deux opérations sont complémentaires et indissociables pour
              un résultat durable.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Buse et pression adaptées au matériau',
            description:
              "Tuile canal : 80-100 bars. Ardoise : 60-80 bars. Zinc : <50 bars et buse spéciale. Nous n'utilisons jamais une pression standard sur tous les matériaux, c'est la cause n°1 de dégradations après nettoyage.",
          },
          {
            title: 'Nettoyage + démoussage en une intervention',
            description:
              "Inutile de payer deux fois pour deux passages. Nous brossons, nettoyons et appliquons l'anti-mousse dans la foulée. Économique pour vous, plus durable pour la toiture.",
          },
          {
            title: 'Respect de la zinguerie',
            description:
              "Gouttières, faîtages, raccords zinc : autant de points où un nettoyage trop agressif fait des dégâts. Nous protégeons systématiquement les éléments fragiles avant intervention.",
          },
          {
            title: 'Eau récupérée et écoulements maîtrisés',
            description:
              "Nous bâchons les évacuations sensibles, redirigeons les écoulements pour ne pas polluer le jardin ni encombrer le réseau pluvial. Travail propre, sans surprise pour vos voisins.",
          },
          {
            title: 'Inspection en parallèle',
            description:
              "Pendant que nous nettoyons, nous repérons les tuiles fissurées, les joints défaillants, les éléments de zinguerie à renforcer. Le rapport vous est remis avec photos en fin de chantier.",
          },
        ],
        risques: [
          {
            title: 'Dépôts qui retiennent l\u2019humidité',
            description:
              "Pollution, particules fines, suie : ces dépôts forment un film qui retient l'humidité au contact de la tuile. Combiné aux mousses, c'est un cocktail destructeur pour la couverture.",
          },
          {
            title: 'Toiture qui perd son pouvoir évacuateur',
            description:
              "Une tuile encrassée évacue mal l'eau. Le ruissellement devient irrégulier, l'eau stagne dans les recouvrements, les infiltrations apparaissent. C'est exactement le problème qu'une tuile est faite pour éviter.",
          },
          {
            title: 'Apparence dégradée et valeur immobilière en baisse',
            description:
              "Une toiture sale est le premier signal de vétusté que perçoit un acheteur ou un voisin. Une toiture propre revalorise immédiatement la perception du bâti, surtout sur le marché bordelais.",
          },
          {
            title: 'Coût d\u2019une réfection multiplié par 8',
            description:
              "Un nettoyage tous les 4-5 ans coûte 12-20 €/m². Une réfection complète après dégradation coûte 80-150 €/m². L'entretien régulier est l'investissement le plus rentable du bâti.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic et devis',
            description:
              "Visite gratuite, inspection complète, devis détaillé sous 24h. Aucun engagement, aucun acompte avant signature.",
          },
          {
            title: 'Préparation du chantier',
            description:
              "Sécurisation, bâchage, protection des descentes et du jardin. Information des voisins, accès clairement balisé.",
          },
          {
            title: 'Nettoyage maîtrisé',
            description:
              "Pression et buse adaptées au matériau de votre toiture. Nettoyage progressif versant par versant, en partant du haut vers le bas.",
          },
          {
            title: 'Démoussage complémentaire',
            description:
              "Application d'un produit anti-mousse rémanent professionnel. Couverture homogène, pulvérisation basse pression pour éviter le ruissellement excessif.",
          },
          {
            title: 'Rinçage et inspection finale',
            description:
              "Rinçage des chéneaux et descentes d'eau pluviale, vérification visuelle complète de la toiture, photos avant/après.",
          },
          {
            title: 'Rapport de chantier et conseils',
            description:
              "Remise d'un bref rapport indiquant l'état général, les points à surveiller dans les 5 prochaines années, et la date conseillée du prochain entretien.",
          },
        ],
        tarifs: {
          intro:
            "Fourchettes de prix observées sur Bordeaux Métropole en 2026 pour un nettoyage de toiture. Le tarif dépend du matériau, de l'accessibilité, du niveau d'encrassement et de l'éventuel combo avec un démoussage ou un traitement hydrofuge.",
          lines: [
            {
              service: 'Nettoyage simple tuile mécanique',
              range: '12 – 16 €/m²',
              note: 'Pression 80-100 bars, buse adaptée',
            },
            {
              service: 'Nettoyage tuile canal traditionnelle',
              range: '14 – 20 €/m²',
              note: 'Pression réduite, technique manuelle complémentaire',
            },
            {
              service: 'Nettoyage ardoise naturelle',
              range: '15 – 22 €/m²',
              note: 'Pression 60-80 bars, buse douce obligatoire',
            },
            {
              service: 'Nettoyage zinc patiné',
              range: '18 – 28 €/m²',
              note: 'Pression <50 bars, buse spéciale, eau tiède',
            },
            {
              service: 'Nettoyage + démoussage combiné',
              range: '18 – 25 €/m²',
              note: 'Le combo recommandé, le plus rentable',
            },
            {
              service: 'Nettoyage + démoussage + hydrofuge 10 ans',
              range: '25 – 38 €/m²',
              note: 'Protection complète, garantie 10 ans',
            },
            {
              service: 'Nettoyage gouttières + descentes EP',
              range: '8 – 15 €/ml',
              note: 'Souvent inclus dans le nettoyage toiture',
            },
            {
              service: 'Forfait minimum déplacement',
              range: '280 – 420 €',
              note: 'Surface <30 m² ou intervention courte',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, sécurité incluse. Échafaudage spécifique, accès difficile ou hauteur >12m sur devis. Le combo nettoyage+démoussage+hydrofuge est le plus rentable sur la durée (économise 30-50% vs prestations séparées).",
        },
        quartiersBordeaux: {
          intro:
            "Le climat océanique girondin (930 mm de pluie par an, couvert végétal dense) favorise particulièrement les mousses et les dépôts sur les toitures bordelaises. Chaque quartier a son profil d'encrassement, lié au bâti et à l'environnement.",
          items: [
            {
              nom: 'Bordeaux Centre',
              description:
                "Dépôts de pollution urbaine + algues sur ardoises. Combo nettoyage + démoussage particulièrement recommandé tous les 4-5 ans.",
              href: '/couvreur-bordeaux-centre',
            },
            {
              nom: 'Chartrons',
              description:
                "Toits zinc et ardoise patrimoniaux : pression strictement maîtrisée obligatoire pour préserver la patine.",
              href: '/couvreur-bordeaux-chartrons',
            },
            {
              nom: 'Caudéran',
              description:
                "Quartier arboré : mousses abondantes sur versants nord, démoussage rémanent + hydrofuge fortement recommandé.",
              href: '/couvreur-bordeaux-cauderan',
            },
            {
              nom: 'Saint-Augustin',
              description:
                "Échoppes tuile canal : nettoyage doux et démoussage régulier maintiennent l'esthétique du bâti bordelais traditionnel.",
              href: '/couvreur-bordeaux-saint-augustin',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune : intervention sans surcoût déplacement, tarifs à partir de 12 €/m² pour tuile mécanique standard.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Quartiers étudiants et résidentiels boisés. Mousses abondantes côté Bourg-Madame et Cap-de-Bos, hydrofuge recommandé.",
              href: '/nettoyage-toiture-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Maisons bourgeoises ardoise et tuile mécanique, intervention douce pour préserver les éléments patrimoniaux.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Le Bouscat',
              description:
                "Quartier résidentiel cossu, toitures bien entretenues : démoussage tous les 5 ans suffit avec hydrofuge.",
              href: '/couvreur-bouscat',
            },
            {
              nom: 'Gradignan, Villenave, Bègles',
              description:
                "Pavillonnaire arboré : versants nord particulièrement exposés, nettoyage + démoussage + hydrofuge combo recommandé.",
            },
          ],
        },
      }}
    />
  );
}
