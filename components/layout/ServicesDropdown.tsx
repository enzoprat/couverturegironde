'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PageEntry } from '@/data/types';

type ServicesDropdownProps = {
  entretien: PageEntry[];
  travaux: PageEntry[];
  urgence: PageEntry[];
};

/**
 * ServicesDropdown — méga-menu desktop pour la navigation Services.
 *
 * - Trigger : hover OU focus clavier sur le bouton "Services"
 * - 3 colonnes thématiques : Entretien (silo prioritaire) / Travaux / Urgence & Spéciaux
 * - Fermeture : clic en dehors, Escape, blur de tous les éléments
 * - Accessibilité : aria-expanded, aria-haspopup, navigation clavier
 */
export function ServicesDropdown({
  entretien,
  travaux,
  urgence,
}: ServicesDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fermeture clavier Esc
  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [open]);

  // Fermeture clic en dehors
  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  // Ouverture au hover avec délai léger pour éviter les ouvertures accidentelles
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
        className={cn(
          'inline-flex items-center gap-1 px-3 py-2 text-[0.9375rem] font-semibold transition-colors rounded-[var(--radius-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)]',
          open
            ? 'text-[var(--color-terre-600)]'
            : 'text-[var(--color-ardoise)] hover:text-[var(--color-terre-600)]',
        )}
      >
        Services
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-[var(--duration-fast)]',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown panel */}
      <div
        role="region"
        aria-label="Sous-menu Services"
        className={cn(
          'absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[min(900px,calc(100vw-2rem))] rounded-[var(--radius-lg)] bg-[var(--color-pierre)] border border-[var(--color-border)] shadow-[var(--shadow-lg)] overflow-hidden transition-all duration-[var(--duration-fast)] ease-[var(--ease-out)] z-50',
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none',
        )}
      >
        <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
          <DropdownColumn
            title="Entretien"
            subtitle="Notre spécialité"
            services={entretien}
            accent
          />
          <DropdownColumn title="Travaux" subtitle="Réparation & pose" services={travaux} />
          <DropdownColumn
            title="Urgence & Spéciaux"
            subtitle="Interventions ciblées"
            services={urgence}
          />
        </div>
        <div className="bg-[var(--color-creme)] px-6 py-4 border-t border-[var(--color-border)]">
          <Link
            href="/tarifs"
            className="group inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[var(--color-ardoise)] hover:text-[var(--color-terre-600)] transition-colors"
            onClick={() => setOpen(false)}
          >
            👉 Voir les tarifs indicatifs de toutes nos prestations
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

function DropdownColumn({
  title,
  subtitle,
  services,
  accent = false,
}: {
  title: string;
  subtitle: string;
  services: PageEntry[];
  accent?: boolean;
}) {
  return (
    <div className="bg-[var(--color-pierre)] p-5">
      <div className="mb-4">
        <h3
          className={cn(
            'text-[0.8125rem] font-bold uppercase tracking-wider mb-0.5',
            accent ? 'text-[var(--color-terre-600)]' : 'text-[var(--color-ardoise)]',
          )}
        >
          {title}
        </h3>
        <p className="text-[0.75rem] text-[var(--color-gris-600)]">{subtitle}</p>
      </div>
      <ul className="space-y-1">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={s.path}
              className="group flex items-center justify-between gap-2 -mx-2 px-2 py-2 rounded-[var(--radius-sm)] text-[0.9375rem] text-[var(--color-ardoise)] hover:bg-[var(--color-creme)] hover:text-[var(--color-terre-600)] transition-colors"
            >
              <span className="font-semibold">{s.navLabel ?? s.title}</span>
              <ArrowRight
                className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-terre)]"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
