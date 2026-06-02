import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';

type BuildMetadataParams = {
  title: string;
  description: string;
  /** Path relatif sans query string, ex: `/demoussage-toiture-bordeaux` */
  path: string;
  /** Image OG absolue ou relative à `/public`. Si non fournie, fallback global. */
  image?: string;
  /** `article` pour guides/réalisations, `website` sinon. */
  type?: 'website' | 'article';
  /** noindex pour pages comme `/merci`. */
  noindex?: boolean;
};

const DEFAULT_OG = '/og-default.jpg';

/**
 * Helper centralisé pour generateMetadata.
 * Garantit la cohérence canonical + OG + Twitter + robots sur 100% des pages.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  noindex = false,
}: BuildMetadataParams): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE.url}${image}`
    : `${SITE.url}${DEFAULT_OG}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
      languages: { 'fr-FR': url, 'x-default': url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale.replace('-', '_'),
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
