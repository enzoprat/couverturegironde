import Image from 'next/image';
import { ExternalLink, PenLine } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AvisCarousel } from '@/components/sections/AvisCarousel';
import { AVIS } from '@/data/avis';
import { SOCIAL, TRUST } from '@/lib/constants';

type AvisGoogleProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** Filtrer par ville (pour pages villes). */
  filterCity?: string;
  /** Nombre d'avis à afficher (par défaut 10). */
  limit?: number;
};

/** Étoile Google (jaune #FBBC05), rendue en SVG inline pour éviter un import. */
function GoogleStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

/**
 * AvisGoogle — section avis clients, présentée comme un carrousel de cartes
 * façon widget Google (note globale + logo Google + cartes scrollables).
 *
 * Politique zéro-placeholder : n'affiche QUE des avis Google Business Profile
 * réels (source data/avis.ts, recopiés depuis la fiche GBP).
 *
 * Le texte des avis n'est JAMAIS modifié ni enrichi de liens : le maillage
 * interne passe par le tag « prestation » affiché sous chaque avis.
 */
export function AvisGoogle({
  eyebrow,
  title = 'Avis vérifiés de nos clients',
  intro,
  filterCity,
  limit = 10,
}: AvisGoogleProps) {
  const filtered = filterCity
    ? AVIS.filter(
        (a) =>
          a.city.localeCompare(filterCity, 'fr', { sensitivity: 'base' }) === 0,
      )
    : AVIS;

  // Sur une page ville sans avis local, on retombe sur l'ensemble des avis
  // plutôt que d'afficher une section vide.
  const displayed = (filtered.length > 0 ? filtered : AVIS).slice(0, limit);
  const hasAvis = displayed.length > 0;

  return (
    <section className="section-y bg-[var(--color-creme)]">
      <Container>
        <div className="text-center mb-12 max-w-3xl mx-auto">
          {eyebrow && (
            <p className="text-[0.8125rem] font-bold uppercase tracking-[0.18em] text-[var(--color-terre)] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="mb-5">{title}</h2>

          <div
            className="flex items-center justify-center gap-1 mb-3"
            role="img"
            aria-label={`Note ${TRUST.googleRating} sur 5`}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <GoogleStar key={i} className="w-7 h-7 md:w-8 md:h-8" />
            ))}
          </div>

          <p className="text-[var(--color-gris-600)] mb-5">
            Note {TRUST.googleRating}/5 basée sur{' '}
            <strong className="text-[var(--color-ardoise)]">
              {TRUST.googleReviewCount} avis
            </strong>
          </p>

          <a
            href={SOCIAL.google}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir tous les avis sur notre fiche Google (nouvel onglet)"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-terre)]"
          >
            <Image
              src="/google-g.svg"
              alt="Google"
              width={18}
              height={18}
              unoptimized
            />
            <span className="text-[0.875rem] font-semibold text-[var(--color-ardoise)]">
              Avis vérifiés sur Google
            </span>
            <ExternalLink
              className="w-3.5 h-3.5 text-[var(--color-gris-600)]"
              aria-hidden="true"
            />
          </a>

          {intro && (
            <p className="text-lead mt-6">{intro}</p>
          )}
        </div>

        {hasAvis ? (
          <AvisCarousel avis={displayed} />
        ) : (
          <div className="p-8 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white text-center">
            <p className="text-[1rem] text-[var(--color-gris-600)] leading-relaxed max-w-2xl mx-auto mb-6">
              Nos avis clients sont publics et vérifiables sur notre fiche
              Google Business Profile.
            </p>
            <Button
              href={SOCIAL.google}
              external
              variant="primary"
              iconRight={<ExternalLink className="w-4 h-4" />}
            >
              Consulter les avis Google
            </Button>
          </div>
        )}

        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          <Button href="/realisations" variant="ghost">
            Découvrir nos réalisations
          </Button>
          <Button
            href={SOCIAL.googleReview}
            external
            variant="ghost"
            iconRight={<PenLine className="w-4 h-4" />}
          >
            Laisser un avis
          </Button>
        </div>
      </Container>
    </section>
  );
}
