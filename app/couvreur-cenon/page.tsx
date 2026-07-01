import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('couvreur-cenon');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <VillePageLayout
      content={{
        slug: PAGE.slug,
        villeSlug: 'cenon',
        heroSubtitle:
          "Couvreur-zingueur artisan intervenant à Cenon depuis 2005. Coteaux du Haut Cenon, plateau Palmer, Beauval-Loret, Pont-Rouge, Le Loret : nous couvrons toute la commune. Démoussage, nettoyage, réparation, zinguerie, urgences 7j/7. Notre atelier est à Mérignac (15 km, 20 min du Pont d'Aquitaine). Devis gratuit sous 24h, garantie décennale.",
        contexteLocal: (
          <>
            <p>
              Cenon est une commune de <strong>rive droite</strong> à la
              géographie très particulière : un{' '}
              <strong>coteau calcaire</strong> qui plonge vers la Garonne à
              l'ouest, un plateau urbain au centre autour de Palmer, et des
              secteurs plus pavillonnaires côté Beauval et Le Loret. Cette
              topographie contrastée impose des <strong>contraintes
              techniques spécifiques</strong> sur les toitures : ruissellement
              accéléré sur les versants pentus du Haut Cenon, exposition
              directe aux <strong>vents d'ouest venus de la Garonne</strong>{' '}
              sur les faîtages, et sollicitations importantes de la zinguerie
              en raison du dénivelé.
            </p>
            <p>
              Le <strong>bâti cenonnais est éclectique</strong>. Sur les
              coteaux du Haut Cenon, on trouve encore des{' '}
              <strong>maisons anciennes en pierre calcaire</strong> couvertes
              en <strong>tuile canal</strong> traditionnelle, parfois en tuile
              plate pour les demeures du XIXᵉ siècle. Le plateau Palmer,
              redéveloppé dans les années 1960-70, concentre un habitat social
              collectif avec des <strong>toits-terrasses en étanchéité
              bitumineuse</strong> ou EPDM qu'il faut inspecter et reprendre
              périodiquement. Le pavillonnaire de Beauval-Loret et du Bas
              Cenon présente majoritairement de la <strong>tuile mécanique
              des années 1970-1990</strong>, avec sa problématique classique
              de faîtages scellés qui vieillissent et de gouttières zinc à
              renouveler.
            </p>
            <p>
              Le <strong>climat cenonnais</strong> suit le régime océanique
              girondin (environ 930 mm de pluie par an), mais deux facteurs
              locaux aggravent la sollicitation des toitures. D'abord, le{' '}
              <strong>relief</strong> : sur les versants du Haut Cenon,
              l'eau ruisselle plus vite, saturant chéneaux et descentes plus
              rapidement qu'en plaine. Un dimensionnement des gouttières{' '}
              <strong>inadapté au relief</strong> se traduit systématiquement
              par des débordements en cas d'orage. Ensuite, l'{' '}
              <strong>exposition aux vents dominants d'ouest</strong> venus
              directement du fleuve : les faîtages des maisons cenonnaises,
              particulièrement sur les coteaux, se dégradent plus vite que la
              moyenne bordelaise et demandent un contrôle tous les 5-7 ans.
            </p>
            <p>
              Côté <strong>règlementation</strong>, Cenon applique le PLU de
              Bordeaux Métropole. Certains secteurs des coteaux, notamment
              autour du <strong>Parc Palmer et du Domaine de Sybirol</strong>,
              présentent des contraintes urbanistiques renforcées (patrimoine
              paysager, perspectives sur la Garonne). Les rénovations de
              toitures à l'identique passent en général sans formalité, mais
              tout changement d'aspect (matériau, teinte, création de Velux)
              demande une déclaration préalable auprès du service urbanisme
              de la mairie. <strong>Nous prenons en charge ces démarches</strong>
              {' '}
              systématiquement dans le cadre de nos devis.
            </p>
            <p>
              Notre <strong>proximité opérationnelle</strong> avec Cenon est
              structurée par notre atelier de Mérignac : environ{' '}
              <strong>15 km, 20-25 minutes</strong> via le Pont d'Aquitaine ou
              la rocade en heures ouvrées. Pour les urgences (fuite déclarée,
              dégât de tempête, tuile envolée), nous sommes chez vous en{' '}
              <strong>30 à 45 minutes</strong> en règle générale. Pour les
              diagnostics gratuits, nous programmons habituellement sous
              48-72h ouvrées, en groupant plusieurs visites rive droite pour
              optimiser nos déplacements sans jamais vous facturer un forfait
              kilométrique. Cette organisation nous permet de{' '}
              <strong>proposer les mêmes tarifs qu'à Mérignac</strong> ou à
              Bordeaux Centre.
            </p>
            <p>
              Couverture Gironde intervient à Cenon depuis 2005. Nous
              travaillons en <strong>direct sans sous-traitance</strong> :
              l'artisan qui se déplace pour le diagnostic est celui qui
              revient sur le chantier, qui supervise les travaux et qui
              assure le SAV en cas de besoin ultérieur. C'est cette
              continuité de l'interlocuteur, combinée à notre{' '}
              <strong>garantie décennale</strong> systématique, qui nous vaut
              la note <strong>5/5 sur 54 avis Google publics</strong>. Notre
              exigence à Cenon est la même que partout ailleurs : devis
              chiffré ligne par ligne, acompte limité à 30 %, solde à la fin
              du chantier après votre validation.
            </p>
          </>
        ),
        reparationFuite: {
          intro: (
            <p>
              Le <strong>relief cenonnais</strong> et l'exposition aux vents
              d'ouest font que les fuites toiture y sont particulièrement
              fréquentes après un épisode orageux ou une tempête. Notre
              organisation nous permet d'intervenir en{' '}
              <strong>30-45 minutes en heures ouvrées</strong> depuis Mérignac,
              et sous <strong>2-4 heures</strong> pour une mise hors d'eau en
              cas d'urgence déclarée. Nous établissons systématiquement le
              dossier photo et l'attestation nécessaires à votre déclaration
              d'assurance.
            </p>
          ),
          casTypiques: [
            {
              title: "Tuile canal fissurée sur les coteaux du Haut Cenon",
              description:
                "Vents d'ouest et alternances gel-dégel fragilisent la tuile canal ancienne. Remplacement ponctuel de 5-15 tuiles + vérification du solin. Intervention sous 48h.",
            },
            {
              title: "Faîtage scellé disloqué (pavillonnaire Beauval)",
              description:
                "Après tempête, faîtage scellé qui se descelle par section, laissant s'infiltrer l'eau. Reprise au mortier de chaux + closoir ventilé. 320-750 €.",
            },
            {
              title: "Débordement gouttière en versant pentu",
              description:
                "Sur les coteaux, gouttière sous-dimensionnée qui déborde à chaque gros orage. Remplacement par gouttière zinc section renforcée. 85-140 €/ml.",
            },
            {
              title: "Fuite abergement cheminée (bâti ancien Haut Cenon)",
              description:
                "Solins d'abergement anciens qui perdent leur étanchéité. Reprise complète avec closoir plomb ou zinc soudé sur place. 380-850 €.",
            },
            {
              title: "Infiltration terrasse Palmer (étanchéité bitumineuse)",
              description:
                "Toit-terrasse années 60-70 sur collectifs Palmer : étanchéité qui craquèle. Reprise par système SEL ou EPDM avec relevés. Devis diagnostic.",
            },
          ],
          tarifIndicatif: "250 – 550 € (mise hors d'eau + diagnostic)",
        },
        raisonsLocales: [
          {
            title: 'Intervention urgence 30-45 min',
            description:
              "Depuis notre atelier de Mérignac, nous atteignons Cenon en 20-25 min hors urgence, 30-45 min en urgence heures ouvrées. Délai qu'aucune structure bordelaise centre ne bat.",
          },
          {
            title: 'Connaissance du relief cenonnais',
            description:
              "Coteaux du Haut Cenon, plateau Palmer, pavillonnaire Beauval : chaque secteur a ses spécificités (pente, exposition vent, dimensionnement zinguerie). Nous les connaissons.",
          },
          {
            title: 'Zinguerie renforcée pour dénivelé',
            description:
              "Sur les versants pentus, nous dimensionnons systématiquement les gouttières et descentes en section renforcée. Fini les débordements orageux qui font ruisseler la façade.",
          },
          {
            title: 'Bâti ancien coteaux respecté',
            description:
              "Sur les maisons en pierre du Haut Cenon, nous travaillons à l'identique en tuile canal traditionnelle et mortier de chaux. Respect du patrimoine, aucun patch visuel.",
          },
          {
            title: 'Copropriétés Palmer accompagnées',
            description:
              "Toits-terrasses collectifs sur Palmer et La Marègue : nous savons dialoguer avec les syndics, présenter en AG, respecter le calendrier de trésorerie. Attestations fournies.",
          },
          {
            title: 'Pas de surcoût déplacement',
            description:
              "Petits chantiers (remplacement tuiles, contrôle, reprise ponctuelle zinguerie) : mêmes tarifs qu'à Mérignac. Aucun forfait kilométrique caché.",
          },
        ],
        tarifsLines: [
          {
            service: 'Démoussage toiture (avec brossage)',
            range: '12 – 18 €/m²',
            note: 'Tarif Cenon sans surcoût déplacement',
          },
          {
            service: 'Démoussage + traitement hydrofuge 10 ans',
            range: '18 – 27 €/m²',
            note: 'Recommandé versants ouest exposés vent Garonne',
          },
          {
            service: 'Nettoyage haute pression maîtrisé',
            range: '12 – 20 €/m²',
            note: 'Pression adaptée tuile canal / mécanique',
          },
          {
            service: 'Remplacement tuiles cassées (≤10)',
            range: '180 – 420 €',
            note: 'Forfait diagnostic + intervention',
          },
          {
            service: 'Réfection faîtage scellé',
            range: '45 – 70 €/ml',
            note: 'Mortier chaux pour maisons anciennes Haut Cenon',
          },
          {
            service: 'Pose gouttières zinc section renforcée',
            range: '65 – 105 €/ml',
            note: 'Dimensionnement adapté relief coteaux',
          },
          {
            service: "Urgence fuite, mise hors d'eau",
            range: '250 – 550 €',
            note: 'Intervention 30-45 min en heures ouvrées',
          },
          {
            service: 'Réfection étanchéité toit-terrasse EPDM',
            range: '70 – 130 €/m²',
            note: 'Copropriétés Palmer / La Marègue',
          },
          {
            service: 'Réfection complète tuile canal',
            range: '85 – 145 €/m²',
            note: 'Bâti ancien coteaux, à l\u2019identique',
          },
        ],
        faqLocale: [
          {
            question:
              "Quel est votre délai d'intervention à Cenon ?",
            answer:
              "Depuis notre atelier de Mérignac, nous atteignons Cenon en 20 à 25 minutes en horaires standards via le Pont d'Aquitaine ou la rocade. En cas d'urgence déclarée (fuite active, dégât tempête) en heures ouvrées, nous sommes chez vous en 30 à 45 minutes en moyenne. Pour un diagnostic gratuit non urgent, nous programmons habituellement sous 48 à 72 heures ouvrées, en groupant les visites rive droite pour optimiser les déplacements.",
          },
          {
            question:
              "Faut-il une déclaration pour refaire sa toiture à Cenon ?",
            answer:
              "Pour une réfection à l'identique (même matériau, même teinte, même pente), aucune formalité dans la majorité des quartiers cenonnais. Pour tout changement d'aspect (nouveau matériau, couleur différente, création de Velux), une déclaration préalable de travaux est obligatoire auprès du service urbanisme de la mairie de Cenon. Certains secteurs des coteaux et abords du Parc Palmer peuvent être soumis à contraintes patrimoniales renforcées. Nous vérifions systématiquement pour vous et constituons les dossiers si nécessaire.",
          },
          {
            question:
              "Pourquoi les faîtages se dégradent-ils plus vite à Cenon ?",
            answer:
              "Les faîtages cenonnais, particulièrement sur les coteaux du Haut Cenon, sont exposés en direct aux vents dominants d'ouest venus de la Garonne. Cette exposition accélère la fatigue des scellements traditionnels au mortier bâtard : là où un faîtage tient 15-20 ans en plaine, il se met à disloquer dès 10-12 ans sur les crêtes cenonnaises. Nous recommandons un contrôle visuel tous les 5-7 ans et privilégions les techniques de faîtage à sec ventilé (closoir moderne) lors des rénovations complètes pour améliorer la durabilité.",
          },
          {
            question:
              "Intervenez-vous sur les copropriétés du plateau Palmer ?",
            answer:
              "Oui, nous intervenons régulièrement sur les copropriétés cenonnaises, en particulier sur le plateau Palmer, La Marègue et Beauval-Loret. Toits-terrasses en étanchéité bitumineuse années 60-70 : nous procédons par diagnostic photo complet, devis adapté au format syndic (délais AG, attestations d'assurance, planning trésorerie), et intervention groupée pour maîtriser les coûts. Reprises ponctuelles, étanchéité complète (SEL ou EPDM), zinguerie périphérique, démoussage des couvertures inclinées annexes : nous couvrons tout.",
          },
          {
            question:
              "Quels quartiers de Cenon couvrez-vous ?",
            answer:
              "L'intégralité du territoire cenonnais : Palmer, La Marègue, Beauval-Loret, Le Haut Cenon, Le Bas Cenon, Pont-Rouge et Le Loret, ainsi que les zones limitrophes avec Bordeaux (Bastide), Floirac et Lormont. Tarifs identiques sur toute la commune, aucun zonage interne. Sur les coteaux les plus pentus, nous mobilisons éventuellement un échafaudage adapté (surcoût dans le devis, jamais caché).",
          },
          {
            question:
              "Comment dimensionnez-vous les gouttières sur les coteaux ?",
            answer:
              "Les versants pentus du Haut Cenon accélèrent le ruissellement : une gouttière standard (section 25) sature en cas d'orage à 30-40 mm/h. Nous dimensionnons en section renforcée (33 ou 40 selon la longueur du versant et la pente), avec descentes en Ø 100 mm minimum. Cette approche coûte 15-25 % plus cher à la pose mais élimine les débordements récurrents qui font ruisseler les façades et saturent les descentes.",
          },
          {
            question:
              "Prenez-vous en charge les dossiers d'assurance ?",
            answer:
              "Oui, systématiquement en cas de sinistre. Après intervention d'urgence (mise hors d'eau, bâchage), nous remettons un rapport photo complet, un devis de reprise et l'attestation décennale. Ces éléments constituent le dossier que vous transmettez à votre assureur. Nous restons disponibles pour tout échange direct avec l'expert d'assurance si nécessaire.",
          },
        ],
      }}
    />
  );
}
