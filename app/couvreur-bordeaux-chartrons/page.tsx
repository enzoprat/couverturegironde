import type { Metadata } from 'next';
import { QuartierBordeauxPageLayout } from '@/components/content/QuartierBordeauxPageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-bordeaux-chartrons');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <>
      <QuartierBordeauxPageLayout
        content={{
          slug: PAGE.slug,
          quartier: 'Chartrons',
          quartierInflected: 'des Chartrons',
          h1: (
            <>
              Couvreur aux{' '}
              <span className="text-[var(--color-terre)]">Chartrons</span>{' '}
              (Bordeaux) — maisons d'armateurs, ardoise + zinc patrimonial
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
            bio: "Les Chartrons concentrent un patrimoine d'exception : maisons d'armateurs XVIIIe, hôtels particuliers en ardoise, zinguerie patrimoniale soudée étain. Depuis 2005, je respecte les techniques traditionnelles et je constitue systématiquement les dossiers ABF (tout le quartier est classé). Sur zinc patrimonial, aucun mastic — soudure étain sur place uniquement.",
            badges: [
              'Depuis 2005',
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Dossiers ABF pris en charge',
            ],
          },

          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro:
              "Notre atelier est à Mérignac, à 8 km (20-40 min) des Chartrons via A630 + rocade nord. Zinguerie sur mesure préparée à l'atelier.",
            horaires: [
              { jours: 'Lundi – Vendredi', heures: '6h00 – 22h00' },
              { jours: 'Samedi – Dimanche', heures: 'Urgences 7j/7' },
            ],
            mapEmbedUrl:
              'https://www.google.com/maps?q=65+rue+de+Malbos+33700+M%C3%A9rignac&output=embed',
            itineraireUrl:
              'https://www.google.com/maps/dir//65+rue+de+Malbos,+33700+M%C3%A9rignac',
          },

          questionsCouvreur: {
            intro:
              "3 questions à poser à tout couvreur pour les Chartrons, particulièrement sur zinguerie patrimoniale.",
            items: [
              {
                question: "Prenez-vous en charge le dossier ABF ?",
                answer:
                  "Tous les Chartrons sont en secteur ABF. Un couvreur sérieux constitue le dossier pour vous (2-4 mois d'instruction). Nous nous en occupons systématiquement.",
              },
              {
                question:
                  "Utilisez-vous zinc prépatiné ou naturel sur les Chartrons ?",
                answer:
                  "Sur bâti patrimonial des Chartrons, ZINC PRÉPATINÉ (anthra-zinc, quartz-zinc) recommandé pour aspect vieilli DÈS la pose — harmonie immédiate. Coût +15-25 % vs naturel mais le naturel mettrait 2-5 ans à patiner et créerait une dissonance visuelle prolongée.",
              },
              {
                question: "Soudure étain ou mastic sur mon zinc ?",
                answer:
                  "SOUDURE ÉTAIN OBLIGATOIRE. Sur bâti patrimonial en climat humide bordelais, le mastic tient 5-8 ans max. La soudure étain tient 30-50 ans SANS reprise. Nous soudons TOUJOURS les jonctions.",
              },
            ],
          },

        microZones: [
          'Quai des Chartrons',
          'Cours Portal',
          'Rue Notre-Dame',
          'Rue Sicard',
          'Place du Marché des Chartrons',
          'Cours de Verdun',
          'Cours Saint-Louis',
          'Cours du Médoc',
          'Rue Borie',
          'Cité du Vin',
          'Bassins à flot',
          'Saint-Rémi',
        ],
        heroSubtitle:
          "Couvreur-zingueur aux Chartrons depuis 2005, intervention quotidienne sur les hôtels particuliers du quai des Chartrons, les échoppes de la rue Notre-Dame et les programmes neufs des Bassins à flot. Spécialiste ardoise naturelle, secteur ABF, intervention en 1h en urgence. Devis gratuit sous 24h.",
        contexteUrbain: (
          <>
            <p>
              Les Chartrons sont l'un des quartiers les plus prestigieux de
              Bordeaux, avec un patrimoine bâti exceptionnel hérité du
              commerce du vin XVII<sup>e</sup>-XIX<sup>e</sup>. Les{' '}
              <strong>hôtels particuliers du quai des Chartrons</strong>{' '}
              et les chais transformés en habitations affichent une
              architecture remarquable, souvent en{' '}
              <strong>ardoise naturelle</strong> et avec une zinguerie
              soignée (rives, faîtages décoratifs, lucarnes XIX<sup>e</sup>).
              Plusieurs secteurs sont classés et exigent l'avis de
              l'<strong>Architecte des Bâtiments de France</strong> avant
              tout chantier visible depuis l'extérieur.
            </p>
            <p>
              L'habitat aux Chartrons mêle plusieurs typologies :{' '}
              <strong>hôtels particuliers en ardoise</strong> sur le quai
              et le cours Portal, <strong>échoppes traditionnelles en
              tuile canal</strong> dans le tissu urbain dense de la rue
              Notre-Dame et de la rue Sicard, <strong>immeubles haussmanniens</strong>{' '}
              sur le cours de Verdun, et plus récemment des{' '}
              <strong>programmes immobiliers contemporains</strong> aux
              Bassins à flot avec leurs toits-terrasses étanchés EPDM ou
              bitume. Cette diversité demande une vraie polyvalence
              technique du couvreur.
            </p>
            <p>
              La spécialité Chartrons par excellence est l'<strong>ardoise
              naturelle</strong> (Espagne ou Angers), posée au crochet
              cuivre, qui exige une pression de nettoyage limitée à 60-80
              bars maximum, des buses adaptées, et une vraie maîtrise du
              remplacement ponctuel sans abîmer les ardoises adjacentes.
              Nous traitons quotidiennement ce type de couverture sur le
              quartier. Pour la zinguerie patrimoniale (rives décoratives,
              chéneaux moulés, lucarnes), nos chantiers sont systématiquement
              réalisés en zinc patiné qualité Bassin ou alliages adaptés
              au climat humide bordelais.
            </p>
            <p>
              Notre atelier de Mérignac est à <strong>9 km</strong> des
              Chartrons via la rocade et le pont d'Aquitaine ou par
              l'avenue Émile-Counord. Pour les urgences (fuite déclarée,
              ardoise envolée par coup de vent, faîtage descellé), nous
              intervenons en <strong>1 heure environ</strong> en heures
              ouvrées, avec mise hors d'eau immédiate. La connaissance du
              territoire Chartrons nous permet d'anticiper les contraintes :
              quais avec circulation contrôlée, rues étroites du tissu
              ancien, syndics fréquents en copropriété.
            </p>
            <p>
              Couverture Gironde travaille en{' '}
              <strong>direct sans sous-traitance</strong>. L'artisan qui
              chiffre est celui qui exécute le chantier Chartrons et qui
              revient en SAV. Cette continuité, combinée à notre savoir-faire
              ardoise et zinguerie patrimoniale, explique nos{' '}
              <strong>5/5 sur 52 avis Google</strong> et notre fidèle
              clientèle Chartrons.
            </p>
          </>
        ),
        urgenceFuite: {
          intro: (
            <>
              <p>
                Une fuite de toiture aux Chartrons est presque toujours
                une urgence patrimoniale. Les{' '}
                <strong>hôtels particuliers en ardoise</strong>, avec leurs
                plafonds peints et boiseries XIX<sup>e</sup>, peuvent être
                ruinés par une infiltration prolongée. Nous intervenons sur
                les Chartrons 7j/7 pour mise hors d'eau immédiate par
                bâche et sécurisation, puis devis de réparation détaillé
                sous 48h pour traitement définitif.
              </p>
              <p>
                Les fuites Chartrons que nous traitons le plus souvent
                concernent les <strong>ardoises descendues</strong> ou
                cassées par coups de vent, les{' '}
                <strong>rives zinc patrimoniales</strong> oxydées après
                30-40 ans, et les{' '}
                <strong>chéneaux maçonnés</strong> avec étanchéité
                vieillissante sur les bâtisses XIX<sup>e</sup>. Sur les
                toits-terrasses des Bassins à flot, les fuites sont en
                général liées à des étanchéités EPDM ou bitumineuses en
                fin de vie.
              </p>
            </>
          ),
          casTypiques: [
            {
              title: 'Ardoise descendue ou cassée',
              description:
                "Coup de vent fort, ardoise vieillie qui craque. Remplacement à l'identique avec crochets cuivre. Diagnostic des ardoises adjacentes pour anticiper.",
            },
            {
              title: 'Rive zinc patrimoniale oxydée',
              description:
                "Sur les hôtels XIXe, rives décoratives en zinc fatigué après 30-40 ans. Reprise en zinc patiné qualité patrimoine avec soudure étain in situ.",
            },
            {
              title: 'Chéneau maçonné qui fuit',
              description:
                "Étanchéité du chéneau vieillissante. Démontage partiel, reprise de l'étanchéité (EPDM ou bitume selon configuration), remise en eau testée.",
            },
            {
              title: 'Étanchéité toit-terrasse Bassins à flot',
              description:
                "Sur les programmes neufs Bassins à flot, étanchéité EPDM ou bitumineuse en fin de vie. Recouvrement ou rénovation complète selon état.",
            },
            {
              title: 'Faîtage scellé descellé',
              description:
                "Bâti ancien Chartrons, mortier ciment fissuré. Reprise au mortier chaux compatible patrimoine. Délai 1-2 jours selon linéaire.",
            },
            {
              title: 'Infiltration copropriété (parties communes)',
              description:
                "Devis dédié au syndic, attestation décennale, coordination AG. Démontage et diagnostic précis avant chiffrage de la réparation définitive.",
            },
          ],
        },
        raisonsLocales: [
          {
            title: 'Expertise ardoise patrimoine',
            description:
              "Hôtels particuliers en ardoise naturelle, pose au crochet cuivre, remplacement ponctuel sans casse. 20 ans de pratique sur les Chartrons.",
          },
          {
            title: 'Zinguerie patrimoniale et ABF',
            description:
              "Rives décoratives, faîtages moulés, chéneaux maçonnés : zinc patiné qualité patrimoine. Démarches ABF gérées dans le cadre des prestations.",
          },
          {
            title: 'Étanchéité toits-terrasses Bassins à flot',
            description:
              "Spécialiste des programmes neufs : EPDM, bitume modifié, étanchéité résines. Diagnostic et rénovation toits-terrasses en copropriété.",
          },
          {
            title: 'Couvreur à 9 km, urgence en 1h',
            description:
              "Atelier à Mérignac, accès rapide aux Chartrons par rocade + pont d'Aquitaine. Mise hors d'eau immédiate sur les urgences, sans surcoût.",
          },
          {
            title: 'Devis adaptés aux syndics',
            description:
              "Nombreuses copropriétés sur le quartier. Devis détaillé ligne par ligne pour syndic, attestation décennale, coordination AG.",
          },
          {
            title: 'Travail direct, sans sous-traitance',
            description:
              "L'artisan qui chiffre est celui qui exécute sur les Chartrons et qui assure le SAV. Un seul interlocuteur du début à la fin.",
          },
        ],
        faqLocale: [
          {
            question: "Travaillez-vous sur les hôtels particuliers en ardoise des Chartrons ?",
            answer:
              "Oui, c'est une part importante de notre activité sur le quartier. L'ardoise naturelle (Espagne ou Angers) demande un savoir-faire spécifique : pression de nettoyage limitée à 60-80 bars, buses adaptées, pose au crochet cuivre, remplacement ponctuel sans abîmer les ardoises adjacentes. Nous traitons ce type de couverture quotidiennement et avons les références de chantiers à fournir sur demande.",
          },
          {
            question: "Quelles autorisations sont nécessaires aux Chartrons ?",
            answer:
              "Plusieurs secteurs des Chartrons sont en secteur sauvegardé ou à protection patrimoniale. Toute modification de l'aspect extérieur (changement de matériau, de teinte, ajout de Velux) nécessite l'avis de l'Architecte des Bâtiments de France (ABF). Pour une réfection à l'identique, généralement une déclaration préalable suffit. Nous gérons l'ensemble de ces démarches dans le cadre de nos prestations.",
          },
          {
            question: "Intervenez-vous sur les toits-terrasses des Bassins à flot ?",
            answer:
              "Oui. Les programmes immobiliers contemporains des Bassins à flot (et Saint-Rémi) sont équipés de toits-terrasses étanchés EPDM ou bitume modifié. Nous intervenons pour le diagnostic, la réparation ponctuelle, le recouvrement (sur étanchéité en milieu de vie) ou la rénovation complète (sur étanchéité de fin de vie). Devis dédié pour copropriétés.",
          },
          {
            question: "Quel est votre délai d'intervention en urgence aux Chartrons ?",
            answer:
              "En heures ouvrées, environ 1 heure. Notre atelier est à 9 km à Mérignac, accès rapide par rocade et pont d'Aquitaine. Mise hors d'eau immédiate avec bâche et sécurisation, devis de réparation définitif sous 48h.",
          },
          {
            question: "Travaillez-vous avec les syndics des copropriétés Chartrons ?",
            answer:
              "Oui, fréquemment. De nombreuses copropriétés des Chartrons (hôtels particuliers transformés, immeubles haussmanniens, programmes Bassins à flot) ont des besoins toiture récurrents. Nous fournissons devis détaillés adaptés aux usages syndic et AG, attestations d'assurance, et coordonnons les interventions avec les contraintes de propriété partagée.",
          },
          {
            question: "Couvrez-vous Saint-Rémi et les Bassins à flot ?",
            answer:
              "Oui. Saint-Rémi, les Bassins à flot, la Cité du Vin et le périmètre nord des Chartrons sont intégralement couverts avec la même réactivité et les mêmes tarifs que le quai des Chartrons.",
          },
          {
            question: "Mes ardoises ont 50 ans. Faut-il les changer ou les réparer ?",
            answer:
              "Une ardoise naturelle de qualité tient 80 à 100 ans en moyenne, mais sa fixation (crochets, clous) et la zinguerie périphérique (faîtage, rives, chéneaux) vieillissent plus vite. À 50 ans, un diagnostic précis est nécessaire : si les ardoises sont saines, on rénove la zinguerie et les fixations sans tout déposer (économie 50-70 %). Si les ardoises sont en fin de vie, on planifie une réfection complète.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
