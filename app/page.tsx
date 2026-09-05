import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { Container } from '@/components/ui/Container';
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
        eyebrow="Mérignac · Bordeaux · 5/5 sur 57 avis Google"
        title={
          <>
            Couvreur à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span> et en
            Gironde — Couverture Gironde, artisan depuis 2005
          </>
        }
        subtitle="Liroy Delsuc, couvreur-zingueur, atelier au 65 rue de Malbos à Mérignac. Démoussage, nettoyage, réparation, urgence 7j/7 sur Bordeaux Métropole et toute la Gironde. Devis gratuit sous 24h, garantie décennale, 5/5 sur 57 avis Google."
        imageSlug="home"
        secondaryCtaLabel="Demander un devis gratuit"
      />

      <ServicesGrid
        eyebrow="Nos services en Gironde"
        title="Démoussage, nettoyage et entretien de toiture à Bordeaux et en Gironde"
        intro="Notre spécialité : préserver et prolonger la vie de votre toiture. Démoussage professionnel, nettoyage maîtrisé et traitement hydrofuge longue durée, complétés par toutes les prestations de couverture et zinguerie sur l'ensemble de la Gironde."
        scope="all"
      />

      <Reassurance />

      <Simulateur />

      <ChiffresCles variant="light" />

      <AvisGoogle
        intro="57 avis Google 5/5 vérifiés sur l'ensemble de Bordeaux Métropole. Nos clients témoignent."
      />

      <RealisationsCarousel
        eyebrow="Réalisations"
        title="Nos derniers chantiers en Gironde"
        intro="Démoussage, nettoyage, réparation, zinguerie : voici une sélection de nos interventions récentes sur Bordeaux Métropole."
      />

      <Urgence variant="compact" />

      {/* Lien contextuel événementiel (feux Gironde 2026) — scopé à l'accueil,
          à retirer quand l'épisode incendie sera passé. */}
      <section className="py-4 bg-[var(--color-urgence-100)] border-b border-[var(--color-urgence)]/20">
        <Container>
          <p className="text-[0.9375rem] text-[var(--color-gris-600)]">
            Toiture touchée par les feux de forêt de l&apos;été 2026 en Gironde ?
            Nous assurons la mise en sécurité, le diagnostic gratuit et le
            dossier assurance —{' '}
            <Link
              href="/reparation-toiture-apres-incendie-gironde"
              className="font-semibold text-[var(--color-urgence)] underline underline-offset-2 hover:no-underline"
            >
              réparation de toiture après incendie en Gironde
            </Link>
            .
          </p>
        </Container>
      </section>

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
          name: "Comment se déroule un démoussage de toiture en Gironde",
          description:
            "Méthode professionnelle Couverture Gironde pour un démoussage durable, du diagnostic au traitement hydrofuge final.",
          totalTime: "P1D",
          steps: [
            {
              name: "Diagnostic gratuit sur site",
              text: "Visite technique sans engagement : état général de la couverture, points faibles, accessibilité, photos et mesures précises. Compte rendu remis avec recommandation.",
            },
            {
              name: "Devis détaillé sous 24h",
              text: "Devis chiffré ligne par ligne, sans ambiguïté : type de prestation, surface, matériel utilisé, garantie. Devis personnalisé adapté à votre toiture.",
            },
            {
              name: "Brossage manuel des zones critiques",
              text: "Élimination mécanique des mousses installées sur les versants nord, autour des cheminées et des zones ombragées. Pas de pression destructrice : on respecte la tuile.",
            },
            {
              name: "Application du produit anti-mousse",
              text: "Traitement chimique professionnel longue durée (3-5 ans d'efficacité), adapté au matériau (tuile canal, mécanique, ardoise). Application par pulvérisation basse pression.",
            },
            {
              name: "Rinçage et inspection finale",
              text: "Rinçage des descentes et des chéneaux, inspection des points sensibles (faîtage, noues, raccords zinc). Photos avant/après remises en fin de chantier.",
            },
            {
              name: "Option : traitement hydrofuge garanti 10 ans",
              text: "Application d'un hydrofuge incolore ou coloré pour imperméabiliser la couverture, ralentir la recolonisation des mousses et raviver la teinte. Garantie 10 ans.",
            },
          ],
        })}
      />
    </>
  );
}
