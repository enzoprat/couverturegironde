import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('couvreur-merignac');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <VillePageLayout
      content={{
        slug: PAGE.slug,
        villeSlug: 'merignac',
        heroSubtitle:
          "Couvreur-zingueur historique de Mérignac depuis 2005. Notre atelier est rue de Malbos, au cœur de la ville. Démoussage, nettoyage, réparation toiture, zinguerie et urgences 7j/7 sur l'ensemble de la commune. Devis gratuit sous 24h, garantie décennale.",
        contexteLocal: (
          <>
            <p>
              Mérignac est <strong>notre ville</strong>. Notre dépôt, notre
              atelier et nos équipes sont implantés ici depuis 2005, au{' '}
              <strong>65 rue de Malbos</strong>. Nous y stockons nos
              matériaux, préparons nos zingueries sur mesure, organisons nos
              chantiers du quotidien. Cette ancrage géographique n'est pas
              accessoire — c'est ce qui nous distingue des structures
              franchisées ou des sociétés bordelaises qui considèrent
              Mérignac comme une zone périphérique à servir au coup par
              coup. Pour nous, c'est l'inverse : Mérignac est le centre, et
              Bordeaux Métropole le pourtour.
            </p>
            <p>
              Cette présence quotidienne sur la commune nous donne une{' '}
              <strong>
                connaissance intime du bâti merignacais
              </strong>
              . Les quartiers résidentiels pavillonnaires de Capeyron,
              Beutre, Bourranville et Pichey concentrent un parc de tuile
              canal traditionnelle et de tuile mécanique des années 70-90,
              tandis qu'Arlac et Chemin-Long présentent davantage de bâti
              ancien à toitures plus complexes. Les nouvelles résidences en
              R+3 ou R+4 du centre-ville, autour du parc et du tramway
              Mérignac Centre, intègrent quant à elles des toits-terrasses
              et des couvertures bac acier qui demandent un savoir-faire
              spécifique en étanchéité et en zinguerie contemporaine.
            </p>
            <p>
              Le <strong>climat merignacais</strong> suit le régime
              océanique girondin classique : pluviométrie annuelle d'environ
              930 mm répartie majoritairement entre octobre et avril, hivers
              doux rarement sous 0°C, étés tempérés mais avec des épisodes
              orageux soudains pouvant déposer 30-50 mm en quelques heures.
              Ce profil pluviométrique sollicite particulièrement les{' '}
              <strong>gouttières et descentes</strong> — un{' '}
              dimensionnement insuffisant ou une zinguerie vieillissante se
              traduit immédiatement par des débordements, des coulures sur
              les façades et des infiltrations en pied de mur. Le couvert
              végétal dense, hérité du caractère "ville-jardin" historique
              de Mérignac, favorise par ailleurs{' '}
              <strong>la prolifération des mousses</strong> sur les
              versants nord, qu'un démoussage tous les 3 à 5 ans avec
              traitement hydrofuge permet de contenir efficacement.
            </p>
            <p>
              Notre <strong>proximité immédiate</strong> est un avantage
              concret au quotidien. Pour les{' '}
              <strong>urgences fuite ou tempête</strong>, nos équipes sont
              généralement sur place en{' '}
              <strong>15 à 30 minutes</strong> en heures ouvrées — délai
              inégalable par les entreprises bordelaises qui doivent
              traverser la rocade. Pour les <strong>devis</strong>, nous
              passons souvent dans la journée de la demande quand un autre
              chantier nous amène déjà sur la commune. Pour les{' '}
              <strong>petites interventions</strong> (remplacement de 5-10
              tuiles, reprise d'une descente, contrôle ponctuel), notre
              tarif n'inclut pas le surcoût de déplacement souvent appliqué
              par les structures hors-zone.
            </p>
            <p>
              Côté <strong>réglementation</strong>, Mérignac applique le PLU
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
              le cadre de nos devis — vous n'avez qu'à signer.
            </p>
            <p>
              Couverture Gironde travaille en{' '}
              <strong>direct sans sous-traitance</strong>. C'est l'artisan
              qui s'est déplacé chez vous pour le diagnostic qui revient
              sur le chantier, qui supervise les travaux et qui assure le
              SAV après réception. Cette continuité de l'interlocuteur,
              combinée à notre ancrage merignacais, est ce qui nous a permis
              d'atteindre la <strong>note 5/5 sur 54 avis Google</strong>{' '}
              que vous pouvez vérifier publiquement. Sur Mérignac
              particulièrement, le bouche-à-oreille fonctionne — nous
              intervenons régulièrement sur recommandation de
              voisins satisfaits, à quelques rues près.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Atelier sur place rue de Malbos',
            description:
              "Notre dépôt et notre atelier sont à Mérignac depuis 2005. Pas de déplacement intersites à facturer, pas de logistique à coordonner — vous nous joignez et on est là.",
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
            title: 'Démarches PLU et ABF prises en charge',
            description:
              "Déclaration préalable, conformité PLU Bordeaux Métropole, avis ABF en secteur protégé : nous nous occupons de l'administratif.",
          },
          {
            title: 'Pas de surcoût de déplacement',
            description:
              "Nos petites interventions (remplacement tuiles, contrôle, reprise zinguerie ponctuelle) n'incluent pas de forfait kilométrique. Vous payez le travail, point.",
          },
          {
            title: 'Bouche-à-oreille merignacais depuis 2005',
            description:
              "20 ans d'interventions sur la commune. 54 avis Google 5/5 publics. Beaucoup de nos chantiers viennent de recommandations voisin-à-voisin.",
          },
        ],
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
            service: "Urgence fuite — mise hors d'eau",
            range: '250 – 550 €',
            note: "Tarif réduit vs hors-zone (proximité)",
          },
          {
            service: 'Réfection complète tuile canal',
            range: '85 – 145 €/m²',
            note: 'Selon état charpente et matériaux',
          },
        ],
        faqLocale: [
          {
            question: "Quel est votre délai d'intervention sur Mérignac ?",
            answer:
              "Pour les urgences (fuite déclarée, dégât tempête), nous sommes généralement sur place en 15 à 30 minutes en heures ouvrées. Notre atelier étant rue de Malbos, nous traversons Mérignac en quelques minutes. Pour les visites de diagnostic gratuit, nous proposons un rendez-vous sous 24-48h ouvrées, souvent dans la journée si nous sommes déjà sur la commune pour un autre chantier.",
          },
          {
            question:
              'Faut-il une autorisation pour refaire sa toiture à Mérignac ?',
            answer:
              "Pour une réfection à l'identique (même matériau, même teinte, même pente), aucune formalité dans la majorité des quartiers merignacais. Pour un changement de matériau ou de couleur, une déclaration préalable de travaux est obligatoire auprès du service urbanisme de Mérignac. Certains secteurs proches du parc Bourran ou du château Bourran peuvent être soumis à l'avis de l'Architecte des Bâtiments de France (ABF). Nous vous indiquons précisément les démarches dès le diagnostic et constituons les dossiers pour vous.",
          },
          {
            question:
              'Couvrez-vous tous les quartiers de Mérignac ?',
            answer:
              "Oui, l'intégralité du territoire merignacais : Centre, Capeyron, Beutre, Bourranville, Pichey, Chemin-Long, Arlac, ainsi que les zones limitrophes avec Bordeaux, Pessac, Eysines et Le Bouscat. Tarifs identiques sur toute la commune (pas de zonage interne).",
          },
          {
            question:
              "Êtes-vous différents des couvreurs venant de Bordeaux centre ?",
            answer:
              "Oui, sur 3 points concrets : (1) délai d'intervention urgence inégalable grâce à notre proximité, (2) absence de surcoût kilométrique sur les petites interventions, (3) connaissance fine du bâti merignacais quartier par quartier. Une entreprise basée à Bordeaux centre doit traverser la rocade et ne nous concurrence pas sur ces 3 axes.",
          },
          {
            question:
              "Travaillez-vous sur les copropriétés de Mérignac centre ?",
            answer:
              "Oui, nous intervenons régulièrement sur les copropriétés merignacaises, notamment les programmes récents autour du tramway Mérignac Centre et du parc. Devis adapté au format syndic, attestations d'assurance fournies, planning compatible AG. Étanchéité toits-terrasses, pose et entretien zinguerie périphérique, démoussage des couvertures inclinées : nous couvrons tout.",
          },
          {
            question:
              "Acceptez-vous les paiements échelonnés ?",
            answer:
              "Pour les chantiers supérieurs à 5 000 € HT, nous acceptons un paiement en 2 ou 3 fois sans frais à convenir à la signature du devis. Pour les rénovations énergétiques éligibles à l'éco-PTZ ou à MaPrimeRénov', nous fournissons tous les justificatifs nécessaires à votre banque ou à votre dossier ANAH.",
          },
          {
            question:
              "Vous êtes vraiment basés à Mérignac depuis 2005 ?",
            answer:
              "Oui, notre atelier et notre siège social sont au 65 rue de Malbos, 33700 Mérignac, depuis 2005. C'est public, vérifiable sur les registres du commerce et sur notre fiche Google Business Profile. Vous pouvez passer voir l'atelier — c'est un dépôt de couvreur classique avec stock matériaux, pas un bureau de façade.",
          },
        ],
      }}
    />
  );
}
