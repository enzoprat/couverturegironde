import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('demoussage-toiture-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'demoussage',
        slug: PAGE.slug,
        h1: (
          <>
            Démoussage de toiture à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> et en
            Gironde
          </>
        ),
        heroSubtitle:
          "Mousses, lichens, traînées noires sur votre toiture ? Nous éliminons les végétaux installés, brossons les zones critiques et appliquons un traitement préventif. Devis gratuit sous 24h, garantie décennale, intervention sur tout Bordeaux Métropole.",
        shortTitle: 'Démoussage toiture',
        presentation: (
          <>
            <p>
              Le climat océanique de la Gironde, humidité quasi-permanente,
              hivers doux, alternance pluies-soleil, crée des conditions
              idéales pour la prolifération des mousses, lichens et algues sur
              les toitures bordelaises. À Bordeaux comme à Mérignac, Pessac ou
              Talence, une toiture non entretenue se voit envahir en quelques
              années, surtout sur les versants nord ou sous couvert arboré.
            </p>
            <p>
              <strong>Une toiture colonisée par les mousses n'est pas un
              problème esthétique : c'est un problème structurel.</strong>{' '}
              Les végétaux retiennent l'eau, accélèrent le vieillissement des
              tuiles, infiltrent les joints et favorisent les micro-fissures
              que le gel transforme en cassures. Une démousse régulière n'est
              pas un luxe, c'est l'entretien de base d'une toiture en bon
              état.
            </p>
            <p>
              Couverture Gironde réalise depuis 2005 le démoussage complet de
              toutes les toitures bordelaises : tuiles canal traditionnelles,
              tuiles mécaniques, ardoises, fibrociment. Notre approche combine{' '}
              <strong>brossage manuel des zones critiques</strong>, application
              d'un{' '}
              <strong>produit anti-mousse rémanent adapté au matériau</strong>{' '}
              et finition par traitement hydrofuge à la demande. Pas de
              sous-traitance, pas d'agression de la couverture, pas de
              dépôt anti-écologique laissé à la pluie.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Diagnostic avant intervention',
            description:
              "Nous montons sur votre toiture avant de chiffrer. Vérification de l'état des tuiles, des points faibles, des éléments à remplacer. Le démoussage ne sert à rien si la toiture présente des défauts à corriger en amont.",
          },
          {
            title: 'Produit professionnel adapté',
            description:
              "Nous utilisons des produits anti-mousses professionnels rémanents (action longue durée). Pas de javel diluée, pas de produit grand public qui ronge la couverture. Choix du produit selon le matériau (tuile, ardoise, zinc).",
          },
          {
            title: 'Brossage manuel des zones critiques',
            description:
              "Sur les versants nord ou les zones très colonisées, le seul produit chimique ne suffit pas. Nous brossons manuellement à la brosse souple pour retirer les amas avant traitement.",
          },
          {
            title: 'Protection du voisinage',
            description:
              "Bâchage des massifs, gestion des écoulements pour ne pas polluer le jardin ni la voirie. Travail propre, voisins informés. Nettoyage des descentes d'eau pluviale en fin d'intervention.",
          },
          {
            title: 'Garantie décennale',
            description:
              "Notre assurance décennale couvre l'ensemble de nos travaux. Si une intervention provoque une infiltration ou un défaut, vous êtes intégralement protégé pendant 10 ans.",
          },
          {
            title: 'Devis transparent ligne par ligne',
            description:
              "Surface précise, produits utilisés, nombre de passages, garantie : tout est détaillé. Aucun supplément surprise. Acompte limité à 30 % maximum.",
          },
        ],
        risques: [
          {
            title: "Infiltrations et fuites d'eau",
            description:
              "Les mousses retiennent l'humidité contre les tuiles. À terme, elles s'infiltrent dans les joints et les sous-couvertures, provoquant fuites en combles, dégâts d'isolation et auréoles au plafond.",
          },
          {
            title: 'Cassure des tuiles par gel-dégel',
            description:
              "L'eau retenue par les mousses gèle l'hiver. Les micro-cycles gel-dégel fissurent la céramique. Une toiture mal entretenue peut perdre 20 % de ses tuiles en 10 ans.",
          },
          {
            title: 'Bouchage des gouttières et descentes',
            description:
              "Les débris végétaux finissent dans les chéneaux et les descentes. Conséquence : débordements, coulures sur les façades, infiltrations en pied de mur, dégâts sur l'enduit.",
          },
          {
            title: "Vieillissement prématuré de la couverture",
            description:
              "Une toiture sale et envahie peut perdre 30 à 50 % de sa durée de vie théorique. Une réfection complète coûte 80-150 €/m² ; un entretien régulier coûte 12-25 €/m² tous les 3-5 ans.",
          },
        ],
        methode: [
          {
            title: 'Diagnostic gratuit sur site',
            description:
              "Visite de votre toiture par un de nos artisans. Inspection complète, photos des points critiques, identification des éléments à traiter ou remplacer.",
          },
          {
            title: 'Devis détaillé sous 24h',
            description:
              "Vous recevez un devis chiffré ligne par ligne : surface, accessibilité, produits, garanties. Choix possible entre démoussage seul ou démoussage + hydrofuge.",
          },
          {
            title: 'Installation et sécurité',
            description:
              "Mise en place de l'équipement (échafaudage si nécessaire, lignes de vie), bâchage des massifs et des évacuations. Sécurisation du chantier et information des voisins.",
          },
          {
            title: 'Brossage manuel ciblé',
            description:
              "Brossage à la brosse souple des zones les plus colonisées (versants nord, autour des cheminées, raccords zinc) pour retirer les amas avant traitement chimique.",
          },
          {
            title: 'Application du démoussant',
            description:
              "Pulvérisation basse pression du produit anti-mousse rémanent sur l'ensemble de la couverture. Couverture homogène, respect des dosages, attention aux raccords.",
          },
          {
            title: 'Rinçage et nettoyage de chantier',
            description:
              "Rinçage des descentes d'eau pluviale (les résidus ne doivent pas obstruer le réseau), retrait de l'équipement, nettoyage complet des abords. Photos avant/après remises sur demande.",
          },
        ],
      }}
    />
  );
}
