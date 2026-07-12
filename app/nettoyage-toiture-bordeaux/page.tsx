import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('nettoyage-toiture-bordeaux');

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
        service: 'nettoyage',
        slug: PAGE.slug,
        h1: (
          <>
            Nettoyage toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> — haute
            pression maîtrisée 12-20 €/m²
          </>
        ),
        heroSubtitle:
          "Nettoyage haute pression MAÎTRISÉE (pas de karcher grand public agressif), pression et buse adaptées au matériau (tuile canal 80-100 bars, ardoise 60-80 bars, zinc <50 bars), rinçage complet des descentes. Diagnostic gratuit, tarif transparent 12-20 €/m², atelier Mérignac.",
        shortTitle: 'Nettoyage toiture',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
          bio: "Je fais du nettoyage professionnel depuis 2005 sur Bordeaux Métropole. Aucun karcher grand public utilisé sur nos chantiers : la pression et la buse sont adaptées au matériau, c'est ce qui distingue un nettoyage durable d'un traitement qui dégrade la tuile en quelques minutes. Chaque nettoyage inclut une inspection complète de la toiture avec repérage des points faibles.",
          badges: [
            'Depuis 2005',
            'Décennale active',
            '5/5 sur 52 avis Google',
            'Pression adaptée matériau',
          ],
        },
        presentation: (
          <>
            <p>
              Le nettoyage de toiture est un acte technique : il ne s'agit pas
              de "passer le karcher" comme on lave une terrasse. Une toiture
              mal nettoyée, pression trop forte, angle inadapté, matériau
              maltraité, c'est plusieurs années d'usure gagnée pour rien et
              parfois des tuiles à remplacer dès la fin du chantier.
            </p>
            <p>
              <strong>Notre approche du nettoyage de toiture allie efficacité
              et respect du matériau.</strong>{' '}
              Nous adaptons la pression, la buse et la distance à chaque
              support : tuile canal traditionnelle bordelaise, tuile mécanique,
              ardoise naturelle, zinc, fibrociment, bac acier. Chaque
              couverture a sa technique, sa température d'eau, son produit
              complémentaire.
            </p>
            <p>
              Nous combinons systématiquement nettoyage et démoussage dans la
              même intervention. Nettoyer sans démousser, c'est laisser les
              spores en place, la mousse revient en deux ans.{' '}
              <strong>
                Démousser sans nettoyer, c'est laisser les dépôts de pollution,
                les coulures et les algues sur la tuile.
              </strong>{' '}
              Les deux opérations sont complémentaires et indissociables pour
              un résultat durable. Sur une toiture poreuse, nous ajoutons un{' '}
              <Link
                href="/traitement-hydrofuge-toiture-bordeaux"
                className="text-[var(--color-terre)] underline underline-offset-2 hover:no-underline"
              >
                traitement hydrofuge
              </Link>{' '}
              en finition pour retarder le retour des mousses de 5 à 10 ans.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Buse et pression adaptées au matériau',
            description:
              "Tuile canal : 80-100 bars. Ardoise : 60-80 bars. Zinc : <50 bars et buse spéciale. Nous n'utilisons jamais une pression standard sur tous les matériaux, c'est la cause n°1 de dégradations après nettoyage.",
          },
          {
            title: 'Nettoyage + démoussage en une intervention',
            description:
              "Inutile de payer deux fois pour deux passages. Nous brossons, nettoyons et appliquons l'anti-mousse dans la foulée. Économique pour vous, plus durable pour la toiture.",
          },
          {
            title: 'Respect de la zinguerie',
            description:
              "Gouttières, faîtages, raccords zinc : autant de points où un nettoyage trop agressif fait des dégâts. Nous protégeons systématiquement les éléments fragiles avant intervention.",
          },
          {
            title: 'Eau récupérée et écoulements maîtrisés',
            description:
              "Nous bâchons les évacuations sensibles, redirigeons les écoulements pour ne pas polluer le jardin ni encombrer le réseau pluvial. Travail propre, sans surprise pour vos voisins.",
          },
          {
            title: 'Inspection en parallèle',
            description:
              "Pendant que nous nettoyons, nous repérons les tuiles fissurées, les joints défaillants, les éléments de zinguerie à renforcer. Le rapport vous est remis avec photos en fin de chantier.",
          },
        ],
        risques: [
          {
            title: 'Dépôts qui retiennent l\u2019humidité',
            description:
              "Pollution, particules fines, suie : ces dépôts forment un film qui retient l'humidité au contact de la tuile. Combiné aux mousses, c'est un cocktail destructeur pour la couverture.",
          },
          {
            title: 'Toiture qui perd son pouvoir évacuateur',
            description:
              "Une tuile encrassée évacue mal l'eau. Le ruissellement devient irrégulier, l'eau stagne dans les recouvrements, les infiltrations apparaissent. C'est exactement le problème qu'une tuile est faite pour éviter.",
          },
          {
            title: 'Apparence dégradée et valeur immobilière en baisse',
            description:
              "Une toiture sale est le premier signal de vétusté que perçoit un acheteur ou un voisin. Une toiture propre revalorise immédiatement la perception du bâti, surtout sur le marché bordelais.",
          },
          {
            title: 'Coût d\u2019une réfection multiplié par 8',
            description:
              "Un nettoyage tous les 4-5 ans coûte 12-20 €/m². Une réfection complète après dégradation coûte 80-150 €/m². L'entretien régulier est l'investissement le plus rentable du bâti.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic et devis',
            description:
              "Visite gratuite, inspection complète, devis détaillé sous 24h. Aucun engagement, aucun acompte avant signature.",
          },
          {
            title: 'Préparation du chantier',
            description:
              "Sécurisation, bâchage, protection des descentes et du jardin. Information des voisins, accès clairement balisé.",
          },
          {
            title: 'Nettoyage maîtrisé',
            description:
              "Pression et buse adaptées au matériau de votre toiture. Nettoyage progressif versant par versant, en partant du haut vers le bas.",
          },
          {
            title: 'Démoussage complémentaire',
            description:
              "Application d'un produit anti-mousse rémanent professionnel. Couverture homogène, pulvérisation basse pression pour éviter le ruissellement excessif.",
          },
          {
            title: 'Rinçage et inspection finale',
            description:
              "Rinçage des chéneaux et descentes d'eau pluviale, vérification visuelle complète de la toiture, photos avant/après.",
          },
          {
            title: 'Rapport de chantier et conseils',
            description:
              "Remise d'un bref rapport indiquant l'état général, les points à surveiller dans les 5 prochaines années, et la date conseillée du prochain entretien.",
          },
        ],
        tarifs: {
          intro:
            "Fourchettes de prix observées sur Bordeaux Métropole en 2026 pour un nettoyage de toiture. Le tarif dépend du matériau, de l'accessibilité, du niveau d'encrassement et de l'éventuel combo avec un démoussage ou un traitement hydrofuge.",
          lines: [
            {
              service: 'Nettoyage simple tuile mécanique',
              range: '12 – 16 €/m²',
              note: 'Pression 80-100 bars, buse adaptée',
            },
            {
              service: 'Nettoyage tuile canal traditionnelle',
              range: '14 – 20 €/m²',
              note: 'Pression réduite, technique manuelle complémentaire',
            },
            {
              service: 'Nettoyage ardoise naturelle',
              range: '15 – 22 €/m²',
              note: 'Pression 60-80 bars, buse douce obligatoire',
            },
            {
              service: 'Nettoyage zinc patiné',
              range: '18 – 28 €/m²',
              note: 'Pression <50 bars, buse spéciale, eau tiède',
            },
            {
              service: 'Nettoyage + démoussage combiné',
              range: '18 – 25 €/m²',
              note: 'Le combo recommandé, le plus rentable',
            },
            {
              service: 'Nettoyage + démoussage + hydrofuge 10 ans',
              range: '25 – 38 €/m²',
              note: 'Protection complète, garantie 10 ans',
            },
            {
              service: 'Nettoyage gouttières + descentes EP',
              range: '8 – 15 €/ml',
              note: 'Souvent inclus dans le nettoyage toiture',
            },
            {
              service: 'Forfait minimum déplacement',
              range: '280 – 420 €',
              note: 'Surface <30 m² ou intervention courte',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, sécurité incluse. Échafaudage spécifique, accès difficile ou hauteur >12m sur devis. Le combo nettoyage+démoussage+hydrofuge est le plus rentable sur la durée (économise 30-50% vs prestations séparées).",
        },
        quartiersBordeaux: {
          intro:
            "Le climat océanique girondin (930 mm de pluie par an, couvert végétal dense) favorise particulièrement les mousses et les dépôts sur les toitures bordelaises. Chaque quartier a son profil d'encrassement, lié au bâti et à l'environnement.",
          items: [
            {
              nom: 'Bordeaux Centre',
              description:
                "Dépôts de pollution urbaine + algues sur ardoises. Combo nettoyage + démoussage particulièrement recommandé tous les 4-5 ans.",
              href: '/couvreur-bordeaux-centre',
            },
            {
              nom: 'Chartrons',
              description:
                "Toits zinc et ardoise patrimoniaux : pression strictement maîtrisée obligatoire pour préserver la patine.",
              href: '/couvreur-bordeaux-chartrons',
            },
            {
              nom: 'Caudéran',
              description:
                "Quartier arboré : mousses abondantes sur versants nord, démoussage rémanent + hydrofuge fortement recommandé.",
              href: '/couvreur-bordeaux-cauderan',
            },
            {
              nom: 'Saint-Augustin',
              description:
                "Échoppes tuile canal : nettoyage doux et démoussage régulier maintiennent l'esthétique du bâti bordelais traditionnel.",
              href: '/couvreur-bordeaux-saint-augustin',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune : intervention sans surcoût déplacement, tarifs à partir de 12 €/m² pour tuile mécanique standard.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Quartiers étudiants et résidentiels boisés. Mousses abondantes côté Bourg-Madame et Cap-de-Bos, hydrofuge recommandé.",
              href: '/nettoyage-toiture-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Maisons bourgeoises ardoise et tuile mécanique, intervention douce pour préserver les éléments patrimoniaux.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Le Bouscat',
              description:
                "Quartier résidentiel cossu, toitures bien entretenues : démoussage tous les 5 ans suffit avec hydrofuge.",
              href: '/couvreur-bouscat',
            },
            {
              nom: 'Gradignan, Villenave, Bègles',
              description:
                "Pavillonnaire arboré : versants nord particulièrement exposés, nettoyage + démoussage + hydrofuge combo recommandé.",
            },
          ],
        },

        // ————————————————————————————————————————————————
        // FAQ NETTOYAGE-FOCUSED (10 questions ICP)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "Nettoyage ≠ démoussage : quelle est la différence ?",
            answer:
              "Deux prestations distinctes mais complémentaires. Le NETTOYAGE haute pression retire les dépôts superficiels (pollution, particules fines, algues, coulures noires) — 12-20 €/m². Le DÉMOUSSAGE traite chimiquement les mousses et lichens INSTALLÉS avec brossage manuel et éradication des spores — 12-18 €/m². Sur une toiture avec MOUSSES visibles, il faut faire les deux. Sur une toiture juste sale (pas de mousses), un nettoyage suffit.",
          },
          {
            question:
              "Combien coûte un nettoyage de toiture à Bordeaux ?",
            answer:
              "Fourchettes 2026 : nettoyage simple tuile mécanique 12-16 €/m², tuile canal 14-20 €/m², ardoise 15-22 €/m², zinc 18-28 €/m². Combo nettoyage + démoussage 18-25 €/m² (le plus recommandé). Pour une maison type 120 m², nettoyage seul 1 440-2 400 €, combo 2 160-3 000 € TTC. TVA 10 % pour logements >2 ans. Diagnostic gratuit si chantier signé.",
          },
          {
            question:
              "Le karcher grand public abîme-t-il vraiment ma toiture ?",
            answer:
              "OUI, c'est la cause n°1 de dégradations post-nettoyage sur les toitures bordelaises. Un karcher grand public à pleine puissance avec buse standard : (1) provoque des micro-fissures dans la céramique, (2) sable l'engobe protecteur (couche superficielle), (3) accélère le vieillissement de 3-5 ans, (4) sur ardoise, peut désolidariser les ardoises. Un nettoyage professionnel utilise pression ADAPTÉE : 80-100 bars tuile canal, 60-80 bars ardoise, <50 bars zinc.",
          },
          {
            question:
              "Quel est le meilleur moment pour nettoyer sa toiture ?",
            answer:
              "Idéalement au printemps (mars-mai) ou fin d'été (septembre-octobre), hors période de gel ou de fortes pluies. À ces saisons : température idéale pour le séchage, pas de gel qui compromet la pression, pas de canicule qui évapore les produits complémentaires. Éviter juillet-août (chaleur) et décembre-février (risque gel).",
          },
          {
            question:
              "À quelle fréquence nettoyer sa toiture à Bordeaux ?",
            answer:
              "Recommandations pour le climat girondin : contrôle visuel tous les 2 ans, nettoyage tous les 4-5 ans sans mousses visibles, nettoyage + démoussage tous les 4-5 ans avec mousses. Versants nord et zones ombragées prioritaires. Toitures sous couvert dense (Caudéran, Bourg-Madame, coteaux Cenon, Gradignan boisé) : rythme plus soutenu, tous les 3-4 ans.",
          },
          {
            question:
              "Comment protégez-vous mon jardin et mes voisins ?",
            answer:
              "Bâchage systématique des massifs, protection des descentes d'eau pluviale qui vont au récupérateur ou au potager, redirection des ruissellements pour ne pas polluer la voirie. Voisins informés en amont. Nettoyage des évacuations sensibles en fin d'intervention pour éviter que les résidus obstruent le réseau pluvial.",
          },
          {
            question:
              "Peut-on nettoyer sans produit chimique ?",
            answer:
              "Oui pour un nettoyage simple (dépôts superficiels, pollution, algues fines) : eau seule à pression adaptée suffit. Mais si des mousses ou lichens sont installés, il FAUT un traitement chimique rémanent — sans lui, les spores restantes recolonisent la toiture en 2-3 ans. Nous utilisons des produits professionnels biodégradables sous 48-72h autorisés en couverture, jamais de javel diluée ou de produits grand public agressifs.",
          },
          {
            question:
              "Combien de temps dure un chantier de nettoyage ?",
            answer:
              "Pour une toiture de maison individuelle (100-150 m²) : nettoyage seul 1 journée, combo nettoyage + démoussage 1,5-2 jours (avec temps de séchage entre les deux passes), combo complet nettoyage + démoussage + hydrofuge 2-3 jours. Planning intègre les créneaux météo (pas de pluie 12-24h suivant l'hydrofuge, températures >5°C).",
          },
          {
            question:
              "Repérez-vous les tuiles cassées pendant le nettoyage ?",
            answer:
              "Oui, systématiquement. Chaque nettoyage inclut une inspection complète de la toiture : repérage des tuiles fissurées, joints de faîtage à reprendre, points faibles zinguerie, éléments à surveiller dans les 2-5 ans. Rapport écrit remis en fin de chantier avec photos. Si des réparations sont détectées, nous vous chiffrons séparément — vous décidez si vous les faites en même temps ou plus tard.",
          },
          {
            question:
              "Quelle garantie sur le nettoyage ?",
            answer:
              "Décennale (10 ans) sur l'ensemble de la prestation, obligation légale — attestation active jointe à chaque devis. Photos avant/après remises en fin de chantier. Si dégradation constatée liée à notre intervention (rare mais couvert), nous prenons en charge la reprise à nos frais pendant 10 ans.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
