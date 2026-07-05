import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('reparation-toiture-bordeaux');

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
        service: 'reparation',
        slug: PAGE.slug,
        h1: (
          <>
            Réparation toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            tuiles, faîtage, noue zinc, abergement
          </>
        ),
        heroSubtitle:
          "Tuiles cassées par le vent, faîtage disloqué, noue zinc percée, abergement de cheminée fuyard ? Diagnostic gratuit sur site sous 48h, devis chiffré ligne par ligne sous 24h, exécution en 1-3 semaines selon planning. Liroy, artisan couvreur direct depuis 2005, atelier au 65 rue de Malbos à Mérignac.",
        shortTitle: 'Réparation toiture',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
          bio: "Je fais des réparations de toiture depuis 2005 sur Bordeaux Métropole. Chaque diagnostic par mes soins, chaque devis rédigé personnellement, chaque chantier supervisé. Ma méthode : remonter à la cause profonde plutôt que boucher le symptôme visible. Une fuite déclarée à un endroit a souvent son origine à 2 mètres de là — c'est ce qui évite les reprises et les surcoûts.",
          badges: [
            'Depuis 2005',
            'Décennale active',
            '5/5 sur 52 avis Google',
            'Diagnostic gratuit',
          ],
        },
        presentation: (
          <>
            <p>
              Une toiture qui faiblit ne se voit pas toujours du sol. Quelques
              tuiles déplacées par le vent, une fissure dans un faîtage, un
              joint qui se décolle : autant de signaux qui, ignorés, finissent
              en infiltrations, dégâts d'isolation et coût décuplé.{' '}
              <strong>
                La réparation ciblée est presque toujours plus économique que
                la réfection complète
              </strong>
              , à condition d'intervenir à temps.
            </p>
            <p>
              Nous traitons l'ensemble des réparations courantes sur les
              toitures bordelaises :{' '}
              <strong>
                remplacement de tuiles cassées, reprise de faîtage scellé ou à
                sec, étanchéité de raccords, réparation de zinguerie, traitement
                des points faibles autour des cheminées, abergements
              </strong>
              . Diagnostic gratuit, devis détaillé sous 24h.
            </p>
            <p>
              Notre démarche : remonter à la cause, pas juste boucher le
              symptôme. Une fuite déclarée à un endroit a souvent son origine
              ailleurs. C'est pourquoi nous prenons systématiquement le temps
              d'inspecter la toiture entière avant de chiffrer une réparation
              ponctuelle. Vous évitez ainsi de payer deux fois.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Diagnostic complet, pas juste le symptôme',
            description:
              "Nous inspectons toute la toiture, pas seulement la zone signalée. Une fuite a souvent une cause distante (faîtage, abergement, descente). Trouver la vraie cause = ne réparer qu'une fois.",
          },
          {
            title: 'Compatibilité matériaux respectée',
            description:
              "Tuile canal du Sud-Ouest, ardoise d'Angers, zinc patiné : nous fournissons les matériaux compatibles avec votre couverture existante. Pas de patch visuellement criant.",
          },
          {
            title: 'Intervention rapide',
            description:
              "Pour les réparations urgentes (fuite déclarée, dégât de tempête), intervention dans la journée ou le lendemain matin sur Bordeaux Métropole.",
          },
          {
            title: 'Devis transparent ligne par ligne',
            description:
              "Vous voyez exactement ce qui est facturé : main d'œuvre, matériaux, accès. Aucun supplément surprise. Acompte limité, paiement à la satisfaction.",
          },
          {
            title: 'Garantie décennale',
            description:
              "Toutes nos réparations sont couvertes par notre assurance décennale. Vous êtes protégé pendant 10 ans.",
          },
        ],
        risques: [
          {
            title: 'Infiltrations chroniques',
            description:
              "Une petite fuite ignorée pendant un hiver imprègne les isolants, les chevrons, les plafonds. Les dégâts intérieurs coûtent souvent plus cher que la réparation initiale.",
          },
          {
            title: 'Dégradation accélérée par le vent',
            description:
              "Une tuile mal fixée en entraîne d'autres au prochain coup de vent. Le bord d'attaque des versants ouest est particulièrement exposé à Bordeaux. Chaque tempête aggrave l'état.",
          },
          {
            title: 'Perte de la garantie décennale antérieure',
            description:
              "Si votre toiture est sous garantie décennale et que vous laissez se dégrader un défaut signalable, vous perdez la protection. Faire intervenir un professionnel à temps préserve vos droits.",
          },
          {
            title: 'Sinistre d\u2019assurance refusé',
            description:
              "Les assureurs habitation refusent les sinistres liés à un défaut d'entretien manifeste. Faire intervenir un couvreur à temps = preuves photographiques et factures = dossier solide.",
          },
        ],
        methode: [
          {
            title: 'Appel et description du problème',
            description:
              "Décrivez ce que vous observez (photos bienvenues). Nous évaluons l'urgence et planifions une visite, immédiate si urgence, sous 48h sinon.",
          },
          {
            title: 'Diagnostic sur place',
            description:
              "Inspection visuelle complète, sondages si nécessaire, photos. Identification précise de la cause et des éléments à remplacer ou remettre en état.",
          },
          {
            title: 'Devis détaillé sous 24h',
            description:
              "Vous recevez un devis chiffré ligne par ligne avec photo des points concernés. Choix possible entre réparation minimale et reprise complète des points faibles.",
          },
          {
            title: 'Préparation et sécurisation',
            description:
              "Installation des protections (échafaudage si nécessaire, harnais), bâchage si pluie probable, mise hors d'eau provisoire en cas d'urgence.",
          },
          {
            title: 'Réparation et tests',
            description:
              "Remplacement des éléments défectueux, vérification de l'étanchéité, contrôle des raccords zinguerie. Tests d'étanchéité par aspersion contrôlée si nécessaire.",
          },
          {
            title: 'Réception et garantie',
            description:
              "Visite de fin de chantier avec vous, remise des photos avant/après, attestation décennale. Conseils pour prévenir un futur problème équivalent.",
          },
        ],
        tarifs: {
          intro:
            "Fourchettes de prix indicatives pour les réparations courantes sur Bordeaux Métropole en 2026. Une réparation ciblée coûte généralement entre 10 et 50 fois moins qu'une réfection complète tardive : intervenir vite est l'investissement le plus rentable.",
          lines: [
            {
              service: 'Remplacement 1 à 5 tuiles cassées',
              range: '180 – 340 €',
              note: 'Forfait diagnostic + intervention + matériaux',
            },
            {
              service: 'Remplacement 5 à 15 tuiles',
              range: '320 – 580 €',
              note: 'Tarif dégressif au-delà de 5 tuiles',
            },
            {
              service: 'Réparation faîtage scellé (par ml)',
              range: '45 – 70 €/ml',
              note: 'Mortier de chaux pour bâti ancien',
            },
            {
              service: 'Réparation faîtage à sec ventilé',
              range: '38 – 60 €/ml',
              note: 'Système moderne avec closoir ventilé',
            },
            {
              service: "Reprise d'abergement cheminée",
              range: '380 – 850 €',
              note: 'Zinguerie + étanchéité au pied de cheminée',
            },
            {
              service: 'Réparation noue zinguerie',
              range: '180 – 420 €/ml',
              note: 'Selon longueur et accessibilité',
            },
            {
              service: 'Remplacement section gouttière zinc',
              range: '85 – 140 €/ml',
              note: 'Avec soudure étain sur place',
            },
            {
              service: 'Remplacement descente EP zinc',
              range: '95 – 160 €/ml',
              note: 'Section dimensionnée pluviométrie 930 mm',
            },
            {
              service: 'Réparation Velux (étanchéité)',
              range: '320 – 750 €',
              note: 'Kit Velux d\u2019origine, garantie constructeur',
            },
            {
              service: 'Réparation tuile faîtière scellée cassée',
              range: '120 – 250 €',
              note: 'Intervention rapide, intervention seule possible',
            },
            {
              service: "Mise hors d'eau d'urgence (bâchage)",
              range: '250 – 450 €',
              note: '24/24 en saison tempête, devis sous 24h',
            },
            {
              service: 'Diagnostic complet + rapport photos',
              range: '0 – 180 €',
              note: 'Gratuit si chantier signé, sinon forfait',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, garantie décennale incluse. Échafaudage spécifique, hauteur >12m, accès difficile ou intervention nuit/weekend sur devis. En urgence : intervention sous 2-4h en heures ouvrées, 24/24 en saison tempête.",
        },
        quartiersBordeaux: {
          intro:
            "Nous intervenons rapidement sur tous les quartiers de Bordeaux Métropole. Notre proximité Mérignac permet des délais inégalables (15-30 minutes en heures ouvrées sur Bordeaux Ouest, 30-60 minutes ailleurs).",
          items: [
            {
              nom: 'Bordeaux Centre',
              description:
                "Échoppes XIXᵉ et immeubles haussmanniens : réparations soignées respectant les matériaux d'origine (tuile canal, ardoise, zinc patiné).",
              href: '/couvreur-bordeaux-centre',
            },
            {
              nom: 'Chartrons',
              description:
                "Maisons d'armateurs et entrepôts réhabilités : zinguerie patrimoniale, abergements complexes. Savoir-faire spécifique.",
              href: '/couvreur-bordeaux-chartrons',
            },
            {
              nom: 'Caudéran',
              description:
                "Pavillons tuile mécanique : tuiles cassées, faîtages dégradés, gouttières percées sont les réparations les plus fréquentes.",
              href: '/couvreur-bordeaux-cauderan',
            },
            {
              nom: 'Saint-Augustin',
              description:
                "Échoppes tuile canal : remplacements ponctuels et reprise de faîtage scellé au mortier de chaux pour respecter le bâti.",
              href: '/couvreur-bordeaux-saint-augustin',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune : intervention urgence sous 15-30 min, tarif sans surcoût déplacement. Atelier sur place rue de Malbos.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Pavillonnaire et copropriétés : reprise zinguerie, étanchéité points faibles, remplacement tuiles courantes.",
              href: '/reparation-toiture-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Mix bourgeois ardoise + résidences étudiantes tuile mécanique. Réparations adaptées à chaque typologie.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Le Bouscat',
              description:
                "Quartier patrimonial : réparations soignées sur tuile canal et zinc, respect strict des matériaux d\u2019origine.",
              href: '/couvreur-bouscat',
            },
            {
              nom: 'Bègles, Villenave, Gradignan',
              description:
                "Pavillonnaire étendu : tuiles cassées par tempête ou branches, faîtages vieillissants, gouttières à reprendre.",
            },
          ],
        },

        // ————————————————————————————————————————————————
        // FAQ RÉPARATION-FOCUSED (10 questions ICP)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "Combien coûte une réparation de toiture à Bordeaux en 2026 ?",
            answer:
              "Fourchettes 2026 : remplacement 5-10 tuiles cassées 180-420 €, reprise faîtage scellé chaux 45-70 €/ml, reprise faîtage à sec ventilé 38-60 €/ml, reprise abergement cheminée 380-850 €, réparation noue zinc soudée étain 180-420 €/ml, remplacement gouttière zinc 85-140 €/ml, réparation Velux (kit étanchéité) 320-750 €, mise hors d'eau urgence 250-450 €. Diagnostic gratuit si chantier signé. Devis chiffré ligne par ligne sous 24h.",
          },
          {
            question:
              "Quel est votre délai d'intervention pour une réparation ?",
            answer:
              "Pour les urgences déclarées (fuite active), intervention 30 min à 2h en heures ouvrées sur Bordeaux Métropole depuis notre atelier de Mérignac. Pour les réparations non urgentes (tuiles à remplacer, faîtage à refaire), diagnostic sur site sous 48h, devis sous 24h après visite, chantier planifié 1-3 semaines selon disponibilité et matériaux à commander.",
          },
          {
            question:
              "Réparer ou refaire toute la toiture — comment décider ?",
            answer:
              "Trois critères objectifs : (1) l'âge de la couverture (>50 ans + peu d'entretien = envisager réfection), (2) le nombre de points faibles cumulés (>5 zones à reprendre = étudier réfection), (3) l'état de la charpente et de l'isolation sous-jacentes. Une réparation ciblée coûte 6-10× moins qu'une réfection tardive, mais si les points faibles s'accumulent, la réfection devient plus rentable sur la durée. Nous vous donnons l'analyse honnête après diagnostic complet.",
          },
          {
            question:
              "Comment identifiez-vous la vraie cause d'une fuite ?",
            answer:
              "Une fuite déclarée à un endroit a souvent son origine ailleurs (faîtage distant, noue, abergement, tuile fissurée en amont). Nous inspectons systématiquement TOUTE la toiture avant de chiffrer une réparation ponctuelle : photos des points critiques, sondages si nécessaire, test d'aspersion contrôlée pour valider. Cette méthode évite les reprises et les surcoûts — 90 % des fuites récidivantes viennent d'une mauvaise identification initiale de la cause.",
          },
          {
            question:
              "Mon assurance couvre-t-elle la réparation ?",
            answer:
              "Dans la plupart des cas si le sinistre est lié à un événement climatique (tempête vents >100 km/h, grêle, chute d'arbre) : votre assurance habitation multirisque prend en charge. Nous fournissons systématiquement le dossier complet nécessaire à votre déclaration : photos avant/après, devis chiffré ligne par ligne, attestation décennale. Nous restons disponibles pour tout échange direct avec l'expert d'assurance mandaté.",
          },
          {
            question:
              "Quels matériaux utilisez-vous pour les réparations ?",
            answer:
              "Tuile canal traditionnelle du Sud-Ouest (récupération si nécessaire pour bâti ancien), tuile mécanique standard pour pavillons 70-90, ardoise naturelle d'Angers pour bâti bourgeois. Zinc naturel patiné pour zinguerie soudée étain sur place. Mortier de chaux pour reprises de faîtage sur bâti ancien (compatible), mortier bâtard pour bâti récent. Kits Velux d'origine pour étanchéité Velux. Aucun matériau de récupération non identifié.",
          },
          {
            question:
              "Combien de temps dure une réparation ?",
            answer:
              "Remplacement 5-10 tuiles : 2-4h. Reprise faîtage 8-15 ml : 1 journée. Reprise abergement complet : 1 journée. Reprise noue zinc 5-10 ml : 1-2 jours. Réparation Velux : 1 journée. Mise hors d'eau urgence : 1-3h. Pour les réparations complexes (multiples points faibles), 2-5 jours. Le planning intègre systématiquement les créneaux météo.",
          },
          {
            question:
              "Faut-il une autorisation pour réparer sa toiture à Bordeaux ?",
            answer:
              "Pour une réparation à l'identique (même matériau, même teinte, même pente), aucune formalité. Pour un changement d'aspect (nouveau matériau, couleur différente, création Velux), déclaration préalable de travaux obligatoire. Certains secteurs de Bordeaux (centre UNESCO, périmètres ABF) peuvent être soumis à l'avis de l'Architecte des Bâtiments de France. Nous vérifions systématiquement et constituons les dossiers pour vous.",
          },
          {
            question:
              "Quelles garanties sur la réparation ?",
            answer:
              "Décennale (10 ans) sur l'ensemble de la prestation, obligation légale — notre attestation d'assurance est active et jointe à chaque devis avec dates de validité. Garantie biennale (2 ans) sur équipements (Velux, gouttières). Photos avant/après + attestation d'assurance + fiche technique matériaux remises en fin de chantier. Si la même fuite reprend au même endroit dans les 10 ans, nous revenons.",
          },
          {
            question:
              "Comment vérifier que vous êtes vraiment couvert par une décennale ?",
            answer:
              "Nous joignons systématiquement notre attestation décennale à chaque devis, avec dates de validité. Un couvreur qui rechigne à fournir ce document ou envoie un scan illisible cache probablement une décennale périmée ou absente — refusez de signer. Sans décennale valide, vous n'auriez aucun recours en cas de sinistre post-chantier.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
