import { Hero } from '@/components/sections/Hero';
import { Reassurance } from '@/components/sections/Reassurance';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { RealisationsCarousel } from '@/components/sections/RealisationsCarousel';
import { FAQ } from '@/components/sections/FAQ';
import { ZonesDesservies } from '@/components/sections/ZonesDesservies';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { RelatedPages } from '@/components/sections/RelatedPages';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  getFAQSchema,
  getHowToSchema,
  getReviewSchemas,
  getServiceSchema,
} from '@/lib/seo/schemas';
import { getFAQForService } from '@/data/faq';
import { AVIS } from '@/data/avis';
import { SERVICES, type ServiceDefinition } from '@/data/services';
import type { ServiceCategory } from '@/data/types';
import type { ReactNode } from 'react';
import { Check, AlertTriangle, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { requirePage } from '@/lib/pages';

/**
 * ServicePageLayout — template définitif pour les pages service Bordeaux.
 *
 * Structure (brief validé) :
 *   Hero → Présentation → Pourquoi ce service → Risques → Méthode → FAQ →
 *   Réalisations → CTA → Maillage interne
 *
 * Les contenus longs (présentation, risques, méthode) sont passés en props,
 * pas codés en dur dans le template. Cela permet d'industrialiser tout en
 * gardant un contenu UNIQUE par page (anti-duplicate Google).
 */

export type ServicePageContent = {
  service: ServiceCategory;
  slug: string;
  /** H1 affiché (peut contenir des <span> pour accents). */
  h1: ReactNode;
  /** Phrase d'accroche du hero. */
  heroSubtitle: string;
  /** Titre court pour breadcrumb / cards. */
  shortTitle: string;
  /** Introduction longue (200-400 mots) sous le hero, en HTML léger. */
  presentation: ReactNode;
  /** Pourquoi faire appel à un pro pour ce service (3-5 raisons). */
  pourquoiRaisons: Array<{ title: string; description: string }>;
  /** Risques à NE PAS traiter ce besoin (urgence et conséquences). */
  risques: Array<{ title: string; description: string }>;
  /** Méthode d'intervention en N étapes (4-6 recommandé). */
  methode: Array<{ title: string; description: string }>;
};

export function ServicePageLayout({ content }: { content: ServicePageContent }) {
  const service: ServiceDefinition = SERVICES[content.service];
  const faqItems = getFAQForService(content.service);
  const page = requirePage(content.slug);

  return (
    <>
      <Hero
        variant="service"
        eyebrow={service.shortHeadline}
        title={content.h1}
        subtitle={content.heroSubtitle}
        imageSlug={service.imageSlug}
        breadcrumbSlug={content.slug}
        secondaryCtaLabel={`Devis ${service.name.toLowerCase()}`}
      />

      {/* Présentation */}
      <section className="section-y">
        <Container size="narrow">
          <Eyebrow className="mb-3">Présentation</Eyebrow>
          <h2 className="mb-6">À propos de {service.name.toLowerCase()}</h2>
          <div className="prose prose-lg max-w-none text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed space-y-4 [&>p>strong]:text-[var(--color-ardoise)]">
            {content.presentation}
          </div>
        </Container>
      </section>

      {/* Pourquoi faire appel à un professionnel */}
      <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Pourquoi un professionnel</Eyebrow>
            <h2 className="mb-4">
              Pourquoi confier {service.name.toLowerCase()} à un artisan
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.pourquoiRaisons.map((r) => (
              <li key={r.title} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-garantie-100)] text-[var(--color-garantie)] grid place-items-center">
                  <Check className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
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

      {/* Risques de NE PAS traiter */}
      <section className="section-y">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Ce que vous évitez</Eyebrow>
            <h2 className="mb-4">
              Les risques d'une toiture mal entretenue
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

      {/* Méthode d'intervention */}
      <section className="section-y bg-[var(--color-ardoise)] text-[var(--color-pierre)]">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3 !text-[var(--color-terre-300)]">
              Notre méthode
            </Eyebrow>
            <h2 className="mb-4 text-[var(--color-pierre)]">
              Comment se déroule {service.name.toLowerCase()}
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {content.methode.map((step, i) => (
              <li key={step.title} className="relative pl-14">
                <span
                  className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[var(--color-terre-600)] text-[var(--color-pierre)] grid place-items-center font-bold text-[1rem]"
                  aria-hidden="true"
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
              Démarrer mon projet — devis gratuit
            </Button>
          </div>
        </Container>
      </section>

      <RealisationsCarousel
        eyebrow="Chantiers réalisés"
        title={`Nos chantiers de ${service.name.toLowerCase()}`}
        intro="Des exemples concrets de notre savoir-faire sur Bordeaux Métropole."
        filterService={content.service}
      />

      <FAQ
        items={faqItems}
        title={`Questions fréquentes sur ${service.name.toLowerCase()}`}
        intro="Les réponses aux questions que nos clients nous posent le plus souvent."
        background="creme"
      />

      <AvisGoogle title="Ce que disent nos clients" />

      <Reassurance />

      <ZonesDesservies />

      <RelatedPages
        slug={content.slug}
        title="Découvrir nos autres services"
        eyebrow="Services complémentaires"
      />

      <CTAFinal />

      {/* SEO schemas spécifiques service */}
      <JsonLd
        data={getServiceSchema({
          name: page.title,
          description: page.seoDescription,
          serviceType: service.name,
          url: `${SITE.url}${page.path}`,
        })}
      />
      <JsonLd data={getFAQSchema(faqItems)} />
      <JsonLd
        data={getHowToSchema({
          name: `Comment se déroule un ${service.name.toLowerCase()}`,
          description: `Méthode étape par étape pour un ${service.name.toLowerCase()} professionnel à Bordeaux et en Gironde.`,
          steps: content.methode.map((s) => ({
            name: s.title,
            text: s.description,
          })),
        })}
      />
      <JsonLd
        data={getReviewSchemas(
          AVIS.slice(0, 6).map((a) => ({
            author: a.author,
            rating: a.rating,
            date: a.date,
            text: a.text,
          })),
        )}
      />
    </>
  );
}
