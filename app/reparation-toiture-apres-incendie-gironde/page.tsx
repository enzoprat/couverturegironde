import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('reparation-toiture-apres-incendie-gironde');

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
          service: 'couverture',
          slug: PAGE.slug,
          h1: (
            <>
              Toiture après incendie en{' '}
              <span className="text-[var(--color-terre)]">Gironde</span> —
              diagnostic, mise en sécurité et réparation
            </>
          ),
          heroSubtitle:
            "Toiture exposée aux flammes, aux braises ou aux fumées lors des feux de l'été 2026 ? Diagnostic couvreur gratuit sur toute la Gironde, mise en sécurité immédiate et dossier assurance incendie constitué. Liroy, artisan direct, atelier à Mérignac — commune elle-même touchée par les évacuations. ☎ 07 68 69 78 48.",
          shortTitle: 'Toiture après incendie',

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
            bio: "Notre atelier est au 65 rue de Malbos à Mérignac, une des communes concernées par les évacuations de juillet 2026. Nous connaissons le terrain, les toitures locales et l'urgence de la situation. Je réponds personnellement au téléphone et je me déplace sur l'ensemble de la Gironde sinistrée pour établir un diagnostic honnête, sans profiter de la détresse des propriétaires.",
            badges: [
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Atelier Mérignac — zone sinistrée',
              'Diagnostic gratuit',
            ],
          },

          presentation: (
            <>
              <p>
                Les feux de forêt de l'été 2026 dans le massif des Landes de
                Gascogne ont frappé la Gironde d'une ampleur exceptionnelle :
                partis de <strong>Saumos le 22 juillet</strong> et progressant
                vers Le Porge, ils ont parcouru{' '}
                <strong>plus de 42 000 hectares</strong> et entraîné
                l'évacuation de <strong>plus de 220 000 personnes</strong>.
                Saint-Médard-en-Jalles, Saint-Jean-d'Illac, Martignas,
                Saint-Aubin-de-Médoc, Le Haillan, Lacanau, Lège-Cap-Ferret,
                Mérignac, Eysines… la liste des communes concernées dessine un
                arc qui touche aussi bien le Médoc que le pourtour du Bassin et
                les portes de la métropole.
              </p>
              <p>
                Une fois le feu maîtrisé et le retour autorisé, des milliers de
                toitures qui n'ont <strong>pas brûlé</strong> se révèlent
                pourtant abîmées. C'est le piège des sinistres incendie : les
                dégâts les plus dangereux sont <strong>invisibles depuis le
                sol</strong>. Des braises ont pu entrer sous les tuiles par les
                rives ou le faîtage et couver dans l'isolant plusieurs jours, la
                chaleur radiante a fissuré des tuiles en terre cuite par choc
                thermique, les fumées acides ont attaqué le zinc, et l'eau des
                lances à incendie a gorgé la charpente. Une toiture d'apparence
                intacte peut fuir dès la première pluie ou, pire, présenter un
                <strong> foyer résiduel</strong>.
              </p>
              <p>
                Notre démarche est volontairement en deux temps et sans
                pression : <strong>mise en sécurité immédiate</strong> (bâchage
                des zones ouvertes, dépose des éléments menaçant de tomber,
                vérification de l'absence de point chaud), puis{' '}
                <strong>diagnostic complet gratuit avec rapport photo</strong>{' '}
                que vous conservez pour votre assurance. Si votre sinistre relève
                davantage d'une infiltration ou d'une fuite active, notre page{' '}
                <Link
                  href="/urgence-fuite-toiture-bordeaux"
                  className="text-[var(--color-terre)] underline underline-offset-2 hover:no-underline"
                >
                  urgence fuite de toiture
                </Link>{' '}
                détaille la mise hors d'eau ; si la structure bois est touchée,
                notre expertise{' '}
                <Link
                  href="/charpente-bordeaux"
                  className="text-[var(--color-terre)] underline underline-offset-2 hover:no-underline"
                >
                  charpente
                </Link>{' '}
                permet d'évaluer la perte de section des bois roussis.
              </p>
              <p>
                Couverture Gironde intervient sur{' '}
                <strong>tout le département, quel que soit le secteur touché</strong>{' '}
                — du Médoc au Sud-Gironde en passant par le Bassin et le
                Libournais — et pour{' '}
                <strong>tous les types de travaux</strong> : remplacement de
                tuiles éclatées, reprise de zinguerie fondue, réfection partielle
                ou totale de couverture, traitement de charpente, jusqu'à la
                reconstruction complète de toiture après destruction. Nous
                couvrons aussi bien la métropole que la{' '}
                <Link
                  href="/couvreur-gironde"
                  className="text-[var(--color-terre)] underline underline-offset-2 hover:no-underline"
                >
                  Gironde hors métropole
                </Link>
                . Le diagnostic est gratuit et la grande majorité des travaux
                est prise en charge au titre de la garantie incendie de votre
                assurance habitation.
              </p>
              <p>
                <strong>
                  Secteurs dans lesquels nous pouvons intervenir
                </strong>{' '}
                — nous organisons nos déplacements sur l'ensemble du
                département, en priorité sur les zones concernées par les feux
                de l'été 2026 :
              </p>
              <ul>
                <li>
                  <strong>Médoc &amp; nord-Bassin</strong> — Lacanau, Le Porge,
                  Lège-Cap-Ferret, Sainte-Hélène, Saumos, Le Temple.
                </li>
                <li>
                  <strong>Bassin d'Arcachon</strong> — Lanton, Biganos, Mios,
                  Marcheprime, Le Barp.
                </li>
                <li>
                  <strong>Bordeaux Métropole ouest</strong> —
                  Saint-Médard-en-Jalles, Saint-Jean-d'Illac, Martignas,
                  Saint-Aubin-de-Médoc, Le Haillan, Mérignac, Eysines, Cestas.
                </li>
                <li>
                  <strong>Reste de la Gironde</strong> — Sud-Gironde,
                  Libournais et autres communes sur demande.
                </li>
              </ul>
              <p className="text-[0.9375rem] italic">
                Cette liste correspond aux secteurs dans lesquels nous pouvons
                intervenir et ne constitue en aucun cas une liste officielle des
                bâtiments ou communes sinistrés. Pour votre sécurité, n'accédez
                jamais à une toiture ou à un logement dont la structure peut être
                fragilisée sans l'autorisation des services de secours. Dernière
                mise à jour : 31 juillet 2026.
              </p>
            </>
          ),

          pourquoiRaisons: [
            {
              title: 'Artisan local dans la zone sinistrée',
              description:
                "Notre atelier est au 65 rue de Malbos à Mérignac, commune elle-même évacuée en juillet 2026. Nous ne débarquons pas d'un autre département après la catastrophe : nous sommes du terrain, disponibles durablement pour le SAV.",
            },
            {
              title: 'Détection des dangers invisibles',
              description:
                "Braises couvant dans l'isolant, tuiles fissurées par choc thermique, zinc corrodé par les fumées : nous montons vérifier ce que vous ne pouvez pas voir depuis le sol, avant que ça ne dégénère en fuite ou en reprise de feu.",
            },
            {
              title: 'Diagnostic gratuit + rapport photo',
              description:
                "Vous recevez un état des lieux honnête, photos à l'appui, que vous gardez pour votre déclaration. Si votre toiture est saine, nous vous le disons — nous ne facturons pas de travaux inutiles sur des sinistrés.",
            },
            {
              title: 'Dossier assurance incendie constitué',
              description:
                "Photos avant/après, devis chiffré ligne par ligne, attestation décennale. Nous restons joignables pour échanger directement avec l'expert mandaté par votre assureur.",
            },
            {
              title: 'Tous travaux, tout le département',
              description:
                "Du simple remplacement de tuiles à la reconstruction complète de toiture, du Médoc au Sud-Gironde : un seul interlocuteur pour l'ensemble du chantier, sans sous-traitance en cascade.",
            },
            {
              title: 'Aucune pression, aucun démarchage',
              description:
                "Les catastrophes attirent les démarcheurs qui surfacturent la détresse. Nous faisons l'inverse : mise en sécurité d'abord, devis à froid ensuite, et vous décidez tranquillement.",
            },
          ],

          risques: [
            {
              title: 'Reprise de feu par braises couvantes',
              description:
                "Des escarbilles entrées sous la couverture peuvent couver dans l'isolant ou la volige plusieurs jours après le passage du feu, avant de redémarrer un incendie. La vérification de l'absence de point chaud est une priorité absolue au retour.",
            },
            {
              title: 'Tuiles fissurées par choc thermique',
              description:
                "La chaleur radiante intense fait éclater ou micro-fissurer la terre cuite et feuilleter l'ardoise, sans casse visible depuis le sol. Ces tuiles fragilisées cèdent à la première pluie ou au premier gel et ouvrent des voies d'eau.",
            },
            {
              title: 'Zinguerie fondue ou corrodée',
              description:
                "Gouttières PVC déformées, zinc oxydé par les suies acides, soudures fragilisées, joints d'étanchéité fondus : le réseau d'évacuation des eaux est souvent le premier atteint, ce qui provoque des infiltrations aux points de raccord.",
            },
            {
              title: 'Charpente et isolant compromis',
              description:
                "Bois roussi en surface (perte de section à évaluer), isolant gorgé par l'eau des lances (90 % de performance thermique perdue et risque de moisissure). Non traité, cela évolue vers un affaiblissement structurel coûteux.",
            },
            {
              title: "Refus ou minoration d'indemnisation",
              description:
                "Sans état des lieux professionnel rapide et daté, l'assureur peut sous-évaluer les dégâts non visibles ou contester leur lien avec l'incendie. Un rapport photo complet protège votre indemnisation.",
            },
          ],

          methode: [
            {
              title: 'Appel et priorisation',
              description:
                "Vous appelez le 07 68 69 78 48. Je réponds personnellement en heures ouvrées. Nous évaluons ensemble la situation (toiture ouverte, fuite, doute sur un point chaud) et je planifie une visite en priorité sur les cas dangereux.",
            },
            {
              title: 'Mise en sécurité immédiate',
              description:
                "Bâchage technique des zones ouvertes, dépose des tuiles et éléments menaçant de tomber, vérification de l'absence de foyer résiduel dans la sous-toiture. Objectif : stopper l'aggravation et sécuriser les lieux.",
            },
            {
              title: 'Diagnostic complet + rapport photo',
              description:
                "Inspection méthodique de la couverture, de la zinguerie et de la charpente accessible. Repérage des tuiles fissurées, du zinc corrodé, de l'isolant humide. Rapport photo daté remis gratuitement pour votre assurance.",
            },
            {
              title: 'Constitution du dossier assurance',
              description:
                "Nous chiffrons les dommages ligne par ligne et réunissons les pièces nécessaires à votre déclaration au titre de la garantie incendie (à faire sous 5 jours ouvrés). Échange direct possible avec l'expert de l'assureur.",
            },
            {
              title: 'Devis de remise en état — à froid',
              description:
                "Vous recevez un devis détaillé : réparation ponctuelle, réfection partielle ou reconstruction complète selon l'ampleur. Aucune pression pour signer immédiatement — vous comparez et décidez sereinement.",
            },
            {
              title: 'Travaux et garantie',
              description:
                "Réalisation du chantier avec matériaux adaptés au bâti local, de la simple reprise à la toiture neuve. Garantie décennale, attestation remise, dossier assurance clôturé, suivi SAV pendant 10 ans.",
            },
          ],

          faqOverride: [
            {
              question:
                "Ma toiture n'a pas brûlé mais a été exposée au feu : dois-je la faire vérifier ?",
              answer:
                "Oui, impérativement. La majorité des toitures endommagées par un incendie de forêt n'ont pas brûlé : elles ont été atteintes par la chaleur radiante (tuiles fissurées invisibles depuis le sol), par des braises entrées sous la couverture, par les fumées acides (corrosion du zinc) ou par l'eau des lances. Ces dégâts ne se voient qu'en montant. Non détectés, ils provoquent des fuites à la première pluie, voire une reprise de feu. Notre diagnostic est gratuit — mieux vaut vérifier que découvrir le problème dans six mois.",
            },
            {
              question:
                "Une toiture peut-elle vraiment reprendre feu après le passage de l'incendie ?",
              answer:
                "Oui. C'est l'un des dangers les plus sous-estimés. Des braises ou escarbilles peuvent s'infiltrer sous les tuiles, dans le faîtage ou par une entrée d'air, et couver dans l'isolant ou la volige pendant plusieurs jours avant de redémarrer un feu. Au retour dans un logement exposé, la vérification de l'absence de point chaud dans la sous-toiture est une priorité absolue. En cas de fumée, d'odeur de brûlé ou de chaleur anormale, appelez les pompiers au 18.",
            },
            {
              question:
                "Intervenez-vous sur toute la Gironde ou seulement autour de Bordeaux ?",
              answer:
                "Sur l'ensemble du département, quel que soit le secteur touché : Médoc, pourtour du Bassin d'Arcachon (Lège-Cap-Ferret, Lacanau, Le Porge, Lanton), métropole (Saint-Médard-en-Jalles, Saint-Jean-d'Illac, Martignas, Mérignac, Eysines), Sud-Gironde et Libournais. Notre atelier est à Mérignac, au cœur de la zone sinistrée. Pour les communes éloignées, nous groupons les interventions afin de maîtriser les délais et les coûts de déplacement.",
            },
            {
              question:
                "Mon assurance prend-elle en charge les réparations de toiture après incendie ?",
              answer:
                "Dans la très grande majorité des cas, oui. Les dommages causés par un incendie sont couverts par la garantie incendie, présente dans tout contrat multirisque habitation. Vous devez déclarer le sinistre à votre assureur sous 5 jours ouvrés. Nous vous fournissons le dossier complet : rapport photo daté, devis chiffré ligne par ligne, attestation décennale. Si un arrêté de catastrophe naturelle est publié pour votre commune, des dispositions complémentaires peuvent s'appliquer — nous vous orientons le cas échéant.",
            },
            {
              question:
                "Le diagnostic de ma toiture est-il vraiment gratuit ?",
              answer:
                "Oui, la visite de diagnostic et le rapport photo sont gratuits. Si votre toiture est saine, nous vous le disons sans vous vendre de travaux inutiles. Nous refusons les pratiques de démarchage qui exploitent la détresse des sinistrés. Vous ne payez que des travaux réellement nécessaires, et le plus souvent pris en charge par votre assurance.",
            },
            {
              question:
                "Comment reconnaître une tuile fissurée par la chaleur si rien n'est cassé ?",
              answer:
                "C'est précisément le problème : le choc thermique provoque des micro-fissures et un feuilletage internes qui ne se voient pas depuis le sol, et parfois même pas à l'œil nu de près. La terre cuite devient poreuse, l'ardoise se délite en fines lamelles. Le test se fait au toucher et au son (une tuile fêlée sonne mat), tuile par tuile, sur la zone exposée. C'est un travail de couvreur, pas une inspection depuis la rue.",
            },
            {
              question:
                "Ma charpente est roussie en surface : faut-il tout remplacer ?",
              answer:
                "Pas nécessairement. Un bois seulement roussi en surface conserve souvent l'essentiel de sa résistance : la couche carbonisée superficielle protège même le cœur du bois. Ce qui compte, c'est la perte de section réelle, qui se mesure. Nous évaluons chaque pièce : traitement et conservation quand c'est possible, remplacement ciblé des éléments trop atteints. On ne remplace pas une charpente entière par précaution si ce n'est pas justifié.",
            },
            {
              question:
                "Ma toiture est partiellement détruite : réparation partielle ou réfection complète ?",
              answer:
                "Cela dépend de l'étendue et de l'homogénéité des dégâts. Une zone localisée se répare ponctuellement en raccordant proprement à l'existant. Mais si une grande partie de la couverture est fragilisée par la chaleur, une réfection partielle voire complète est souvent plus fiable et mieux indemnisée qu'une multitude de réparations qui vieilliront mal. Nous chiffrons les deux scénarios pour que vous décidiez en connaissance de cause avec votre assureur.",
            },
            {
              question:
                "Combien de temps une bâche de mise en sécurité peut-elle tenir ?",
              answer:
                "Une bâche technique correctement ancrée aux points structurels tient 3 à 6 mois, le temps que la déclaration d'assurance aboutisse et que les travaux définitifs soient planifiés. Ce n'est pas une bâche de bricolage simplement posée : elle est fixée pour résister au vent d'ouest girondin. Cela vous laisse le temps de gérer les démarches sans pression et sans nouvelle infiltration.",
            },
            {
              question:
                "Que faire en priorité au retour dans un logement dont la toiture a été exposée ?",
              answer:
                "1) Ne montez jamais sur le toit vous-même : structure potentiellement fragilisée, risque de chute. 2) Vérifiez l'absence de fumée, d'odeur de brûlé ou de chaleur anormale au niveau des combles ; au moindre doute, pompiers au 18. 3) Photographiez tout ce qui est visible (extérieur, plafonds, combles) pour votre assurance. 4) Déclarez le sinistre sous 5 jours ouvrés. 5) Faites réaliser un diagnostic professionnel de la couverture avant la première pluie. Nous nous en chargeons gratuitement.",
            },
          ],
        }}
      />
      {/* Schema Person Liroy — E-E-A-T signal auteur */}
      <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
