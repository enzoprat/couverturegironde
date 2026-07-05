import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('capotage-toiture-bordeaux');

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
            Capotage toiture{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> — rives,
            faîtages, jonctions zinc soudé étain
          </>
        ),
        heroSubtitle:
          "Capotage sur mesure en zinc naturel ou prépatiné, soudure étain sur place (durabilité 30-50 ans). Rives latérales, faîtages, abergements cheminées, jonctions maçonnerie. Découpe et pliage à l'atelier Mérignac. Devis chiffré ligne par ligne sous 24h.",
        shortTitle: 'Capotage toiture',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
          bio: "Le capotage est un savoir-faire de zingueur pur. Depuis 2005, je réalise capotages rives + faîtages + abergements sur le bâti bordelais : découpe et pliage à l'atelier de Mérignac, pose et soudure ÉTAIN sur place. Pas de mastic, pas de joints silicone — ces techniques amateur tiennent 5-8 ans max en climat girondin. Un capotage zinc soudé étain tient 30-50 ans sans reprise.",
          badges: [
            'Depuis 2005',
            'Décennale active',
            '5/5 sur 52 avis Google',
            'Soudure étain sur place',
          ],
        },
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

        // ————————————————————————————————————————————————
        // FAQ CAPOTAGE-FOCUSED (10 questions techniques)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "Qu'est-ce qu'un capotage de toiture concrètement ?",
            answer:
              "Un capotage désigne l'ensemble des habillages zinc qui PROTÈGENT LES POINTS D'ARRÊT de la couverture — là où la toiture se termine ou se raccorde à un élément vertical (mur, cheminée, souche). Types : capotage rive (bord latéral), capotage faîtage (ligne haute), abergement cheminée (autour souche), capotage jonction mur mitoyen. Un capotage bien exécuté = étanchéité durable des jonctions, points faibles typiques de toute couverture.",
          },
          {
            question:
              "Combien coûte un capotage à Bordeaux en 2026 ?",
            answer:
              "Fourchettes 2026 : capotage rive latérale zinc soudé 55-90 €/ml, capotage faîtage zinc couronnement 65-105 €/ml, capotage rive complexe (angle, saillie) 80-130 €/ml, abergement cheminée complet 380-850 €, capotage jonction mur mitoyen 55-95 €/ml, capotage lucarne/chatière 180-480 €. Zinc prépatiné (anthra-zinc, quartz-zinc) : +15-25 %. Devis personnalisé après visite.",
          },
          {
            question:
              "Soudure étain ou mastic pour mon capotage ?",
            answer:
              "SOUDURE ÉTAIN OBLIGATOIRE. La soudure = fusion mécanique du zinc, étanchéité PERMANENTE 30-50 ans sans reprise. Le mastic ou silicone se dégrade en 5-8 ans en climat girondin humide + UV. En bord de mer (Arcachon), le mastic tient 3-5 ans max. Un capotage collé au mastic est un capotage cosmétique, pas durable. Nous soudons TOUJOURS.",
          },
          {
            question:
              "Zinc naturel ou prépatiné pour mon capotage ?",
            answer:
              "Dépend du bâti et de la visibilité. ZINC NATUREL : brillant à la pose, patine grise-mate en 2-5 ans (carbonate de zinc). Choix classique pavillonnaire. ZINC PRÉPATINÉ (anthra-zinc anthracite, quartz-zinc gris clair) : aspect vieilli DÈS la pose, harmonie immédiate avec bâti patrimonial. Coût +15-25 %. Sur Chartrons, Bouscat, quartiers patrimoniaux Bordeaux : prépatiné préconisé.",
          },
          {
            question:
              "Puis-je remplacer mon capotage acier galvanisé par du zinc ?",
            answer:
              "OUI, et c'est même fortement recommandé. Un capotage acier galvanisé standard se dégrade rapidement en climat girondin : traces de rouille en 5 ans, perforation en 10. Le zinc-titane résiste 30-50 ans dans les mêmes conditions. Sur la durée totale, le zinc revient MOINS CHER au m² par an. Nous remplaçons régulièrement des capotages acier galvanisé par zinc soudé étain.",
          },
          {
            question:
              "Faut-il une autorisation pour poser un capotage ?",
            answer:
              "Pour un remplacement à l'identique (même matériau, même aspect), aucune formalité. Pour un changement de matériau (galvanisé → zinc) ou de couleur (naturel → prépatiné), déclaration préalable de travaux généralement requise. En secteur UNESCO Bordeaux Centre ou périmètre ABF (Chartrons, abords monuments), l'avis ABF est demandé. Nous vérifions et constituons les dossiers pour vous.",
          },
          {
            question:
              "Comment se déroule un chantier de capotage ?",
            answer:
              "Étapes : (1) diagnostic + prise de mesures précises sur site, (2) devis chiffré sous 24h, (3) découpe et pliage à l'atelier de Mérignac aux dimensions exactes, (4) sécurisation + pose sur site avec ajustement précis, (5) soudure étain de chaque raccord avec chalumeau, (6) test d'étanchéité par aspersion. Durée typique : chantier standard 1-2 jours atelier + 1 jour pose.",
          },
          {
            question:
              "Un capotage nécessite-t-il de l'entretien ?",
            answer:
              "NON, aucun entretien. Le zinc-titane forme une patine protectrice naturelle qui le rend inaltérable. NE PAS PEINDRE (empêche la formation de la patine et provoque une oxydation accélérée). Un capotage zinc soudé étain bien posé tient 30-50 ans sans aucune intervention.",
          },
          {
            question:
              "Bord de mer (Arcachon) : zinc marine obligatoire ?",
            answer:
              "OUI. En air salin direct (Le Pyla, Pereire, Moulleau), zinc marine PRÉPATINÉ anti-air-salin obligatoire. Coût +20 % vs zinc standard, mais durabilité 30-50 ans conservée. Un zinc standard en bord de mer subit une oxydation accélérée sans la patine protectrice classique — dégradation 5-10 ans au lieu de 30-50. Voir notre page /zinguerie-arcachon.",
          },
          {
            question:
              "Quelle garantie sur le capotage ?",
            answer:
              "Décennale (10 ans) sur l'ensemble de la prestation, obligation légale. Durabilité intrinsèque du zinc soudé étain estimée à 30-50 ans SANS reprise. Fiche technique matériaux VMZINC (ou équivalent qualité France/Belgique) + attestation d'assurance + photos avant/après remises en fin de chantier.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
