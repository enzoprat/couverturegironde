import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { NAP } from '@/lib/constants';

type CTAFinalProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** Texte du CTA secondaire. */
  ctaSecondaryLabel?: string;
  /** URL du CTA secondaire (par défaut /demande-devis). */
  ctaSecondaryHref?: string;
};

/**
 * CTAFinal — bloc de conversion final, présent sur quasi toutes les pages.
 *
 * Fond Ardoise pour contraste maximum après défilement.
 * 2 CTA : téléphone (primaire) + formulaire devis (secondaire).
 */
export function CTAFinal({
  eyebrow = 'Devis gratuit · Réponse sous 24h',
  title = 'Un projet de toiture à Bordeaux ou en Gironde ?',
  subtitle = "Décrivez-nous votre besoin en 2 minutes. Nous revenons vers vous sous 24h ouvrées avec un devis détaillé, transparent et sans engagement.",
  ctaSecondaryLabel = 'Devis en ligne',
  ctaSecondaryHref = '/demande-devis',
}: CTAFinalProps) {
  return (
    <section className="section-y bg-[var(--color-ardoise)] text-[var(--color-pierre)]">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow className="mb-3 !text-[var(--color-terre-300)]">
            {eyebrow}
          </Eyebrow>
          <h2 className="mb-6 text-[var(--color-pierre)]">{title}</h2>
          <p className="text-lead mb-8 text-[var(--color-gris-300)]">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              href={NAP.phoneHref}
              variant="primary"
              size="lg"
              iconLeft={<Phone className="w-5 h-5" />}
            >
              {NAP.phoneDisplay}
            </Button>
            <Button
              href={ctaSecondaryHref}
              variant="inverse"
              size="lg"
              iconRight={<ArrowRight className="w-5 h-5" />}
            >
              {ctaSecondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
