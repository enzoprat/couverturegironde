import type { Metadata } from 'next';
import { ServiceVillePageLayout } from '@/components/content/ServiceVillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('nettoyage-toiture-pessac');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServiceVillePageLayout
      content={{
        slug: PAGE.slug,
        service: 'nettoyage',
        villeSlug: 'pessac',
        h1: (
          <>
            Nettoyage de toiture à{' '}
            <span className="text-[var(--color-terre)]">Pessac</span> —
            démoussage et rinçage haute pression
          </>
        ),
        heroSubtitle:
          "Nettoyage professionnel de toiture à Pessac par artisan couvreur depuis 2005. Haute pression maîtrisée, démoussage complémentaire, rinçage des descentes. Devis gratuit en 24h, garantie décennale.",
        presentation: (
          <>
            <p>
              Le nettoyage de toiture à Pessac n'est pas un simple
              dépoussiérage : c'est une intervention technique qui doit{' '}
              <strong>
                allier efficacité et respect du matériau
              </strong>
              . Une pression trop forte, un angle inadapté ou un produit mal
              choisi peuvent dégrader votre couverture aussi vite qu'un
              entretien régulier la prolonge. C'est pourquoi nous traitons
              chaque toiture pessacaise individuellement, après diagnostic
              précis du support et de son état.
            </p>
            <p>
              Pessac présente une diversité architecturale qui impose une
              vraie polyvalence technique. <strong>Tuile canal</strong>{' '}
              traditionnelle dans le centre, <strong>tuiles mécaniques</strong>{' '}
              sur la majorité des pavillons de Saige, Cap-de-Bos ou Toctoucau,
              <strong> ardoise</strong> sur quelques maisons bourgeoises : chaque
              matériau a sa pression idéale, son produit complémentaire et son
              temps de séchage spécifique. Nous adaptons systématiquement nos
              réglages, c'est ce qui distingue un nettoyage professionnel
              durable d'un "passage au karcher" qui détruit la couverture en
              quelques minutes.
            </p>
            <p>
              Le climat pessacais, humidité élevée, couvert végétal dense, pluviométrie
              annuelle de 930 mm, provoque l'apparition rapide de{' '}
              <strong>dépôts complexes</strong> : pollution atmosphérique,
              suies, traînées noires (gleocapsa magma), lichens, mousses et
              algues. Notre intervention combine systématiquement{' '}
              <strong>nettoyage haute pression maîtrisé</strong> et{' '}
              <strong>application d'un anti-mousse rémanent</strong>. Faire les
              deux ensemble n'est pas un confort, c'est la seule méthode qui
              donne un résultat durable : sans démoussage simultané, les spores
              restantes recolonisent la toiture en deux ans à peine.
            </p>
            <p>
              Nous assurons une <strong>présence quasi-quotidienne</strong> sur
              Pessac. Nous
              connaissons les contraintes spécifiques des différents quartiers
              : accès parfois étroits dans le vieux Pessac, riverains à
              informer dans les copropriétés de Saige, autorisations
              d'occupation de voirie auprès des services municipaux. Toutes ces
              démarches sont incluses dans notre prestation, vous n'avez
              qu'à signer le devis.
            </p>
            <p>
              Côté tarif, comptez généralement{' '}
              <strong>12 à 21 €/m² pour un nettoyage complet</strong> à Pessac,
              démoussage chimique léger inclus. Pour une toiture standard de
              120 m², l'enveloppe se situe entre 1 500 et 2 500 € HT selon
              l'accessibilité et l'état initial. Si vous voulez prolonger
              durablement l'effet du nettoyage, nous recommandons un{' '}
              <strong>traitement hydrofuge professionnel</strong> appliqué dans
              la foulée, comptez 6 à 10 €/m² supplémentaires, et vous obtenez
              une garantie 10 ans contre la réapparition rapide des mousses.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Pression adaptée à chaque matériau',
            description:
              "Tuile canal : 80-100 bars. Tuile mécanique : 100-120 bars. Ardoise : 60-80 bars. Buse spécifique. Pas de standard agressif appliqué partout.",
          },
          {
            title: 'Nettoyage + démoussage en une intervention',
            description:
              "Un nettoyage sans démoussage = mousses qui reviennent en 24 mois. Nous combinons systématiquement les deux pour un résultat durable 5-7 ans.",
          },
          {
            title: 'Protection des descentes et du jardin',
            description:
              "Bâchage des évacuations, gestion des écoulements, protection des plantations. Le chantier ne pollue pas votre cadre de vie ni celui des voisins.",
          },
          {
            title: 'Inspection complète pendant le nettoyage',
            description:
              "Repérage des tuiles fissurées, joints défaillants, points faibles. Rapport remis en fin de chantier avec photos pour anticiper les futurs travaux.",
          },
          {
            title: 'Couvreur de proximité à Pessac',
            description:
              "Présence quotidienne sur Pessac. Intervention urgence en 30 à 60 minutes en heures ouvrées. Pas de surcoût de déplacement.",
          },
          {
            title: 'Tarif transparent ligne par ligne',
            description:
              "Surface précise, produits utilisés, nombre de passages, garantie : tout est détaillé dans le devis. Aucun supplément surprise en fin de chantier.",
          },
        ],
        risques: [
          {
            title: "Nettoyage trop agressif qui détruit la couverture",
            description:
              "Karcher grand public à pleine puissance + buse standard = micro-fissures dans la tuile, sablage de l'engobe protecteur, accélération de la dégradation. C'est l'erreur n°1 sur les toitures pessacaises.",
          },
          {
            title: 'Mousses qui reviennent en 24 mois',
            description:
              "Sans démoussage chimique simultané, les spores restantes recolonisent la toiture en 2-3 ans à peine. Vous payez deux fois pour un résultat qui ne tient pas.",
          },
          {
            title: 'Dépôts qui retiennent l\u2019humidité',
            description:
              "Suies, particules fines, pollution forment un film qui piège l'humidité contre la tuile. Combiné aux mousses, c'est un cocktail destructeur pour la couverture pessacaise.",
          },
          {
            title: 'Perte de valeur immobilière',
            description:
              "Une toiture sale est le premier signal de vétusté perçu par un acheteur potentiel. Sur le marché pessacais tendu, c'est un argument fort à la baisse de prix.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic gratuit sur site',
            description:
              "Inspection complète de la toiture, identification du matériau, des points faibles et de l'accessibilité. Photos systématiques. Devis détaillé sous 24h.",
          },
          {
            title: 'Préparation et sécurisation',
            description:
              "Installation des protections, bâchage des descentes et du jardin, information des voisins. Sécurisation du chantier (échafaudage si nécessaire, lignes de vie).",
          },
          {
            title: 'Pré-traitement anti-mousse',
            description:
              "Application en pulvérisation basse pression d'un anti-mousse rémanent adapté au matériau. Action de 24-48h avant le nettoyage principal pour décoller les amas.",
          },
          {
            title: 'Nettoyage haute pression maîtrisé',
            description:
              "Pression et buse adaptées : 80-100 bars sur tuile canal, 100-120 sur mécanique. Travail versant par versant en partant du haut vers le bas, sans projection sur les façades.",
          },
          {
            title: 'Rinçage et collecte des résidus',
            description:
              "Rinçage des chéneaux et descentes d'eau pluviale. Les résidus de mousse sont récupérés pour ne pas obstruer le réseau pluvial municipal.",
          },
          {
            title: 'Inspection finale et photos',
            description:
              "Vérification visuelle complète, photos avant/après, remise d'un bref rapport indiquant les points à surveiller. Garantie décennale activée.",
          },
        ],
        faqLocale: [
          {
            question:
              'Quelle est la fréquence de nettoyage de toiture conseillée à Pessac ?',
            answer:
              "En raison du couvert végétal très dense de Pessac et du climat océanique humide, nous recommandons un nettoyage complet tous les 4 à 5 ans, combiné à un démoussage. Si votre toiture est exposée au nord ou sous arbres denses, raccourcir à 3 ans.",
          },
          {
            question:
              "Le karcher abîme-t-il vraiment les tuiles ?",
            answer:
              "Oui, s'il est mal utilisé. Un nettoyeur haute pression grand public utilisé à pleine puissance avec une buse standard provoque des micro-fissures dans la céramique, sable l'engobe protecteur et accélère le vieillissement. C'est différent d'un nettoyage professionnel où la pression, l'angle et la buse sont adaptés au matériau.",
          },
          {
            question:
              "Combien coûte un nettoyage de toiture à Pessac ?",
            answer:
              "Comptez 12 à 21 €/m² selon la surface, l'accessibilité et l'état initial. Pour une toiture standard de 120 m², l'enveloppe se situe entre 1 500 et 2 500 € HT. Devis personnalisé après visite ou photos détaillées.",
          },
          {
            question:
              "Faut-il combiner nettoyage et démoussage ?",
            answer:
              "Oui, systématiquement. Nettoyer sans démousser = laisser les spores en place, retour rapide des mousses. Démousser sans nettoyer = laisser les dépôts et coulures noires. Nous combinons les deux dans la même intervention.",
          },
          {
            question:
              "Pouvez-vous intervenir en copropriété à Pessac ?",
            answer:
              "Oui, nous travaillons régulièrement avec les copropriétés pessacaises (résidences Saige, Cap-de-Bos, etc.). Devis adapté format syndic, attestations d'assurance, planning compatible AG, acompte limité.",
          },
          {
            question:
              "Quand est le meilleur moment pour nettoyer ma toiture ?",
            answer:
              "Idéalement au printemps (mars-mai) ou à la fin de l'été (septembre-octobre), hors période de gel ou de fortes pluies. La mousse est moins active, et l'on peut appliquer un traitement hydrofuge dans les meilleures conditions de séchage.",
          },
          {
            question:
              "Qu'est-ce que le traitement hydrofuge et est-il utile à Pessac ?",
            answer:
              "L'hydrofuge est un produit qui rend la tuile imperméable à l'eau tout en lui permettant de respirer. Appliqué après le nettoyage, il ralentit considérablement le retour des mousses (8-12 ans contre 3-4 ans sans traitement) et protège du gel-dégel. À Pessac, dans le climat humide local, c'est un investissement rentable.",
          },
        ],
      }}
    />
  );
}
