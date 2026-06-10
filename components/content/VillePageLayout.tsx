import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  Building2,
  CheckCircle2,
  CloudRain,
  MapPin,
  Route,
  ShieldCheck,
  Wrench,
  ArrowRight,
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
  getLocalBusinessAtCitySchema,
  getReviewSchemas,
} from '@/lib/seo/schemas';
import {
  getLocationBySlug,
  getNeighborLocations,
  type LocationDefinition,
} from '@/data/locations';
import { SERVICES, type ServiceDefinition } from '@/data/services';
import type { FAQItem } from '@/data/faq';
import { AVIS } from '@/data/avis';
import { SITE } from '@/lib/constants';
import { getPageBySlug, requirePage } from '@/lib/pages';

/**
 * VillePageLayout — template définitif pour les pages hub ville (couvreur-{ville}).
 *
 * Structure 1500+ mots :
 *   Hero local → Intervention dans la ville (300 mots, contexte habitat/climat/quartiers) →
 *   Services proposés (cards data-driven) → Pourquoi un couvreur local →
 *   Tarifs indicatifs locaux → Quartiers desservis → Témoignages locaux filtrés →
 *   Réalisations locales filtrées → FAQ locale → Villes voisines → CTA Final
 *
 * Tous les schemas locaux émis : LocalBusiness@City, BreadcrumbList, FAQPage, Review individuels.
 */

export type VillePageContent = {
  slug: string;
  villeSlug: string;
  /** Phrase d'intro de l'hero (200-300 mots). */
  heroSubtitle: string;
  /** Contenu local riche : pourquoi cette ville, habitat, climat, particularités. */
  contexteLocal: ReactNode;
  /** 4-6 raisons spécifiques de choisir un couvreur sur cette ville. */
  raisonsLocales: Array<{ title: string; description: string }>;
  /** Tarifs indicatifs avec contexte (table simplifiée). */
  tarifsLines: Array<{ service: string; range: string; note: string }>;
  /** FAQ spécifique ville (au moins 5 questions). */
  faqLocale: FAQItem[];
  /** Quartiers à mettre en avant — par défaut tirés de LocationDefinition. */
  quartiersFocus?: string[];
  /**
   * Section "Réparation fuite toiture {ville}" optionnelle.
   * Ajoutée sur les villes où on a un signal GSC fort sur la requête
   * `réparation fuite toiture {ville}` (ex: Pessac, Talence en pos 5.0).
   * Quand fourni, injectée juste après le contexte local avec son propre H2
   * pour capter exactly l'intent.
   */
  reparationFuite?: {
    /** Court paragraphe d'intro (60-100 mots). */
    intro: ReactNode;
    /** 3-5 cas typiques de fuite avec délai d'intervention attendu. */
    casTypiques: Array<{ title: string; description: string }>;
    /** Tarif indicatif "intervention urgence" pour cette ville. */
    tarifIndicatif: string;
  };
};

