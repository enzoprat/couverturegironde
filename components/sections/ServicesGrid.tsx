import Link from 'next/link';
import {
  Sparkles,
  Droplets,
  Shield,
  Wrench,
  AlertTriangle,
  Wind,
  Sun,
  Hammer,
  Mountain,
  Award,
  Home,
  TreePine,
  ArrowUpRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { getPageBySlug } from '@/lib/pages';
import { getPrioritySiloServices, getSecondaryServices } from '@/data/services';
import type { ServiceDefinition } from '@/data/services';

const ICON_MAP = {
  Sparkles,
  Droplets,
  Shield,
  Wrench,
  AlertTriangle,
  Wind,
  Sun,
  Hammer,
  Mountain,
  Award,
  Home,
  TreePine,
} as const;

type ServicesGridProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** `priority` = silo nettoyage/démoussage/hydrofuge ; `all` = tous, priorité visuelle aux silos. */
  scope?: 'priority' | 'all';
  /** Exclure un service précis (utile sur les pages service pour éviter l'auto-lien). */
  excludeServiceId?: string;
};

/**
 * ServicesGrid — affichage des services en cartes premium.
 *
 * Data-driven via `data/services.ts`. Chaque carte lie automatiquement à la
 * page service correspondante dans le registre (pas de hardcode d'URL).
 * Si la page n'existe pas encore dans le registre, la carte n'est pas rendue.
 */
export function ServicesGrid({
  eyebrow = 'Nos services',
  title = 'Démoussage, nettoyage et entretien de toiture',
  intro,
  scope = 'priority',
  excludeServiceId,
}: ServicesGridProps) {
  const priority = getPrioritySiloServices();
  const secondary = getSecondaryServices();

  const list = (scope === 'priority' ? priority : [...priority, ...secondary])
    .filter((s) => s.id !== excludeServiceId);

  return (
    <section className="section-y">
      <Container>
        <div className="max-w-3xl mb-12">
          {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
          <h2 className="mb-4">{title}</h2>
          {intro && <p className="text-lead">{intro}</p>}
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {list.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceDefinition }) {
  // Map serviceId → slug de page (pour le moment : `{type}-bordeaux`)
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

  const targetSlug = SLUG_MAP[service.id];
  const page = targetSlug ? getPageBySlug(targetSlug) : undefined;

  // Aucun lien vers une page inexistante — règle absolue
  if (!page) return null;

  const Icon = ICON_MAP[service.iconName];

  return (
    <li className="group">
      <Link
        href={page.path}
        className="block h-full bg-[var(--color-creme)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 md:p-7 transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] hover:border-[var(--color-ardoise)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)] focus-visible:ring-offset-2"
      >
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-terre)]/10 grid place-items-center text-[var(--color-terre)]">
            <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <ArrowUpRight
            className="w-5 h-5 text-[var(--color-gris-400)] group-hover:text-[var(--color-terre)] transition-colors"
            aria-hidden="true"
          />
        </div>
        <h3 className="text-[var(--text-h4)] font-bold mb-2 text-[var(--color-ardoise)]">
          {service.name}
        </h3>
        <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed mb-4">
          {service.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-[var(--color-garantie)]">
          <Shield className="w-3.5 h-3.5" aria-hidden="true" />
          {service.primaryBenefit}
        </span>
      </Link>
    </li>
  );
}
