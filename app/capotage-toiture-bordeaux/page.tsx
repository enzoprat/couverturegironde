import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('capotage-toiture-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'reparation',
        slug: PAGE.slug,
        h1: (
          <>
            Capotage toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            étanchéité rives, faîtages et jonctions zinc
          </>
        ),
        heroSubtitle:
          "Capotage toiture à Bordeaux par artisan couvreur-zingueur depuis 2005. Réalisation de capotages sur mesure en zinc soudé étain pour rives, faîtages, jonctions maçonnerie et éléments saillants. Étanchéité 30 ans, décennale, devis gratuit sous 24h.",
        shortTitle: 'Capotage toiture',
        presentation: (
          <>
            <p>
              Le <strong>capotage de toiture</strong> désigne l'ensemble des
              habillages zinc qui protègent les points d'arrêt de la
              couverture : rives latérales, faîtages, jonctions avec les
              maçonneries (murs, cheminées, souches), éléments saillants
              (lucarnes, chatières). Un capotage bien exécuté est ce qui
              garantit l'étanchéité durable de votre toiture aux jonctions,
              qui sont les points faibles typiques de toute couverture. Sur
              Bordeaux, où le climat océanique impose des sollicitations
              hydriques élevées (930 mm/an) et où le bâti mêle échoppes tuile
              canal traditionnelles et construction contemporaine, la qualité
              du capotage est déterminante.
            </p>
            <p>
              Nous réalisons nos capotages en <strong>zinc naturel ou
              prépatiné</strong>, avec soudure à l'étain sur place pour les
              raccords et les descentes. La soudure étain, contrairement au
              collage ou aux mastics, offre une <strong>étanchéité
              permanente</strong> qui traverse les décennies sans reprise
              nécessaire. C'est la technique traditionnelle du couvreur-
              zingueur, celle qui distingue un travail durable d'une pose
              cosmétique. Notre atelier est équipé pour la découpe et le
              pliage sur mesure, ce qui permet une adaptation parfaite à
              chaque configuration de toiture bordelaise.
            </p>
            <p>
              Les <strong>situations les plus courantes</strong> de capotage
              sur Bordeaux Métropole : rives latérales des échoppes tuile
              canal du centre (Chartrons, Saint-Augustin, Caudéran), faîtages
              droits ou en pente sur pavillons Mérignac/Pessac/Talence,
              abergements de cheminées maçonnées avec habillage complet
              zinc, jonctions murs mitoyens sur bâti mitoyen dense, et
              capotages de dômes ou coupoles sur maisons de maître Bouscat/
              Chartrons. Chaque situation demande un dimensionnement et une
              technique différente : nous ne posons jamais un capotage
              standard.
            </p>
            <p>
              Côté <strong>tarifs</strong>, comptez 55 à 130 €/ml pour un
              capotage zinc dimensionné selon la configuration (largeur,
              pente, complexité des raccords). Un abergement complet de
              cheminée maçonnée oscille entre 380 et 850 € selon les
              dimensions. Les capotages spéciaux (dômes, coupoles, éléments
              d'ornements) sont chiffrés sur mesure après visite. Toutes nos
              interventions sont couvertes par notre décennale (10 ans),
              avec une durabilité intrinsèque du zinc soudé estimée à 30-50
              ans sans reprise.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Zinc naturel ou prépatiné, jamais galvanisé',
            description:
              "Le zinc-titane naturel patine avec le temps et devient inaltérable. Le prépatiné offre l'aspect vieilli dès la pose. Nous n'utilisons pas d'acier galvanisé qui se dégrade en 5-10 ans.",
          },
          {
            title: 'Soudure à l\u2019étain sur place',
            description:
              "Étanchéité permanente qui traverse les décennies sans reprise. Contrairement au mastic ou aux joints d'étanchéité qui se dégradent en 5-8 ans, la soudure étain tient 30-50 ans.",
          },
          {
            title: 'Découpe et pliage atelier sur mesure',
            description:
              "Notre atelier Mérignac est équipé pour la découpe et le pliage adaptés à chaque configuration. Aucun capotage standard qui laisse des jours ou des raccords approximatifs.",
          },
          {
            title: "Compatibilité tuile canal, ardoise, zinc",
            description:
              "Nous adaptons le raccordement du capotage au matériau de couverture existant : tuile canal du bâti ancien, tuile mécanique, ardoise, zinc préexistant. Aucun patch visuellement criard.",
          },
          {
            title: 'Diagnostic + devis gratuit sous 24h',
            description:
              "Visite technique gratuite, mesures précises, devis chiffré ligne par ligne. Vous savez exactement ce qui sera fait, avec quels matériaux, et combien.",
          },
          {
            title: 'Garantie décennale + durabilité 30 ans',
            description:
              "Couverture décennale légale + durabilité intrinsèque du zinc soudé estimée à 30-50 ans. C'est l'investissement le plus durable qu'on puisse faire sur une toiture.",
          },
        ],
        risques: [
          {
            title: 'Capotage manquant = infiltration en rive',
            description:
              "Sur une échoppe bordelaise sans capotage de rive, la pluie et le vent d'ouest s'infiltrent progressivement sous la première tuile latérale. Résultat : voligeage gorgé, mousses en sous-face, cassures.",
          },
          {
            title: "Habillage mastic = reprise tous les 5-8 ans",
            description:
              "Certains poseurs remplacent la soudure étain par du mastic ou du joint silicone : économie apparente à la pose, mais reprise complète nécessaire tous les 5-8 ans. Coût total supérieur.",
          },
          {
            title: 'Acier galvanisé qui rouille en 5-10 ans',
            description:
              "Un capotage acier galvanisé standard se dégrade rapidement en climat girondin humide. Trâces de rouille en 5 ans, perforation en 10. Le zinc résiste 30-50 ans dans les mêmes conditions.",
          },
          {
            title: 'Faîtage sans capotage = envolage tempête',
            description:
              "Un faîtage traditionnel (tuiles faîtières scellées mortier) peut se disloquer par section entière lors d'une tempête. Un capotage zinc soudé en couronnement supprime totalement ce risque.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic et prise de mesures',
            description:
              "Visite sur site, identification des points à capoter, mesures précises (longueurs, largeurs, angles, saillies). Photos et schémas.",
          },
          {
            title: 'Choix matériau et devis',
            description:
              "Zinc naturel ou prépatiné, épaisseur adaptée (0.65 mm standard, 0.8 mm renforcé). Devis détaillé sous 24h, options claires.",
          },
          {
            title: 'Découpe et pliage atelier',
            description:
              "Réalisation des pièces de capotage à l'atelier Mérignac aux dimensions précises relevées. Pas de découpe grossière sur site.",
          },
          {
            title: 'Sécurisation et pose',
            description:
              "Installation échafaudage si nécessaire, sécurisation zone. Pose progressive avec ajustement précis pour chaque raccord.",
          },
          {
            title: 'Soudure étain sur place',
            description:
              "Soudure des raccords à l'étain avec chalumeau adapté. Contrôle qualité de chaque soudure. Test d'étanchéité par aspersion si opportun.",
          },
          {
            title: 'Réception et garantie',
            description:
              "Photos avant/après, attestation décennale, conseils entretien (aucun entretien nécessaire sur zinc). Solde à votre validation.",
          },
        ],
        tarifs: {
          intro:
            "Fourchettes de prix constatées sur Bordeaux Métropole en 2026 pour les prestations de capotage zinc. Le tarif final dépend de la configuration (longueur, complexité des raccords, accessibilité) et de l'épaisseur du zinc choisie.",
          lines: [
            {
              service: 'Capotage rive latérale zinc soudé',
              range: '55 – 90 €/ml',
              note: 'Standard pour échoppes bordelaises',
            },
            {
              service: 'Capotage faîtage zinc couronnement',
              range: '65 – 105 €/ml',
              note: 'Alternative au faîtage scellé traditionnel',
            },
            {
              service: 'Capotage rive complexe (angle, saillie)',
              range: '80 – 130 €/ml',
              note: 'Découpe atelier sur mesure',
            },
            {
              service: 'Abergement cheminée complet',
              range: '380 – 850 €',
              note: 'Selon dimensions et complexité',
            },
            {
              service: 'Capotage jonction mur mitoyen',
              range: '55 – 95 €/ml',
              note: 'Bâti mitoyen dense centre Bordeaux',
            },
            {
              service: 'Capotage lucarne / chatière',
              range: '180 – 480 €',
              note: 'Forfait selon dimension et forme',
            },
            {
              service: 'Capotage dôme / coupole',
              range: 'Sur devis',
              note: 'Éléments d\u2019ornement patrimoniaux',
            },
            {
              service: 'Zinc prépatiné anthra-zinc (option teinte)',
              range: '+15 – 25 %',
              note: 'Aspect vieilli dès la pose',
            },
            {
              service: 'Diagnostic + devis (sans chantier)',
              range: '0 – 180 €',
              note: 'Gratuit si chantier signé',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, sécurité incluse. Zinc VMZINC ou équivalent qualité France/Belgique. Échafaudage spécifique et hauteur >12 m sur devis. Décennale + durabilité intrinsèque zinc soudé 30-50 ans.",
        },
        quartiersBordeaux: {
          intro:
            "Le capotage est particulièrement critique sur le bâti ancien bordelais où les rives, faîtages et abergements de cheminées sont les points faibles typiques. Chaque quartier a son profil.",
          items: [
            {
              nom: 'Bordeaux Centre',
              description:
                "Échoppes XIXᵉ et immeubles haussmanniens : capotages patrimoniaux avec respect ABF. Zinc prépatiné souvent préconisé.",
              href: '/couvreur-bordeaux-centre',
            },
            {
              nom: 'Chartrons',
              description:
                "Maisons d'armateurs et hôtels particuliers : capotages complexes sur toitures ardoise ou zinc historique.",
              href: '/couvreur-bordeaux-chartrons',
            },
            {
              nom: 'Caudéran',
              description:
                "Échoppes tuile canal + pavillonnaire XXe : capotages rives et faîtages sur bâti années 1920-1960.",
              href: '/couvreur-bordeaux-cauderan',
            },
            {
              nom: 'Saint-Augustin',
              description:
                "Échoppes bien préservées : capotages rive latérale respectant l'esthétique bordelaise traditionnelle.",
              href: '/couvreur-bordeaux-saint-augustin',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune : intervention sans surcoût déplacement, atelier sur place pour découpe et pliage.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Pavillonnaire dense + copropriétés : capotages faîtages en complément de réparation faîtage traditionnel.",
              href: '/couvreur-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Échoppes patrimoniales + maisons bourgeoises : capotages soignés compatibles bâti ancien.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Le Bouscat',
              description:
                "Quartier patrimonial cossu : capotages zinc prépatiné pour préserver l'aspect vieilli des toitures d'origine.",
              href: '/couvreur-bouscat',
            },
            {
              nom: 'Cenon rive droite',
              description:
                "Coteaux et bâti ancien Haut Cenon : capotages renforcés pour l'exposition aux vents d'ouest.",
              href: '/couvreur-cenon',
            },
          ],
        },
      }}
    />
  );
}
