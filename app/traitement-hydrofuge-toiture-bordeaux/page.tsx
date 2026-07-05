import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('traitement-hydrofuge-toiture-bordeaux');

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
        service: 'hydrofuge',
        slug: PAGE.slug,
        h1: (
          <>
            Traitement hydrofuge toiture{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            protection 10 ans, 6-12 €/m²
          </>
        ),
        heroSubtitle:
          "Traitement hydrofuge professionnel appliqué après démoussage. Rend la tuile HYDROPHOBE (l'eau perle au lieu d'imprégner), retarde le retour des mousses pendant 5-10 ans, protège du cycle gel-dégel. Garantie constructeur 10 ans + décennale.",
        shortTitle: 'Traitement hydrofuge',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
          bio: "L'hydrofuge est LE traitement de protection le plus rentable sur toitures poreuses (tuile canal, tuile mécanique). Depuis 2005, je l'applique systématiquement après démoussage sur les toitures bordelaises exposées : sans lui, les mousses reviennent en 2-3 ans ; avec lui, l'intervention suivante peut attendre 8-10 ans. Je vous dis honnêtement quand c'est utile (poreux + versant nord + couvert végétal) et quand c'est superflu (ardoise récente ou tuile émaillée).",
          badges: [
            'Depuis 2005',
            'Garantie 10 ans',
            '5/5 sur 52 avis Google',
            'Anti-mousse rémanent',
          ],
        },
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

        // ————————————————————————————————————————————————
        // TARIFS HYDROFUGE
        // ————————————————————————————————————————————————
        tarifs: {
          intro:
            "Fourchettes 2026 constatées sur Bordeaux Métropole pour l'hydrofuge et les combos incluant hydrofuge. Le tarif dépend du matériau, de la surface, de l'accessibilité et du produit choisi (incolore vs coloré). Pour une maison type 120 m² de toiture : combo démoussage + hydrofuge 2 160-3 240 € TTC. TVA 10 % applicable aux logements >2 ans.",
          lines: [
            {
              service: 'Hydrofuge incolore seul (toiture propre)',
              range: '6 – 12 €/m²',
              note: 'Sur toiture déjà démoussée récemment',
            },
            {
              service: 'Hydrofuge coloré (oxyde de fer)',
              range: '8 – 15 €/m²',
              note: 'Ravive tuile vieillie sans réfection',
            },
            {
              service: 'Combo démoussage + hydrofuge 10 ans',
              range: '18 – 27 €/m²',
              note: 'Meilleur rapport durabilité/prix',
            },
            {
              service: 'Combo complet nettoyage + démoussage + hydrofuge',
              range: '25 – 38 €/m²',
              note: 'Toiture négligée depuis 5+ ans',
            },
            {
              service: 'Hydrofuge tuile canal traditionnelle',
              range: '8 – 13 €/m²',
              note: 'Poreux, très bon ROI',
            },
            {
              service: 'Hydrofuge tuile mécanique',
              range: '6 – 11 €/m²',
              note: 'Poreux à moyennement poreux',
            },
            {
              service: 'Hydrofuge ardoise',
              range: '8 – 14 €/m²',
              note: 'Utilité limitée (peu poreux)',
            },
            {
              service: "Test de porosité + conseil (sans chantier)",
              range: '0 – 180 €',
              note: 'Gratuit si chantier signé',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, sécurité incluse. Produit siloxane ou polymère selon support. Garantie constructeur 10 ans sur l'hydrofuge appliqué + décennale sur la prestation. Le combo démoussage + hydrofuge (18-27 €/m²) est le meilleur rapport durabilité/prix sur la majorité des toitures bordelaises.",
        },

        // ————————————————————————————————————————————————
        // QUARTIERS BORDEAUX (couverture géo + maillage)
        // ————————————————————————————————————————————————
        quartiersBordeaux: {
          intro:
            "L'utilité d'un hydrofuge varie selon le quartier et le type de bâti. Voici nos recommandations différenciées par secteur — nous refusons de vendre un hydrofuge sur une toiture qui n'en a pas besoin (ardoise récente, tuile émaillée).",
          items: [
            {
              nom: 'Bordeaux Centre',
              description:
                "Échoppes tuile canal + haussmannien ardoise. Hydrofuge très utile sur tuile canal, superflu sur ardoise récente.",
              href: '/couvreur-bordeaux-centre',
            },
            {
              nom: 'Chartrons',
              description:
                "Ardoise + zinc patrimonial. Hydrofuge généralement non nécessaire (peu poreux), démoussage seul suffit.",
              href: '/couvreur-bordeaux-chartrons',
            },
            {
              nom: 'Caudéran',
              description:
                "Quartier arboré : mousses abondantes versants nord. Combo démoussage + hydrofuge fortement recommandé.",
              href: '/couvreur-bordeaux-cauderan',
            },
            {
              nom: 'Saint-Augustin',
              description:
                "Échoppes tuile canal traditionnelles. Hydrofuge 10 ans après démoussage prolonge la couverture de 15-20 ans.",
              href: '/couvreur-bordeaux-saint-augustin',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune. Pavillonnaire majoritaire tuile canal/mécanique — hydrofuge très rentable.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Bourg-Madame + Cap-de-Bos très boisés : mousses très présentes. Hydrofuge INDISPENSABLE pour tenir 8-10 ans.",
              href: '/couvreur-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Bâti bourgeois ardoise + tuile mécanique. Hydrofuge sur tuile mécanique, superflu sur ardoise.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Le Bouscat',
              description:
                "Quartier patrimonial cossu. Hydrofuge coloré discret pour préserver l'aspect vieilli traditionnel.",
              href: '/couvreur-bouscat',
            },
            {
              nom: 'Gradignan',
              description:
                "Habitat pavillonnaire arboré, mousses systématiques versants nord. Hydrofuge FORTEMENT recommandé.",
              href: '/couvreur-gradignan',
            },
            {
              nom: 'Bègles, Villenave',
              description:
                "Pavillonnaire étendu tuile mécanique 70-90. Hydrofuge très rentable après démoussage.",
              href: '/couvreur-begles',
            },
            {
              nom: 'Cenon rive droite',
              description:
                "Coteaux Haut Cenon exposés vents Garonne. Hydrofuge protège contre cycles gel-dégel accélérés.",
              href: '/couvreur-cenon',
            },
            {
              nom: 'Eysines',
              description:
                "Voisin Mérignac Ouest. Pavillonnaire tuile canal. Hydrofuge classique après démoussage.",
              href: '/couvreur-eysines',
            },
          ],
        },

        // ————————————————————————————————————————————————
        // FAQ HYDROFUGE-FOCUSED (10 questions ICP)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "L'hydrofuge est-il vraiment utile sur ma toiture ?",
            answer:
              "OUI sur toitures POREUSES exposées : tuile canal traditionnelle, tuile mécanique non émaillée, sur versant nord ou sous couvert végétal dense. L'hydrofuge y allonge la durée de vie de 30-50 % et retarde le retour des mousses de 5-10 ans. UTILITÉ LIMITÉE sur ardoise (peu poreuse), tuile émaillée récente (déjà hydrophobe), zinc (imperméable de nature). Nous refusons régulièrement l'hydrofuge sur ces supports — la crédibilité d'un artisan se construit sur ce qu'il NE VEND PAS aussi.",
          },
          {
            question:
              "Combien coûte un traitement hydrofuge à Bordeaux ?",
            answer:
              "Fourchettes 2026 : hydrofuge incolore seul 6-12 €/m² (sur toiture déjà démoussée), coloré 8-15 €/m², combo démoussage + hydrofuge 18-27 €/m² (meilleur ROI), combo complet nettoyage + démoussage + hydrofuge 25-38 €/m² (toiture négligée). Pour une maison type 120 m² : combo démoussage + hydrofuge 2 160-3 240 € TTC. TVA 10 % logements >2 ans. Diagnostic + test porosité gratuit si chantier signé.",
          },
          {
            question:
              "Quelle différence entre hydrofuge coloré et incolore ?",
            answer:
              "INCOLORE : préserve l'aspect naturel des tuiles récentes, invisible après application, produit siloxane ou polymère. Choix par défaut. COLORÉ (oxyde de fer rouge, brun, anthracite) : ravive une toiture VIEILLIE sans la refaire, donne un aspect uniforme, cache les zones décolorées après démoussage. Coût +25 % vs incolore. Attention : le coloré peut être refusé en secteur ABF ou UNESCO (changement d'aspect nécessitant DP). Nous vérifions systématiquement.",
          },
          {
            question:
              "Combien de temps tient un hydrofuge ?",
            answer:
              "Un hydrofuge professionnel appliqué correctement (préparation + 2 passages croisés + séchage) tient 8-12 ans en climat girondin. Nous garantissons 10 ans. La perlée d'eau reste visible sur toute la période. Au-delà, le film se dégrade progressivement — nouvelle application d'entretien possible à coût réduit (2-4 €/m² sur toiture déjà propre). Sur versant nord + couvert végétal très dense : renouvellement conseillé à 8 ans.",
          },
          {
            question:
              "Hydrofuge respirant vs étanchéifiant : la différence ?",
            answer:
              "RESPIRANT (siloxane ou polymère professionnel) : imperméabilise l'eau de pluie MAIS laisse passer la vapeur d'eau intérieure. Aucune condensation piégée sous le film. C'est le SEUL choix correct. ÉTANCHÉIFIANT (résines bon marché, produits grand public) : bloque tout, y compris la vapeur intérieure = condensation piégée sous le film = pourrissement des chevrons et humidité chronique en combles. Nous n'utilisons JAMAIS de produit étanchéifiant.",
          },
          {
            question:
              "Faut-il faire démoussage + hydrofuge le même jour ?",
            answer:
              "PAS le même jour. Protocole : (1) démoussage complet (brossage + anti-mousse rémanent), (2) séchage 24-48h selon météo, (3) application hydrofuge en 2 passages croisés, (4) séchage final 12-24h. Un hydrofuge sur tuile mouillée ou encore sale (mousses non éradiquées) = désastre garanti : le film piège les spores et l'humidité. Total chantier combo : 2-3 jours avec créneaux météo intégrés.",
          },
          {
            question:
              "L'hydrofuge fait-il briller ma toiture ?",
            answer:
              "Non. Un hydrofuge professionnel siloxane ou polymère est MAT une fois séché — invisible à l'œil nu. Ce qui distingue une toiture hydrofugée d'une non traitée : la perlée d'eau (l'eau forme des gouttes qui roulent au lieu d'imprégner). Certains hydrofuges bon marché ou produits amateur créent un aspect brillant/plastique inesthétique et jaunissent en 2-3 ans — nous ne les utilisons jamais.",
          },
          {
            question:
              "L'hydrofuge est-il éligible aux aides rénovation ?",
            answer:
              "Non pour l'hydrofuge seul (traitement d'entretien, pas de rénovation énergétique). Cependant : (1) TVA à 10 % applicable pour logements >2 ans, (2) si intégré dans un chantier plus large de rénovation de toiture avec isolation, éligibilité MaPrimeRénov' possible sur la partie isolation. Pour un simple entretien préventif, aucune aide, mais l'investissement 18-27 €/m² évite 85-220 €/m² de réfection tardive — facteur 5-10.",
          },
          {
            question:
              "Comment savoir si mon hydrofuge est encore actif ?",
            answer:
              "Test simple : par temps sec, versez un litre d'eau à plusieurs endroits de la toiture. Hydrofuge ACTIF : l'eau perle et roule immédiatement, aucune imprégnation. Hydrofuge USÉ : l'eau s'étale, imprègne la tuile en quelques secondes, disparaît. Le hydrofuge est aussi visiblement dégradé si vous voyez des mousses réapparaître sur les zones précédemment traitées. Nous proposons un contrôle gratuit à 8-10 ans pour évaluer.",
          },
          {
            question:
              "Refusez-vous des chantiers d'hydrofuge ?",
            answer:
              "Oui, régulièrement. Nous refusons l'hydrofuge sur : (1) ardoise récente <15 ans (déjà peu poreuse), (2) tuile émaillée moderne (hydrophobe d'origine), (3) toiture qui présente des défauts structurels préalables (tuiles cassées à remplacer, faîtage disloqué — traiter d'abord), (4) toiture <10 ans en excellent état (prématuré, revenir dans 5 ans). Un hydrofuge inutile est de l'argent gaspillé — nous vous le disons honnêtement.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
