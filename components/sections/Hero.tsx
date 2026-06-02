import { ArrowRight, Phone, ShieldCheck, Star, Award, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SmartImage } from '@/components/ui/SmartImage';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { NAP, TRUST } from '@/lib/constants';
import type { ReactNode } from 'react';

export type HeroVariant = 'home' | 'service' | 'ville' | 'service-ville' | 'urgence';

type HeroProps = {
  variant: HeroVariant;
  /** Petit label au-dessus du H1 (ex: "Bordeaux · Mérignac · Pessac"). */
  eyebrow?: string;
  /** Le H1 de la page. Peut contenir des spans pour accent Terre cuite. */
  title: ReactNode;
  /** Phrase d'accroche sous le H1. */
  subtitle: string;
  /** Slug d'image pour SmartImage. */
  imageSlug?: string;
  /** Pour le breadcrumb dynamique. Optionnel — vide = pas de fil d'Ariane. */
  breadcrumbSlug?: string;
  /** Override l'image variant (par défaut : service-ville et home ont des layouts différents). */
  /** CTA secondaire texte. */
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

/**
 * Hero — composant unique pour TOUS les types de pages.
 *
 * Comportement variant :
 *  - home : grande image à droite, badges trust, 2 CTA
 *  - service : structure proche home, image contextualisée
 *  - ville / service-ville : breadcrumb au-dessus du H1, sous-titre local
 *  - urgence : fond Ardoise, ton plus direct, CTA téléphone ULTRA-prioritaire
 */
export function Hero({
  variant,
  eyebrow,
  title,
  subtitle,
  imageSlug,
  breadcrumbSlug,
  secondaryCtaLabel = 'Demander un devis gratuit',
  secondaryCtaHref = '/demande-devis',
}: HeroProps) {
  const isUrgence = variant === 'urgence';

  return (
    <section
      className={
        isUrgence
          ? 'relative bg-[var(--color-ardoise)] text-[var(--color-pierre)] py-12 md:py-20'
          : 'relative bg-[var(--color-pierre)] py-12 md:py-20'
      }
    >
      <Container>
        {breadcrumbSlug && (
          <div className="mb-6">
            <Breadcrumb
              slug={breadcrumbSlug}
              variant={isUrgence ? 'light' : 'dark'}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            {eyebrow && (
              <Eyebrow
                className={
                  isUrgence ? 'mb-5 text-[var(--color-terre)]' : 'mb-5'
                }
              >
                {eyebrow}
              </Eyebrow>
            )}

            <h1
              className={
                isUrgence
                  ? 'text-display mb-6 text-[var(--color-pierre)]'
                  : 'text-display mb-6'
              }
            >
              {title}
            </h1>

            <p
              className={
                isUrgence
                  ? 'text-lead max-w-2xl mb-8 text-[var(--color-gris-300)]'
                  : 'text-lead max-w-2xl mb-8'
              }
            >
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                href={NAP.phoneHref}
                size="lg"
                variant="primary"
                iconLeft={<Phone className="w-5 h-5" />}
              >
                {isUrgence
                  ? `Appeler maintenant — ${NAP.phoneDisplay}`
                  : `Appeler ${NAP.phoneDisplay}`}
              </Button>
              <Button
                href={secondaryCtaHref}
                size="lg"
                variant={isUrgence ? 'inverse' : 'secondary'}
                iconRight={<ArrowRight className="w-5 h-5" />}
              >
                {secondaryCtaLabel}
              </Button>
            </div>

            <ul className="flex flex-wrap gap-2" aria-label="Garanties">
              <li>
                <Badge variant="garantie" icon={<ShieldCheck />}>
                  Garantie décennale
                </Badge>
              </li>
              <li>
                <Badge variant="or" icon={<Star />}>
                  {TRUST.googleRating}/5 sur {TRUST.googleReviewCount} avis
                  Google
                </Badge>
              </li>
              <li>
                <Badge variant="or" icon={<Award />}>
                  {TRUST.experienceYears} ans d'expérience
                </Badge>
              </li>
              <li>
                <Badge variant="urgence" icon={<Clock />}>
                  Urgence {TRUST.emergencyAvailability}
                </Badge>
              </li>
            </ul>
          </div>

          {imageSlug && (
            <div className="lg:col-span-5">
              <SmartImage
                variant="hero"
                slug={imageSlug}
                alt=""
                aspect="5/4"
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
