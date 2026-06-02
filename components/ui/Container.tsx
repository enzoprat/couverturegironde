import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T;
  size?: 'default' | 'narrow';
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'className' | 'children'>;

/**
 * Container — wrapper de contenu avec largeurs maxi et paddings horizontaux fluides.
 *
 * - `default` : 1280px (sections classiques)
 * - `narrow`  : 720px  (articles, guides, contenu long)
 */
export function Container<T extends ElementType = 'div'>({
  as,
  size = 'default',
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Component = (as ?? 'div') as ElementType;
  return (
    <Component
      className={cn(
        size === 'narrow' ? 'container-narrow' : 'container-default',
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
