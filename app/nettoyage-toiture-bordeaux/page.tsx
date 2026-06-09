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
      }}
    />
  );
}
