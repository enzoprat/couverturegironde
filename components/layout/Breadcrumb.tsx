import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getBreadcrumb } from '@/lib/pages';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';

type BreadcrumbProps = {
  slug: string;
  className?: string;
  /** Variante visuelle. `dark` pour les fonds clairs, `light` pour les hero sombres. */
  variant?: 'dark' | 'light';
};

/**
 * Breadcrumb — fil d'Ariane dynamique généré depuis le registre des pages.
 *
 * Émet automatiquement le schema BreadcrumbList associé.
 * Ne s'affiche PAS pour la home (toujours conçue comme racine).
 */
export function Breadcrumb({
  slug,
  className,
  variant = 'dark',
}: BreadcrumbProps) {
  const items = getBreadcrumb(slug);
  if (items.length <= 1) return null;

  const textColor =
    variant === 'light'
      ? 'text-[var(--color-gris-300)]'
      : 'text-[var(--color-gris-600)]';
  const linkColor =
    variant === 'light'
      ? 'hover:text-[var(--color-terre)]'
      : 'hover:text-[var(--color-terre)]';

  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cn('text-[0.875rem]', textColor, className)}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight
                  className="w-3.5 h-3.5 opacity-50 shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast || item.current ? (
                <span
                  className={cn(
                    'font-medium',
                    variant === 'light'
                      ? 'text-[var(--color-pierre)]'
                      : 'text-[var(--color-ardoise)]',
                  )}
                  aria-current="page"
                >
                  {item.title}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={cn('transition-colors', linkColor)}
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={getBreadcrumbSchema(items)} />
    </nav>
  );
}
