import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  CheckCircle2,
  Clock,
  HelpCircle,
  MapPin,
  Phone,
  ArrowRight,
  Wrench,
} from 'lucide-react';
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
import { NAP } from '@/lib/constants';

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
  /** H1 custom optionnel. */
  h1?: ReactNode;
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
  /** Bloc auteur E-E-A-T optionnel. */
  authorBlock?: {
    name: string;
    role: string;
    bio: string;
    photoSrc?: string;
    photoAlt?: string;
    href?: string;
    badges?: string[];
  };
  /** Bloc atelier optionnel. */
  atelier?: {
    adresse: string;
    ville: string;
    codePostal: string;
    horaires: Array<{ jours: string; heures: string }>;
    mapEmbedUrl?: string;
    itineraireUrl?: string;
    intro?: string;
  };
  /** Bloc "3 questions à poser" optionnel. */
  questionsCouvreur?: {
    intro?: string;
    items: Array<{ question: string; answer: string }>;
  };
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
          content.h1 ?? (
            <>
              Couvreur à{' '}
              <span className="text-[var(--color-terre)]">
                Bordeaux {content.quartier}
              </span>{' '}
              : démoussage, réparation, urgence fuite 7j/7
            </>
          )
        }
        subtitle={content.heroSubtitle}
        breadcrumbSlug={content.slug}
        secondaryCtaLabel={`Devis couvreur Bordeaux ${content.quartier}`}
      />

      {/* Bloc auteur (E-E-A-T) */}
      {content.authorBlock && (
        <section className="section-y-sm bg-[var(--color-creme)] border-b border-[var(--color-border)]">
          <Container size="narrow">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-[var(--radius-lg)] bg-[var(--color-pierre)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
              {content.authorBlock.photoSrc && (
                <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden ring-2 ring-[var(--color-terre)]/20">
                  <Image
                    src={content.authorBlock.photoSrc}
                    alt={content.authorBlock.photoAlt ?? content.authorBlock.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-[0.75rem] uppercase tracking-wider text-[var(--color-terre-700)] font-bold mb-1">
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                  Page rédigée et vérifiée par l'artisan
                </div>
                <h2 className="text-[1.125rem] font-bold text-[var(--color-ardoise)] mb-1">
                  {content.authorBlock.href ? (
                    <Link href={content.authorBlock.href} className="hover:text-[var(--color-terre)] transition">
                      {content.authorBlock.name}
                    </Link>
                  ) : (
                    content.authorBlock.name
                  )}
                </h2>
                <p className="text-[0.875rem] text-[var(--color-gris-600)] mb-2">
                  {content.authorBlock.role}
                </p>
                <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                  {content.authorBlock.bio}
                </p>
                {content.authorBlock.badges && content.authorBlock.badges.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mt-3">
                    {content.authorBlock.badges.map((b) => (
                      <li key={b} className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.75rem] font-semibold rounded-full bg-[var(--color-garantie-100)] text-[var(--color-garantie)]">
                        <Check className="w-3 h-3" strokeWidth={3} aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

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
        intro={`Plus de 52 avis 5/5 vérifiés sur l'ensemble de Bordeaux Métropole, incluant le quartier ${content.quartier}.`}
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

      {/* Bloc atelier (signal local physique) */}
      {content.atelier && (
        <section className="section-y">
          <Container>
            <div className="max-w-3xl mb-10">
              <Eyebrow className="mb-3">Atelier & siège</Eyebrow>
              <h2 className="mb-4">Notre atelier à {content.atelier.ville}</h2>
              {content.atelier.intro && (
                <p className="text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed">
                  {content.atelier.intro}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
              <div className="lg:col-span-2 space-y-5">
                <div className="p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-pierre)]">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-terre-100)] text-[var(--color-terre-700)] grid place-items-center">
                      <MapPin className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[0.75rem] uppercase tracking-wider font-bold text-[var(--color-gris-500)] mb-1">Adresse</p>
                      <address className="not-italic text-[1rem] font-semibold text-[var(--color-ardoise)] leading-snug">
                        {content.atelier.adresse}<br />
                        {content.atelier.codePostal} {content.atelier.ville}
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-terre-100)] text-[var(--color-terre-700)] grid place-items-center">
                      <Clock className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[0.75rem] uppercase tracking-wider font-bold text-[var(--color-gris-500)] mb-1">Horaires</p>
                      <ul className="text-[0.9375rem] text-[var(--color-ardoise)] leading-relaxed space-y-0.5">
                        {content.atelier.horaires.map((h) => (
                          <li key={h.jours} className="flex justify-between gap-3">
                            <span className="font-semibold">{h.jours}</span>
                            <span className="text-[var(--color-gris-600)]">{h.heures}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href={NAP.phoneHref} variant="primary" iconLeft={<Phone className="w-4 h-4" />}>
                    {NAP.phoneDisplay}
                  </Button>
                  {content.atelier.itineraireUrl && (
                    <Button href={content.atelier.itineraireUrl} variant="ghost" iconRight={<ArrowRight className="w-4 h-4" />}>
                      Itinéraire Google Maps
                    </Button>
                  )}
                </div>
              </div>
              {content.atelier.mapEmbedUrl && (
                <div className="lg:col-span-3 relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] min-h-[300px]">
                  <iframe
                    src={content.atelier.mapEmbedUrl}
                    className="w-full h-full min-h-[300px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Localisation atelier ${content.atelier.ville}`}
                  />
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Bloc "3 questions à poser" */}
      {content.questionsCouvreur && (
        <section className="section-y">
          <Container size="narrow">
            <div className="mb-10">
              <Eyebrow className="mb-3">Guide de sélection</Eyebrow>
              <h2 className="mb-4">
                Les questions à poser à tout couvreur à Bordeaux {content.quartier} avant de signer
              </h2>
              {content.questionsCouvreur.intro && (
                <p className="text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed">
                  {content.questionsCouvreur.intro}
                </p>
              )}
            </div>
            <ul className="space-y-6">
              {content.questionsCouvreur.items.map((q, i) => (
                <li key={q.question} className="flex gap-5 p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-pierre)]">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-terre-100)] text-[var(--color-terre-700)] grid place-items-center font-bold text-[0.9375rem]" aria-hidden="true">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-[1.0625rem] font-bold text-[var(--color-ardoise)] mb-2 inline-flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 mt-1 text-[var(--color-terre)] shrink-0" aria-hidden="true" />
                      {q.question}
                    </h3>
                    <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                      {q.answer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <Reassurance />

      <CTAFinal
        title={`Un projet à Bordeaux ${content.quartier} ? Un doute ? Une urgence ?`}
        subtitle="Décrivez-nous votre besoin en 2 minutes. Réponse sous 24h ouvrées avec devis détaillé ou conseil immédiat."
      />

      <JsonLd data={getFAQSchema(content.faqLocale)} />
    </>
  );
}
