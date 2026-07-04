/**
 * Banque de FAQ — pilote des sections FAQ contextuelles.
 *
 * Organisation :
 *  - FAQ "general" : réutilisable sur la home et pages institutionnelles
 *  - FAQ "per-service" : injectée sur les pages services correspondantes
 *  - FAQ "per-ville" : injectée sur les pages villes (peut être combinée avec service)
 *
 * Règle SEO : la balise FAQPage ne s'injecte QUE si la FAQ est réellement
 * visible sur la page. Pas de FAQ fantôme.
 */

export type FAQItem = {
  question: string;
  /** Réponse en HTML léger (paragraphes courts conseillés). */
  answer: string;
};

export const FAQ_GENERAL: FAQItem[] = [
  {
    question: 'Quels services propose Couverture Gironde ?',
    answer:
      "Nous intervenons sur l'ensemble des travaux de toiture : démoussage, nettoyage, traitement hydrofuge, réparation de fuite, zinguerie et gouttières, installation de Velux, faîtage, charpente et travaux neufs. Notre spécialité prioritaire est l'entretien de toiture (démoussage + nettoyage + hydrofuge).",
  },
  {
    question: 'Sur quel secteur intervenez-vous ?',
    answer:
      "Nous intervenons sur tout Bordeaux Métropole : Bordeaux, Mérignac, Pessac, Talence, Bègles, Villenave-d'Ornon, Le Bouscat, Gradignan, Eysines, Bruges, et toute la Gironde sur devis (Sud-Gironde, Médoc, Libournais).",
  },
  {
    question: 'Quel est le délai pour obtenir un devis ?',
    answer:
      "Sous 24h ouvrées. Nous étudions votre demande, vous proposons une visite si nécessaire (gratuite et sans engagement) puis vous envoyons un devis chiffré ligne par ligne, transparent.",
  },
  {
    question: 'Êtes-vous couverts par une assurance décennale ?',
    answer:
      "Oui. Tous nos chantiers sont couverts par notre assurance décennale. Vous êtes protégé pendant 10 ans après réception des travaux. Le justificatif d'assurance peut être joint à votre devis sur demande.",
  },
  {
    question: 'Êtes-vous disponibles en urgence ?',
    answer:
      "Oui, 7 jours sur 7 pour les fuites et dégâts urgents. Nous effectuons une mise hors d'eau dans les heures qui suivent votre appel, puis vous remettons un devis détaillé pour la réparation définitive.",
  },
  {
    question: 'Quelle est votre méthode de paiement ?',
    answer:
      "Acompte raisonnable à la signature (30 % maximum), solde à la fin du chantier après vérification de votre satisfaction. Paiement par virement bancaire ou chèque. Aucun acompte exigé sur les devis inférieurs à 500 €.",
  },
];

export const FAQ_DEMOUSSAGE: FAQItem[] = [
  {
    question: 'À quelle fréquence faut-il démousser sa toiture en Gironde ?',
    answer:
      "Le climat océanique de la Gironde favorise la pousse de mousses et lichens. Un démoussage tous les 3 à 5 ans est recommandé, plus fréquent (2-3 ans) si votre toiture est ombragée ou exposée au nord.",
  },
  {
    question: 'Démoussage par grattage ou par traitement chimique ?',
    answer:
      "Notre méthode combine les deux : brossage manuel des zones les plus colonisées puis application d'un produit anti-mousse adapté à votre matériau (tuile, ardoise, fibrociment). C'est l'approche la plus durable, sans abîmer la toiture.",
  },
  {
    question: 'Combien coûte un démoussage de toiture à Bordeaux ?',
    answer:
      "À titre indicatif : entre 12 et 25 €/m² selon la surface, l'accessibilité et l'état de la toiture. Un démoussage complet avec traitement hydrofuge se situe généralement entre 1 500 € et 3 500 € pour une maison individuelle.",
  },
  {
    question: 'Faut-il faire un démoussage avant un hydrofuge ?',
    answer:
      "Oui, impérativement. L'hydrofuge ne doit jamais être appliqué sur une toiture sale ou colonisée par les mousses. Notre prestation combine systématiquement les deux étapes pour un résultat durable.",
  },
  {
    question: 'Combien de temps dure un démoussage de toiture ?',
    answer:
      "Compter 1 à 2 jours pour une toiture de maison individuelle de 100 à 150 m² (incluant le brossage, le démoussage chimique et le rinçage). Si traitement hydrofuge inclus, ajouter une demi-journée.",
  },
];

