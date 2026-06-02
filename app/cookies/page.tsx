import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/content/LegalPageLayout';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { SITE } from '@/lib/constants';

const PAGE = requirePage('cookies');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

export default function Page() {
  return (
    <LegalPageLayout
      slug={PAGE.slug}
      title="Politique de cookies"
      updatedAt="2026-05-26"
    >
      <p>
        Le site {SITE.url.replace('https://', '')} utilise un nombre minimal de
        cookies, dans le respect du RGPD et des recommandations de la CNIL.
        Cette page détaille leur usage et la manière de les contrôler.
      </p>

      <h2>Qu'est-ce qu'un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé par un site web sur votre
        appareil (ordinateur, smartphone). Il peut servir à se souvenir de vos
        préférences, à mesurer la fréquentation du site ou à proposer des
        contenus personnalisés.
      </p>

      <h2>Cookies utilisés sur ce site</h2>
      <h3>Cookies strictement nécessaires</h3>
      <p>
        Ces cookies sont indispensables au bon fonctionnement du site (sécurité,
        gestion du formulaire). Ils ne nécessitent pas votre consentement et
        sont automatiquement déposés.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Cookies de session</strong> : utilisés pour sécuriser les
          soumissions de formulaire et protéger contre les attaques automatisées.
        </li>
      </ul>

      <h3>Cookies de mesure d'audience</h3>
      <p>
        Nous utilisons une solution d'analytics respectueuse de la vie privée
        (Plausible Analytics) qui ne dépose <strong>aucun cookie</strong>{' '}
        traceur. Les données collectées sont anonymisées et agrégées, sans
        possibilité d'identification individuelle.
      </p>
      <p>
        Aucun cookie publicitaire, aucun pixel de réseau social, aucun outil de
        retargeting n'est utilisé sur ce site.
      </p>

      <h2>Contrôle des cookies</h2>
      <p>
        Vous pouvez à tout moment configurer votre navigateur pour bloquer ou
        supprimer les cookies. Les principales procédures :
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur"
            rel="noopener noreferrer"
            target="_blank"
          >
            Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
            rel="noopener noreferrer"
            target="_blank"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            rel="noopener noreferrer"
            target="_blank"
          >
            Edge
          </a>
        </li>
      </ul>
      <p>
        Le blocage des cookies strictement nécessaires peut empêcher le bon
        fonctionnement du formulaire de demande de devis.
      </p>
    </LegalPageLayout>
  );
}
