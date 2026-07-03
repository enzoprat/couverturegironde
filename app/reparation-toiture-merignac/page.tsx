import type { Metadata } from 'next';
import { ServiceVillePageLayout } from '@/components/content/ServiceVillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('reparation-toiture-merignac');

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
        service: 'reparation',
        villeSlug: 'merignac',
        h1: (
          <>
            Réparation fuite toiture à{' '}
            <span className="text-[var(--color-terre)]">Mérignac</span> —
            intervention 15-30 min depuis rue de Malbos
          </>
        ),
        heroSubtitle:
          "Réparation fuite toiture à Mérignac par artisan couvreur historique de la commune depuis 2005. Notre atelier est au 65 rue de Malbos : intervention 15-30 min en heures ouvrées. Tuiles cassées, faîtage, gouttières, abergements. Devis gratuit sous 24h.",
        presentation: (
          <>
            <p>
              Mérignac est <strong>notre commune</strong>. Notre atelier est
              au 65 rue de Malbos depuis 2005, ce qui nous permet une{' '}
              <strong>intervention en 15 à 30 minutes</strong> en heures
              ouvrées sur toute la commune — délai qu'aucune structure
              extérieure ne peut tenir. Cette proximité change tout en cas de
              fuite déclarée : là où une entreprise bordelaise met 45-75
              minutes à traverser la rocade, nous sommes déjà sur place à
              évaluer et sécuriser.
            </p>
            <p>
              Le <strong>bâti merignacais</strong> présente des typologies
              variées avec leurs points faibles associés. Les quartiers
              pavillonnaires (Capeyron, Beutre, Bourranville, Pichey)
              concentrent de la <strong>tuile canal</strong> et de la{' '}
              <strong>tuile mécanique années 70-90</strong> qui atteignent
              leur fin de vie moyenne : faîtages scellés fissurés, tuiles
              fatiguées par cycles gel-dégel, gouttières zinc perforées. Les
              zones plus anciennes (Arlac, Chemin-Long) ont un{' '}
              <strong>bâti pierre plus complexe</strong> avec parfois de
              l'ardoise ou du zinc patrimonial. Le centre-ville récent (R+3
              autour du tramway Mérignac Centre) présente des{' '}
              <strong>toits-terrasses EPDM et étanchéité bitumineuse</strong>{' '}
              à surveiller.
            </p>
            <p>
              Nos <strong>tarifs Mérignac</strong> ne subissent aucun surcoût
              de déplacement contrairement aux structures extérieures. Mise
              hors d'eau d'urgence : 250-550 € (souvent non facturée si
              réparation définitive signée dans la foulée). Remplacement
              ponctuel 5-10 tuiles : 180-420 €. Reprise faîtage scellé chaux :
              45-70 €/ml. Reprise noue zinc soudée étain : 180-420 €/ml.
              Diagnostic gratuit, devis chiffré ligne par ligne, aucun
              supplément surprise en cours de chantier.
            </p>
            <p>
              Notre <strong>garantie décennale</strong> couvre l'intégralité
              de la prestation (obligation légale). En complément, garantie
              biennale sur les équipements (Velux, gouttières) et garantie
              constructeur 10 ans sur les matériaux professionnels employés.
              Attestations remises à la fin du chantier avec photos avant/après
              et fiche technique. Nous restons disponibles pour tout SAV
              ultérieur ou expertise d'assurance.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Intervention 15-30 min sur toute la commune',
            description:
              "Depuis notre atelier rue de Malbos, nous traversons Mérignac en quelques minutes. Aucune structure hors-Mérignac ne peut égaler ce délai.",
          },
          {
            title: '20 ans de bâti merignacais dans la tête',
            description:
              "Capeyron, Beutre, Arlac, Bourranville, Pichey, Chemin-Long, centre : chaque quartier a ses spécificités. Nous les connaissons par cœur pour avoir travaillé sur des centaines de toitures.",
          },
          {
            title: 'Aucun surcoût de déplacement',
            description:
              "Nos petites interventions (remplacement de 5 tuiles, reprise ponctuelle) ne subissent aucun forfait kilométrique. Vous payez le travail, point. Tarif identique sur toute la commune.",
          },
          {
            title: 'Copropriétés Mérignac Centre accompagnées',
            description:
              "Programmes R+3/R+4 autour du tramway et du parc : toits-terrasses EPDM, étanchéité bitumineuse. Format syndic maîtrisé, attestations, planning AG.",
          },
          {
            title: 'Dossier assurance constitué gratuitement',
            description:
              "Photos, devis, attestation décennale : nous fournissons tout le dossier nécessaire à votre déclaration d'assurance en cas de sinistre couvert (tempête, chute d'arbre).",
          },
          {
            title: 'Bouche-à-oreille merignacais depuis 2005',
            description:
              "5/5 sur 54 avis Google publics. Beaucoup de nos chantiers viennent de recommandations voisin-à-voisin sur Mérignac. C'est ce qui nous engage à ne jamais dévier.",
          },
        ],
        risques: [
          {
            title: "Retarder = multiplier les dégâts par 10",
            description:
              "Une fuite ignorée pendant un hiver merignacais imprègne l'isolant, effondre le plâtre, fragilise la charpente. Dégâts intérieurs 5-15 k€ pour une réparation initiale à 400 €. Facteur destructeur.",
          },
          {
            title: "Faire venir un couvreur de Bordeaux Centre",
            description:
              "45-75 minutes de délai en heures ouvrées, souvent surcoût kilométrique caché, méconnaissance des spécificités PLU merignacais. Difficile à justifier quand une entreprise mérignacaise est disponible.",
          },
          {
            title: 'Réparation par vendeur porte-à-porte',
            description:
              "Démarcheurs qui proposent une intervention immédiate à tarif surfait 2-3× le marché, sans devis chiffré, avec paiement immédiat exigé. Aucun recours SAV ensuite. À refuser.",
          },
          {
            title: 'Bâchage propriétaire non pérenne',
            description:
              "Bâche fixée à la va-vite au premier coup de vent, l'eau reprend. Une mise hors d'eau professionnelle tient plusieurs mois si nécessaire, avec matériel adapté.",
          },
        ],
        methode: [
          {
            title: 'Appel direct au 07 68 69 78 48',
            description:
              "Décrivez ce que vous voyez (photos bienvenues). Nous évaluons l'urgence et arrivons souvent dans les 30 minutes qui suivent en heures ouvrées.",
          },
          {
            title: 'Mise hors d\u2019eau immédiate si urgent',
            description:
              "Bâche professionnelle fixée, sécurisation zone, protection intérieure. Cette étape n'est pas facturée séparément si le devis de réparation définitive est signé dans la foulée.",
          },
          {
            title: 'Diagnostic complet sur toute la toiture',
            description:
              "Pas seulement la zone signalée. Inspection complète pour identifier la vraie cause et repérer les points faibles associés. Rapport photo écrit.",
          },
          {
            title: 'Devis détaillé sous 24h',
            description:
              "Devis chiffré ligne par ligne : main d'œuvre, matériaux, sécurité, accès. Aucun supplément caché. Vous décidez à froid.",
          },
          {
            title: 'Exécution en direct par notre équipe',
            description:
              "Aucune sous-traitance. C'est notre équipe merignacaise qui exécute avec le matériel et les équipements sécurité adaptés. Contrôle qualité à chaque étape.",
          },
          {
            title: 'Réception et suivi SAV',
            description:
              "Visite fin de chantier, photos avant/après, attestation décennale. Solde à votre validation. Nous restons disponibles pour tout SAV ultérieur ou expertise d'assurance.",
          },
        ],
        faqLocale: [
          {
            question:
              "Quel est vraiment votre délai d'intervention à Mérignac ?",
            answer:
              "Depuis notre atelier au 65 rue de Malbos, nous atteignons chaque quartier de Mérignac en 15 à 30 minutes en heures ouvrées : Capeyron 10 min, Beutre 15 min, Arlac 15 min, Bourranville 20 min, Pichey 20 min, Chemin-Long 25 min. Pour les urgences déclarées, nous sommes souvent chez vous plus vite que ça.",
          },
          {
            question:
              "Combien coûte une réparation typique à Mérignac ?",
            answer:
              "Mise hors d'eau d'urgence : 250-550 € (souvent non facturée si réparation signée dans la foulée). Remplacement 5-10 tuiles : 180-420 €. Faîtage scellé chaux : 45-70 €/ml. Noue zinc soudée étain : 180-420 €/ml. Abergement cheminée : 380-850 €. Diagnostic gratuit si chantier signé.",
          },
          {
            question:
              "Faut-il une déclaration pour réparer sa toiture à Mérignac ?",
            answer:
              "Pour une réparation à l'identique (même matériau, même teinte, même pente), aucune formalité dans la majorité des quartiers merignacais. Pour tout changement d'aspect, déclaration préalable de travaux obligatoire. Certains secteurs proches du parc Bourran ou du château Bourran peuvent être soumis à l'ABF. Nous vérifions systématiquement.",
          },
          {
            question:
              "Facturez-vous un supplément déplacement à Mérignac ?",
            answer:
              "Non, jamais. Mérignac est notre commune, notre atelier y est. Nos petites interventions (remplacement tuiles, contrôle, reprise ponctuelle zinguerie) ne subissent aucun forfait kilométrique. Vous payez uniquement le travail réalisé.",
          },
          {
            question:
              "Intervenez-vous sur les copropriétés du centre-ville ?",
            answer:
              "Oui, régulièrement. Copropriétés R+3/R+4 autour du tramway Mérignac Centre, La Marègue, Beutre : format syndic maîtrisé, attestations, planning AG. Toits-terrasses EPDM, étanchéité bitumineuse, zinguerie périphérique : nous couvrons tout.",
          },
          {
            question:
              "Prenez-vous en charge le dossier d'assurance ?",
            answer:
              "Oui, systématiquement en cas de sinistre. Photos avant/après, devis chiffré, attestation décennale : nous fournissons tout le dossier nécessaire à votre déclaration. Nous restons disponibles pour tout échange direct avec l'expert d'assurance mandaté.",
          },
          {
            question:
              "Que faire en cas d'urgence la nuit ou le week-end ?",
            answer:
              "Laissez message vocal au 07 68 69 78 48. Nous rappelons en priorité absolue dès la première heure du jour suivant, avec créneau d'intervention prioritaire dans la matinée. En saison tempête (novembre-mars), nous surveillons plus attentivement les appels.",
          },
        ],
      }}
    />
  );
}
