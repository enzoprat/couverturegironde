import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('fuite-toiture-tempete-bordeaux');

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
          service: 'urgence',
          slug: PAGE.slug,
          h1: (
            <>
              Fuite de toiture après tempête à{' '}
              <span className="text-[var(--color-terre)]">Bordeaux</span> —
              bâchage 7j/7 + dossier assurance
            </>
          ),
          heroSubtitle:
            "Tuiles arrachées, faîtage envolé, fuite déclarée après un coup de vent ? Nous bâchons en urgence sous 30 min à 2h ET constituons votre dossier d'indemnisation tempête / catastrophe naturelle. Couvreur mérignacais direct depuis 2005. ☎ 07 68 69 78 48.",
          shortTitle: 'Fuite après tempête',

          authorBlock: {
            name: 'Liroy Delsuc',
            role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
            bio: "Le climat atlantique bordelais expose les toitures aux dépressions d'ouest : Klaus (2009, rafales à 172 km/h au Cap-Ferret), Xynthia, et chaque hiver son lot de coups de vent >100 km/h. Après une tempête, deux urgences se cumulent : arrêter l'eau vite, et sécuriser vos droits à indemnisation avant que les délais assurance ne courent. Je gère les deux — bâchage immédiat et dossier photo solide pour l'expert.",
            badges: [
              'Décennale active',
              '5/5 sur 52 avis Google',
              'Dossier assurance inclus',
              'Saison tempête renforcée',
            ],
          },

          presentation: (
            <>
              <p>
                Après une tempête, une toiture endommagée devient une{' '}
                <strong>double urgence</strong> : technique (l'eau qui entre
                détruit l'isolant et les plafonds heure après heure) et
                administrative (les délais de déclaration à votre assurance sont
                courts et commencent à courir dès le sinistre). Nous traitons
                les deux dans le même mouvement.
              </p>
              <p>
                Bordeaux et la Gironde sont directement exposés aux{' '}
                <strong>dépressions atlantiques</strong> qui remontent du golfe
                de Gascogne. Vents d'ouest à sud-ouest, rafales dépassant
                régulièrement 100 km/h en automne-hiver, épisodes marquants
                (Klaus en 2009, Xynthia en 2010) : les dégâts typiques sont les{' '}
                <strong>tuiles soulevées ou arrachées, le faîtage disloqué, les
                closoirs envolés, les abergements de cheminée déchirés</strong>,
                parfois une branche ou un arbre tombé sur la couverture. Chacun
                de ces désordres ouvre une voie d'eau.
              </p>
              <p>
                La priorité absolue est la{' '}
                <strong>mise hors d'eau</strong> : bâche technique fixée aux
                points structurels (pas simplement posée, le vent d'ouest la
                réarracherait), remplacement provisoire des tuiles disponibles,
                sécurisation des éléments menaçant de tomber. Si votre fuite
                coule en ce moment même, il s'agit d'une{' '}
                <Link
                  href="/urgence-fuite-toiture-bordeaux"
                  className="text-[var(--color-terre)] underline underline-offset-2 hover:no-underline"
                >
                  urgence fuite toiture
                </Link>{' '}
                — appelez directement, nous partons dans les minutes qui
                suivent en heures ouvrées.
              </p>
              <p>
                En parallèle, nous{' '}
                <strong>documentons intégralement le sinistre</strong> : photos
                datées des dégâts avant/après bâchage, descriptif technique
                chiffré, attestation décennale. Ce dossier est ce qui fait la
                différence entre une indemnisation fluide et un dossier
                contesté. La plupart des sinistrés perdent de l'argent non pas
                parce qu'ils ne sont pas couverts, mais parce que leur dossier
                est trop faible face à l'expert.
              </p>
            </>
          ),

          pourquoiRaisons: [
            {
              title: 'Bâchage qui tient au vent atlantique',
              description:
                "Une bâche mal fixée est réarrachée dès la rafale suivante. Nous ancrons la bâche technique aux points structurels (liteaux, chevrons) pour qu'elle tienne 3 à 6 mois, le temps que l'assurance aboutisse.",
            },
            {
              title: 'Dossier tempête / cat-nat constitué pour vous',
              description:
                "Photos datées avant/après, descriptif chiffré, attestation décennale. Nous restons joignables pour l'expert mandaté. Un dossier solide = une indemnisation qui passe sans discussion.",
            },
            {
              title: 'Intervention 30 min à 2h en ouvré',
              description:
                "Atelier au 65 rue de Malbos à Mérignac. Après tempête, chaque heure compte : nous priorisons les toitures qui prennent l'eau active sur Bordeaux Métropole.",
            },
            {
              title: 'Distinction garantie tempête vs cat-nat',
              description:
                "Toutes les tempêtes ne relèvent pas de la catastrophe naturelle. Nous vous aidons à identifier le bon régime (garantie tempête de votre contrat MRH vs arrêté cat-nat) pour ne pas perdre de temps sur la mauvaise procédure.",
            },
            {
              title: 'Réparation définitive à froid, sans pression',
              description:
                "Une fois hors d'eau, vous recevez un devis de réparation définitive sous 48h. Aucune signature forcée en urgence, contrairement aux démarcheurs qui rôdent après chaque tempête.",
            },
          ],

          risques: [
            {
              title: 'Délai de déclaration assurance dépassé',
              description:
                "La garantie tempête impose généralement une déclaration sous 5 jours ouvrés ; le régime catastrophe naturelle, sous 30 jours après publication de l'arrêté au Journal Officiel. Passé ces délais, l'assureur peut refuser. Agir vite protège vos droits.",
            },
            {
              title: 'Dégâts intérieurs qui explosent la facture',
              description:
                "L'eau qui entre par une tuile arrachée sature l'isolant (−90 % de performance), tache les plafonds, gondole les parquets. 400 € de bâchage immédiat évite couramment 5 000 à 15 000 € de dégâts intérieurs.",
            },
            {
              title: 'Éléments menaçant de tomber',
              description:
                "Tuiles descellées, faîtière disloquée, antenne ou souche de cheminée fragilisée : après tempête, ces éléments peuvent blesser quelqu'un ou aggraver les dégâts au premier coup de vent suivant. Sécurisation immédiate nécessaire.",
            },
            {
              title: 'Démarcheurs opportunistes post-tempête',
              description:
                "Après chaque tempête, des équipes non locales démarchent au porte-à-porte, surfacturent, encaissent un acompte et disparaissent. Un artisan local identifiable (atelier physique, décennale vérifiable) est votre meilleure protection.",
            },
          ],

          methode: [
            {
              title: 'Appel + évaluation à distance',
              description:
                "Vous appelez le 07 68 69 78 48 (photos bienvenues par SMS/WhatsApp). J'évalue l'ampleur, la voie d'eau active, et je vous guide sur les gestes immédiats (couper l'électricité si l'eau approche, protéger l'intérieur).",
            },
            {
              title: 'Arrivée et sécurisation',
              description:
                "30 min à 2h en heures ouvrées depuis Mérignac. Sécurisation des éléments menaçant de tomber, balisage si nécessaire, évaluation de la structure avant intervention en hauteur.",
            },
            {
              title: "Mise hors d'eau immédiate",
              description:
                "Bâche technique ancrée aux points structurels, remplacement provisoire des tuiles disponibles, colmatage temporaire des points fuyards. Votre toiture est hors d'eau le jour même.",
            },
            {
              title: 'Constitution du dossier sinistre',
              description:
                "Photos datées avant/après, relevé des dégâts, descriptif technique. Nous identifions avec vous le bon régime (garantie tempête ou catastrophe naturelle) et les délais applicables.",
            },
            {
              title: 'Devis de réparation définitive sous 48h',
              description:
                "Chiffrage ligne par ligne (main d'œuvre, matériaux, sécurité, accès), compatible avec la procédure d'indemnisation. Transmissible directement à votre assureur ou expert.",
            },
            {
              title: 'Travaux définitifs + clôture dossier',
              description:
                "Réparation définitive planifiée selon matériaux et météo, garantie décennale, attestation remise. Nous restons disponibles pour toute demande complémentaire de l'expert jusqu'à clôture.",
            },
          ],

          tarifs: {
            intro:
              "Tarifs 2026 constatés sur Bordeaux Métropole pour les interventions de mise hors d'eau après tempête. Le bâchage d'urgence est souvent absorbé dans le chantier de réparation définitive s'il est signé dans la foulée. Ces montants relèvent généralement de votre garantie tempête ou du régime catastrophe naturelle.",
            lines: [
              {
                service: "Bâchage d'urgence (bâche technique ancrée)",
                range: '250 – 450 €',
                note: 'Surface <30 m², accès normal',
              },
              {
                service: 'Bâchage complexe (grande surface / hauteur >8 m)',
                range: '450 – 800 €',
                note: 'Échafaudage temporaire si nécessaire',
              },
              {
                service: 'Dossier photo + descriptif pour assurance',
                range: '0 – 180 €',
                note: 'Gratuit si réparation définitive signée',
              },
              {
                service: 'Remplacement tuiles arrachées (≤ 10)',
                range: '180 – 420 €',
                note: 'Diagnostic + intervention',
              },
              {
                service: 'Reprise faîtage disloqué par le vent',
                range: '45 – 70 €/ml',
                note: 'Scellé chaux ou closoir ventilé',
              },
              {
                service: 'Reprise abergement cheminée déchiré',
                range: '380 – 850 €',
                note: 'Zinc soudé étain sur place',
              },
              {
                service: 'Dépose branche / arbre tombé sur toiture',
                range: 'sur devis',
                note: 'Selon volume et risque structurel',
              },
              {
                service: 'Intervention week-end / jour férié',
                range: '+ 80 – 150 €',
                note: 'Supplément forfait',
              },
            ],
            disclaimer:
              "Tarifs TTC, posé, sécurité incluse. Garantie décennale active. En saison tempête (novembre-mars), veille des appels renforcée le week-end. Ces prestations sont généralement prises en charge par votre assurance (garantie tempête ou catastrophe naturelle) sous réserve des franchises contractuelles.",
          },

          faqOverride: [
            {
              question:
                "Que faire dans les minutes qui suivent une tempête ?",
              answer:
                "1) Ne montez JAMAIS sur le toit — c'est la première cause d'accident grave post-tempête. 2) Coupez l'électricité au tableau si l'eau approche une prise, un luminaire ou un boîtier. 3) Protégez l'intérieur (bassines, déplacer meubles et électronique). 4) Photographiez les dégâts intérieurs ET extérieurs depuis le sol, avec la date. 5) Appelez un couvreur pour le bâchage. Ces photos et le bâchage rapide sont vos deux meilleurs atouts pour l'indemnisation.",
            },
            {
              question:
                "Ma toiture est-elle couverte après une tempête ?",
              answer:
                "Dans la grande majorité des cas oui. Deux régimes possibles : (1) la GARANTIE TEMPÊTE, incluse dans quasiment tous les contrats multirisque habitation, joue dès que le vent a causé le dommage (souvent sans seuil de vitesse imposé selon les contrats récents) ; (2) le régime CATASTROPHE NATURELLE, qui nécessite un arrêté interministériel publié au Journal Officiel. Nous vous aidons à identifier lequel s'applique pour ne pas engager la mauvaise procédure.",
            },
            {
              question:
                "Quel est le délai pour déclarer le sinistre ?",
              answer:
                "Pour la garantie tempête : généralement 5 jours ouvrés après la constatation des dégâts (vérifiez votre contrat). Pour la catastrophe naturelle : 30 jours après la publication de l'arrêté cat-nat au Journal Officiel. Ces délais sont impératifs — un retard peut justifier un refus d'indemnisation. C'est pourquoi nous constituons le dossier photo immédiatement, dès le bâchage.",
            },
            {
              question:
                "Combien coûte un bâchage d'urgence après tempête ?",
              answer:
                "Bâchage standard : 250-450 € (surface <30 m², accès normal). Bâchage complexe (grande surface, hauteur >8 m) : 450-800 €. Ce montant est souvent NON facturé séparément s'il est intégré au chantier de réparation définitive. Dans la plupart des cas, il est pris en charge par votre assurance au titre des mesures conservatoires (limitation des dégâts).",
            },
            {
              question:
                "Faut-il attendre l'expert avant de bâcher ?",
              answer:
                "Non, surtout pas. Vous avez même l'OBLIGATION de prendre les mesures conservatoires pour limiter l'aggravation des dégâts — c'est prévu par votre contrat. Bâcher immédiatement ne compromet en rien l'indemnisation, à condition de PHOTOGRAPHIER l'état avant/après. L'expert examinera vos photos et le devis. Attendre l'expert en laissant l'eau entrer, c'est aggraver un sinistre que l'assureur pourrait vous reprocher.",
            },
            {
              question:
                "Quels dégâts de tempête voyez-vous le plus à Bordeaux ?",
              answer:
                "Par ordre de fréquence sur Bordeaux Métropole : tuiles soulevées ou arrachées (tuile canal et mécanique très exposées au vent d'ouest), faîtage disloqué et closoirs envolés, abergements de cheminée déchirés, solins décollés, et plus ponctuellement chutes de branches. Les échoppes bordelaises à faible pente et les pavillons des années 70-90 sont particulièrement concernés.",
            },
            {
              question:
                "Combien de temps ma bâche va-t-elle tenir ?",
              answer:
                "Une bâche technique correctement ancrée aux points structurels tient 3 à 6 mois, le temps que la procédure d'assurance aboutisse et que la réparation définitive soit planifiée. Attention au vent d'ouest bordelais : une bâche de bricolage simplement posée sera réarrachée à la première rafale — d'où l'importance d'un ancrage professionnel.",
            },
            {
              question:
                "Intervenez-vous le week-end en saison de tempête ?",
              answer:
                "En saison tempête (novembre-mars), la veille des appels est renforcée le week-end. En heures ouvrées (lundi-samedi 6h-22h), intervention en 30 min à 2h. Pour les urgences nuit/dimanche, message vocal au 07 68 69 78 48 avec rappel prioritaire dès la première heure du jour ouvré suivant. Après un épisode tempétueux majeur, nous priorisons les toitures qui prennent l'eau active.",
            },
            {
              question:
                "Comment éviter les démarcheurs après une tempête ?",
              answer:
                "Après chaque tempête, des équipes non locales démarchent au porte-à-porte, promettent une intervention immédiate, encaissent un acompte important et bâclent ou disparaissent. Protégez-vous : exigez une adresse d'atelier physique (la nôtre : 65 rue de Malbos, Mérignac), une attestation décennale à jour, un devis écrit chiffré ligne par ligne. Ne payez jamais d'acompte en espèces à une équipe que vous n'avez pas sollicitée.",
            },
          ],
        }}
      />
      {/* Schema Person Liroy — E-E-A-T signal auteur */}
      <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