export const FAQ_NETTOYAGE: FAQItem[] = [
  {
    question: 'Faut-il nettoyer ou démousser sa toiture ?',
    answer:
      "Les deux opérations sont complémentaires. Le démoussage élimine les végétaux installés, le nettoyage retire les dépôts (poussière, pollution, lichens morts). Nous combinons généralement les deux en une seule intervention.",
  },
  {
    question: "Le nettoyage haute pression n'abîme-t-il pas les tuiles ?",
    answer:
      "Pas si la pression est maîtrisée et l'angle correctement orienté. Nous utilisons des buses adaptées à chaque matériau (tuile, ardoise, zinc). En aucun cas nous n'utilisons un nettoyeur grand public sans précaution.",
  },
  {
    question: 'Combien coûte un nettoyage de toiture ?',
    answer:
      "À titre indicatif : entre 12 et 20 €/m² selon la surface, l'accessibilité et l'état de la toiture. Devis personnalisé après visite ou photos détaillées.",
  },
  {
    question: 'Quand est-il préférable de nettoyer sa toiture ?',
    answer:
      "Idéalement au printemps (mars-mai) ou à la fin de l'été (septembre-octobre), hors période de gel ou de fortes pluies. C'est le moment optimal pour préparer la toiture à affronter la saison suivante.",
  },
];

export const FAQ_HYDROFUGE: FAQItem[] = [
  {
    question: "Qu'apporte un traitement hydrofuge sur une toiture ?",
    answer:
      "Il rend la tuile imperméable à l'eau tout en la laissant respirer. Résultat : moins d'humidité retenue, moins de gel-dégel destructeur, et un retour des mousses considérablement ralenti. La toiture vieillit moins vite.",
  },
  {
    question: 'Combien de temps tient un traitement hydrofuge ?',
    answer:
      "Un hydrofuge professionnel de qualité tient entre 8 et 12 ans selon l'exposition. Nous proposons une garantie de 10 ans sur les produits que nous appliquons.",
  },
  {
    question: 'Hydrofuge incolore ou coloré ?',
    answer:
      "Nous proposons les deux. L'hydrofuge incolore préserve l'aspect naturel de la tuile. L'hydrofuge coloré (oxyde de fer) ravive la teinte d'une toiture vieillie. Le choix dépend de l'état initial et de votre préférence esthétique.",
  },
];

export const FAQ_REPARATION: FAQItem[] = [
  {
    question: 'Pouvez-vous remplacer juste quelques tuiles ?',
    answer:
      "Oui, c'est même notre intervention la plus courante. Nous vérifions ensuite l'état général de la toiture pour vous alerter si d'autres tuiles sont à risque court terme.",
  },
  {
    question: 'Comment se passe un diagnostic toiture ?',
    answer:
      "Un de nos artisans se déplace gratuitement, inspecte la toiture depuis l'extérieur et la sous-face (si accessible), photographie les points faibles et vous remet un compte rendu et un devis sous 24h.",
  },
  {
    question: 'Travaux pris en charge par assurance ?',
    answer:
      "En cas de sinistre (tempête, intrusion d'eau, tuiles cassées par chute d'arbre), nous fournissons les devis et photos nécessaires à votre dossier d'assurance habitation et coordonnons avec l'expert si besoin.",
  },
];

