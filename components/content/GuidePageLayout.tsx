import type { ReactNode } from 'react';
import { CalendarDays, Clock, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { RelatedPages } from '@/components/sections/RelatedPages';
import { Reassurance } from '@/components/sections/Reassurance';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getFAQSchema } from '@/lib/seo/schemas';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import type { FAQItem } from '@/data/faq';
import { SITE, NAP } from '@/lib/constants';
import type { Metadata } from 'next';

/**
 * GuidePageLayout — template définitif pour les guides money-keyword.
 *
 * Structure 1500-2000 mots :
 *   Hero éditorial → Sommaire → Sections rédigées → FAQ → CTA → Maillage
 *
 * Schemas : Article + FAQPage + BreadcrumbList.
 */

export type GuideSection = {
  /** id pour ancre / sommaire */
  id: string;
  /** Titre h2 */
  title: string;
  /** Contenu HTML (paragraphes, listes, tableaux) */
  content: ReactNode;
};

export type GuidePageContent = {
  slug: string;
  /** H1 avec accent possible. */
  h1: ReactNode;
  /** Sous-titre lead. */
  subtitle: string;
  /** Date de publication ISO. */
  datePublished: string;
  /** Temps de lecture en minutes. */
  readingTimeMin: number;
  /** Sections du guide. */
  sections: GuideSection[];
  /** FAQ liée. */
  faq: FAQItem[];
};

export function generateGuideMetadata(slug: string): Metadata {
  const page = requirePage(slug);
  return buildMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: page.path,
    type: 'article',
  });
}

