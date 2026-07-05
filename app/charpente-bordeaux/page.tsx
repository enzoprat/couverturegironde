import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('charpente-bordeaux');

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
        service: 'charpente',
        slug: PAGE.slug,
        h1: (
          <>
            Charpente{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            rénovation, traitement bois, renforcement structurel
          </>
        ),
        heroSubtitle:
          "Diagnostic et rénovation de charpente bois par artisan couvreur-charpentier depuis 2005. Traitement curatif insectes xylophages (capricorne, vrillette, termite) et champignons (mérule), remplacement de pièces, renforcement structurel. Décennale active.",
        shortTitle: 'Charpente',

        authorBlock: {
          name: 'Liroy Delsuc',
          role: 'Couvreur-charpentier, fondateur — atelier Mérignac',
          bio: "La charpente est le squelette de votre toiture — un défaut structurel invisible depuis le sol peut fragiliser toute la couverture. Depuis 2005, je réalise diagnostic bois, traitement curatif et renforcement structurel sur Bordeaux Métropole. Sur le bâti ancien girondin (échoppes, maisons XIXe), je respecte les techniques traditionnelles (assemblages à tenon-mortaise, essences locales) plutôt que les fermettes modernes non compatibles.",
          badges: [
            'Depuis 2005',
            'Décennale active',
            '5/5 sur 52 avis Google',
            'Diagnostic gratuit',
          ],
        },
        presentation: (
          <>
            <p>
              La charpente est l'<strong>ossature de votre toiture</strong>{' '}
             , invisible mais structurelle. Une charpente saine peut
              durer plus de 100 ans (et le bâti bordelais ancien en
              témoigne). Mais une charpente non entretenue, attaquée par
              les insectes xylophages, les champignons ou affaiblie par
              des charges mal réparties, peut se dégrader en quelques
              années jusqu'à mettre en cause la sécurité du bâti. C'est
              un point qu'on ne peut pas se permettre d'ignorer.
            </p>
            <p>
              Nous intervenons sur l'ensemble des problématiques charpente
              du bâti girondin :{' '}
              <strong>diagnostic structurel</strong>,{' '}
              <strong>traitement curatif</strong> contre les insectes
              xylophages (capricorne, vrillette, lyctus, termites) et les
              champignons lignivores (mérule, coniophore),{' '}
              <strong>remplacement de pièces</strong> dégradées (chevrons,
              pannes, fermes),{' '}
              <strong>renforcement structurel</strong> par moisage ou
              consolidation, et <strong>création de charpente neuve</strong>{' '}
              dans le cadre de constructions ou d'extensions.
            </p>
            <p>
              À Bordeaux Métropole, les charpentes traditionnelles
              dominent encore largement le parc immobilier : charpente en{' '}
              <strong>chêne</strong> dans les bâtiments anciens (XVIIIe et
              XIXe siècles), <strong>pin maritime des Landes</strong> dans
              le bâti plus récent. Ces charpentes ont parfois 100 à 200
              ans d'âge et ont conservé leur solidité d'origine, à
              condition d'avoir été correctement entretenues. Les
              charpentes industrielles à fermettes ne se rencontrent que
              sur les constructions postérieures à 1970.
            </p>
            <p>
              Le <strong>climat océanique girondin</strong>, humidité
              élevée, hivers doux, favorise la prolifération des{' '}
              <strong>insectes xylophages</strong> et des champignons. Le
              <strong> capricorne des maisons</strong> attaque
              spécifiquement le pin et les bois résineux, et représente
              l'attaque la plus fréquente sur le bâti récent bordelais.
              Le <strong>termite souterrain</strong> est lui aussi présent
              en Gironde (département classé à risque par arrêté
              préfectoral) et nécessite une vigilance particulière. La
              <strong> mérule</strong> apparaît dans les combles humides
              non ventilés.
            </p>
            <p>
              Notre <strong>traitement curatif</strong> suit le DTU 41.2 :
              bûchage des bois attaqués, brossage et dépoussiérage,
              injection sous pression d'un produit fongicide-insecticide
              certifié CTB-P+, pulvérisation de surface des bois sains
              voisins, et application d'un produit de finition. Garantie
              10 ans contre les attaques traitées. Avant tout traitement,
              <strong> nous diagnostiquons l'origine des attaques</strong>{' '}
              (souvent une infiltration ou un défaut de ventilation) pour
              que le traitement soit durable.
            </p>
            <p>
              Sur le <strong>renforcement structurel</strong>, nous
              travaillons en {' '}
              <strong>moisage</strong> (renforcement de pannes ou chevrons
              affaiblis par adjonction de pièces parallèles boulonnées) ou
              en remplacement intégral selon l'état. Le dimensionnement
              suit Eurocode 5 (bois) avec calcul des charges climatiques
              spécifiques à la région bordelaise. Toute intervention
              structurelle est couverte par notre décennale.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Diagnostic avant traitement',
            description:
              "Nous identifions l'origine des attaques (infiltration, ventilation, contamination externe). Sans traiter la cause, le traitement curatif n'a qu'un effet temporaire.",
          },
          {
            title: 'Traitement certifié CTB-P+',
            description:
              "Produits fongicide-insecticide certifiés CTB-P+, conformes DTU 41.2. Efficacité prouvée et résidus contrôlés. Garantie 10 ans.",
          },
          {
            title: 'Spécialiste termites en Gironde',
            description:
              "La Gironde est classée département à risque termites. Nous connaissons les protocoles spécifiques de diagnostic et de traitement requis dans cette zone.",
          },
          {
            title: 'Remplacement par bois compatibles',
            description:
              "Pour les remplacements, nous utilisons des bois compatibles avec ceux d'origine (essence, séchage, traitement). Pas d'hétérogénéité destructrice.",
          },
          {
            title: 'Dimensionnement Eurocode 5',
            description:
              "Renforcements et remplacements dimensionnés selon les charges climatiques bordelaises. Sécurité structurelle garantie.",
          },
          {
            title: 'Couverture décennale + garantie 10 ans',
            description:
              "Travaux structurels couverts par notre décennale. Traitement curatif garanti 10 ans contre la réattaque par les organismes traités.",
          },
        ],
        risques: [
          {
            title: 'Effondrement de toiture',
            description:
              "Une charpente fortement attaquée par les xylophages perd sa résistance mécanique. Risque d'effondrement partiel ou total, danger direct pour les occupants.",
          },
          {
            title: 'Propagation termites au bâti voisin',
            description:
              "Les termites souterrains se propagent par galeries. Une attaque non traitée contamine progressivement charpente, planchers, plinthes, voire les voisins mitoyens.",
          },
          {
            title: 'Mérule destructrice et déclarable',
            description:
              "La mérule est un champignon particulièrement destructeur. Sa présence est déclarable obligatoirement au moment d'une vente immobilière. Traitement long et coûteux.",
          },
          {
            title: 'Refus d\u2019assurance habitation',
            description:
              "Sans entretien préventif et diagnostic régulier, l'assurance habitation peut refuser un sinistre lié à un défaut connu et non traité. Documenter les contrôles est essentiel.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic complet de charpente',
            description:
              "Inspection visuelle, sondage à la pointe d'acier des bois suspects, identification des organismes (xylophages, champignons), mesure d'hygrométrie.",
          },
          {
            title: 'Devis détaillé avec photos',
            description:
              "Rapport diagnostic + devis pour traitement curatif et/ou remplacement de pièces. Chiffrage transparent, conditions claires.",
          },
          {
            title: 'Préparation du chantier',
            description:
              "Protection des sols et meubles dans les combles, mise en place d'éclairage et de circulation. Évacuation des occupants si traitement intensif requis.",
          },
          {
            title: 'Bûchage et préparation des bois',
            description:
              "Retrait mécanique des bois fortement attaqués (bûchage), brossage et dépoussiérage des surfaces saines. Préparation pour traitement.",
          },
          {
            title: 'Application du traitement',
            description:
              "Injection sous pression dans les bois épais (pannes, chevrons), pulvérisation de surface. Application en 2-3 passes selon DTU 41.2.",
          },
          {
            title: 'Renforcement ou remplacement',
            description:
              "Si pièces structurelles dégradées : moisage ou remplacement avec bois calibré et traité. Contrôle structurel final, attestation et garantie remises.",
          },
        ],

        // ————————————————————————————————————————————————
        // FAQ CHARPENTE-FOCUSED (10 questions ICP)
        // ————————————————————————————————————————————————
        faqOverride: [
          {
            question:
              "Comment savoir si ma charpente est attaquée par des insectes ?",
            answer:
              "5 signaux visibles : (1) TROUS RONDS de 2-3 mm sur les bois (vrillette), (2) TROUS OVALES de 5-10 mm (capricorne), (3) SCIURE fine (vermoulure) au sol sous poutres, (4) BOIS QUI SONNE CREUX au marteau, (5) GALERIES visibles quand on sonde. La TERMITE fait des galeries internes sans trous externes visibles. Le CAPRICORNE peut détruire 60-80 % du bois interne en 5-8 ans SANS SIGNAL EXTÉRIEUR NET. Un diagnostic professionnel est indispensable au moindre doute.",
          },
          {
            question:
              "Combien coûte un traitement de charpente à Bordeaux ?",
            answer:
              "Fourchettes 2026 : traitement curatif insectes xylophages 25-45 €/m² de surface habitable sous rampants (bûchage + injection + pulvérisation), traitement fongique curatif (mérule, coniophore) 35-55 €/m² (plus complexe, souvent lié à un problème d'humidité à traiter en amont), traitement préventif toutes essences 15-25 €/m². Pour maison type 100 m² sous rampants : traitement curatif complet 2 500-4 500 € TTC. Diagnostic sur site 0-180 € gratuit si chantier signé.",
          },
          {
            question:
              "Quelle différence entre traitement préventif et curatif ?",
            answer:
              "PRÉVENTIF : bois sain non attaqué, application d'un produit fongicide + insecticide pour protéger 10-15 ans. Coût réduit (15-25 €/m²), rapide (1-2 jours). CURATIF : bois DÉJÀ attaqué, protocole DTU 41.2 avec bûchage (retrait bois dégradés), brossage, injection sous pression dans les bois épais (pannes, chevrons), pulvérisation surface, 2-3 passes. Coût 25-45 €/m² et durée 3-7 jours. Si structure fragilisée : renforcement ou remplacement de pièces en supplément.",
          },
          {
            question:
              "Ma charpente ancienne (100 ans+) doit-elle être renforcée ?",
            answer:
              "Pas nécessairement. Une charpente ancienne bien conçue (assemblages tenon-mortaise, essences locales chêne/châtaignier, sections généreuses) peut tenir 200-300 ans SI l'humidité est maîtrisée et si aucun insecte ne l'attaque. Diagnostic sur site indispensable : évaluation des sections, contrôle des assemblages, sondage à la vrille, mesure taux humidité. Nous refusons les projets de renforcement inutile — sur bâti ancien girondin, la préservation de l'existant est presque toujours préférable au remplacement.",
          },
          {
            question:
              "Fermette moderne ou charpente traditionnelle — laquelle ?",
            answer:
              "FERMETTE (industrielle, années 70+) : rapide à installer, moins chère (30-50 €/m² neuf), mais combles NON aménageables et incompatible avec bâti ancien. TRADITIONNELLE (chevrons + pannes + entrait + poinçon) : plus chère (80-150 €/m² neuf), combles aménageables, ESTHÉTIQUE compatible avec bâti girondin ancien. Pour REMPLACEMENT dans une échoppe bordelaise ou maison girondine avant 1950 : traditionnelle obligatoire pour respect patrimoine et compatibilité PLU/ABF.",
          },
          {
            question:
              "Termites à Bordeaux : ma commune est-elle concernée ?",
            answer:
              "OUI, toute la Gironde est classée département À RISQUE TERMITE par arrêté préfectoral. Toute vente immobilière requiert un état parasitaire termites (DPE termites, moins de 6 mois). Sur Bordeaux Métropole, particulièrement les rives de Garonne, les caves et sous-sols humides sont des voies d'entrée principales. Traitement termite curatif = protocole spécifique (barrière chimique périmètre + injection sol) + entreprise agréée. Nous vous orientons vers nos partenaires spécialisés termites si diagnostic positif.",
          },
          {
            question:
              "Ma charpente présente une flèche (déformation) — grave ?",
            answer:
              "PAS FORCÉMENT — une flèche modérée (2-4 cm sur 4-5 m de portée) est souvent normale sur bois anciens et stabilisée depuis des décennies. Alarmant : (1) flèche progressive (mesures dans le temps), (2) craquements audibles, (3) fissures dans les plâtres au niveau des appuis, (4) portes/fenêtres qui coincent à l'étage. Diagnostic structurel indispensable : identification cause (charge, humidité, insectes, tassement), calcul de reprise. Ne pas confondre flèche esthétique et déformation pathologique.",
          },
          {
            question:
              "Combien de temps dure un traitement de charpente ?",
            answer:
              "Diagnostic sur site + rapport photo : 2-3h. Traitement préventif toutes essences maison 100 m² : 1-2 jours. Traitement curatif complet (bûchage + injection + pulvérisation en 2-3 passes) : 3-7 jours selon surface et gravité. Renforcement ou remplacement de pièces structurelles : +1-5 jours selon complexité. Nous respectons le DTU 41.2 (temps de séchage entre passes, produits homologués).",
          },
          {
            question:
              "Quelle garantie fournissez-vous sur le traitement ?",
            answer:
              "Décennale (10 ans) sur l'ensemble de la prestation, obligation légale. Garantie efficacité produits traitants : 10 ans anti-insectes, 5-10 ans anti-fongique selon produit. Si réinfestation observée pendant la garantie, nous reprenons à nos frais après vérification qu'aucun facteur externe nouveau (fuite, infiltration, ventilation modifiée) n'est en cause.",
          },
          {
            question:
              "Faut-il faire un diagnostic charpente régulier ?",
            answer:
              "Recommandations : diagnostic complet tous les 10 ans sur maison ancienne (>50 ans), tous les 15 ans sur maison récente. Contrôle visuel annuel des combles (sciure, humidité, taches suspectes). Après tout événement climatique majeur (tempête, dégât des eaux, incendie voisin), diagnostic ponctuel. Un traitement préventif 15-25 €/m² tous les 15-20 ans est bien plus économique qu'un traitement curatif tardif 25-45 €/m² + remplacement structural.",
          },
        ],
      }}
    />
    {/* Schema Person Liroy — E-E-A-T signal auteur */}
    <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}
