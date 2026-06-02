import type { ReactNode } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { Reassurance } from '@/components/sections/Reassurance';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { RealisationsCarousel } from '@/components/sections/RealisationsCarousel';
import { FAQ } from '@/components/sections/FAQ';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { RelatedPages } from '@/components/sections/RelatedPages';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  getFAQSchema,
  getHowToSchema,
  getLocalServiceSchema,
} from '@/lib/seo/schemas';
import { SERVICES } from '@/data/services';
import { getLocationBySlug } from '@/data/locations';
import { getFAQForService } from '@/data/faq';
import type { FAQItem } from '@/data/faq';
import type { ServiceCategory } from '@/data/types';
import { SITE } from '@/lib/constants';
import { requirePage } from '@/lib/pages';

/**
 * ServiceVillePageLayout — template pour les pages `{service}-{ville}`.
 *
 * Cible : 1500+ mots avec contenu unique combinant service + spécificité ville.
 * Schemas locaux : Service localisé (areaServed:City), HowTo, FAQPage, BreadcrumbList.
 */

export type ServiceVillePageContent = {
  slug: string;
  service: ServiceCategory;
  villeSlug: string;
  h1: ReactNode;
  heroSubtitle: string;
  /** Présentation locale du service (300-500 mots). */
  presentation: ReactNode;
  /** Raisons spécifiques à cette ville pour ce service. */
  raisonsLocales: Array<{ title: string; description: string }>;
  /** Risques de NE PAS faire ce service localement. */
  risques: Array<{ title: string; description: string }>;
  /** Étapes de la méthode (4-6 recommandé). */
  methode: Array<{ title: string; description: string }>;
  /** FAQ optionnelle locale ; sinon retombe sur la FAQ du service. */
  faqLocale?: FAQItem[];
};

export function ServiceVillePageLayout({
  content,
}: {
  content: ServiceVillePageContent;
}) {
  const service = SERVICES[content.service];
  const ville = getLocationBySlug(content.villeSlug);
  if (!ville) {
    throw new Error(
      `[ServiceVillePageLayout] Ville inconnue : ${content.villeSlug}`,
    );
  }
  const page = requirePage(content.slug);
  const faq = content.faqLocale ?? getFAQForService(content.service);

  return (
    <>
      <Hero
        variant="service-ville"
        eyebrow={`${service.shortHeadline} · ${ville.name}`}
        title={content.h1}
        subtitle={content.heroSubtitle}
        imageSlug={service.imageSlug}
        breadcrumbSlug={content.slug}
        secondaryCtaLabel={`Devis ${service.name.toLowerCase()} ${ville.name}`}
      />

      {/* Présentation locale */}
      <section className="section-y">
        <Container size="narrow">
          <Eyebrow className="mb-3">
            {service.name} · {ville.name}
          </Eyebrow>
          <h2 className="mb-6">
            {service.name} à {ville.name} : notre savoir-faire
          </h2>
          <div className="prose prose-lg max-w-none text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed space-y-4 [&_strong]:text-[var(--color-ardoise)]">
            {content.presentation}
          </div>
        </Container>
      </section>

      {/* Raisons locales */}
      <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Pourquoi nous choisir à {ville.name}</Eyebrow>
            <h2 className="mb-4">
              {service.name} à {ville.name} : ce qui fait la différence
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.raisonsLocales.map((r) => (
              <li key={r.title} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-garantie-100)] text-[var(--color-garantie)] grid place-items-center">
                  <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[1.0625rem] font-bold text-[var(--color-ardoise)] mb-2">
                    {r.title}
                  </h3>
                  <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Risques */}
      <section className="section-y">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Ce que vous évitez</Eyebrow>
            <h2 className="mb-4">
              Les risques d'une toiture non entretenue à {ville.name}
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.risques.map((r) => (
              <li
                key={r.title}
                className="rounded-[var(--radius-lg)] bg-[var(--color-urgence-100)]/50 border border-[var(--color-urgence)]/15 p-6 flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-urgence)] text-[var(--color-pierre)] grid place-items-center">
                  <AlertTriangle
                    className="w-5 h-5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-[1.0625rem] font-bold text-[var(--color-ardoise)] mb-2">
                    {r.title}
                  </h3>
                  <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Méthode */}
      <section className="section-y bg-[var(--color-ardoise)] text-[var(--color-pierre)]">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3 !text-[var(--color-terre-300)]">
              Notre méthode
            </Eyebrow>
            <h2 className="mb-4 text-[var(--color-pierre)]">
              Comment se déroule un {service.name.toLowerCase()} à {ville.name}
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {content.methode.map((step, i) => (
              <li key={step.title} className="relative pl-14">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[var(--color-terre-600)] text-[var(--color-pierre)] grid place-items-center font-bold text-[1rem]"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[1.0625rem] font-bold text-[var(--color-pierre)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[0.9375rem] text-[var(--color-gris-300)] leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Button
              href="/demande-devis"
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="w-5 h-5" />}
            >
              Démarrer mon projet à {ville.name}
            </Button>
          </div>
        </Container>
      </section>

      {/* Zone d'intervention élargie autour de la ville */}
      <section className="section-y">
        <Container>
          <div className="max-w-3xl mb-10">
            <Eyebrow className="mb-3">Quartiers couverts</Eyebrow>
            <h2 className="mb-4">
              {service.name} dans tous les quartiers de {ville.name}
            </h2>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {ville.quartiers.map((q) => (
              <li
                key={q}
                className="flex items-center gap-2 px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-creme)] border border-[var(--color-border)]"
              >
                <MapPin
                  className="w-4 h-4 text-[var(--color-terre)] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-semibold text-[var(--color-ardoise)] truncate">
                  {q}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <RealisationsCarousel
        eyebrow={`Réalisations ${service.name.toLowerCase()}`}
        title={`Nos chantiers ${service.name.toLowerCase()} à ${ville.name}`}
        filterService={content.service}
        filterVille={content.villeSlug}
      />

      <FAQ
        items={faq}
        title={`Questions fréquentes — ${service.name.toLowerCase()} ${ville.name}`}
        intro="Tout ce que vous voulez savoir avant de nous confier votre toiture."
        background="creme"
      />

      <AvisGoogle filterCity={ville.name} />

      <Reassurance />

      <RelatedPages
        slug={content.slug}
        title="Pages susceptibles de vous intéresser"
        eyebrow="Maillage local"
      />

      <CTAFinal
        title={`${service.name} à ${ville.name} : votre devis en 24h`}
        subtitle={`Décrivez votre projet en 2 minutes. Réponse sous 24h ouvrées avec un devis détaillé pour votre intervention à ${ville.nameInflected}.`}
      />

      {/* Schemas SEO */}
      <JsonLd
        data={getLocalServiceSchema({
          name: page.title,
          description: page.seoDescription,
          serviceType: service.name,
          url: `${SITE.url}${page.path}`,
          villeSlug: content.villeSlug,
        })}
      />
      <JsonLd
        data={getHowToSchema({
          name: `${service.name} à ${ville.name}`,
          description: `Méthode d'intervention pour un ${service.name.toLowerCase()} à ${ville.name}.`,
          steps: content.methode.map((s) => ({
            name: s.title,
            text: s.description,
          })),
        })}
      />
      <JsonLd data={getFAQSchema(faq)} />
    </>
  );
}
