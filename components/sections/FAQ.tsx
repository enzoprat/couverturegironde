import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { cn } from '@/lib/utils';
import type { FAQItem } from '@/data/faq';

type FAQProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items: FAQItem[];
  /** Variante d'arrière-plan. */
  background?: 'pierre' | 'creme';
};

/**
 * FAQ — accordion 100% serveur, basé sur <details>/<summary> natifs.
 *
 * Avantages vs version client précédente :
 *  - 0 KB de JavaScript ajouté
 *  - Accessibilité native (clavier, lecteur d'écran)
 *  - Indexable même sans JS (Google voit le contenu déplié dans le HTML)
 *  - Compatible avec le schema FAQPage émis séparément par la page parente
 *
 * Le premier item est ouvert par défaut (open) pour l'UX.
 */
export function FAQ({
  eyebrow = 'Questions fréquentes',
  title = 'Vos questions, nos réponses',
  intro,
  items,
  background = 'pierre',
}: FAQProps) {
  if (items.length === 0) return null;

  return (
    <section
      className={cn(
        'section-y',
        background === 'creme' &&
          'bg-[var(--color-creme)] border-y border-[var(--color-border)]',
      )}
    >
      <Container size="narrow">
        <div className="mb-10 text-center">
          <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
          <h2 className="mb-4">{title}</h2>
          {intro && (
            <p className="text-lead max-w-2xl mx-auto">{intro}</p>
          )}
        </div>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={item.question}>
              <details
                className="group rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-creme)] overflow-hidden transition-colors"
                open={i === 0}
              >
                <summary className="tap-target flex items-center justify-between gap-4 p-5 md:p-6 cursor-pointer text-left [&::-webkit-details-marker]:hidden hover:bg-[var(--color-pierre)] transition-colors focus-visible:outline-none focus-visible:bg-[var(--color-pierre)]">
                  <span className="font-bold text-[1.0625rem] md:text-[1.125rem] text-[var(--color-ardoise)] leading-snug">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-terre)]/10 text-[var(--color-terre)] grid place-items-center text-[1.25rem] font-bold leading-none group-open:rotate-45 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)]"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                  <p>{item.answer}</p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
