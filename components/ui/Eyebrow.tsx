import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type EyebrowProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Eyebrow — petit label pré-titre (Terre cuite, uppercase, letter-spacing).
 * Utilisé au-dessus des H1/H2 pour catégoriser une section.
 */
export function Eyebrow({ className, children }: EyebrowProps) {
  return (
    <span className={cn('text-eyebrow inline-block', className)}>
      {children}
    </span>
  );
}
