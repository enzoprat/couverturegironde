import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('traitement-hydrofuge-toiture-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'hydrofuge',
        slug: PAGE.slug,
        h1: (
          <>
            Traitement hydrofuge de toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span>
          </>
        ),
        heroSubtitle:
          "Protection longue durée contre l'humidité, les mousses et le gel. Hydrofuge professionnel appliqué après démoussage, garanti jusqu'à 10 ans. Intervention partout en Gironde.",
        shortTitle: 'Traitement hydrofuge',
        presentation: (
          <>
            <p>
              L'hydrofuge est le produit de finition qui distingue un entretien
              de toiture moyen d'un entretien qui dure. Imperméabilisant
              respirant, il pénètre la tuile sur quelques millimètres et la
              rend{' '}
              <strong>
                imperméable à l'eau de pluie tout en lui permettant de continuer
                à respirer
              </strong>
              . L'humidité n'est plus retenue, le gel-dégel cesse de fissurer la
              céramique, les mousses ne trouvent plus leur substrat préféré.
            </p>
            <p>
              Sur le marché bordelais, où le climat océanique humide est le
              principal ennemi des toitures, un traitement hydrofuge bien
              appliqué change radicalement la donne :{' '}
              <strong>
                durée de vie de la couverture prolongée de 30 à 50 %
              </strong>
              , entretien futur réduit, valorisation immédiate du bâti.
            </p>
            <p>
              Nous appliquons exclusivement des hydrofuges professionnels
              (siloxanes ou polymères selon le support), jamais de produit
              grand public. Application au pulvérisateur basse pression en
              deux passages croisés pour garantir l'uniformité. Et toujours
              après un démoussage complet, un hydrofuge sur tuile sale ne
              sert à rien.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Hydrofuge respirant, pas étanchéifiant',
            description:
              "Nous utilisons des produits qui imperméabilisent SANS empêcher la tuile de respirer. Une tuile bouchée par un film étanche, c'est l'assurance de la condensation interne. Le respirant est la seule bonne approche.",
          },
          {
            title: 'Application en deux passages croisés',
            description:
              "Un seul passage laisse des zones sous-imprégnées. Nous appliquons systématiquement en deux passages croisés (vertical puis horizontal) pour une couverture parfaite et homogène.",
          },
          {
            title: 'Coloré ou incolore au choix',
            description:
              "Incolore pour préserver l'aspect naturel des tuiles récentes. Coloré (oxyde de fer rouge, brun ou anthracite) pour raviver une toiture vieillie sans la refaire. Conseil personnalisé selon votre bâti.",
          },
          {
            title: 'Garantie 10 ans',
            description:
              "Un hydrofuge professionnel de qualité tient 8-12 ans. Nous garantissons 10 ans sur les produits appliqués. Au-delà, application d'entretien possible à coût réduit.",
          },
          {
            title: 'Démoussage inclus impérativement',
            description:
              "Un hydrofuge sur tuile sale piège les mousses sous le film, désastre garanti. Nous incluons toujours un démoussage complet en amont, garantie d'efficacité.",
          },
        ],
        risques: [
          {
            title: 'Sans hydrofuge : retour des mousses en 2-3 ans',
            description:
              "Un simple démoussage sans hydrofuge laisse le support attaquable. Les spores reviennent, l'humidité s'installe, et il faut recommencer dans 2-3 ans plutôt qu'en 5-7 ans.",
          },
          {
            title: 'Gel-dégel et microfissures',
            description:
              "L'eau qui pénètre la tuile gèle l'hiver et fissure la céramique en se dilatant. Un hydrofuge bloque cette infiltration. Sans lui, une toiture peut perdre 20 % de ses tuiles en une décennie.",
          },
          {
            title: 'Perte d\u2019efficacité en cas de tempête',
            description:
              "Une tuile saturée d'eau pèse plus lourd, transmet l'humidité aux chevrons et aux sous-couches, et résiste moins bien au vent. L'hydrofuge maintient les caractéristiques mécaniques d'origine.",
          },
          {
            title: 'Surcoût à la prochaine réfection',
            description:
              "Une couverture endommagée par l'humidité chronique se refait à 80-150 €/m². L'hydrofuge appliqué à temps coûte 8-15 €/m² et prolonge la couverture de 15-20 ans. ROI imbattable.",
          },
        ],
        methode: [
          {
            title: 'État des lieux et choix du produit',
            description:
              "Inspection du matériau, état d'usure, exposition. Nous proposons le produit le plus adapté (siloxane vs polymère, coloré vs incolore) avec justification claire du choix.",
          },
          {
            title: 'Démoussage préalable obligatoire',
            description:
              "Pas d'hydrofuge sans démoussage. Brossage des zones critiques, application d'un anti-mousse rémanent, séchage complet avant la phase hydrofuge.",
          },
          {
            title: 'Préparation du support',
            description:
              "Séchage complet (24-48h selon météo), vérification absence de résidus, dépoussiérage si nécessaire. La qualité de l'application dépend à 80 % de la qualité de la préparation.",
          },
          {
            title: 'Premier passage vertical',
            description:
              "Pulvérisation basse pression du produit en passage vertical descendant, versant par versant. Imprégnation visuelle vérifiée à chaque mètre carré.",
          },
          {
            title: 'Second passage horizontal',
            description:
              "Croisement du premier passage par un passage horizontal. Garantit l'imprégnation des recouvrements et raccords. C'est cette étape qui assure la longévité du traitement.",
          },
          {
            title: 'Séchage et contrôle qualité',
            description:
              "Séchage 12-24h. Test de la perlée d'eau sur zones témoins. Photos avant/après, certificat de traitement remis avec garantie 10 ans.",
          },
        ],
      }}
    />
  );
}
