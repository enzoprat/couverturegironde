import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-begles');

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
          villeSlug: 'begles',
          h1: (
            <>
              Couvreur à{' '}
              <span className="text-[var(--color-terre)]">Bègles</span> depuis
              2005 — échoppes ouvrières + toits-terrasses ZAC
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac (11 km de Bègles)',
            bio: "Je couvre Bègles depuis 2005 depuis mon atelier de Mérignac (11 km, 20 min). Bègles présente 2 typologies très distinctes : (1) les maisons ouvrières traditionnelles (Terres-Neuves, Birambits, Carle-Vernet) en tuile canal ou mécanique + zinguerie basique à moderniser, (2) les ZAC récentes (Mairie, Bègles Plage) avec toits-terrasses EPDM/SEL et zinguerie contemporaine. J'adapte techniques et matériaux à chaque cas.",
            badges: [
              'Depuis 2005',
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Urgence 30-90 min',
            ],
          },

          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro:
              "Notre atelier est à Mérignac, à 11 km (20 min) de Bègles via A630 + rocade. Cette proximité permet une intervention urgence en 30-90 minutes en heures ouvrées sur toute la commune béglaise.",
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
            "Couvreur-zingueur à Bègles depuis 2005, atelier à Mérignac (11 km). Spécialiste 2 typologies : échoppes ouvrières traditionnelles (Terres-Neuves, Birambits) et toits-terrasses ZAC récentes (EPDM, SEL). Intervention 30-90 min, décennale, 5/5 sur 52 avis Google.",
        contexteLocal: (
          <>
            <p>
              Bègles est une commune au caractère architectural unique en
              Bordeaux Métropole. Tirant son identité de son histoire ouvrière
              et fluviale, elle conserve un{' '}
              <strong>tissu bâti hétérogène</strong> : anciennes maisons de
              cheminots et d'ouvriers à toitures de tuiles plates ou
              mécaniques, échoppes bordelaises traditionnelles dans le centre,
              et nouveaux programmes immobiliers à{' '}
              <strong>toits-terrasses</strong> dans les quartiers en mutation
              comme Terres-Neuves ou Birambits.
            </p>
            <p>
              Cette diversité impose à un couvreur béglais une{' '}
              <strong>polyvalence technique réelle</strong>. Notre équipe
              traite quotidiennement tuile canal, tuile mécanique, ardoise,
              zinguerie complète et étanchéité toits-terrasses. La{' '}
              <strong>proximité de la Garonne</strong> ajoute une contrainte
              spécifique : forte humidité ambiante, brumes matinales fréquentes
              en automne et hiver, exposition accrue aux remontées capillaires
              en pied de mur. Tout cela accélère la dégradation des toitures
              non entretenues.
            </p>
            <p>
              Le <strong>climat océanique humide</strong> qui caractérise toute
              Bordeaux Métropole est particulièrement marqué à Bègles, situé en
              bord de fleuve. Pluviométrie annuelle moyenne légèrement
              supérieure à 950 mm,{' '}
              <strong>présence quasi-permanente d'humidité</strong> dans l'air,
              et alternance gel-dégel l'hiver : les toitures béglaises sont
              parmi les plus sollicitées de la métropole. Un démoussage tous
              les 3 à 4 ans avec traitement hydrofuge est ici la base de
              l'entretien préventif.
            </p>
            <p>
              Nous intervenons quotidiennement à Bègles. En heures ouvrées,
              nous sommes sur place en moins d'une heure, ce qui nous permet
              de traiter efficacement les <strong>urgences fuite</strong>{' '}
              particulièrement fréquentes à Bègles en cas de tempête ou de
              fortes pluies automnales. Mise hors d'eau dans les 2 à 4 heures,
              devis de réparation détaillé sous 48h.
            </p>
            <p>
              Bègles connaît également une{' '}
              <strong>forte densité de chantiers immobiliers neufs</strong>{' '}
              ces dernières années. Nous intervenons sur l'étanchéité de
              toits-terrasses pour les copropriétés récentes, la pose de
              gouttières zinc dimensionnées pour la pluviométrie locale, et
              les diagnostics post-tempête fréquemment demandés par les
              assurances habitation. Couverture Gironde travaille en direct,
              sans sous-traitance, ce qui garantit une qualité et une
              responsabilité claire sur tous nos chantiers béglais.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Spécialiste toits-terrasses Bègles',
            description:
              "Étanchéité, EPDM, bitume, membrane PVC : nous traitons les toitures plates des copropriétés récentes Terres-Neuves et Birambits.",
          },
          {
            title: 'Expertise climat bord de Garonne',
            description:
              "950 mm de pluie/an, humidité quasi-permanente. Les toitures béglaises ont des besoins spécifiques : démoussage rapproché et hydrofuge longue durée.",
          },
          {
            title: 'Polyvalence sur tous matériaux',
            description:
              "Tuile canal, tuile plate, mécanique, ardoise, zinc, étanchéité : nous traitons l'intégralité du parc béglais sans externalisation.",
          },
          {
            title: 'Dossier assurance habitation pris en charge',
            description:
              "Photos, devis, attestations, échanges avec l'expert : nous constituons un dossier solide pour vos déclarations de sinistre suite à tempête.",
          },
          {
            title: 'Couvreur de proximité à Bègles',
            description:
              "Intervention urgence en 30 à 60 minutes en heures ouvrées. Présence quasi-quotidienne sur la commune.",
          },
          {
            title: 'Garantie décennale + RC professionnelle',
            description:
              "Assurance décennale active depuis 2005, attestations à jour fournies sur demande avec le devis.",
          },
        ],
        tarifsLines: [
          {
            service: 'Démoussage toiture (avec brossage manuel)',
            range: '13 – 19 €/m²',
            note: 'Climat humide = démoussage plus fréquent recommandé',
          },
          {
            service: 'Démoussage + traitement hydrofuge',
            range: '19 – 28 €/m²',
            note: 'Combo quasi-indispensable à Bègles',
          },
          {
            service: 'Nettoyage haute pression maîtrisé',
            range: '13 – 21 €/m²',
            note: 'Buse adaptée au matériau',
          },
          {
            service: 'Étanchéité toit-terrasse (EPDM/bitume)',
            range: '60 – 110 €/m²',
            note: 'Selon technique et complexité',
          },
          {
            service: 'Remplacement de tuiles cassées',
            range: '180 – 480 €',
            note: 'Forfait diagnostic + intervention',
          },
          {
            service: 'Pose gouttières zinc dimensionnées',
            range: '55 – 95 €/ml',
            note: 'Section adaptée pluviométrie locale',
          },
          {
            service: "Urgence fuite 7j/7",
            range: '280 – 650 €',
            note: 'Bâche + sécurisation, hors réparation',
          },
          {
            service: 'Diagnostic post-tempête (dossier assurance)',
            range: 'Gratuit',
            note: 'Photos + chiffrage des dégâts',
          },
        ],
        faqLocale: [
          {
            question:
              "Vous occupez-vous des toits-terrasses des copropriétés à Bègles ?",
            answer:
              "Oui, nous traitons l'étanchéité de toits-terrasses (EPDM, bitume, membrane PVC) sur les copropriétés récentes de Bègles : Terres-Neuves, Birambits, et autres programmes immobiliers. Devis pour syndic, attestations d'assurance, planning compatible AG. Nous intervenons aussi pour les diagnostics annuels d'étanchéité.",
          },
          {
            question:
              "Une fuite après tempête : prise en charge par l'assurance habitation ?",
            answer:
              "Si vous êtes assuré tous risques ou contre les tempêtes, votre assurance prend en charge les réparations consécutives à un sinistre climatique reconnu. Nous fournissons devis détaillé, photos avant/après et attestations nécessaires pour la constitution de votre dossier. Nous échangeons directement avec l'expert si vous le souhaitez.",
          },
          {
            question:
              "Combien de fois faut-il démousser une toiture à Bègles ?",
            answer:
              "En raison du climat humide en bord de Garonne, nous recommandons un démoussage complet tous les 3 à 4 ans, idéalement combiné à un traitement hydrofuge longue durée (10 ans de garantie). Sans cet entretien, les toitures béglaises se dégradent 30 à 50 % plus vite que la moyenne.",
          },
          {
            question:
              "Quels sont les quartiers les plus exposés aux mousses à Bègles ?",
            answer:
              "Les zones proches de la Garonne (Carle-Vernet, Birambits) et les pavillonnaires sous couvert arboré (autour du parc de Mussonville, vers Mairie) présentent l'humidité la plus marquée. Les toitures orientées nord ou sous arbres y sont particulièrement sensibles aux mousses, lichens et algues.",
          },
          {
            question:
              "Intervenez-vous pour la pose de gouttières neuves à Bègles ?",
            answer:
              "Oui, nous proposons la pose complète de gouttières en zinc naturel ou prépatiné, dimensionnées spécifiquement pour la pluviométrie béglaise (950 mm/an). Soudure étain sur place pour une étanchéité parfaite, garantie décennale de pose.",
          },
          {
            question:
              "Avez-vous des références de chantiers à Bègles ?",
            answer:
              "Oui, nous travaillons régulièrement sur Bègles depuis 2005. Sur demande, nous pouvons vous communiquer des références récentes (avec accord des clients) ou vous montrer des photos avant/après de chantiers similaires au vôtre.",
          },
          {
            question:
              "Faut-il une autorisation pour refaire sa toiture à Bègles ?",
            answer:
              "Réfection à l'identique : pas de formalité dans la majorité des cas. Changement de matériau ou de teinte : déclaration préalable obligatoire. Certains secteurs proches du Carle-Vernet peuvent demander un avis ABF. Nous vous guidons précisément dès le diagnostic.",
          },
          {
            question:
              "EPDM ou SEL : quelle étanchéité pour mon toit-terrasse en ZAC ?",
            answer:
              "EPDM (caoutchouc synthétique) : durée de vie 30-50 ans, résistant UV, pose collée ou fixée, coût 60-100 €/m². Idéal terrasses accessibles neuves. SEL (Système d'Étanchéité Liquide, polyuréthane) : durée 15-25 ans, application liquide sans joints, idéal pour reprises ponctuelles et formes complexes, coût 50-90 €/m². Sur ZAC Bègles récentes, EPDM est majoritaire — nous procédons par diagnostic pour évaluer si une reprise SEL localisée suffit ou si l'étanchéité complète doit être refaite.",
          },
          {
            question:
              "Comment vérifier votre décennale avant signature ?",
            answer:
              "Nous joignons systématiquement notre attestation d'assurance décennale à chaque devis, avec ses dates de validité. Un artisan qui rechigne à fournir ce document cache probablement une décennale périmée ou absente — refusez de signer.",
          },
        ],

        // ————————————————————————————————————————————————
        // QUESTIONS À POSER À TOUT COUVREUR BÉGLAIS
        // ————————————————————————————————————————————————
        questionsCouvreur: {
          intro:
            "3 questions à poser à tout couvreur qui vous propose un devis pour Bègles. Elles séparent en 2 minutes les artisans compétents des intermédiaires.",
          items: [
            {
              question:
                "Traitez-vous à la fois échoppes tuile canal ET toits-terrasses EPDM ?",
              answer:
                "Bègles présente 2 typologies très distinctes qui demandent 2 métiers : couvreur classique pour les échoppes, étancheur pour les toits-terrasses. Un couvreur qui ne maîtrise qu'une seule technique va sous-traiter l'autre. Chez nous, les 2 sont exécutés en direct par notre équipe.",
            },
            {
              question:
                "Prenez-vous en charge la déclaration préalable en mairie ?",
              answer:
                "Un changement de matériau ou de teinte à Bègles demande une déclaration préalable de travaux (1-2 mois d'instruction). Un couvreur sérieux constitue et dépose le dossier pour vous. Nous nous en occupons systématiquement.",
            },
            {
              question:
                "Votre devis inclut-il tous les postes ou reste-t-il des lignes ouvertes ?",
              answer:
                "En ZAC dense (Bègles Mairie, Bègles Plage), l'occupation de voirie et l'accès copropriétés doivent être chiffrés. Nos devis détaillent chaque poste — main d'œuvre, matériaux, sécurité, accès. Aucune ligne « divers » ouverte, aucun supplément en cours de chantier.",
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
