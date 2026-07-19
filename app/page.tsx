import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Reassurance } from '@/components/sections/Reassurance';
import { ChiffresCles } from '@/components/sections/ChiffresCles';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { RealisationsCarousel } from '@/components/sections/RealisationsCarousel';
import { FAQ } from '@/components/sections/FAQ';
import { ZonesDesservies } from '@/components/sections/ZonesDesservies';
import { Urgence } from '@/components/sections/Urgence';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { Simulateur } from '@/components/simulateur/Simulateur';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  getFAQSchema,
  getHowToSchema,
  getPersonLiroySchema,
  getReviewSchemas,
} from '@/lib/seo/schemas';
import { FAQ_GENERAL } from '@/data/faq';
import { AVIS } from '@/data/avis';
import { requirePage } from '@/lib/pages';
import { buildMetadata } from '@/lib/seo/metadata';

const HOME = requirePage('');

export const metadata: Metadata = buildMetadata({
  title: HOME.seoTitle,
  description: HOME.seoDescription,
  path: '/',
});

/**
 * Homepage, page la plus stratégique du site.
 *
 * Structure (validée brief utilisateur) :
 *   Hero → Services → Reassurance → Avant/Après* → Avis → Réalisations →
 *   FAQ → Zones → Urgence → CTA Final
 *
 * *NB : la section AVANT/APRÈS sera ajoutée quand au moins 1 vraie photo
 * avant/après sera disponible. Pour l'instant, on bascule sur RealisationsCarousel
 * qui supporte les placeholders gracieusement.
 */
export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        eyebrow="Mérignac · Bordeaux · 5/5 sur 52 avis Google"
        title={
          <>
            <span className="text-[var(--color-terre)]">Couverture Gironde</span>{' '}
            — artisan couvreur à Mérignac depuis 2005
          </>
        }
        subtitle="Liroy Delsuc, couvreur-zingueur, atelier au 65 rue de Malbos à Mérignac. Réparation, rénovation et réfection de toiture, recherche de fuite, zinguerie et urgence 7j/7 sur Bordeaux Métropole et toute la Gironde. Devis gratuit sous 24h, garantie décennale, 5/5 sur 52 avis Google."
        imageSlug="home"
        secondaryCtaLabel="Demander un devis gratuit"
      />

      <ServicesGrid
        eyebrow="Nos services en Gironde"
        title="Couvreur à Bordeaux et en Gironde : réparation, rénovation et réfection de toiture"
        intro="Artisan couvreur-zingueur : réparation de toiture, réfection complète, recherche de fuite, pose et remplacement de tuiles, ardoises et zinc sur l'ensemble de la Gironde. Nous assurons aussi l'entretien (démoussage, nettoyage, hydrofuge) pour prolonger la durée de vie de votre couverture."
        scope="all"
      />

      <Reassurance />

      <Simulateur />

      <ChiffresCles variant="light" />

      <AvisGoogle
        intro="52 avis Google 5/5 vérifiés sur l'ensemble de Bordeaux Métropole. Nos clients témoignent."
      />

      <RealisationsCarousel
        eyebrow="Réalisations"
        title="Nos derniers chantiers en Gironde"
        intro="Démoussage, nettoyage, réparation, zinguerie : voici une sélection de nos interventions récentes sur Bordeaux Métropole."
      />

      <Urgence variant="compact" />

      <FAQ
        items={FAQ_GENERAL}
        intro="Tout ce qu'il faut savoir avant de nous confier votre toiture."
      />

      <ZonesDesservies />

      <CTAFinal />

      {/* SEO E-E-A-T : Person + FAQ + HowTo enrichissent les signaux
          Experience + Expertise sur la homepage. Person signal la marque
          personnelle Liroy sur la page auteur ancre du site. */}
      <JsonLd data={getPersonLiroySchema()} />
      <JsonLd data={getFAQSchema(FAQ_GENERAL)} />
      {/* Review schemas : uniquement si AVIS contient des avis réels. */}
      {AVIS.length > 0 &&
        getReviewSchemas(
          AVIS.map((a) => ({
            author: a.author,
            rating: a.rating,
            date: a.date,
            text: a.text,
          })),
        ).map((schema, i) => (
          <JsonLd key={`review-${i}`} data={schema} />
        ))}
      <JsonLd
        data={getHowToSchema({
          name: "Comment se déroule une réparation ou réfection de toiture en Gironde",
          description:
            "Méthode professionnelle Couverture Gironde pour une intervention de couverture durable, du diagnostic à la réception du chantier.",
          totalTime: "P1D",
          steps: [
            {
              name: "Diagnostic gratuit sur site",
              text: "Visite technique sans engagement : état général de la couverture, recherche de fuite, points faibles, accessibilité, photos et mesures précises. Compte rendu remis avec recommandation.",
            },
            {
              name: "Devis détaillé sous 24h",
              text: "Devis chiffré ligne par ligne, sans ambiguïté : nature des travaux, surface, matériaux (tuile, ardoise, zinc), garantie décennale. Devis personnalisé adapté à votre toiture.",
            },
            {
              name: "Préparation et sécurisation du chantier",
              text: "Installation des protections et de l'échafaudage, dépose des éléments endommagés (tuiles, ardoises, faîtage, zinguerie), contrôle de la charpente et de l'écran sous-toiture.",
            },
            {
              name: "Réparation ou réfection de la couverture",
              text: "Remplacement des tuiles ou ardoises, reprise du faîtage, des noues et des raccords, réfection de la zinguerie (gouttières, chéneaux). Matériaux adaptés au bâti girondin.",
            },
            {
              name: "Contrôle d'étanchéité et finitions",
              text: "Vérification de la mise hors d'eau, test des points sensibles (faîtage, noues, solins, raccords zinc), nettoyage du chantier et des descentes.",
            },
            {
              name: "Réception et garantie décennale",
              text: "Visite de fin de chantier avec le client, photos avant/après remises, rappel de l'attestation d'assurance décennale couvrant les travaux 10 ans.",
            },
          ],
        })}
      />
    </>
  );
}
