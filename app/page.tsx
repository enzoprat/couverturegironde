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
import { JsonLd } from '@/components/seo/JsonLd';
import { getFAQSchema } from '@/lib/seo/schemas';
import { FAQ_GENERAL } from '@/data/faq';
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
        eyebrow="Bordeaux · Gironde · 5/5 sur 54 avis Google"
        title={
          <>
            Couvreur à Bordeaux et en{' '}
            <span className="text-[var(--color-terre)]">Gironde</span> :
            démoussage, nettoyage et entretien de toiture
          </>
        }
        subtitle="Artisan couvreur-zingueur en Gironde depuis 2005. Intervention rapide 7j/7, devis gratuit sous 24h et garantie décennale sur chaque chantier. Atelier à Mérignac, intervention sur Bordeaux Métropole et tout le département (33)."
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

      <ChiffresCles variant="light" />

      <AvisGoogle
        intro="54 avis Google 5/5 vérifiés sur l'ensemble de Bordeaux Métropole. Nos clients témoignent."
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

      <JsonLd data={getFAQSchema(FAQ_GENERAL)} />
    </>
  );
}
