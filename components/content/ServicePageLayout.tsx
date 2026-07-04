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
import { getFAQForService, type FAQItem } from '@/data/faq';
import { AVIS } from '@/data/avis';
import { SERVICES, type ServiceDefinition } from '@/data/services';
import type { ServiceCategory } from '@/data/types';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Euro,
  Star,
  Clock,
  Phone,
  Quote,
  HelpCircle,
} from 'lucide-react';
import { SITE, NAP } from '@/lib/constants';
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
  /** Bloc tarifs locaux optionnel (booste rich snippets prix + signal local). */
  tarifs?: {
    intro?: string;
    lines: Array<{ service: string; range: string; note?: string }>;
    disclaimer?: string;
  };
  /** Bloc quartiers desservis optionnel (booste signal local + maillage interne). */
  quartiersBordeaux?: {
    intro?: string;
    items: Array<{ nom: string; description: string; href?: string }>;
  };
  /** Bloc auteur/signataire optionnel (E-E-A-T : identifie clairement l'artisan derrière la page). */
  authorBlock?: {
    name: string;
    role: string;
    /** Court paragraphe (60-120 mots) — ancienneté, formation, valeur. */
    bio: string;
    /** Chemin image dans /public (optionnel — sinon avatar SVG initiales). */
    photoSrc?: string;
    photoAlt?: string;
    /** Lien vers page auteur dédiée (si créée). */
    href?: string;
    /** Signaux confiance affichés en badges. */
    badges?: string[];
  };
  /** Bloc "Notre atelier" optionnel (signal local terrain + preuve d'existence physique). */
  atelier?: {
    adresse: string;
    ville: string;
    codePostal: string;
    horaires: Array<{ jours: string; heures: string }>;
    /** URL Google Maps embed (iframe src). */
    mapEmbedUrl?: string;
    /** URL Google Maps itinéraire (bouton). */
    itineraireUrl?: string;
    /** Photos atelier (facultatif — placeholders acceptés). */
    photos?: Array<{ src: string; alt: string }>;
    /** Court paragraphe explicatif. */
    intro?: string;
  };
  /** Bloc "Questions à poser à tout couvreur" — utile + conversion + featured snippet. */
  questionsCouvreur?: {
    intro?: string;
    items: Array<{ question: string; answer: string }>;
  };
  /** 1-2 testimonials nommés inline (pas dans le carousel), preuve inline forte. */
  inlineTestimonials?: Array<{
    author: string;
    city: string;
    rating: number;
    text: string;
    /** Optionnel — service ou chantier concerné. */
    context?: string;
  }>;
  /** Override de la FAQ service générique (utile pour pages piliers). */
  faqOverride?: FAQItem[];
};

