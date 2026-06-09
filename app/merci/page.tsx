import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { NAP } from '@/lib/constants';

const PAGE = requirePage('merci');

/**
 * /merci, page de remerciement post-conversion.
 *
 * noindex obligatoire : on ne veut pas qu'elle ranke ni qu'elle dilue le jus
 * SEO. Idéal pour brancher un événement de conversion GA4 / GTM / Plausible.
 */
export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription || 'Demande reçue, nous revenons vers vous.',
  path: PAGE.path,
  noindex: true,
});

export default function Page() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-pierre)]">
      <Container size="narrow">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-garantie-100)] text-[var(--color-garantie)] mb-8">
            <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
          </div>

          <h1 className="mb-5">Votre demande est bien reçue.</h1>
          <p className="text-lead mb-10 max-w-xl mx-auto">
            Merci pour votre confiance. Un de nos artisans étudie votre projet
            et vous recontacte sous <strong>24h ouvrées</strong> avec une
            proposition détaillée.
          </p>

          <div className="rounded-[var(--radius-xl)] bg-[var(--color-creme)] border border-[var(--color-border)] p-6 md:p-8 mb-10 text-left">
            <h2 className="text-[1.25rem] font-bold mb-4">Et maintenant ?</h2>
            <ul className="space-y-3 text-[0.9375rem] text-[var(--color-gris-600)]">
              <li>
                <strong className="text-[var(--color-ardoise)]">
                  Nous étudions votre demande.
                </strong>{' '}
                Si nécessaire, nous vous appelons pour préciser quelques
                éléments avant de chiffrer.
              </li>
              <li>
                <strong className="text-[var(--color-ardoise)]">
                  Visite ou diagnostic photo selon le cas.
                </strong>{' '}
                Toujours gratuite et sans engagement.
              </li>
              <li>
                <strong className="text-[var(--color-ardoise)]">
                  Devis détaillé sous 24-48h.
                </strong>{' '}
                Chiffrage transparent, conditions claires, aucune surprise.
              </li>
            </ul>
          </div>

          <p className="text-[0.9375rem] text-[var(--color-gris-600)] mb-6">
            Pour les urgences toiture, vous pouvez aussi nous joindre
            directement :
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              href={NAP.phoneHref}
              variant="primary"
              size="lg"
              iconLeft={<Phone className="w-5 h-5" />}
            >
              {NAP.phoneDisplay}
            </Button>
            <Button href="/" variant="ghost" size="lg">
              Retour à l'accueil
            </Button>
          </div>

          <p className="mt-12 text-[0.8125rem] text-[var(--color-gris-600)]">
            En attendant, vous pouvez{' '}
            <Link
              href="/realisations"
              className="underline hover:text-[var(--color-terre)]"
            >
              découvrir nos réalisations récentes
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
