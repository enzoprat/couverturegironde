import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('urgence-fuite-toiture-bordeaux');

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
          service: 'urgence',
          slug: PAGE.slug,
          h1: (
            <>
              Urgence fuite toiture à{' '}
              <span className="text-[var(--color-terre)]">Bordeaux</span> —
              couvreur sur place 30 min à 2h, 7j/7
            </>
          ),
          heroSubtitle:
            "Fuite d'eau qui coule, tuiles arrachées par le vent, dégât après tempête ? Appelez directement au 07 68 69 78 48. Mise hors d'eau chiffrée 250-550 €, dossier assurance constitué systématiquement, artisan mérignacais direct depuis 2005.",
          shortTitle: 'Urgence fuite',

          // ————————————————————————————————————————————————
          // AUTEUR — E-E-A-T + réassurance urgence
          // ————————————————————————————————————————————————
          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
            bio: "Je réponds personnellement aux appels d'urgence pendant les heures ouvrées (6h-22h). Pour les urgences nuit/dimanche : message vocal, je rappelle en priorité dès la première heure du jour ouvré suivant. En saison tempête (novembre-mars), la veille des appels est renforcée le week-end.",
            badges: [
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Depuis 2005',
              'Atelier Mérignac',
            ],
          },

          presentation: (
            <>
              <p>
                Une fuite de toiture, c'est un <strong>compte à rebours</strong>.
                Chaque heure perdue = plus d'eau dans l'isolant, plus de dégâts
                au plafond, plus de risque structurel. Notre service d'urgence
                est conçu pour une seule chose : <strong>arrêter l'eau le plus
                vite possible, puis chiffrer une réparation propre dans les
                jours qui suivent</strong>.
              </p>
              <p>
                Nous intervenons sur Bordeaux Métropole en{' '}
                <strong>30 minutes à 2 heures en heures ouvrées</strong> (Mérignac
                15-30 min, Bordeaux Centre 30-60 min, communes limitrophes
                45-90 min). Notre atelier étant au 65 rue de Malbos à Mérignac,
                nous n'avons pas à traverser toute la métropole depuis un
                lointain dépôt. Pour les urgences nuit/dimanche, laissez un
                message vocal au{' '}
                <strong>07 68 69 78 48</strong> — vous êtes rappelé dès la
                première heure du jour ouvré suivant avec un créneau prioritaire.
              </p>
              <p>
                <strong>Notre méthode en deux temps</strong> évite la panique et
                les décisions précipitées : mise hors d'eau provisoire immédiate
                (bâche technique fixée, sécurisation, désencombrement), puis
                devis de réparation définitive sous 48h après diagnostic
                complet. <strong>Vous n'êtes jamais forcé à décider en urgence
                pour des travaux importants.</strong> C'est ce qui nous
                distingue des démarcheurs qui exploitent la détresse client.
                Si votre sinistre fait suite à un coup de vent, notre page{' '}
                <Link
                  href="/fuite-toiture-tempete-bordeaux"
                  className="text-[var(--color-terre)] underline underline-offset-2 hover:no-underline"
                >
                  fuite de toiture après tempête
                </Link>{' '}
                détaille les démarches d'assurance tempête et catastrophe
                naturelle spécifiques.
              </p>
              <p>
                Le coût d'une <strong>mise hors d'eau chiffré 250-550 €</strong>{' '}
                selon la surface et l'accessibilité. Ce montant est souvent{' '}
                <strong>non facturé si le devis de réparation définitive est
                signé dans la foulée</strong>. Vous n'avez donc qu'à payer les
                travaux définitifs, l'intervention d'urgence est absorbée dans
                le chantier. Cette approche est extrêmement rare sur le marché
                bordelais.
              </p>
            </>
          ),

          pourquoiRaisons: [
            {
              title: 'Intervention 30 min à 2h en ouvré',
              description:
                "Atelier au 65 rue de Malbos à Mérignac : nous sommes physiquement plus proches que les structures qui envoient des équipes depuis un dépôt centralisé bordelais.",
            },
            {
              title: 'Mise hors d\u2019eau puis devis à froid',
              description:
                "On commence par arrêter l'eau (bâche technique fixée, sécurisation). Le devis de réparation définitive vient ensuite, à froid, sans vous mettre la pression pour signer immédiatement.",
            },
            {
              title: 'Dossier assurance constitué systématiquement',
              description:
                "Nous photographions et documentons tout. Vous récupérez un dossier solide pour votre déclaration : preuves photo, devis chiffré, attestation décennale, échanges expert si nécessaire.",
            },
            {
              title: 'Prix mise hors d\u2019eau connu à l\u2019avance',
              description:
                "250-550 € selon surface et accessibilité. Souvent non facturé si le devis de réparation définitive est signé dans la foulée. Aucune surfacturation urgence.",
            },
            {
              title: 'Conseil immédiat au téléphone',
              description:
                "Pendant que nous arrivons, nous vous indiquons les gestes à faire pour limiter les dégâts (couper l'électricité, déplacer les meubles, contenir l'eau). Vous n'êtes pas seul face au problème.",
            },
            {
              title: 'Artisan direct — pas de commercial',
              description:
                "C'est Liroy qui répond au téléphone et qui intervient. Aucun call-center intermédiaire, aucune sous-traitance en cascade. La personne au bout du fil est celle qui va bâcher votre toit.",
            },
          ],

          risques: [
            {
              title: 'Dégât d\u2019isolation aggravé d\u2019heure en heure',
              description:
                "La laine de verre saturée perd 90 % de ses performances thermiques. Les panneaux d'isolation rigide se déforment. Plus on attend, plus la facture finale gonfle : 400 € d'urgence évite 5-15 k€ de dégâts intérieurs.",
            },
            {
              title: 'Risque électrique en plafond',
              description:
                "L'eau qui ruisselle sur les câbles et boîtiers électriques en plafond peut provoquer court-circuit ou incendie. Coupez immédiatement l'électricité au tableau si l'eau approche une prise, un luminaire ou un boîtier.",
            },
            {
              title: 'Dommages aux chevrons et structure',
              description:
                "Une infiltration prolongée pourrit les chevrons en quelques semaines. La réfection structurelle coûte ensuite des milliers d'euros, là où une fuite traitée en quelques heures coûte quelques centaines.",
            },
            {
              title: 'Refus d\u2019assurance pour défaut d\u2019entretien',
              description:
                "L'assureur peut refuser le sinistre s'il considère qu'un entretien régulier aurait évité le problème. Notre intervention rapide + dossier photo = preuves qu'aucune négligence n'est en cause.",
            },
          ],

          methode: [
            {
              title: 'Appel — sous 30 sec de réponse',
              description:
                "Vous appelez le 07 68 69 78 48. Je réponds personnellement en heures ouvrées. Description au téléphone (photos bienvenues via SMS/WhatsApp), évaluation urgence, planification arrivée.",
            },
            {
              title: 'Gestes immédiats à distance',
              description:
                "Pendant que je viens : couper l'électricité si l'eau approche l'installation, déplacer meubles/tapis, placer bassines. Je vous guide au téléphone tant que je roule.",
            },
            {
              title: 'Arrivée — 30 min à 2h',
              description:
                "J'arrive avec matériel adapté : bâches techniques, harnais, outillage. Mérignac 15-30 min, Bordeaux Centre 30-60 min, communes limitrophes 45-90 min. Sécurisation immédiate.",
            },
            {
              title: 'Mise hors d\u2019eau + diagnostic photo',
              description:
                "Bâche technique fixée correctement (pas juste posée), remplacement provisoire des tuiles disponibles, scellement temporaire si nécessaire. Vous êtes hors d'eau le jour même. Photos systématiques pour votre assurance.",
            },
            {
              title: 'Devis réparation définitive — sous 48h',
              description:
                "Vous recevez un devis détaillé pour la réparation définitive : photos, chiffrage ligne par ligne, délai, garantie décennale. Aucune pression pour signer immédiatement.",
            },
            {
              title: 'Travaux définitifs — 1 à 3 semaines',
              description:
                "Selon urgence, planning et matériaux à commander. Garantie décennale, attestation remise, dossier assurance clôturé. Suivi SAV pendant 10 ans.",
            },
          ],

          // ————————————————————————————————————————————————
          // TARIFS URGENCE (bloc chiffré rassurant)
          // ————————————————————————————————————————————————
          tarifs: {
            intro:
              "Tarifs 2026 constatés sur Bordeaux Métropole pour les prestations d'urgence toiture. Ces montants sont indicatifs — un chiffrage précis dépend de la surface, de l'accessibilité et du type d'intervention. Le tarif mise hors d'eau est souvent absorbé dans le chantier de réparation définitive si celui-ci est signé dans la foulée.",
            lines: [
              {
                service: "Mise hors d'eau standard (bâche technique fixée)",
                range: '250 – 400 €',
                note: 'Surface <30 m², accès normal',
              },
              {
                service: "Mise hors d'eau complexe (grande surface / accès difficile)",
                range: '400 – 750 €',
                note: 'Échafaudage temporaire, hauteur >8 m',
              },
              {
                service: 'Diagnostic sur site + rapport photo assurance',
                range: '0 – 180 €',
                note: 'Gratuit si devis réparation signé',
              },
              {
                service: 'Remplacement tuiles cassées (≤ 10)',
                range: '180 – 420 €',
                note: 'Forfait diagnostic + intervention',
              },
              {
                service: 'Réparation faîtage disloqué (tempête)',
                range: '45 – 70 €/ml',
                note: 'Reprise scellée chaux ou closoir ventilé',
              },
              {
                service: 'Reprise abergement cheminée fuyard',
                range: '380 – 850 €',
                note: 'Zinc soudé étain sur place',
              },
              {
                service: 'Reprise noue zinc percée',
                range: '180 – 420 €/ml',
                note: 'Soudure étain, selon accessibilité',
              },
              {
                service: 'Réparation Velux (kit étanchéité origine)',
                range: '320 – 750 €',
                note: 'Kit Velux d\u2019origine, garantie constructeur',
              },
              {
                service: 'Intervention week-end / jour férié',
                range: '+ 80 – 150 €',
                note: 'Supplément forfait, tarif standard reste',
              },
            ],
            disclaimer:
              "Tarifs TTC, posé, sécurité incluse. Garantie décennale active. Intervention nuit/dimanche : rappel prioritaire dès première heure du jour ouvré. En saison tempête (novembre-mars), veille week-end renforcée.",
          },

          // ————————————————————————————————————————————————
          // QUARTIERS BORDEAUX (couverture géo + maillage)
          // ————————————————————————————————————————————————
          quartiersBordeaux: {
            intro:
              "Nous intervenons en urgence sur tous les quartiers de Bordeaux Métropole. Les délais indiqués sont mesurés depuis notre atelier au 65 rue de Malbos à Mérignac en heures ouvrées, sans embouteillages exceptionnels.",
            items: [
              {
                nom: 'Mérignac — 15-30 min',
                description:
                  "Notre commune. Intervention express Capeyron, Beutre, Arlac, Bourranville, Pichey, Chemin-Long, centre.",
                href: '/couvreur-merignac',
              },
              {
                nom: 'Bordeaux Centre — 30-60 min',
                description:
                  "Échoppes tuile canal + haussmannien ardoise. Secteur UNESCO/ABF, techniques respectueuses du bâti historique.",
                href: '/couvreur-bordeaux-centre',
              },
              {
                nom: 'Chartrons — 30-60 min',
                description:
                  "Maisons d'armateurs, zinguerie patrimoniale. Contraintes ABF fréquentes.",
                href: '/couvreur-bordeaux-chartrons',
              },
              {
                nom: 'Caudéran — 20-40 min',
                description:
                  "Pavillonnaire tuile canal / mécanique. Réparations tuiles cassées et faîtages fréquentes.",
                href: '/couvreur-bordeaux-cauderan',
              },
              {
                nom: 'Le Bouscat — 20-40 min',
                description:
                  "Quartier patrimonial cossu, échoppes bien préservées, techniques traditionnelles.",
                href: '/couvreur-bouscat',
              },
              {
                nom: 'Pessac — 30-60 min',
                description:
                  "Pavillonnaire dense + copropriétés universitaires. Faîtages et gouttières récurrents.",
                href: '/couvreur-pessac',
              },
              {
                nom: 'Talence — 30-60 min',
                description:
                  "Échoppes bordelaises + maisons bourgeoises ardoise. Mortier chaux pour bâti ancien.",
                href: '/couvreur-talence',
              },
              {
                nom: 'Bègles — 30-60 min',
                description:
                  "Bâti ouvrier + programmes récents. Mix tuile canal, mécanique et toits-terrasses.",
                href: '/couvreur-begles',
              },
              {
                nom: "Villenave-d'Ornon — 45-75 min",
                description:
                  "Pavillonnaire étendu, tuile mécanique 70-90. Interventions groupées possibles.",
                href: '/couvreur-villenave-dornon',
              },
              {
                nom: 'Gradignan — 45-75 min',
                description:
                  "Habitat pavillonnaire arboré. Fuites versants nord après tempête.",
                href: '/couvreur-gradignan',
              },
              {
                nom: 'Eysines — 20-40 min',
                description:
                  "Voisin Mérignac Ouest. Pavillonnaire et habitat maraîcher traditionnel.",
                href: '/couvreur-eysines',
              },
              {
                nom: 'Cenon rive droite — 45-75 min',
                description:
                  "Coteaux Haut Cenon + plateau Palmer. Faîtages exposés vents Garonne.",
                href: '/couvreur-cenon',
              },
            ],
          },

          // ————————————————————————————————————————————————
          // FAQ URGENCE-FOCUSED (10 questions clés)
          // ————————————————————————————————————————————————
          faqOverride: [
            {
              question:
                "Que faire immédiatement pendant que le couvreur arrive ?",
              answer:
                "3 gestes prioritaires : (1) COUPER L'ÉLECTRICITÉ au tableau si l'eau approche une prise, un luminaire ou un boîtier — risque de court-circuit et d'incendie. (2) DÉPLACER meubles, tapis, appareils électroniques hors de la zone qui coule. (3) CONTENIR l'eau avec bassines, seaux, serpillères pour limiter l'imprégnation du sol. Ne montez JAMAIS sur le toit vous-même en urgence : le risque de chute >90 % des accidents mortels domestiques.",
            },
            {
              question:
                "Quel est votre délai réel d'intervention à Bordeaux ?",
              answer:
                "Depuis notre atelier de Mérignac : Mérignac 15-30 min, Bordeaux Centre 30-60 min, communes limitrophes 45-90 min. En heures ouvrées (6h-22h), je réponds au téléphone et pars dans les 15-30 minutes qui suivent votre appel. Pour les urgences nuit/dimanche, laissez message vocal au 07 68 69 78 48 — rappel prioritaire dès la première heure du jour ouvré suivant avec créneau prioritaire.",
            },
            {
              question:
                "Combien coûte une intervention d'urgence ?",
              answer:
                "Mise hors d'eau standard : 250-400 € (surface <30 m², accès normal). Mise hors d'eau complexe (grande surface, hauteur >8 m, accès difficile) : 400-750 €. Intervention week-end/jour férié : supplément 80-150 €. Ces tarifs sont souvent NON FACTURÉS si le devis de réparation définitive est signé dans la foulée — vous ne payez alors que les travaux définitifs.",
            },
            {
              question:
                "Mon assurance habitation couvre-t-elle la fuite de toiture ?",
              answer:
                "Oui dans la majorité des cas si le sinistre est lié à un événement climatique : tempête (vents >100 km/h), grêle, chute d'arbre, dégât des eaux. Nous fournissons systématiquement le dossier complet nécessaire à votre déclaration : photos avant/après, devis chiffré ligne par ligne, attestation décennale. Nous restons disponibles pour tout échange direct avec l'expert d'assurance mandaté.",
            },
            {
              question:
                "Interviennez-vous vraiment 7j/7 même la nuit ?",
              answer:
                "Nos horaires ouvrés d'intervention active sont 6h-22h du lundi au samedi. Pour les urgences nuit ou dimanche, laissez message vocal au 07 68 69 78 48 : je rappelle en priorité absolue dès la première heure du jour ouvré suivant avec créneau d'intervention prioritaire dans la matinée. En saison tempête (novembre-mars), la veille des messages est renforcée le week-end. En pratique, aucune vraie urgence n'est laissée sans réponse >12h.",
            },
            {
              question:
                "Que faire si l'eau coule sur mon installation électrique ?",
              answer:
                "COUPEZ IMMÉDIATEMENT L'ÉLECTRICITÉ au disjoncteur principal du tableau. Ne touchez à aucune prise, aucun luminaire, aucun boîtier électrique en contact avec l'eau. Attendez notre arrivée. Si la situation est critique (fumée, odeur de brûlé, arcs électriques visibles), appelez également les pompiers au 18 en parallèle de notre intervention.",
            },
            {
              question:
                "Ma bâche temporaire peut-elle tenir plusieurs semaines ?",
              answer:
                "Une bâche technique correctement fixée (pas juste posée sur le toit) tient 3 à 6 mois si nécessaire, le temps que les démarches assurance aboutissent et que la réparation définitive soit planifiée. Nous utilisons des bâches techniques haute résistance ancrées aux points structurels, pas des bâches de bricolage. Le vent d'ouest bordelais met à l'épreuve les bâches mal fixées — d'où l'intérêt d'une pose professionnelle.",
            },
            {
              question:
                "Réparez-vous les fuites autour de mon Velux ?",
              answer:
                "Oui. Les fuites Velux les plus fréquentes viennent du kit d'étanchéité périphérique (EDW pour tuile, EDN pour ardoise, EDM pour plat) qui vieillit après 15-20 ans. Reprise avec kit Velux d'origine : 320-750 €. Si le Velux a plus de 25 ans et que d'autres points faibles s'accumulent, nous pouvons devis un remplacement complet plus rentable à moyen terme.",
            },
            {
              question:
                "Comment vérifier que vous êtes vraiment couvert par une décennale ?",
              answer:
                "Notre attestation d'assurance décennale est jointe systématiquement à chaque devis, avec ses dates de validité. Un couvreur qui rechigne à fournir ce document ou envoie un scan illisible cache probablement une décennale périmée ou absente — refusez de signer. En cas de sinistre ultérieur non couvert, vous n'auriez aucun recours contre lui.",
            },
            {
              question:
                "Puis-je décider tranquillement après votre mise hors d'eau ?",
              answer:
                "C'est exactement notre méthode. La mise hors d'eau stoppe l'urgence, vous avez ensuite tout le temps de recevoir le devis (sous 48h), de comparer si vous le souhaitez, de réfléchir. Aucune pression commerciale pour signer immédiatement. Nous refusons régulièrement les pratiques de démarcheurs qui exploitent la détresse client pour surfacturer des travaux non nécessaires.",
            },
          ],
        }}
      />
      {/* Schema Person Liroy — E-E-A-T signal auteur */}
      <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
