import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

/**
 * robots.txt dynamique servi à /robots.txt.
 *
 * IMPORTANT : NE PAS bloquer `/_next/` !
 * Googlebot doit pouvoir récupérer les chunks JS/CSS/fonts pour rendre la page
 * (mobile-first indexing + rich results + Core Web Vitals). Bloquer `_next/`
 * provoque l'erreur "Googlebot est bloqué par le fichier robots.txt" sur les
 * ressources de la page dans Google Search Console → moins bonne indexation.
 *
 * On bloque uniquement :
 *  - /api/ (endpoints applicatifs, pas du contenu indexable)
 *  - /merci (page de remerciement post-conversion, noindex)
 *
 * Pas de leftover `/wp-admin/` (différence majeure avec l'ancien site).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/merci'],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
