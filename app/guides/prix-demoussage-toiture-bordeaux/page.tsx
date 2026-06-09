import {
  GuidePageLayout,
  generateGuideMetadata,
} from '@/components/content/GuidePageLayout';

const SLUG = 'guides/prix-demoussage-toiture-bordeaux';
export const metadata = generateGuideMetadata(SLUG);

export default function Page() {
  return (
    <GuidePageLayout
      content={{
        slug: SLUG,
        h1: (
          <>
            Prix d'un démoussage de toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> en 2026
          </>
        ),
        subtitle:
          "Combien coûte un démoussage de toiture à Bordeaux et en Gironde ? Tarifs au m², facteurs qui font varier le prix, exemples chiffrés pour 100, 150 et 200 m². Guide pratique pour comparer les devis sereinement.",
        datePublished: '2026-05-26',
        readingTimeMin: 8,
        sections: [
          {
            id: 'fourchette-prix',
            title: 'Quel prix attendre en 2026 ?',
            content: (
              <>
                <p>
                  En 2026, le prix d'un démoussage de toiture à Bordeaux se
                  situe dans une fourchette de{' '}
                  <strong>12 à 28 €/m²</strong> selon les prestations
                  comprises. Cette plage relativement large s'explique par
                  l'existence de plusieurs formules d'intervention possibles,
                  qui ne couvrent pas le même périmètre.
                </p>
                <p>
                  Voici les trois formules les plus courantes proposées par
                  les artisans bordelais sérieux :
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Formule</th>
                      <th>Tarif moyen</th>
                      <th>Ce qui est inclus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Démoussage simple</strong>
                      </td>
                      <td>12 – 18 €/m²</td>
                      <td>
                        Brossage manuel + application d'un anti-mousse rémanent
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Démoussage + nettoyage HP</strong>
                      </td>
                      <td>16 – 22 €/m²</td>
                      <td>
                        Le précédent + nettoyage haute pression maîtrisé,
                        rinçage des descentes
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Démoussage + hydrofuge 10 ans</strong>
                      </td>
                      <td>18 – 28 €/m²</td>
                      <td>
                        Démoussage complet + traitement hydrofuge garanti 10
                        ans (combo recommandé)
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Pour <strong>une maison individuelle bordelaise standard</strong>{' '}
                  de 100 à 150 m² de toiture, comptez{' '}
                  <strong>1 200 à 4 200 € HT</strong> selon la formule choisie.
                  La majorité des chantiers que nous traitons à Bordeaux
                  Métropole se situent autour de <strong>2 500 à 3 200 € HT</strong>{' '}
                  en formule complète (démoussage + hydrofuge longue durée).
                </p>
              </>
            ),
          },
          {
            id: 'facteurs-prix',
            title: 'Les 6 facteurs qui font varier le prix',
            content: (
              <>
                <p>
                  Pourquoi des fourchettes aussi larges ? Parce que le prix
                  final dépend de plusieurs variables techniques qu'un
                  artisan sérieux ne peut chiffrer qu'après visite ou
                  diagnostic photo détaillé. Voici les six facteurs qui
                  influent le plus sur le tarif.
                </p>
                <h3>1. La surface réelle de toiture</h3>
                <p>
                  C'est le facteur n°1. La surface se calcule en mètres carrés
                  développés (et non au sol), incluant les versants, les
                  noues et les abergements. Plus la surface est grande, plus
                  le prix au m² est dégressif, les artisans amortissent
                  l'installation du chantier (échafaudage, lignes de vie) sur
                  une plus grande quantité de travail.
                </p>
                <h3>2. L'accessibilité du chantier</h3>
                <p>
                  Une toiture facilement accessible (maison plain-pied,
                  pente modérée, pas d'obstacle d'accès) se traite plus vite
                  qu'une toiture en R+2 avec pente raide ou environnement
                  contraint (jardin clos, accès en passage). Cette
                  contrainte peut <strong>doubler le temps d'intervention</strong>{' '}
                  et donc le coût.
                </p>
                <h3>3. L'état initial de la toiture</h3>
                <p>
                  Une toiture peu colonisée se nettoie en un seul passage.
                  Une toiture fortement envahie (versant nord sous arbres,
                  jamais entretenue depuis 10 ans) demande plusieurs passages
                  de brossage manuel, parfois jusqu'à trois passages de
                  produit anti-mousse à 48h d'intervalle pour décoller les
                  amas les plus tenaces.
                </p>
                <h3>4. Le matériau de couverture</h3>
                <p>
                  Le démoussage d'une <strong>tuile canal</strong> ne se traite
                  pas comme une <strong>ardoise</strong> ou un{' '}
                  <strong>fibrociment</strong>. Pression de nettoyage,
                  formulation du produit anti-mousse, temps de séchage :
                  chaque matériau a ses contraintes. Les tuiles canal et
                  mécaniques sont les plus économiques à traiter. L'ardoise
                  est plus délicate et plus longue. Le fibrociment
                  (présence d'amiante avant 1997) demande un traitement
                  spécifique avec confinement.
                </p>
                <h3>5. La présence d'éléments complexes</h3>
                <p>
                  Cheminée, lucarnes, fenêtres de toit, raccords zinc :
                  autant de points qui nécessitent une attention
                  particulière et qui rallongent le chantier. Comptez{' '}
                  <strong>+ 5 à + 15 %</strong> sur le tarif standard si
                  votre toiture présente plus de 3 éléments saillants.
                </p>
                <h3>6. La saison d'intervention</h3>
                <p>
                  Les artisans bordelais sont les plus chargés au{' '}
                  <strong>printemps (mars-mai)</strong> et à la{' '}
                  <strong>fin d'été (septembre-octobre)</strong>, c'est la
                  haute saison du démoussage. En basse saison (novembre,
                  janvier-février hors gel), certains artisans pratiquent des
                  tarifs légèrement plus accessibles, mais les conditions
                  météo sont moins favorables au séchage des produits.
                </p>
              </>
            ),
          },
          {
            id: 'exemples-chiffres',
            title: '3 exemples chiffrés sur Bordeaux Métropole',
            content: (
              <>
                <p>
                  Pour vous donner une idée concrète, voici trois exemples de
                  devis types issus de chantiers réels réalisés en 2025-2026
                  sur Bordeaux Métropole. Les montants sont en HT, la TVA
                  applicable étant de 10 % pour l'entretien sur logement de
                  plus de 2 ans.
                </p>

                <h3>Exemple 1, Pavillon Pessac, 110 m² tuile canal</h3>
                <ul>
                  <li>Surface développée : 110 m²</li>
                  <li>Matériau : tuile canal traditionnelle, état moyen</li>
                  <li>Accessibilité : maison plain-pied, accès facile</li>
                  <li>Prestation : démoussage + traitement hydrofuge 10 ans</li>
                  <li>
                    <strong>Tarif : 2 420 € HT</strong> (22 €/m²)
                  </li>
                </ul>

                <h3>Exemple 2, Maison bourgeoise Talence, 160 m² ardoise</h3>
                <ul>
                  <li>Surface développée : 160 m²</li>
                  <li>Matériau : ardoise naturelle, exposition nord</li>
                  <li>Accessibilité : R+1 avec pente moyenne</li>
                  <li>Prestation : démoussage complet avec brossage renforcé</li>
                  <li>
                    <strong>Tarif : 2 880 € HT</strong> (18 €/m²)
                  </li>
                </ul>

                <h3>Exemple 3, Échoppe bordelaise centre Bordeaux, 75 m² tuile canal</h3>
                <ul>
                  <li>Surface développée : 75 m²</li>
                  <li>Matériau : tuile canal ancienne, toiture jamais traitée</li>
                  <li>Accessibilité : centre-ville, occupation voirie nécessaire</li>
                  <li>Prestation : démoussage + nettoyage HP + hydrofuge</li>
                  <li>
                    <strong>Tarif : 2 100 € HT</strong> (28 €/m², majoré pour
                    contrainte centre-ville)
                  </li>
                </ul>

                <blockquote>
                  Ces tarifs sont des moyennes 2025-2026 constatées sur
                  Bordeaux Métropole. Ils n'ont pas valeur d'engagement —
                  votre devis personnalisé dépendra de votre situation
                  précise.
                </blockquote>
              </>
            ),
          },
          {
            id: 'comparer-devis',
            title: 'Comment comparer 3 devis sereinement',
            content: (
              <>
                <p>
                  Demander plusieurs devis est la règle de base d'une bonne
                  décision. Mais comparer trois devis n'est pas aussi simple
                  qu'il y paraît : ils peuvent paraître identiques en
                  apparence et couvrir des prestations très différentes en
                  réalité. Voici les <strong>8 points à vérifier</strong> sur
                  chaque devis.
                </p>
                <ol>
                  <li>
                    <strong>La surface chiffrée</strong>. Un devis sérieux
                    mentionne une surface précise en m². Comparez : si les
                    trois devis affichent des surfaces différentes, demandez
                    précision.
                  </li>
                  <li>
                    <strong>Le produit anti-mousse utilisé</strong>. Nom du
                    produit, marque, fiche technique sur demande. Méfiez-vous
                    des devis qui mentionnent "produit professionnel" sans
                    plus de précision.
                  </li>
                  <li>
                    <strong>Le nombre de passages prévus</strong>. Un seul
                    passage chimique = résultat partiel sur toiture très
                    colonisée. Demandez 2 passages minimum sur les zones
                    critiques.
                  </li>
                  <li>
                    <strong>L'inclusion du brossage manuel</strong>. Sur les
                    zones très envahies, le brossage manuel est nécessaire.
                    Certains devis l'oublient pour baisser artificiellement
                    le prix.
                  </li>
                  <li>
                    <strong>Le rinçage des descentes pluviales</strong>.
                    Indispensable pour ne pas obstruer le réseau communal.
                    Doit être explicitement inclus.
                  </li>
                  <li>
                    <strong>La garantie décennale</strong>. Numéro
                    d'assurance, période de validité. Attestation à joindre
                    au devis sur simple demande.
                  </li>
                  <li>
                    <strong>L'acompte demandé</strong>. 30 % maximum est la
                    règle. Méfiez-vous au-delà.
                  </li>
                  <li>
                    <strong>La gestion des déchets</strong>. Les résidus de
                    mousse et débris doivent être évacués correctement. Doit
                    figurer sur le devis.
                  </li>
                </ol>

                <p>
                  <strong>
                    Si un devis est 30 % moins cher que les deux autres,
                    posez-vous des questions
                  </strong>
                  . Soit la prestation est sous-dimensionnée (un seul passage,
                  pas de brossage manuel, produit générique), soit
                  l'entreprise n'est pas correctement assurée. À Bordeaux, le
                  prix moyen tourne autour de 18-22 €/m² pour un démoussage
                  + hydrofuge complet. Tout ce qui descend sous 14 €/m² mérite
                  vérification.
                </p>
              </>
            ),
          },
          {
            id: 'arnaques',
            title: 'Les arnaques fréquentes à éviter',
            content: (
              <>
                <p>
                  Le démoussage de toiture est, malheureusement, un domaine
                  où circulent quelques pratiques douteuses. Voici les
                  signaux d'alerte les plus fréquents que nous croisons sur
                  Bordeaux Métropole.
                </p>
                <h3>Démarchage à domicile non sollicité</h3>
                <p>
                  Un artisan sérieux ne sonne pas à votre porte pour vous
                  dire que votre toiture est en mauvais état. Les meilleurs
                  couvreurs ont leur agenda plein et travaillent sur
                  recommandation. Si quelqu'un démarche, c'est un commercial
                  payé à la commission, méfiance absolue.
                </p>
                <h3>Devis gonflés artificiellement</h3>
                <p>
                  Surface de toiture annoncée 30 % plus grande que la
                  réalité, "découverte" de tuiles cassées qui n'existent
                  pas, supplément "imprévu" en cours de chantier : les
                  variations courantes pour gonfler la facture. La parade :
                  un devis détaillé ligne par ligne, signé avant
                  intervention, et l'engagement écrit qu'aucun supplément ne
                  sera facturé sans validation écrite préalable.
                </p>
                <h3>"Promotion exceptionnelle valable aujourd'hui"</h3>
                <p>
                  La pression à la décision immédiate est un signal d'alarme.
                  Aucun artisan honnête n'a besoin de vous forcer la main.
                  Prenez 48h de réflexion minimum, comparez avec un ou deux
                  autres devis, et vérifiez les avis Google de l'entreprise.
                </p>
                <h3>Acompte démesuré ou paiement intégral d'avance</h3>
                <p>
                  L'acompte légal est limité à 30 % à la signature. Tout ce
                  qui dépasse, ou pire, une demande de paiement complet
                  avant intervention, est rédhibitoire. Vous devez garder un
                  levier financier jusqu'à la fin du chantier.
                </p>
              </>
            ),
          },
          {
            id: 'prix-zero',
            title: 'Faut-il privilégier le prix le plus bas ?',
            content: (
              <>
                <p>
                  Non. Le prix le plus bas est rarement le meilleur choix sur
                  un démoussage de toiture, pour une raison simple : c'est
                  une prestation qui se voit dans la durée, pas le jour de
                  l'intervention. Une toiture mal démoussée brille un mois,
                  puis les mousses reviennent en 18 mois. Une toiture bien
                  démoussée tient 5-7 ans avant la prochaine intervention.
                </p>
                <p>
                  Sur la durée, la différence entre un démoussage à 14 €/m²
                  bâclé (qu'il faudra refaire dans 2 ans à 14 €/m² = 28 €/m²
                  sur 5 ans) et un démoussage à 22 €/m² bien fait (qui tient
                  5 ans, soit 22 €/m² sur 5 ans), c'est le second qui sort
                  gagnant. Le piège est de regarder le prix immédiat plutôt
                  que le coût total sur la durée de vie de la toiture.
                </p>
                <p>
                  <strong>
                    Notre conseil : choisissez la qualité du diagnostic, la
                    précision du devis, les références de l'entreprise et la
                    cohérence du prix avec le marché bordelais
                  </strong>{' '}
                  (18-22 €/m² en formule complète). Le tarif le moins cher
                  cache souvent une prestation qui ne tient pas.
                </p>
              </>
            ),
          },
          {
            id: 'conclusion',
            title: 'En résumé : le bon prix à Bordeaux',
            content: (
              <>
                <p>
                  Pour récapituler, en 2026 sur Bordeaux Métropole :
                </p>
                <ul>
                  <li>
                    <strong>12 à 18 €/m²</strong> pour un démoussage simple
                    (formule économique)
                  </li>
                  <li>
                    <strong>16 à 22 €/m²</strong> pour démoussage + nettoyage
                    HP (formule équilibrée)
                  </li>
                  <li>
                    <strong>18 à 28 €/m²</strong> pour démoussage + hydrofuge
                    10 ans (formule longue durée, recommandée)
                  </li>
                </ul>
                <p>
                  Sur une maison individuelle de 120 m² de toiture, comptez
                  donc <strong>2 200 à 3 400 €</strong> pour un travail bien
                  fait avec garantie 10 ans.
                </p>
                <p>
                  Vous voulez un chiffrage précis sur votre toiture ?
                  Décrivez-nous votre situation, nous établissons un devis
                  détaillé sous 24h ouvrées, gratuit et sans engagement.
                </p>
              </>
            ),
          },
        ],
        faq: [
          {
            question: 'Le démoussage est-il déductible des impôts ?',
            answer:
              "Non, le démoussage seul n'ouvre pas droit à un crédit d'impôt. Il est en revanche éligible à la TVA réduite à 10 % sur les logements de plus de 2 ans (entretien). Pour les travaux plus lourds (isolation de toiture, rénovation énergétique), MaPrimeRénov' et l'éco-PTZ s'appliquent sous conditions.",
          },
          {
            question:
              "Combien de temps dure un démoussage de toiture ?",
            answer:
              "Pour une maison individuelle de 100 à 150 m² de toiture, comptez 1 à 2 jours selon l'accessibilité et l'état initial. Si traitement hydrofuge inclus, ajouter une demi-journée d'application + 12-24h de séchage avant test final.",
          },
          {
            question: "Peut-on démousser sa toiture soi-même ?",
            answer:
              "Techniquement oui, mais nous le déconseillons fortement. Au-delà des risques de chute (toiture mouillée = très glissante), les produits anti-mousses grand public sont moins efficaces que les produits professionnels et leur dosage est délicat. L'économie réalisée est généralement perdue par un résultat partiel qui demande une intervention rapide derrière.",
          },
          {
            question: "Quelle est la fréquence recommandée à Bordeaux ?",
            answer:
              "Tous les 3 à 5 ans en climat océanique humide bordelais. Plus fréquent (2-3 ans) si votre toiture est ombragée par des arbres, exposée au nord, ou si elle se colonise rapidement. Le traitement hydrofuge rallonge ce délai à 7-10 ans.",
          },
          {
            question: "Quels sont les tarifs spécifiques en copropriété ?",
            answer:
              "En copropriété, les tarifs au m² sont généralement plus avantageux (économie d'échelle sur grandes surfaces), comptez 12 à 18 €/m² en formule standard. La logistique est en revanche plus lourde : demande de devis par syndic, validation en AG, planning compatible avec les copropriétaires. Comptez 3-6 mois entre la première demande et le chantier.",
          },
        ],
      }}
    />
  );
}
