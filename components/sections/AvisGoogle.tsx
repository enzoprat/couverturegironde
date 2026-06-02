import { Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AVIS, formatAvisDate, type AvisClient } from '@/data/avis';
import { TRUST } from '@/lib/constants';

type AvisGoogleProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** Filtrer par ville (pour pages villes). */
  filterCity?: string;
  /** Nombre d'avis à afficher (par défaut 6). */
  limit?: number;
};

/**
 * AvisGoogle — section avis clients.
 *
 * Affiche les avis depuis `data/avis.ts` (en attendant la sync Google Places API).
 * Si filterCity est fourni, on filtre. Si aucun avis ne matche, on retombe sur
 * les 6 derniers avis tous confondus (jamais une section vide).
 */
export function AvisGoogle({
  eyebrow = 'Avis clients',
  title = 'Ce que disent nos clients en Gironde',
  intro,
  filterCity,
  limit = 6,
}: AvisGoogleProps) {
  let displayed = filterCity
    ? AVIS.filter(
        (a) =>
          a.city.localeCompare(filterCity, 'fr', { sensitivity: 'base' }) === 0,
      ).slice(0, limit)
    : AVIS.slice(0, limit);

  if (displayed.length === 0) displayed = AVIS.slice(0, limit);

  return (
    <section className="section-y">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
            <h2 className="mb-4">{title}</h2>
            {intro && <p className="text-lead">{intro}</p>}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 text-[var(--color-or)]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="text-[0.9375rem]">
              <strong className="text-[var(--color-ardoise)]">
                {TRUST.googleRating}/5
              </strong>{' '}
              <span className="text-[var(--color-gris-600)]">
                · {TRUST.googleReviewCount} avis Google
              </span>
            </div>
          </div>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayed.map((avis) => (
            <li key={avis.id}>
              <AvisCard avis={avis} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button href="/realisations" variant="ghost">
            Découvrir nos réalisations
          </Button>
        </div>
      </Container>
    </section>
  );
}

function AvisCard({ avis }: { avis: AvisClient }) {
  return (
    <Card interactive={false} className="h-full flex flex-col">
      <div className="flex items-center gap-1 text-[var(--color-or)] mb-3">
        {Array.from({ length: avis.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <p className="text-[1rem] text-[var(--color-ardoise)] leading-relaxed mb-5 flex-1">
        «&nbsp;{avis.text}&nbsp;»
      </p>
      <div className="flex items-center justify-between text-[0.8125rem] pt-4 border-t border-[var(--color-border)]">
        <span className="font-semibold text-[var(--color-ardoise)]">
          {avis.author} · {avis.city}
        </span>
        <span className="text-[var(--color-gris-600)]">
          {formatAvisDate(avis.date)}
        </span>
      </div>
    </Card>
  );
}
