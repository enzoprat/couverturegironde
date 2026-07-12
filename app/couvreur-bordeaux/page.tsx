import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-bordeaux');

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
        service: 'couverture',
        slug: PAGE.slug,
        h1: (
          <>
            Couvreur à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> depuis
            2005 — artisan direct, sans sous-traitance
          </>
        ),
        heroSubtitle:
          "Fuite déclarée, démoussage saisonnier, réfection complète ? Un seul interlocuteur du premier appel à la garantie décennale : Liroy, artisan couvreur-zingueur, atelier au 65 rue de Malbos à Mérignac. Appel direct 07 68 69 78 48, devis chiffré ligne par ligne sous 24h, note 5/5 sur 52 avis Google.",
        shortTitle: 'Couvreur Bordeaux',

        // ————————————————————————————————————————————————
        // AUTEUR (E-E-A-T massif : Liroy identifié dès le haut de page)
        // ————————————————————————————————————————————————
        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-zingueur, fondateur de Couverture Gironde',
          bio: "Artisan couvreur depuis 2005, formé à la tuile canal traditionnelle et à la zinguerie soudée étain. Atelier au 65 rue de Malbos à Mérignac. Chaque devis rédigé et signé par moi. Chaque chantier supervisé par moi. Aucune sous-traitance, jamais.",
          badges: [
            'Depuis 2005',
            'Décennale active',
            '5/5 sur 52 avis Google',
            'Atelier Mérignac',
          ],
        },

        presentation: (
          <>
            <p>
              Vous cherchez un <strong>couvreur à Bordeaux</strong> et vous
              vous demandez comment distinguer les vrais artisans des
              structures commerciales qui sous-traitent en cascade. C'est la
              bonne question. Sur Bordeaux Métropole, une majorité des devis
              circulent entre plusieurs mains avant d'atteindre l'équipe qui
              interviendra vraiment sur votre toit — ce qui explique les
              tarifs gonflés, les délais qui s'étirent et les SAV qui
              deviennent des parcours du combattant.
            </p>
            <p>
              <strong>
                Couverture Gironde fonctionne à l'opposé de ce modèle.
              </strong>{' '}
              Quand vous nous appelez, vous parlez à Liroy, l'artisan qui
              interviendra sur votre chantier. Quand vous recevez un devis,
              c'est lui qui l'a rédigé, ligne par ligne. Quand une reprise
              s'impose 3 ans plus tard, vous parlez à la même personne. Cette
              continuité de l'interlocuteur du premier appel jusqu'à la
              garantie décennale est ce qui distingue un artisan direct d'une
              plateforme commerciale.
            </p>
            <p>
              Notre <strong>atelier physique au 65 rue de Malbos à
              Mérignac</strong> nous place à moins de 15 minutes de Bordeaux
              centre, Pessac, Talence, Bègles, Le Bouscat et
              Villenave-d'Ornon. Cette implantation garantit une réactivité
              maximale en cas d'{' '}
              <Link
                href="/urgence-fuite-toiture-bordeaux"
                className="text-[var(--color-terre)] underline underline-offset-2 hover:no-underline"
              >
                urgence fuite toiture
              </Link>{' '}
              (mise hors d'eau sous 2-4 heures en ouvré), des frais
              de déplacement maîtrisés, et une connaissance intime du bâti
              bordelais — échoppes tuile canal du XIXᵉ, immeubles
              haussmanniens en ardoise, pavillons tuile mécanique des années
              70-90, et toits-terrasses EPDM sur programmes récents.
            </p>
            <p>
              Notre exigence commerciale est simple à vérifier :{' '}
              <strong>devis chiffré ligne par ligne</strong> (main d'œuvre,
              matériaux, sécurité, accès), <strong>acompte plafonné à
              30 %</strong>, <strong>solde à votre satisfaction confirmée en
              fin de chantier</strong>, aucun poste "divers et imprévus"
              caché. La note <strong>5/5 sur 52 avis Google publics</strong>{' '}
              est la traduction concrète de cette méthode au quotidien depuis
              20 ans.
            </p>
          </>
        ),

        pourquoiRaisons: [
          {
            title: 'Artisan direct, jamais sous-traitance',
            description:
              "Le devis, le chantier et le SAV sont assurés par la même équipe. Un seul interlocuteur du premier appel à la garantie décennale.",
          },
          {
            title: 'Prix chiffrés visibles avant même le devis',
            description:
              "Tarifs 2026 affichés publiquement sur cette page (12-220 €/m² selon prestation). Aucune concurrence bordelaise ne le fait — vous savez à quoi vous attendre avant même de nous contacter.",
          },
          {
            title: 'Atelier physique à Mérignac depuis 2005',
            description:
              "65 rue de Malbos. Vous pouvez passer voir le dépôt, vérifier notre présence. C'est un atelier de couvreur classique, pas un bureau de façade.",
          },
          {
            title: 'Devis rédigé et signé par Liroy',
            description:
              "Pas de commercial intermédiaire. L'artisan qui rédige le devis est celui qui vous appelle, qui vient sur place, qui exécute et qui vous rappelle 3 ans plus tard si nécessaire.",
          },
          {
            title: 'Garantie décennale active + biennale équipements',
            description:
              "Attestations d'assurance en cours de validité, fournies systématiquement avec le devis. Protection de 10 ans après réception des travaux.",
          },
          {
            title: 'Intervention urgence 7j/7 en 1-4h',
            description:
              "Fuite déclarée, tempête, dégât des eaux : mise hors d'eau sous 1-4 heures en ouvré, dossier assurance constitué. En saison tempête, veille des appels renforcée.",
          },
        ],

        // TODO Liroy : fournir 2 avis Google réels (nom prénom + ville + accord de citation)
        // à injecter ici comme testimonials inline. En attendant, le carousel AvisGoogle
        // affiche déjà les avis publics — pas de fabrication de faux avis.
        // inlineTestimonials: [ ... ],

        risques: [
          {
            title: "Les 'commerciaux' qui vous rappellent 3 fois",
            description:
              "Certaines structures utilisent des équipes commerciales rémunérées à la signature. Résultat : pression, tarifs gonflés, sous-traitance à l'arrivée. Chez nous, c'est l'artisan qui rappelle — une fois — avec un devis chiffré.",
          },
          {
            title: 'Devis flous et suppléments en cours de chantier',
            description:
              "Les postes \"divers et imprévus\" ou \"accès complexe\" ajoutés en cours de route font régulièrement dépasser le devis initial de 30-50 %. Notre devis est exhaustif à la signature, aucun supplément après.",
          },
          {
            title: 'Absence de décennale ou attestation périmée',
            description:
              "Toujours exiger l'attestation d'assurance décennale ET vérifier sa date de validité. Sans elle, aucun recours en cas de sinistre ultérieur. Nous joignons systématiquement notre attestation au devis.",
          },
          {
            title: 'Démarcheurs porte-à-porte "urgents"',
            description:
              "Attention aux propositions immédiates avec paiement direct. Tarifs 2-3× le marché, SAV inexistant, souvent aucune assurance. Un artisan sérieux n'a pas besoin de démarcher : il travaille sur rendez-vous et devis.",
          },
        ],

        methode: [
          {
            title: 'Appel — sous 30 min de rappel',
            description:
              "Vous appelez au 07 68 69 78 48 ou envoyez le formulaire. Nous vous rappelons sous 30 minutes en ouvré. Description au téléphone (photos bienvenues) pour pré-évaluer l'urgence et le budget approximatif.",
          },
          {
            title: 'Visite diagnostic gratuite — J+2',
            description:
              "Nous programmons une visite sous 48h ouvrées. Inspection complète, photos systématiques, identification des points critiques. Aucun engagement à ce stade.",
          },
          {
            title: 'Devis chiffré — J+3',
            description:
              "Vous recevez sous 24h un devis chiffré ligne par ligne avec photos des zones concernées. Comparable, transparent, aucun supplément caché.",
          },
          {
            title: 'Démarches administratives — délai variable',
            description:
              "Réfection à l'identique : aucune formalité, on démarre. Changement d'aspect : déclaration préalable en mairie (1-2 mois). Secteur UNESCO ou périmètre ABF : avis 2-4 mois. Nous constituons et déposons les dossiers pour vous.",
          },
          {
            title: 'Chantier — dès autorisation obtenue',
            description:
              "Notre équipe interne intervient avec matériel et sécurité. Contrôle qualité à chaque étape, photos avant/après systématiques, information voisinage. Durée typique : 1-5 jours selon la surface et la complexité.",
          },
          {
            title: 'Réception et garantie',
            description:
              "Visite fin de chantier avec vous, remise du rapport photo + attestation décennale. Solde à votre satisfaction confirmée. Suivi SAV assuré pendant 10 ans.",
          },
        ],

        // ————————————————————————————————————————————————
        // QUESTIONS À POSER À TOUT COUVREUR (utile + featured snippet)
        // ————————————————————————————————————————————————
        questionsCouvreur: {
          intro:
            "Avant de signer un devis avec un couvreur bordelais — le nôtre ou un autre — posez ces 3 questions. Elles séparent en 2 minutes les artisans directs des intermédiaires. Nos réponses vous serviront de référence.",
          items: [
            {
              question:
                "L'artisan qui rédige le devis est-il celui qui exécute le chantier ?",
              answer:
                "Cette question filtre 80 % des propositions. Chez un artisan direct comme nous, la réponse est OUI : Liroy rédige le devis et supervise l'exécution. Chez une structure commerciale, la réponse implique une équipe externe qu'on ne vous présente pas avant le jour J.",
            },
            {
              question:
                "Pouvez-vous me remettre votre attestation d'assurance décennale, avec ses dates de validité ?",
              answer:
                "Aucune raison légitime de refuser. Nous joignons systématiquement notre attestation à chaque devis, avec dates. Un couvreur qui rechigne ou qui envoie un scan illisible cache probablement une décennale périmée ou absente.",
            },
            {
              question:
                "Le devis détaille-t-il tous les postes (accès, sécurité, gestion des déchets) ou reste-t-il des lignes ouvertes ?",
              answer:
                "Un devis exhaustif détaille chaque poste : main d'œuvre, matériaux, échafaudage, protection abords, évacuation des déchets, TVA. Nos devis n'ont aucune ligne \"divers et imprévus\" restée ouverte — vous savez exactement ce que vous signez et le total ne bouge pas en cours de chantier.",
            },
          ],
        },

        tarifs: {
          intro:
            "Fourchettes de prix 2026 observées sur Bordeaux Métropole pour les prestations courantes de couverture. Ces tarifs sont indicatifs — seul un diagnostic sur site permet de chiffrer précisément selon l'accessibilité, l'état réel et les matériaux. Pour une maison de 120 m² type Caudéran, un démoussage complet représente 1 500-2 200 € TTC.",
          lines: [
            {
              service: 'Démoussage toiture + brossage',
              range: '12 – 18 €/m²',
              note: 'Versants nord et zones ombragées prioritaires',
            },
            {
              service: 'Démoussage + traitement hydrofuge 10 ans',
              range: '18 – 27 €/m²',
              note: 'Combo recommandé climat océanique girondin',
            },
            {
              service: 'Nettoyage haute pression maîtrisé',
              range: '12 – 20 €/m²',
              note: 'Pression adaptée tuile / ardoise / zinc',
            },
            {
              service: 'Remplacement tuiles cassées (≤10)',
              range: '180 – 420 €',
              note: 'Forfait diagnostic + intervention',
            },
            {
              service: 'Réparation faîtage scellé chaux',
              range: '45 – 70 €/ml',
              note: 'Mortier chaux pour bâti ancien bordelais',
            },
            {
              service: 'Pose gouttières zinc dimensionnées',
              range: '55 – 90 €/ml',
              note: 'Section adaptée 930 mm/an pluviométrie',
            },
            {
              service: 'Pose Velux (fenêtre + kit étanchéité)',
              range: '1 200 – 2 400 €',
              note: 'Selon modèle (Standard, Tout Confort, Solaire)',
            },
            {
              service: "Urgence fuite, mise hors d'eau",
              range: '250 – 550 €',
              note: 'Intervention 7j/7, souvent non facturée si travaux signés',
            },
            {
              service: 'Réfection complète tuile canal',
              range: '85 – 145 €/m²',
              note: 'Selon état charpente, isolation, écran sous-toiture',
            },
            {
              service: 'Réfection complète ardoise naturelle',
              range: '120 – 220 €/m²',
              note: 'Ardoise Angers, finitions soignées',
            },
            {
              service: 'Étanchéité toit-terrasse (SEL ou EPDM)',
              range: '70 – 130 €/m²',
              note: 'Avec préparation support et relevés',
            },
            {
              service: 'Charpente bois : reprise sablière',
              range: '450 – 1 200 €/ml',
              note: 'Selon section et accessibilité',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, hors échafaudage spécifique et hors situations particulières (ABF, hauteur >12 m, accès complexe). TVA 10 % applicable aux logements achevés depuis plus de 2 ans. Devis personnalisé gratuit sous 24h.",
        },

        // ————————————————————————————————————————————————
        // ATELIER (signal local physique + preuve d'existence)
        // ————————————————————————————————————————————————
        atelier: {
          adresse: '65 rue de Malbos',
          codePostal: '33700',
          ville: 'Mérignac',
          intro:
            "Notre siège et notre atelier sont physiquement au 65 rue de Malbos à Mérignac depuis 2005. À moins de 15 minutes de Bordeaux centre, Pessac, Talence, Bègles, Le Bouscat et Villenave-d'Ornon. Vous pouvez passer voir l'atelier : c'est un dépôt de couvreur classique, avec stock de tuiles, matériaux et outillage.",
          horaires: [
            { jours: 'Lundi – Vendredi', heures: '6h00 – 22h00' },
            { jours: 'Samedi – Dimanche', heures: 'Urgences 7j/7' },
          ],
          mapEmbedUrl:
            'https://www.google.com/maps?q=65+rue+de+Malbos+33700+M%C3%A9rignac&output=embed',
          itineraireUrl:
            'https://www.google.com/maps/dir//65+rue+de+Malbos,+33700+M%C3%A9rignac',
        },

        quartiersBordeaux: {
          intro:
            "Nous intervenons sur l'ensemble des quartiers de Bordeaux et sa métropole. Chaque secteur a son bâti, ses contraintes urbanistiques et ses spécificités de toiture : nous les connaissons pour avoir réalisé des chantiers dans tous ces secteurs depuis 2005.",
          items: [
            {
              nom: 'Bordeaux Centre',
              description:
                "Échoppes XIXᵉ en tuile canal, immeubles haussmanniens en ardoise, secteur sauvegardé UNESCO avec avis ABF systématique.",
              href: '/couvreur-bordeaux-centre',
            },
            {
              nom: 'Chartrons',
              description:
                "Maisons d'armateurs et entrepôts réhabilités, toitures complexes mêlant tuile, zinc et ardoise. Contraintes ABF fréquentes.",
              href: '/couvreur-bordeaux-chartrons',
            },
            {
              nom: 'Caudéran',
              description:
                "Quartier pavillonnaire majoritairement tuile canal et mécanique des années 1920-1960. Démoussage et reprise zinguerie courants.",
              href: '/couvreur-bordeaux-cauderan',
            },
            {
              nom: 'Saint-Augustin',
              description:
                "Échoppes bordelaises bien préservées et maisons de ville. Tuile canal traditionnelle, beaucoup de chéneaux zinc à entretenir.",
              href: '/couvreur-bordeaux-saint-augustin',
            },
            {
              nom: 'Bastide',
              description:
                "Rive droite réhabilitée, mix bâti ancien et programmes récents avec toits-terrasses EPDM et zinguerie contemporaine.",
              href: '/couvreur-bordeaux-bastide',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune d\u2019atelier depuis 2005. Intervention urgence en 15-30 minutes, tarifs sans surcoût déplacement.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Pavillonnaire dense années 60-90, copropriétés universitaires, parc Bourg-Madame. Démoussage et étanchéité courants.",
              href: '/couvreur-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Mix maisons bourgeoises et résidences étudiantes. Couverture tuile mécanique majoritaire, ardoise pour le bâti bourgeois.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Le Bouscat',
              description:
                "Quartier résidentiel cossu, échoppes et maisons de maître. Tuile canal et zinc patrimoniaux à préserver à l\u2019identique.",
              href: '/couvreur-bouscat',
            },
            {
              nom: 'Bègles',
              description:
                "Bâti ouvrier traditionnel et nouvelles ZAC. Mix tuile canal, mécanique et toits-terrasses sur programmes récents.",
              href: '/couvreur-begles',
            },
            {
              nom: "Villenave-d'Ornon",
              description:
                "Pavillonnaire étendu, toiture tuile mécanique 70-90 majoritaire. Démoussages réguliers et réparations courantes.",
              href: '/couvreur-villenave-dornon',
            },
            {
              nom: 'Gradignan',
              description:
                "Maisons individuelles avec grands jardins boisés, prolifération mousses sur versants nord. Hydrofuge fortement recommandé.",
              href: '/couvreur-gradignan',
            },
          ],
        },

        // ————————————————————————————————————————————————
        // FAQ CONVERSION-FOCUSED (override la FAQ générique service)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question: 'Quel est le prix d\u2019un couvreur à Bordeaux en 2026 ?',
            answer:
              "Les tarifs 2026 observés sur Bordeaux Métropole : démoussage 12-18 €/m², nettoyage 12-20 €/m², démoussage + hydrofuge 18-27 €/m², réfection complète tuile canal 85-145 €/m², réfection ardoise 120-220 €/m². Pour une maison type 120 m², un démoussage complet représente 1 500-2 200 € TTC. Notre page tarifs détaille l'ensemble des prestations.",
          },
          {
            question:
              'Combien de temps pour obtenir un devis couvreur à Bordeaux ?',
            answer:
              "Nous rappelons sous 30 minutes en heures ouvrées après votre appel. Visite de diagnostic gratuite sous 48h. Devis chiffré ligne par ligne sous 24h après la visite. Total : vous avez un devis actionnable en 3 à 5 jours ouvrés maximum, souvent moins.",
          },
          {
            question:
              'Comment distinguer un artisan couvreur direct d\u2019une plateforme commerciale ?',
            answer:
              "Trois signaux fiables : (1) le devis est-il rédigé et signé par l'artisan lui-même, ou par un commercial ? (2) l'atestation décennale est-elle jointe au devis avec ses dates de validité ? (3) le devis détaille-t-il tous les postes ou laisse-t-il des lignes \"divers et imprévus\" ouvertes ? Un artisan direct répond OUI aux 3 premières et NON à la 4ᵉ. C'est notre positionnement.",
          },
          {
            question: 'Quels quartiers de Bordeaux couvrez-vous ?',
            answer:
              "Tous : Centre (UNESCO/ABF), Chartrons, Caudéran, Saint-Augustin, Bastide, Bordeaux Lac, ainsi que la métropole (Mérignac, Pessac, Talence, Bègles, Villenave-d'Ornon, Bouscat, Gradignan, Bruges, Eysines, Cenon, Floirac, Lormont). Sur devis pour la Gironde élargie : Médoc, Bassin d'Arcachon, Libournais, Sud-Gironde.",
          },
          {
            question: 'Intervenez-vous en urgence 24h/24 pour une fuite ?',
            answer:
              "En ouvré (lundi-vendredi 6h-22h), intervention en 1 à 4 heures pour mise hors d'eau. En saison tempête (novembre-mars), veille des appels renforcée le week-end. Pour les urgences nuit/dimanche, message vocal au 07 68 69 78 48 avec rappel prioritaire dès la première heure du jour ouvré suivant. Coût mise hors d'eau : 250-550 €, souvent non facturé si le devis de réparation est signé dans la foulée.",
          },
          {
            question: 'Êtes-vous certifiés RGE / QualiBat ?',
            answer:
              "Nous sommes couverts par la garantie décennale légale + responsabilité civile pro (attestations jointes à chaque devis). Sur les prestations éligibles (rénovation énergétique, isolation par la toiture), nous vous orientons vers nos partenaires certifiés RGE pour préserver votre éligibilité aux aides (MaPrimeRénov', éco-PTZ, CEE).",
          },
          {
            question:
              'Quels matériaux maîtrisez-vous sur le bâti bordelais ?',
            answer:
              "L'intégralité : tuile canal traditionnelle (échoppes centre + Caudéran), tuile mécanique (pavillons 70-90), ardoise naturelle d'Angers (bâti bourgeois), zinc naturel/prépatiné soudé étain (chéneaux, noues, capotages), EPDM et étanchéité bitumineuse (toits-terrasses), et charpente bois pour rénovation structurelle.",
          },
          {
            question:
              'Quelle garantie et quel SAV après le chantier ?',
            answer:
              "Garantie décennale (10 ans) sur l'ensemble de la prestation, obligation légale, notre attestation est active et joignable au devis. Garantie biennale (2 ans) sur les équipements (Velux, gouttières). Fiche technique des matériaux + attestation d'assurance + photos avant/après remises en fin de chantier. En cas de reprise nécessaire pendant les 10 ans : nous revenons, sans discussion.",
          },
          {
            question: 'Acceptez-vous les paiements échelonnés ?',
            answer:
              "Pour les chantiers >5 000 € HT, paiement en 2 ou 3 fois sans frais possible (à convenir à la signature). Acompte plafonné à 30 % à la signature, solde à la satisfaction confirmée en fin de chantier. Pour les rénovations éligibles à l'éco-PTZ ou à MaPrimeRénov', nous fournissons tous les justificatifs pour votre dossier bancaire ou ANAH.",
          },
          {
            question:
              'Pourquoi choisir un artisan mérignacais pour un chantier à Bordeaux Centre ?',
            answer:
              "Trois avantages concrets : (1) délai d'intervention urgence 30-60 min contre 60-90 min pour un artisan hors métropole, (2) connaissance intime du bâti bordelais (échoppes tuile canal, ABF, secteur UNESCO), (3) pas de sous-traitance à des équipes externes. Notre atelier au 65 rue de Malbos est à moins de 15 min de Bordeaux Centre — c'est le meilleur compromis proximité / expertise sur le bâti historique bordelais.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
