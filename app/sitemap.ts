import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { getIndexablePages } from '@/lib/pages';
import { REALISATIONS } from '@/data/realisations';
import type { PageEntry } from '@/data/types';

/**
 * Sitemap dynamique — généré à partir du registre des pages + des réalisations.
 *
 * Toute page indiquée comme `indexable: true` dans `data/pages.ts` apparaît
 * automatiquement ici. Les réalisations individuelles sont ajoutées en
 * parcourant `data/realisations.ts`.
 */

const DEFAULTS: Record<
  PageEntry['type'],
  { priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }
> = {
  home: { priority: 1.0, changeFrequency: 'weekly' },
  service: { priority: 0.9, changeFrequency: 'weekly' },
  ville: { priority: 0.8, changeFrequency: 'monthly' },
  'service-ville': { priority: 0.85, changeFrequency: 'monthly' },
  realisation: { priority: 0.6, changeFrequency: 'yearly' },
  guide: { priority: 0.7, changeFrequency: 'monthly' },
  conversion: { priority: 0.8, changeFrequency: 'yearly' },
  institutional: { priority: 0.6, changeFrequency: 'monthly' },
  legal: { priority: 0.3, changeFrequency: 'yearly' },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = getIndexablePages().map((page) => {
    const def = DEFAULTS[page.type];
    return {
      url: `${SITE.url}${page.path}`,
      lastModified: now,
      priority: page.sitemapPriority ?? def.priority,
      changeFrequency: page.sitemapChangeFrequency ?? def.changeFrequency,
    };
  });

  // Réalisations individuelles
  const realisations = REALISATIONS.map((r) => ({
    url: `${SITE.url}/realisations/${r.slug}`,
    lastModified: new Date(r.date),
    priority: 0.6,
    changeFrequency: 'yearly' as const,
  }));

  return [...pages, ...realisations];
}
