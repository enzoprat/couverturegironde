import Image from 'next/image';
import { SOCIAL } from '@/lib/constants';
import { cn } from '@/lib/utils';

type GoogleBadgeProps = {
  /** Taille de l'encadré. sm = inline dans une carte, md = en-tête de section. */
  size?: 'sm' | 'md';
  /** Variante sombre (footer sur fond ardoise). */
  tone?: 'light' | 'dark';
  className?: string;
};

const SIZES = {
  sm: { box: 'w-7 h-7 rounded-md', icon: 14 },
  md: { box: 'w-9 h-9 rounded-lg', icon: 18 },
} as const;

/**
 * GoogleBadge — petit logo Google « G » encadré, cliquable vers la fiche
 * Google Business Profile.
 *
 * Placé à côté de chaque affichage de note/avis pour rendre la source
 * vérifiable en un clic (signal de confiance + trafic vers la fiche GBP,
 * ce qui alimente les signaux d'engagement du pack local).
 */
export function GoogleBadge({
  size = 'sm',
  tone = 'light',
  className,
}: GoogleBadgeProps) {
  const s = SIZES[size];

  return (
    <a
      href={SOCIAL.google}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Voir la fiche et les avis Google de Couverture Gironde (nouvel onglet)"
      title="Avis vérifiés sur Google"
      className={cn(
        'inline-flex items-center justify-center shrink-0 border transition-shadow',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-terre)]',
        tone === 'dark'
          ? 'bg-white border-white/20 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.18)]'
          : 'bg-white border-[var(--color-border)] hover:shadow-[var(--shadow-sm)]',
        s.box,
        className,
      )}
    >
      <Image
        src="/google-g.svg"
        alt="Google"
        width={s.icon}
        height={s.icon}
        unoptimized
      />
    </a>
  );
}
