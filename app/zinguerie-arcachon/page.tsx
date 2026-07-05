import type { Metadata } from 'next';
import { ServiceVillePageLayout } from '@/components/content/ServiceVillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('zinguerie-arcachon');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <>
      <ServiceVillePageLayout
        content={{
          slug: PAGE.slug,
          service: 'zinguerie',
          villeSlug: 'arcachon',
          h1: (
            <>
              Zinguerie à{' '}
              <span className="text-[var(--color-terre)]">Arcachon</span> et sur
              le Bassin — zinc marine anti-air-salin
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac (60 km)',
            bio: "Je réalise la zinguerie sur Arcachon et le Bassin depuis 2005. Sur le Bassin, air salin agressif = zinc marine prépatiné OBLIGATOIRE. Un zinc standard s'oxyde en 5-10 ans en bord de mer. Journées d'intervention groupées Arcachon + La Teste + Le Pyla pour maîtriser les frais de déplacement. Soudure étain sur place pour étanchéité 30-50 ans.",
            badges: ['Depuis 2005', 'Décennale active', '5/5 sur 52 avis Google', 'Zinc marine anti-air-salin'],
          },

          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro: "Atelier à 60 km (1h) d'Arcachon via A63 + A660. Journées d'intervention groupées Bassin pour maîtriser les frais de déplacement.",
            horaires: [
              { jours: 'Lundi – Vendredi', heures: '6h00 – 22h00' },
              { jours: 'Samedi – Dimanche', heures: 'Urgences 7j/7' },
            ],
            mapEmbedUrl: 'https://www.google.com/maps?q=65+rue+de+Malbos+33700+M%C3%A9rignac&output=embed',
            itineraireUrl: 'https://www.google.com/maps/dir//65+rue+de+Malbos,+33700+M%C3%A9rignac',
          },
        heroSubtitle:
          "Zinguerie à Arcachon et sur le Bassin par artisan couvreur-zingueur depuis 2005. Zinc naturel patiné et prépatiné adapté à l'air salin, gouttières marine, noues et chéneaux dimensionnés. Soudure étain sur place, garantie 30 ans. Devis gratuit sous 24h.",
        presentation: (
          <>
            <p>
              Arcachon et le Bassin présentent un{' '}
              <strong>environnement particulièrement agressif</strong> pour
              les éléments zinguerie. L'air salin, transporté par les vents
              d'ouest et concentré à moins de 500 m de la côte, oxyde
              rapidement les métaux mal choisis. Un zinc standard ou pire, un
              acier galvanisé, se dégrade en 5 à 10 ans dans ces conditions.
              Nous n'utilisons sur le Bassin que du <strong>zinc naturel
              titane VMZINC (ou équivalent qualité France/Belgique) et du
              prépatiné anti-air-salin</strong> spécifiquement adaptés à ce
              microclimat.
            </p>
            <p>
              Le <strong>bâti arcachonnais</strong> concentre des typologies
              variées avec chacune leurs contraintes zinguerie. Les villas
              Belle Époque de la <strong>Ville d'Hiver</strong>, protégées au
              titre du patrimoine, imposent une zinguerie soignée respectant
              l'esthétique d'origine : noues zinc soudées étain, ornements
              traditionnels, capotages patrimoniaux. Les maisons ostréicoles
              et les <strong>pavillons contemporains</strong> du Moulleau,
              Pereire et Aiguillon présentent des gouttières et chéneaux plus
              exposés directement aux embruns : dimensionnement renforcé et
              zinc prépatiné indispensables.
            </p>
            <p>
              La <strong>pluviométrie sur le Bassin</strong> est certes
              modérée (850-900 mm/an), mais les épisodes intenses (orages
              d'été et tempêtes hivernales avec vents d'ouest à 100+ km/h)
              sollicitent violemment la zinguerie. Nous dimensionnons
              systématiquement les gouttières en <strong>section renforcée
              (33 minimum)</strong>, avec descentes Ø 100 mm et raccords
              soudés étain. Cette approche coûte 15-25 % plus cher à la pose
              mais évite les débordements récurrents et les reprises
              intempestives sous garantie.
            </p>
            <p>
              Notre atelier étant à <strong>Mérignac (60 km, 1h de route)</strong>,
              nous organisons nos interventions sur Arcachon par{' '}
              <strong>journées d'intervention groupées</strong> pour
              optimiser les déplacements. Cela permet de maintenir des tarifs
              compétitifs sur des chantiers réalisés dans les règles de l'art.
              Pour les urgences fuite ou tempête, nous sommes chez vous en
              1h30 en heures ouvrées. Devis gratuit, chiffrage transparent
              ligne par ligne, garantie décennale.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Zinc marine (patiné/prépatiné) exclusivement',
            description:
              "Sur le Bassin, l'air salin oxyde tout métal non adapté en 5-10 ans. Nous n'utilisons que du zinc naturel VMZINC (ou équivalent) et du prépatiné anti-air-salin, résistant 30-50 ans.",
          },
          {
            title: 'Gouttières section renforcée pour tempêtes',
            description:
              "Les vents d'ouest à 100+ km/h et les orages d'été imposent un dimensionnement renforcé (section 33 min, Ø 100 mm descentes). Fini les débordements récurrents.",
          },
          {
            title: 'Soudure étain sur place (jamais mastic)',
            description:
              "Étanchéité permanente qui traverse les décennies. Contrairement au mastic ou joint silicone qui se dégrade en 5-8 ans en air salin, la soudure étain tient 30-50 ans.",
          },
          {
            title: 'Respect Ville d\u2019Hiver et patrimoine balnéaire',
            description:
              "Villas Belle Époque protégées : zinguerie patrimoniale soignée, ornements traditionnels, capotages compatibles ABF. Aucun élément moderne qui dénature.",
          },
          {
            title: 'Interventions groupées Bassin optimisées',
            description:
              "Journées d'intervention groupées Arcachon + La Teste + Le Pyla pour optimiser déplacements. Tarifs compétitifs malgré la distance depuis Mérignac.",
          },
          {
            title: 'Décennale + durabilité zinc 30-50 ans',
            description:
              "Couverture décennale légale + durabilité intrinsèque zinc naturel patiné estimée à 30-50 ans sans entretien. Investissement le plus durable en zinguerie.",
          },
        ],
        risques: [
          {
            title: 'Acier galvanisé qui rouille en 5-10 ans',
            description:
              "Certains poseurs low-cost proposent de l'acier galvanisé standard 20-30 % moins cher. Résultat : traces de rouille en 5 ans, perforation en 10, refonte complète à faire. Coût total supérieur.",
          },
          {
            title: 'Zinc standard non prépatiné en bord de mer',
            description:
              "Un zinc naturel non prépatiné en zone air salin direct (Le Pyla, Pereire, Moulleau) subit une oxydation accélérée sans la patine protectrice. Aspect terne et durabilité réduite.",
          },
          {
            title: 'Gouttières sous-dimensionnées = débordement tempête',
            description:
              "Sur le Bassin, les orages d'été peuvent déposer 40-60 mm en 1h. Une gouttière standard (section 25) sature et déborde, provoquant ruissellement sur façades et infiltrations en pied de mur.",
          },
          {
            title: 'Mastic étanchéité qui se dégrade en air salin',
            description:
              "Le silicone ou mastic bâtiment perd son élasticité et se fissure en 3-5 ans en environnement salin. Reprise systématique nécessaire vs soudure étain qui tient 30+ ans.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic sur site et prise de mesures',
            description:
              "Visite technique complète : identification besoins, mesures précises (longueurs, sections, orientations), évaluation exposition air salin selon quartier.",
          },
          {
            title: 'Choix matériau adapté au microclimat',
            description:
              "Zinc naturel patiné pour zones abritées, prépatiné anti-air-salin pour front de mer direct. Dimensionnement renforcé systématique pour intempéries Bassin.",
          },
          {
            title: 'Découpe et pliage atelier',
            description:
              "Pièces réalisées à l'atelier Mérignac aux dimensions précises relevées. Adaptation à chaque configuration, aucune pose de pièces standard.",
          },
          {
            title: 'Journée d\u2019intervention groupée',
            description:
              "Planification en journées groupées sur Arcachon + Bassin pour optimiser déplacements et maintenir tarifs compétitifs.",
          },
          {
            title: 'Pose et soudure étain sur place',
            description:
              "Installation avec sécurisation. Soudure étain pour chaque raccord, jonction et descente. Contrôle qualité soudure par soudure.",
          },
          {
            title: 'Réception et garantie',
            description:
              "Test d'étanchéité par aspersion contrôlée, photos avant/après, attestation décennale, conseils entretien (aucun entretien nécessaire).",
          },
        ],
        faqLocale: [
          {
            question:
              "Pourquoi le zinc standard ne convient-il pas à Arcachon ?",
            answer:
              "Le zinc-titane naturel forme une patine protectrice (carbonate de zinc) qui le rend inaltérable. Mais en air salin direct (proximité littoral immédiate), la patine se forme irrégulièrement et l'oxydation peut être accélérée. Le zinc prépatiné anti-air-salin, produit avec un traitement de surface spécifique, résiste sans aucune altération pendant 30-50 ans. C'est le seul choix pertinent pour le Bassin.",
          },
          {
            question:
              "Combien coûte une zinguerie complète à Arcachon ?",
            answer:
              "Comptez 75 à 130 €/ml pour une gouttière zinc marine dimensionnée (section renforcée + descente Ø 100 mm + raccords soudés étain). Une noue zinc soudée étain oscille entre 180 et 420 €/ml. Un abergement cheminée complet : 380-850 €. Devis personnalisé après diagnostic sur site.",
          },
          {
            question:
              "Quel est votre délai d'intervention à Arcachon ?",
            answer:
              "Notre atelier est à Mérignac (60 km, 1h de route). Nous organisons des journées d'intervention groupées sur Arcachon + Bassin pour optimiser déplacements. Pour un diagnostic : 3-5 jours. Pour un chantier : planification selon vos disponibilités. Pour une urgence fuite : 1h30 en heures ouvrées.",
          },
          {
            question:
              "Intervenez-vous sur les villas de la Ville d'Hiver ?",
            answer:
              "Oui, nous intervenons régulièrement sur le patrimoine Belle Époque de la Ville d'Hiver et des autres secteurs protégés d'Arcachon. Zinguerie patrimoniale soignée : ornements traditionnels, capotages compatibles ABF, respect strict de l'aspect d'origine. Dossiers ABF pris en charge si nécessaire.",
          },
          {
            question:
              "Les gouttières PVC ne suffiraient-elles pas à moindre coût ?",
            answer:
              "Non, à Arcachon particulièrement. Le PVC devient cassant sous l'action combinée de l'UV côtier intense et des cycles chaud/froid marins. Durée de vie réelle : 10-15 ans avec fissures et casse récurrentes. Le zinc marine dure 30-50 ans sans entretien. Sur la durée totale, le zinc revient moins cher.",
          },
          {
            question:
              "Faut-il un dossier ABF pour la zinguerie à Arcachon ?",
            answer:
              "Pour une réparation ou un remplacement à l'identique (même matériau, même aspect), aucune formalité. Pour tout changement d'aspect (matériau différent, teinte), déclaration préalable et parfois avis ABF selon la localisation (Ville d'Hiver, secteurs classés). Nous vérifions systématiquement et constituons les dossiers pour vous.",
          },
          {
            question:
              "Quelle garantie fournissez-vous ?",
            answer:
              "Garantie décennale (10 ans) sur l'ensemble de la prestation, obligation légale. Durabilité intrinsèque du zinc marine estimée à 30-50 ans sans entretien. Fiche technique matériaux + attestation d'assurance décennale + photos avant/après remises à la fin du chantier.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
