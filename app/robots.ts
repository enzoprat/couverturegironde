import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

/**
 * robots.txt dynamique servi à /robots.txt.
 *
 * Pas de leftover `/wp-admin/` (différence majeure avec l'ancien site).
 * Pages non indexables exclues : /merci (conversion), /_next, /api.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/merci', '/_next/'],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