export const FAQ_URGENCE: FAQItem[] = [
  {
    question: 'Comment vous joindre en urgence ?',
    answer:
      "Appelez directement notre numéro 07 68 69 78 48, 7 jours sur 7 entre 6h et 22h. Pour les urgences nocturnes, laissez un message vocal — nous rappelons en priorité absolue dès la première heure de la journée.",
  },
  {
    question: 'Quel délai pour une mise hors d\u2019eau ?',
    answer:
      "En heures ouvrées, nous intervenons généralement dans les 2 à 4 heures pour les urgences avérées sur Bordeaux Métropole. Mise en place d'une bâche provisoire et sécurisation, puis devis de réparation définitif sous 48h.",
  },
  {
    question: "Quel est le coût d'une intervention d'urgence ?",
    answer:
      "La mise hors d'eau (bâche, sécurisation) coûte entre 250 et 600 € selon la surface et la difficulté d'accès. La réparation définitive est chiffrée séparément après diagnostic.",
  },
];

export const FAQ_ZINGUERIE: FAQItem[] = [
  {
    question: 'Quelle est la durée de vie de gouttières en zinc ?',
    answer:
      "Le zinc bien posé tient entre 30 et 50 ans sans entretien majeur, contre 10 à 15 ans pour le PVC. C'est un investissement rentable à moyen terme.",
  },
  {
    question: "Quand faut-il refaire la zinguerie d'une toiture ?",
    answer:
      "Dès que vous observez des coulures noires sur les murs, des débordements en cas de pluie, des fixations corrodées ou des perforations. Notre diagnostic permet de prioriser ce qui doit être remplacé.",
  },
  {
    question: "Pose de gouttières alu, zinc ou PVC : que choisir ?",
    answer:
      "Pour les façades anciennes bordelaises et le bâti traditionnel, le zinc est notre recommandation : esthétique, durable, conforme. L'aluminium convient sur le neuf. Le PVC est à réserver à des annexes secondaires.",
  },
  {
    question: "Combien coûte la pose de gouttières en zinc à Bordeaux ?",
    answer:
      "Le tarif moyen est de 50 à 85 €/ml pour des gouttières demi-rondes Ø 25 en zinc avec soudure étain, fournitures et pose comprises. Pour une maison standard de 100 m² au sol, comptez entre 1 500 et 2 800 € selon le linéaire et les contraintes d'accès.",
  },
];

/** FAQ Couverture (générale, utilisée par /couvreur-bordeaux + /couvreur-gironde). */
export const FAQ_COUVERTURE: FAQItem[] = [
  {
    question: 'Quelle est la différence entre un couvreur et un zingueur ?',
    answer:
      "Le couvreur pose et répare la toiture (tuiles, ardoises, bac acier). Le zingueur travaille les éléments métalliques (gouttières, descentes, faîtage scellé, noues, habillages). Aujourd'hui, la plupart des artisans cumulent les deux métiers : on parle alors de couvreur-zingueur, comme nous.",
  },
  {
    question: "Combien coûte une toiture neuve à Bordeaux ?",
    answer:
      "Le coût d'une toiture neuve en Gironde varie de 85 à 150 €/m² selon le matériau (tuile canal, tuile mécanique, ardoise, zinc) et la complexité (pans, lucarnes, faîtage). Pour une maison de 100 m² au sol avec 130 m² de toiture, l'enveloppe se situe entre 11 000 et 19 500 € HT, charpente non comprise.",
  },
  {
    question: "À quelle fréquence faut-il faire entretenir sa toiture ?",
    answer:
      "Un démoussage tous les 3 à 5 ans est recommandé en Gironde, plus fréquent (2-3 ans) si votre toiture est exposée au nord ou sous couvert d'arbres. Le climat océanique humide accélère la prolifération des mousses et lichens.",
  },
  {
    question: "Comment savoir si ma toiture a besoin d'être refaite ?",
    answer:
      "Plusieurs signes : tuiles cassées ou glissées visibles depuis le sol, mousse abondante sur les pans nord, traces d'humidité dans les combles, gouttières débordantes, perte d'éléments après tempête. Un diagnostic gratuit par un couvreur permet d'évaluer si une réparation suffit ou si une réfection complète s'impose.",
  },
  {
    question: 'Êtes-vous certifié RGE ?',
    answer:
      "Nous ne disposons pas de la certification RGE à ce jour, qui concerne essentiellement les travaux liés à l'isolation thermique. Pour tous les travaux de couverture classique (démoussage, nettoyage, réparation, zinguerie, neuf), nos prestations sont couvertes par notre assurance décennale, justificatifs fournis avec le devis.",
  },
  {
    question: "Quelles aides existent pour rénover sa toiture en 2026 ?",
    answer:
      "MaPrimeRénov' (si travaux d'isolation associés), éco-prêt à taux zéro (jusqu'à 30 000 € sans intérêts), TVA réduite à 5,5 % ou 10 % selon les travaux, certificats d'économies d'énergie (CEE). Les aides MaPrimeRénov' nécessitent un artisan RGE pour la partie isolation.",
  },
];

