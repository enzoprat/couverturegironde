import type { ReactNode } from 'react';
import { CheckCircle2, MapPin, ArrowRight, Wrench } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { Reassurance } from '@/components/sections/Reassurance';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { RealisationsCarousel } from '@/components/sections/RealisationsCarousel';
import { FAQ } from '@/components/sections/FAQ';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { getFAQSchema } from '@/lib/seo/schemas';
import { getLocationBySlug } from '@/data/locations';
import type { FAQItem } from '@/data/faq';
import { requirePage } from '@/lib/pages';

/**
 * QuartierBordeauxPageLayout — template léger pour les pages
 * /couvreur-bordeaux-{quartier}.
 *
 * Différence vs VillePageLayout :
 *  - Pas de Service × ville matrix (le quartier hérite de Bordeaux ville)
 *  - Pas de carte quartiers (le quartier EST le focus)
 *  - Structure plus condensée : Hero → contexte → urgence → raisons →
 *    avis Bordeaux → FAQ → CTA
 *  - Schema LocalBusiness@Bordeaux réutilisé via canonical
 *
 * Anti-duplicate Google : contenu réellement spécifique par quartier
 * (bâti, voirie, contraintes urbaines, distances).
 */

export type QuartierContent = {
  slug: string;
  /** Nom court du quartier ("Centre", "Chartrons", "Rive Droite", "Bordeaux Lac"). */
  quartier: string;
  /** Nom inflected pour les phrases ("aux Chartrons", "au centre"). */
  quartierInflected: string;
  /** Sous-zones / micro-quartiers à mentionner. */
  microZones: string[];
  /** Hero subtitle (150-200 mots). */
  heroSubtitle: string;
  /** Contexte habitat / contraintes (300-500 mots). */
  contexteUrbain: ReactNode;
  /** 4-6 raisons locales spécifiques à ce quartier. */
  raisonsLocales: Array<{ title: string; description: string }>;
  /** Bloc urgence fuite (cas typiques du quartier). */
  urgenceFuite: {
    intro: ReactNode;
    casTypiques: Array<{ title: string; description: string }>;
  };
  /** FAQ spécifique quartier. */
  faqLocale: FAQItem[];
};

