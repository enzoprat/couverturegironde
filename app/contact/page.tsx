import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Reassurance } from '@/components/sections/Reassurance';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPlaceSchema } from '@/lib/seo/schemas';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { NAP, OPENING_HOURS, SITE } from '@/lib/constants';

const PAGE = requirePage('contact');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

/**
 * /contact — page coordonnées + accès atelier Mérignac + Maps embed.
 *
 * Compléte la page /demande-devis (formulaire long) pour les visiteurs qui
 * cherchent juste à joindre ou à vérifier la légitimité de l'entreprise.
 *
 * Schemas locaux : Place + LocalBusiness avec geo.
 */
export default function Page() {
  // Génère le src Maps embed avec les coordonnées du registre constants.ts
  const mapsQuery = encodeURIComponent(
    `${NAP.streetAddress}, ${NAP.postalCode} ${NAP.addressLocality}`,
  );
  const mapsEmbed = `https://www.google.com/maps/embed/v1/place?key=&q=${mapsQuery}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <>
      <section className="bg-[var(--color-pierre)] pt-8 md:pt-12 pb-4">
        <Container>
          <Breadcrumb slug={PAGE.slug} />
        </Container>
      </section>

      {/* HERO */}
      <section className="pt-6 md:pt-10 pb-8 md:pb-12 bg-[var(--color-pierre)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="mb-3">Contact · Mérignac · Bordeaux Métropole</Eyebrow>
            <h1 className="mb-5">
              Joindre Couverture Gironde —{' '}
              <span className="text-[var(--color-terre-600)]">artisan couvreur à Mérignac</span>
            </h1>
            <p className="text-lead">
              Atelier au 65 rue de Malbos à Mérignac depuis 2005. Vous pouvez
              nous appeler 7j/7 de 6h à 22h, nous envoyer un email, ou
              demander un devis détaillé via le formulaire en ligne. Réponse
              sous 24h ouvrées, garantie.
            </p>
          </div>
        </Container>
      </section>

      {/* COORDONNÉES + CARTE */}
      <section className="pb-12 md:pb-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Bloc coordonnées */}
            <div className="space-y-4">
              <ContactCard
                icon={<Phone className="w-6 h-6" aria-hidden="true" />}
                title="Téléphone — appel direct, sans répondeur"
                primary={NAP.phoneDisplay}
                href={NAP.phoneHref}
                cta="Appeler maintenant"
                accent
                secondary={`Lundi – Dimanche, ${OPENING_HOURS.opens} – ${OPENING_HOURS.closes}`}
              />
              <ContactCard
                icon={<MessageCircle className="w-6 h-6" aria-hidden="true" />}
                title="WhatsApp — discutez avec nous"
                primary="Envoyer un message WhatsApp"
                href={NAP.whatsappHref}
                cta="Ouvrir WhatsApp"
                external
                secondary="Réponse généralement sous 2h en journée"
              />
              <ContactCard
                icon={<Mail className="w-6 h-6" aria-hidden="true" />}
                title="Email — devis et pièces jointes"
                primary={NAP.email}
                href={`mailto:${NAP.email}`}
                cta="Envoyer un email"
                secondary="Réponse sous 24h ouvrées"
              />
              <ContactCard
                icon={<MapPin className="w-6 h-6" aria-hidden="true" />}
                title="Adresse — atelier sur place"
                primary={`${NAP.streetAddress}, ${NAP.postalCode} ${NAP.addressLocality}`}
                href={mapsLink}
                cta="Itinéraire Google Maps"
                external
                secondary="Visite possible sur rendez-vous"
              />

              {/* Horaires détaillés */}
              <div className="rounded-[var(--radius-lg)] bg-[var(--color-creme)] border border-[var(--color-border)] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock
                    className="w-5 h-5 text-[var(--color-terre-600)]"
                    aria-hidden="true"
                  />
                  <h2 className="text-[1.0625rem] font-bold">Horaires d'ouverture</h2>
                </div>
                <ul className="space-y-1.5 text-[0.9375rem]">
                  <li className="flex justify-between">
                    <span>Lundi – Vendredi</span>
                    <span className="font-semibold">6h – 22h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-semibold">6h – 22h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-semibold">6h – 22h (urgences)</span>
                  </li>
                </ul>
                <p className="text-[0.8125rem] text-[var(--color-gris-600)] mt-3">
                  Hors plages d'ouverture, laissez un message vocal au{' '}
                  {NAP.phoneDisplay}. Rappel prioritaire dès la première heure.
                </p>
              </div>
            </div>

            {/* Carte Google Maps embed */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] bg-[var(--color-creme)]">
                {/* iframe Maps sans key = mode standard public, fonctionne sans config */}
                <iframe
                  title="Atelier Couverture Gironde à Mérignac"
                  src={`https://maps.google.com/maps?q=${mapsQuery}&output=embed`}
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full h-[420px] border-0"
                />
                <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="font-bold text-[0.9375rem] text-[var(--color-ardoise)]">
                      Couverture Gironde
                    </div>
                    <div className="text-[0.875rem] text-[var(--color-gris-600)]">
                      {NAP.streetAddress}, {NAP.postalCode} {NAP.addressLocality}
                    </div>
                  </div>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.875rem] font-semibold text-[var(--color-terre-600)] hover:text-[var(--color-terre-700)] underline-offset-4 hover:underline shrink-0"
                  >
                    Voir sur Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* DEVIS REDIRECT — pour les visiteurs qui cherchent un devis spécifique */}
      <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
        <Container size="narrow">
          <div className="text-center">
            <Eyebrow className="mb-3">Vous voulez un devis ?</Eyebrow>
            <h2 className="mb-5">
              Pour un chiffrage précis, utilisez plutôt le formulaire dédié
            </h2>
            <p className="text-lead mb-8 max-w-2xl mx-auto">
              Le formulaire de demande de devis est conçu pour collecter en 2
              minutes toutes les informations dont nous avons besoin pour
              chiffrer votre projet sous 24h. Plus complet qu'un email
              standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/demande-devis" variant="primary" size="lg">
                Demander un devis gratuit
              </Button>
              <Button href={NAP.phoneHref} variant="secondary" size="lg">
                Ou appelez le {NAP.phoneDisplay}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* GARANTIES rapides */}
      <section className="section-y">
        <Container>
          <div className="max-w-3xl mb-10">
            <Eyebrow className="mb-3">Garanties</Eyebrow>
            <h2 className="mb-4">Pourquoi nous contacter en confiance</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Réponse sous 24h ouvrées',
                description: 'Garanti par écrit',
              },
              {
                title: 'Devis gratuit, sans engagement',
                description: 'Aucun acompte au diagnostic',
              },
              {
                title: 'Assurance décennale active',
                description: 'Attestation sur demande',
              },
              {
                title: 'Données protégées',
                description: 'Aucun partage avec des tiers',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex gap-3 p-5 rounded-[var(--radius-lg)] bg-[var(--color-creme)] border border-[var(--color-border)]"
              >
                <CheckCircle2
                  className="w-5 h-5 shrink-0 text-[var(--color-garantie)] mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-bold text-[0.9375rem] text-[var(--color-ardoise)] mb-1">
                    {item.title}
                  </div>
                  <div className="text-[0.875rem] text-[var(--color-gris-600)]">
                    {item.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <AvisGoogle title="Avis vérifiés de nos clients" />
      <Reassurance />
      <CTAFinal />

      {/* Schemas : Place pour le siège géolocalisé */}
      <JsonLd data={getPlaceSchema()} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Couverture Gironde',
          url: `${SITE.url}${PAGE.path}`,
          mainEntity: { '@id': `${SITE.url}/#localbusiness` },
        }}
      />
    </>
  );
}

