import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('couvreur-arcachon');

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
        villeSlug: 'arcachon',
        heroSubtitle:
          "Couvreur-zingueur à Arcachon et sur le Bassin depuis 2005. Démoussage, réparation, zinguerie résistante à l'air salin sur les villas Belle Époque (Ville d'Hiver), maisons ostréicoles et pavillons contemporains. Devis gratuit sous 24h, garantie décennale, déplacement organisé depuis Mérignac.",
        contexteLocal: (
          <>
            <p>
              Arcachon et le Bassin sont un territoire à part en Gironde,
              avec des contraintes climatiques et patrimoniales très
              spécifiques. Couvreur-zingueur depuis 2005 sur le département,
              nous intervenons régulièrement sur la commune et le pourtour
              du Bassin. Pour limiter les coûts de déplacement (60 km
              depuis notre atelier de Mérignac), nous organisons{' '}
              <strong>des journées d'intervention groupées sur le Bassin</strong>{' '}
              pour mutualiser les frais avec d'autres clients arcachonnais.
            </p>
            <p>
              Le patrimoine bâti d'Arcachon est exceptionnel et hétérogène :
              les{' '}
              <strong>villas Belle Époque de la Ville d'Hiver</strong>,
              classées et protégées, exigent un savoir-faire de couverture
              ardoise rigoureux et le respect strict des autorisations de
              l'Architecte des Bâtiments de France. Les{' '}
              <strong>maisons ostréicoles</strong> du port et autour
              d'Abatilles ont leur propre logique (toitures simples,
              bardages bois, zinguerie exposée à 100% au sel). Les
              <strong> pavillons contemporains</strong> (Aiguillon, Le
              Moulleau) reprennent souvent la tuile mécanique standard,
              mais doivent être équipés en{' '}
              <strong>zinguerie marine</strong> spécifique pour tenir.
            </p>
            <p>
              La contrainte numéro un sur le Bassin est{' '}
              <strong>l'air salin</strong>. Le zinc standard utilisé
              partout en Gironde s'oxyde et perfore en 5 à 10 ans à
              Arcachon, là où il tient 30 à 50 ans à Bordeaux. La solution :
              du <strong>zinc patiné</strong> (pré-oxydé en usine) ou des
              alliages adaptés bord de mer (Pigato, Vieille-Montagne
              Bassin). Sur l'ensemble de nos chantiers de zinguerie à
              Arcachon, nous appliquons cette règle systématiquement —
              et nous l'expliquons clairement dans le devis pour que vous
              compreniez le surcoût matériau.
            </p>
            <p>
              Autre point : les <strong>tempêtes hivernales</strong> et
              les <strong>vents d'ouest</strong> réguliers fragilisent
              davantage les faîtages, les chéneaux et les rives. Les
              urgences sinistre tempête sont récurrentes après les coups
              de vent forts (souvent novembre-février). Pour ces urgences,
              nous nous déplaçons sur demande sous{' '}
              <strong>2 à 4 heures</strong> en heures ouvrées (mise hors
              d'eau immédiate par bâche), puis chiffrons la réparation
              sous 48h. Pour les chantiers planifiés, on organise une
              journée d'intervention sur le Bassin avec 2-3 clients,
              ce qui réduit les frais de déplacement de 30-40 %.
            </p>
            <p>
              Couverture Gironde travaille en{' '}
              <strong>direct sans sous-traitance</strong>. C'est l'artisan
              qui chiffre, qui exécute, qui revient en SAV. Cette
              continuité est ce qui nous a permis d'accumuler des avis
              positifs sur tout le département (
              <strong>5/5 sur 54 avis Google</strong>) et de nous faire
              recommander de propriétaire à propriétaire sur le Bassin.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Expertise zinguerie marine et air salin',
            description:
              "Zinc patiné, alliages adaptés bord de mer (Pigato, Vieille-Montagne Bassin). Nous appliquons systématiquement la qualité matériau adaptée au Bassin.",
          },
          {
            title: 'Savoir-faire villas Belle Époque (Ville d\u2019Hiver)',
            description:
              "Couverture ardoise rigoureuse, respect des autorisations ABF en secteur protégé, finitions traditionnelles. Nous travaillons ce patrimoine dans les règles.",
          },
          {
            title: 'Intervention urgence tempête en 2-4h',
            description:
              "Coup de vent fort, faîtage envolé, tuiles déplacées : nous nous déplaçons en urgence sur appel pour mise hors d'eau immédiate.",
          },
          {
            title: 'Journées groupées sur le Bassin (économies déplacement)',
            description:
              "Pour les chantiers planifiés, nous regroupons 2-3 clients sur une même journée pour mutualiser les frais de déplacement. Économie 30-40 %.",
          },
          {
            title: 'Travail direct, sans sous-traitance',
            description:
              "L'artisan qui chiffre est celui qui exécute le chantier sur le Bassin. Un seul interlocuteur, du devis au SAV.",
          },
          {
            title: 'Garantie décennale + RC active',
            description:
              "20 ans d'exercice en Gironde, assurance décennale en cours, justificatifs fournis avec le devis. Protection 10 ans après réception.",
          },
        ],
        tarifsLines: [
          {
            service: 'Démoussage toiture (avec brossage manuel)',
            range: '14 – 22 €/m²',
            note: '+10-20 % pour frais déplacement Bassin (sauf journée groupée)',
          },
          {
            service: 'Zinguerie zinc patiné (marine)',
            range: '70 – 110 €/ml',
            note: 'Zinc qualité Bassin obligatoire',
          },
          {
            service: 'Réparation ponctuelle (≤ 10 tuiles)',
            range: '250 – 600 €',
            note: 'Forfait diagnostic + remplacement + déplacement',
          },
          {
            service: 'Réfection faîtage scellé bord de mer',
            range: '55 – 90 €/ml',
            note: 'Mortier renforcé adapté tempêtes Bassin',
          },
          {
            service: "Urgence fuite, mise hors d'eau",
            range: '350 – 800 €',
            note: 'Inclut déplacement urgence',
          },
          {
            service: 'Couverture ardoise (Ville d\u2019Hiver)',
            range: '160 – 250 €/m²',
            note: 'Ardoise naturelle, crochets cuivre, autorisations ABF gérées',
          },
          {
            service: 'Réfection complète tuile mécanique',
            range: '100 – 170 €/m²',
            note: 'Selon complexité, +zinguerie marine si exposition',
          },
        ],
        faqLocale: [
          {
            question: "Vous déplacez-vous à Arcachon ? Quels frais ?",
            answer:
              "Oui, nous intervenons régulièrement à Arcachon et sur le pourtour du Bassin (La Teste-de-Buch, Gujan-Mestras, Lège-Cap-Ferret) depuis notre atelier de Mérignac. Les frais de déplacement (~60 km) sont indiqués clairement dans le devis. Pour les chantiers planifiés, nous proposons des journées groupées avec d'autres clients du Bassin, ce qui réduit le coût de déplacement de 30 à 40 %.",
          },
          {
            question: "Pourquoi ma zinguerie zinc s'oxyde-t-elle si vite à Arcachon ?",
            answer:
              "L'air salin du Bassin est très agressif. Le zinc standard utilisé partout en Gironde s'oxyde et perfore en 5 à 10 ans à Arcachon, contre 30 à 50 ans à Bordeaux. La solution est d'utiliser du zinc patiné (pré-oxydé en usine) ou des alliages adaptés au bord de mer. C'est notre standard sur tous les chantiers Bassin.",
          },
          {
            question: 'Travaillez-vous sur les villas classées de la Ville d\u2019Hiver ?',
            answer:
              "Oui. Les villas Belle Époque de la Ville d'Hiver sont classées au titre du patrimoine, ce qui impose : couverture ardoise dans les règles de l'art, autorisation préalable de l'Architecte des Bâtiments de France (ABF) avant tout chantier visible depuis l'extérieur, respect des proportions et matériaux d'origine. Nous gérons l'ensemble de ces démarches dans le cadre de nos prestations.",
          },
          {
            question: "Mon faîtage a sauté pendant la tempête. Quel délai d'intervention ?",
            answer:
              "Pour les urgences sinistre tempête (faîtage envolé, tuiles déplacées, infiltration brutale), nous nous déplaçons en 2 à 4 heures en heures ouvrées pour mise hors d'eau immédiate par bâche et sécurisation. Le devis de réparation définitif suit sous 48h ouvrées. Pour les dossiers assurance, nous fournissons photos, devis et attestations nécessaires.",
          },
          {
            question: 'Couvrez-vous tout le Bassin ou seulement Arcachon-ville ?',
            answer:
              "Nous couvrons l'ensemble du pourtour du Bassin : Arcachon (Ville d'Hiver, Pereire, Le Moulleau, Aiguillon, Abatilles), La Teste-de-Buch, Gujan-Mestras, Le Teich, Audenge, Andernos-les-Bains, Lège-Cap-Ferret. Les déplacements sur la rive nord (Cap-Ferret) génèrent un surcoût lié à la distance.",
          },
          {
            question: "Acceptez-vous les paiements échelonnés ?",
            answer:
              "Oui. Sur les chantiers Arcachon (souvent au-dessus de 5 000 € HT vu les matériaux marins requis), nous proposons un paiement en 2 ou 3 fois sans frais. Acompte de 30 % à la signature, solde à la réception après vérification.",
          },
          {
            question: "Quel matériau de toiture privilégier sur le Bassin ?",
            answer:
              "Pour une construction neuve sur le Bassin : ardoise naturelle (qualité Espagne ou Angers) sur les rénovations patrimoniales, tuile mécanique ton terre cuite pour les pavillons contemporains, parfois zinc patiné pour les architectures bord de mer modernes. Dans tous les cas, zinguerie et fixations marines obligatoires. Nous conseillons selon votre projet et votre budget.",
          },
        ],
      }}
    />
  );
}