export function QuartierBordeauxPageLayout({ content }: { content: QuartierContent }) {
  const ville = getLocationBySlug('bordeaux');
  if (!ville) {
    throw new Error('[QuartierBordeauxPageLayout] Location bordeaux introuvable');
  }
  const page = requirePage(content.slug);

  return (
    <>
      <Hero
        variant="ville"
        eyebrow={`Couvreur · Bordeaux ${content.quartier} · 33000`}
        title={
          <>
            Couvreur à{' '}
            <span className="text-[var(--color-terre)]">
              Bordeaux {content.quartier}
            </span>{' '}
            : démoussage, réparation, urgence fuite 7j/7
          </>
        }
        subtitle={content.heroSubtitle}
        breadcrumbSlug={content.slug}
        secondaryCtaLabel={`Devis couvreur Bordeaux ${content.quartier}`}
      />

      {/* SECTION 1 — Contexte urbain spécifique au quartier */}
      <section className="section-y">
        <Container size="narrow">
          <Eyebrow className="mb-3">Intervention à Bordeaux {content.quartier}</Eyebrow>
          <h2 className="mb-6">
            Couvreur à Bordeaux {content.quartier} :
            spécificités du bâti et accès
          </h2>
          <div className="prose prose-lg max-w-none text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed space-y-4 [&_strong]:text-[var(--color-ardoise)]">
            {content.contexteUrbain}
          </div>
        </Container>
      </section>

      {/* SECTION 2 — Urgence fuite dans le quartier */}
      <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
        <Container size="narrow">
          <Eyebrow className="mb-3">Urgence fuite · Bordeaux {content.quartier}</Eyebrow>
          <h2 className="mb-5">
            Réparation fuite toiture à Bordeaux {content.quartier} :
            intervention rapide 7j/7
          </h2>
          <div className="prose prose-lg max-w-none text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed space-y-4 [&_strong]:text-[var(--color-ardoise)] mb-8">
            {content.urgenceFuite.intro}
          </div>
          <h3 className="text-[1.125rem] font-bold text-[var(--color-ardoise)] mb-4">
            Cas typiques de fuite à Bordeaux {content.quartier}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {content.urgenceFuite.casTypiques.map((cas) => (
              <li key={cas.title} className="flex gap-3">
                <div className="shrink-0 w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-terre)]/10 text-[var(--color-terre)] grid place-items-center mt-0.5">
                  <Wrench className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-[1rem] font-bold text-[var(--color-ardoise)] mb-1">
                    {cas.title}
                  </h4>
                  <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                    {cas.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-5 rounded-[var(--radius-lg)] bg-[var(--color-pierre)] border border-[var(--color-border)]">
            <div>
              <p className="text-[0.8125rem] uppercase tracking-wider text-[var(--color-gris-600)] mb-1">
                Urgence fuite Bordeaux {content.quartier}
              </p>
              <p className="text-[1.25rem] font-bold text-[var(--color-terre-600)]">
                Couvreur sur place sous 1h en heures ouvrées
              </p>
            </div>
            <Button
              href="/urgence"
              variant="primary"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Appeler en urgence
            </Button>
          </div>
        </Container>
      </section>

      {/* SECTION 3 — Pourquoi un couvreur de proximité */}
      <section className="section-y">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Pourquoi un couvreur de proximité</Eyebrow>
            <h2 className="mb-4">
              Couvreur à Bordeaux {content.quartier} :
              les raisons de notre proximité
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.raisonsLocales.map((r) => (
              <li key={r.title} className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-garantie-100)] text-[var(--color-garantie)] grid place-items-center">
                  <CheckCircle2 className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
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

      {/* SECTION 4 — Micro-zones du quartier */}
      <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl mb-10">
            <Eyebrow className="mb-3">Micro-zones desservies</Eyebrow>
            <h2 className="mb-4">Toutes les rues de Bordeaux {content.quartier}</h2>
            <p className="text-lead">
              Nous intervenons sur l'ensemble du quartier {content.quartierInflected},
              de la rue principale aux micro-zones résidentielles.
            </p>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {content.microZones.map((z) => (
              <li
                key={z}
                className="flex items-center gap-2 px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-pierre)] border border-[var(--color-border)]"
              >
                <MapPin
                  className="w-4 h-4 text-[var(--color-terre)] shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[0.9375rem] font-medium text-[var(--color-ardoise)]">
                  {z}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* SECTION 5 — Avis Bordeaux (filtrés sur Bordeaux ou toutes communes) */}
      <AvisGoogle
        eyebrow="Avis clients Bordeaux"
        title="Ce que disent nos clients à Bordeaux"
        intro={`Plus de 54 avis 5/5 vérifiés sur l'ensemble de Bordeaux Métropole, incluant le quartier ${content.quartier}.`}
      />

      {/* SECTION 6 — Réalisations Bordeaux Métropole */}
      <RealisationsCarousel
        eyebrow="Nos chantiers récents"
        title="Réalisations à Bordeaux et alentours"
      />

      {/* SECTION 7 — FAQ locale */}
      <FAQ
        items={content.faqLocale}
        eyebrow={`FAQ · Bordeaux ${content.quartier}`}
        title={`Questions fréquentes : couvreur Bordeaux ${content.quartier}`}
        intro="Tout ce qu'il faut savoir avant de nous confier votre toiture."
      />

      <Reassurance />

      <CTAFinal
        title={`Un projet à Bordeaux ${content.quartier} ? Un doute ? Une urgence ?`}
        subtitle="Décrivez-nous votre besoin en 2 minutes. Réponse sous 24h ouvrées avec devis détaillé ou conseil immédiat."
      />

      <JsonLd data={getFAQSchema(content.faqLocale)} />
    </>
  );
}
