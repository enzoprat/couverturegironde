'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import { SOCIAL } from '@/lib/constants';
import { formatAvisDate, type AvisClient } from '@/data/avis';

/** Étoile Google (#FBBC05). */
function GoogleStar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="#FBBC05"
      aria-hidden="true"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

/** Palette d'avatars (déterministe : même auteur = même couleur). */
const AVATAR_COLORS = [
  'bg-[var(--color-ardoise)] text-white',
  'bg-[var(--color-terre)] text-white',
  'bg-[#4285F4] text-white',
  'bg-[var(--color-or)] text-[var(--color-ardoise)]',
  'bg-[#34A853] text-white',
];

function avatarColor(seed: string) {
  const sum = [...seed].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

/**
 * AvisCarousel — cartes d'avis scrollables horizontalement (scroll-snap),
 * avec flèches de navigation sur desktop.
 *
 * Chaque carte reproduit les codes visuels d'un avis Google (avatar initiale,
 * nom, date, logo G, 5 étoiles jaunes, pastille « vérifié »), ce qui rend la
 * preuve sociale immédiatement lisible comme telle.
 */
export function AvisCarousel({ avis }: { avis: AvisClient[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <NavButton
        side="left"
        onClick={() => scrollBy(-1)}
        disabled={!canPrev}
      />

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {avis.map((a) => (
          <article
            key={a.id}
            className="snap-start shrink-0 w-[290px] md:w-[330px] bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] p-6 flex flex-col"
          >
            <div className="flex items-start gap-3 mb-3">
              <span
                className={`shrink-0 w-11 h-11 rounded-full font-bold flex items-center justify-center text-lg ${avatarColor(a.author)}`}
                aria-hidden="true"
              >
                {a.author.trim().charAt(0).toUpperCase()}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[var(--color-ardoise)] text-[0.875rem] truncate">
                  {a.author}
                </div>
                <div className="text-[0.75rem] text-[var(--color-gris-600)]">
                  {formatAvisDate(a.date)}
                  {a.city ? ` · ${a.city}` : ''}
                </div>
              </div>
              <a
                href={SOCIAL.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir l'avis de ${a.author} sur Google (nouvel onglet)`}
                className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md bg-white border border-[var(--color-border)] hover:shadow-[var(--shadow-sm)] transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-terre)]"
              >
                <Image
                  src="/google-g.svg"
                  alt="Google"
                  width={14}
                  height={14}
                  unoptimized
                />
              </a>
            </div>

            <div className="flex items-center gap-1 mb-3">
              <span
                className="flex items-center gap-0.5"
                role="img"
                aria-label={`${a.rating} étoiles sur 5`}
              >
                {Array.from({ length: a.rating }).map((_, i) => (
                  <GoogleStar key={i} className="w-4 h-4" />
                ))}
              </span>
              <BadgeCheck
                className="w-4 h-4 ml-0.5 text-[#4285F4]"
                aria-hidden="true"
              />
            </div>

            <p className="text-[0.875rem] text-[var(--color-gris-700)] leading-relaxed flex-1">
              {a.text}
            </p>

            {a.link && (
              <Link
                href={a.link.href}
                className="mt-4 pt-4 border-t border-[var(--color-border)] inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-[var(--color-terre)] hover:underline underline-offset-2"
              >
                {a.link.label}
                <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            )}
          </article>
        ))}
      </div>

      <NavButton
        side="right"
        onClick={() => scrollBy(1)}
        disabled={!canNext}
      />
    </div>
  );
}

function NavButton({
  side,
  onClick,
  disabled,
}: {
  side: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={side === 'left' ? 'Avis précédents' : 'Avis suivants'}
      className={`hidden md:flex absolute ${side === 'left' ? '-left-4' : '-right-4'} top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-[var(--color-border)] shadow-[var(--shadow-md)] text-[var(--color-ardoise)] transition-all hover:border-[var(--color-terre)] active:scale-95 disabled:opacity-0 disabled:pointer-events-none`}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}
