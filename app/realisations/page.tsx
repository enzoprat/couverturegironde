import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { Reassurance } from '@/components/sections/Reassurance';
import { ZonesDesservies } from '@/components/sections/ZonesDesservies';
import {
  RealisationsFilters,
  type RealisationWithImage,
} from '@/components/sections/RealisationsFilters';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { REALISATIONS } from '@/data/realisations';
import { SERVICES } from '@/data/services';
import { resolveRealisationImage } from '@/lib/images';

const PAGE = requirePage('realisations');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

/**
 * /realisations, galerie filtrable des chantiers récents.
 *
 * Les facets (services + villes disponibles avec compteurs) sont calculées
 * côté serveur à partir de REALISATIONS, puis passées au client component
 * RealisationsFilters qui gère le filtrage interactif local.
 */
export default function Page() {
  const sorted = [...REALISATIONS].sort((a, b) => (a.date < b.date ? 1 : -1));

  // Résolution des URLs d'images côté serveur (lib/images.ts utilise node:fs).
  // On enrichit chaque realisation pour que le client component n'ait pas à le faire.
  const enriched: RealisationWithImage[] = sorted.map((r) => {
    const slugForImage = r.hasAvantApres ? `${r.slug}-apres` : r.slug;
    const alt = `${r.title} à ${r.villeName}`;
    const resolved = resolveRealisationImage(slugForImage, alt, '3/2');
    return {
      ...r,
      imageUrl: resolved.src,
      imageAlt: alt,
      isPlaceholder: !resolved.isReal,
    };
  });

  // Calcul facets services
  const serviceCountMap = new Map<string, number>();
  for (const r of sorted) {
    serviceCountMap.set(r.service, (serviceCountMap.get(r.service) ?? 0) + 1);
  }
  const serviceFacets = Array.from(serviceCountMap.entries())
    .map(([id, count]) => {
      const def = SERVICES[id as keyof typeof SERVICES];
      return { id, name: def?.name ?? id, count };
    })
    .sort((a, b) => b.count - a.count);

  // Calcul facets villes
  const villeCountMap = new Map<string, { name: string; count: number }>();
  for (const r of sorted) {
    const existing = villeCountMap.get(r.villeSlug);
    villeCountMap.set(r.villeSlug, {
      name: r.villeName,
      count: (existing?.count ?? 0) + 1,
    });
  }
  const villeFacets = Array.from(villeCountMap.entries())
    .map(([slug, { name, count }]) => ({ slug, name, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <>
      <Hero
        variant="ville"
        eyebrow="Réalisations"
        title={
          <>
            Nos chantiers récents en{' '}
            <span className="text-[var(--color-terre-600)]">Gironde</span>
          </>
        }
        subtitle="Sélection de nos interventions sur Bordeaux Métropole : démoussage, nettoyage, réparation, zinguerie, charpente. Filtrez par service ou par ville pour découvrir les projets similaires au vôtre."
        breadcrumbSlug={PAGE.slug}
      />

      <section className="section-y">
        <Container>
          {enriched.length > 0 ? (
            <RealisationsFilters
              items={enriched}
              serviceFacets={serviceFacets}
              villeFacets={villeFacets}
            />
          ) : (
            <div className="py-20 text-center">
              <Eyebrow className="mb-3">Bientôt</Eyebrow>
              <h2 className="mb-3">Galerie en cours d'alimentation</h2>
              <p className="text-lead max-w-xl mx-auto">
                Nos chantiers récents seront publiés ici progressivement. En
                attendant, consultez nos avis clients ou demandez un devis pour
                discuter de votre projet.
              </p>
            </div>
          )}
        </Container>
      </section>

      <Reassurance />
      <AvisGoogle title="La parole à nos clients" />
      <ZonesDesservies />
      <CTAFinal />
    </>
  );
}
