import { AlertTriangle, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { NAP } from '@/lib/constants';

type UrgenceProps = {
  /** Compact = bandeau, ne prend pas tout l'écran. Full = section dédiée pleine. */
  variant?: 'compact' | 'full';
};

/**
 * Urgence — bloc d'urgence fuite toiture.
 *
 * Le ton est direct, calme, rassurant. Le bleu urgence est utilisé
 * (et non le rouge — moins anxiogène et plus pro).
 */
export function Urgence({ variant = 'compact' }: UrgenceProps) {
  if (variant === 'compact') {
    return (
      <section className="py-10 md:py-12 bg-[var(--color-urgence-100)] border-y border-[var(--color-urgence)]/20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="shrink-0 w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-urgence)] text-[var(--color-pierre)] grid place-items-center">
                <AlertTriangle
                  className="w-6 h-6"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--color-ardoise)] mb-1.5">
                  Une fuite ? Un dégât des eaux ? On intervient en urgence.
                </h3>
                <p className="text-[0.9375rem] text-[var(--color-gris-600)]">
                  7j/7 sur Bordeaux Métropole. Mise hors d'eau sous quelques
                  heures, devis de réparation détaillé.
                </p>
              </div>
            </div>
            <Button
              href={NAP.phoneHref}
              variant="primary"
              size="lg"
              iconLeft={<Phone className="w-5 h-5" />}
              className="bg-[var(--color-urgence)] hover:bg-[var(--color-urgence)] hover:opacity-90"
            >
              {NAP.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  // variant === 'full'
  return (
    <section className="section-y bg-[var(--color-urgence)] text-[var(--color-pierre)]">
      <Container>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-pierre)]/15 mb-6">
            <AlertTriangle
              className="w-4 h-4 text-[var(--color-pierre)]"
              aria-hidden="true"
            />
            <span className="text-[0.8125rem] font-bold uppercase tracking-wider">
              Service urgence 7j/7
            </span>
          </div>
          <h2 className="text-display mb-6 text-[var(--color-pierre)]">
            Toiture qui fuit ? Tempête ? Sinistre ?
          </h2>
          <p className="text-lead mb-8 text-[var(--color-pierre)]/85 max-w-2xl">
            Vous êtes prioritaire. Un appel suffit pour déclencher une
            intervention de mise hors d'eau dans la journée (heures ouvrées) ou
            le lendemain matin pour les urgences nocturnes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button
              href={NAP.phoneHref}
              variant="primary"
              size="lg"
              iconLeft={<Phone className="w-5 h-5" />}
              className="bg-[var(--color-pierre)] !text-[var(--color-urgence)] hover:bg-[var(--color-creme)] hover:!text-[var(--color-urgence)] !shadow-none"
            >
              Appeler immédiatement · {NAP.phoneDisplay}
            </Button>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <UrgenceFeature value="2-4h" label="délai d'intervention moyen" />
            <UrgenceFeature value="7j/7" label="6h–22h sans interruption" />
            <UrgenceFeature value="Décennale" label="travaux garantis" />
          </ul>
        </div>
      </Container>
    </section>
  );
}

function UrgenceFeature({ value, label }: { value: string; label: string }) {
  return (
    <li>
      <div className="flex items-center gap-2 mb-1">
        <Clock className="w-4 h-4" aria-hidden="true" />
        <span className="font-extrabold text-[1.5rem]">{value}</span>
      </div>
      <p className="text-[0.875rem] text-[var(--color-pierre)]/80">{label}</p>
    </li>
  );
}
