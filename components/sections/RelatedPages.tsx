import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { getRelatedPages } from '@/lib/pages';

type RelatedPagesProps = {
  /** Slug de la page courante. */
  slug: string;
  /** Titre de la section. */
  title?: string;
  /** Eyebrow. */
  eyebrow?: string;
  /** Fond. */
  background?: 'pierre' | 'creme';
};

/**
 * RelatedPages — bloc de maillage interne contextuel.
 *
 * Lit `getRelatedPages(slug)` qui agrège automatiquement :
 *  - le parent (silo)
 *  - les pages du même silo (ex: démoussage sur d'autres villes)
 *  - les services complémentaires
 *  - les villes voisines
 *  - la page conversion
 *
 * AUCUN lien codé en dur. AUCUN lien mort possible (toutes les pages
 * référencées sont vérifiées dans `lib/pages.ts`).
 *
 * Si aucune page reliée n'existe, la section ne s'affiche pas du tout
 * (pas de section vide).
 */
export function RelatedPages({
  slug,
  title = 'Pages susceptibles de vous intéresser',
  eyebrow = 'Aller plus loin',
  background = 'creme',
}: RelatedPagesProps) {
  const related = getRelatedPages(slug);
  const items = [
    ...(related.parent ? [{ ...related.parent, _label: 'Service mère' }] : []),
    ...related.sameSilo.map((p) => ({ ...p, _label: undefined })),
    ...related.relatedServices.map((p) => ({
      ...p,
      _label: 'Service complémentaire',
    })),
    ...related.nearbyLocations.map((p) => ({
      ...p,
      _label: 'Zone voisine',
    })),
  ];

  if (items.length === 0) return null;

  return (
    <section
      className={`section-y ${
        background === 'creme'
          ? 'bg-[var(--color-creme)] border-y border-[var(--color-border)]'
          : ''
      }`}
    >
      <Container>
        <div className="max-w-3xl mb-10">
          <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
          <h2 className="mb-4 text-[var(--text-h2)]">{title}</h2>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {items.slice(0, 9).map((p) => (
            <li key={p.slug}>
              <Link
                href={p.path}
                className="group flex items-start justify-between gap-3 p-5 rounded-[var(--radius-md)] bg-[var(--color-pierre)] border border-[var(--color-border)] hover:border-[var(--color-ardoise)] hover:shadow-[var(--shadow-sm)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)]"
              >
                <div className="min-w-0">
                  {p._label && (
                    <span className="block text-[0.6875rem] uppercase tracking-wider font-bold text-[var(--color-terre-600)] mb-1">
                      {p._label}
                    </span>
                  )}
                  <span className="block font-bold text-[var(--color-ardoise)] leading-snug">
                    {p.title}
                  </span>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 shrink-0 text-[var(--color-gris-400)] group-hover:text-[var(--color-terre)] transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