export const FAQ_VELUX: FAQItem[] = [
  {
    question: 'Combien coûte la pose d\'un Velux à Bordeaux ?',
    answer:
      "L'installation d'un Velux standard coûte entre 1 200 et 2 500 € pose comprise, selon le modèle (basique, confort, motorisé), les dimensions et les travaux annexes (raccord d'étanchéité, plaquerie intérieure, écran sous-toiture). Le remplacement d'un Velux existant est souvent moins coûteux que la création d'un nouveau.",
  },
  {
    question: 'Faut-il un permis de construire pour poser un Velux ?',
    answer:
      "Une déclaration préalable de travaux suffit dans la majorité des cas. Le permis n'est nécessaire qu'en zone protégée (secteur ABF) ou si la fenêtre modifie l'aspect extérieur de manière notable. Nous gérons ces démarches administratives dans le cadre de nos prestations.",
  },
  {
    question: "Quelle est la durée de vie d'un Velux ?",
    answer:
      "Un Velux de qualité bien entretenu tient 20 à 25 ans. Au-delà, les joints d'étanchéité commencent à fatiguer et le bois ou le PVC se fragilise. Un remplacement préventif vers 20 ans évite les infiltrations.",
  },
  {
    question: 'Quelles sont les meilleures orientations pour un Velux ?',
    answer:
      "Pour une pièce de vie, privilégier le sud-est ou le sud-ouest (luminosité maximale, chaleur en hiver). Pour une chambre, le nord ou l'est (moins de surchauffe l'été). Sur une toiture orientée plein sud, prévoir un store occultant ou un Velux à protection solaire intégrée.",
  },
];

export const FAQ_CHARPENTE: FAQItem[] = [
  {
    question: 'Comment savoir si ma charpente est endommagée ?',
    answer:
      "Signes d'alerte : fissures sur les murs porteurs, déformation visible du toit (pannes affaissées, faîtage de travers), grincements anormaux, présence de sciure ou de petits trous dans les bois (capricornes, vrillettes), humidité chronique en sous-toiture. Un diagnostic professionnel permet d'évaluer la gravité.",
  },
  {
    question: 'Quel est le prix d\'un traitement de charpente ?',
    answer:
      "Le traitement curatif contre les insectes xylophages et les champignons coûte généralement entre 25 et 50 €/m² selon le volume traité, la nature des bois et l'accessibilité. Pour une maison standard, l'enveloppe se situe entre 1 500 et 3 500 € avec garantie 10 ans sur l'efficacité du traitement.",
  },
  {
    question: 'Peut-on rénover une charpente sans déposer la toiture ?',
    answer:
      "Oui, pour la majorité des interventions : traitement curatif, remplacement de pièces, renforcement structurel. Seules les rénovations lourdes (transformation, surélévation) imposent une dépose de la couverture. Notre équipe optimise toujours pour limiter les nuisances pour vous.",
  },
];

