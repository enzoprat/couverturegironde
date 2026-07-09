import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { SmartImage } from '@/components/ui/SmartImage';
import { getLatestRealisations, filterRealisations } from '@/data/realisations';
import type { Realisation } from '@/data/realisations';
import { toLocatif } from '@/lib/utils';

type RealisationsCarouselProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** Filtrer par service (slug ServiceCategory). */
  filterService?: string;
  /** Filtrer par ville (slug). */
  filterVille?: string;
  /** Nombre max d'éléments. */
  limit?: number;
  /** Variante d'affichage : `grid` (homepage), `compact` (pages services/villes). */
  variant?: 'grid' | 'compact';
};

/**
 * RealisationsCarousel — affichage des chantiers récents.
 *
 * Pas un vrai carousel (drag = JS lourd, peu utile sur ce contenu).
 * Grille responsive : 3 cols desktop, 1 col mobile. Scroll horizontal natif si besoin.
 *
 * Filtrable par service ou ville → utilisé sur pages services + pages villes
 * pour montrer des chantiers contextuels.
 */
export function RealisationsCarousel({
  eyebrow = 'Nos réalisations',
  title = 'Chantiers récents en Gironde',
  intro,
  filterService,
  filterVille,
  limit = 6,
  variant = 'grid',
}: RealisationsCarouselProps) {
  let items: Realisation[];
  if (filterService || filterVille) {
    items = filterRealisations({
      service: filterService,
      ville: filterVille,
    }).slice(0, limit);
    // Fallback : si aucun chantier ne matche, on tombe sur les dernières
    if (items.length === 0) items = getLatestRealisations(limit);
  } else {
    items = getLatestRealisations(limit);
  }

  if (items.length === 0) return null;

  return (
    <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
      <Container>
        <div className="max-w-3xl mb-12">
          <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
          <h2 className="mb-4">{title}</h2>
          {intro && <p className="text-lead">{intro}</p>}
        </div>

        <ul
          role="list"
          className={
            variant === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'grid grid-cols-1 md:grid-cols-2 gap-6'
          }
        >
          {items.map((r) => (
            <li key={r.slug}>
              <RealisationCard realisation={r} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button href="/realisations" variant="secondary">
            Voir toutes les réalisations
          </Button>
        </div>
      </Container>
    </section>
  );
}

function RealisationCard({ realisation }: { realisation: Realisation }) {
  // Page individuelle générée automatiquement par /realisations/[slug]
  const href = `/realisations/${realisation.slug}`;

  return (
    <Link
      href={href}
      className="group block bg-[var(--color-pierre)] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-ardoise)] hover:shadow-[var(--shadow-md)] transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]"
    >
      <SmartImage
        variant="realisation"
        slug={
          realisation.hasAvantApres
            ? `${realisation.slug}-apres`
            : realisation.slug
        }
        alt={`${realisation.title} ${toLocatif(realisation.villeName)}`}
        aspect="3/2"
        className="rounded-none"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-[1.0625rem] font-bold text-[var(--color-ardoise)] leading-tight">
            {realisation.title}
          </h3>
          <ArrowUpRight
            className="w-4 h-4 shrink-0 text-[var(--color-gris-400)] group-hover:text-[var(--color-terre)] transition-colors mt-0.5"
            aria-hidden="true"
          />
        </div>
        <p className="text-[0.875rem] text-[var(--color-gris-600)] leading-relaxed mb-3">
          {realisation.description}
        </p>
        <div className="text-[0.75rem] uppercase tracking-wider font-semibold text-[var(--color-terre-600)]">
          {realisation.villeName}
        </div>
      </div>
    </Link>
  );
}
