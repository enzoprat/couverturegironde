'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { NAP } from '@/lib/constants';
import { cn } from '@/lib/utils';

type WhatsAppButtonProps = {
  /** Message pré-rempli envoyé via lien wa.me. */
  prefilledMessage?: string;
  /** Désactive sur desktop (par défaut mobile uniquement). */
  mobileOnly?: boolean;
};

/**
 * WhatsAppButton — bouton flottant WhatsApp pour conversion mobile.
 *
 * Comportement :
 *  - Mobile uniquement par défaut (la cohorte cible est mobile-first)
 *  - Apparaît après scroll de 25 % de la page (pas d'intrusion à l'arrivée)
 *  - S'efface près du footer pour ne pas recouvrir le formulaire devis
 *  - Bottom-right au-dessus de la StickyPhoneBar (z-index supérieur)
 *  - Couleur officielle WhatsApp #25D366 (UX reconnaissable)
 *  - Tap target 56px (au-dessus du minimum 48px)
 */
export function WhatsAppButton({
  prefilledMessage = 'Bonjour, je souhaite obtenir des informations sur vos services de couverture.',
  mobileOnly = true,
}: WhatsAppButtonProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => {
      const docHeight = document.documentElement.scrollHeight;
      const viewportH = window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercent = (scrolled + viewportH) / docHeight;

      // Apparaît à 25% de scroll (ou après 400px sur petites pages)
      const passedThreshold = scrollPercent > 0.25 || scrolled > 400;
      // S'efface à 200px du bas (laisser place au formulaire / footer)
      const nearBottom = scrolled + viewportH >= docHeight - 200;

      setShow(passedThreshold && !nearBottom);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  const href = `${NAP.whatsappHref}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Couverture Gironde sur WhatsApp"
      className={cn(
        'fixed right-4 z-30 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-[var(--shadow-lg)] transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        // Position : au-dessus de la StickyPhoneBar mobile (height ~64px + 16px gap)
        // Sur desktop, au-dessus du bord bas
        'bottom-[84px] md:bottom-6',
        // Couleur officielle WhatsApp
        'bg-[#25D366] text-white hover:bg-[#1FB85A] focus-visible:ring-[#25D366]',
        // Affichage conditionnel
        mobileOnly && 'md:hidden',
        show
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none',
      )}
    >
      <MessageCircle className="w-7 h-7" strokeWidth={2} aria-hidden="true" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
