'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { NAP } from '@/lib/constants';
import { cn } from '@/lib/utils';

/**
 * StickyPhoneBar — barre flottante mobile uniquement.
 *
 * - Apparaît après scroll > 200px (évite le bruit à l'arrivée)
 * - Tap target ≥ 48px
 * - Numéro à gauche (action principale), CTA devis à droite
 * - Auto-hide proche du footer pour ne pas recouvrir le formulaire
 */
export function StickyPhoneBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => {
      const scrolled = window.scrollY > 200;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 400;
      setShow(scrolled && !nearBottom);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  return (
    <div
      role="region"
      aria-label="Contact rapide"
      className={cn(
        'fixed inset-x-0 bottom-0 z-30 md:hidden bg-[var(--color-ardoise)] text-[var(--color-pierre)] border-t border-[var(--color-ardoise-700)] transition-transform duration-300 ease-out',
        show ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="flex items-stretch px-3 py-2.5 gap-2">
        <a
          href={NAP.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-[var(--radius-md)] bg-[var(--color-terre)] text-[var(--color-creme)] font-semibold text-[0.9375rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-creme)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ardoise)]"
          aria-label={`Appeler le ${NAP.phoneDisplay}`}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          {NAP.phoneDisplay}
        </a>
        <a
          href="/demande-devis"
          className="flex items-center justify-center px-4 h-12 rounded-[var(--radius-md)] border-[1.5px] border-[var(--color-pierre)] text-[var(--color-pierre)] font-semibold text-[0.9375rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pierre)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ardoise)]"
        >
          Devis
        </a>
      </div>
    </div>
  );
}
