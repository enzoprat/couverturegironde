import type { Metadata } from 'next';
import { ServiceVillePageLayout } from '@/components/content/ServiceVillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('reparation-toiture-talence');

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
          service: 'reparation',
          villeSlug: 'talence',
          h1: (
            <>
              Réparation fuite toiture à{' '}
              <span className="text-[var(--color-terre)]">Talence</span> —
              échoppes tuile canal et bâti bourgeois
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac (9 km de Talence)',
            bio: "Je répare les toitures talençaises depuis 2005. Sur bâti patrimonial (échoppes tuile canal Thouars/Peixotto, maisons bourgeoises ardoise), mortier chaux OBLIGATOIRE. Intervention urgence 30-60 min heures ouvrées depuis Mérignac (9 km). Prise en charge démarches ABF si secteur classé.",
            badges: ['Depuis 2005', 'Décennale active', '5/5 sur 52 avis Google', 'Mortier chaux bâti ancien'],
          },

          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro: "Atelier à 9 km (20 min) de Talence via A630. Intervention 30-60 min en heures ouvrées.",
            horaires: [
              { jours: 'Lundi – Vendredi', heures: '6h00 – 22h00' },
              { jours: 'Samedi – Dimanche', heures: 'Urgences 7j/7' },
            ],
            mapEmbedUrl: 'https://www.google.com/maps?q=65+rue+de+Malbos+33700+M%C3%A9rignac&output=embed',
            itineraireUrl: 'https://www.google.com/maps/dir//65+rue+de+Malbos,+33700+M%C3%A9rignac',
          },
        heroSubtitle:
          "Réparation fuite toiture à Talence par artisan couvreur depuis 2005. Spécialiste échoppes bordelaises tuile canal, maisons bourgeoises ardoise, faîtages scellés chaux. Intervention 30-60 min depuis Mérignac (9 km). Devis 24h, garantie décennale.",
        presentation: (
          <>
            <p>
              Talence concentre un <strong>patrimoine bâti dense et
              architecturalement varié</strong> : échoppes bordelaises XIXᵉ en
              tuile canal, maisons bourgeoises quartiers Thouars et Peixotto,
              résidences universitaires années 60-90 sur le domaine
              universitaire. Chaque typologie a ses points faibles typiques
              qui provoquent des fuites : faîtage scellé mortier ciment qui
              fissure pour les échoppes, ardoises fatiguées pour le bâti
              bourgeois, étanchéité EPDM vieillie sur les toits-terrasses
              universitaires. Nous intervenons quotidiennement sur ces trois
              typologies.
            </p>
            <p>
              La <strong>densité urbaine talençaise</strong> ajoute des
              contraintes : rues étroites dans le vieux Talence, riverains à
              informer pour un échafaudage, occupation de voirie auprès des
              services municipaux. Nous prenons en charge l'intégralité de
              ces démarches administratives, vous n'avez qu'à signer le devis.
              Notre proximité géographique (9 km depuis Mérignac) permet une
              intervention urgence en 30-60 minutes en heures ouvrées, délai
              qu'aucune structure hors-métropole ne peut tenir.
            </p>
            <p>
              Sur les <strong>échoppes tuile canal traditionnelles</strong>,
              nous travaillons systématiquement au mortier de chaux pour les
              reprises de faîtage, compatible avec le bâti d'origine et
              respectueux du caractère patrimonial. Les tuiles cassées sont
              remplacées à l'identique (tuiles de récupération si nécessaire).
              Sur les <strong>maisons bourgeoises ardoise</strong>, chaque
              élément est reposé au clou cuivre ou inox pour éviter le
              claquage précoce. Sur les <strong>résidences EPDM</strong>, nous
              procédons par diagnostic photo complet et devis adapté format
              syndic.
            </p>
            <p>
              Côté tarifs, la mise hors d'eau d'urgence oscille entre{' '}
              <strong>280 et 650 € à Talence</strong>. La réparation
              définitive dépend de la cause : remplacement tuiles canal
              (180-480 €), faîtage scellé chaux (45-75 €/ml), reprise noue
              zinc (150-380 €/ml), abergement cheminée (380-850 €). Notre
              décennale couvre l'intégralité, la garantie constructeur
              matériaux s'ajoute pour les éléments manufacturés (Velux,
              gouttières).
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Spécialiste bâti ancien talençais',
            description:
              "Échoppes bordelaises, maisons de maître Peixotto, hôtels particuliers : nous travaillons ces typologies quotidiennement depuis 2005 avec les techniques traditionnelles (chaux, clous cuivre, zinc soudé étain).",
          },
          {
            title: 'Intervention urgence 30-60 min',
            description:
              "Depuis notre atelier de Mérignac (9 km), délai imbattable en heures ouvrées. Pour la nuit/week-end, message vocal + rappel prioritaire dès la première heure du jour suivant.",
          },
          {
            title: 'Démarches urbanistiques et voirie prises en charge',
            description:
              "Déclaration préalable, occupation temporaire de voirie (rues étroites, riverains), ABF si secteur sauvegardé : nous nous occupons de tout. Vous n'avez qu'à signer.",
          },
          {
            title: 'Compatibilité matériaux respectée',
            description:
              "Tuiles canal de récupération, mortier chaux, clous cuivre, zinc patiné : les matériaux utilisés respectent le caractère du bâti d'origine et évitent les patches visuellement criards.",
          },
          {
            title: 'Dossier assurance constitué',
            description:
              "Photos, devis, attestation décennale : nous fournissons systématiquement les éléments nécessaires à votre déclaration d'assurance en cas de sinistre couvert (tempête, chute d'arbre).",
          },
          {
            title: 'Copropriétés universitaires accompagnées',
            description:
              "Résidences quartier Peixotto, Médoquine, campus : format syndic maîtrisé, attestations, planning compatible AG, urgence acceptée en émergence avec régularisation.",
          },
        ],
        risques: [
          {
            title: "Fuite ignorée sur bâti ancien = dégât patrimonial",
            description:
              "Sur une échoppe XIXᵉ, une infiltration prolongée gorge d'eau le voligeage bois d'origine, imprègne l'isolant, fait apparaître des taches sur les plafonds moulurés. Restauration ensuite = plusieurs milliers d'euros.",
          },
          {
            title: 'Faîtage scellé qui fissure = infiltration linéaire',
            description:
              "Sur les échoppes talençaises, faîtage scellé au mortier ciment ancien qui fissure en tronçons complets. Sans intervention rapide, l'infiltration se répartit sur toute la longueur = charpente entière fragilisée.",
          },
          {
            title: 'Bâchage temporaire non pérenne',
            description:
              "Une bâche fixée par le propriétaire s'envole au premier coup de vent, l'eau reprend. Mise hors d'eau professionnelle tient plusieurs mois si nécessaire.",
          },
          {
            title: 'Réparation sans respect matériau = valeur immo baisse',
            description:
              "Un patch tuile mécanique moderne sur une échoppe tuile canal ancienne = signal négatif immédiat pour un acheteur potentiel sur le marché talençais tendu.",
          },
        ],
        methode: [
          {
            title: 'Appel et description au téléphone',
            description:
              "Décrivez ce que vous observez (photos bienvenues au 07 68 69 78 48). Nous évaluons l'urgence et planifions immédiatement une intervention.",
          },
          {
            title: 'Mise hors d\u2019eau si nécessaire',
            description:
              "Bâche professionnelle fixée, sécurisation, protection intérieure. Cette étape n'est pas facturée séparément si le devis de réparation est signé dans la foulée.",
          },
          {
            title: 'Diagnostic complet',
            description:
              "Inspection de toute la toiture, pas seulement la zone signalée. Identification de la vraie cause, repérage des points faibles associés. Rapport photo écrit.",
          },
          {
            title: 'Devis chiffré sous 24-48h',
            description:
              "Devis ligne par ligne : matériaux, main d'œuvre, sécurité, occupation voirie si nécessaire. Choix possible entre réparation minimale et reprise complète.",
          },
          {
            title: 'Exécution avec matériaux d\u2019origine',
            description:
              "Tuiles canal récupérées, mortier chaux, clous cuivre, soudure étain sur place. Techniques traditionnelles respectueuses du bâti talençais.",
          },
          {
            title: 'Réception et garantie décennale',
            description:
              "Visite fin de chantier, photos avant/après, attestation décennale, conseils prévention. Solde à votre validation confirmée.",
          },
        ],
        faqLocale: [
          {
            question:
              "Quel est votre délai d'intervention urgence à Talence ?",
            answer:
              "Depuis notre atelier de Mérignac (9 km), nous atteignons Talence en 30 à 60 minutes en heures ouvrées pour une mise hors d'eau. Pour les urgences nuit/week-end, laissez message vocal au 07 68 69 78 48 : rappel prioritaire dès la première heure du jour suivant.",
          },
          {
            question:
              "Ma maison a plus de 100 ans, peut-elle être réparée à l'identique ?",
            answer:
              "Oui, c'est même notre spécialité sur Talence. Restauration tuile canal traditionnelle, conservation du caractère ancien, reprise des faîtages au mortier chaux compatible bâti ancien, remplacement éventuel des tuiles cassées avec des modèles assortis. Nous fournissons des tuiles de récupération si nécessaire.",
          },
          {
            question:
              "Faut-il l'avis de l'ABF pour réparer ma toiture à Talence ?",
            answer:
              "Pour une réparation à l'identique (même matériau, même teinte, même pente), aucune formalité n'est requise. Pour un changement d'aspect (nouveau matériau, couleur différente), déclaration préalable de travaux obligatoire. Certains secteurs de Talence (proximité parc Peixotto, abords monuments) peuvent être soumis à l'ABF. Nous vérifions systématiquement.",
          },
          {
            question:
              "Combien coûte une réparation typique à Talence ?",
            answer:
              "Mise hors d'eau d'urgence : 280-650 €. Remplacement de 5-10 tuiles canal : 180-480 €. Reprise faîtage scellé chaux : 45-75 €/ml. Reprise noue zinc soudée étain : 150-380 €/ml. Abergement cheminée : 380-850 €. Diagnostic complet gratuit si chantier signé.",
          },
          {
            question:
              "Mon échoppe est en secteur ABF, pouvez-vous intervenir ?",
            answer:
              "Oui, nous connaissons parfaitement les contraintes ABF sur Talence et Bordeaux Centre. Pour une réparation à l'identique, pas de dossier ABF. Pour tout changement (Velux, matériau différent), nous constituons le dossier ABF et attendons l'avis avant travaux. Délai administratif : 2-4 mois selon secteur.",
          },
          {
            question:
              "Intervenez-vous en copropriété universitaire à Talence ?",
            answer:
              "Oui, nous travaillons régulièrement en copropriétés talençaises (résidences quartier Peixotto, Médoquine, campus). Format syndic maîtrisé : devis adapté, attestations d'assurance, planning compatible AG. Urgence fuite avant AG : commande d'émergence acceptée avec régularisation ensuite.",
          },
          {
            question:
              "Ma toiture ardoise a 80 ans, faut-il tout refaire ?",
            answer:
              "Pas nécessairement. Une ardoise naturelle bien posée d'origine peut atteindre 100-120 ans si l'entretien a été régulier. Une réparation ponctuelle (remplacement ardoises cassées, reprise clous fatigués, contrôle voligeage) prolonge souvent la couverture de 20-30 ans. Diagnostic sur site pour évaluer honnêtement.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
