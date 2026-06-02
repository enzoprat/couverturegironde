import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type BadgeVariant = 'garantie' | 'or' | 'urgence' | 'neutral';

type BadgeProps = {
  variant?: BadgeVariant;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

const base =
  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.8125rem] font-semibold leading-none';

const variantClasses: Record<BadgeVariant, string> = {
  garantie:
    'bg-[var(--color-garantie-100)] text-[var(--color-garantie)]',
  // Texte Or-700 (foncé) sur fond Or-100 pour passer WCAG AA contrast.
  or: 'bg-[var(--color-or-100)] text-[var(--color-or-700)]',
  urgence:
    'bg-[var(--color-urgence-100)] text-[var(--color-urgence)]',
  neutral: 'bg-[var(--color-gris-100)] text-[var(--color-ardoise)]',
};

/**
 * Badge — trust badge (décennale, note Google, 20 ans, 7j/7…).
 * Variants : garantie (vert), or (avis), urgence (bleu), neutral (gris).
 */
export function Badge({
  variant = 'neutral',
  icon,
  className,
  children,
}: BadgeProps) {
  return (
    <span className={cn(base, variantClasses[variant], className)}>
      {icon && (
        <span className="inline-flex items-center justify-center [&>svg]:w-3.5 [&>svg]:h-3.5">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}