export function ServicePageLayout({ content }: { content: ServicePageContent }) {
  const service: ServiceDefinition = SERVICES[content.service];
  const faqItems = content.faqOverride ?? getFAQForService(content.service);
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

      {/* Bloc auteur (E-E-A-T) — identifie l'artisan derrière la page */}
      {content.authorBlock && (
        <section className="section-y-sm bg-[var(--color-creme)] border-b border-[var(--color-border)]">
          <Container size="narrow">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-[var(--radius-lg)] bg-[var(--color-pierre)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
              <div className="shrink-0 w-20 h-20 rounded-full bg-[var(--color-terre-100)] text-[var(--color-terre-700)] grid place-items-center overflow-hidden ring-2 ring-[var(--color-terre)]/20">
                {content.authorBlock.photoSrc ? (
                  <Image
                    src={content.authorBlock.photoSrc}
                    alt={content.authorBlock.photoAlt ?? content.authorBlock.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[1.75rem] font-bold" aria-hidden="true">
                    {content.authorBlock.name
                      .split(' ')
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-[0.75rem] uppercase tracking-wider text-[var(--color-terre-700)] font-bold mb-1">
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                  Page rédigée et vérifiée par l'artisan
                </div>
                <h2 className="text-[1.125rem] font-bold text-[var(--color-ardoise)] mb-1">
                  {content.authorBlock.href ? (
                    <Link
                      href={content.authorBlock.href}
                      className="hover:text-[var(--color-terre)] transition"
                    >
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
                      <li
                        key={b}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.75rem] font-semibold rounded-full bg-[var(--color-garantie-100)] text-[var(--color-garantie)]"
                      >
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

      {/* Testimonial inline (preuve conversion en milieu de lecture) */}
      {content.inlineTestimonials && content.inlineTestimonials.length > 0 && (
        <section className="section-y-sm">
          <Container size="narrow">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.inlineTestimonials.map((t) => (
                <li
                  key={t.author}
                  className="relative rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-pierre)] p-6 pt-8"
                >
                  <Quote
                    className="absolute -top-3 left-6 w-6 h-6 text-[var(--color-terre)] bg-[var(--color-pierre)] p-1 rounded-full ring-1 ring-[var(--color-border)]"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <div
                    className="flex items-center gap-0.5 text-[var(--color-terre)] mb-3"
                    aria-label={`Note ${t.rating} sur 5`}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="text-[0.9375rem] italic text-[var(--color-gris-600)] leading-relaxed mb-4">
                    « {t.text} »
                  </blockquote>
                  <footer className="text-[0.875rem]">
                    <span className="font-bold text-[var(--color-ardoise)]">
                      {t.author}
                    </span>
                    <span className="text-[var(--color-gris-500)]"> · {t.city}</span>
                    {t.context && (
                      <span className="text-[var(--color-gris-500)]"> · {t.context}</span>
                    )}
                  </footer>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

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

      {/* 3 questions à poser à tout couvreur (utile + featured snippet potentiel) */}
      {content.questionsCouvreur && (
        <section className="section-y">
          <Container size="narrow">
            <div className="mb-10">
              <Eyebrow className="mb-3">Guide de sélection</Eyebrow>
              <h2 className="mb-4">
                Les questions à poser à tout couvreur bordelais avant de signer
              </h2>
              {content.questionsCouvreur.intro && (
                <p className="text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed">
                  {content.questionsCouvreur.intro}
                </p>
              )}
            </div>
            <ul className="space-y-6">
              {content.questionsCouvreur.items.map((q, i) => (
                <li
                  key={q.question}
                  className="flex gap-5 p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-pierre)]"
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-terre-100)] text-[var(--color-terre-700)] grid place-items-center font-bold text-[0.9375rem]"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-[1.0625rem] font-bold text-[var(--color-ardoise)] mb-2 inline-flex items-start gap-2">
                      <HelpCircle
                        className="w-4 h-4 mt-1 text-[var(--color-terre)] shrink-0"
                        aria-hidden="true"
                      />
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

      {/* Tarifs locaux (optionnel) — booste signal prix + rich snippets */}
      {content.tarifs && (
        <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
          <Container size="narrow">
            <div className="mb-8">
              <Eyebrow className="mb-3">Tarifs indicatifs Bordeaux</Eyebrow>
              <h2 className="mb-4">
                Prix {service.name.toLowerCase()} à Bordeaux et en Gironde
              </h2>
              {content.tarifs.intro && (
                <p className="text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed">
                  {content.tarifs.intro}
                </p>
              )}
            </div>
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-pierre)]">
              <table className="w-full text-left">
                <thead className="bg-[var(--color-ardoise)] text-[var(--color-pierre)] text-[0.875rem] uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Prestation</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">
                      Fourchette
                    </th>
                    <th className="px-4 py-3 font-semibold hidden md:table-cell">
                      Détail
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[0.9375rem] text-[var(--color-gris-600)]">
                  {content.tarifs.lines.map((line) => (
                    <tr
                      key={line.service}
                      className="border-t border-[var(--color-border)]"
                    >
                      <td className="px-4 py-3 font-semibold text-[var(--color-ardoise)]">
                        {line.service}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap inline-flex items-center gap-1.5 text-[var(--color-terre-700)] font-semibold">
                        <Euro
                          className="w-4 h-4"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        {line.range}
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell text-[var(--color-gris-600)]">
                        {line.note ?? '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {content.tarifs.disclaimer && (
              <p className="mt-4 text-[0.875rem] text-[var(--color-gris-500)] italic">
                {content.tarifs.disclaimer}
              </p>
            )}
          </Container>
        </section>
      )}

      {/* Bloc atelier (signal local physique + E-E-A-T terrain) */}
      {content.atelier && (
        <section className="section-y">
          <Container>
            <div className="max-w-3xl mb-10">
              <Eyebrow className="mb-3">Atelier & siège</Eyebrow>
              <h2 className="mb-4">
                Notre atelier à {content.atelier.ville}
              </h2>
              {content.atelier.intro && (
                <p className="text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed">
                  {content.atelier.intro}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
              {/* Colonne infos */}
              <div className="lg:col-span-2 space-y-5">
                <div className="p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-pierre)]">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-terre-100)] text-[var(--color-terre-700)] grid place-items-center">
                      <MapPin className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[0.75rem] uppercase tracking-wider font-bold text-[var(--color-gris-500)] mb-1">
                        Adresse
                      </p>
                      <address className="not-italic text-[1rem] font-semibold text-[var(--color-ardoise)] leading-snug">
                        {content.atelier.adresse}
                        <br />
                        {content.atelier.codePostal} {content.atelier.ville}
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-terre-100)] text-[var(--color-terre-700)] grid place-items-center">
                      <Clock className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[0.75rem] uppercase tracking-wider font-bold text-[var(--color-gris-500)] mb-1">
                        Horaires
                      </p>
                      <ul className="text-[0.9375rem] text-[var(--color-ardoise)] leading-relaxed space-y-0.5">
                        {content.atelier.horaires.map((h) => (
                          <li key={h.jours} className="flex justify-between gap-3">
                            <span className="font-semibold">{h.jours}</span>
                            <span className="text-[var(--color-gris-600)]">
                              {h.heures}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    href={NAP.phoneHref}
                    variant="primary"
                    iconLeft={<Phone className="w-4 h-4" />}
                  >
                    {NAP.phoneDisplay}
                  </Button>
                  {content.atelier.itineraireUrl && (
                    <Button
                      href={content.atelier.itineraireUrl}
                      variant="ghost"
                      iconRight={<ArrowRight className="w-4 h-4" />}
                    >
                      Itinéraire Google Maps
                    </Button>
                  )}
                </div>
              </div>

              {/* Colonne carte ou photos */}
              <div className="lg:col-span-3 relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] bg-[var(--color-creme)] min-h-[300px]">
                {content.atelier.mapEmbedUrl ? (
                  <iframe
                    src={content.atelier.mapEmbedUrl}
                    className="w-full h-full min-h-[300px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Localisation atelier ${content.atelier.ville}`}
                  />
                ) : content.atelier.photos && content.atelier.photos.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2 p-2 h-full">
                    {content.atelier.photos.slice(0, 4).map((p) => (
                      <div
                        key={p.src}
                        className="relative rounded-[var(--radius-md)] overflow-hidden"
                      >
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid place-items-center h-full text-[var(--color-gris-500)]">
                    <div className="text-center px-6">
                      <MapPin
                        className="w-8 h-8 mx-auto mb-2 opacity-40"
                        aria-hidden="true"
                      />
                      <p className="text-[0.875rem]">
                        Carte de l'atelier
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Quartiers Bordeaux desservis (optionnel) — booste local SEO */}
      {content.quartiersBordeaux && (
        <section className="section-y">
          <Container>
            <div className="max-w-3xl mb-10">
              <Eyebrow className="mb-3">Quartiers desservis</Eyebrow>
              <h2 className="mb-4">
                {service.name} dans les quartiers de Bordeaux et la métropole
              </h2>
              {content.quartiersBordeaux.intro && (
                <p className="text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed">
                  {content.quartiersBordeaux.intro}
                </p>
              )}
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.quartiersBordeaux.items.map((q) => {
                const inner = (
                  <>
                    <div className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-terre-100)] text-[var(--color-terre-700)] grid place-items-center">
                      <MapPin
                        className="w-4 h-4"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-[var(--color-ardoise)] mb-1.5">
                        {q.nom}
                      </h3>
                      <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                        {q.description}
                      </p>
                    </div>
                  </>
                );
                return q.href ? (
                  <li
                    key={q.nom}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-5 flex gap-4 transition hover:border-[var(--color-terre)] hover:shadow-sm"
                  >
                    <Link
                      href={q.href}
                      className="flex gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)] rounded-[var(--radius-md)]"
                    >
                      {inner}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={q.nom}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-5 flex gap-4"
                  >
                    {inner}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      )}

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
