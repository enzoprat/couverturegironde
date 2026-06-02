import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/content/LegalPageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { NAP, SITE } from '@/lib/constants';

const PAGE = requirePage('mentions-legales');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <LegalPageLayout
      slug={PAGE.slug}
      title="Mentions légales"
      updatedAt="2026-05-26"
    >
      <p>
        Conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance dans l'économie numérique, voici les informations légales
        relatives au site{' '}
        <a href={SITE.url}>{SITE.url.replace('https://', '')}</a>.
      </p>

      <h2>Éditeur du site</h2>
      <p>
        <strong>{SITE.legalName}</strong>
        <br />
        {NAP.streetAddress}
        <br />
        {NAP.postalCode} {NAP.addressLocality}
        <br />
        Téléphone : <a href={NAP.phoneHref}>{NAP.phoneDisplay}</a>
        <br />
        Email : <a href={`mailto:${NAP.email}`}>{NAP.email}</a>
      </p>
      <p>
        Activité : entreprise de couverture, zinguerie, démoussage et entretien
        de toiture, exerçant en Gironde depuis {SITE.foundingYear}.
      </p>

      <h2>Directeur de la publication</h2>
      <p>
        Le directeur de la publication est le représentant légal de{' '}
        {SITE.legalName}.
      </p>

      <h2>Hébergeur du site</h2>
      <p>
        <strong>Vercel Inc.</strong>
        <br />
        440 N Barranca Ave #4133
        <br />
        Covina, CA 91723, USA
        <br />
        Site web :{' '}
        <a href="https://vercel.com" rel="noopener noreferrer" target="_blank">
          vercel.com
        </a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble du contenu du site (textes, images, structure, code) est la
        propriété exclusive de {SITE.legalName}, sauf mention contraire. Toute
        reproduction, représentation, modification, publication ou adaptation,
        partielle ou totale, sans autorisation écrite préalable, est strictement
        interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Les informations recueillies via le formulaire de demande de devis sont
        utilisées exclusivement pour traiter votre demande et vous recontacter.
        Elles ne sont jamais cédées ni vendues à des tiers. Pour plus de
        détails, consultez notre{' '}
        <a href="/politique-confidentialite">politique de confidentialité</a>.
      </p>

      <h2>Responsabilité</h2>
      <p>
        {SITE.legalName} met tout en œuvre pour assurer l'exactitude des
        informations diffusées sur ce site mais ne peut garantir l'absence
        d'erreur ou d'omission. Les tarifs indicatifs présentés sur ce site
        n'ont pas valeur de devis. Seul un devis signé fait foi.
      </p>

      <h2>Crédits</h2>
      <p>
        Site conçu et développé spécifiquement pour {SITE.legalName}.
        Photographies : Couverture Gironde et placeholders graphiques propres.
      </p>
    </LegalPageLayout>
  );
}
