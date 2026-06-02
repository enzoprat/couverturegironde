'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, MapPin, Tag, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Realisation } from '@/data/realisations';

/**
 * Une réalisation déjà enrichie côté serveur avec son `imageUrl` résolue
 * (photo réelle ou placeholder). Évite d'importer lib/images.ts (qui utilise
 * node:fs) dans le client bundle.
 */
export type RealisationWithImage = Realisation & {
  imageUrl: string;
  imageAlt: string;
  isPlaceholder: boolean;
};

type RealisationsFiltersProps = {
  /** Liste de toutes les réalisations (triées par date desc côté serveur), avec URLs résolues. */
  items: RealisationWithImage[];
  /** Services disponibles : `{ id, name, count }`. */
  serviceFacets: Array<{ id: string; name: string; count: number }>;
  /** Villes disponibles : `{ slug, name, count }`. */
  villeFacets: Array<{ slug: string; name: string; count: number }>;
};

/**
 * RealisationsFilters — grille filtrable par service + ville (client component).
 *
 * Reçoit les realisations avec URLs d'image déjà résolues côté serveur,
 * et gère localement le state des filtres actifs.
 */
export function RealisationsFilters({
  items,
  serviceFacets,
  villeFacets,
}: RealisationsFiltersProps) {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeVille, setActiveVille] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return items.filter((r) => {
      if (activeService && r.service !== activeService) return false;
      if (activeVille && r.villeSlug !== activeVille) return false;
      return true;
    });
  }, [items, activeService, activeVille]);

  const hasActiveFilter = activeService !== null || activeVille !== null;

  return (
    <>
      {/* Barre de filtres */}
      <div className="mb-10 space-y-4">
        <FilterRow
          label="Service"
          options={serviceFacets.map((f) => ({
            value: f.id,
            label: `${f.name} (${f.count})`,
          }))}
          active={activeService}
          onChange={setActiveService}
        />
        <FilterRow
          label="Ville"
          options={villeFacets.map((f) => ({
            value: f.slug,
            label: `${f.name} (${f.count})`,
          }))}
          active={activeVille}
          onChange={setActiveVille}
        />
        {hasActiveFilter && (
          <button
            type="button"
            onClick={() => {
              setActiveService(null);
              setActiveVille(null);
            }}
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-[var(--color-gris-600)] hover:text-[var(--color-terre-600)] transition-colors"
          >
            <X className="w-4 h-4" aria-hidden="true" />
            Réinitialiser les filtres
          </button>
        )}
      </div>

      {/* État compteur */}
      <p className="text-[0.875rem] text-[var(--color-gris-600)] mb-6">
        <strong className="text-[var(--color-ardoise)]">{filtered.length}</strong>{' '}
        {filtered.length > 1 ? 'chantiers' : 'chantier'}
        {hasActiveFilter ? ' correspondent à votre sélection' : ' au total'}.
      </p>

      {/* Grille */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center rounded-[var(--radius-lg)] bg-[var(--color-creme)] border border-[var(--color-border)]">
          <h3 className="font-bold mb-2">Aucun chantier ne correspond</h3>
          <p className="text-[0.9375rem] text-[var(--color-gris-600)] mb-5 max-w-md mx-auto">
            Essayez une autre combinaison de filtres, ou découvrez l'ensemble
            de nos réalisations.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveService(null);
              setActiveVille(null);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)] bg-[var(--color-ardoise)] text-[var(--color-pierre)] font-semibold text-[0.9375rem] hover:bg-[var(--color-ardoise-700)] transition-colors"
          >
            Voir tous les chantiers
          </button>
        </div>
      ) : (
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((r) => (
            <li key={r.slug}>
              <RealisationCard realisation={r} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function FilterRow({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: Array<{ value: string; label: string }>;
  active: string | null;
  onChange: (v: string | null) => void;
}) {
  return (
    <div>
      <div className="text-[0.6875rem] uppercase tracking-wider font-bold text-[var(--color-gris-600)] mb-2">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        <FilterChip
          label="Tous"
          isActive={active === null}
          onClick={() => onChange(null)}
        />
        {options.map((o) => (
          <FilterChip
            key={o.value}
            label={o.label}
            isActive={active === o.value}
            onClick={() => onChange(active === o.value ? null : o.value)}
          />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={cn(
        'inline-flex items-center px-3.5 py-2 rounded-full text-[0.8125rem] font-semibold transition-colors min-h-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)]',
        isActive
          ? 'bg-[var(--color-ardoise)] text-[var(--color-pierre)] border-[1.5px] border-[var(--color-ardoise)]'
          : 'bg-[var(--color-creme)] text-[var(--color-ardoise)] border-[1.5px] border-[var(--color-border)] hover:border-[var(--color-ardoise)]',
      )}
    >
      {label}
    </button>
  );
}

function RealisationCard({ realisation }: { realisation: RealisationWithImage }) {
  return (
    <Link
      href={`/realisations/${realisation.slug}`}
      className="group block h-full bg-[var(--color-creme)] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden transition-all hover:border-[var(--color-ardoise)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5"
    >
      <div className="relative aspect-[3/2] bg-[var(--color-gris-100)]">
        <Image
          src={realisation.imageUrl}
          alt={realisation.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          unoptimized={realisation.isPlaceholder}
          className="object-cover"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-3 text-[0.75rem]">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--color-terre)]/10 text-[var(--color-terre-600)] font-semibold">
            <Tag className="w-3 h-3" aria-hidden="true" />
            {realisation.service}
          </span>
          <span className="inline-flex items-center gap-1 text-[var(--color-gris-600)]">
            <MapPin className="w-3 h-3" aria-hidden="true" />
            {realisation.villeName}
          </span>
          <span className="inline-flex items-center gap-1 text-[var(--color-gris-600)]">
            <CalendarDays className="w-3 h-3" aria-hidden="true" />
            {new Date(realisation.date).toLocaleDateString('fr-FR', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
        <h3 className="text-[1.125rem] font-bold text-[var(--color-ardoise)] mb-2">
          {realisation.title}
        </h3>
        <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed flex-1">
          {realisation.description}
        </p>
      </div>
    </Link>
  );
}
