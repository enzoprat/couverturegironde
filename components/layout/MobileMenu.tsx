'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { NAP } from '@/lib/constants';
import type { PageEntry } from '@/data/types';

type MobileMenuProps = {
  topLevel: PageEntry[];
  entretien: PageEntry[];
  travaux: PageEntry[];
  urgence: PageEntry[];
};

/**
 * MobileMenu — drawer plein écran avec navigation hiérarchique.
 *
 * IMPORTANT : le drawer + backdrop sont rendus via React Portal dans
 * `document.body`. Sinon, comme le composant est rendu DANS le Header qui
 * possède `backdrop-blur`, ce dernier crée un nouveau containing block CSS
 * pour les éléments fixed-positioned. Conséquence : le drawer `fixed inset-y-0`
 * serait limité à la hauteur du Header (64 px) au lieu du viewport entier.
 *
 * C'est un bug subtil de la spec CSS Containing Block (backdrop-filter,
 * transform, filter, perspective forcent tous le containing block).
 *
 * Structure :
 *   1. Bouton hamburger (rendu en place dans Header)
 *   2. Backdrop + drawer (portalés sur document.body, hors Header)
 *
 * Le drawer affiche :
 *   - Section Services (catégories pliables : Entretien / Travaux / Urgence)
 *   - Items top-level (Tarifs, Réalisations, À propos, Contact)
 *   - CTA téléphone + devis sticky en bas
 *
 * La catégorie Entretien (silo prioritaire) est dépliée par défaut.
 */
export function MobileMenu({ topLevel, entretien, travaux, urgence }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openCategory, setOpenCategory] = useState<'entretien' | 'travaux' | 'urgence' | null>('entretien');
  const pathname = usePathname();

  // Mount flag pour le Portal (SSR-safe)
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  const drawerContent = (
    <>
      {/* Backdrop — couvre tout le viewport */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-[var(--color-ardoise)]/60 backdrop-blur-sm md:hidden transition-opacity',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer plein écran à droite */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[var(--color-pierre)] md:hidden transition-transform shadow-[var(--shadow-lg)] flex flex-col',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--color-border)] bg-[var(--color-pierre)]">
          <span className="font-bold text-[var(--color-ardoise)] flex items-center gap-2">
            <span className="text-[0.6875rem] uppercase tracking-wider text-[var(--color-gris-600)]">
              Menu
            </span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-md)] text-[var(--color-ardoise)] hover:bg-[var(--color-creme)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto bg-[var(--color-pierre)]">
          {/* Section Services avec catégories pliables */}
          <div className="border-b border-[var(--color-border)] py-2">
            <div className="px-5 pt-3 pb-2 text-[0.6875rem] uppercase tracking-wider font-bold text-[var(--color-gris-600)]">
              Nos services
            </div>
            <CategoryGroup
              id="entretien"
              label="Entretien"
              subtitle="Notre spécialité"
              services={entretien}
              isOpen={openCategory === 'entretien'}
              onToggle={() =>
                setOpenCategory(openCategory === 'entretien' ? null : 'entretien')
              }
              pathname={pathname}
              accent
            />
            <CategoryGroup
              id="travaux"
              label="Travaux"
              subtitle="Réparation & pose"
              services={travaux}
              isOpen={openCategory === 'travaux'}
              onToggle={() =>
                setOpenCategory(openCategory === 'travaux' ? null : 'travaux')
              }
              pathname={pathname}
            />
            <CategoryGroup
              id="urgence"
              label="Urgence & Spéciaux"
              subtitle="Interventions ciblées"
              services={urgence}
              isOpen={openCategory === 'urgence'}
              onToggle={() =>
                setOpenCategory(openCategory === 'urgence' ? null : 'urgence')
              }
              pathname={pathname}
            />
          </div>

          {/* Items top-level */}
          <ul className="flex flex-col py-2">
            {topLevel.map((page) => {
              const isActive = pathname === page.path;
              return (
                <li key={page.slug}>
                  <Link
                    href={page.path}
                    className={cn(
                      'block px-5 py-3.5 text-[1.0625rem] font-semibold transition-colors',
                      isActive
                        ? 'text-[var(--color-terre-600)] bg-[var(--color-terre-100)]/70'
                        : 'text-[var(--color-ardoise)] hover:bg-[var(--color-creme)]',
                    )}
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-5 border-t border-[var(--color-border)] flex flex-col gap-3 bg-[var(--color-pierre)]">
          <Button
            href={NAP.phoneHref}
            variant="primary"
            size="md"
            fullWidth
            iconLeft={<Phone className="w-5 h-5" />}
          >
            {NAP.phoneDisplay}
          </Button>
          <Button href="/demande-devis" variant="secondary" size="md" fullWidth>
            Devis gratuit
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-md)] text-[var(--color-ardoise)] hover:bg-[var(--color-gris-100)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)]"
      >
        <Menu className="w-6 h-6" aria-hidden="true" />
      </button>
      {/* Le drawer est porté hors du Header pour ne pas être contraint par
          le containing block créé par `backdrop-blur` sur le Header. */}
      {mounted ? createPortal(drawerContent, document.body) : null}
    </>
  );
}

function CategoryGroup({
  id,
  label,
  subtitle,
  services,
  isOpen,
  onToggle,
  pathname,
  accent = false,
}: {
  id: string;
  label: string;
  subtitle: string;
  services: PageEntry[];
  isOpen: boolean;
  onToggle: () => void;
  pathname: string;
  accent?: boolean;
}) {
  const panelId = `mobile-cat-${id}`;
  return (
    <div>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-[var(--color-creme)] transition-colors min-h-[48px]"
      >
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              'text-[0.9375rem] font-bold',
              accent ? 'text-[var(--color-terre-600)]' : 'text-[var(--color-ardoise)]',
            )}
          >
            {label}
          </span>
          <span className="text-[0.75rem] text-[var(--color-gris-600)]">
            {subtitle}
          </span>
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-[var(--color-gris-600)] transition-transform duration-[var(--duration-fast)]',
            isOpen && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <ul id={panelId} className="pb-2 bg-[var(--color-creme)]">
          {services.map((s) => {
            const isActive = pathname === s.path;
            return (
              <li key={s.slug}>
                <Link
                  href={s.path}
                  className={cn(
                    'block pl-9 pr-5 py-2.5 text-[0.9375rem] font-medium transition-colors min-h-[44px]',
                    isActive
                      ? 'text-[var(--color-terre-600)] font-bold'
                      : 'text-[var(--color-ardoise)] hover:text-[var(--color-terre-600)]',
                  )}
                >
                  {s.navLabel ?? s.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
