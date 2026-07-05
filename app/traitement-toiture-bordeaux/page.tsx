import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('traitement-toiture-bordeaux');

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
        service: 'traitement',
        slug: PAGE.slug,
        h1: (
          <>
            Traitement toiture{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            nettoyage + démoussage + hydrofuge : lequel choisir ?
          </>
        ),
        heroSubtitle:
          "Nettoyage, démoussage, hydrofuge, anti-lichens : 4 traitements distincts, chacun pour un besoin précis. Nous vous orientons honnêtement vers la SEULE solution adaptée à l'état, au matériau et à l'exposition — jamais l'upsell. Devis gratuit sous 24h.",
        shortTitle: 'Traitement toiture',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-zingueur, fondateur — atelier Mérignac',
          bio: "Depuis 2005, je fais du traitement de toiture sur Bordeaux Métropole. Ma priorité : vous dire HONNÊTEMENT si vous avez besoin d'un nettoyage seul (12-20 €/m²), d'un démoussage (12-18 €/m²), d'un combo démoussage + hydrofuge (18-27 €/m²), ou d'un traitement complet (25-38 €/m²). Nous refusons régulièrement des chantiers quand le traitement demandé serait prématuré — la crédibilité se construit sur ce qu'on NE vend pas.",
          badges: [
            'Depuis 2005',
            'Décennale active',
            '5/5 sur 52 avis Google',
            'Diagnostic honnête',
          ],
        },
        presentation: (
          <>
            <p>
              L'expression <strong>« traitement de toiture »</strong> recouvre
              en réalité <strong>quatre prestations distinctes</strong> :
              nettoyage haute pression, démoussage, application d'un traitement
              hydrofuge, et parfois traitement anti-lichens curatif. Chacune
              répond à un besoin précis, avec sa technique, son produit et son
              tarif. Le rôle d'un couvreur professionnel n'est pas de vous
              vendre la prestation la plus chère, mais d'orienter vers la
              solution la mieux adaptée à l'état réel de votre couverture, au
              matériau (tuile canal, mécanique, ardoise, zinc) et à son
              exposition (versant nord, couvert végétal, vent dominant).
            </p>
            <p>
              À Bordeaux, le <strong>climat océanique girondin</strong>{' '}
              (930 mm de pluie par an, hivers doux, couvert végétal dense sur
              une partie de la métropole) accélère l'encrassement des toitures
              de <strong>30 à 50 % par rapport à la moyenne nationale</strong>.
              Les mousses, algues et lichens prolifèrent en particulier sur les
              versants nord et sur les toitures ombragées par une végétation
              dense (Caudéran, Gradignan, coteaux Cenon, bord de Garonne). Sans
              traitement régulier, ce couvert biologique retient l'humidité,
              fissure la tuile par cycles gel-dégel, et conduit progressivement
              à des infiltrations.
            </p>
            <p>
              L'approche pragmatique se résume à un principe :{' '}
              <strong>anticiper coûte 10 fois moins que réparer</strong>. Un
              traitement préventif complet représente 25 à 38 € par m². Une
              réfection complète tardive, provoquée par une toiture négligée
              pendant 15-20 ans, coûte entre 85 et 220 € par m² selon le
              matériau. La différence n'est pas marginale, c'est un facteur 6
              à 10 sur le coût final du bâti. Les prestations d'entretien de
              toiture ouvrent en outre droit au{' '}
              <strong>taux réduit de TVA à 10 %</strong> pour les logements
              achevés depuis plus de 2 ans.
            </p>
            <p>
              Chez Couverture Gironde, nous <strong>ne pratiquons pas la
              vente sous pression</strong>. Notre diagnostic se fait sur site,
              gratuitement, avec photos avant tout devis. Nous vous indiquons
              clairement <strong>si votre toiture nécessite un traitement,
              lequel exactement, et à quelle fréquence le renouveler</strong>{' '}
              (2 ans, 5 ans, 10 ans selon l'exposition). Nous refusons
              régulièrement des chantiers quand le traitement demandé serait
              inutile ou prématuré : la crédibilité d'un artisan se construit
              aussi sur ce qu'il ne vend pas. Cette éthique se traduit dans
              notre note <strong>5/5 sur 52 avis Google publics</strong>.
            </p>
            <p>
              Notre atelier est situé au <strong>65 rue de Malbos à
              Mérignac</strong>, ce qui nous place à moins de 20 minutes de
              tous les quartiers de Bordeaux Métropole. Nous intervenons en
              direct, sans sous-traitance : l'artisan qui vous diagnostique
              est celui qui traitera votre toiture et qui restera votre
              interlocuteur pour le SAV. Chaque intervention est couverte par
              notre <strong>garantie décennale</strong>, avec en complément la
              garantie constructeur 10 ans sur les traitements hydrofuges
              professionnels que nous appliquons.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: '4 traitements maîtrisés en interne',
            description:
              "Nettoyage haute pression maîtrisé, démoussage rémanent, hydrofuge 10 ans, anti-lichens curatif : nous exécutons les quatre en direct, avec les produits professionnels adaptés à chaque matériau.",
          },
          {
            title: 'Diagnostic pédagogique',
            description:
              "Nous vous expliquons ce que votre toiture demande vraiment, pas ce qui rapporte le plus. Vous choisissez le niveau de traitement en connaissance de cause, sans pression commerciale.",
          },
          {
            title: 'Produits pro rémanents',
            description:
              "Nous utilisons uniquement des produits de traitement professionnels rémanents (efficacité 3-5 ans sur le démoussage, 10 ans sur l'hydrofuge). Fiches techniques et attestations fournies.",
          },
          {
            title: 'Pression et buse par matériau',
            description:
              "Tuile canal : 80-100 bars. Ardoise : 60-80 bars. Zinc : <50 bars. Chaque matériau a sa technique, aucune pression standard. C'est ce qui évite les dégâts observés chez la concurrence.",
          },
          {
            title: 'Protection jardin et voisinage',
            description:
              "Bâchage systématique des évacuations sensibles, redirection des ruissellements, information des voisins avant intervention. Chantier propre, aucune pollution collatérale.",
          },
          {
            title: 'Rapport photo et conseils post-chantier',
            description:
              "Photos avant/après, rapport écrit indiquant l'état de la couverture, les points à surveiller et la date recommandée du prochain contrôle. Vous savez exactement où vous en êtes.",
          },
        ],
        risques: [
          {
            title: 'Traitement inadapté = dégât sur la tuile',
            description:
              "Pression standard sur tuile canal ancienne, buse trop dure sur ardoise, produit corrosif sur zinc : autant de causes de dégradations post-intervention qui coûtent plus cher à réparer que le traitement initial.",
          },
          {
            title: 'Démoussage sans hydrofuge = retour rapide',
            description:
              "Sur toiture poreuse exposée, un simple démoussage voit les mousses revenir en 2-3 ans. L'hydrofuge appliqué en complément retarde ce retour de 8-10 ans. C'est le rapport coût/durabilité optimal.",
          },
          {
            title: 'Toitures non traitées = réfection tardive',
            description:
              "Une toiture négligée pendant 15-20 ans à Bordeaux se retrouve à devoir être refaite intégralement : 85-220 €/m² au lieu de 25-38 €/m² pour un traitement complet. Facteur 6 à 10.",
          },
          {
            title: 'Vendeurs porte-à-porte agressifs',
            description:
              "Attention aux démarcheurs qui vous proposent un « traitement urgent » avec paiement immédiat. Les tarifs sont souvent 2 à 3 fois supérieurs au marché, et le SAV inexistant en cas de problème.",
          },
        ],
        methode: [
          {
            title: 'Contact et pré-diagnostic',
            description:
              "Décrivez votre situation (état visible, dernier traitement, exposition). Nous évaluons le type de traitement probable et planifions une visite diagnostic gratuite.",
          },
          {
            title: 'Diagnostic sur site',
            description:
              "Inspection complète de la couverture, identification du matériau, mesure du taux d'encrassement, repérage des points faibles. Photos avant devis.",
          },
          {
            title: 'Devis pédagogique',
            description:
              "Nous vous présentons les options adaptées à votre situation (nettoyage seul, démoussage, combo hydrofuge). Vous choisissez le niveau en connaissance de cause.",
          },
          {
            title: 'Préparation et sécurisation',
            description:
              "Bâchage évacuations, protection descentes vers jardin, information voisinage, mise en sécurité de la zone. Rien n'est laissé au hasard.",
          },
          {
            title: 'Exécution du traitement',
            description:
              "Application progressive versant par versant, pression et buse adaptées au matériau, produit rémanent professionnel. Contrôle qualité intermédiaire.",
          },
          {
            title: 'Contrôle, rapport et garantie',
            description:
              "Vérification finale, photos après, rapport écrit avec conseils. Attestation décennale + fiche technique produit + calendrier du prochain contrôle recommandé.",
          },
        ],
        tarifs: {
          intro:
            "Fourchettes de prix constatées sur Bordeaux Métropole en 2026 pour chaque type de traitement, à titre indicatif. Le combo complet (nettoyage + démoussage + hydrofuge) reste le meilleur rapport coût/durabilité sur une toiture négligée depuis plus de 5 ans.",
          lines: [
            {
              service: 'Nettoyage haute pression seul',
              range: '12 – 20 €/m²',
              note: 'Toiture peu encrassée, pas de mousses visibles',
            },
            {
              service: 'Démoussage seul (avec brossage)',
              range: '12 – 18 €/m²',
              note: 'Toiture avec mousses ponctuelles',
            },
            {
              service: 'Combo démoussage + hydrofuge 10 ans',
              range: '18 – 27 €/m²',
              note: 'Meilleur rapport coût/durabilité',
            },
            {
              service: 'Combo complet nettoyage + démoussage + hydrofuge',
              range: '25 – 38 €/m²',
              note: 'Toiture encrassée depuis plus de 5 ans',
            },
            {
              service: 'Traitement anti-lichens curatif ciblé',
              range: '15 – 22 €/m²',
              note: 'Lichens tenaces sur ardoise ou tuile émaillée',
            },
            {
              service: 'Hydrofuge coloré (option teinte)',
              range: '+3 – 6 €/m²',
              note: 'Redonne aspect neuf, teinte au choix',
            },
            {
              service: 'Nettoyage gouttières + descentes',
              range: '8 – 15 €/ml',
              note: 'Souvent inclus dans traitement complet',
            },
            {
              service: 'Forfait déplacement (surface <30 m²)',
              range: '280 – 420 €',
              note: 'Intervention courte, minimum facturable',
            },
            {
              service: 'Diagnostic + rapport photo (sans chantier)',
              range: '0 – 180 €',
              note: 'Gratuit si chantier signé, sinon forfait',
            },
          ],
          disclaimer:
            "Tarifs TTC, posé, sécurité incluse. TVA 10 % applicable aux logements achevés depuis plus de 2 ans. Échafaudage spécifique, accès difficile ou hauteur >12 m sur devis. Le combo complet réduit de 30-50 % le coût total vs 3 prestations séparées.",
        },
        quartiersBordeaux: {
          intro:
            "Chaque quartier de Bordeaux Métropole présente un profil d'encrassement différent selon son bâti, son couvert végétal et son exposition. Nos recommandations de traitement varient en conséquence, jamais de solution générique.",
          items: [
            {
              nom: 'Bordeaux Centre',
              description:
                "Ardoises et tuiles canal patrimoniales : pollution urbaine + algues. Nettoyage doux + démoussage rémanent tous les 4-5 ans recommandé.",
              href: '/couvreur-bordeaux-centre',
            },
            {
              nom: 'Chartrons',
              description:
                "Zinc patiné et ardoises historiques : pression strictement maîtrisée. Anti-lichens ciblé plutôt que traitement massif.",
              href: '/couvreur-bordeaux-chartrons',
            },
            {
              nom: 'Caudéran',
              description:
                "Quartier arboré : mousses abondantes sur versants nord. Combo complet nettoyage + démoussage + hydrofuge fortement recommandé.",
              href: '/couvreur-bordeaux-cauderan',
            },
            {
              nom: 'Saint-Augustin',
              description:
                "Échoppes tuile canal : démoussage + hydrofuge en combo tous les 8-10 ans, préserve l'esthétique traditionnelle du bâti bordelais.",
              href: '/couvreur-bordeaux-saint-augustin',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune : intervention sans surcoût déplacement, produits pro appliqués sous 24-48h après signature.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Bourg-Madame et Cap-de-Bos très boisés : mousses abondantes, hydrofuge recommandé tous les 8 ans pour maîtriser le retour.",
              href: '/couvreur-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Maisons bourgeoises ardoise + tuile mécanique : traitement adapté au matériau, jamais de pression uniforme.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Cenon (rive droite)',
              description:
                "Coteaux exposés vents Garonne + habitat contrasté : traitement différencié coteaux ancien / plateau Palmer récent.",
              href: '/couvreur-cenon',
            },
            {
              nom: 'Le Bouscat, Gradignan, Villenave',
              description:
                "Quartiers pavillonnaires arborés : mousses systématiques versants nord. Combo démoussage + hydrofuge tous les 8-10 ans.",
            },
          ],
        },

        // ————————————————————————————————————————————————
        // FAQ TRAITEMENT-FOCUSED (arbre de décision)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "Quel traitement me faut-il vraiment : nettoyage, démoussage ou hydrofuge ?",
            answer:
              "Arbre de décision simple : (1) Toiture juste SALE (pollution, algues, pas de mousses visibles) → NETTOYAGE haute pression seul 12-20 €/m². (2) Toiture avec MOUSSES ponctuelles ou étendues → DÉMOUSSAGE chimique + brossage 12-18 €/m². (3) Toiture démoussée + versant nord/couvert arboré → COMBO démoussage + HYDROFUGE 18-27 €/m² pour tenir 8-10 ans. (4) Toiture NÉGLIGÉE depuis 5+ ans avec tout cumulé → COMBO COMPLET nettoyage + démoussage + hydrofuge 25-38 €/m². Diagnostic gratuit chez nous pour le choix précis.",
          },
          {
            question:
              "Combien coûte un traitement de toiture complet à Bordeaux en 2026 ?",
            answer:
              "Fourchettes 2026 : nettoyage seul 12-20 €/m², démoussage seul 12-18 €/m², combo démoussage + hydrofuge 18-27 €/m² (le plus recommandé), combo complet 25-38 €/m². Pour une maison type 120 m² de toiture : combo démoussage + hydrofuge 2 160-3 240 € TTC, combo complet 3 000-4 560 €. TVA 10 % pour logements >2 ans. Le combo hydrofuge évite 85-220 €/m² de réfection tardive — ROI imbattable.",
          },
          {
            question:
              "Refusez-vous vraiment des chantiers de traitement ?",
            answer:
              "Oui, régulièrement. Nous refusons : (1) hydrofuge sur ardoise récente <15 ans (peu poreuse, pas d'utilité), (2) démoussage sur toiture <10 ans en excellent état (prématuré, revenir dans 5 ans), (3) traitement sur toiture qui présente des défauts structurels préalables (tuiles cassées à remplacer d'abord, faîtage disloqué à reprendre). Un traitement inutile est de l'argent gaspillé. Cette honnêteté est notre signature depuis 2005.",
          },
          {
            question:
              "Quelle fréquence d'entretien recommander à Bordeaux ?",
            answer:
              "Climat girondin (930 mm/an) : contrôle visuel tous les 2 ans, démoussage tous les 4-5 ans SANS hydrofuge, tous les 8-10 ans AVEC hydrofuge. Zones à couvert dense (Caudéran, Gradignan boisé, Bourg-Madame Pessac, coteaux Cenon) : rythme plus soutenu 3-4 ans sans hydrofuge, 6-8 ans avec. Versants nord et zones ombragées prioritaires. Nous programmons un rappel automatique si vous le souhaitez.",
          },
          {
            question:
              "Karcher grand public vs nettoyage professionnel : la différence ?",
            answer:
              "Un karcher grand public à pleine puissance avec buse standard : (1) provoque des micro-fissures dans la céramique, (2) sable l'engobe protecteur, (3) sur ardoise peut désolidariser les ardoises, (4) accélère le vieillissement de 3-5 ans. Nettoyage professionnel : pression et buse ADAPTÉES au matériau (80-100 bars tuile canal, 60-80 bars ardoise, <50 bars zinc). C'est le SEUL choix compatible avec la longévité de la couverture.",
          },
          {
            question:
              "Le produit anti-mousse est-il dangereux pour mon jardin ?",
            answer:
              "Nous utilisons des produits professionnels rémanents autorisés en couverture, biodégradables sous 48-72h. Nous bâchons systématiquement les évacuations sensibles, protégeons les descentes d'eau pluviale qui vont au récupérateur ou au potager. Aucun cas de dégât sur végétation ou nappe phréatique remonté depuis 20 ans d'exercice.",
          },
          {
            question:
              "L'hydrofuge est-il utile sur ma toiture ?",
            answer:
              "OUI sur toitures POREUSES : tuile canal traditionnelle, tuile mécanique non émaillée, sur versant nord ou sous couvert végétal dense. L'hydrofuge y allonge la durée de vie de 30-50 % et retarde le retour des mousses de 5-10 ans. UTILITÉ LIMITÉE sur ardoise récente (peu poreuse), tuile émaillée moderne (déjà hydrophobe), zinc (imperméable de nature). Nous refusons régulièrement l'hydrofuge sur ces supports.",
          },
          {
            question:
              "Quel est le meilleur moment pour un traitement à Bordeaux ?",
            answer:
              "Idéalement au printemps (mars-mai) ou fin d'été (septembre-octobre), hors période de gel ou de fortes pluies. La mousse est moins active, températures idéales pour l'application des produits + le séchage. Éviter juillet-août (chaleur évaporation) et décembre-février (gel).",
          },
          {
            question:
              "Combien de temps dure un chantier de traitement complet ?",
            answer:
              "Toiture maison 100-150 m² : nettoyage seul 1 jour, démoussage + brossage 1 jour, combo démoussage + hydrofuge 1,5-2 jours (temps séchage entre passes), combo complet nettoyage + démoussage + hydrofuge 2-3 jours. Le planning intègre systématiquement les créneaux météo (pas de pluie prévue 12-24h suivant l'hydrofuge, températures >5°C).",
          },
          {
            question:
              "Quelles garanties fournissez-vous ?",
            answer:
              "Décennale (10 ans) sur l'ensemble de la prestation, obligation légale — attestation active jointe à chaque devis. Garantie constructeur 10 ans sur l'hydrofuge professionnel appliqué. Garantie 3-5 ans sur l'efficacité anti-mousse selon exposition. Attestations remises fin de chantier + fiche technique produits + photos avant/après.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
