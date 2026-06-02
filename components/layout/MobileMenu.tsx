'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { NAP } from '@/lib/constants';
import type { PageEntry } from '@/data/types';

type MobileMenuProps = {
  pages: PageEntry[];
};

/**
 * MobileMenu — drawer plein écran avec navigation et CTA téléphone.
 *
 * Comportement :
 *  - bouton hamburger dans le header (mobile uniquement)
 *  - drawer slide-in depuis la droite
 *  - bloque le scroll body quand ouvert
 *  - ferme avec ESC, clic à l'extérieur, ou changement de route
 *  - aria-modal pour l'accessibilité
 */
export function MobileMenu({ pages }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Ferme automatiquement à chaque changement de route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloque le scroll body quand ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Fermeture clavier (Esc)
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

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

      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-[var(--color-ardoise)]/60 backdrop-blur-sm md:hidden transition-opacity',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
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
        <div className="flex items-center justify-between p-5 border-b border-[var(--color-border)]">
          <span className="font-bold text-[var(--color-ardoise)] flex items-center gap-2">
            <span className="text-[0.6875rem] uppercase tracking-wider text-[var(--color-gris-600)]">Menu</span>
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

        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="flex flex-col">
            {pages.map((page) => {
              const isActive = pathname === page.path;
              return (
                <li key={page.slug}>
                  <Link
                    href={page.path}
                    className={cn(
                      'block px-5 py-4 text-[1.0625rem] font-semibold transition-colors',
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

        <div className="p-5 border-t border-[var(--color-border)] flex flex-col gap-3">
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
}