export function GuidePageLayout({ content }: { content: GuidePageContent }) {
  const page = requirePage(content.slug);

  return (
    <>
      <section className="bg-[var(--color-pierre)] pt-8 md:pt-12 pb-4">
        <Container>
          <Breadcrumb slug={content.slug} />
        </Container>
      </section>

      {/* HERO ARTICLE */}
      <section className="pt-6 md:pt-10 pb-10 md:pb-16 bg-[var(--color-pierre)]">
        <Container size="narrow">
          <Eyebrow className="mb-3">Guide pratique</Eyebrow>
          <h1 className="mb-5">{content.h1}</h1>
          <p className="text-lead mb-6">{content.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4 text-[0.875rem] text-[var(--color-gris-600)]">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" aria-hidden="true" />
              {new Date(content.datePublished).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {content.readingTimeMin} min de lecture
            </span>
            <span className="inline-flex items-center gap-1.5">
              Par <strong>Couverture Gironde</strong> · Couvreur depuis 2005
            </span>
          </div>
        </Container>
      </section>

      {/* SOMMAIRE + CONTENU */}
      <article className="pb-16 md:pb-24">
        <Container>
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-14">
            {/* Sommaire sticky */}
            <aside className="lg:col-span-1">
              <nav
                aria-label="Sommaire du guide"
                className="lg:sticky lg:top-24"
              >
                <h2 className="text-[0.75rem] uppercase tracking-wider font-bold text-[var(--color-terre-600)] mb-3">
                  Sommaire
                </h2>
                <ol className="space-y-2 text-[0.9375rem]">
                  {content.sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-[var(--color-gris-600)] hover:text-[var(--color-terre)] transition-colors flex gap-2"
                      >
                        <span className="text-[var(--color-terre-600)] font-bold">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 hidden lg:block">
                  <a
                    href={NAP.phoneHref}
                    className="flex items-center gap-2 px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-ardoise)] text-[var(--color-pierre)] hover:bg-[var(--color-ardoise-700)] transition-colors text-[0.875rem] font-semibold"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {NAP.phoneDisplay}
                  </a>
                </div>
              </nav>
            </aside>

            {/* Corps du guide */}
            <div className="lg:col-span-3 max-w-[68ch]">
              <div className="prose-guide space-y-12 text-[1.0625rem] text-[var(--color-gris-600)] leading-[1.7]
                              [&_h2]:text-[1.5rem] [&_h2]:lg:text-[1.875rem] [&_h2]:font-bold [&_h2]:text-[var(--color-ardoise)] [&_h2]:mb-4 [&_h2]:mt-0
                              [&_h3]:text-[1.25rem] [&_h3]:font-bold [&_h3]:text-[var(--color-ardoise)] [&_h3]:mt-8 [&_h3]:mb-3
                              [&_p]:mb-4
                              [&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:list-disc
                              [&_ol]:my-4 [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:list-decimal
                              [&_strong]:text-[var(--color-ardoise)] [&_strong]:font-bold
                              [&_a]:underline [&_a]:text-[var(--color-terre)] hover:[&_a]:opacity-80
                              [&_table]:w-full [&_table]:my-6 [&_table]:rounded-[var(--radius-md)] [&_table]:overflow-hidden [&_table]:border [&_table]:border-[var(--color-border)]
                              [&_th]:bg-[var(--color-ardoise)] [&_th]:text-[var(--color-pierre)] [&_th]:p-3 [&_th]:text-left [&_th]:font-bold
                              [&_td]:p-3 [&_td]:border-t [&_td]:border-[var(--color-border)]
                              [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--color-terre)] [&_blockquote]:bg-[var(--color-creme)] [&_blockquote]:p-5 [&_blockquote]:my-6 [&_blockquote]:rounded-r-[var(--radius-md)] [&_blockquote]:italic">
                {content.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    aria-labelledby={`${section.id}-title`}
                    className="scroll-mt-24"
                  >
                    <h2 id={`${section.id}-title`}>{section.title}</h2>
                    {section.content}
                  </section>
                ))}
              </div>

              {/* FAQ inline */}
              {content.faq.length > 0 && (
                <section
                  id="faq"
                  aria-labelledby="faq-title"
                  className="mt-16 scroll-mt-24"
                >
                  <h2
                    id="faq-title"
                    className="text-[1.5rem] lg:text-[1.875rem] font-bold text-[var(--color-ardoise)] mb-6"
                  >
                    Questions fréquentes
                  </h2>
                  <div className="space-y-3">
                    {content.faq.map((item, i) => (
                      <details
                        key={item.question}
                        className="group rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-creme)] overflow-hidden"
                        open={i === 0}
                      >
                        <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-bold text-[var(--color-ardoise)] text-[1rem] [&::-webkit-details-marker]:hidden hover:bg-[var(--color-pierre)] transition-colors">
                          <span>{item.question}</span>
                          <span
                            aria-hidden="true"
                            className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-terre)]/10 text-[var(--color-terre)] grid place-items-center text-xl group-open:rotate-45 transition-transform"
                          >
                            +
                          </span>
                        </summary>
                        <div className="px-5 pb-5 text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Encart conversion intermédiaire */}
              <aside className="mt-16 rounded-[var(--radius-xl)] bg-[var(--color-ardoise)] text-[var(--color-pierre)] p-8 md:p-10">
                <Eyebrow className="mb-3 !text-[var(--color-terre-300)]">
                  Un projet concret ?
                </Eyebrow>
                <h2 className="mb-4 text-[var(--color-pierre)] !text-[1.5rem] lg:!text-[1.875rem]">
                  Plus efficace qu'un guide : un devis sur votre cas
                </h2>
                <p className="text-[1rem] text-[var(--color-gris-300)] mb-6">
                  Décrivez-nous votre toiture en 2 minutes — nous établissons
                  un devis personnalisé sous 24h ouvrées avec un chiffrage
                  ligne par ligne.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    href="/demande-devis"
                    variant="primary"
                    size="md"
                  >
                    Demander un devis gratuit
                  </Button>
                  <Button
                    href={NAP.phoneHref}
                    variant="inverse"
                    size="md"
                  >
                    {NAP.phoneDisplay}
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </article>

      <AvisGoogle title="Ce que disent nos clients" />
      <Reassurance />
      <RelatedPages slug={content.slug} background="creme" />
      <CTAFinal />

      {/* SCHEMAS */}
      <JsonLd
        data={getArticleSchema({
          headline: page.seoTitle,
          description: page.seoDescription,
          url: `${SITE.url}${page.path}`,
          datePublished: content.datePublished,
        })}
      />
      {content.faq.length > 0 && <JsonLd data={getFAQSchema(content.faq)} />}
    </>
  );
}
