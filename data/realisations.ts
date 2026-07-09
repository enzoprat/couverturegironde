/**
 * Réalisations chantiers — alimenté avec les chantiers réels Couverture Gironde.
 *
 * Ajouter une nouvelle réalisation :
 *  1. Drop photos dans /public/images/realisations/{slug}-avant.webp et -apres.webp
 *  2. Ajouter une entrée ici
 *  3. (Optionnel) créer une page individuelle /realisations/[slug]
 *
 * Convention naming photos :
 *  - {slug}.webp          → image principale (si chantier sans avant/après)
 *  - {slug}-avant.webp    → image AVANT intervention
 *  - {slug}-apres.webp    → image APRÈS intervention
 *  - {slug}-pendant.webp  → image PENDANT (optionnelle, équipe en action)
 *  - {slug}-detail.webp   → vue de détail (optionnelle)
 *
 * IMPORTANT — contenu unique obligatoire :
 *  Chaque réalisation porte son propre `content` (sections + keyPoints). Le
 *  template ne génère AUCUN paragraphe générique : tout le corps de texte vient
 *  d'ici. Deux chantiers ne doivent jamais partager la même structure de sections
 *  ni les mêmes tournures — sinon Google détecte du contenu semi-dupliqué et
 *  l'avantage E-E-A-T des case studies s'effondre. Varie les titres de sections,
 *  le nombre de sections, l'angle et le vocabulaire d'un chantier à l'autre.
 */

/** Une section de contenu unique (H2 + paragraphes) propre à un chantier. */
export type RealisationSection = {
  /** Titre de section (rendu en H2). Doit être unique et spécifique au chantier. */
  heading: string;
  /** Paragraphes de la section. */
  body: string[];
};

/**
 * Photo d'étape d'un chantier (galerie process), pour les chantiers dont le
 * récit est une progression plutôt qu'un simple avant/après.
 * Le fichier attendu est /public/images/realisations/{slug}-{suffix}.webp
 */
export type RealisationGalleryItem = {
  /** Suffixe de fichier ({slug}-{suffix}.webp). */
  suffix: string;
  /** Texte alternatif (accessibilité + SEO image). */
  alt: string;
  /** Légende affichée sous la photo. */
  caption: string;
};

export type Realisation = {
  /** Slug URL-safe utilisé pour les fichiers image et la page individuelle. */
  slug: string;
  /** Titre court du chantier. */
  title: string;
  /** Service principal réalisé (slug ServiceCategory). */
  service: string;
  /** Slug ville (cf. data/locations.ts). */
  villeSlug: string;
  /** Nom ville lisible. */
  villeName: string;
  /** Description courte (1-2 lignes) — sert de lead dans le hero + meta. */
  description: string;
  /** Date du chantier (ISO). Affichée sur la page (« Période »). */
  date: string;
  /**
   * Date de publication de la page (ISO). Distincte de `date` : un chantier
   * d'octobre 2024 peut être publié en 2026. Sert de `lastmod` sitemap et de
   * `datePublished` schema. Si absent, le sitemap retombe sur la date de build
   * (jamais sur `date`, pour ne pas envoyer un faux signal de fraîcheur).
   */
  publishedAt?: string;
  /** Indique si l'image après-traitement est disponible. */
  hasAvantApres: boolean;
  /** Corps de page unique : sections rédactionnelles + points clés du chantier. */
  content: {
    sections: RealisationSection[];
    keyPoints: string[];
    /** Titre du bloc galerie (H2). Défaut : « Les étapes de l'intervention ». */
    galleryTitle?: string;
    /** Paragraphe d'intro sous le titre galerie. Doit rester propre au chantier. */
    galleryIntro?: string;
    /** Galerie d'étapes optionnelle (chantiers racontés en progression). */
    gallery?: RealisationGalleryItem[];
  };
};

