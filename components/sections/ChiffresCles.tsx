import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TRUST } from '@/lib/constants';

type ChiffresClesProps = {
  variant?: 'light' | 'dark';
};

const STATS = [
  { value: `${TRUST.experienceYears} ans`, label: "d'expérience en Gironde" },
  { value: `${TRUST.googleRating}/5`, label: `note Google sur ${TRUST.googleReviewCount} avis` },
  { value: '24h', label: 'délai de réponse devis' },
  { value: '7j/7', label: 'pour les urgences toiture' },
];

/**
 * ChiffresCles — bandeau chiffres clés. Léger, à utiliser dans le flux d'une page
 * comme respiration visuelle. Pas obligatoire sur toutes les pages.
 */
export function ChiffresCles({ variant = 'light' }: ChiffresClesProps) {
  const isDark = variant === 'dark';
  return (
    <section
      className={
        isDark
          ? 'py-12 md:py-16 bg-[var(--color-ardoise)] text-[var(--color-pierre)]'
          : 'py-12 md:py-16 bg-[var(--color-pierre)] border-y border-[var(--color-border)]'
      }
    >
      <Container>
        <div className="max-w-2xl mb-10">
          <Eyebrow
            className={isDark ? 'mb-3 !text-[var(--color-terre-300)]' : 'mb-3'}
          >
            Chiffres clés
          </Eyebrow>
          <h2
            className={
              isDark
                ? 'text-[var(--text-h2)] text-[var(--color-pierre)]'
                : 'text-[var(--text-h2)]'
            }
          >
            La confiance se mesure
          </h2>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((s) => (
            <li key={s.label}>
              <div
                className={
                  isDark
                    ? 'text-[2.25rem] md:text-[3rem] font-extrabold leading-none text-[var(--color-terre)] mb-2'
                    : 'text-[2.25rem] md:text-[3rem] font-extrabold leading-none text-[var(--color-ardoise)] mb-2'
                }
              >
                {s.value}
              </div>
              <div
                className={
                  isDark
                    ? 'text-[0.9375rem] text-[var(--color-gris-300)]'
                    : 'text-[0.9375rem] text-[var(--color-gris-600)]'
                }
              >
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
