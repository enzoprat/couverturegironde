import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/content/LegalPageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { NAP, SITE } from '@/lib/constants';

const PAGE = requirePage('politique-confidentialite');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <LegalPageLayout
      slug={PAGE.slug}
      title="Politique de confidentialité"
      updatedAt="2026-05-26"
    >
      <p>
        Cette politique de confidentialité décrit comment {SITE.legalName}{' '}
        collecte, utilise et protège vos données personnelles lors de
        l'utilisation du site{' '}
        <a href={SITE.url}>{SITE.url.replace('https://', '')}</a>, conformément
        au Règlement général sur la protection des données (RGPD) et à la loi
        Informatique et Libertés.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        <strong>{SITE.legalName}</strong> — {NAP.streetAddress},{' '}
        {NAP.postalCode} {NAP.addressLocality}. Pour toute demande relative à
        vos données, utilisez notre{' '}
        <a href="/contact">formulaire de contact</a> ou appelez-nous au{' '}
        <a href={NAP.phoneHref}>{NAP.phoneDisplay}</a>.
      </p>

      <h2>Données collectées</h2>
      <p>
        Nous collectons uniquement les données strictement nécessaires au
        traitement de votre demande :
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Identité</strong> : nom, prénom.
        </li>
        <li>
          <strong>Coordonnées</strong> : téléphone, email, adresse du chantier.
        </li>
        <li>
          <strong>Description du besoin</strong> : type de prestation,
          description du projet, photos optionnelles.
        </li>
      </ul>

      <h2>Finalités du traitement</h2>
      <p>Vos données sont utilisées exclusivement pour :</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Étudier votre demande de devis ;</li>
        <li>Vous recontacter dans le cadre de cette demande ;</li>
        <li>Établir un devis et assurer le suivi commercial ;</li>
        <li>Exécuter, le cas échéant, le contrat conclu avec vous.</li>
      </ul>

      <h2>Base légale</h2>
      <p>
        Le traitement est fondé sur votre consentement explicite (formulaire
        rempli volontairement) et sur l'exécution de mesures précontractuelles
        prises à votre demande (article 6.1.b RGPD).
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Vos données sont conservées pendant 3 ans à compter du dernier contact
        commercial, sauf prolongation justifiée (contrat signé : durée légale
        comptable de 10 ans).
      </p>

      <h2>Destinataires</h2>
      <p>
        Vos données ne sont jamais cédées ni vendues. Seuls les collaborateurs
        de {SITE.legalName} y ont accès, dans la stricte limite de leurs
        missions. Aucun transfert hors Union européenne.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez à tout moment des droits suivants :
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>droit d'accès à vos données ;</li>
        <li>droit de rectification ;</li>
        <li>droit à l'effacement (« droit à l'oubli ») ;</li>
        <li>droit à la portabilité ;</li>
        <li>droit d'opposition au traitement ;</li>
        <li>droit de retirer votre consentement.</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous via notre{' '}
        <a href="/contact">formulaire de contact</a> ou par téléphone au{' '}
        <a href={NAP.phoneHref}>{NAP.phoneDisplay}</a>. En cas de désaccord,
        vous pouvez introduire une réclamation auprès de la{' '}
        <a
          href="https://www.cnil.fr"
          rel="noopener noreferrer"
          target="_blank"
        >
          CNIL
        </a>
        .
      </p>

      <h2>Sécurité</h2>
      <p>
        Les données transmises via le site sont chiffrées en HTTPS (TLS 1.3).
        Le site est hébergé sur Vercel (infrastructure conforme RGPD avec
        traitement des données possible en Europe).
      </p>

      <h2>Cookies</h2>
      <p>
        Pour plus d'informations sur l'utilisation des cookies, consultez notre{' '}
        <a href="/cookies">politique de cookies</a>.
      </p>
    </LegalPageLayout>
  );
}
