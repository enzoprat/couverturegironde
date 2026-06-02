import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CalendarDays,
  MapPin,
  Tag,
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { SmartImage } from '@/components/ui/SmartImage';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { Reassurance } from '@/components/sections/Reassurance';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { RelatedPages } from '@/components/sections/RelatedPages';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  getArticleSchema,
  getBreadcrumbSchema,
  getImageObjectSchema,
} from '@/lib/seo/schemas';
import { REALISATIONS } from '@/data/realisations';
import { SERVICES } from '@/data/services';
import { getLocationBySlug } from '@/data/locations';
import { buildMetadata } from '@/lib/seo/metadata';
import { getPageBySlug } from '@/lib/pages';
import { SITE, NAP } from '@/lib/constants';

/**
 * /realisations/[slug] — page individuelle d'un chantier.
 *
 * Génération statique de toutes les réalisations existantes au build.
 * Chaque réalisation reçoit son URL canonical, ses schemas Article + ImageObject,
 * son breadcrumb dynamique, et son maillage interne vers service + ville.
 */

export async function generateStaticParams() {
  return REALISATIONS.map((r) => ({ slug: r.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const realisation = REALISATIONS.find((r) => r.slug === slug);
  if (!realisation) {
    return buildMetadata({
      title: 'Réalisation introuvable',
      description: '',
      path: `/realisations/${slug}`,
      noindex: true,
    });
  }
  const service = SERVICES[realisation.service as keyof typeof SERVICES];
  return buildMetadata({
    title: `${realisation.title} à ${realisation.villeName} — Couverture Gironde`,
    description: `${realisation.description} Couverture Gironde, artisan couvreur depuis 2005 sur Bordeaux Métropole. ${service?.name ?? 'Toiture'} à ${realisation.villeName}.`,
    path: `/realisations/${realisation.slug}`,
    type: 'article',
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const realisation = REALISATIONS.find((r) => r.slug === slug);
  if (!realisation) notFound();

  const service = SERVICES[realisation.service as keyof typeof SERVICES];
  const villeData = getLocationBySlug(realisation.villeSlug);
  const villeHubPage = getPageBySlug(`couvreur-${realisation.villeSlug}`);
  const servicePage = getPageBySlug(`${realisation.service === 'demoussage' ? 'demoussage-toiture-bordeaux' : realisation.service === 'nettoyage' ? 'nettoyage-toiture-bordeaux' : realisation.service === 'hydrofuge' ? 'traitement-hydrofuge-toiture-bordeaux' : realisation.service === 'reparation' ? 'reparation-toiture-bordeaux' : realisation.service === 'urgence' ? 'urgence-fuite-toiture-bordeaux' : realisation.service === 'zinguerie' ? 'zinguerie-bordeaux' : 'couvreur-bordeaux'}`);

  const dateFr = new Date(realisation.date).toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  });

  const imageUrl = `${SITE.url}/api/placeholder/realisation/${realisation.slug}`;
  const breadcrumbItems = [
    { title: 'Accueil', path: '/' },
    { title: 'Réalisations', path: '/realisations' },
    { title: realisation.title, path: `/realisations/${realisation.slug}`, current: true },
  ];

  return (
    <>
      <section className="bg-[var(--color-pierre)] pt-8 md:pt-12 pb-4">
        <Container>
          <div className="text-[0.875rem] text-[var(--color-gris-600)]">
            <Breadcrumb slug="realisations" />
          </div>
        </Container>
      </section>

      {/* HERO ARTICLE */}
      <section className="py-8 md:py-14 bg-[var(--color-pierre)]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-5 text-[0.8125rem]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-terre)]/10 text-[var(--color-terre)] font-bold">
                  <Tag className="w-3.5 h-3.5" aria-hidden="true" />
                  {service?.name ?? realisation.service}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[var(--color-gris-600)]">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  {realisation.villeName}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[var(--color-gris-600)]">
                  <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                  {dateFr}
                </span>
              </div>
              <h1 className="mb-5">
                {realisation.title} à{' '}
                <span className="text-[var(--color-terre)]">
                  {realisation.villeName}
                </span>
              </h1>
              <p className="text-lead mb-8">{realisation.description}</p>
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
                  href="/demande-devis"
                  variant="secondary"
                  size="lg"
                  iconRight={<ArrowRight className="w-5 h-5" />}
                >
                  Projet similaire ? Devis 24h
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <SmartImage
                variant="realisation"
                slug={
                  realisation.hasAvantApres
                    ? `${realisation.slug}-apres`
                    : realisation.slug
                }
                alt={`${realisation.title} à ${realisation.villeName}`}
                aspect="4/3"
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* AVANT/APRÈS si disponible */}
      {realisation.hasAvantApres && (
        <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
          <Container>
            <div className="max-w-3xl mb-10">
              <Eyebrow className="mb-3">Avant / Après</Eyebrow>
              <h2 className="mb-4">Le résultat en images</h2>
              <p className="text-lead">
                Comparez l'état initial de la toiture et le résultat après notre
                intervention. Glissez le curseur pour voir la différence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <figure>
                <SmartImage
                  variant="realisation"
                  slug={`${realisation.slug}-avant`}
                  alt={`Toiture avant intervention — ${realisation.title} à ${realisation.villeName}`}
                  aspect="4/3"
                />
                <figcaption className="mt-3 text-[0.875rem] text-[var(--color-gris-600)] font-semibold">
                  AVANT — état initial de la toiture
                </figcaption>
              </figure>
              <figure>
                <SmartImage
                  variant="realisation"
                  slug={`${realisation.slug}-apres`}
                  alt={`Toiture après intervention — ${realisation.title} à ${realisation.villeName}`}
                  aspect="4/3"
                />
                <figcaption className="mt-3 text-[0.875rem] text-[var(--color-gris-600)] font-semibold">
                  APRÈS — résultat final
                </figcaption>
              </figure>
            </div>
          </Container>
        </section>
      )}

      {/* DÉTAILS CHANTIER */}
      <section className="section-y">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Eyebrow className="mb-3">Détails du chantier</Eyebrow>
              <h2 className="mb-6">Notre intervention en détail</h2>
              <div className="prose prose-lg max-w-none text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed space-y-4 [&_strong]:text-[var(--color-ardoise)]">
                <p>
                  Ce chantier de <strong>{service?.name.toLowerCase() ?? realisation.service}</strong>{' '}
                  à <strong>{realisation.villeName}</strong> illustre notre
                  approche : diagnostic précis, choix techniques justifiés,
                  exécution soignée et finition irréprochable.{' '}
                  {realisation.description}
                </p>
                <p>
                  Réalisé en <strong>{dateFr}</strong> sur la commune de{' '}
                  {realisation.villeName}{villeData ? ` (${villeData.postalCode})` : ''},
                  ce projet a mobilisé notre équipe pendant la durée nécessaire
                  pour livrer un résultat à la hauteur de nos standards : aucune
                  sous-traitance, contrôle qualité à chaque étape, et nettoyage
                  complet du chantier en fin d'intervention.
                </p>
                <p>
                  Comme sur l'ensemble de nos chantiers, cette réalisation est{' '}
                  <strong>couverte par notre assurance décennale</strong>. Le
                  client bénéficie d'une garantie de 10 ans après réception
                  des travaux. Sur demande, nous fournissons l'attestation
                  d'assurance et les photos détaillées de chaque étape de
                  l'intervention.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                <DetailBox
                  icon={<Tag className="w-4 h-4" aria-hidden="true" />}
                  label="Prestation"
                  value={service?.name ?? realisation.service}
                />
                <DetailBox
                  icon={<MapPin className="w-4 h-4" aria-hidden="true" />}
                  label="Localisation"
                  value={realisation.villeName}
                />
                <DetailBox
                  icon={<CalendarDays className="w-4 h-4" aria-hidden="true" />}
                  label="Période"
                  value={dateFr}
                />
              </div>

              {/* Points clés du chantier */}
              <div className="mt-12">
                <h3 className="text-[1.25rem] font-bold mb-5">
                  Points clés de cette intervention
                </h3>
                <ul className="space-y-3">
                  {[
                    `Diagnostic gratuit avant chiffrage`,
                    `Intervention par notre équipe interne, sans sous-traitance`,
                    `Matériaux et produits professionnels adaptés à ${realisation.villeName}`,
                    `Couverture décennale active sur l'ensemble du chantier`,
                    `Photos avant/après remises au client`,
                    `Conseils d'entretien personnalisés en fin de chantier`,
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-[var(--color-garantie)] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-[0.9375rem] text-[var(--color-ardoise)]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar maillage */}
            <aside className="lg:col-span-1">
              <div className="rounded-[var(--radius-lg)] bg-[var(--color-ardoise)] text-[var(--color-pierre)] p-6 sticky top-24">
                <h3 className="text-[1.125rem] font-bold mb-4">
                  Un projet similaire ?
                </h3>
                <p className="text-[0.9375rem] text-[var(--color-gris-300)] mb-5">
                  Décrivez-nous votre besoin, nous établissons un devis
                  personnalisé sous 24h ouvrées.
                </p>
                <Button
                  href="/demande-devis"
                  variant="primary"
                  size="md"
                  fullWidth
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Demander un devis
                </Button>
                <a
                  href={NAP.phoneHref}
                  className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-[var(--radius-md)] border-[1.5px] border-[var(--color-pierre)] text-[var(--color-pierre)] font-semibold hover:bg-[var(--color-pierre)] hover:text-[var(--color-ardoise)] transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {NAP.phoneDisplay}
                </a>

                <div className="mt-8 pt-6 border-t border-[var(--color-ardoise-700)] space-y-3">
                  {servicePage && (
                    <Link
                      href={servicePage.path}
                      className="block text-[0.9375rem] text-[var(--color-gris-300)] hover:text-[var(--color-terre)] transition-colors"
                    >
                      → Tout sur le {service?.name.toLowerCase()} à Bordeaux
                    </Link>
                  )}
                  {villeHubPage && (
                    <Link
                      href={villeHubPage.path}
                      className="block text-[0.9375rem] text-[var(--color-gris-300)] hover:text-[var(--color-terre)] transition-colors"
                    >
                      → Couvreur à {realisation.villeName}
                    </Link>
                  )}
                  <Link
                    href="/realisations"
                    className="block text-[0.9375rem] text-[var(--color-gris-300)] hover:text-[var(--color-terre)] transition-colors"
                  >
                    <ArrowLeft className="inline w-4 h-4 mr-1" aria-hidden="true" />
                    Toutes les réalisations
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <AvisGoogle filterCity={realisation.villeName} />
      <Reassurance />

      <RelatedPages
        slug={villeHubPage?.slug ?? servicePage?.slug ?? 'realisations'}
        title="Pages susceptibles de vous intéresser"
        eyebrow="Aller plus loin"
      />

      <CTAFinal
        title={`Un projet ${service?.name.toLowerCase() ?? 'de toiture'} à ${realisation.villeName} ?`}
        subtitle="Décrivez votre besoin en 2 minutes. Devis détaillé sous 24h, garantie décennale, intervention propre et soignée."
      />

      {/* SCHEMAS */}
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={getArticleSchema({
          headline: `${realisation.title} à ${realisation.villeName}`,
          description: realisation.description,
          url: `${SITE.url}/realisations/${realisation.slug}`,
          imageUrl,
          datePublished: realisation.date,
        })}
      />
      <JsonLd
        data={getImageObjectSchema({
          url: imageUrl,
          caption: `${realisation.title} — chantier réalisé par Couverture Gironde à ${realisation.villeName}`,
          width: 1200,
          height: 900,
        })}
      />
    </>
  );
}

function DetailBox({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-creme)] border border-[var(--color-border)]">
      <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-bold text-[var(--color-terre)] mb-1">
        {icon}
        {label}
      </div>
      <div className="font-bold text-[var(--color-ardoise)]">{value}</div>
    </div>
  );
}
