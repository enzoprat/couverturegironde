import type { Metadata } from 'next';
import { Check, Clock, Phone, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Reassurance } from '@/components/sections/Reassurance';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { DevisForm } from '@/components/forms/DevisForm';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { NAP, TRUST } from '@/lib/constants';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonLiroySchema } from '@/lib/seo/schemas';

const PAGE = requirePage('demande-devis');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

/**
 * /demande-devis, page de conversion principale.
 *
 * Mise en page conçue pour maximiser la conversion :
 *  - hero allégé (peu de distraction)
 *  - formulaire à gauche, réassurance à droite (desktop)
 *  - téléphone visible en alternative
 *  - aucune navigation parasite (sticky téléphone toujours là)
 */
export default function Page() {
  return (
    <>
      <section className="bg-[var(--color-pierre)] pt-8 md:pt-12 pb-4">
        <Container>
          <Breadcrumb slug={PAGE.slug} />
        </Container>
      </section>

      <section className="py-8 md:py-12 bg-[var(--color-pierre)]">
        <Container>
          <div className="max-w-3xl mb-10">
            <Eyebrow className="mb-3">Devis gratuit · sans engagement</Eyebrow>
            <h1 className="text-display mb-5">
              Décrivez votre projet, nous{' '}
              <span className="text-[var(--color-terre)]">revenons vers vous sous 24h</span>
            </h1>
            <p className="text-lead">
              Démoussage, nettoyage, réparation, zinguerie ou projet plus
              complet : remplissez ce formulaire en 2 minutes. Un de nos
              artisans étudie votre demande et vous propose un devis détaillé,
              transparent et chiffré ligne par ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Formulaire, 3 colonnes desktop */}
            <div className="lg:col-span-3">
              <div className="rounded-[var(--radius-xl)] bg-[var(--color-creme)] border border-[var(--color-border)] p-6 md:p-8 lg:p-10">
                <DevisForm variant="long" />
              </div>
            </div>

            {/* Réassurance latérale, 2 colonnes desktop */}
            <aside className="lg:col-span-2 space-y-6">
              <a
                href={NAP.phoneHref}
                className="flex items-start gap-4 p-5 rounded-[var(--radius-lg)] bg-[var(--color-ardoise)] text-[var(--color-pierre)] hover:bg-[var(--color-ardoise-700)] transition-colors group"
              >
                <span className="shrink-0 w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-terre)] grid place-items-center">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-[0.75rem] uppercase tracking-wider font-bold text-[var(--color-terre)] mb-1">
                    Préférez appeler ?
                  </div>
                  <div className="text-[1.25rem] font-extrabold">
                    {NAP.phoneDisplay}
                  </div>
                  <div className="text-[0.875rem] text-[var(--color-gris-300)] mt-1">
                    LU-DI · 6h–22h · sans répondeur
                  </div>
                </div>
              </a>

              <div className="rounded-[var(--radius-lg)] bg-[var(--color-creme)] border border-[var(--color-border)] p-6">
                <h2 className="text-[1.125rem] font-bold mb-4">
                  Ce qui suit votre demande
                </h2>
                <ol className="space-y-4 text-[0.9375rem]">
                  <Step
                    n={1}
                    title="Sous 24h ouvrées"
                    description="Un artisan étudie votre demande et vous rappelle pour préciser le besoin."
                  />
                  <Step
                    n={2}
                    title="Visite gratuite si nécessaire"
                    description="Sur place ou diagnostic par photos pour les cas simples. Toujours sans engagement."
                  />
                  <Step
                    n={3}
                    title="Devis détaillé sous 48h"
                    description="Chiffrage ligne par ligne, conditions et délais clairs. Acompte limité, aucun piège."
                  />
                </ol>
              </div>

              <ul className="space-y-3">
                <Guarantee icon={<ShieldCheck />} text="Assurance décennale active depuis 2005" />
                <Guarantee icon={<Clock />} text={`${TRUST.responseTimeHours}h de délai de réponse moyen`} />
                <Guarantee icon={<Check />} text="Aucune sous-traitance, équipe interne" />
                <Guarantee icon={<Check />} text="Devis et déplacement gratuits" />
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <Reassurance />
      <AvisGoogle title="Pourquoi nos clients nous recommandent" />
      {/* Person Liroy — signal E-E-A-T sur la page devis */}
      <JsonLd data={getPersonLiroySchema()} />
    </>
  );
}

function Step({
  n,
  title,
  description,
}: {
  n: number;
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden="true"
        className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-terre)] text-[var(--color-pierre)] grid place-items-center font-bold text-[0.8125rem]"
      >
        {n}
      </span>
      <div>
        <div className="font-bold text-[var(--color-ardoise)]">{title}</div>
        <p className="text-[var(--color-gris-600)] text-[0.875rem] mt-0.5">
          {description}
        </p>
      </div>
    </li>
  );
}

function Guarantee({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-3 text-[0.9375rem]">
      <span className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-garantie-100)] text-[var(--color-garantie)] grid place-items-center">
        <span className="w-4 h-4 [&>svg]:w-4 [&>svg]:h-4">{icon}</span>
      </span>
      <span className="text-[var(--color-ardoise)] font-semibold">{text}</span>
    </li>
  );
}