export const REALISATIONS: Realisation[] = [
  {
    slug: 'creation-entablement-cheneau-zinc-bordeaux-2024',
    title: 'Création d\u2019un entablement zinc avec ch\u00e9neau int\u00e9gr\u00e9',
    service: 'zinguerie',
    villeSlug: 'bordeaux',
    villeName: 'Bordeaux',
    description:
      "Habillage en zinc du pied de toiture d'un immeuble bordelais donnant sur rue : un entablement neuf court sur toute la longueur de l'\u00e9gout, avec un ch\u00e9neau encaiss\u00e9 qui recueille les eaux du versant tuile canal. Un ouvrage de zinguerie lin\u00e9aire, soud\u00e9 \u00e0 l'\u00e9tain, qui redonne une ligne d'\u00e9gout franche et \u00e9tanche sur plusieurs dizaines de m\u00e8tres.",
    date: '2024-12-13',
    hasAvantApres: false,
    content: {
      sections: [
        {
          heading: 'Tout un pied de toiture \u00e0 rhabiller, en fa\u00e7ade sur rue',
          body: [
            "Sur cet immeuble du centre de Bordeaux, c'est toute la ligne d'\u00e9gout qui devait \u00eatre reprise : l'entablement, cette bande horizontale qui ferme le bas du versant et raccorde la couverture \u00e0 la corniche, avait fait son temps. Le chantier se joue en fa\u00e7ade sur rue, en surplomb direct du trottoir et de la chauss\u00e9e \u2014 une contrainte urbaine qui impose de travailler propre et de ne rien laisser tomber en contrebas.",
            "L'enjeu n'est pas d\u00e9coratif : c'est en pied de versant que se concentre toute l'eau ruissel\u00e9e par la toiture. Un entablement fatigu\u00e9, c'est l'eau qui finit par s'infiltrer derri\u00e8re la corniche et attaquer la ma\u00e7onnerie de fa\u00e7ade.",
          ],
        },
        {
          heading: 'Un ch\u00e9neau encaiss\u00e9 qui court sur toute la longueur',
          body: [
            "Nous avons fa\u00e7onn\u00e9 et pos\u00e9 un entablement zinc neuf sur l'int\u00e9gralit\u00e9 de l'\u00e9gout, en int\u00e9grant un ch\u00e9neau encaiss\u00e9 : plut\u00f4t qu'une goutti\u00e8re pendante accroch\u00e9e en rive, l'eau est recueillie dans un caisson de zinc log\u00e9 dans l'\u00e9paisseur du pied de toiture. Les photos montrent cette large bande de zinc clair qui suit la rue en enfilade, jusqu'\u00e0 tourner l'angle du b\u00e2timent.",
            "Les feuilles de zinc sont assembl\u00e9es par soudure \u00e0 l'\u00e9tain, jonction apr\u00e8s jonction, pour former un ouvrage continu sur toute la longueur \u2014 aucun joint mastic\u00e9 qui l\u00e2cherait au premier hiver. Les tuiles canal du versant viennent recouvrir la bavette haute du ch\u00e9neau, et l'eau est conduite sans reprise possible jusqu'aux descentes.",
          ],
        },
      ],
      keyPoints: [
        'Entablement zinc neuf sur toute la ligne d\u2019\u00e9gout',
        'Ch\u00e9neau encaiss\u00e9 int\u00e9gr\u00e9 au pied de toiture',
        'Chantier en fa\u00e7ade sur rue, en secteur urbain bordelais',
        'Feuilles de zinc soud\u00e9es \u00e0 l\u2019\u00e9tain, ouvrage continu',
        'Raccord franc avec la couverture tuile canal existante',
        '\u00c9vacuation des eaux de pluie ma\u00eetris\u00e9e jusqu\u2019aux descentes',
      ],
      galleryTitle: 'L\u2019entablement zinc en enfilade sur la rue',
      galleryIntro:
        "La longueur est ici toute la difficult\u00e9 : voici l'ouvrage vu sous plusieurs angles, de l'enfilade sur la rue jusqu'au retour d'angle et \u00e0 la descente.",
      gallery: [
        {
          suffix: 'enfilade-rue',
          alt: "Entablement et ch\u00e9neau zinc courant sur toute la longueur de l'\u00e9gout d'un immeuble \u00e0 Bordeaux",
          caption: "L'entablement zinc en enfilade, sur toute la longueur de la fa\u00e7ade",
        },
        {
          suffix: 'angle-descente',
          alt: "Retour d'angle de l'entablement zinc au-dessus d'une rue de Bordeaux",
          caption: "Le retour d'angle du ch\u00e9neau, qui conduit l'eau vers la descente",
        },
      ],
    },
  },
  {
    slug: 'creation-tour-cheminee-zinc-begles-2024',
    title: 'Création d\u2019une tour de cheminée en zinc autour d\u2019une souche pierre',
    service: 'zinguerie',
    villeSlug: 'begles',
    villeName: 'Bègles',
    description:
      "Habillage complet en zinc d'une souche de cheminée en pierre à Bègles : bavette avale, solins latéraux engravés dans la pierre et besace arrière façonnés sur mesure autour de la souche. Une « tour de cheminée » étanche qui protège le point le plus vulnérable d'une toiture en tuile canal ancienne.",
    date: '2024-10-09',
    hasAvantApres: false,
    content: {
      sections: [
        {
          heading: 'Le pied de souche, ce point faible que l\u2019eau finit toujours par trouver',
          body: [
            "À Bègles, au sud de Bordeaux, cette maison ancienne portait une imposante souche de cheminée en pierre plantée en plein versant de tuile canal. C'est, sur n'importe quelle toiture, l'endroit le plus exposé aux infiltrations : l'eau qui ruisselle sur le toit vient buter contre la souche, s'accumule à sa base amont et cherche la moindre faille entre la pierre et les tuiles.",
            "Sans un habillage métallique correctement façonné, aucune tuile ne peut garantir l'étanchéité à cette jonction. La solution durable porte un nom de métier : la « tour de cheminée », un ceinturage complet en zinc qui enveloppe le pied de la souche sur ses quatre faces.",
          ],
        },
        {
          heading: 'Bavette, solins engravés et besace : le zinc façonné face par face',
          body: [
            "Nous avons façonné et posé chaque élément sur mesure autour de la souche. En aval, une large bavette recouvre les tuiles et conduit l'eau par-dessus la couverture. Sur les côtés, des solins remontent le long de la pierre et sont engravés dans un trait de scie garni, pour que rien ne puisse repasser derrière le zinc.",
            "En amont, le point le plus délicat, nous avons formé une besace — un rejingot relevé qui capte l'eau arrivant du faîtage et la renvoie de part et d'autre de la souche, sans jamais la laisser stagner contre la pierre. C'est cet assemblage, visible sous tous ses angles sur les photos, qui fait la différence entre une réparation qui tient un hiver et une tour de cheminée qui dure des décennies.",
          ],
        },
        {
          heading: 'Deux souches traitées et une toiture sécurisée',
          body: [
            "La maison comptait une seconde souche, plus modeste, qui a reçu le même traitement zinc adapté à ses dimensions. Travailler les deux dans la même intervention garantit une cohérence d'exécution et supprime d'un coup les deux points de fragilité de la toiture.",
            "Le résultat est un pied de souche net, gris zinc, parfaitement intégré à la tuile canal environnante et surtout totalement étanche. L'ensemble est réalisé en zinc de qualité, soudé et engravé dans les règles de l'art, et couvert par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        'Habillage zinc complet d\u2019une souche pierre à Bègles',
        'Bavette avale conduisant l\u2019eau par-dessus les tuiles',
        'Solins latéraux engravés dans la pierre de la souche',
        'Besace amont renvoyant l\u2019eau de part et d\u2019autre',
        'Seconde souche traitée dans la même intervention',
        'Zinc soudé et engravé dans les règles, garantie décennale',
      ],
      galleryTitle: 'La tour de cheminée sous toutes ses faces',
      galleryIntro:
        "Une tour de cheminée ne se juge qu'en tournant autour de la souche. Voici l'habillage zinc terminé vu de chaque côté : la seconde souche, un solin latéral, la besace amont et l'angle de bavette.",
      gallery: [
        {
          suffix: 'souche-secondaire',
          alt: 'Seconde souche de cheminée en pierre habillée de zinc sur toiture tuile canal à Bègles',
          caption: 'La seconde souche, plus modeste, ceinturée de zinc à sa base',
        },
        {
          suffix: 'solin-lateral',
          alt: 'Solin latéral en zinc engravé le long de la souche pierre à Bègles',
          caption: 'Un solin latéral remontant le long de la pierre, engravé pour bloquer l\u2019eau',
        },
        {
          suffix: 'besace-arriere',
          alt: 'Besace en zinc formée en amont de la souche de cheminée à Bègles',
          caption: 'La besace amont : le rejingot qui renvoie l\u2019eau de part et d\u2019autre',
        },
        {
          suffix: 'angle-bavette',
          alt: 'Angle de bavette et solin en zinc au pied de la souche à Bègles',
          caption: 'L\u2019angle bavette / solin, là où se joue l\u2019étanchéité du pied de souche',
        },
      ],
    },
  },
  {
    slug: 'refection-couverture-tuile-canal-volige-pessac-2024',
    title: 'Réfection d\u2019une couverture tuile canal posée sur volige',
    service: 'couverture',
    villeSlug: 'pessac',
    villeName: 'Pessac',
    description:
      "Réfection d'une toiture en tuile canal sur une maison ancienne de Pessac, dont la couverture reposait directement sur volige. Dépose des tuiles, mise à nu du platelage bois, pose d'un écran de sous-toiture puis d'un double liteaunage neuf : un support entièrement repensé pour ventiler et fiabiliser la nouvelle couverture.",
    date: '2024-08-27',
    hasAvantApres: false,
    content: {
      sections: [
        {
          heading: 'Une tuile canal posée à même la volige, sans ventilation',
          body: [
            "Cette maison ancienne de Pessac portait une couverture en tuile canal typique du bâti girondin, mais montée selon un principe d'un autre temps : les tuiles reposaient directement sur la volige, ces planches de bois jointives clouées sur la charpente. Un système courant sur les toits anciens, mais qui a un défaut majeur — aucune lame d'air, aucun écran, donc aucune tolérance à la moindre infiltration.",
            "Avec les décennies, les tuiles s'étaient encrassées et déplacées, et la volige commençait à souffrir de l'humidité piégée. Reposer simplement des tuiles neuves sur ce support n'aurait servi à rien : c'est tout le principe de pose qu'il fallait moderniser.",
          ],
        },
        {
          heading: 'Dépose des tuiles et mise à nu du platelage bois',
          body: [
            "Nous avons déposé l'intégralité de la tuile canal et dégagé la volige pour l'inspecter planche par planche. Le platelage, globalement sain, a été conservé et purgé de ses éléments fatigués. Cette mise à nu, visible sur les clichés de chantier, est le moment de vérité : c'est là qu'on décide de ce qu'on garde et de ce qu'on remplace, avant de rebâtir la couverture sur des bases fiables.",
            "Contrairement à une charpente à chevrons apparents, une toiture sur volige impose de travailler le support comme un plan continu : chaque défaut de planéité se rattrape à cette étape, sous peine de le retrouver dans l'alignement des tuiles.",
          ],
        },
        {
          heading: 'Écran de sous-toiture et double liteaunage pour tout ventiler',
          body: [
            "Sur la volige, nous avons déroulé un écran de sous-toiture, puis mis en œuvre un double liteaunage : d'abord des contre-lattes dans le sens de la pente, puis les liteaux perpendiculaires qui porteront les tuiles. On le voit nettement sur la trame de bois clair — c'est ce croisillon qui crée la lame d'air continue absente à l'origine, celle qui ventile la sous-face des tuiles et évacue l'humidité de la volige.",
            "Le support est désormais complet : volige assainie, écran pare-pluie, lame d'air ventilée et liteaunage neuf parfaitement aligné, prêt à recevoir la tuile canal. Là où il n'y avait qu'une simple planche et des tuiles, la toiture dispose enfin d'un système de couverture complet et durable, couvert par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        'Maison ancienne de Pessac, tuile canal posée sur volige',
        'Ancien système sans écran ni lame d\u2019air ventilée',
        'Dépose des tuiles et inspection de la volige planche par planche',
        'Platelage bois assaini et conservé',
        'Écran de sous-toiture posé sur toute la surface',
        'Double liteaunage créant enfin une lame d\u2019air continue',
      ],
      galleryTitle: 'De la volige nue au support prêt à couvrir',
      galleryIntro:
        "Ce chantier illustre ce qui change vraiment lors d'une réfection sur volige : le travail se joue sous les tuiles. On suit ici la toiture depuis son état d'origine jusqu'au double liteaunage neuf.",
      gallery: [
        {
          suffix: 'avant-ensemble',
          alt: 'Toiture en tuile canal ancienne vue d\u2019ensemble avant réfection à Pessac',
          caption: 'Avant : la tuile canal d\u2019origine, encrassée et par endroits déplacée',
        },
        {
          suffix: 'avant-detail-mousse',
          alt: 'Détail des tuiles canal usées et couvertes de mousse avant dépose à Pessac',
          caption: 'Détail : tuiles usées et envahies de mousse, posées sans écran',
        },
        {
          suffix: 'depose-volige',
          alt: 'Volige mise à nu après dépose complète de la tuile canal à Pessac',
          caption: 'Dépose : le platelage de volige mis à nu et inspecté planche par planche',
        },
        {
          suffix: 'ecran-liteaunage',
          alt: 'Écran de sous-toiture et double liteaunage neuf posés sur la volige à Pessac',
          caption: 'Le double liteaunage neuf sur écran : la lame d\u2019air enfin créée',
        },
      ],
    },
  },
  {
    slug: 'refection-complete-couverture-tuile-canal-le-bouscat-2024',
    title: 'Réfection complète d\u2019une toiture en tuile canal en cœur de ville',
    service: 'couverture',
    villeSlug: 'bouscat',
    villeName: 'Le Bouscat',
    description:
      "Réfection totale de la toiture d'une maison de bourg mitoyenne au Bouscat, aux portes de Bordeaux. Dépose de la vieille tuile canal envahie par la mousse, pose d'un écran de sous-toiture et d'un contre-liteaunage neuf, puis couverture en tuile canal nuancée avec closoir ventilé et faîtières scellées. Un chantier mené en site urbain contraint.",
    date: '2024-06-25',
    hasAvantApres: false,
    content: {
      sections: [
        {
          heading: 'Une vieille tuile canal à bout de souffle, coincée entre deux murs mitoyens',
          body: [
            "Au Bouscat, en première couronne bordelaise, cette maison de bourg présentait une toiture en tuile canal usée jusqu'à la corde : mousses épaisses dans les ondes, tuiles descellées et déteintes, un faîtage qui ne retenait plus grand-chose. Accolée à ses voisines par deux murs mitoyens aveugles et bordée d'une rue passante, elle imposait d'emblée une organisation de chantier serrée — pas de recul, pas de zone de stockage au sol, tout se joue sur le toit et par la rue.",
            "Le constat rejoignait la demande du propriétaire : la couverture n'était plus réparable par retouches. C'est une réfection totale qu'il fallait engager, en composant avec les contraintes du bâti urbain dense.",
          ],
        },
        {
          heading: 'Dépose de l\u2019ancienne couverture et reconstruction du support',
          body: [
            "Toute l'ancienne tuile canal a été déposée et évacuée, mettant à jour la volige et la charpente que nous avons inspectées avant d'aller plus loin. Sur ce support assaini, nous avons déroulé un écran de sous-toiture puis fixé un contre-liteaunage neuf, bien visible sur les clichés en cours de chantier : ce sont ces tasseaux clairs qui portent la couverture et ménagent la lame d'air indispensable à sa ventilation.",
            "Cette phase, la moins spectaculaire, est pourtant celle qui décide de la tenue du toit pour les décennies à venir. Un support plan, sec et ventilé, c'est l'assurance que la tuile neuve ne travaillera pas et que l'humidité ne stagnera jamais dessous.",
          ],
        },
        {
          heading: 'Pose de la tuile canal neuve, closoir ventilé et faîtières',
          body: [
            "La couverture neuve a été montée en tuile canal nuancée, dont les teintes mêlées se fondent dans le paysage de toits anciens du quartier — un point qui compte autant pour l'harmonie de la rue que pour l'esthétique de la maison. Au faîte, nous avons installé un closoir ventilé avant de sceller les faîtières, garantissant à la fois l'étanchéité du point haut et la sortie de l'air qui circule sous les tuiles.",
            "Le résultat, saisi sur la vue finale, est un toit entièrement renouvelé, rectiligne et homogène d'un pignon à l'autre, prêt à traverser sans faiblir les prochaines décennies. L'ensemble est couvert par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        'Réfection totale d\u2019une maison de bourg mitoyenne au Bouscat',
        'Ancienne tuile canal envahie de mousse et descellée',
        'Chantier mené en site urbain contraint, sans recul au sol',
        'Écran de sous-toiture et contre-liteaunage neuf pour la lame d\u2019air',
        'Couverture en tuile canal nuancée, accordée au bâti du quartier',
        'Closoir ventilé et faîtières scellées, garantie décennale',
      ],
      galleryTitle: 'Les cinq visages d\u2019une toiture qui renaît',
      galleryIntro:
        "De la vieille tuile moussue au faîtage neuf, ce chantier s'est déroulé en plusieurs actes. On les revit ici dans l'ordre : la dépose, le support reconstruit, la tuile canal neuve, puis les faîtières.",
      gallery: [
        {
          suffix: 'depose-ancienne-toiture',
          alt: 'Ancienne toiture en tuile canal moussue et descellée avant réfection au Bouscat',
          caption: 'Avant : la vieille tuile canal envahie de mousse, entre deux murs mitoyens',
        },
        {
          suffix: 'ecran-contre-liteaunage',
          alt: 'Écran de sous-toiture et contre-liteaunage neuf posés sur toute la toiture au Bouscat',
          caption: 'Le support reconstruit : écran de sous-toiture et contre-liteaunage neuf',
        },
        {
          suffix: 'pose-tuiles-canal',
          alt: 'Pose de la tuile canal nuancée neuve et du closoir ventilé au faîte au Bouscat',
          caption: 'La tuile canal neuve montée versant par versant, closoir ventilé au faîte',
        },
        {
          suffix: 'scellement-faitieres',
          alt: 'Scellement des faîtières terre cuite sur la couverture neuve au Bouscat',
          caption: 'Finition du faîtage : les faîtières scellées sur le closoir ventilé',
        },
      ],
    },
  },
  {
    slug: 'pose-ecran-sous-toiture-hpv-merignac-2024',
    title: 'Reprise d\u2019un versant avec pose d\u2019un écran de sous-toiture HPV',
    service: 'reparation',
    villeSlug: 'merignac',
    villeName: 'Mérignac',
    description:
      "Reprise d'un versant de toiture à Mérignac qui laissait passer l'eau, faute d'écran sous les tuiles. Dépose de la couverture, pose d'un écran de sous-toiture HPV agrafé sur les chevrons, puis contre-liteaunage neuf pour ménager la lame d'air : un versant remis aux règles de l'art, prêt à recevoir de nouveau ses tuiles.",
    date: '2024-02-06',
    hasAvantApres: false,
    content: {
      sections: [
        {
          heading: 'Un versant qui prenait l\u2019eau, sans écran, à Mérignac',
          body: [
            "Sur ce pavillon de Mérignac, dans l'agglomération bordelaise, un versant complet de la toiture était en cause : des traces d'humidité apparaissaient en sous-face et le propriétaire soupçonnait des infiltrations à chaque épisode venteux. En ouvrant la couverture, le diagnostic s'est confirmé — les chevrons et les liteaux étaient posés à nu, sans le moindre écran de sous-toiture pour rattraper l'eau passant sous les tuiles.",
            "Sur les toitures anciennes, cette absence d'écran est fréquente : tant que les tuiles sont parfaitement jointives, ça tient. Mais au premier coup de vent qui soulève ou décale une tuile, plus rien n'arrête l'eau avant l'isolant. C'est exactement ce qui se produisait ici, et c'est ce versant précis que nous avons repris.",
          ],
        },
        {
          heading: 'Dépose de la couverture et agrafage de l\u2019écran HPV sur les chevrons',
          body: [
            "Nous avons déposé les tuiles du versant concerné et contrôlé l'état de la charpente, restée saine. L'écran de sous-toiture HPV (hautement perméable à la vapeur) a ensuite été déployé et agrafé directement sur les chevrons, en descendant du faîtage vers l'égout avec le recouvrement réglementaire entre chaque bande.",
            "Le choix d'un écran HPV n'est pas anodin : il arrête l'eau liquide venue de l'extérieur tout en laissant filer vers le dehors la vapeur produite à l'intérieur du logement. C'est ce qui évite de piéger l'humidité et de faire pourrir la charpente — l'écueil des vieux films non respirants.",
          ],
        },
        {
          heading: 'Contre-liteaunage neuf et lame d\u2019air ventilée',
          body: [
            "Par-dessus l'écran, nous avons cloué un contre-liteaunage neuf dans le sens des chevrons, puis les liteaux qui recevront les tuiles. Ce double lattage crée une lame d'air continue entre l'écran et la couverture : l'air y circule, sèche la sous-face des tuiles et évacue la condensation, ce qui conditionne directement la longévité du toit.",
            "Le versant est ainsi remis aux règles de l'art, conforme aux DTU couverture, et n'attend plus que la repose des tuiles. Le propriétaire retrouve un toit qui possède désormais sa vraie seconde étanchéité, là où il n'y avait qu'une couche de tuiles. Intervention couverte par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        'Chantier à Mérignac, dans l\u2019agglomération bordelaise',
        'Versant sans écran de sous-toiture, à l\u2019origine des infiltrations',
        'Contrôle de la charpente après dépose des tuiles',
        'Écran HPV agrafé sur chevrons, recouvrement réglementaire',
        'Contre-liteaunage neuf créant une lame d\u2019air ventilée',
        'Versant remis aux DTU, prêt pour la repose des tuiles',
      ],
      galleryTitle: 'Trois temps forts d\u2019une reprise de versant',
      galleryIntro:
        "Cette reprise se lit en trois images : le versant ouvert et mis à nu, la pose de l'écran HPV, puis le liteaunage neuf prêt à recevoir les tuiles.",
      gallery: [
        {
          suffix: 'depose-tuiles',
          alt: 'Versant de toiture déposé, chevrons et liteaux à nu sans écran de sous-toiture à Mérignac',
          caption: 'Le versant ouvert : chevrons à nu, sans aucun écran sous les tuiles',
        },
        {
          suffix: 'liteaunage-neuf',
          alt: 'Écran de sous-toiture HPV posé et contre-liteaunage neuf cloué par-dessus à Mérignac',
          caption: 'Écran HPV posé et contre-liteaunage neuf cloué, prêt à recevoir les tuiles',
        },
      ],
    },
  },
  {
    slug: 'changement-closoir-ventile-faitage-andernos-les-bains-2024',
    title: 'Changement de closoir ventilé sur un faîtage en tuile canal',
    service: 'faitage',
    villeSlug: 'andernos-les-bains',
    villeName: 'Andernos-les-Bains',
    description:
      "Remplacement du closoir de faîtage d'une maison d'Andernos-les-Bains, en bord de Bassin d'Arcachon. Dépose d'un ancien closoir métallique fatigué par les embruns, pose d'un closoir ventilé neuf en terre cuite épousant les tuiles canal, puis rescellement des faîtières à sec : une ligne de faîte étanche et surtout de nouveau ventilée contre la condensation.",
    date: '2024-05-14',
    hasAvantApres: false,
    content: {
      sections: [
        {
          heading:
            'Un faîtage mal ventilé à Andernos-les-Bains, face aux embruns du Bassin',
          body: [
            "Cette maison se trouve à Andernos-les-Bains, sur la rive nord du Bassin d'Arcachon. Ici, le vent salin et l'air chargé d'humidité venus du Bassin s'attaquent en permanence aux points hauts de la toiture. Le faîtage était coiffé d'un vieux closoir métallique : au fil des années, le métal s'était froissé, corrodé et déformé, ne remplissant plus correctement son rôle de jonction entre les deux versants.",
            "Le problème n'était pas qu'une question d'étanchéité à la pluie. Un closoir fermé ou percé empêche la lame d'air de circuler sous les tuiles : l'humidité stagne, la condensation s'installe sous la couverture et, à terme, ce sont les liteaux et la charpente qui trinquent. Sur le Bassin, où l'hygrométrie est forte toute l'année, cette ventilation du faîte est capitale.",
          ],
        },
        {
          heading: 'Dépose du closoir métallique et mise à nu de la ligne de faîte',
          body: [
            "Nous avons commencé par déposer les tuiles faîtières une à une, puis retirer entièrement l'ancien closoir métallique. Cette étape met à nu la ligne de faîte et permet de contrôler l'état des liteaux de rive et du support : rien ne sert de reposer un faîtage neuf sur une assise douteuse.",
            "Le support s'étant révélé sain, nous avons pu enchaîner directement sur la pose du nouveau closoir, sans reprise de charpente. Travailler faîtière par faîtière, plutôt que d'arracher toute la ligne d'un coup, sécurise le chantier et garde le reste de la couverture protégé pendant l'intervention.",
          ],
        },
        {
          heading: 'Pose d\u2019un closoir ventilé terre cuite et rescellement des faîtières à sec',
          body: [
            "Sur toute la longueur du faîte, nous avons déroulé un closoir ventilé neuf, teinté ton tuile pour se fondre dans la couverture. Ses bavettes plissées épousent le galbe de chaque tuile canal et ses plages perforées laissent respirer la sous-toiture tout en bloquant la pluie, les insectes et les oiseaux. C'est exactement ce que l'ancien closoir métallique ne faisait plus.",
            "Les tuiles faîtières ont ensuite été reposées et fixées à sec sur ce closoir, sans mortier, ce qui autorise de futures interventions sans casse et évite les micro-fissures d'un scellement rigide. Sur la vue finale, la ligne de faîte est rectiligne, homogène avec le reste du toit et de nouveau parfaitement ventilée — le tout couvert par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        "Chantier à Andernos-les-Bains, rive nord du Bassin d'Arcachon",
        'Dépose d\u2019un ancien closoir métallique corrodé par les embruns',
        'Contrôle des liteaux de rive avant toute repose',
        'Pose d\u2019un closoir ventilé terre cuite épousant les tuiles canal',
        'Ventilation du faîte rétablie contre la condensation sous toiture',
        'Faîtières rescellées à sec, démontables et sans micro-fissures',
      ],
      galleryTitle: 'Du vieux métal au closoir ventilé, étape par étape',
      galleryIntro:
        "Ce chantier de faîtage s'est déroulé en trois temps bien distincts. On les revoit ici en images, depuis le closoir métallique fatigué jusqu'aux faîtières rescellées sur le closoir ventilé neuf.",
      gallery: [
        {
          suffix: 'ancien-closoir-metal',
          alt: 'Ancien closoir métallique froissé et corrodé sur le faîtage à Andernos-les-Bains',
          caption: "L'ancien closoir métallique, froissé et corrodé par les embruns du Bassin",
        },
        {
          suffix: 'depose-faitieres',
          alt: 'Ligne de faîte mise à nu après dépose des tuiles faîtières et du closoir à Andernos-les-Bains',
          caption: 'Dépose des faîtières : la ligne de faîte mise à nu pour contrôle du support',
        },
        {
          suffix: 'pose-closoir-ventile',
          alt: 'Pose du closoir ventilé terre cuite neuf sur le faîtage en tuile canal à Andernos-les-Bains',
          caption: 'Le closoir ventilé neuf déroulé sur le faîte, ses bavettes épousant les tuiles canal',
        },
      ],
    },
  },
  {
    slug: 'demoussage-hydrofuge-toiture-sainte-helene-2024',
    title: 'Démoussage et hydrofuge en pleine commune forestière',
    service: 'demoussage',
    villeSlug: 'sainte-helene',
    villeName: 'Sainte-Hélène',
    description:
      "Démoussage puis traitement hydrofuge d'une toiture en tuile canal à Sainte-Hélène, commune boisée du Médoc. En bordure de forêt, l'ombre et l'humidité favorisent les lichens : nettoyage anti-mousse complet autour de la souche et des accessoires de toit, puis hydrofuge pour espacer durablement les entretiens.",
    date: '2024-03-26',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Quand la forêt de Sainte-Hélène s\u2019invite sur les tuiles',
          body: [
            "À Sainte-Hélène, en plein Médoc forestier, les toitures paient le prix de leur environnement : entourées de pins et de feuillus, elles restent à l'ombre et à l'humidité une bonne partie de la journée, un terrain idéal pour les lichens. Sur la photo avant travaux, la tuile canal disparaît sous un semis de taches grises et blanches, alors même que la couverture est saine en dessous.",
            "Ce chantier présentait une contrainte de plus : une souche de cheminée maçonnée et une parabole en pleine toiture, autant d'obstacles à contourner sans rien abîmer pendant le nettoyage.",
          ],
        },
        {
          heading: 'Nettoyage anti-mousse minutieux, puis hydrofuge protecteur',
          body: [
            "Nous avons traité l'ensemble des versants pour décoller mousses et lichens, en travaillant avec précaution autour de la souche et du pied de parabole — ces points de fixation et d'étanchéité ne supportent aucune approximation. Une fois la tuile débarrassée, sa teinte terre cuite d'origine est réapparue, éclatante, comme le montre la photo après notre passage.",
            "Parce qu'en lisière de forêt les mousses reviennent vite, nous avons terminé par un traitement hydrofuge. Il imperméabilise la tuile, freine la réinstallation des lichens et permet d'espacer nettement les entretiens — un choix particulièrement pertinent dans un environnement aussi ombragé et humide.",
          ],
        },
      ],
      keyPoints: [
        'Toiture en lisière de forêt, à Sainte-Hélène (Médoc)',
        'Environnement boisé propice au retour rapide des lichens',
        'Nettoyage anti-mousse complet des versants',
        'Travail précautionneux autour de la souche et de la parabole',
        'Teinte terre cuite d\u2019origine retrouvée',
        'Hydrofuge protecteur pour espacer les entretiens',
      ],
    },
  },
  {
    slug: 'changement-couverture-tuiles-pessac-2024',
    title: 'Changement complet de couverture en tuiles',
    service: 'couverture',
    villeSlug: 'pessac',
    villeName: 'Pessac',
    description:
      "Remplacement intégral de la couverture d'une maison de ville à Pessac : dépose des tuiles anciennes en fin de vie, mise à nu et contrôle de la charpente, pose d'un écran de sous-toiture et d'un contre-lattage neuf, puis pose d'une couverture en tuiles neuves. Un toit repris de A à Z.",
    date: '2024-01-30',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Des tuiles en fin de vie sur une maison de ville pessacaise',
          body: [
            "En secteur urbain à Pessac, cette maison portait une couverture en tuiles arrivée au bout de sa vie : tuiles poreuses, gélives, joints de faîtage désolidarisés et étanchéité qui n'était plus assurée. La photo avant travaux montre une toiture qu'aucune réparation ponctuelle ne pouvait plus sauver — remplacer quelques tuiles n'aurait fait que repousser l'inévitable.",
            "Nous avons donc retenu la seule solution vraiment durable : un changement complet de la couverture, l'occasion aussi de vérifier et d'assainir tout ce qui se cache sous les tuiles.",
          ],
        },
        {
          heading: 'Dépose totale et contrôle de la charpente',
          body: [
            "La dépose a mis la charpente à nu, comme on le voit sur les photos du chantier. C'est une étape qu'on ne saute jamais lors d'un changement de couverture : une fois le bois visible, nous contrôlons chaque chevron et chaque panne, à la recherche du moindre signe d'humidité ou d'attaque d'insectes. Repartir sur une charpente saine est la condition d'une couverture qui dure.",
            "Le support ainsi validé, nous avons pu engager la reconstruction du toit, couche par couche.",
          ],
        },
        {
          heading: 'Écran de sous-toiture, contre-lattage et tuiles neuves',
          body: [
            "Sur la charpente, nous avons déroulé un écran de sous-toiture puis cloué un contre-lattage et un liteaunage neufs — ces tasseaux ménagent la lame d'air qui ventile la couverture et servent d'assise parfaitement alignée aux tuiles. C'est ce qui garantit à la fois l'étanchéité et la longévité de l'ensemble.",
            "Restait la pose de la couverture neuve : des tuiles fraîches, régulières, posées rang par rang jusqu'au faîtage. Le contraste avec l'état de départ, visible sur la photo après travaux, est total — la maison retrouve un toit sain, étanche et esthétique, couvert par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        'Changement complet de couverture, en secteur urbain à Pessac',
        'Dépose des tuiles anciennes poreuses et gélives',
        'Charpente mise à nu, contrôlée chevron par chevron',
        'Pose d\u2019un écran de sous-toiture et d\u2019un contre-lattage neuf',
        'Couverture neuve posée rang par rang jusqu\u2019au faîtage',
        'Toiture reprise de A à Z, garantie décennale',
      ],
      galleryTitle: 'Étape par étape, sous les tuiles',
      galleryIntro:
        "Un changement de couverture, c'est surtout ce qui se passe une fois les tuiles retirées. Voici les deux étapes cachées de ce chantier : la charpente mise à nu, puis l'écran et le contre-lattage posés avant la nouvelle couverture.",
      gallery: [
        {
          suffix: 'depose-charpente',
          alt: "Charpente mise à nu après dépose complète de l'ancienne couverture à Pessac",
          caption: 'Dépose totale : la charpente mise à nu et contrôlée',
        },
        {
          suffix: 'ecran-liteaunage',
          alt: "Écran de sous-toiture et contre-lattage neuf posés sur la charpente à Pessac",
          caption: 'Écran de sous-toiture et contre-lattage neuf, prêts à recevoir les tuiles',
        },
      ],
    },
  },
  {
    slug: 'nettoyage-peinture-toiture-fibrociment-mios-2024',
    title: 'Nettoyage et mise en peinture d\u2019une toiture fibro-ciment',
    service: 'traitement',
    villeSlug: 'mios',
    villeName: 'Mios',
    description:
      "Rénovation d'une grande toiture en plaques de fibro-ciment à Mios, dans le Val de l'Eyre : nettoyage haute pression puis application de deux couches d'une peinture spéciale fibro-ciment teinte anthracite. Une couverture farineuse et grisaillée redevient uniforme, protégée et comme neuve.",
    date: '2024-02-20',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Une toiture fibro-ciment farineuse à redonner à neuf',
          body: [
            "À Mios, dans le Val de l'Eyre, cette longue toiture en plaques ondulées de fibro-ciment avait subi les années : surface farineuse, teinte grisaillée et irrégulière, dépôts et micro-organismes incrustés dans le relief des ondes. Sur la photo avant travaux, le matériau a perdu toute sa cohérence esthétique et commence à se poudrer en surface — le signe qu'il faut agir avant que les plaques ne se fragilisent.",
            "Le fibro-ciment ne se démousse pas comme une tuile : poreux et sensible, il réclame un protocole spécifique. L'objectif était double — nettoyer en profondeur, puis reconstituer une couche de protection qui tienne dans le temps.",
          ],
        },
        {
          heading: 'Nettoyage haute pression puis deux couches de peinture spéciale',
          body: [
            "Nous avons commencé par un nettoyage haute pression méthodique de l'ensemble des plaques, onde après onde, pour retirer la pellicule farineuse, les mousses et les salissures logées dans les creux. Cette étape est déterminante : aucune peinture ne tient sur un support encrassé ou pulvérulent.",
            "Sur ce support propre et sec, nous avons ensuite appliqué deux couches d'une peinture spécialement formulée pour le fibro-ciment, teinte anthracite. La première imprègne et fixe le support, la seconde uniformise et protège. Cette double couche est ce qui différencie une vraie rénovation d'un simple coup de pinceau : elle referme la porosité, ravive la teinte et forme un film protecteur contre l'eau et les UV.",
          ],
        },
        {
          heading: 'Une couverture uniforme et protégée, comme neuve',
          body: [
            "Le résultat, saisi au soleil couchant sur la photo après travaux, parle de lui-même : une toiture parfaitement uniforme, anthracite profond, qui redonne toute son allure à la construction. Au-delà de l'esthétique, les plaques sont désormais protégées et leur durée de vie prolongée, sans avoir eu à déposer la moindre plaque.",
          ],
        },
      ],
      keyPoints: [
        "Grande toiture fibro-ciment à Mios, dans le Val de l'Eyre",
        'Protocole spécifique au fibro-ciment, matériau poreux et sensible',
        'Nettoyage haute pression onde après onde',
        'Deux couches de peinture spéciale fibro-ciment, teinte anthracite',
        'Porosité refermée, protection contre l\u2019eau et les UV',
        'Toiture rénovée sans dépose de plaque',
      ],
      galleryTitle: 'La peinture en cours d\u2019application',
      galleryIntro:
        "Entre le nettoyage et le résultat final, voici l'étape clé : l'application de la peinture spéciale fibro-ciment sur les plaques propres et sèches, versant après versant.",
      gallery: [
        {
          suffix: 'application',
          alt: "Application de la peinture spéciale fibro-ciment sur une toiture ondulée à Mios",
          caption: 'Application de la peinture anthracite sur un versant nettoyé',
        },
      ],
    },
  },
  {
    slug: 'traitement-hydrofuge-toiture-velux-margaux-2024',
    title: 'Nettoyage et hydrofuge d\u2019une toiture avec Velux',
    service: 'hydrofuge',
    villeSlug: 'margaux',
    villeName: 'Margaux',
    description:
      "Nettoyage puis traitement hydrofuge d'une toiture en tuile canal sur une propriété de Margaux, en plein Médoc viticole. Une couverture soignée mais ternie par les mousses retrouve sa teinte terre cuite et une imperméabilité durable, avec un soin particulier apporté aux abords du Velux.",
    date: '2024-03-12',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Une belle toiture du Médoc à préserver avant qu\u2019elle ne se dégrade',
          body: [
            "À Margaux, au cœur du Médoc viticole, cette propriété présentait une toiture en tuile canal encore saine mais qui commençait à s'encrasser : mousses éparses, teinte grisée, colonies s'installant surtout dans les zones qui sèchent le plus lentement. Sur la photo avant intervention, sous le ciel couvert, on mesure à quel point la couverture avait perdu de son éclat.",
            "Ici, l'enjeu était autant patrimonial que technique : sur une maison de ce standing, la toiture se voit, et laisser les mousses s'installer aurait fini par abîmer durablement la tuile. Mieux vaut traiter tôt une couverture encore en bon état que d'attendre le point de non-retour.",
          ],
        },
        {
          heading: 'Un nettoyage soigné, y compris autour du Velux',
          body: [
            "Nous avons procédé à un nettoyage doux de l'ensemble des versants, calibré pour retirer mousses et salissures sans jamais agresser la tuile canal. Les abords du Velux ont demandé une attention particulière : c'est un point où les raccords et les joints d'étanchéité ne tolèrent aucune brutalité, sous peine de créer une fuite là où l'on venait justement protéger.",
            "Une fois la couverture propre et sèche, la teinte terre cuite d'origine est réapparue, nette et homogène, comme le montre la photo prise après notre passage sous le ciel dégagé.",
          ],
        },
        {
          heading: 'Un hydrofuge pour verrouiller le résultat',
          body: [
            "Pour que ce nettoyage tienne dans le temps, nous avons appliqué un traitement hydrofuge sur toute la toiture. En imperméabilisant la tuile, il empêche l'eau de stagner et de pénétrer, ralentit fortement le retour des mousses et protège la couverture des agressions climatiques. Sur une propriété que l'on souhaite garder impeccable, c'est l'investissement qui prolonge le bénéfice du nettoyage bien au-delà de la saison.",
          ],
        },
      ],
      keyPoints: [
        'Propriété de standing à Margaux, en plein Médoc viticole',
        'Intervention préventive sur une toiture encore saine',
        'Nettoyage doux respectant la tuile canal',
        'Soin particulier aux raccords et joints du Velux',
        'Teinte terre cuite d\u2019origine ravivée',
        'Traitement hydrofuge sur les deux versants de la maison',
      ],
      galleryTitle: 'Le chantier sous tous les angles',
      galleryIntro:
        "La maison a été traitée sur ses deux pans. On retrouve ici le versant côté rue, le plus colonisé par les lichens, avant puis après notre passage, ainsi que deux vues d'ensemble de la propriété : la démonstration que le résultat est homogène sur toute la toiture.",
      gallery: [
        {
          suffix: 'versant-rue-avant',
          alt: "Versant côté rue d'une toiture tuile canal envahi de lichens avant traitement à Margaux",
          caption: 'Avant : le versant côté rue, fortement lichénifié',
        },
        {
          suffix: 'versant-rue-apres',
          alt: "Versant côté rue nettoyé et hydrofugé retrouvant sa teinte terre cuite à Margaux",
          caption: 'Après : la tuile nettoyée et hydrofugée, teinte ravivée',
        },
        {
          suffix: 'ensemble-jardin',
          alt: "Maison de maître en pierre et sa toiture tuile ravivée vue depuis le jardin à Margaux",
          caption: 'La toiture ravivée de la maison de maître, vue du jardin',
        },
        {
          suffix: 'ensemble-piscine',
          alt: "Vue d'ensemble de la propriété avec piscine et toiture traitée à Margaux, chantier en cours",
          caption: "Vue d'ensemble côté piscine, chantier en cours sur le toit",
        },
      ],
    },
  },
  {
    slug: 'pose-toiture-bac-acier-lanton-2024',
    title: 'Pose d\u2019une toiture bac acier rouge sur support bois',
    service: 'couverture',
    villeSlug: 'lanton',
    villeName: 'Lanton',
    description:
      "Recouvrement d'une toiture en bac acier laqué rouge brique à Lanton, sur le Bassin d'Arcachon. Le support bois d'origine a d'abord été nettoyé et repris, avant la pose des panneaux bac acier à faible pente : une couverture légère, étanche et sans entretien, bien adaptée à une construction de bord de Bassin.",
    date: '2024-10-28',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Un platelage bois à assainir avant toute pose',
          body: [
            "Sur cette construction de Lanton, aux abords du Bassin d'Arcachon, la couverture reposait sur un platelage bois qu'il fallait d'abord remettre en état. La photo avant travaux montre ce support mis à nu : des planches marquées par l'humidité, qu'on a nettoyées et contrôlées une à une avant d'envisager la moindre pose. Recouvrir un support bois sans l'assainir serait une faute — l'humidité piégée finit toujours par le faire travailler.",
            "Ce chantier n'était donc pas une simple pose : la qualité du résultat se joue d'abord sur la préparation du support, invisible une fois la couverture posée.",
          ],
        },
        {
          heading: 'Un bac acier laqué rouge brique posé à faible pente',
          body: [
            "Une fois le support sain et sec, nous avons posé des panneaux de bac acier laqué teinte rouge brique. Ce matériau est particulièrement pertinent ici : léger, il ne surcharge pas la structure ; étanche même à faible pente, il convient aux toitures peu inclinées ; et sa finition laquée ne demande aucun entretien, un vrai atout sous l'air humide et salin du Bassin.",
            "Les bacs ont été fixés mécaniquement, nervure après nervure, avec les recouvrements nécessaires pour garantir l'écoulement de l'eau. Le résultat, visible sur la photo après pose, est une couverture nette, homogène et durable, qui redonne à la construction une toiture prête à affronter les saisons du bord de Bassin.",
          ],
        },
      ],
      keyPoints: [
        "Chantier à Lanton, aux abords du Bassin d'Arcachon",
        'Platelage bois nettoyé et contrôlé avant pose',
        'Bac acier laqué teinte rouge brique',
        'Solution légère et étanche adaptée aux faibles pentes',
        'Fixation mécanique nervure après nervure',
        'Couverture sans entretien, adaptée à l\u2019air salin du Bassin',
      ],
    },
  },
  {
    slug: 'pose-pare-pluie-ecran-sous-toiture-lanton-2024',
    title: 'Pose d\u2019un pare-pluie sous couverture tuile',
    service: 'couverture',
    villeSlug: 'lanton',
    villeName: 'Lanton',
    description:
      "Pose d'un écran de sous-toiture (pare-pluie) sur une toiture de Lanton, au bord du Bassin d'Arcachon. Après dépose des tuiles, l'isolation restée à nu a été recouverte d'une membrane pare-pluie déroulée sur tout le versant : une seconde barrière contre l'eau et le vent, indispensable sous le climat du Bassin.",
    date: '2024-07-16',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Une toiture sans écran, isolation exposée, à Lanton',
          body: [
            "Au bord du Bassin d'Arcachon, à Lanton, cette toiture a été ouverte pour reprendre sa couverture. Une fois les tuiles déposées et rangées le long de la rive, la photo avant travaux révèle le point faible : l'isolation en laine de verre restait directement exposée sous les liteaux, sans aucun écran pour la protéger. Dans cette configuration, la moindre tuile déplacée par le vent, la moindre remontée de pluie, et l'eau atteint l'isolant.",
            "Sur le Bassin, entre les vents marins et les pluies battantes, ce détail n'en est pas un : sans pare-pluie, une couverture ne dispose que d'une seule ligne de défense, les tuiles elles-mêmes.",
          ],
        },
        {
          heading: 'Un pare-pluie déroulé comme seconde ligne d\u2019étanchéité',
          body: [
            "Nous avons déroulé un écran de sous-toiture HPV (hautement perméable à la vapeur) sur l'ensemble du versant, lé après lé, de l'égout vers le faîtage, avec le recouvrement nécessaire entre chaque bande pour que l'eau ne puisse jamais s'infiltrer. Cette membrane, visible sur la photo après pose, joue un double rôle : elle arrête l'eau et le vent qui passeraient sous les tuiles, tout en laissant la vapeur d'eau du logement s'évacuer vers l'extérieur.",
            "Concrètement, l'écran devient la véritable seconde barrière d'étanchéité de la toiture. Il protège l'isolant et la charpente, évite la condensation et prolonge nettement la durée de vie de l'ensemble. Les tuiles ont ensuite pu être reposées sur un contre-lattage, au-dessus d'un toit désormais bien plus sûr.",
          ],
        },
      ],
      keyPoints: [
        "Chantier au bord du Bassin d'Arcachon, à Lanton",
        'Isolation initialement exposée, sans écran de protection',
        'Pose d\u2019un pare-pluie HPV sur tout le versant',
        'Lés posés avec recouvrement, de l\u2019égout au faîtage',
        'Seconde barrière contre l\u2019eau et le vent marin',
        'Isolant et charpente protégés, condensation évitée',
      ],
    },
  },
  {
    slug: 'creation-abergement-cheminee-zinc-bordeaux-2024',
    title: 'Création d\u2019un abergement de cheminée en zinc soudé',
    service: 'zinguerie',
    villeSlug: 'bordeaux',
    villeName: 'Bordeaux',
    description:
      "Reportage photo, étape par étape, de la création d'un abergement de cheminée en zinc à Bordeaux : dépose de la zone ouverte au raccord de la souche, façonnage du zinc sur mesure, puis soudure à l'étain au chalumeau pour une étanchéité continue autour de la souche en milieu urbain.",
    date: '2024-09-03',
    hasAvantApres: false,
    content: {
      sections: [
        {
          heading: 'Une souche à rhabiller entièrement, sur les toits de Bordeaux',
          body: [
            "Ce chantier bordelais nous a demandé de reprendre à zéro l'étanchéité autour d'une souche de cheminée, dans un secteur urbain où les toitures s'imbriquent les unes dans les autres. Plutôt qu'un simple avant/après, nous avons documenté ce chantier étape par étape : c'est un bon exemple de ce que recouvre concrètement le mot « abergement », un savoir-faire de zingueur souvent invisible une fois le toit refermé.",
            "L'objectif : créer une jonction parfaitement étanche entre la maçonnerie de la souche et la couverture en tuiles, là où l'ancienne protection avait cédé.",
          ],
        },
        {
          heading: 'Le zinc façonné puis soudé au chalumeau, en direct',
          body: [
            "Chaque pièce de zinc a été mesurée et pliée sur le toit même, pour épouser au millimètre les angles de la souche — aucun élément standard ne convient sur ce type de configuration. Une fois les feuilles ajustées, les jonctions ont été assemblées par soudure à l'étain au chalumeau, réalisée directement sur le chantier comme le montrent les photos.",
            "C'est cette soudure continue qui fait toute la différence : là où un abergement simplement plié ou masticé laisse des points faibles, le zinc soudé forme une enveloppe d'un seul tenant autour de la souche. L'eau n'a plus aucun passage, et l'ouvrage est couvert par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        'Chantier de zinguerie sur les toits du centre de Bordeaux',
        'Abergement documenté étape par étape, dépose comprise',
        'Zinc mesuré et façonné sur mesure directement sur le toit',
        'Soudure à l\u2019étain au chalumeau réalisée sur place',
        'Enveloppe de zinc d\u2019un seul tenant autour de la souche',
        'Étanchéité continue garantie décennale',
      ],
      galleryTitle: 'Le zinc, geste par geste',
      galleryIntro:
        "Ce chantier de zinguerie mérite qu'on s'y attarde en images : voici les gestes clés de la création de l'abergement, de l'ouverture de la zone au façonnage du zinc sur mesure.",
      gallery: [
        {
          suffix: 'depose',
          alt: "Zone de raccord de cheminée ouverte après dépose de l'ancien abergement à Bordeaux",
          caption: "Dépose : la zone de raccord ouverte, ancien abergement retiré",
        },
        {
          suffix: 'faconnage-zinc',
          alt: "Feuille de zinc façonnée sur mesure au pied de la souche de cheminée à Bordeaux",
          caption: 'Façonnage du zinc sur mesure, ajusté aux angles de la souche',
        },
      ],
    },
  },
  {
    slug: 'creation-solin-zinc-jonction-mur-bordeaux-2024',
    title: 'Création d\u2019un solin zinc à la jonction toiture / mur',
    service: 'zinguerie',
    villeSlug: 'bordeaux',
    villeName: 'Bordeaux',
    description:
      "Création d'un solin en zinc le long d'un mur mitoyen à Bordeaux, là où le versant de tuiles vient buter contre une paroi enduite. L'ancien solin au mortier, éclaté et jonché de débris, a laissé place à une bavette zinc continue qui remonte contre le mur et rend la rive de nouveau étanche.",
    date: '2024-10-22',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Un solin au mortier éclaté le long du mur mitoyen',
          body: [
            "Cette toiture bordelaise vient mourir contre un haut mur mitoyen enduit. La liaison entre les deux — le solin — était à l'origine réalisée au mortier ; avec le temps, il s'est fendu, décollé et littéralement désagrégé. Sur la photo avant travaux, on voit les morceaux de mortier éclaté joncher les tuiles : plus rien n'assurait l'étanchéité entre la couverture et la paroi.",
            "Ce point de raccord est l'un des plus sollicités d'un toit : toute l'eau qui glisse le long du mur se concentre à cet endroit. Un solin défaillant ici, c'est l'infiltration assurée en pied de mur et sous les premières tuiles.",
          ],
        },
        {
          heading: 'Une bavette zinc engravée et relevée contre la paroi',
          body: [
            "Nous avons purgé l'ancien mortier puis façonné un solin neuf en zinc, courant sur toute la longueur de la rive. La bavette est glissée sous les tuiles côté toiture et relevée contre le mur, où elle est engravée et fixée pour que l'eau ne puisse jamais repasser derrière — le principe même d'un solin durable, par opposition au simple mortier de surface qui finit toujours par fissurer.",
            "Sur la photo après intervention, on distingue la ligne de zinc nette et continue qui suit la pente, du faîtage jusqu'à l'égout. Le raccord toiture/mur retrouve une étanchéité franche, avec un matériau qui ne se dégradera pas comme le mortier d'origine.",
          ],
        },
      ],
      keyPoints: [
        'Raccord toiture / mur mitoyen, un point d\u2019étanchéité critique',
        'Dépose de l\u2019ancien solin au mortier éclaté',
        'Solin neuf façonné en zinc sur toute la longueur de la rive',
        'Bavette glissée sous les tuiles et relevée contre le mur',
        'Zinc engravé dans la paroi, sans reprise d\u2019eau possible',
        'Étanchéité durable là où le mortier fissurait',
      ],
    },
  },
  {
    slug: 'creation-capot-zinc-etancheite-cheminee-pessac-2024',
    title: 'Création d\u2019un capot de cheminée en zinc sur mesure',
    service: 'zinguerie',
    villeSlug: 'pessac',
    villeName: 'Pessac',
    description:
      "Fabrication et pose d'un capot de cheminée en zinc et d'une couvertine sur l'arase d'une souche à Pessac. Un conduit resté à ciel ouvert, qui laissait la pluie s'engouffrer dans le boisseau, est désormais coiffé et l'arase entièrement protégée par du zinc façonné sur mesure.",
    date: '2024-11-05',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Un conduit à ciel ouvert qui prenait l\u2019eau à chaque pluie',
          body: [
            "La photo avant travaux est parlante : sur cette souche de Pessac, l'arase de maçonnerie était éventrée et le conduit restait grand ouvert, sans aucune protection. À chaque averse, l'eau s'engouffrait directement dans le boisseau et ruisselait le long de la maçonnerie fissurée. Ce type de désordre finit toujours par se lire à l'intérieur : traces d'humidité sur le conduit, salpêtre, et à terme dégradation du boisseau lui-même.",
            "Le problème se dédoublait ici : il fallait à la fois protéger la sortie du conduit, et refermer l'arase du muret de souche par laquelle l'eau pénétrait dans la maçonnerie.",
          ],
        },
        {
          heading: 'Un capot et une couvertine façonnés en zinc sur mesure',
          body: [
            "Nous avons fabriqué un capot de cheminée en zinc, coiffant la sortie du conduit sur ses supports : il barre la route à la pluie tout en laissant le tirage se faire librement. Aucun modèle standard du commerce ne s'ajustait à cette souche ancienne — la pièce a donc été façonnée sur mesure pour épouser exactement les dimensions du boisseau.",
            "Dans le même temps, nous avons habillé toute l'arase de la souche d'une couvertine en zinc, visible sur la photo après intervention. Cette bande couvre le sommet de la maçonnerie et rejette l'eau de part et d'autre, mettant définitivement le muret à l'abri du ruissellement.",
          ],
        },
        {
          heading: 'Une souche protégée durablement en centre urbain',
          body: [
            "Ce chantier de zinguerie s'est déroulé sur les toits d'un secteur urbain dense, où l'accès et la sécurité imposent une organisation rigoureuse. Le résultat : une souche entièrement mise hors d'eau, un zinc net et durable qui protège aussi bien le conduit que la maçonnerie, et une intervention couverte par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        'Conduit laissé à ciel ouvert, remis hors d\u2019eau',
        'Capot de cheminée en zinc façonné sur mesure',
        'Tirage préservé tout en bloquant la pluie',
        'Couvertine zinc protégeant l\u2019arase de la souche',
        'Travail de zinguerie en secteur urbain dense',
        'Étanchéité de la souche garantie décennale',
      ],
    },
  },
  {
    slug: 'traitement-hydrofuge-anti-mousse-toiture-merignac-2024',
    title: 'Traitement hydrofuge et anti-mousse d\u2019une toiture tuile',
    service: 'hydrofuge',
    villeSlug: 'merignac',
    villeName: 'Mérignac',
    description:
      "Application d'un traitement hydrofuge et anti-mousse sur une toiture en tuile canal à Mérignac. L'avant/après est sans appel : une couverture noircie et envahie de mousses retrouve sa teinte terre cuite d'origine et une tuile de nouveau imperméable, protégée pour plusieurs années.",
    date: '2024-10-09',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading:
            'Une tuile canal noircie et poreuse qui buvait l\u2019eau de pluie',
          body: [
            "Sur cette maison de Mérignac, la toiture en tuile canal avait viré au brun sombre : un manteau de mousses et de micro-organismes recouvrait les versants, comme on le voit sur la photo avant intervention. Au-delà de l'aspect, le vrai problème est invisible — une tuile ancienne colonisée de la sorte devient poreuse. Elle absorbe l'eau de pluie par capillarité au lieu de l'évacuer, et cette humidité permanente accélère le gel-dégel qui fait éclater la terre cuite.",
            "Contrairement à un simple démoussage, l'objectif de ce chantier n'était pas seulement de nettoyer, mais de rendre à la tuile son imperméabilité et de la protéger dans la durée. C'est là qu'intervient le traitement hydrofuge.",
          ],
        },
        {
          heading:
            'Nettoyage préparatoire puis application de l\u2019hydrofuge en profondeur',
          body: [
            "L'hydrofuge ne s'applique jamais sur une toiture sale : il ne tiendrait pas. Nous avons donc commencé par débarrasser entièrement la couverture de ses mousses et de son voile noir, en respectant la fragilité de la tuile canal ancienne, jusqu'à retrouver la teinte terre cuite naturelle visible sur la photo après travaux.",
            "Sur cette surface propre et sèche, nous avons ensuite pulvérisé un hydrofuge de qualité professionnelle. Le produit pénètre dans la porosité de la tuile et crée un effet perlant : l'eau ruisselle désormais en surface au lieu d'être absorbée. La couverture reste sèche, évacue mieux les eaux de pluie et résiste bien mieux aux cycles de gel de l'hiver girondin.",
          ],
        },
        {
          heading: 'Une protection qui se voit et qui dure',
          body: [
            "Le résultat combine l'esthétique et la technique : une toiture visuellement rajeunie, uniforme, et surtout une tuile de nouveau imperméable. L'hydrofuge ralentit fortement la réapparition des mousses et espace les entretiens futurs — un chantier de proximité, à quelques minutes de notre atelier merignacais, pensé pour tenir plusieurs années.",
          ],
        },
      ],
      keyPoints: [
        'Chantier de proximité, à quelques minutes de notre atelier de Mérignac',
        'Traitement de la porosité de la tuile, pas seulement de la surface',
        'Nettoyage préparatoire indispensable avant hydrofuge',
        'Hydrofuge professionnel créant un effet perlant durable',
        'Meilleure résistance au gel-dégel de l\u2019hiver girondin',
        'Réapparition des mousses fortement ralentie, entretiens espacés',
      ],
    },
  },
  {
    slug: 'abergement-cheminee-zinc-solins-merignac-2024',
    title: 'Abergement de cheminée en zinc avec solins soudés',
    service: 'zinguerie',
    villeSlug: 'merignac',
    villeName: 'Mérignac',
    description:
      "Réfection de l'étanchéité d'une souche de cheminée en briques à Mérignac : pose d'un abergement zinc neuf, solins encastrés dans les joints de brique et bavette en pied, assemblés par soudure au chalumeau pour une jonction parfaitement étanche.",
    date: '2024-09-18',
    hasAvantApres: false,
    content: {
      sections: [
        {
          heading:
            'Une souche de cheminée en briques qui laissait passer l\u2019eau à Mérignac',
          body: [
            "Sur ce pavillon merignacais, l'étanchéité autour de la souche de cheminée en briques n'était plus assurée. C'est un grand classique du sinistre de toiture : la jonction entre la maçonnerie de la cheminée et la couverture est un point faible permanent, exposé au ruissellement de toute la pente au-dessus. Quand l'abergement vieillit, l'eau s'infiltre le long des briques et gagne la charpente.",
            "Situé à quelques minutes de notre atelier de Mérignac, ce chantier a démarré par la dépose des tuiles au contact de la souche pour dégager la zone et travailler proprement sur les quatre faces de la cheminée.",
          ],
        },
        {
          heading:
            'Solins encastrés et bavette zinc soudés au chalumeau',
          body: [
            "Nous avons façonné un abergement neuf en zinc, dont les solins ont été encastrés directement dans les joints de brique de la souche, comme on le voit sur la photo. Cette technique de solin engravé est bien plus durable qu'un simple mastic de surface : le zinc est mécaniquement ancré dans la maçonnerie, et l'eau ne peut plus repasser derrière.",
            "Les différents éléments — solins latéraux, bavette en pied et raccords d'angle — ont été assemblés par soudure à l'étain au chalumeau, sur place. Cette continuité soudée est la clé d'une étanchéité sans point de faiblesse. La couverture a ensuite été refermée autour de la souche, le tout couvert par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        'Point le plus sensible de la toiture : la jonction cheminée / couverture',
        'Chantier de proximité, à quelques minutes de notre atelier de Mérignac',
        'Abergement neuf façonné en zinc sur les quatre faces de la souche',
        'Solins engravés directement dans les joints de brique',
        'Assemblage par soudure à l\u2019étain au chalumeau sur place',
        'Étanchéité continue garantie décennale',
      ],
    },
  },
  {
    slug: 'closoir-ventile-faitage-saint-aubin-de-medoc-2024',
    title: 'Remplacement de closoir ventilé en ligne de faîtage',
    service: 'faitage',
    villeSlug: 'saint-aubin-de-medoc',
    villeName: 'Saint-Aubin-de-Médoc',
    description:
      "Remplacement du closoir ventilé sur toute la ligne de faîtage d'une maison à Saint-Aubin-de-Médoc. Dépose de l'ancien closoir métallique déchiré et corrodé, pose d'un closoir ventilé souple neuf et repose des tuiles faîtières : une ligne de faîte de nouveau étanche et correctement ventilée.",
    date: '2024-11-20',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading:
            'Un closoir de faîtage déchiré qui menaçait l\u2019étanchéité à Saint-Aubin-de-Médoc',
          body: [
            "Sur cette maison de Saint-Aubin-de-Médoc, dans le Médoc au nord-ouest de Bordeaux, l'ancien closoir métallique qui courait le long du faîtage était déchiré, corrodé et par endroits arraché. Ce closoir est la bande qui assure la jonction entre les tuiles faîtières et les deux versants du toit : quand il lâche, l'eau et le vent s'infiltrent directement sous les faîtières, avec un risque réel de dégâts sur la charpente.",
            "Le diagnostic était sans appui : réparer par tronçons n'aurait rien réglé. C'est toute la ligne de faîte, d'un pignon à l'autre, qui devait être reprise pour retrouver une étanchéité fiable.",
          ],
        },
        {
          heading:
            'Pose d\u2019un closoir ventilé souple et repose des tuiles faîtières',
          body: [
            "Nous avons déposé l'ancien closoir hors d'usage, puis posé un closoir ventilé souple neuf sur toute la longueur du faîtage. Ce matériau moderne épouse le galbe des tuiles canal et joue un double rôle : il bloque la pluie et les nuisibles tout en laissant respirer la lame d'air sous la couverture — cette ventilation est essentielle pour évacuer l'humidité et préserver la charpente dans le temps.",
            "Les tuiles faîtières ont ensuite été reposées et fixées sur le closoir. Le résultat, visible sur la photo après intervention, est une ligne de faîte nette, alignée et de nouveau parfaitement étanche, couverte par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        'Chantier à Saint-Aubin-de-Médoc, au nord-ouest de Bordeaux',
        "Dépose de l'ancien closoir métallique déchiré et corrodé",
        "Reprise complète de la ligne de faîte d'un pignon à l'autre",
        'Pose d\u2019un closoir ventilé souple neuf, épousant les tuiles canal',
        'Ventilation de la lame d\u2019air préservant la charpente',
        'Repose et fixation des tuiles faîtières, étanchéité garantie',
      ],
    },
  },
  {
    slug: 'refection-couverture-isolation-gujan-mestras-2024',
    title: 'Réfection de couverture avec réfection de l\u2019isolation',
    service: 'couverture',
    villeSlug: 'gujan-mestras',
    villeName: 'Gujan-Mestras',
    description:
      "Réfection complète d'une couverture en tuile canal à Gujan-Mestras, sur le Bassin d'Arcachon, avec réfection totale de l'isolation : dépose de l'ancienne toiture, pose de laine de verre entre chevrons, écran de sous-toiture réfléchissant, liteaunage neuf et repose des tuiles.",
    date: '2024-06-15',
    hasAvantApres: false,
    content: {
      sections: [
        {
          heading:
            'Une toiture à reprendre entièrement à Gujan-Mestras, sur le Bassin d\u2019Arcachon',
          body: [
            "Ce chantier se situe à Gujan-Mestras, sur le Bassin d'Arcachon, une zone où le climat océanique et l'humidité mettent les toitures à rude épreuve. La couverture en tuile canal arrivait en fin de vie et, surtout, l'isolation sous rampant ne jouait plus son rôle : déperditions de chaleur l'hiver, surchauffe l'été.",
            "Plutôt que de traiter les symptômes, le client a choisi la solution durable : une réfection complète de la couverture couplée à une réfection intégrale de l'isolation. Reprendre les deux en même temps est le bon calcul, puisque déposer les tuiles est justement l'occasion d'intervenir sur l'isolant par l'extérieur.",
          ],
        },
        {
          heading:
            'Dépose de l\u2019ancienne toiture et nouvelle isolation en laine de verre',
          body: [
            "Après dépose complète de l'ancienne couverture, nous avons posé une nouvelle isolation en laine de verre entre les chevrons, sur toute la surface du toit. Cette reprise par l'extérieur permet de traiter les ponts thermiques sans empiéter sur le volume habitable des combles.",
            "L'ensemble a été fermé par un écran de sous-toiture réfléchissant faisant office de pare-vapeur : il protège l'isolant de l'humidité, renvoie le rayonnement et améliore nettement le confort thermique du logement, été comme hiver.",
          ],
        },
        {
          heading: 'Liteaunage neuf et repose des tuiles canal',
          body: [
            "Sur cet écran, nous avons cloué un liteaunage neuf, support indispensable d'une couverture bien ventilée et parfaitement alignée. La ventilation de la lame d'air sous tuile est ce qui garantit la longévité d'une toiture sur le Bassin.",
            "Les tuiles canal ont ensuite été reposées, redonnant à la maison une couverture neuve, étanche et esthétiquement homogène. Le résultat conjugue performance thermique retrouvée et toiture repartie pour plusieurs décennies, le tout couvert par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        "Chantier sur le Bassin d'Arcachon, à Gujan-Mestras",
        "Dépose complète de l'ancienne couverture en tuile canal",
        'Nouvelle isolation en laine de verre entre chevrons',
        'Écran de sous-toiture réfléchissant faisant pare-vapeur',
        'Liteaunage neuf pour une couverture ventilée et alignée',
        'Repose des tuiles canal, gain thermique et étanchéité garantis',
      ],
      galleryTitle: 'De la dépose à la tuile, couche par couche',
      galleryIntro:
        "Cette réfection s'est jouée en plusieurs couches successives. On les suit ici en images, de la mise à nu de l'ancienne isolation jusqu'au liteaunage prêt à recevoir les tuiles.",
      gallery: [
        {
          suffix: 'depose-ancienne-isolation',
          alt: "Ancienne isolation dégradée mise à nu après dépose des tuiles à Gujan-Mestras",
          caption: "Dépose de la couverture : l'ancienne isolation dégradée mise à nu",
        },
        {
          suffix: 'laine-verre',
          alt: "Pose de laine de verre neuve entre chevrons lors de la réfection de toiture à Gujan-Mestras",
          caption: 'Nouvelle isolation en laine de verre posée entre les chevrons',
        },
        {
          suffix: 'ecran-sous-toiture',
          alt: "Écran de sous-toiture réfléchissant et liteaunage sur la charpente à Gujan-Mestras",
          caption: 'Écran de sous-toiture réfléchissant, sous le liteaunage',
        },
        {
          suffix: 'liteaunage',
          alt: "Clouage du liteaunage neuf sur l'écran de sous-toiture à Gujan-Mestras",
          caption: 'Clouage du liteaunage neuf, support des tuiles à reposer',
        },
      ],
    },
  },
  {
    slug: 'demoussage-toiture-pessac-vignoble-velux-2024',
    title: 'Démoussage toiture tuile canal avec Velux',
    service: 'demoussage',
    villeSlug: 'pessac',
    villeName: 'Pessac',
    description:
      "Démoussage complet d'une toiture en tuiles canal avec Velux, sur une maison face aux vignobles de Pessac-Léognan. Avant/après spectaculaire : disparition totale des mousses et des traînées noires, ravivage de la teinte d'origine.",
    date: '2024-05-29',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading:
            'Une toiture en tuiles canal encrassée face aux vignobles de Pessac',
          body: [
            "Cette maison de Pessac, exposée à l'humidité des vignobles de Pessac-Léognan, présentait une toiture en tuiles canal fortement colonisée par les mousses et marquée de longues traînées noires. L'accumulation végétale retenait l'eau de pluie sur la couverture et accélérait le vieillissement des tuiles, en particulier autour des Velux où l'écoulement se concentre.",
            "Avant toute intervention, nous avons inspecté l'ensemble de la couverture pour repérer les tuiles fragilisées et vérifier l'étanchéité des raccords de Velux. Ce diagnostic conditionne le choix de la pression et des produits : sur tuile canal ancienne, un nettoyage trop agressif ferait plus de mal que de bien.",
          ],
        },
        {
          heading: 'Un démoussage adapté à la tuile canal et aux Velux',
          body: [
            "Le démoussage a été mené par un nettoyage progressif, respectueux de la porosité des tuiles canal, complété d'un brossage manuel des zones les plus incrustées. Les abords des Velux ont été traités avec un soin particulier pour préserver les joints d'étanchéité et éviter toute infiltration.",
            "Un traitement anti-mousse rémanent a ensuite été pulvérisé sur l'ensemble de la toiture. Ce produit continue d'agir plusieurs mois après notre passage et retarde nettement la réapparition des mousses et lichens sous le climat humide de la Gironde.",
          ],
        },
        {
          heading: 'Un résultat spectaculaire sur les hauteurs de Pessac',
          body: [
            "L'avant/après parle de lui-même : disparition totale des mousses et des traînées noires, et retour de la teinte d'origine de la tuile. La couverture retrouve sa capacité à évacuer l'eau correctement, ce qui prolonge sa durée de vie et éloigne le risque d'infiltration.",
          ],
        },
      ],
      keyPoints: [
        'Diagnostic préalable des tuiles canal et des raccords de Velux',
        'Nettoyage à pression maîtrisée, sans agresser la tuile ancienne',
        'Brossage manuel des zones fortement incrustées',
        'Traitement anti-mousse rémanent longue durée',
        'Avant/après photographié et remis au client',
      ],
    },
  },
  {
    slug: 'demoussage-toiture-merignac-2024',
    title: 'Démoussage toiture pavillon avec cheminée',
    service: 'demoussage',
    villeSlug: 'merignac',
    villeName: 'Mérignac',
    description:
      "Démoussage et nettoyage complet d'une toiture en tuile canal sur pavillon merignacais. Brossage manuel des zones critiques autour de la cheminée briques, traitement anti-mousse rémanent et rinçage des descentes.",
    date: '2024-05-29',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading:
            'Un pavillon merignacais dont la toiture réclamait un nettoyage complet',
          body: [
            "Sur ce pavillon de Mérignac, la toiture en tuile canal s'était chargée de mousses au fil des saisons, avec des zones particulièrement critiques autour de la cheminée en briques où les débris s'accumulent. À quelques minutes de notre atelier merignacais, ce chantier illustre le type d'entretien que nous réalisons régulièrement sur la commune.",
            "L'inspection initiale a confirmé une couverture saine sous la végétation, mais des descentes d'eau partiellement obstruées et des raccords de cheminée à surveiller de près.",
          ],
        },
        {
          heading: 'Brossage manuel autour de la cheminée et traitement rémanent',
          body: [
            "Nous avons commencé par un brossage manuel des zones les plus incrustées, notamment le pourtour de la cheminée briques où un nettoyage trop mécanique aurait pu déloger le mortier. Le reste de la toiture a été démoussé puis rincé, descentes comprises, pour rétablir un écoulement correct des eaux de pluie.",
            "Un traitement anti-mousse rémanent a été appliqué sur l'ensemble de la couverture afin d'espacer les prochains entretiens et de protéger durablement la tuile canal.",
          ],
        },
      ],
      keyPoints: [
        'Chantier de proximité, à quelques minutes de notre atelier de Mérignac',
        'Brossage manuel délicat autour de la cheminée briques',
        "Rinçage des descentes d'eau pour rétablir l'écoulement",
        'Traitement anti-mousse rémanent sur toute la toiture',
        'Contrôle des raccords de cheminée en fin de chantier',
      ],
    },
  },
  {
    slug: 'demoussage-toiture-talence-lichens-2026',
    title: 'Démoussage toiture fortement lichénifiée',
    service: 'demoussage',
    villeSlug: 'talence',
    villeName: 'Talence',
    description:
      "Démoussage d'une toiture talençaise envahie par les lichens blancs après plusieurs années sans entretien. Brossage manuel intensif, double passage anti-mousse rémanent, traitement hydrofuge longue durée.",
    date: '2026-05-05',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Une toiture talençaise envahie par les lichens blancs',
          body: [
            "Après plusieurs années sans entretien, cette toiture de Talence était largement recouverte de lichens blancs, ces colonies dures et adhérentes bien plus tenaces que la simple mousse. Non traités, ils retiennent l'humidité en permanence et finissent par attaquer la surface des tuiles.",
            "Le degré d'encrassement imposait une intervention plus poussée qu'un démoussage classique : un simple passage n'aurait pas suffi à venir à bout des lichens installés depuis si longtemps.",
          ],
        },
        {
          heading: 'Brossage intensif, double passage et hydrofuge longue durée',
          body: [
            "Nous avons procédé à un brossage manuel intensif pour décoller les lichens, suivi d'un double passage d'anti-mousse rémanent afin d'atteindre les colonies les plus résistantes. Cette approche en deux temps garantit un résultat durable plutôt qu'un nettoyage de façade.",
            "La toiture a enfin reçu un traitement hydrofuge longue durée. En imperméabilisant la tuile, l'hydrofuge limite la reprise d'humidité, ralentit le retour des lichens et protège la couverture du gel — un vrai plus sous le climat girondin.",
          ],
        },
      ],
      keyPoints: [
        'Traitement de lichens blancs particulièrement adhérents',
        'Brossage manuel intensif des colonies incrustées',
        "Double passage d'anti-mousse rémanent",
        'Traitement hydrofuge longue durée en finition',
        "Protection renforcée contre l'humidité et le gel",
      ],
    },
  },
  {
    slug: 'refection-complete-toiture-villenave-dornon-2024',
    title: 'Réfection complète toiture bâtisse ancienne',
    service: 'reparation',
    villeSlug: 'villenave-dornon',
    villeName: "Villenave-d'Ornon",
    description:
      "Réfection complète d'une toiture en tuile canal sur bâtisse traditionnelle. Dépose de la couverture défoncée, traitement charpente, pose de tuiles neuves type tradition. Avant/après spectaculaire : passage d'une toiture en fin de vie à une couverture neuve garantie.",
    date: '2024-06-27',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Une toiture en tuile canal arrivée en fin de vie',
          body: [
            "Sur cette bâtisse traditionnelle de Villenave-d'Ornon, la toiture en tuile canal était défoncée et ne remplissait plus son rôle d'étanchéité. Réparer ponctuellement n'avait plus de sens : la couverture entière était à reprendre, ce qui a orienté le chantier vers une réfection complète plutôt qu'une simple réparation.",
            "Notre diagnostic a également porté sur l'état de la charpente, systématiquement contrôlée dès lors qu'on dépose l'intégralité de la couverture.",
          ],
        },
        {
          heading: 'Dépose, traitement de charpente et pose de tuiles tradition',
          body: [
            "Après dépose de l'ancienne couverture défoncée, la charpente a été traitée pour la prémunir contre l'humidité et les insectes xylophages. Nous avons ensuite posé des tuiles neuves de type tradition, dans le respect de l'esthétique de la bâtisse ancienne.",
            "Cette réfection complète transforme une toiture en fin de vie en une couverture neuve, étanche et couverte par notre garantie décennale.",
          ],
        },
      ],
      keyPoints: [
        'Réfection complète plutôt que réparation ponctuelle',
        "Dépose intégrale de l'ancienne couverture défoncée",
        'Traitement préventif de la charpente mise à nu',
        'Pose de tuiles neuves type tradition, respect du bâti ancien',
        "Couverture neuve garantie décennale à Villenave-d'Ornon",
      ],
    },
  },
  {
    slug: 'toiture-neuve-charpente-begles-2024',
    title: 'Toiture neuve avec charpente et isolation',
    service: 'neuve',
    villeSlug: 'begles',
    villeName: 'Bègles',
    description:
      "Construction d'une toiture neuve sur extension béglaise : charpente bois traditionnelle, voligeage chêne, écran sous-toiture HPV haute perméabilité, isolation laine de verre soufflée en combles perdus. Conformité RE 2020.",
    date: '2024-05-29',
    hasAvantApres: false,
    content: {
      sections: [
        {
          heading: 'Une extension béglaise à couvrir entièrement en neuf',
          body: [
            "Ce chantier de Bègles portait sur la construction d'une toiture neuve pour une extension. Contrairement à une rénovation, tout était à créer : charpente, support, écran de sous-toiture et isolation, dans le respect de la réglementation environnementale RE 2020.",
            "L'enjeu d'une toiture neuve est d'assembler correctement chaque couche pour garantir à la fois l'étanchéité, la ventilation et la performance thermique du bâti.",
          ],
        },
        {
          heading: 'Charpente traditionnelle, écran HPV et isolation soufflée',
          body: [
            "Nous avons monté une charpente bois traditionnelle surmontée d'un voligeage en chêne, puis posé un écran de sous-toiture HPV à haute perméabilité qui laisse respirer la couverture tout en la protégeant de l'eau.",
            "L'isolation a été réalisée en laine de verre soufflée dans les combles perdus, une solution efficace pour limiter les déperditions de chaleur. L'ensemble a été conçu conformément à la RE 2020.",
          ],
        },
      ],
      keyPoints: [
        'Construction d\'une toiture neuve complète sur extension',
        'Charpente bois traditionnelle et voligeage chêne',
        'Écran de sous-toiture HPV haute perméabilité',
        'Isolation laine de verre soufflée en combles perdus',
        'Conformité à la réglementation RE 2020',
      ],
    },
  },
  {
    slug: 'renovation-faitage-bordeaux-centre-2024',
    title: 'Rénovation faîtage centre Bordeaux',
    service: 'faitage',
    villeSlug: 'bordeaux',
    villeName: 'Bordeaux',
    description:
      "Rénovation complète du faîtage d'une échoppe bordelaise du centre-ville. Dépose du faîtage scellé ancien, contrôle de la sous-face, pose de tuiles faîtières neuves avec mortier chaux compatible bâti ancien. Intervention équipe complète en milieu urbain dense.",
    date: '2024-05-29',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: "Le faîtage scellé d'une échoppe bordelaise à reprendre",
          body: [
            "Au cœur de Bordeaux, cette échoppe traditionnelle présentait un faîtage scellé ancien dont le mortier se dégradait, laissant craindre des infiltrations en ligne de faîte. Intervenir en centre-ville dense impose une logistique soignée : accès étroit, protection des abords et travail à l'équipe complète.",
            "Nous avons d'abord déposé le faîtage ancien et contrôlé la sous-face pour vérifier qu'aucun désordre ne s'était propagé sous les tuiles faîtières.",
          ],
        },
        {
          heading: 'Tuiles faîtières neuves scellées au mortier de chaux',
          body: [
            "La rénovation s'est achevée par la pose de tuiles faîtières neuves scellées au mortier de chaux. Le choix de la chaux n'est pas anodin : compatible avec le bâti ancien bordelais, elle laisse respirer la maçonnerie là où un ciment classique l'aurait fragilisée.",
            "Le faîtage retrouve son étanchéité et son alignement, dans le respect de l'architecture de l'échoppe.",
          ],
        },
      ],
      keyPoints: [
        'Intervention en centre-ville de Bordeaux, milieu urbain dense',
        'Dépose du faîtage scellé ancien et contrôle de la sous-face',
        'Pose de tuiles faîtières neuves',
        'Mortier de chaux compatible avec le bâti ancien',
        'Chantier mené en équipe complète',
      ],
    },
  },
  {
    slug: 'toiture-bac-acier-merignac-2024',
    title: 'Toiture bac acier extension',
    service: 'neuve',
    villeSlug: 'merignac',
    villeName: 'Mérignac',
    description:
      "Pose d'une toiture en bac acier teinte rouge brique sur une extension contemporaine à Mérignac. Voligeage, écran HPV, fixation mécanique du bac acier laqué, finitions zinguerie périmétrique.",
    date: '2024-05-29',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Une extension contemporaine coiffée en bac acier',
          body: [
            "Pour cette extension contemporaine à Mérignac, le choix s'est porté sur une toiture en bac acier laqué teinte rouge brique, à la fois esthétique et parfaitement adaptée aux faibles pentes des architectures modernes. Le bac acier offre une pose rapide et une excellente étanchéité quand la mise en œuvre est soignée.",
            "Le support a été préparé avec un voligeage et un écran de sous-toiture HPV avant la pose de la couverture.",
          ],
        },
        {
          heading: 'Pose du bac acier laqué et zinguerie périmétrique',
          body: [
            "Les panneaux de bac acier ont été fixés mécaniquement, puis nous avons réalisé les finitions de zinguerie sur tout le périmètre de la toiture. Ces habillages assurent l'étanchéité aux jonctions et donnent au toit sa finition nette.",
            "Le résultat allie performance technique et cohérence esthétique avec l'extension contemporaine.",
          ],
        },
      ],
      keyPoints: [
        'Toiture bac acier laqué teinte rouge brique',
        'Solution adaptée aux extensions contemporaines à faible pente',
        'Voligeage et écran de sous-toiture HPV',
        'Fixation mécanique des panneaux de bac acier',
        'Finitions de zinguerie sur tout le périmètre',
      ],
    },
  },
  {
    slug: 'zinguerie-abergement-cheminee-merignac-2024',
    title: 'Zinguerie et abergement cheminée',
    service: 'zinguerie',
    villeSlug: 'merignac',
    villeName: 'Mérignac',
    description:
      "Reprise complète de l'abergement zinc d'une cheminée briques sur pavillon merignacais. Dépose de l'ancienne zinguerie défaillante, pose d'un abergement neuf en zinc naturel avec soudure étain sur place, étanchéité garantie décennale.",
    date: '2024-05-29',
    hasAvantApres: true,
    content: {
      sections: [
        {
          heading: 'Un abergement de cheminée en zinc devenu défaillant',
          body: [
            "Sur ce pavillon merignacais, l'abergement zinc autour de la cheminée briques ne jouait plus son rôle : c'est précisément à cette jonction entre maçonnerie et couverture que naissent la plupart des infiltrations. Une zinguerie défaillante à cet endroit peut laisser l'eau pénétrer jusqu'à la charpente.",
            "Nous avons déposé l'ancien abergement fatigué pour repartir sur une base saine.",
          ],
        },
        {
          heading: "Un abergement neuf en zinc soudé à l'étain sur place",
          body: [
            "Le nouvel abergement a été façonné en zinc naturel et soudé à l'étain directement sur le chantier, gage d'une étanchéité continue et durable autour de la cheminée. Ce travail de zinguerie demande précision et savoir-faire : chaque pli et chaque soudure conditionne l'étanchéité de l'ensemble.",
            "L'abergement est couvert par notre garantie décennale, comme l'ensemble de nos travaux de zinguerie en Gironde.",
          ],
        },
      ],
      keyPoints: [
        'Reprise du point sensible : la jonction cheminée / couverture',
        "Dépose de l'ancien abergement zinc défaillant",
        'Abergement neuf en zinc naturel',
        "Soudure à l'étain réalisée sur place",
        'Étanchéité garantie décennale',
      ],
    },
  },
];

/** Récupère les N dernières réalisations (par date desc). */
export function getLatestRealisations(limit = 6): Realisation[] {
  return [...REALISATIONS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

/** Filtre par service ou ville. */
export function filterRealisations(opts: {
  service?: string;
  ville?: string;
}): Realisation[] {
  return REALISATIONS.filter((r) => {
    if (opts.service && r.service !== opts.service) return false;
    if (opts.ville && r.villeSlug !== opts.ville) return false;
    return true;
  });
}
