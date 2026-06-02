'use client';

import { useState, useRef, useEffect } from 'react';
import { SmartImage } from '@/components/ui/SmartImage';
import { cn } from '@/lib/utils';

export type AvantApresItem = {
  /** Slug pour SmartImage de l'image AVANT. */
  beforeSlug: string;
  /** Slug pour SmartImage de l'image APRÈS. */
  afterSlug: string;
  /** Alt text image avant. */
  beforeAlt?: string;
  /** Alt text image après. */
  afterAlt?: string;
  /** Caption du chantier (ville + service + date). */
  caption?: string;
};

type AvantApresProps = {
  item: AvantApresItem;
  className?: string;
};

/**
 * Slider AVANT/APRÈS — composant performant et accessible.
 *
 * - Drag souris + touch
 * - Touches clavier ← →
 * - Aucune dépendance externe
 * - Si seule l'image AVANT existe (la APRÈS étant un placeholder),
 *   on affiche les 2 quand même : Pexels temporaire → futur drop photo réelle.
 */
export function AvantApres({ item, className }: AvantApresProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    setPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (isDragging.current && touch) updatePosition(touch.clientX);
    };
    const stop = () => {
      isDragging.current = false;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', stop);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stop);
    };
  }, []);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <figure className={cn('group', className)}>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden cursor-ew-resize select-none touch-none"
        onMouseDown={(e) => {
          isDragging.current = true;
          updatePosition(e.clientX);
        }}
        onTouchStart={(e) => {
          const touch = e.touches[0];
          if (touch) {
            isDragging.current = true;
            updatePosition(touch.clientX);
          }
        }}
      >
        {/* Image APRÈS (fond) */}
        <div className="absolute inset-0">
          <SmartImage
            variant="realisation"
            slug={item.afterSlug}
            alt={item.afterAlt ?? 'Toiture après intervention'}
            aspect="4/3"
            className="rounded-none h-full"
          />
        </div>

        {/* Image AVANT (clip dynamique) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <SmartImage
            variant="realisation"
            slug={item.beforeSlug}
            alt={item.beforeAlt ?? 'Toiture avant intervention'}
            aspect="4/3"
            className="rounded-none h-full"
          />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[0.75rem] font-bold uppercase tracking-wider rounded-full bg-[var(--color-ardoise)] text-[var(--color-pierre)]">
          Avant
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-1 text-[0.75rem] font-bold uppercase tracking-wider rounded-full bg-[var(--color-terre)] text-[var(--color-pierre)]">
          Après
        </span>

        {/* Slider handle */}
        <button
          type="button"
          aria-label="Glisser pour comparer avant et après"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          role="slider"
          onKeyDown={handleKey}
          className="absolute top-0 bottom-0 w-1 bg-[var(--color-pierre)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)]"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-pierre)] shadow-[var(--shadow-md)] grid place-items-center text-[var(--color-ardoise)]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </button>
      </div>
      {item.caption && (
        <figcaption className="mt-3 text-[0.875rem] text-[var(--color-gris-600)]">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}
