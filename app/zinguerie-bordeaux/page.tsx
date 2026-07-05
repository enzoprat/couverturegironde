import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('zinguerie-bordeaux');

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
        service: 'zinguerie',
        slug: PAGE.slug,
        h1: (
          <>
            Zinguerie{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> — pose
            gouttière + noue + chéneau, soudure étain sur place
          </>
        ),
        heroSubtitle:
          "Pose et rénovation de gouttières zinc, chéneaux, noues, descentes et capotages par artisan zingueur depuis 2005. Soudure étain sur place (durabilité 30-50 ans), dimensionnement adapté pluviométrie girondine 930 mm/an. Devis chiffré ligne par ligne sous 24h.",
        shortTitle: 'Zinguerie',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
          bio: "Je fais de la zinguerie sur mesure depuis 2005. Nous préparons les pièces à l'atelier au 65 rue de Malbos (découpe, pliage) puis assurons la pose et la soudure à l'étain sur place — technique traditionnelle qui donne une durabilité de 30-50 ans sans reprise. Pas de mastic, pas de joints silicone qui se dégradent en 5-8 ans.",
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
              La zinguerie est l'art d'évacuer l'eau de votre toiture et de
              finir les jonctions avec les murs et les ouvertures. Mal faite,
              elle est invisible jusqu'au jour où elle déborde et tache vos
              façades. Bien faite, elle dure 30 à 50 ans sans entretien et
              valorise immédiatement le bâti.
            </p>
            <p>
              <strong>
                À Bordeaux, le zinc reste la référence absolue pour les
                échoppes, les maisons bourgeoises et les bâtisses anciennes
              </strong>
              . Sa patine naturelle, sa durabilité et sa compatibilité avec
              tous les matériaux de couverture en font le choix par défaut des
              architectes des bâtiments de France et des couvreurs sérieux.
            </p>
            <p>
              Notre atelier travaille toutes les configurations : gouttières
              demi-rondes traditionnelles, gouttières havraises, chéneaux
              encaissés, descentes carrées ou rondes, noues, raccords muraux,
              habillages de souches de cheminée, abergements de Velux. Nous
              soudons à l'étain sur place pour les jonctions exposées —
              garantie d'étanchéité supérieure à n'importe quel collage.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Zinc naturel ou prépatiné selon contexte',
            description:
              "Zinc naturel qui se patine sur 2-3 ans pour bâti traditionnel. Prépatiné anthracite pour rendu contemporain immédiat. Choix conseillé selon le style de votre maison et l'environnement.",
          },
          {
            title: 'Soudure étain sur place',
            description:
              "Toutes les jonctions critiques sont soudées à l'étain sur le chantier. Étanchéité supérieure et durable, contrairement aux assemblages collés ou clipsés qui finissent par lâcher.",
          },
          {
            title: 'Dimensionnement adapté à la pluviométrie',
            description:
              "À Bordeaux, la pluie peut tomber très intense lors d'épisodes orageux. Nous dimensionnons gouttières et descentes selon la surface réelle de toiture pour éviter tout débordement.",
          },
          {
            title: 'Respect du bâti ancien',
            description:
              "Pour les échoppes et bâtisses bordelaises, nous travaillons dans le respect des codes architecturaux : gouttières demi-rondes Ø 25, descentes carrées 80x80 ou rondes Ø 80 selon usage local.",
          },
          {
            title: 'Garantie 30 ans matériau',
            description:
              "Le zinc bien posé a une durée de vie de 30 à 50 ans. Notre garantie décennale couvre la pose ; le matériau est garanti par le fabricant pour 30 ans minimum.",
          },
        ],
        risques: [
          {
            title: 'PVC qui durcit et craque',
            description:
              "Les gouttières PVC perdent leur élasticité en 10-15 ans à cause des UV. Elles craquent, lâchent leurs fixations et déversent l'eau le long des murs. Le PVC est faux ami en zone exposée.",
          },
          {
            title: 'Coulures noires sur les façades',
            description:
              "Une zinguerie défaillante laisse l'eau ruisseler le long des murs. Les coulures noires sur la pierre bordelaise sont presque impossibles à nettoyer une fois installées.",
          },
          {
            title: 'Infiltrations en pied de mur',
            description:
              "L'eau qui déborde des gouttières crée des infiltrations en pied de mur et dans les fondations. Humidité chronique, salpêtre, dégâts d'enduit, chaîne de dommages très coûteuse.",
          },
          {
            title: 'Mauvaise évacuation en cas d\u2019orage',
            description:
              "Une gouttière sous-dimensionnée déborde dès la première pluie intense. Vos voisins, votre jardin, vos plantations, tout en pâtit. Le dimensionnement est non négociable.",
          },
        ],
        methode: [
          {
            title: 'Visite et relevé',
            description:
              "Mesure précise de la surface de toiture, identification des contraintes (alignement existant, contraintes ABF si secteur sauvegardé), choix esthétique selon votre bâti.",
          },
          {
            title: 'Devis matériau et finitions',
            description:
              "Détail du devis : type de zinc (naturel/prépatiné), section gouttière, dimensionnement descentes, points de jonction soudée. Aucune zone grise.",
          },
          {
            title: 'Préparation des éléments',
            description:
              "Découpe et pliage en atelier de la majorité des éléments aux cotes exactes. Gain de temps sur chantier, précision augmentée.",
          },
          {
            title: 'Pose des supports',
            description:
              "Installation des crochets ou colliers avec respect strict de la pente d'écoulement (1 cm par mètre minimum). Espacement régulier pour éviter toute déformation à long terme.",
          },
          {
            title: 'Pose et soudure sur place',
            description:
              "Pose des éléments, soudure étain des jonctions critiques, ajustement des descentes. Test à l'eau immédiat pour valider l'écoulement.",
          },
          {
            title: 'Finitions et nettoyage',
            description:
              "Pose des bouchons et finitions décoratives (rosaces, ornements éventuels). Nettoyage complet du chantier. Photos et garantie remises.",
          },
        ],

        // ————————————————————————————————————————————————
        // TARIFS ZINGUERIE
        // ————————————————————————————————————————————————
        tarifs: {
          intro:
            "Fourchettes 2026 pour les prestations de zinguerie sur Bordeaux Métropole. Zinc naturel VMZINC (ou équivalent qualité France/Belgique), soudure étain sur place. Dimensionnement adapté à la pluviométrie girondine (930 mm/an, orages d'été jusqu'à 30-50 mm/h).",
          lines: [
            {
              service: 'Pose gouttière zinc section standard (25)',
              range: '50 – 75 €/ml',
              note: 'Convient pavillonnaire standard',
            },
            {
              service: 'Pose gouttière zinc section renforcée (33)',
              range: '65 – 95 €/ml',
              note: 'Recommandé versants pentus + coteaux',
            },
            {
              service: 'Pose gouttière zinc section forte (40)',
              range: '85 – 130 €/ml',
              note: 'Grand versant ou orages fréquents',
            },
            {
              service: 'Descente EP zinc Ø 80 mm',
              range: '55 – 85 €/ml',
              note: 'Standard pavillonnaire',
            },
            {
              service: 'Descente EP zinc Ø 100 mm',
              range: '75 – 115 €/ml',
              note: 'Recommandé si gouttière section 33+',
            },
            {
              service: 'Chéneau zinc soudé étain',
              range: '80 – 140 €/ml',
              note: 'Bâti ancien, écoulement encastré',
            },
            {
              service: 'Noue zinc soudée étain',
              range: '95 – 165 €/ml',
              note: 'Selon section et accessibilité',
            },
            {
              service: 'Réparation noue zinc percée',
              range: '180 – 420 €/ml',
              note: 'Soudure étain in situ si récupérable',
            },
            {
              service: 'Capotage rive zinc soudé',
              range: '55 – 90 €/ml',
              note: 'Étanchéité point d\u2019arrêt latéral',
            },
            {
              service: 'Abergement cheminée complet',
              range: '380 – 850 €',
              note: 'Zinc soudé sur place, étanchéité 30 ans',
            },
            {
              service: 'Zinc prépatiné (anthra-zinc / quartz-zinc)',
              range: '+15 – 25 %',
              note: 'Aspect vieilli dès la pose',
            },
            {
              service: 'Diagnostic + rapport photo',
              range: '0 – 180 €',
              note: 'Gratuit si chantier signé',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, sécurité incluse. Zinc VMZINC ou équivalent qualité France/Belgique. Décennale active + durabilité intrinsèque zinc soudé étain 30-50 ans sans reprise. Bord de mer (Bassin d'Arcachon) : zinc marine prépatiné obligatoire, supplément +20 %.",
        },

        // ————————————————————————————————————————————————
        // FAQ ZINGUERIE-FOCUSED (10 questions ICP)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "Combien coûte la pose de gouttières zinc à Bordeaux en 2026 ?",
            answer:
              "Fourchettes 2026 : section standard (25) 50-75 €/ml, section renforcée (33) 65-95 €/ml, section forte (40) 85-130 €/ml. Descentes EP : Ø 80 mm 55-85 €/ml, Ø 100 mm 75-115 €/ml. Pour une maison type avec 30 ml de gouttières + 12 ml de descentes : 2 100-3 700 € TTC selon section. Zinc VMZINC ou équivalent qualité, soudure étain sur place. Diagnostic gratuit si chantier signé.",
          },
          {
            question:
              "Pourquoi du zinc plutôt que du PVC ?",
            answer:
              "Le PVC devient cassant sous l'action UV et cycles chaud-froid : durée de vie réelle 10-15 ans avec fissures récurrentes. Le zinc-titane forme une patine protectrice (carbonate de zinc) qui le rend inaltérable, durée de vie 30-50 ans SANS entretien. Sur la durée totale, le zinc revient moins cher au m2 par an. Sur bâti patrimonial (échoppes bordelaises, Chartrons, Bouscat), le zinc est aussi le seul matériau compatible avec l'esthétique.",
          },
          {
            question:
              "Section 25, 33 ou 40 — comment choisir ?",
            answer:
              "Trois critères : (1) surface du versant (>80 m² = section 33 minimum), (2) pente (versant pentu >45° = ruissellement rapide, section 33+), (3) pluviométrie locale (Bordeaux 930 mm/an + orages estivaux 30-50 mm/h = section 33 recommandée par défaut). Sur les coteaux (Cenon, quartiers pentus Talence) ou grands versants, section 40. Sous-dimensionner = débordements récurrents à chaque gros orage.",
          },
          {
            question:
              "Soudure étain ou mastic — quelle différence ?",
            answer:
              "Soudure étain = fusion mécanique du zinc, étanchéité PERMANENTE 30-50 ans sans reprise. Mastic ou joints silicone = étanchéité temporaire qui se dégrade en 5-8 ans en climat girondin humide + UV. Sur bord de mer (Bassin d'Arcachon), le mastic tient 3-5 ans max. Nous soudons TOUJOURS les jonctions et raccords descentes. C'est la technique traditionnelle du couvreur-zingueur, celle qui distingue un travail durable d'une pose cosmétique.",
          },
          {
            question:
              "Zinc naturel ou prépatiné (anthra-zinc) — lequel choisir ?",
            answer:
              "Zinc naturel : brillant à la pose, patine grise-mate en 2-5 ans (carbonate de zinc). Moins cher. Choix classique pour bâti pavillonnaire. Zinc prépatiné (anthra-zinc anthracite, quartz-zinc gris clair) : aspect vieilli DÈS la pose, harmonie immédiate avec bâti patrimonial. Coût +15-25 %. Choix préconisé sur Chartrons, Bouscat, quartiers patrimoniaux Bordeaux où la patine du zinc naturel serait visible pendant 2-5 ans.",
          },
          {
            question:
              "Quel délai pour poser des gouttières neuves ?",
            answer:
              "Diagnostic sur site sous 48h ouvrées, devis chiffré sous 24h après visite. Chantier planifié 1-3 semaines selon disponibilité et délai de commande zinc (7-10 jours pour zinc standard, 15-20 jours pour prépatiné spécifique). Durée pose : maison type 30 ml de gouttières + 12 ml descentes = 1-2 jours atelier + 1-2 jours pose.",
          },
          {
            question:
              "Faut-il repeindre les gouttières zinc ?",
            answer:
              "Non, jamais. Le zinc-titane forme une patine protectrice naturelle qui le rend inaltérable sans entretien. Peindre du zinc empêche la formation de la patine et provoque paradoxalement une oxydation accélérée sous la peinture. Si vous voulez un aspect spécifique (couleur ou aspect vieilli), utilisez du zinc prépatiné dès la pose. Les gouttières PVC peintes en revanche perdent leur peinture en 3-5 ans — encore un argument pour le zinc.",
          },
          {
            question:
              "Intervenez-vous sur le Bassin d'Arcachon ?",
            answer:
              "Oui. L'air salin du Bassin oxyde rapidement le zinc standard : nous utilisons EXCLUSIVEMENT du zinc marine prépatiné anti-air-salin sur Arcachon, Pyla, Moulleau, Pereire, La Teste. Coût +20 % vs zinc standard, mais résistance 30-50 ans conservée. Notre atelier étant à Mérignac (60 km, 1h de route), nous organisons des journées d'intervention groupées Bassin pour maîtriser les coûts. Voir notre page /zinguerie-arcachon.",
          },
          {
            question:
              "Comment vérifier votre décennale ?",
            answer:
              "Nous joignons systématiquement notre attestation décennale à chaque devis, avec dates de validité. Un artisan qui rechigne à fournir ce document cache probablement une décennale périmée ou absente — refusez de signer. Sans décennale, aucun recours en cas de sinistre post-chantier (fuite au niveau d'une jonction non étanche).",
          },
          {
            question:
              "Quelle garantie sur la zinguerie ?",
            answer:
              "Décennale (10 ans) sur l'ensemble de la prestation, obligation légale. Durabilité intrinsèque zinc soudé étain estimée à 30-50 ans SANS reprise. Fiche technique matériaux VMZINC (ou équivalent) + attestation d'assurance + photos avant/après remises en fin de chantier. Si une jonction soudée présente une fuite dans les 10 ans, nous revenons.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