export function VillePageLayout({ content }: { content: VillePageContent }) {
  const ville = getLocationBySlug(content.villeSlug);
  if (!ville) {
    throw new Error(
      `[VillePageLayout] Ville inconnue dans le registre : ${content.villeSlug}`,
    );
  }

  const page = requirePage(content.slug);
  const quartiers = content.quartiersFocus ?? ville.quartiers;

  // Avis filtrés par ville (avec fallback graceful si aucun avis local)
  const villeAvis = AVIS.filter(
    (a) =>
      a.city.localeCompare(ville.name, 'fr', { sensitivity: 'base' }) === 0,
  );

  return (
    <>
      <Hero
        variant="ville"
        eyebrow={`Couvreur · ${ville.nameInflected} · ${ville.postalCode}`}
        title={(() => {
          // Contraction française : "à + Le X" devient "au X".
          // Ex: "à Le Bouscat" → "au Bouscat".
          const startsWithLe = ville.name.startsWith('Le ');
          const prep = startsWithLe ? 'au ' : 'à ';
          const cityForTitle = startsWithLe ? ville.name.slice(3) : ville.name;
          return (
            <>
              Couvreur {prep}
              <span className="text-[var(--color-terre)]">{cityForTitle}</span> :
              démoussage, nettoyage et réparation toiture
            </>
          );
        })()}
        subtitle={content.heroSubtitle}
        breadcrumbSlug={content.slug}
        secondaryCtaLabel={`Devis couvreur ${ville.name}`}
      />

      {/* SECTION 1 — Contexte local (300 mots) */}
      <section className="section-y">
        <Container size="narrow">
          <Eyebrow className="mb-3">Notre intervention à {ville.name}</Eyebrow>
          <h2 className="mb-6">
            Pourquoi choisir Couverture Gironde à {ville.name}
          </h2>
          <div className="prose prose-lg max-w-none text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed space-y-4 [&_strong]:text-[var(--color-ardoise)]">
            {content.contexteLocal}
          </div>
        </Container>
      </section>

      {/* SECTION 1bis — Réparation fuite (optionnelle, sur villes à pos GSC favorable) */}
      {content.reparationFuite && (
        <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
          <Container size="narrow">
            <Eyebrow className="mb-3">Urgence fuite · {ville.name}</Eyebrow>
            <h2 className="mb-5">
              Réparation fuite toiture à {ville.name} :
              intervention rapide 7j/7
            </h2>
            <div className="prose prose-lg max-w-none text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed space-y-4 [&_strong]:text-[var(--color-ardoise)] mb-8">
              {content.reparationFuite.intro}
            </div>
            <h3 className="text-[1.125rem] font-bold text-[var(--color-ardoise)] mb-4">
              Cas typiques de fuite toiture à {ville.name}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {content.reparationFuite.casTypiques.map((cas) => (
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
                  Tarif indicatif fuite {ville.nameInflected}
                </p>
                <p className="text-[1.25rem] font-bold text-[var(--color-terre-600)]">
                  {content.reparationFuite.tarifIndicatif}
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
      )}

      {/* SECTION 2 — Services proposés sur cette ville */}
      <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Nos services à {ville.name}</Eyebrow>
            <h2 className="mb-4">
              Tous les travaux de toiture à {ville.name}
            </h2>
            <p className="text-lead">
              Couverture Gironde propose à {ville.nameInflected} l'ensemble des
              prestations de couverture, zinguerie et entretien de toiture.
              Diagnostic gratuit, devis sous 24h, garantie décennale sur chaque
              chantier.
            </p>
          </div>
          <ServicesGridForVille villeSlug={ville.slug} />
        </Container>
      </section>

      {/* SECTION 3 — Pourquoi un couvreur local */}
      <section className="section-y">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Pourquoi un couvreur local</Eyebrow>
            <h2 className="mb-4">
              5 raisons de faire appel à un artisan basé à proximité
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.raisonsLocales.map((r) => (
              <li key={r.title} className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-garantie-100)] text-[var(--color-garantie)] grid place-items-center">
                  <CheckCircle2
                    className="w-5 h-5"
                    strokeWidth={2}
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

      {/* SECTION 4 — Tarifs indicatifs locaux */}
      <section className="section-y bg-[var(--color-ardoise)] text-[var(--color-pierre)]">
        <Container size="narrow">
          <Eyebrow className="mb-3 !text-[var(--color-terre-300)]">
            Tarifs indicatifs · {ville.name}
          </Eyebrow>
          <h2 className="mb-5 text-[var(--color-pierre)]">
            Combien coûte un couvreur à {ville.name} ?
          </h2>
          <p className="text-lead mb-10 text-[var(--color-gris-300)]">
            Les fourchettes ci-dessous sont des tarifs indicatifs constatés sur{' '}
            {ville.nameInflected}, à titre purement informatif. Chaque devis
            est personnalisé selon l'accessibilité, l'état de la toiture et le
            matériau.
          </p>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-ardoise-700)] overflow-hidden">
            <table className="w-full text-left text-[0.9375rem]">
              <thead className="bg-[var(--color-ardoise-700)]">
                <tr>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider text-[0.75rem]">
                    Prestation
                  </th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider text-[0.75rem]">
                    Tarif indicatif
                  </th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider text-[0.75rem] hidden md:table-cell">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.tarifsLines.map((line) => (
                  <tr
                    key={line.service}
                    className="border-t border-[var(--color-ardoise-700)]"
                  >
                    <td className="px-5 py-4 font-semibold">{line.service}</td>
                    <td className="px-5 py-4 font-bold text-[var(--color-terre-300)]">
                      {line.range}
                    </td>
                    <td className="px-5 py-4 text-[var(--color-gris-300)] hidden md:table-cell">
                      {line.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[0.875rem] text-[var(--color-gris-400)]">
            Les tarifs ci-dessus n'ont pas valeur de devis. Seul un devis signé
            après visite ou diagnostic photo fait foi.
          </p>
        </Container>
      </section>

      {/* SECTION 5 — Quartiers desservis */}
      <section className="section-y">
        <Container>
          <div className="max-w-3xl mb-10">
            <Eyebrow className="mb-3">Quartiers desservis</Eyebrow>
            <h2 className="mb-4">
              Tous les quartiers de {ville.name} couverts
            </h2>
            <p className="text-lead">
              Nous intervenons sur l'ensemble du territoire communal de{' '}
              {ville.nameInflected}, du centre-ville aux quartiers
              périphériques, avec une réactivité optimale en cas d'urgence.
            </p>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {quartiers.map((q) => (
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
          <div className="mt-8 flex items-center gap-3 px-5 py-4 rounded-[var(--radius-md)] bg-[var(--color-creme)] border border-[var(--color-border)]">
            <Route
              className="w-5 h-5 text-[var(--color-terre)] shrink-0"
              aria-hidden="true"
            />
            <p className="text-[0.9375rem] text-[var(--color-ardoise)]">
              <strong>Couvreur de proximité à {ville.name} :</strong>{' '}
              intervention urgence sous 2 à 4h en moyenne en heures ouvrées,
              déplacement inclus dans le devis.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 6 — Réalisations locales */}
      <RealisationsCarousel
        eyebrow={`Chantiers à ${ville.name}`}
        title={`Nos réalisations à ${ville.name} et alentours`}
        intro={`Sélection de nos interventions récentes à ${ville.nameInflected} et dans les communes voisines.`}
        filterVille={ville.slug}
        variant="grid"
      />

      {/* SECTION 7 — Avis locaux */}
      <AvisGoogle
        eyebrow={`Avis clients · ${ville.name}`}
        title={`Ce que disent nos clients à ${ville.name}`}
        intro={
          villeAvis.length > 0
            ? `Témoignages vérifiés de clients de ${ville.nameInflected} et alentours.`
            : 'Nos clients de Bordeaux Métropole témoignent.'
        }
        filterCity={ville.name}
      />

      {/* SECTION 8 — FAQ locale */}
      <FAQ
        items={content.faqLocale}
        title={`Questions fréquentes : couvreur ${ville.name}`}
        intro={`Tout ce que vous devez savoir avant de nous confier un projet de toiture à ${ville.nameInflected}.`}
        background="creme"
      />

      <Reassurance />

      <NeighborCities currentSlug={ville.slug} />

      <RelatedPages
        slug={content.slug}
        title="Pages susceptibles de vous intéresser"
        eyebrow="Maillage local"
      />

      <CTAFinal
        title={`Un projet de toiture à ${ville.name} ?`}
        subtitle={`Décrivez-nous votre besoin en 2 minutes. Nous revenons vers vous sous 24h ouvrées avec un devis détaillé pour votre chantier à ${ville.nameInflected}.`}
      />

      {/* Schemas SEO locaux */}
      <JsonLd
        data={getLocalBusinessAtCitySchema({
          cityName: ville.name,
          cityLat: ville.geo.lat,
          cityLng: ville.geo.lng,
          url: `${SITE.url}${page.path}`,
        })}
      />
      <JsonLd data={getFAQSchema(content.faqLocale)} />
      {villeAvis.length > 0 && (
        <JsonLd
          data={getReviewSchemas(
            villeAvis.map((a) => ({
              author: a.author,
              rating: a.rating,
              date: a.date,
              text: a.text,
            })),
          )}
        />
      )}
    </>
  );
}

/* ============================================================
   Sous-composants internes
   ============================================================ */

const SERVICE_SLUG_BY_VILLE: Record<string, Record<string, string>> = {
  // Override : pour une ville, mapper service id → slug de page existante.
  // Si absent, on retombe sur le hub Bordeaux du service.
  pessac: {
    nettoyage: 'nettoyage-toiture-pessac',
  },
};

function getServicePageSlugForVille(
  serviceId: ServiceDefinition['id'],
  villeSlug: string,
): string {
  const override = SERVICE_SLUG_BY_VILLE[villeSlug]?.[serviceId];
  if (override && getPageBySlug(override)) return override;
  const SLUG_MAP: Record<string, string> = {
    demoussage: 'demoussage-toiture-bordeaux',
    nettoyage: 'nettoyage-toiture-bordeaux',
    hydrofuge: 'traitement-hydrofuge-toiture-bordeaux',
    reparation: 'reparation-toiture-bordeaux',
    urgence: 'urgence-fuite-toiture-bordeaux',
    zinguerie: 'zinguerie-bordeaux',
    velux: 'installation-velux-bordeaux',
    neuve: 'toiture-neuve-bordeaux',
    faitage: 'faitage-toiture-bordeaux',
    ornements: 'ornements-toiture-bordeaux',
    charpente: 'charpente-bordeaux',
    couverture: 'couvreur-bordeaux',
  };
  return SLUG_MAP[serviceId] ?? 'couvreur-bordeaux';
}

function ServicesGridForVille({ villeSlug }: { villeSlug: string }) {
  // On affiche les 6 services prioritaires pour le maillage local
  const ids: Array<ServiceDefinition['id']> = [
    'demoussage',
    'nettoyage',
    'hydrofuge',
    'reparation',
    'urgence',
    'zinguerie',
  ];

  return (
    <ul
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {ids.map((id) => {
        const svc = SERVICES[id];
        const slug = getServicePageSlugForVille(id, villeSlug);
        const page = getPageBySlug(slug);
        if (!page) return null;
        return (
          <li key={id} className="group">
            <Link
              href={page.path}
              className="block h-full bg-[var(--color-pierre)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 transition-all hover:border-[var(--color-ardoise)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-terre)]/10 grid place-items-center text-[var(--color-terre)]">
                  <Wrench
                    className="w-5 h-5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <ArrowRight
                  className="w-5 h-5 text-[var(--color-gris-400)] group-hover:text-[var(--color-terre)] transition-colors"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[1.0625rem] font-bold text-[var(--color-ardoise)] mb-2">
                {svc.name}
              </h3>
              <p className="text-[0.875rem] text-[var(--color-gris-600)] leading-relaxed">
                {svc.shortDescription}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function NeighborCities({ currentSlug }: { currentSlug: string }) {
  const neighbors = getNeighborLocations(currentSlug, 4);
  const neighborsWithPages = neighbors
    .map((loc) => {
      const page = getPageBySlug(`couvreur-${loc.slug}`);
      return page ? { loc, page } : null;
    })
    .filter((x): x is { loc: LocationDefinition; page: NonNullable<ReturnType<typeof getPageBySlug>> } => x !== null);

  if (neighborsWithPages.length === 0) return null;

  return (
    <section className="section-y">
      <Container>
        <div className="max-w-3xl mb-10">
          <Eyebrow className="mb-3">Villes voisines</Eyebrow>
          <h2 className="mb-4">Couvreur dans les communes proches</h2>
          <p className="text-lead">
            Nous intervenons également sur les communes voisines de Bordeaux
            Métropole avec la même réactivité et les mêmes garanties.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {neighborsWithPages.map(({ loc, page }) => (
            <li key={loc.slug}>
              <Link
                href={page.path}
                className="group flex items-center justify-between gap-3 p-4 rounded-[var(--radius-md)] bg-[var(--color-creme)] border border-[var(--color-border)] hover:border-[var(--color-ardoise)] transition-colors"
              >
                <div className="min-w-0">
                  <div className="text-[0.6875rem] uppercase tracking-wider font-bold text-[var(--color-terre-600)] mb-1">
                    {loc.postalCode}
                  </div>
                  <div className="font-bold text-[var(--color-ardoise)]">
                    {loc.name}
                  </div>
                </div>
                <ArrowRight
                  className="w-4 h-4 shrink-0 text-[var(--color-gris-400)] group-hover:text-[var(--color-terre)] transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/realisations" variant="ghost" size="sm">
            <Building2 className="w-4 h-4 mr-1" aria-hidden="true" />
            Voir nos chantiers sur Bordeaux Métropole →
          </Button>
        </div>
      </Container>
    </section>
  );
}
