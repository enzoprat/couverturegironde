import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('faitage-toiture-bordeaux');

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
        service: 'faitage',
        slug: PAGE.slug,
        h1: (
          <>
            Faîtage toiture{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> — scellé
            chaux ou closoir ventilé, 45-70 €/ml
          </>
        ),
        heroSubtitle:
          "Rénovation de faîtage scellé au mortier de CHAUX (bâti ancien, échoppes) ou à sec ventilé avec closoir moderne (bâti récent). Conformité DTU 40.211. Sur bâti girondin, mortier chaux OBLIGATOIRE — jamais ciment qui fissure la tuile ancienne. Décennale, devis 24h.",
        shortTitle: 'Faîtage toiture',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
          bio: "Le faîtage est le POINT LE PLUS EXPOSÉ de la toiture — vents dominants d'ouest, ruissellement, écarts thermiques. Depuis 2005, je reprends les faîtages bordelais dans les règles : sur bâti ancien (échoppes XIXe), mortier de CHAUX obligatoire pour respect matériau. Sur bâti récent, closoir ventilé à sec (durabilité 25-30 ans + ventilation naturelle). Jamais de mortier ciment sur tuile ancienne — c'est le principal défaut du bâti bordelais que je répare.",
          badges: [
            'Depuis 2005',
            'Décennale active',
            '5/5 sur 52 avis Google',
            'DTU 40.211',
          ],
        },
        presentation: (
          <>
            <p>
              Le faîtage est{' '}
              <strong>la ligne la plus haute de votre toiture</strong>, à
              la jonction des versants. C'est aussi l'un de ses{' '}
              <strong>points d'étanchéité les plus critiques</strong> :
              chaque tuile faîtière mal scellée ou cassée laisse passer
              l'eau directement dans la charpente, sans la moindre
              barrière intermédiaire. Une fuite au faîtage se traduit
              immédiatement en infiltration en sous-face et en dégât
              d'isolation.
            </p>
            <p>
              Sur le bâti bordelais, on rencontre principalement deux
              techniques de faîtage : le{' '}
              <strong>faîtage scellé au mortier</strong>, traditionnel,
              qui domine largement les toitures anciennes, et le{' '}
              <strong>faîtage à sec ventilé</strong>, technique
              contemporaine intégrant un closoir ventilé qui assure
              l'étanchéité et la ventilation de sous-toiture. Chaque
              technique a ses avantages et son contexte d'application —
              et chacune se rénove différemment.
            </p>
            <p>
              Le <strong>faîtage scellé</strong> est apprécié pour son
              aspect homogène avec les toitures anciennes (échoppes
              bordelaises, maisons bourgeoises, bâti traditionnel). Il
              utilise un mortier bâtard (chaux + ciment + sable) appliqué
              sur les rives des tuiles supérieures. Inconvénient :
              <strong> le mortier fissure et se décolle</strong> sous
              l'effet du gel, du retrait thermique et du temps. Une
              rénovation est généralement nécessaire tous les 25-40 ans.
            </p>
            <p>
              Le <strong>faîtage à sec ventilé</strong> représente
              l'évolution technique moderne. Un closoir auto-adhésif
              (plomb gaufré ou aluminium souple), un peigne ventilé en
              sous-face et un système de fixation mécanique remplacent le
              mortier. Avantages :{' '}
              <strong>
                ventilation continue de la sous-toiture, durabilité accrue,
                pas de mortier à reprendre
              </strong>
              . En revanche, l'aspect est moins traditionnel, à éviter
              en secteur ABF strict.
            </p>
            <p>
              Sur Bordeaux Métropole, nous rénovons quotidiennement les
              deux techniques. Notre approche standard :{' '}
              <strong>conservation de la technique d'origine</strong>{' '}
              lorsque le bâti est ancien ou en secteur protégé, et
              proposition du faîtage à sec ventilé sur les rénovations
              énergétiques où la ventilation de sous-toiture devient
              importante (combles isolés perdants). Le choix vous est
              expliqué au cours du diagnostic gratuit.
            </p>
            <p>
              Côté <strong>réglementation</strong>, la rénovation de
              faîtage est régie par le DTU 40.211 (couverture en tuiles
              de terre cuite). Une intervention dans les règles de l'art
              respecte les recouvrements, les sens de pose, et la
              ventilation de sous-toiture obligatoire en cas d'isolation
              renforcée. Nous garantissons cette conformité par notre
              décennale.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Maîtrise des deux techniques',
            description:
              "Faîtage scellé traditionnel et faîtage à sec ventilé : nous travaillons les deux quotidiennement et conseillons selon le contexte de votre bâti.",
          },
          {
            title: 'Mortier chaux pour bâti ancien',
            description:
              "Sur les bâtiments d'avant 1948, nous utilisons un mortier à la chaux compatible avec la tuile et la charpente d'origine. Pas de mortier ciment destructeur.",
          },
          {
            title: 'Closoir ventilé pour rénovation énergétique',
            description:
              "Si vous avez isolé vos combles, la ventilation de sous-toiture devient critique. Le closoir ventilé l'assure mécaniquement sans risque de condensation.",
          },
          {
            title: 'Conformité DTU 40.211',
            description:
              "Nos rénovations respectent les recouvrements, sens de pose et ventilation imposés par le DTU. Conformité technique garantie par notre décennale.",
          },
          {
            title: 'Inspection complète des autres points',
            description:
              "Pendant l'intervention sur le faîtage, nous inspectons noues, abergements, raccords. Nous repérons les points faibles avant qu'ils ne deviennent des fuites.",
          },
          {
            title: 'Tarif transparent au mètre linéaire',
            description:
              "Faîtage scellé : 45-75 €/ml. Faîtage à sec ventilé : 35-60 €/ml. Devis détaillé selon longueur exacte et accessibilité.",
          },
        ],
        risques: [
          {
            title: 'Infiltration directe en charpente',
            description:
              "Une tuile faîtière mal scellée ou fissurée laisse passer l'eau directement sur les chevrons. Risque structurel rapide : pourriture des bois, déformation.",
          },
          {
            title: 'Mortier ciment sur bâti ancien',
            description:
              "Le ciment Portland sur une charpente ancienne crée des contraintes mécaniques destructrices. Le mortier à la chaux est obligatoire pour préserver le bâti.",
          },
          {
            title: 'Faîtage scellé sans ventilation',
            description:
              "Un faîtage scellé étanche bouche la ventilation de sous-toiture. Si vous avez isolé vos combles, c'est la garantie de condensation et de mousses sous toiture.",
          },
          {
            title: 'Reprise partielle qui se propage',
            description:
              "Sceller à nouveau seulement les zones visiblement fissurées sans contrôler le reste du faîtage = nouvelle fuite garantie 2-3 ans plus tard.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic gratuit sur site',
            description:
              "Inspection visuelle du faîtage et de la sous-face. Identification de la technique d'origine et des défauts (mortier décollé, tuiles cassées, ventilation).",
          },
          {
            title: 'Conseil technique et devis',
            description:
              "Proposition de la technique adaptée (conserver scellé ou passer au sec ventilé). Devis détaillé au mètre linéaire, sous 24h.",
          },
          {
            title: 'Préparation du chantier',
            description:
              "Échafaudage si nécessaire, lignes de vie, bâchage temporaire. Information des voisins, gestion des autorisations si secteur protégé.",
          },
          {
            title: 'Dépose de l\u2019ancien faîtage',
            description:
              "Retrait des tuiles faîtières, grattage du mortier ancien, contrôle des chevrons et de l'isolation en sous-face. Photos des points contrôlés.",
          },
          {
            title: 'Pose du nouveau faîtage',
            description:
              "Pose du closoir ventilé OU application du mortier chaux selon technique retenue. Pose des tuiles faîtières neuves, contrôle des recouvrements.",
          },
          {
            title: 'Tests et réception',
            description:
              "Test d'étanchéité par aspersion contrôlée. Vérification visuelle finale, photos avant/après. Garantie décennale activée.",
          },
        ],

        // ————————————————————————————————————————————————
        // TARIFS FAÎTAGE
        // ————————————————————————————————————————————————
        tarifs: {
          intro:
            "Fourchettes 2026 pour la rénovation ou réfection de faîtage sur Bordeaux Métropole. Le tarif dépend de la technique (scellé chaux/ciment ou closoir à sec) et de la longueur du faîtage.",
          lines: [
            {
              service: 'Faîtage scellé mortier chaux (bâti ancien)',
              range: '45 – 70 €/ml',
              note: 'Compatible échoppes XIXe, technique traditionnelle',
            },
            {
              service: 'Faîtage à sec ventilé (closoir moderne)',
              range: '38 – 60 €/ml',
              note: 'Bâti récent, ventilation naturelle intégrée',
            },
            {
              service: 'Faîtage scellé complexe (angles, brisures)',
              range: '65 – 95 €/ml',
              note: 'Bâti à géométrie complexe, plus de découpes',
            },
            {
              service: 'Tuile faîtière cassée : remplacement ponctuel',
              range: '120 – 250 €',
              note: 'Intervention rapide, seule ou avec autres réparations',
            },
            {
              service: 'Reprise faîtage disloqué (tempête)',
              range: '55 – 85 €/ml',
              note: 'Urgence, mise hors d\u2019eau + reprise',
            },
            {
              service: 'Diagnostic + rapport photo',
              range: '0 – 180 €',
              note: 'Gratuit si chantier signé',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, sécurité incluse. Décennale active. Le faîtage à sec ventilé est 15-20 % moins cher que le scellé, mais incompatible avec certains bâtis anciens patrimoniaux — nous vous conseillons honnêtement selon votre configuration.",
        },

        // ————————————————————————————————————————————————
        // FAQ FAÎTAGE-FOCUSED (10 questions ICP)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "Faîtage scellé ou à sec : lequel choisir ?",
            answer:
              "Dépend du BÂTI. SCELLÉ MORTIER CHAUX (45-70 €/ml) : obligatoire sur bâti ancien girondin (échoppes XIXe, maisons bourgeoises) pour respect matériau + esthétique traditionnelle. Étanchéité 15-25 ans avec entretien. À SEC VENTILÉ CLOSOIR (38-60 €/ml) : bâti récent (après 1970), ventilation intégrée sous-toiture, durabilité 25-30 ans SANS entretien. Compatible également avec bâti ancien SI l'esthétique n'est pas critique. Sur Chartrons/Bouscat/centre Bordeaux, scellé obligatoire pour respect patrimonial.",
          },
          {
            question:
              "Combien coûte une reprise de faîtage à Bordeaux en 2026 ?",
            answer:
              "Fourchettes 2026 : faîtage scellé chaux 45-70 €/ml, faîtage à sec ventilé 38-60 €/ml, faîtage complexe (angles, brisures) 65-95 €/ml, tuile faîtière cassée seule 120-250 €, reprise urgence tempête 55-85 €/ml. Pour une maison type avec 10-15 ml de faîtage : reprise complète 450-1 050 € TTC selon technique.",
          },
          {
            question:
              "Mortier chaux ou mortier ciment sur mon bâti ancien ?",
            answer:
              "MORTIER CHAUX OBLIGATOIRE. Le mortier ciment (moderne, dur) est INCOMPATIBLE avec la tuile ancienne girondine : (1) il ne respire pas → humidité piégée → dégradation accélérée, (2) il est plus dur que la tuile ancienne → fissuration à la dilatation thermique, (3) irrécupérable en cas de reprise. Le mortier de CHAUX (traditionnel) respire, est plus tendre que la tuile, se reprend ligne par ligne sans dégât. Sur échoppe bordelaise, faîtage haussmannien, bâti pierre : chaux OBLIGATOIRE.",
          },
          {
            question:
              "Mon faîtage fuit — réparation ponctuelle ou reprise complète ?",
            answer:
              "Diagnostic sur site indispensable. Critères : (1) si <20 % du linéaire présente des désordres (fissures, tuile faîtière cassée), reprise ponctuelle 120-250 € par élément suffit, (2) si >30 % du linéaire est disloqué ou fissuré, reprise complète devient plus rentable sur la durée. Sur bâti ancien avec mortier ciment existant qui fissure par section, reprise complète en mortier chaux souvent recommandée pour tenir 20-25 ans.",
          },
          {
            question:
              "Combien de temps dure un chantier de faîtage ?",
            answer:
              "Reprise ponctuelle (5-10 ml) : 1 journée. Reprise complète standard (10-20 ml) : 1-2 jours. Faîtage complexe (angles multiples, brisures) : 2-3 jours. Reprise urgence tempête (mise hors d'eau + réfection) : intervention immédiate + chantier planifié sous 1-2 semaines. Le planning intègre les créneaux météo (pas de pluie prévue pendant 24h après application mortier chaux).",
          },
          {
            question:
              "DTU 40.211 : qu'est-ce que c'est ?",
            answer:
              "Le DTU 40.211 est le Document Technique Unifié qui définit les règles de l'art pour les couvertures en tuiles de terre cuite et béton. Il précise : dimensionnement des faîtages, types de fixation, choix des mortiers (chaux ou bâtard), techniques closoir ventilé, ventilation sous-toiture. Nous respectons systématiquement le DTU 40.211 — c'est ce que couvre notre assurance décennale.",
          },
          {
            question:
              "Faut-il repeindre les tuiles faîtières ?",
            answer:
              "NON, jamais. Les tuiles de terre cuite (canal ou mécanique) ne se peignent pas — la peinture empêche la respiration du matériau et provoque des remontées d'humidité. Une tuile faîtière abîmée se REMPLACE, ne se repeint pas. Pour raviver l'esthétique d'une toiture entière, préférer un traitement HYDROFUGE coloré appliqué après démoussage (voir /traitement-hydrofuge-toiture-bordeaux).",
          },
          {
            question:
              "Vents d'ouest bordelais : impact sur le faîtage ?",
            answer:
              "Les vents dominants d'ouest de Bordeaux (Garonne, Océan Atlantique) sollicitent particulièrement le faîtage — point d'exposition maximal. Sur les coteaux Cenon ou versants ouest, faîtage se dégrade 30-40 % plus vite qu'en plaine abritée. Contrôle visuel recommandé tous les 5-7 ans, reprise ponctuelle dès premier signe de fissuration pour éviter dislocation par section entière lors d'une tempête.",
          },
          {
            question:
              "Faut-il une autorisation pour rénover son faîtage ?",
            answer:
              "Pour reprise à l'identique (même technique, même matériau), aucune formalité. Pour un changement de technique (scellé → closoir à sec) ou de matériau (tuile canal → tuile mécanique), déclaration préalable de travaux généralement requise. En secteur UNESCO Bordeaux Centre ou périmètre ABF, avis ABF demandé. Nous vérifions et constituons les dossiers pour vous.",
          },
          {
            question:
              "Quelle garantie sur le faîtage ?",
            answer:
              "Décennale (10 ans) sur l'ensemble de la prestation, obligation légale — attestation active jointe à chaque devis. Durabilité intrinsèque : faîtage scellé chaux 15-25 ans, closoir à sec ventilé 25-30 ans. Photos avant/après + attestation d'assurance + fiche technique matériaux remises fin de chantier. Si fuite au niveau du faîtage réparé dans les 10 ans, nous revenons.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
