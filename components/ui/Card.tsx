import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

type CardProps = {
  href?: string;
  className?: string;
  children: ReactNode;
  /** Si `true`, hover renforcé (border + shadow). Désactiver pour cards purement informatives. */
  interactive?: boolean;
};

const base =
  'bg-[var(--color-creme)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 md:p-8 transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]';

const interactiveClasses =
  'hover:border-[var(--color-ardoise)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5';

/**
 * Card — conteneur générique (services, avis, articles, etc.).
 * Si `href` est fourni, devient un lien Next.js cliquable.
 */
export function Card({
  href,
  className,
  children,
  interactive = true,
}: CardProps) {
  const classes = cn(
    base,
    interactive && interactiveClasses,
    href && 'block cursor-pointer',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
