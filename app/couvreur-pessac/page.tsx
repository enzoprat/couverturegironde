import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-pessac');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <>
      <VillePageLayout
        content={{
          slug: PAGE.slug,
          villeSlug: 'pessac',
          h1: (
            <>
              Couvreur à{' '}
              <span className="text-[var(--color-terre)]">Pessac</span> depuis
              2005 — intervention 30-60 min depuis Mérignac
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac (7 km de Pessac)',
            bio: "Je couvre Pessac quotidiennement depuis 2005 depuis mon atelier de Mérignac (7 km, 15 min via A630). Je connais bien les 3 typologies pessacaises : les copropriétés universitaires (Saige, Alouette) qui demandent format syndic + attestations, les pavillons Cap-de-Bos/Toctoucau sous couvert végétal dense (hydrofuge INDISPENSABLE), et le bâti bourgeois du centre (tuile canal traditionnelle + ardoise). Chaque devis rédigé et signé par moi, aucune sous-traitance.",
            badges: [
              'Depuis 2005',
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Urgence 30-60 min (ouvré)',
            ],
          },

          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro:
              "Notre atelier est à Mérignac, à 7 km (15 min via A630) du centre de Pessac. Cette proximité permet une intervention urgence en 30-60 minutes en heures ouvrées sur toute la commune pessacaise, sans surcoût de déplacement.",
            horaires: [
              { jours: 'Lundi – Vendredi', heures: '6h00 – 22h00' },
              { jours: 'Samedi – Dimanche', heures: 'Urgences 7j/7' },
            ],
            mapEmbedUrl:
              'https://www.google.com/maps?q=65+rue+de+Malbos+33700+M%C3%A9rignac&output=embed',
            itineraireUrl:
              'https://www.google.com/maps/dir//65+rue+de+Malbos,+33700+M%C3%A9rignac',
          },

          heroSubtitle:
            "Couvreur-zingueur à Pessac depuis 2005, atelier à Mérignac (7 km). Intervention 30-60 min en heures ouvrées sur toutes les toitures pessacaises : centre bourgeois, Saige, Cap-de-Bos, Toctoucau, Alouette. Démoussage, hydrofuge, réparation, zinguerie. Devis 24h, décennale, 5/5 sur 52 avis Google.",
        contexteLocal: (
          <>
            <p>
              Pessac est l'une des communes les plus arborées de Bordeaux
              Métropole. Entre le domaine universitaire, le Bourgailh et les
              vastes zones pavillonnaires de Saige, Cap-de-Bos ou Toctoucau,
              une grande partie des toitures pessacaises souffrent d'une{' '}
              <strong>exposition prolongée à l'humidité et aux mousses</strong>{' '}
              en raison du couvert végétal dense qui caractérise la ville. Nos
              équipes interviennent quotidiennement sur ce territoire et
              connaissent précisément les contraintes locales.
            </p>
            <p>
              Les toitures pessacaises mêlent plusieurs typologies :{' '}
              <strong>tuiles canal traditionnelles</strong> sur les bâtisses
              anciennes du centre, <strong>tuiles mécaniques</strong> sur la
              majorité des pavillons d'après-guerre, et quelques{' '}
              <strong>ardoises</strong> sur les maisons bourgeoises. Cette
              diversité demande un savoir-faire ajusté à chaque matériau : la
              pression de nettoyage, le choix du produit anti-mousse, ou le
              dimensionnement des gouttières ne se traitent pas de la même
              manière entre une échoppe Saige et une villa Bourgailh.
            </p>
            <p>
              Le climat océanique de Pessac, avec une pluviométrie annuelle
              moyenne de 930 mm et des hivers doux et humides, favorise particulièrement la
              prolifération des mousses, lichens et algues sur les versants
              nord et les pans ombragés.{' '}
              <strong>
                Un démoussage tous les 3 à 5 ans est ici la norme
              </strong>
              , combiné à un traitement hydrofuge longue durée pour protéger
              durablement la couverture des cycles gel-dégel. Sans cet
              entretien, les toitures pessacaises vieillissent 30 à 50% plus
              vite que la moyenne.
            </p>
            <p>
              Nos équipes desservent Pessac quotidiennement. Cette proximité
              garantit une <strong>intervention rapide en cas d'urgence</strong>
              {' '}(fuite déclarée, tempête, dégât des eaux) : nous pouvons être
              sur place en 30 à 60 minutes en heures ouvrées pour une mise hors
              d'eau immédiate. La connaissance fine du territoire pessacais
              permet aussi d'anticiper les contraintes d'accès (rues étroites
              dans certains quartiers, riverains à informer).
            </p>
            <p>
              Couverture Gironde travaille en <strong>direct sans
              sous-traitance</strong>. C'est notre équipe qui se déplace, qui
              chiffre, qui réalise les travaux et qui assure le SAV. Cette
              relation directe avec le client est ce qui nous a permis
              d'accumuler une note de {''}
              <strong>5/5 sur 52 avis Google</strong>, un signal de confiance
              que nous protégeons sur chaque chantier pessacais.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Connaissance des toitures pessacaises',
            description:
              "Tuile canal du centre, tuiles mécaniques des pavillons Saige, ardoise des maisons bourgeoises. Chaque matériau a sa technique, sa pression, son produit. Nous traitons les trois quotidiennement.",
          },
          {
            title: 'Couvreur de proximité à Pessac',
            description:
              "Intervention rapide sur toute la commune. En urgence, 30 à 60 min de délai d'intervention en heures ouvrées. Pas de déplacement coûteux à vous facturer.",
          },
          {
            title: 'Expertise climat océanique humide',
            description:
              "930 mm de pluie/an, couvert végétal dense, exposition nord fréquente : les toitures pessacaises ont des besoins d'entretien spécifiques. Nous les connaissons parfaitement.",
          },
          {
            title: 'Travail direct, sans sous-traitance',
            description:
              "L'équipe qui chiffre est celle qui travaille et qui revient en SAV. Vous n'avez qu'un interlocuteur tout au long du projet.",
          },
          {
            title: 'Devis gratuit en 24h',
            description:
              "Vous nous contactez, nous étudions votre demande et vous répondons sous 24h ouvrées avec un devis détaillé ligne par ligne.",
          },
          {
            title: 'Garantie décennale active depuis 2005',
            description:
              "20 ans d'exercice à Bordeaux Métropole, assurance décennale en cours de validité, justificatifs fournis sur demande avec le devis.",
          },
        ],
        tarifsLines: [
          {
            service: 'Démoussage toiture (avec brossage manuel)',
            range: '12 – 18 €/m²',
            note: 'Pour 100 m² de toiture : 1 200 à 1 800 € HT',
          },
          {
            service: 'Démoussage + traitement hydrofuge',
            range: '18 – 28 €/m²',
            note: 'Combo recommandé, garantie 10 ans hydrofuge',
          },
          {
            service: 'Nettoyage haute pression maîtrisé',
            range: '12 – 20 €/m²',
            note: 'Inclut démoussage chimique léger',
          },
          {
            service: 'Réparation ponctuelle (≤ 10 tuiles)',
            range: '180 – 450 €',
            note: 'Forfait diagnostic + remplacement',
          },
          {
            service: 'Réfection de faîtage',
            range: '40 – 70 €/ml',
            note: 'Scellé ou à sec selon configuration',
          },
          {
            service: 'Pose de gouttières zinc',
            range: '50 – 85 €/ml',
            note: 'Demi-rondes Ø 25, soudure étain',
          },
          {
            service: "Urgence fuite, mise hors d'eau",
            range: '250 – 600 €',
            note: 'Bâche + sécurisation, devis répa. à part',
          },
          {
            service: 'Réfection complète de toiture',
            range: '85 – 150 €/m²',
            note: 'Selon matériau : tuile, ardoise, zinc',
          },
        ],
        reparationFuite: {
          intro: (
            <>
              <p>
                Une fuite de toiture à Pessac est presque toujours une urgence
                à traiter dans les 24 à 48 heures pour éviter l'aggravation des
                dégâts en sous-face : isolant gorgé d'eau, plaques de plâtre
                qui s'effondrent, charpente fragilisée. Nous intervenons sur
                Pessac <strong>chaque jour</strong> pour des urgences fuite, et
                la proximité de notre atelier (7 km à Mérignac) permet une
                <strong> mise hors d'eau en 30 à 60 minutes</strong> en heures
                ouvrées.
              </p>
              <p>
                La majorité des fuites pessacaises que nous traitons concernent
                les <strong>versants nord</strong> exposés au couvert arboré
                dense de la commune (Saige, Bourgailh, secteur universitaire),
                les <strong>joints de faîtage</strong> dégradés sur le bâti
                ancien du centre, et les <strong>noues zinc</strong> fatiguées
                sur les villas Cap-de-Bos. Nous procédons toujours dans cet
                ordre : sécurisation + bâche, diagnostic précis, devis
                réparation détaillé sous 48h, puis exécution une fois validé.
              </p>
            </>
          ),
          casTypiques: [
            {
              title: 'Tuile cassée par chute de branche',
              description:
                "Très fréquent sous le couvert arboré pessacais. Diagnostic en 30 min, remplacement de la tuile et inspection des tuiles adjacentes pour anticiper de futures fissures.",
            },
            {
              title: 'Joint de faîtage défaillant',
              description:
                "Sur le bâti ancien du centre, le mortier ciment dur fissure avec les cycles gel-dégel. Reprise au mortier chaux compatible bâti ancien.",
            },
            {
              title: 'Noue zinc percée',
              description:
                "Zone critique d'évacuation d'eau. Soudure étain in situ si la noue est encore récupérable, sinon remplacement complet avec zinc de qualité.",
            },
            {
              title: 'Faîtage envolé après tempête',
              description:
                "Sécurisation immédiate par bâche, dossier assurance constitué (photos + devis), réfection de faîtage scellé chaux ou à sec selon configuration.",
            },
            {
              title: 'Infiltration autour de Velux',
              description:
                "Reprise du raccord d'étanchéité périphérique. Si le Velux a plus de 20 ans, devis de remplacement complet en parallèle (plus durable).",
            },
            {
              title: 'Débordement de gouttière à la jonction',
              description:
                "Bouchage par feuilles d'automne ou raccord descellé. Nettoyage des descentes + reprise du raccord soudé étain.",
            },
          ],
          tarifIndicatif:
            "Mise hors d'eau : 250 – 600 € · Réparation définitive sur devis",
        },
        faqLocale: [
          {
            question: 'Quel est votre délai d\u2019intervention à Pessac ?',
            answer:
              "Nous intervenons à Pessac en 30 à 60 minutes en heures ouvrées pour les urgences (fuite déclarée, dégât de tempête). Pour les visites de diagnostic gratuit, nous proposons un rendez-vous sous 48h ouvrées.",
          },
          {
            question:
              "Faut-il une autorisation pour refaire sa toiture à Pessac ?",
            answer:
              "À Pessac, une déclaration préalable de travaux est requise pour la modification de l'aspect extérieur (changement de matériau, couleur). Pour une réfection à l'identique, aucune formalité n'est généralement nécessaire. Nous vous accompagnons dans la constitution du dossier si besoin. Les quartiers situés à proximité immédiate du château Pape-Clément ou des zones classées peuvent être soumis à l'avis de l'ABF.",
          },
          {
            question:
              "Quel est le meilleur moment pour démousser sa toiture à Pessac ?",
            answer:
              "Idéalement au printemps (mars-mai) ou à la fin de l'été (septembre-octobre), hors période de gel ou de fortes pluies. C'est le moment où la mousse est la moins active, et où l'on peut appliquer un traitement hydrofuge dans les meilleures conditions de séchage.",
          },
          {
            question:
              "Couvrez-vous tous les quartiers de Pessac, y compris Toctoucau ou Compostelle ?",
            answer:
              "Oui, l'ensemble du territoire communal pessacais est couvert avec la même réactivité et les mêmes tarifs : Saige, Cap-de-Bos, Bourgailh, Pessac-centre, Toctoucau, Compostelle, ainsi que les communes voisines (Mérignac, Talence, Gradignan).",
          },
          {
            question:
              "Travaillez-vous sur les maisons en copropriété à Pessac ?",
            answer:
              "Oui, nous intervenons régulièrement en copropriété sur Pessac (résidences de l'Alouette, Saige, etc.). Nous fournissons les devis et attestations nécessaires au syndic et aux assemblées générales. Acompte raisonnable adapté aux usages copropriété.",
          },
          {
            question:
              "Acceptez-vous les paiements par mensualités ou via un éco-prêt ?",
            answer:
              "Nous acceptons les paiements échelonnés en 2 à 3 fois sans frais sur les chantiers supérieurs à 5 000 € HT. Pour les éco-prêts à taux zéro liés à la rénovation énergétique, nous fournissons toutes les pièces justificatives nécessaires à votre dossier bancaire.",
          },
          {
            question:
              "Pourquoi les toitures pessacaises ont-elles autant de mousses ?",
            answer:
              "Trois facteurs conjoints : (1) le couvert végétal exceptionnellement dense (Bourgailh 1 000 hectares, domaine universitaire arboré, parc Bordelais, alignements dans les lotissements Saige), (2) le climat océanique humide (930 mm/an, hivers doux), (3) beaucoup de bâti pavillonnaire tuile mécanique 70-90 poreuse. Résultat : mousses systématiques versants nord, cycle de démoussage recommandé tous les 3-4 ans (vs 4-5 ans en moyenne bordelaise). Hydrofuge après démoussage FORTEMENT recommandé pour tenir 8-10 ans.",
          },
          {
            question:
              "Comment vérifier votre décennale avant signature ?",
            answer:
              "Nous joignons systématiquement notre attestation d'assurance décennale à chaque devis, avec ses dates de validité. Un artisan qui rechigne à fournir ce document cache probablement une décennale périmée ou absente — refusez de signer. Sans décennale valide, aucun recours en cas de sinistre post-chantier.",
          },
        ],

        // ————————————————————————————————————————————————
        // QUESTIONS À POSER À TOUT COUVREUR PESSACAIS
        // ————————————————————————————————————————————————
        questionsCouvreur: {
          intro:
            "3 questions à poser à tout couvreur qui vous propose un devis pour Pessac. Elles séparent en 2 minutes les artisans réels des intermédiaires opportunistes.",
          items: [
            {
              question:
                "Où est votre atelier ? Puis-je passer le voir ?",
              answer:
                "Un artisan qui intervient VRAIMENT à Pessac a un atelier vérifiable — soit à Pessac même (Clivaz, AT Rénovation), soit à proximité immédiate. Notre atelier est au 65 rue de Malbos à Mérignac (7 km, 15 min), ouvert lundi-vendredi 6h-22h. Un couvreur qui refuse ou envoie une adresse de boîte postale est probablement un intermédiaire commercial.",
            },
            {
              question:
                "Quel est votre délai réel d'intervention à Pessac en urgence ?",
              answer:
                "Un couvreur sérieux basé sur Pessac ou immédiatement voisin répond 30-60 minutes en heures ouvrées. Si la réponse est « 2-4 heures » ou « dans la journée », vous parlez probablement à une structure qui envoie une équipe depuis Bordeaux ou hors métropole. En saison tempête, la différence de délai peut coûter cher en dégâts intérieurs.",
            },
            {
              question:
                "Votre devis inclut-il tous les postes ou reste-t-il des lignes ouvertes ?",
              answer:
                "Un devis exhaustif détaille chaque poste : main d'œuvre, matériaux, échafaudage, protection abords, évacuation des déchets, TVA. Nos devis n'ont aucune ligne « divers et imprévus » restée ouverte — vous savez exactement ce que vous signez et le total ne bouge pas en cours de chantier.",
            },
          ],
        },
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
