import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

type LegalPageLayoutProps = {
  slug: string;
  eyebrow?: string;
  title: string;
  /** Dernière mise à jour, format ISO. */
  updatedAt?: string;
  children: ReactNode;
};

/**
 * LegalPageLayout — template propre pour les pages légales.
 *
 * Hiérarchie HTML semantique (h1 unique, h2 par section), max-width lecture
 * confortable, breadcrumb intégré.
 */
export function LegalPageLayout({
  slug,
  eyebrow = 'Informations légales',
  title,
  updatedAt,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <section className="bg-[var(--color-pierre)] pt-8 md:pt-12 pb-4">
        <Container>
          <Breadcrumb slug={slug} />
        </Container>
      </section>

      <article className="py-8 md:py-16">
        <Container size="narrow">
          <header className="mb-10">
            <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
            <h1 className="mb-3">{title}</h1>
            {updatedAt && (
              <p className="text-[0.875rem] text-[var(--color-gris-600)]">
                Dernière mise à jour :{' '}
                {new Date(updatedAt).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            )}
          </header>

          <div
            className="prose-legal space-y-6 text-[1rem] text-[var(--color-gris-600)] leading-relaxed
                       [&>h2]:text-[1.375rem] [&>h2]:font-bold [&>h2]:text-[var(--color-ardoise)] [&>h2]:mt-10 [&>h2]:mb-3
                       [&>h3]:text-[1.125rem] [&>h3]:font-bold [&>h3]:text-[var(--color-ardoise)] [&>h3]:mt-6 [&>h3]:mb-2
                       [&_a]:underline [&_a]:text-[var(--color-terre)] hover:[&_a]:opacity-80
                       [&_strong]:text-[var(--color-ardoise)]"
          >
            {children}
          </div>
        </Container>
      </article>
    </>
  );
}
