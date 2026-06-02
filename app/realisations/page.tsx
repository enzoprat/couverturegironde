import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SmartImage } from '@/components/ui/SmartImage';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { Reassurance } from '@/components/sections/Reassurance';
import { ZonesDesservies } from '@/components/sections/ZonesDesservies';
import { MapPin, CalendarDays, Tag } from 'lucide-react';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { REALISATIONS } from '@/data/realisations';
import { SERVICES } from '@/data/services';

const PAGE = requirePage('realisations');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

/**
 * /realisations — galerie des chantiers récents.
 *
 * Source unique : data/realisations.ts. Pour ajouter une réalisation :
 *   1. Ajouter une entrée dans data/realisations.ts
 *   2. Drop les photos dans /public/images/realisations/{slug}.webp
 *
 * Filtres futurs (par service / ville) seront ajoutés en client component
 * en phase 2. Pour l'instant, affichage en grille triée par date.
 */
export default function Page() {
  const sorted = [...REALISATIONS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Hero
        variant="ville"
        eyebrow="Réalisations"
        title={
          <>
            Nos chantiers récents en{' '}
            <span className="text-[var(--color-terre)]">Gironde</span>
          </>
        }
        subtitle="Sélection de nos interventions sur Bordeaux Métropole : démoussage, nettoyage, réparation, zinguerie. Photos avant/après et détails par projet."
        breadcrumbSlug={PAGE.slug}
      />

      <section className="section-y">
        <Container>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sorted.map((r) => {
              const service = SERVICES[r.service as keyof typeof SERVICES];
              return (
                <li key={r.slug}>
                  <Link
                    href={`/realisations/${r.slug}`}
                    className="block h-full bg-[var(--color-creme)] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden transition-all hover:border-[var(--color-ardoise)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5"
                  >
                    <SmartImage
                      variant="realisation"
                      slug={r.hasAvantApres ? `${r.slug}-apres` : r.slug}
                      alt={`${r.title} à ${r.villeName}`}
                      aspect="3/2"
                      className="rounded-none"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-wrap items-center gap-2 mb-3 text-[0.75rem]">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--color-terre)]/10 text-[var(--color-terre)] font-semibold">
                          <Tag className="w-3 h-3" aria-hidden="true" />
                          {service?.name ?? r.service}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[var(--color-gris-600)]">
                          <MapPin className="w-3 h-3" aria-hidden="true" />
                          {r.villeName}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[var(--color-gris-600)]">
                          <CalendarDays className="w-3 h-3" aria-hidden="true" />
                          {new Date(r.date).toLocaleDateString('fr-FR', {
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <h3 className="text-[1.125rem] font-bold text-[var(--color-ardoise)] mb-2">
                        {r.title}
                      </h3>
                      <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed flex-1">
                        {r.description}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* État vide (ne devrait jamais arriver, mais bonne pratique) */}
          {sorted.length === 0 && (
            <div className="py-20 text-center">
              <Eyebrow className="mb-3">Bientôt</Eyebrow>
              <h2 className="mb-3">Galerie en cours d'alimentation</h2>
              <p className="text-lead max-w-xl mx-auto">
                Nos chantiers récents seront publiés ici progressivement.
                En attendant, consultez nos avis clients ou demandez un devis
                pour discuter de votre projet.
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
