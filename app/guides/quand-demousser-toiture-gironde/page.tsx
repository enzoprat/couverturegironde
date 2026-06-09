import {
  GuidePageLayout,
  generateGuideMetadata,
} from '@/components/content/GuidePageLayout';

const SLUG = 'guides/quand-demousser-toiture-gironde';
export const metadata = generateGuideMetadata(SLUG);

export default function Page() {
  return (
    <GuidePageLayout
      content={{
        slug: SLUG,
        h1: (
          <>
            Quand démousser sa toiture en{' '}
            <span className="text-[var(--color-terre)]">Gironde</span> ?
          </>
        ),
        subtitle:
          "Quelle saison, quelle fréquence pour démousser votre toiture à Bordeaux et en Gironde ? Signes d'alerte, calendrier idéal, conseils d'un couvreur local depuis 2005.",
        datePublished: '2026-05-26',
        readingTimeMin: 7,
        sections: [
          {
            id: 'pourquoi-girondes',
            title: 'Pourquoi les toitures girondes sont particulièrement exposées',
            content: (
              <>
                <p>
                  La Gironde présente plusieurs particularités climatiques et
                  environnementales qui en font une zone propice à la
                  prolifération des mousses, lichens et algues sur les
                  toitures. Comprendre ces facteurs aide à choisir le bon
                  moment pour intervenir.
                </p>
                <h3>Le climat océanique humide</h3>
                <p>
                  Pluviométrie annuelle moyenne de <strong>930 mm</strong>{' '}
                  (jusqu'à 1 000 mm sur certaines zones côtières), hivers
                  doux (rarement en dessous de 0°C), étés tempérés et
                  humides. C'est l'environnement idéal pour les{' '}
                  <strong>spores de mousses</strong> qui ne meurent jamais
                  vraiment l'hiver et reprennent leur croissance dès les
                  premières pluies de fin d'été.
                </p>
                <h3>Le couvert végétal dense</h3>
                <p>
                  Bordeaux Métropole compte parmi les agglomérations les plus
                  arborées de France. Pessac (forêt du Bourgailh), Talence
                  (parcs Peixotto et Thouars), Le Bouscat (champ de courses)
                  et la majorité des quartiers pavillonnaires présentent un
                  couvert arboré important. Or, l'ombre portée par les
                  arbres crée des <strong>microclimats humides</strong> sur
                  les versants nord, qui se colonisent en moins de 5 ans
                  sans entretien.
                </p>
                <h3>Les matériaux de couverture dominants</h3>
                <p>
                  La tuile canal traditionnelle (en terre cuite) et la tuile
                  mécanique, qui dominent le bâti girondin, présentent une{' '}
                  <strong>porosité naturelle</strong> qui favorise
                  l'accroche des micro-organismes. L'ardoise, plus dense,
                  résiste mieux mais reste sensible aux algues filamenteuses.
                </p>
                <h3>L'effet cumulatif</h3>
                <p>
                  Ces trois facteurs combinés expliquent pourquoi les
                  toitures bordelaises se dégradent{' '}
                  <strong>30 à 50 % plus vite</strong> sans entretien que la
                  moyenne nationale. C'est précisément pour cela qu'un
                  entretien régulier et bien chronométré est rentable à long
                  terme.
                </p>
              </>
            ),
          },
          {
            id: 'signes-alerte',
            title: '7 signes qu\u2019il est temps de démousser',
            content: (
              <>
                <p>
                  Comment savoir si votre toiture a besoin d'un démoussage ?
                  Voici les 7 signaux visuels et fonctionnels qui doivent
                  vous alerter. Si trois de ces signes sont présents, le
                  démoussage est urgent ; à partir de cinq, vous frôlez la
                  rénovation lourde.
                </p>
                <ol>
                  <li>
                    <strong>Tâches vertes ou noires visibles depuis la rue</strong>{' '}
                   , c'est le signe le plus évident. Sur tuile, ce sont
                    généralement des mousses (vert) ou des algues type
                    gleocapsa magma (noir).
                  </li>
                  <li>
                    <strong>Lichens blanchâtres en disques</strong> sur les
                    tuiles ou ardoises, colonies qui s'étendent
                    progressivement. Plus présents en zone calcaire et
                    pollution modérée.
                  </li>
                  <li>
                    <strong>Coulures noires sur les murs et façades</strong>{' '}
                    en dessous de la toiture, provoquées par le lessivage des
                    mousses et lichens lors des pluies.
                  </li>
                  <li>
                    <strong>Gouttières qui débordent ou se bouchent</strong>{' '}
                    après les pluies, débris végétaux décrochés de la
                    toiture qui obstruent les chéneaux.
                  </li>
                  <li>
                    <strong>Tuiles décolorées ou patinées de manière irrégulière</strong>{' '}
                   , la mousse retient l'humidité et altère l'engobe
                    protecteur de la tuile.
                  </li>
                  <li>
                    <strong>Tuiles cassées ou déplacées</strong> dans les
                    zones très colonisées, la mousse s'infiltre dans les
                    recouvrements et soulève les tuiles.
                  </li>
                  <li>
                    <strong>Sensation d'humidité dans les combles</strong> —
                    signe que l'eau s'infiltre déjà sous la couverture.
                    Urgence ; ne pas attendre.
                  </li>
                </ol>
              </>
            ),
          },
          {
            id: 'meilleure-saison',
            title: 'La meilleure saison pour démousser',
            content: (
              <>
                <p>
                  Il existe deux fenêtres optimales dans l'année pour
                  intervenir sur une toiture en Gironde. Le choix entre les
                  deux dépend de l'état de votre toiture et de votre
                  emplacement.
                </p>
                <h3>Printemps (mars à mai), la fenêtre idéale</h3>
                <p>
                  C'est la meilleure période pour démousser à Bordeaux. Les
                  mousses sont en pleine croissance après les pluies
                  d'hiver, donc visibles et faciles à éliminer. Les
                  températures (10-22°C) sont parfaites pour l'application
                  des produits anti-mousses et de l'hydrofuge. Les risques
                  de gel sont écartés. Les pluies sont fréquentes mais
                  espacées, ce qui permet le séchage des traitements.
                </p>
                <p>
                  <strong>Inconvénient</strong> : c'est aussi la haute saison
                  des couvreurs. Délais de prise de rendez-vous plus longs
                  (2-4 semaines), tarifs parfois légèrement plus élevés en
                  pic de demande.
                </p>
                <h3>Fin d'été, début automne (septembre à mi-octobre)</h3>
                <p>
                  Excellente période pour préparer la toiture aux pluies
                  d'automne et au gel d'hiver. Températures clémentes
                  (15-25°C), faible pluviométrie, séchage rapide des
                  produits. Idéal pour appliquer un hydrofuge en prévention
                  avant la saison humide.
                </p>
                <p>
                  <strong>Inconvénient</strong> : si la toiture est très
                  colonisée, il vaut mieux attendre le printemps pour avoir
                  le temps de réintervenir si besoin avant la haute saison
                  des mousses.
                </p>
                <h3>Périodes à éviter absolument</h3>
                <ul>
                  <li>
                    <strong>Hiver (décembre-février)</strong> : risque de gel,
                    pluies abondantes, séchage des produits compromis. Sauf
                    urgence (fuite), on évite.
                  </li>
                  <li>
                    <strong>Pleine canicule été (juillet-août)</strong> :
                    chaleur excessive (&gt;30°C) qui sèche le produit avant
                    qu'il pénètre. Efficacité réduite. Risque de chocs
                    thermiques sur la tuile.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'frequence',
            title: 'Quelle fréquence en Gironde ?',
            content: (
              <>
                <p>
                  La fréquence dépend de plusieurs facteurs : exposition,
                  environnement, matériau et présence d'un traitement
                  hydrofuge antérieur. Voici notre grille de référence basée
                  sur 20 ans de chantiers en Gironde.
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Situation</th>
                      <th>Fréquence conseillée</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Toiture sans hydrofuge, exposition sud</strong>
                      </td>
                      <td>Tous les 5-7 ans</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Toiture sans hydrofuge, exposition nord</strong>
                      </td>
                      <td>Tous les 3-4 ans</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Sous couvert arboré dense</strong>
                      </td>
                      <td>Tous les 2-3 ans</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Toiture avec hydrofuge 10 ans</strong>
                      </td>
                      <td>Tous les 7-10 ans</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Bord de Garonne (humidité accrue)</strong>
                      </td>
                      <td>Tous les 3-4 ans</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Toiture ancienne (+30 ans, sans entretien)</strong>
                      </td>
                      <td>Démoussage urgent, puis tous les 3 ans</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  La règle de bon sens :{' '}
                  <strong>
                    si vous voyez clairement des mousses depuis la rue ou que
                    plus de 30 % de la toiture présente une coloration
                    verdâtre/noirâtre
                  </strong>
                  , il est temps de démousser. N'attendez pas que la
                  couverture commence à se dégrader.
                </p>
              </>
            ),
          },
          {
            id: 'calendrier',
            title: 'Le calendrier d\u2019entretien idéal',
            content: (
              <>
                <p>
                  Voici un calendrier-type d'entretien sur 10 ans pour une
                  toiture girondine standard, sans hydrofuge initial. C'est
                  la stratégie qui maximise la durée de vie de la couverture
                  tout en restant économique.
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Année</th>
                      <th>Intervention</th>
                      <th>Coût indicatif (120 m²)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Année 0</strong>
                      </td>
                      <td>Démoussage complet + hydrofuge 10 ans</td>
                      <td>2 400 – 3 400 €</td>
                    </tr>
                    <tr>
                      <td>Année 1-2</td>
                      <td>Auto-inspection visuelle (rien à faire)</td>
                      <td>0 €</td>
                    </tr>
                    <tr>
                      <td>Année 3</td>
                      <td>Nettoyage des gouttières (préventif)</td>
                      <td>150 – 250 €</td>
                    </tr>
                    <tr>
                      <td>Année 5</td>
                      <td>Visite de contrôle gratuite + état des lieux</td>
                      <td>0 €</td>
                    </tr>
                    <tr>
                      <td>Année 7</td>
                      <td>Démoussage léger (entretien préventif)</td>
                      <td>1 200 – 1 800 €</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Année 10</strong>
                      </td>
                      <td>Démoussage complet + nouvel hydrofuge</td>
                      <td>2 400 – 3 400 €</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <strong>Coût total sur 10 ans : 6 150 à 8 850 €</strong>{' '}
                  pour 120 m² de toiture, soit environ{' '}
                  <strong>50-75 € par mois lissés</strong>. C'est{' '}
                  <strong>5 à 10 fois moins cher</strong> qu'une réfection
                  complète (15 000 à 25 000 € pour la même surface) que vous
                  éviterez en entretenant régulièrement.
                </p>
              </>
            ),
          },
          {
            id: 'erreurs',
            title: 'Les 5 erreurs à ne pas commettre',
            content: (
              <>
                <h3>1. Attendre que ce soit visible depuis la rue</h3>
                <p>
                  Si vous voyez les mousses depuis la rue, il est déjà tard.
                  Les dégâts internes (joints, micro-fissures, infiltrations
                  débutantes) sont en cours. Mieux vaut intervenir
                  préventivement tous les 4-5 ans qu'attendre l'évidence.
                </p>
                <h3>2. Démousser soi-même avec un karcher</h3>
                <p>
                  Pression standard d'un karcher grand public = 120-150 bars.
                  C'est beaucoup trop pour une tuile canal (max 100 bars). Le
                  résultat : engobe protecteur sablé, micro-fissures,
                  porosité accrue. La tuile vieillit deux fois plus vite
                  après ce traitement. Sans compter le risque de chute.
                </p>
                <h3>3. Démousser sans hydrofuge</h3>
                <p>
                  Sans traitement hydrofuge, les mousses reviennent en 2-3
                  ans. Vous payez un démoussage tous les 3 ans au lieu de
                  tous les 8-10 ans. Le surcoût initial de l'hydrofuge (+ 6
                  à 10 €/m²) est largement amorti dès le premier cycle.
                </p>
                <h3>4. Choisir l'offre la moins chère</h3>
                <p>
                  Un devis 30 % moins cher que la moyenne du marché cache
                  toujours quelque chose : pas de brossage manuel, produit
                  bas de gamme, aucune assurance décennale, surface
                  sous-estimée. Vous payerez deux fois.
                </p>
                <h3>5. Faire intervenir un démarcheur à domicile</h3>
                <p>
                  Aucun artisan sérieux ne fait du démarchage. Les
                  professionnels avec un planning chargé travaillent sur
                  recommandation et bouche-à-oreille. Si quelqu'un sonne à
                  votre porte pour vous parler de votre toiture : refusez
                  poliment et appelez vous-même un couvreur local connu.
                </p>
              </>
            ),
          },
          {
            id: 'conclusion',
            title: 'En résumé : votre prochain démoussage',
            content: (
              <>
                <p>
                  Pour résumer ce qu'il faut retenir :
                </p>
                <ul>
                  <li>
                    <strong>Quand intervenir</strong> : printemps
                    (mars-mai) ou début d'automne (septembre-mi-octobre)
                  </li>
                  <li>
                    <strong>À quelle fréquence</strong> : 4 à 7 ans selon
                    exposition, avec hydrofuge ; 2 à 4 ans sans hydrofuge
                  </li>
                  <li>
                    <strong>Signes d'alerte</strong> : taches vertes/noires
                    visibles, coulures sur les murs, gouttières qui se
                    bouchent
                  </li>
                  <li>
                    <strong>Stratégie optimale</strong> : démoussage +
                    hydrofuge 10 ans tous les 8-10 ans, avec inspection
                    légère tous les 5 ans
                  </li>
                </ul>
                <p>
                  Votre toiture présente des signes d'alerte ? Vous voulez
                  un avis professionnel sans engagement ? Décrivez-nous
                  votre situation, nous établissons un diagnostic gratuit
                  et un devis sous 24h.
                </p>
              </>
            ),
          },
        ],
        faq: [
          {
            question: 'Peut-on démousser sa toiture pendant la pluie ?',
            answer:
              "Non. Le produit anti-mousse doit être appliqué sur une toiture relativement sèche pour pénétrer. La pluie lessive le traitement avant son action, ce qui réduit drastiquement son efficacité. Il faut au minimum 24h sans pluie après l'application.",
          },
          {
            question:
              "Démousser ou refaire la toiture : à partir de quel âge ?",
            answer:
              "Le démoussage est efficace tant que la structure de la couverture est saine. Sur une toiture de plus de 40 ans jamais entretenue, ou présentant plus de 15 % de tuiles dégradées, la rénovation devient plus rentable que l'entretien. Un diagnostic gratuit permet de trancher.",
          },
          {
            question: "Le démoussage abîme-t-il les tuiles ?",
            answer:
              "Pas si la technique est adaptée. Un démoussage professionnel respecte la tuile : pression maîtrisée, buse adaptée, produit non corrosif. Le risque vient des démoussages amateurs au karcher pleine puissance, qui sablent l'engobe protecteur.",
          },
          {
            question:
              "Faut-il faire ramoner la cheminée en même temps ?",
            answer:
              "Ce n'est pas notre métier, mais c'est l'occasion idéale d'organiser les deux interventions à la même période. Faites ramoner par un fumiste avant le démoussage : les suies déposées sur la toiture seront éliminées dans notre nettoyage.",
          },
          {
            question:
              "Que se passe-t-il si on attend trop longtemps ?",
            answer:
              "À partir de 8-10 ans sans entretien, les dégâts deviennent structurels : infiltrations, dégradation des joints, micro-fissures dans les tuiles, attaque des sous-couches. La toiture peut perdre 30 à 50 % de sa durée de vie théorique. À partir de 15-20 ans sans entretien, la rénovation devient souvent inévitable.",
          },
          {
            question:
              "Le démoussage est-il possible en hiver à Bordeaux ?",
            answer:
              "Techniquement possible quand il ne gèle pas, mais déconseillé. Les pluies fréquentes empêchent un séchage correct des produits, et l'humidité ambiante réduit leur efficacité. Sauf urgence (fuite déclarée), nous reportons les démoussages d'hiver au printemps.",
          },
        ],
      }}
    />
  );
}
