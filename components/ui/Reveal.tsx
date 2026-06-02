'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
  /** Désactive l'animation pour ce composant. */
  immediate?: boolean;
};

/**
 * Reveal — fade-in + translateY au moment où l'élément entre dans le viewport.
 *
 * Pattern progressive enhancement :
 *   - SSR / no-JS / immediate=true → contenu visible, aucune animation
 *   - Hydration JS → ajoute `reveal--pending` (opacity:0), puis IO active
 *     `is-visible` quand l'élément entre dans le viewport.
 *
 * Garantit qu'on ne livre jamais une page "blanche" si JS échoue ou tarde.
 * Respect `prefers-reduced-motion` automatique via media query CSS.
 */
export function Reveal({
  delay = 0,
  className,
  children,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pending, setPending] = useState(false);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const node = ref.current;
    if (!node) return;

    // Si l'élément est déjà entièrement visible au mount (above the fold),
    // on saute l'animation et on l'affiche directement.
    const rect = node.getBoundingClientRect();
    const inViewportNow =
      rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewportNow) {
      setVisible(true);
      return;
    }

    setPending(true);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={cn(
        'reveal',
        pending && 'reveal--pending',
        visible && 'is-visible',
        className,
      )}
      style={delay && pending ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
