import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('charpente-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'charpente',
        slug: PAGE.slug,
        h1: (
          <>
            Charpente à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            rénovation, traitement, renforcement structurel
          </>
        ),
        heroSubtitle:
          "Diagnostic et rénovation de charpente bois par artisan couvreur-charpentier depuis 2005. Traitement insectes xylophages et champignons, remplacement de pièces, renforcement structurel. Garantie 10 ans.",
        shortTitle: 'Charpente',
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
      }}
    />
  );
}