/** FAQ /a-propos — Questions E-E-A-T sur Liroy Delsuc + entreprise. */
export const FAQ_APROPOS: FAQItem[] = [
  {
    question: 'Qui est Liroy Delsuc ?',
    answer:
      "Liroy Delsuc est l'artisan-couvreur fondateur de Couverture Gironde, entreprise basée à Mérignac (33700) depuis 2005. Couvreur-zingueur de formation, il dirige et exécute personnellement chaque chantier, sans sous-traitance. Il est joignable directement au 07 68 69 78 48.",
  },
  {
    question: 'Depuis combien d\'années êtes-vous couvreur en Gironde ?',
    answer:
      "Couverture Gironde est active à Mérignac depuis 2005, soit 20 ans d'exercice continu sur Bordeaux Métropole et le département de la Gironde. Nous totalisons plusieurs centaines de chantiers de toiture livrés et une note de 5/5 sur 52 avis Google.",
  },
  {
    question: 'Où est situé votre atelier ?',
    answer:
      "Notre atelier et notre dépôt sont au 65 rue de Malbos, 33700 Mérignac, à proximité immédiate de l'A630 et de la rocade bordelaise. Cette position permet une couverture rapide de tout Bordeaux Métropole en moins d'une heure.",
  },
  {
    question: 'Travaillez-vous avec de la sous-traitance ?',
    answer:
      "Non, jamais. C'est notre équipe interne qui réalise chaque chantier, de A à Z. L'artisan qui rédige le devis est celui qui exécute les travaux et qui assure le SAV. Cette continuité est notre signature et notre différenciateur principal vs les structures franchisées.",
  },
  {
    question: 'Quelles garanties offrez-vous ?',
    answer:
      "Garantie décennale obligatoire (assurance en cours de validité, justificatifs fournis avec le devis), garantie biennale sur les éléments d'équipement (Velux, gouttières), garantie 10 ans sur les traitements hydrofuges professionnels. Pour les démoussages, l'efficacité du traitement chimique est garantie minimum 3 ans selon exposition.",
  },
];

/** Map service → FAQ associée. */
import type { ServiceCategory } from './types';

