import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-merignac');

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
          villeSlug: 'merignac',
          h1: (
            <>
              Couvreur à{' '}
              <span className="text-[var(--color-terre)]">Mérignac</span> depuis
              2005 — atelier 65 rue de Malbos
            </>
          ),
          heroSubtitle:
            "Vous cherchez un couvreur vraiment basé à Mérignac ? Notre atelier est au 65 rue de Malbos depuis 2005. Intervention 15-30 min en heures ouvrées, sans surcoût de déplacement, dans tous les quartiers merignacais. Appel direct 07 68 69 78 48. Devis gratuit sous 24h.",

          // ————————————————————————————————————————————————
          // AUTEUR — E-E-A-T maximal (Liroy IS mérignacais)
          // ————————————————————————————————————————————————
          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur de Couverture Gironde — Mérignac',
            bio: "Artisan couvreur mérignacais depuis 2005. Atelier au 65 rue de Malbos, à quelques minutes de tous les quartiers de la commune. Chaque devis rédigé et signé par moi. Chaque chantier supervisé par moi. Aucune sous-traitance. Le bâti merignacais, je le connais quartier par quartier.",
            badges: [
              'Atelier Mérignac depuis 2005',
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Urgence 15-30 min (ouvré)',
            ],
          },

          contexteLocal: (
            <>
              <p>
                Mérignac est <strong>notre ville</strong>. Notre dépôt, notre
                atelier et nos équipes sont implantés ici depuis 2005, au{' '}
                <strong>65 rue de Malbos</strong>. Nous y stockons nos
                matériaux, préparons nos zingueries sur mesure, organisons nos
                chantiers du quotidien. Cette ancrage géographique n'est pas
                accessoire, c'est ce qui nous distingue des structures
                franchisées ou des sociétés bordelaises qui considèrent
                Mérignac comme une zone périphérique à servir au coup par
                coup. Pour nous, c'est l'inverse : Mérignac est le centre, et
                Bordeaux Métropole le pourtour.
              </p>
              <p>
                Cette présence quotidienne sur la commune nous donne une{' '}
                <strong>connaissance intime du bâti merignacais</strong>. Les
                quartiers résidentiels pavillonnaires de Capeyron, Beutre,
                Bourranville et Pichey concentrent un parc de tuile canal
                traditionnelle et de tuile mécanique des années 70-90, tandis
                qu'Arlac et Chemin-Long présentent davantage de bâti ancien à
                toitures plus complexes. Les nouvelles résidences en R+3 ou
                R+4 du centre-ville, autour du parc et du tramway Mérignac
                Centre, intègrent quant à elles des toits-terrasses et des
                couvertures bac acier qui demandent un savoir-faire spécifique
                en étanchéité et en zinguerie contemporaine.
              </p>
              <p>
                Le <strong>climat merignacais</strong> suit le régime océanique
                girondin classique : pluviométrie annuelle d'environ 930 mm
                répartie majoritairement entre octobre et avril, hivers doux
                rarement sous 0°C, étés tempérés mais avec des épisodes
                orageux soudains pouvant déposer 30-50 mm en quelques heures.
                Ce profil pluviométrique sollicite particulièrement les{' '}
                <strong>gouttières et descentes</strong> : un dimensionnement
                insuffisant ou une zinguerie vieillissante se traduit
                immédiatement par des débordements, des coulures sur les
                façades et des infiltrations en pied de mur. Le couvert
                végétal dense, hérité du caractère "ville-jardin" historique
                de Mérignac, favorise par ailleurs{' '}
                <strong>la prolifération des mousses</strong> sur les versants
                nord, qu'un démoussage tous les 3 à 5 ans avec traitement
                hydrofuge permet de contenir efficacement.
              </p>
              <p>
                Notre <strong>proximité immédiate</strong> est un avantage
                concret au quotidien. Pour les{' '}
                <strong>urgences fuite ou tempête</strong>, nos équipes sont
                généralement sur place en <strong>15 à 30 minutes</strong> en
                heures ouvrées, délai inégalable par les entreprises
                bordelaises qui doivent traverser la rocade. Pour les{' '}
                <strong>devis</strong>, nous passons souvent dans la journée
                de la demande quand un autre chantier nous amène déjà sur la
                commune. Pour les <strong>petites interventions</strong>{' '}
                (remplacement de 5-10 tuiles, reprise d'une descente, contrôle
                ponctuel), notre tarif n'inclut pas le surcoût de déplacement
                souvent appliqué par les structures hors-zone.
              </p>
              <p>
                Côté <strong>règlementation</strong>, Mérignac applique le PLU
                de Bordeaux Métropole avec des règles spécifiques selon les
                quartiers. Les zones pavillonnaires anciennes (Capeyron, Arlac)
                imposent généralement le maintien des matériaux d'origine
                (tuile canal majoritairement) lors des rénovations à
                l'identique. Les opérations de modification d'aspect
                (changement de matériau, transformation) demandent une
                déclaration préalable. Certains secteurs proches du parc
                Bourran ou du château Bourran peuvent être soumis à l'avis de
                l'ABF si périmètre de protection autour de monuments
                historiques. Nous gérons systématiquement ces démarches dans
                le cadre de nos devis, vous n'avez qu'à signer.
              </p>
              <p>
                Couverture Gironde travaille en <strong>direct sans
                sous-traitance</strong>. C'est l'artisan qui s'est déplacé
                chez vous pour le diagnostic qui revient sur le chantier, qui
                supervise les travaux et qui assure le SAV après réception.
                Cette continuité de l'interlocuteur, combinée à notre ancrage
                merignacais, est ce qui nous a permis d'atteindre la{' '}
                <strong>note 5/5 sur 52 avis Google</strong> que vous pouvez
                vérifier publiquement. Sur Mérignac particulièrement, le
                bouche-à-oreille fonctionne : nous intervenons régulièrement
                sur recommandation de voisins satisfaits, à quelques rues près.
              </p>
            </>
          ),

          // ————————————————————————————————————————————————
          // RÉPARATION FUITE MERIGNAC (nouveau — capte 71 imp/90j GSC)
          // ————————————————————————————————————————————————
          reparationFuite: {
            intro: (
              <p>
                Une fuite déclarée un dimanche soir après un orage merignacais ?
                Notre atelier au 65 rue de Malbos permet une{' '}
                <strong>mise hors d'eau en 15 à 30 minutes</strong> en heures
                ouvrées, souvent moins. En saison tempête (novembre-mars), la
                veille des appels est renforcée le week-end. Le dossier photo
                + attestation décennale nécessaires à votre déclaration
                d'assurance sont constitués systématiquement.
              </p>
            ),
            casTypiques: [
              {
                title: 'Tuile canal fissurée (Capeyron / Beutre)',
                description:
                  "Vents d'ouest + branches tombées + cycles gel-dégel = tuiles cassées récurrentes sur pavillons années 70-90. Remplacement ponctuel 5-10 tuiles + contrôle des adjacentes. Sous 48h.",
              },
              {
                title: 'Faîtage scellé disloqué après tempête',
                description:
                  "Faîtage mortier ciment qui se descelle par section entière. Reprise au mortier chaux compatible bâti ancien ou closoir ventilé selon config. 45-70 €/ml.",
              },
              {
                title: 'Débordement gouttière (bâti années 70-90)',
                description:
                  "Gouttière sous-dimensionnée qui déborde en cas d'orage 30-50 mm/h. Remplacement par section renforcée dimensionnée pluviométrie merignacaise. 55-90 €/ml.",
              },
              {
                title: "Fuite abergement cheminée (bâti ancien Arlac)",
                description:
                  "Solins d'abergement anciens qui perdent leur étanchéité. Reprise complète avec closoir plomb ou zinc soudé sur place. 380-850 €.",
              },
              {
                title: 'Infiltration terrasse (résidences centre)',
                description:
                  "Toit-terrasse R+3/R+4 récent : étanchéité EPDM ou SEL qui craquèle. Diagnostic photo + devis adapté format syndic.",
              },
            ],
            tarifIndicatif: "250 – 550 € (mise hors d'eau + diagnostic)",
          },

          // ————————————————————————————————————————————————
          // ATELIER MERIGNAC (le levier n°1 de cette page)
          // ————————————————————————————————————————————————
          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro:
              "Notre siège et notre atelier sont physiquement au 65 rue de Malbos à Mérignac depuis 2005. Vous pouvez passer voir le dépôt : c'est un atelier de couvreur classique, avec stock de tuiles, matériaux et zinguerie sur mesure. Aucun bureau de façade. C'est cette implantation qui permet une intervention en 15-30 min sur toute la commune.",
            horaires: [
              { jours: 'Lundi – Vendredi', heures: '6h00 – 22h00' },
              { jours: 'Samedi – Dimanche', heures: 'Urgences 7j/7' },
            ],
            mapEmbedUrl:
              'https://www.google.com/maps?q=65+rue+de+Malbos+33700+M%C3%A9rignac&output=embed',
            itineraireUrl:
              'https://www.google.com/maps/dir//65+rue+de+Malbos,+33700+M%C3%A9rignac',
          },

          raisonsLocales: [
            {
              title: 'Atelier sur place rue de Malbos',
              description:
                "Notre dépôt et notre atelier sont à Mérignac depuis 2005. Pas de déplacement intersites à facturer, pas de logistique à coordonner : vous nous joignez et on est là.",
            },
            {
              title: 'Intervention urgence en 15-30 minutes',
              description:
                "En heures ouvrées, nous sommes chez vous sous 30 min pour une mise hors d'eau. Aucune entreprise hors-Mérignac ne peut tenir ce délai.",
            },
            {
              title: 'Connaissance des quartiers merignacais',
              description:
                "Capeyron, Beutre, Arlac, Bourranville, Pichey, Chemin-Long : chaque quartier a ses spécificités de bâti. Nous les connaissons par cœur.",
            },
            {
              title: 'Prix chiffrés visibles sur cette page',
              description:
                "Tarifs 2026 affichés publiquement plus bas. Aucune concurrence bordelaise ou merignacaise ne le fait — vous savez à quoi vous attendre avant même de nous contacter.",
            },
            {
              title: 'Démarches PLU et ABF prises en charge',
              description:
                "Déclaration préalable, conformité PLU Bordeaux Métropole, avis ABF en secteur protégé : nous nous occupons de l'administratif. Vous n'avez qu'à signer.",
            },
            {
              title: 'Pas de surcoût de déplacement',
              description:
                "Nos petites interventions (remplacement tuiles, contrôle, reprise zinguerie ponctuelle) n'incluent pas de forfait kilométrique. Vous payez le travail, point.",
            },
          ],

          // ————————————————————————————————————————————————
          // QUESTIONS À POSER À TOUT COUVREUR MERIGNACAIS
          // ————————————————————————————————————————————————
          questionsCouvreur: {
            intro:
              "Avant de signer un devis avec un couvreur à Mérignac, posez ces 3 questions. Elles séparent en 2 minutes les artisans mérignacais authentiques des structures qui \"interviennent aussi à Mérignac\". Nos réponses vous serviront de référence.",
            items: [
              {
                question:
                  "Où est physiquement votre atelier ? Puis-je passer le voir ?",
                answer:
                  "Un artisan mérignacais authentique a un dépôt vérifiable sur la commune. Notre atelier est au 65 rue de Malbos, 33700 Mérignac, ouvert du lundi au vendredi 6h-22h. Vous pouvez passer sans rendez-vous vérifier qu'il s'agit bien d'un dépôt de couvreur (tuiles, matériaux, zinguerie), pas d'une adresse de boîte postale.",
              },
              {
                question:
                  "Quel est votre délai d'intervention en urgence sur Mérignac ?",
                answer:
                  "Un couvreur vraiment basé sur la commune répond 15-30 minutes en heures ouvrées (nous atteignons Capeyron, Beutre, Arlac en moins de 20 min). Si la réponse est \"1-2 heures\", vous parlez probablement à une structure qui doit envoyer une équipe depuis Bordeaux ou hors métropole. En saison tempête, la différence de délai peut coûter cher en dégâts intérieurs.",
              },
              {
                question:
                  "Facturez-vous un forfait déplacement pour les petites interventions à Mérignac ?",
                answer:
                  "Un artisan local ne facture pas de kilométrique sur sa commune d'implantation. Nos petits chantiers (remplacement de 5 tuiles, contrôle ponctuel, reprise zinguerie) sont facturés sans surcoût déplacement. Un couvreur qui ajoute 80-120 € de forfait déplacement pour une intervention sur Mérignac n'est probablement pas mérignacais.",
              },
            ],
          },

          tarifsLines: [
            {
              service: 'Démoussage toiture (avec brossage)',
              range: '12 – 18 €/m²',
              note: 'Tarif Mérignac sans surcoût déplacement',
            },
            {
              service: 'Démoussage + traitement hydrofuge',
              range: '18 – 27 €/m²',
              note: 'Combo recommandé pour climat merignacais',
            },
            {
              service: 'Nettoyage haute pression maîtrisé',
              range: '12 – 20 €/m²',
              note: 'Pression adaptée tuile canal',
            },
            {
              service: 'Remplacement tuiles cassées (≤10)',
              range: '180 – 420 €',
              note: 'Forfait diagnostic + intervention',
            },
            {
              service: 'Réfection faîtage scellé',
              range: '45 – 70 €/ml',
              note: 'Mortier chaux pour bâti ancien',
            },
            {
              service: 'Pose gouttières zinc dimensionnées',
              range: '55 – 90 €/ml',
              note: 'Section adaptée pluviométrie Mérignac',
            },
            {
              service: "Urgence fuite, mise hors d'eau",
              range: '250 – 550 €',
              note: "Tarif réduit vs hors-zone (proximité)",
            },
            {
              service: 'Réfection complète tuile canal',
              range: '85 – 145 €/m²',
              note: 'Selon état charpente et matériaux',
            },
          ],

          // ————————————————————————————————————————————————
          // FAQ CONVERSION-FOCUSED (10 questions, override FAQ ville)
          // ————————————————————————————————————————————————
          faqLocale: [
            {
              question: "Quel est votre délai d'intervention sur Mérignac ?",
              answer:
                "Pour les urgences (fuite déclarée, dégât tempête), nous sommes généralement sur place en 15 à 30 minutes en heures ouvrées. Notre atelier étant rue de Malbos, nous traversons Mérignac en quelques minutes (Capeyron 10 min, Beutre 15 min, Arlac 15 min, Bourranville 20 min, Pichey 20 min, Chemin-Long 25 min). Pour les visites de diagnostic gratuit, nous proposons un rendez-vous sous 24-48h ouvrées, souvent dans la journée si nous sommes déjà sur la commune pour un autre chantier.",
            },
            {
              question: 'Vous êtes vraiment basés à Mérignac depuis 2005 ?',
              answer:
                "Oui. Notre atelier et notre siège social sont au 65 rue de Malbos, 33700 Mérignac, depuis 2005. C'est public, vérifiable sur les registres du commerce et sur notre fiche Google Business Profile. Vous pouvez passer voir l'atelier — c'est un dépôt de couvreur classique avec stock matériaux (tuiles, zinc, mortiers), pas un bureau de façade. Ouvert lundi-vendredi 6h-22h.",
            },
            {
              question:
                'Faut-il une autorisation pour refaire sa toiture à Mérignac ?',
              answer:
                "Pour une réfection à l'identique (même matériau, même teinte, même pente), aucune formalité dans la majorité des quartiers merignacais. Pour un changement de matériau ou de couleur, une déclaration préalable de travaux est obligatoire auprès du service urbanisme de Mérignac. Certains secteurs proches du parc Bourran ou du château Bourran peuvent être soumis à l'avis de l'Architecte des Bâtiments de France (ABF). Nous vous indiquons précisément les démarches dès le diagnostic et constituons les dossiers pour vous.",
            },
            {
              question:
                "Combien coûte un couvreur à Mérignac en 2026 ?",
              answer:
                "Fourchettes 2026 : démoussage 12-18 €/m², combo démoussage + hydrofuge 18-27 €/m², nettoyage 12-20 €/m², remplacement 5-10 tuiles 180-420 €, réfection faîtage 45-70 €/ml, urgence mise hors d'eau 250-550 €, réfection complète tuile canal 85-145 €/m². Pour une maison merignacaise type 120 m², démoussage complet 1 500-2 200 € TTC. Devis chiffré ligne par ligne sous 24h.",
            },
            {
              question:
                'Couvrez-vous tous les quartiers de Mérignac ?',
              answer:
                "Oui, l'intégralité du territoire merignacais : Centre, Capeyron, Beutre, Bourranville, Pichey, Chemin-Long, Arlac, ainsi que les zones limitrophes avec Bordeaux, Pessac, Eysines et Le Bouscat. Tarifs identiques sur toute la commune (pas de zonage interne), aucun forfait déplacement.",
            },
            {
              question:
                "Êtes-vous différents des couvreurs venant de Bordeaux centre ?",
              answer:
                "Oui, sur 4 points concrets : (1) délai d'intervention urgence 15-30 min vs 45-90 min pour Bordeaux centre — imbattable car atelier sur commune, (2) absence de surcoût kilométrique sur les petites interventions, (3) connaissance fine du bâti merignacais quartier par quartier (Capeyron pavillonnaire 70-90, Arlac bâti ancien complexe, centre R+3 récent), (4) réactivité SAV. Une entreprise basée à Bordeaux centre doit traverser la rocade et ne peut nous concurrencer sur ces 4 axes.",
            },
            {
              question:
                "Travaillez-vous sur les copropriétés de Mérignac centre ?",
              answer:
                "Oui, nous intervenons régulièrement sur les copropriétés merignacaises, notamment les programmes récents autour du tramway Mérignac Centre et du parc. Devis adapté au format syndic, attestations d'assurance fournies, planning compatible AG. Étanchéité toits-terrasses EPDM/SEL, pose et entretien zinguerie périphérique, démoussage des couvertures inclinées : nous couvrons tout.",
            },
            {
              question:
                "Comment se passe une urgence fuite la nuit ou le week-end ?",
              answer:
                "Laissez message vocal au 07 68 69 78 48. Nous rappelons en priorité absolue dès la première heure du jour ouvré suivant avec créneau d'intervention prioritaire dans la matinée. En saison tempête (novembre-mars), la veille des appels est renforcée le week-end : nous surveillons plus attentivement les messages.",
            },
            {
              question: "Acceptez-vous les paiements échelonnés ?",
              answer:
                "Pour les chantiers supérieurs à 5 000 € HT, nous acceptons un paiement en 2 ou 3 fois sans frais à convenir à la signature du devis. Acompte plafonné à 30 % à la signature, solde à votre satisfaction confirmée en fin de chantier. Pour les rénovations éligibles à l'éco-PTZ ou à MaPrimeRénov', nous fournissons tous les justificatifs nécessaires à votre dossier bancaire ou ANAH.",
            },
            {
              question:
                "Comment vérifier votre assurance décennale avant signature ?",
              answer:
                "Nous joignons systématiquement notre attestation décennale à chaque devis, avec ses dates de validité. Aucune raison légitime pour un couvreur de refuser de fournir ce document en amont. Si un artisan rechigne ou envoie un scan illisible, c'est un signal d'alerte majeur — la décennale peut être périmée ou absente. La nôtre est active et vérifiable.",
            },
          ],
        }}
      />
      {/* Schema Person Liroy — E-E-A-T signal auteur */}
      <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