function ContactCard({
  icon,
  title,
  primary,
  href,
  cta,
  external = false,
  accent = false,
  secondary,
}: {
  icon: React.ReactNode;
  title: string;
  primary: string;
  href: string;
  cta: string;
  external?: boolean;
  accent?: boolean;
  secondary?: string;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={
        accent
          ? 'group block rounded-[var(--radius-lg)] bg-[var(--color-ardoise)] text-[var(--color-pierre)] p-5 md:p-6 hover:bg-[var(--color-ardoise-700)] transition-colors'
          : 'group block rounded-[var(--radius-lg)] bg-[var(--color-creme)] border border-[var(--color-border)] p-5 md:p-6 hover:border-[var(--color-ardoise)] hover:shadow-[var(--shadow-sm)] transition-all'
      }
    >
      <div className="flex items-start gap-4">
        <div
          className={
            accent
              ? 'shrink-0 w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-terre-600)] text-[var(--color-pierre)] grid place-items-center'
              : 'shrink-0 w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-terre)]/10 text-[var(--color-terre-600)] grid place-items-center'
          }
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div
            className={
              accent
                ? 'text-[0.75rem] uppercase tracking-wider font-bold text-[var(--color-terre-300)] mb-1'
                : 'text-[0.75rem] uppercase tracking-wider font-bold text-[var(--color-terre-600)] mb-1'
            }
          >
            {title}
          </div>
          <div
            className={
              accent
                ? 'text-[1.125rem] md:text-[1.25rem] font-extrabold text-[var(--color-pierre)] break-words'
                : 'text-[1.0625rem] md:text-[1.125rem] font-bold text-[var(--color-ardoise)] break-words'
            }
          >
            {primary}
          </div>
          {secondary && (
            <div
              className={
                accent
                  ? 'text-[0.875rem] text-[var(--color-gris-300)] mt-1'
                  : 'text-[0.875rem] text-[var(--color-gris-600)] mt-1'
              }
            >
              {secondary}
            </div>
          )}
          <div
            className={
              accent
                ? 'text-[0.8125rem] font-semibold text-[var(--color-terre-300)] mt-3 group-hover:translate-x-0.5 transition-transform inline-block'
                : 'text-[0.8125rem] font-semibold text-[var(--color-terre-600)] mt-3 group-hover:translate-x-0.5 transition-transform inline-block'
            }
          >
            {cta} →
          </div>
        </div>
      </div>
    </a>
  );
}