export const FAQ_TRAITEMENT: FAQItem[] = [
  {
    question: "Quelle différence entre nettoyage, démoussage et hydrofuge ?",
    answer:
      "Les trois s'enchaînent logiquement mais répondent à des besoins distincts. Le nettoyage retire la saleté superficielle (pollution, dépôts, algues). Le démoussage élimine les mousses et lichens, éradique les spores et empêche leur retour à moyen terme. L'hydrofuge est un traitement de protection appliqué après démoussage : il rend la tuile hydrophobe (l'eau perle au lieu d'imprégner) et retarde la ré-installation des mousses pendant 5 à 10 ans. Sur une toiture très encrassée, on enchaîne les trois. Sur une toiture propre, un hydrofuge seul peut suffire en prévention.",
  },
  {
    question: "Quel traitement de toiture choisir selon mon état ?",
    answer:
      "État léger (algues, salissures, pas de mousses visibles) : nettoyage haute pression maîtrisé suffit, 12-20 €/m². État modéré (mousses ponctuelles, quelques lichens) : combo démoussage + brossage, 12-18 €/m². État avancé (mousses généralisées, versant nord vert, tuiles gorgées) : démoussage rémanent + brossage + hydrofuge 10 ans, 25-38 €/m². Après une intervention lourde, un simple hydrofuge tous les 8-10 ans suffit ensuite en préventif.",
  },
  {
    question: "À quelle fréquence traiter sa toiture à Bordeaux ?",
    answer:
      "Le climat océanique bordelais (930 mm/an, hivers doux, couvert végétal dense) accélère l'encrassement de 30 à 50 % vs moyenne nationale. Nos recommandations : contrôle visuel tous les 2 ans, démoussage tous les 4-5 ans sans hydrofuge, tous les 8-10 ans avec hydrofuge. Les versants nord et les zones ombragées prioritaires. Les toitures en bord de Garonne ou sous couvert végétal dense (Caudéran, Gradignan, coteaux Cenon) peuvent nécessiter un rythme plus soutenu.",
  },
  {
    question: "Le traitement hydrofuge est-il vraiment utile ?",
    answer:
      "Oui, sur les toitures poreuses (tuile canal, tuile mécanique non émaillée) et exposées au couvert végétal ou versant nord. L'hydrofuge coloré ou incolore forme un film hydrophobe qui empêche l'eau de pénétrer dans la tuile, ralentit le retour des mousses (spores qui ont besoin d'humidité), et protège du cycle gel-dégel qui fissure les tuiles poreuses. Sur ardoise ou tuile émaillée récente, l'utilité est plus limitée : le matériau est déjà peu poreux.",
  },
  {
    question: "Un traitement chimique est-il dangereux pour le jardin ?",
    answer:
      "Nous utilisons des produits professionnels rémanents autorisés en couverture, biodégradables sous 48-72h. Nous bâchons systématiquement les évacuations sensibles, protégeons les descentes d'eau pluviale qui vont au potager ou au récupérateur, et redirigeons les ruissellements. Aucun cas de dégât sur végétation ou nappe phréatique n'est remonté depuis 20 ans d'exercice. Les précautions d'usage sont documentées dans notre devis.",
  },
  {
    question: "Combien coûte un traitement de toiture complet à Bordeaux ?",
    answer:
      "Fourchette globale sur Bordeaux Métropole 2026 : nettoyage seul 12-20 €/m², démoussage seul 12-18 €/m², combo démoussage + hydrofuge 18-27 €/m², combo complet nettoyage + démoussage + hydrofuge 25-38 €/m². Sur une maison type 100 m² de toiture, le combo complet représente 2 500-3 800 € TTC, soit un investissement qui préserve la couverture pendant 10-15 ans (vs 80-150 €/m² pour une réfection tardive).",
  },
  {
    question: "Combien de temps dure un chantier de traitement ?",
    answer:
      "Sur une toiture d'environ 100 m² : démoussage + brossage = 1 jour, combo démoussage + hydrofuge = 1,5 à 2 jours (avec temps de séchage entre les deux passes), traitement complet nettoyage + démoussage + hydrofuge = 2 à 3 jours. Le planning intègre systématiquement les créneaux météo (pas de pluie prévue dans les 12-24h suivant l'hydrofuge, températures >5°C).",
  },
  {
    question: "Le traitement est-il garanti ?",
    answer:
      "Oui. Décennale sur l'ensemble de la prestation (obligation légale). Garantie constructeur 10 ans sur l'hydrofuge professionnel appliqué selon les prescriptions. Garantie 3-5 ans sur l'efficacité anti-mousse selon l'exposition et la porosité du support. Attestations remises à la fin du chantier avec photos avant/après et fiche technique des produits utilisés.",
  },
];

export const FAQ_BY_SERVICE: Partial<Record<ServiceCategory, FAQItem[]>> = {
  demoussage: FAQ_DEMOUSSAGE,
  nettoyage: FAQ_NETTOYAGE,
  hydrofuge: FAQ_HYDROFUGE,
  traitement: FAQ_TRAITEMENT,
  reparation: FAQ_REPARATION,
  urgence: FAQ_URGENCE,
  zinguerie: FAQ_ZINGUERIE,
  couverture: FAQ_COUVERTURE,
  velux: FAQ_VELUX,
  charpente: FAQ_CHARPENTE,
};

/** Helper : récupère la FAQ d'un service (avec fallback sur la FAQ générale). */
export function getFAQForService(service: ServiceCategory): FAQItem[] {
  return FAQ_BY_SERVICE[service] ?? FAQ_GENERAL;
}
