import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/content/ServicePageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('installation-velux-bordeaux');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <ServicePageLayout
      content={{
        service: 'velux',
        slug: PAGE.slug,
        h1: (
          <>
            Installation Velux à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> —
            pose, remplacement, étanchéité
          </>
        ),
        heroSubtitle:
          "Pose et remplacement de fenêtres de toit Velux par artisan couvreur depuis 2005. Étanchéité garantie, conseil sur le modèle adapté, dimensionnement et orientation optimisés. Devis gratuit sous 24h.",
        shortTitle: 'Installation Velux',
        presentation: (
          <>
            <p>
              L'installation d'une fenêtre de toit Velux est une opération
              technique qui combine{' '}
              <strong>menuiserie, couverture et étanchéité</strong>. Une
              pose mal réalisée, étanchéité défaillante, raccord
              approximatif, dimensionnement inadapté, se traduit
              inévitablement par des infiltrations dans les années qui
              suivent. C'est pourquoi cette prestation doit être confiée à
              un couvreur expérimenté, pas à un simple poseur généraliste.
            </p>
            <p>
              Nous installons des Velux sur l'ensemble des configurations
              de toiture rencontrées à Bordeaux Métropole :{' '}
              <strong>tuile canal traditionnelle</strong>,{' '}
              <strong>tuile mécanique</strong>, <strong>ardoise</strong>,
              et <strong>zinc</strong>. Chaque matériau a son
              encastrement spécifique, son raccord à la couverture
              existante et son traitement d'étanchéité. La marque Velux est
              notre référence, kit d'étanchéité éprouvé, finitions de
              qualité, SAV constructeur efficace, mais nous travaillons
              aussi avec Roto et Fakro selon les contraintes du projet.
            </p>
            <p>
              Avant la pose, nous{' '}
              <strong>vous conseillons sur le modèle adapté</strong> à
              votre besoin. Velux décline plusieurs gammes : Standard
              (rotation classique), Tout Confort (rotation +
              ventilation), Confort Solaire (motorisation solaire sans fil
              électrique), Confort Électrique (motorisation filaire), et
              Cabrio (extension balcon spectaculaire). Le choix dépend de
              l'usage (chambre, salle de bain, cuisine, sous-pente), de
              l'orientation et du budget. Une mauvaise sélection se paye
              en confort au quotidien.
            </p>
            <p>
              Le <strong>dimensionnement et l'orientation</strong> sont
              eux aussi déterminants. Une fenêtre trop petite éclaire mal
              la pièce ; trop grande, elle crée des contraintes thermiques
              et d'entretien. L'orientation détermine l'apport
              énergétique : sud = chaleur l'été (besoin store extérieur),
              nord = lumière douce sans surchauffe. À Bordeaux, nous
              conseillons généralement{' '}
              <strong>store extérieur pare-soleil obligatoire</strong> sur
              les expositions sud-ouest pour éviter la surchauffe estivale.
            </p>
            <p>
              Côté <strong>réglementation</strong>, l'installation d'un
              Velux en construction existante peut nécessiter une{' '}
              <strong>déclaration préalable de travaux</strong> en mairie
              (modification de l'aspect extérieur). Dans les secteurs
              sauvegardés ou abords de monuments classés (centre Bordeaux,
              quartier Saint-Michel, etc.), l'<strong>avis de l'ABF</strong>{' '}
              est requis. Nous prenons en charge l'intégralité des
              démarches administratives, vous n'avez qu'à signer.
            </p>
          </>
        ),
        pourquoiRaisons: [
          {
            title: 'Couvreur, pas menuisier généraliste',
            description:
              "L'étanchéité du raccord à la couverture demande un savoir-faire de couvreur. C'est notre métier de base depuis 2005, pas un complément.",
          },
          {
            title: 'Kits Velux d\u2019origine systématiques',
            description:
              "Nous utilisons les kits d'étanchéité Velux d'origine adaptés au matériau de votre toiture. Garantie d'étanchéité du constructeur préservée.",
          },
          {
            title: 'Conseil personnalisé sur le modèle',
            description:
              "Standard, Tout Confort, Solaire, Électrique, Cabrio : nous vous orientons selon l'usage de la pièce, l'orientation et votre budget réel.",
          },
          {
            title: 'Démarches administratives prises en charge',
            description:
              "Déclaration préalable, ABF en secteur sauvegardé : nous nous occupons de tout. Vous évitez les écueils administratifs.",
          },
          {
            title: 'Finitions intérieures soignées',
            description:
              "Habillage des tableaux intérieurs, raccords plâtrerie, raccord BA13 si nécessaire : finition d'ensemble, pas seulement la pose technique.",
          },
          {
            title: 'Garantie décennale + 10 ans Velux',
            description:
              "Couverture décennale de la pose + garantie constructeur 10 ans sur la fenêtre. Vous êtes intégralement protégé.",
          },
        ],
        risques: [
          {
            title: 'Infiltration par raccord mal exécuté',
            description:
              "Une étanchéité approximative se traduit par des infiltrations 2-3 ans après la pose. Les dégâts (plafond, isolation) peuvent dépasser le coût initial du Velux.",
          },
          {
            title: 'Mauvais dimensionnement = pièce mal éclairée',
            description:
              "Une fenêtre sous-dimensionnée laisse la pièce sombre. Surdimensionnée, elle crée des problèmes thermiques. Le calcul doit être professionnel.",
          },
          {
            title: 'Surchauffe estivale sans store extérieur',
            description:
              "À Bordeaux, une fenêtre exposée sud-ouest sans store extérieur transforme la pièce en serre l'été. Le store doit être prévu dès la pose.",
          },
          {
            title: 'Refus d\u2019autorisation en secteur ABF',
            description:
              "Une pose sans déclaration en secteur protégé peut être ordonnée d'être démontée. Toujours vérifier les contraintes urbanistiques en amont.",
          },
        ],
        methode: [
          {
            title: 'Visite et conseil',
            description:
              "Étude de votre projet sur place : pièce concernée, orientation, usage, contraintes architecturales. Conseil sur modèle et dimensions.",
          },
          {
            title: 'Démarches administratives',
            description:
              "Dépôt de la déclaration préalable en mairie si nécessaire, demande d'avis ABF en secteur protégé. Délai 1-3 mois selon configuration.",
          },
          {
            title: 'Devis et commande Velux',
            description:
              "Devis chiffré (Velux + kit + pose + finitions), commande de la fenêtre après votre accord. Délai de livraison 2-3 semaines.",
          },
          {
            title: 'Préparation et découpe',
            description:
              "Repérage précis, découpe de l'ouverture, modification des chevrons si nécessaire, bâchage temporaire pour protéger l'intérieur.",
          },
          {
            title: 'Pose et étanchéité',
            description:
              "Mise en place du cadre, scellement et étanchéité avec kit Velux d'origine adapté au matériau. Test à l'eau immédiat pour valider.",
          },
          {
            title: 'Finitions intérieures',
            description:
              "Habillage des tableaux, raccord plâtre/BA13, peinture si demandée. Vérification finale du fonctionnement (rotation, store, motorisation).",
          },
        ],
        tarifs: {
          intro:
            "Fourchettes de prix indicatives pour la pose et le remplacement de fenêtres de toit à Bordeaux et en Gironde en 2026. Le tarif final dépend du modèle Velux choisi (Standard, Tout Confort, Solaire, Électrique), des dimensions, du matériau de couverture et des finitions intérieures.",
          lines: [
            {
              service: 'Pose Velux Standard (rotation classique)',
              range: '1 200 – 1 600 €',
              note: 'Fenêtre + kit étanchéité + pose + finitions',
            },
            {
              service: 'Pose Velux Tout Confort (rotation + ventilation)',
              range: '1 400 – 1 900 €',
              note: 'Modèle le plus vendu en chambre',
            },
            {
              service: 'Pose Velux Confort Solaire (motorisation)',
              range: '1 900 – 2 600 €',
              note: 'Sans câblage électrique, idéal salle de bain',
            },
            {
              service: 'Pose Velux Confort Électrique',
              range: '1 800 – 2 400 €',
              note: 'Câblage électrique nécessaire à proximité',
            },
            {
              service: 'Pose Velux Cabrio (balcon extérieur)',
              range: '4 200 – 6 800 €',
              note: 'Spectaculaire, requiert vérification charpente',
            },
            {
              service: 'Remplacement Velux existant',
              range: '850 – 1 500 €',
              note: 'Conservation cadre, échange fenêtre seule',
            },
            {
              service: 'Kit étanchéité Velux d\u2019origine',
              range: '180 – 320 €',
              note: 'EDW (tuile) / EDN (ardoise) / EDM (plat)',
            },
            {
              service: 'Store extérieur pare-soleil (recommandé sud-ouest)',
              range: '280 – 520 €',
              note: 'Indispensable expositions sud à Bordeaux',
            },
            {
              service: 'Volet roulant solaire Velux',
              range: '650 – 980 €',
              note: 'Black-out + occultation + isolation acoustique',
            },
            {
              service: 'Habillage intérieur tableau + BA13',
              range: '180 – 380 €',
              note: 'Selon état plafond et taille de l\u2019ouverture',
            },
            {
              service: 'Réparation étanchéité Velux (infiltration)',
              range: '320 – 750 €',
              note: 'Selon origine du défaut, devis sur diagnostic',
            },
            {
              service: 'Pose Velux en construction neuve (lot couverture)',
              range: '950 – 1 400 €',
              note: 'Coordination charpentier, tarif optimisé',
            },
          ],
          disclaimer:
            "Tarifs TTC, fenêtre Velux d\u2019origine incluse, pose + kit étanchéité + finitions standard. Échafaudage et démarches administratives (DP, ABF) sur devis. Garantie décennale incluse + garantie constructeur 10 ans Velux.",
        },
        quartiersBordeaux: {
          intro:
            "Nous installons des Velux dans tous les quartiers de Bordeaux Métropole. Chaque secteur a ses contraintes urbanistiques propres (secteur sauvegardé, périmètre ABF, PLU). Nous prenons en charge l'intégralité des démarches administratives.",
          items: [
            {
              nom: 'Bordeaux Centre',
              description:
                "Secteur sauvegardé UNESCO : avis ABF systématique, contraintes fortes sur l'aspect extérieur. Modèles à intégration discrète préconisés.",
              href: '/couvreur-bordeaux-centre',
            },
            {
              nom: 'Chartrons',
              description:
                "Maisons d'armateurs et lofts réhabilités, beaucoup de combles aménagés. Velux Cabrio (balcon) parfois autorisés selon configuration.",
              href: '/couvreur-bordeaux-chartrons',
            },
            {
              nom: 'Caudéran',
              description:
                "Pavillonnaire majoritaire, demandes fréquentes Velux Tout Confort et Solaire en chambre d'enfant ou bureau sous combles.",
              href: '/couvreur-bordeaux-cauderan',
            },
            {
              nom: 'Saint-Augustin',
              description:
                "Échoppes bordelaises avec combles habitables, Velux Standard ou Tout Confort dimensionnés selon la pente.",
              href: '/couvreur-bordeaux-saint-augustin',
            },
            {
              nom: 'Mérignac',
              description:
                "Notre commune. Pavillons années 70-90 ouverts aux installations Velux confort et solaire pour aménagement combles.",
              href: '/couvreur-merignac',
            },
            {
              nom: 'Pessac',
              description:
                "Maisons et copropriétés, Velux Solaire prisé en salle de bain (sans câblage électrique requis).",
              href: '/couvreur-pessac',
            },
            {
              nom: 'Talence',
              description:
                "Maisons bourgeoises avec ardoise : Velux à intégration ardoise (kit EDN d\u2019origine) recommandés pour respecter l\u2019harmonie.",
              href: '/couvreur-talence',
            },
            {
              nom: 'Le Bouscat',
              description:
                "Quartier patrimonial cossu : modèles Velux Standard discrets préférés, intégration soignée pour préserver la valeur du bâti.",
              href: '/couvreur-bouscat',
            },
            {
              nom: 'Bègles, Villenave, Gradignan',
              description:
                "Pavillonnaire étendu : modèles confort solaire en chambre, store pare-soleil obligatoire sur expositions sud-ouest.",
            },
          ],
        },
      }}
    />
  );
}
