import type { Metadata } from 'next';
import { VillePageLayout } from '@/components/content/VillePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('couvreur-libourne');

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
          villeSlug: 'libourne',
          h1: (
            <>
              Couvreur à{' '}
              <span className="text-[var(--color-terre)]">Libourne</span> depuis
              2005 — tuile romane, bâti girondin + châteaux
            </>
          ),

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac (45 km)',
            bio: "Je couvre Libourne et le Libournais depuis 2005 depuis mon atelier de Mérignac (45 km, 45 min). Le Libournais concentre du bâti girondin traditionnel : maisons en PIERRE + tuile romane ou canal, échoppes libournaises XIXe, châteaux viticoles Saint-Émilion/Pomerol. Techniques traditionnelles (mortier chaux + tuile récupération) essentielles. J'organise des journées d'intervention groupées Libournais pour maîtriser les frais de déplacement.",
            badges: [
              'Depuis 2005',
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Tuile romane spécialiste',
            ],
          },

          atelier: {
            adresse: '65 rue de Malbos',
            codePostal: '33700',
            ville: 'Mérignac',
            intro:
              "Notre atelier est à Mérignac, à 45 km (45 min) de Libourne via A89. Nous organisons des journées d'intervention groupées Libournais (Libourne + Saint-Émilion + Pomerol + Fronsac) pour maîtriser les frais de déplacement.",
            horaires: [
              { jours: 'Lundi – Vendredi', heures: '6h00 – 22h00' },
              { jours: 'Samedi – Dimanche', heures: 'Urgences 7j/7' },
            ],
            mapEmbedUrl:
              'https://www.google.com/maps?q=65+rue+de+Malbos+33700+M%C3%A9rignac&output=embed',
            itineraireUrl:
              'https://www.google.com/maps/dir//65+rue+de+Malbos,+33700+M%C3%A9rignac',
          },

          heroSubtitle:
            "Couvreur-zingueur à Libourne depuis 2005, atelier à Mérignac (45 km). Spécialiste bâti girondin traditionnel : maisons pierre + tuile romane, échoppes libournaises, châteaux viticoles Saint-Émilion/Pomerol. Journées groupées Libournais. Devis 24h.",
        contexteLocal: (
          <>
            <p>
              Libourne est la capitale du Libournais, à 45 km au nord-est
              de notre atelier de Mérignac. C'est l'un des territoires
              gironde les plus typés en termes de patrimoine bâti : les
              <strong> maisons en pierre calcaire</strong> dominent le
              centre historique de la bastide, beaucoup de toitures sont
              couvertes en{' '}
              <strong>tuile romane ou tuile canal traditionnelle</strong>,
              et les châteaux viticoles de Saint-Émilion et Pomerol ont
              des couvertures à valeur patrimoniale forte. Nous intervenons
              régulièrement sur l'ensemble du Libournais.
            </p>
            <p>
              Le bâti libournais a ses spécificités. Le centre de la
              bastide médiévale combine des immeubles anciens à toitures
              tuiles canal, parfois avec lucarnes en lauze ou chéneaux
              maçonnés. Les <strong>échoppes du Libournais</strong>{' '}
              ressemblent à celles de Bordeaux mais avec des proportions
              légèrement différentes. Hors centre, l'habitat est
              majoritairement pavillonnaire ou rural, avec des toitures
              tuile mécanique sur les constructions récentes et tuile
              canal/romane sur le bâti plus ancien et les bâtiments
              viticoles.
            </p>
            <p>
              Le climat du Libournais est{' '}
              <strong>plus continental qu'à Bordeaux</strong> : pluviométrie
              comparable mais températures plus contrastées, gelées
              hivernales plus marquées, orages d'été parfois violents
              (grêle, vents tournants). Ces orages, fréquents en juillet
              et août, causent régulièrement des sinistres toiture :
              tuiles cassées par la grêle, faîtages déplacés, gouttières
              débordées. Pour ces urgences, nous nous déplaçons en{' '}
              <strong>2 à 4 heures</strong> en heures ouvrées pour mise
              hors d'eau et constitution du dossier assurance.
            </p>
            <p>
              Notre atelier de Mérignac est à <strong>45 km</strong> par
              l'A89 ou la D670. Nous organisons des{' '}
              <strong>journées d'intervention groupées</strong> sur le
              Libournais pour réduire les frais de déplacement quand
              plusieurs clients ont des chantiers planifiés en parallèle.
              Sur les vignobles, nous travaillons aussi pour la
              maintenance préventive des cuviers, chais et bâtiments
              d'exploitation : démoussage des toitures de chai, reprise
              de zinguerie, étanchéité des chéneaux.
            </p>
            <p>
              Couverture Gironde travaille en{' '}
              <strong>direct sans sous-traitance</strong>. C'est l'artisan
              qui chiffre, qui exécute le chantier libournais et qui
              assure le SAV. Cette continuité explique nos{' '}
              <strong>5/5 sur 52 avis Google</strong> et la recommandation
              de bouche-à-oreille qui nous amène régulièrement de
              nouveaux clients dans le Libournais.
            </p>
          </>
        ),
        raisonsLocales: [
          {
            title: 'Expertise tuile romane et tuile canal libournaises',
            description:
              "Bâti ancien en pierre calcaire, échoppes du Libournais, châteaux viticoles : nous maîtrisons les techniques traditionnelles spécifiques au territoire.",
          },
          {
            title: 'Intervention urgence sinistre orages',
            description:
              "Grêle d'été, vents tournants, tempêtes : urgence en 2 à 4 heures, mise hors d'eau immédiate, dossier assurance pris en charge.",
          },
          {
            title: 'Maintenance préventive vignobles',
            description:
              "Châteaux, cuviers, chais, bâtiments d'exploitation viticole : démoussage, étanchéité chéneaux, reprise zinguerie. Devis dédié.",
          },
          {
            title: 'Journées groupées Libournais (économies)',
            description:
              "Pour chantiers planifiés, nous regroupons plusieurs clients sur une même journée. Économie 25-40 % sur les frais de déplacement.",
          },
          {
            title: 'Travail direct, sans sous-traitance',
            description:
              "L'artisan qui chiffre est celui qui exécute sur place et revient en SAV. Un seul interlocuteur.",
          },
          {
            title: 'Garantie décennale + RC active',
            description:
              "20 ans d'exercice en Gironde, assurance décennale en cours, justificatifs fournis. Protection 10 ans.",
          },
        ],
        tarifsLines: [
          {
            service: 'Démoussage toiture (avec brossage manuel)',
            range: '14 – 22 €/m²',
            note: '+10-20 % pour frais déplacement Libournais (sauf journée groupée)',
          },
          {
            service: 'Réparation post-orage / grêle',
            range: '350 – 1 500 €',
            note: 'Forfait diagnostic + remplacement, dossier assurance inclus',
          },
          {
            service: 'Réfection faîtage tuile romane',
            range: '50 – 85 €/ml',
            note: 'Mortier chaux compatible bâti ancien',
          },
          {
            service: 'Pose de gouttières zinc demi-rondes',
            range: '55 – 95 €/ml',
            note: 'Demi-rondes Ø 25, soudure étain',
          },
          {
            service: 'Étanchéité chéneau bâtiment viticole',
            range: '80 – 140 €/ml',
            note: 'Sur cuvier ou chai, intervention en saison froide',
          },
          {
            service: "Urgence fuite, mise hors d'eau",
            range: '350 – 800 €',
            note: 'Inclut déplacement urgence',
          },
          {
            service: 'Réfection complète tuile canal',
            range: '95 – 160 €/m²',
            note: 'Démontage, lattage neuf, pose tuile, faîtage',
          },
        ],
        faqLocale: [
          {
            question: "Vous déplacez-vous à Libourne ? Quels frais ?",
            answer:
              "Oui, nous intervenons régulièrement à Libourne et dans tout le Libournais (Saint-Émilion, Pomerol, Castillon, Coutras) depuis notre atelier de Mérignac (45 km via A89/D670). Les frais de déplacement sont indiqués clairement dans le devis. Pour les chantiers planifiés, nous proposons des journées groupées avec d'autres clients du Libournais, ce qui réduit le coût de déplacement de 25 à 40 %.",
          },
          {
            question: 'Travaillez-vous sur les bâtiments viticoles et châteaux ?',
            answer:
              "Oui, c'est une partie significative de notre activité libournaise. Nous intervenons sur les châteaux, cuviers, chais et bâtiments d'exploitation : démoussage des grandes toitures (parfois plusieurs centaines de m²), reprise de zinguerie, étanchéité des chéneaux, remplacement de faîtages. Devis dédié au régime professionnel.",
          },
          {
            question: 'Comment gérez-vous les sinistres orages et grêle ?',
            answer:
              "Les orages d'été du Libournais (juillet-août) causent régulièrement des dégâts toiture : grêle, vents tournants, faîtages déplacés. Pour ces urgences, nous nous déplaçons en 2 à 4 heures en heures ouvrées pour mise hors d'eau par bâche et sécurisation. Nous constituons ensuite le dossier assurance complet (photos, devis détaillé, attestations) et coordonnons avec votre expert.",
          },
          {
            question: 'Maîtrisez-vous la tuile romane et la tuile canal traditionnelle ?',
            answer:
              "Oui. Le bâti ancien du Libournais utilise massivement ces deux types de tuile. Nous travaillons quotidiennement ces matériaux en respectant les techniques traditionnelles : pression de nettoyage limitée à 80-100 bars, mortier chaux pour les scellements de faîtage, récupération des tuiles d'origine quand possible, respect strict de la pose et des proportions.",
          },
          {
            question: "Faut-il une autorisation pour rénover sa toiture à Saint-Émilion ?",
            answer:
              "À Saint-Émilion et dans les communes en secteur sauvegardé (UNESCO, ABF), toute modification visible de l'extérieur exige une autorisation préalable de l'Architecte des Bâtiments de France. Nous prenons en charge cette démarche dans le cadre de nos prestations. Pour Libourne hors secteur protégé, une simple déclaration préalable suffit en général.",
          },
          {
            question: 'Quel est le meilleur moment pour démousser dans le Libournais ?',
            answer:
              "Idéalement au printemps (mars-mai), juste avant la saison des orages d'été, ou à la fin de l'été (septembre) avant l'hiver. Sur les bâtiments viticoles, nous intervenons souvent en saison froide (novembre-février) pour ne pas gêner les vendanges et travaux d'été.",
          },
          {
            question: "Quelles communes du Libournais couvrez-vous ?",
            answer:
              "Libourne, Saint-Émilion, Pomerol, Lussac, Montagne, Castillon-la-Bataille, Coutras, Galgon, Branne, et tout le secteur viticole. Pour les communes plus éloignées (Sainte-Foy-la-Grande, Pellegrue), un surcoût de déplacement s'applique. Devis personnalisé après visite.",
          },
          {
            question:
              "Comment vérifier votre décennale avant signature ?",
            answer:
              "Nous joignons systématiquement notre attestation d'assurance décennale à chaque devis, avec ses dates de validité. Un artisan qui rechigne à fournir ce document cache probablement une décennale périmée ou absente.",
          },
        ],

        // ————————————————————————————————————————————————
        // QUESTIONS À POSER À TOUT COUVREUR LIBOURNAIS
        // ————————————————————————————————————————————————
        questionsCouvreur: {
          intro:
            "3 questions à poser à tout couvreur pour Libourne, particulièrement sur bâti girondin traditionnel (pierre + tuile romane).",
          items: [
            {
              question:
                "Utilisez-vous du mortier de chaux sur mes tuiles anciennes ?",
              answer:
                "Sur bâti libournais ancien, mortier de CHAUX obligatoire (respire, compatible tuile ancienne). Un couvreur qui propose du ciment moderne sur maison girondine XIXe = danger : ciment dur qui fissure la tuile ancienne.",
            },
            {
              question:
                "Fournissez-vous de la tuile romane de récupération ?",
              answer:
                "Pour respect esthétique bâti libournais patrimonial, tuile romane de récupération souvent préférable (aspect vieilli identique). Un couvreur sérieux dispose ou peut sourcer ces matériaux. Nous en avons régulièrement en stock à l'atelier.",
            },
            {
              question:
                "Comment organisez-vous vos déplacements depuis Bordeaux ?",
              answer:
                "Un couvreur bordelais qui vient à Libourne pour UN chantier facture 150-300 € de déplacement. Nous organisons des JOURNÉES GROUPÉES sur le Libournais (2-3 chantiers/jour) — coût déplacement absorbé, tarifs identiques à Bordeaux Métropole.",
            },
          ],
        },
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
