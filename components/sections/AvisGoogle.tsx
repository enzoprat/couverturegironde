import { Star, ExternalLink, PenLine } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AVIS, formatAvisDate, type AvisClient } from '@/data/avis';
import { SOCIAL, TRUST } from '@/lib/constants';

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
 * Politique zéro-placeholder : n'affiche QUE des avis Google Business
 * Profile réels (source data/avis.ts). Tant que Liroy n'a pas fourni les
 * vrais avis, la section affiche l'en-tête + un CTA direct vers la fiche
 * Google, sans jamais fabriquer de cartes.
 */
export function AvisGoogle({
  eyebrow = 'Avis clients',
  title = 'Ce que disent nos clients en Gironde',
  intro,
  filterCity,
  limit = 6,
}: AvisGoogleProps) {
  const displayed = filterCity
    ? AVIS.filter(
        (a) =>
          a.city.localeCompare(filterCity, 'fr', { sensitivity: 'base' }) === 0,
      ).slice(0, limit)
    : AVIS.slice(0, limit);

  const hasAvis = displayed.length > 0;

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

        {hasAvis ? (
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
        ) : (
          <div className="p-8 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-creme)] text-center">
            <p className="text-[1rem] text-[var(--color-gris-600)] leading-relaxed max-w-2xl mx-auto mb-6">
              Nos avis clients sont publics et vérifiables sur notre fiche
              Google Business Profile. Nous préférons vous y renvoyer plutôt
              que d'afficher des extraits que vous ne pourriez pas
              contre-vérifier.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                href={SOCIAL.google}
                external
                variant="primary"
                iconRight={<ExternalLink className="w-4 h-4" />}
                aria-label="Consulter les avis Google (nouvel onglet)"
              >
                Consulter les avis Google
              </Button>
              <Button
                href={SOCIAL.googleReview}
                external
                variant="secondary"
                iconRight={<PenLine className="w-4 h-4" />}
                aria-label="Laisser un avis sur Google (nouvel onglet)"
              >
                Laisser un avis
              </Button>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          <Button href="/realisations" variant="ghost">
            Découvrir nos réalisations
          </Button>
          {hasAvis && (
            <Button
              href={SOCIAL.google}
              variant="ghost"
              iconRight={<ExternalLink className="w-4 h-4" />}
            >
              Voir tous les avis Google
            </Button>
          )}
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
          {avis.author}
          {avis.city ? ` · ${avis.city}` : ''}
        </span>
        <span className="text-[var(--color-gris-600)]">
          {formatAvisDate(avis.date)}
        </span>
      </div>
    </Card>
  );
}
