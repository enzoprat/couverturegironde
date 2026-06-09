import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { getAllLocations } from '@/data/locations';
import { getPageBySlug } from '@/lib/pages';

type ZonesDesserviesProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** Slug à exclure (ex: la ville courante sur une page ville). */
  excludeSlug?: string;
  /** Limiter le nombre de villes affichées (par défaut : tier 1 + 2). */
  limit?: number;
};

/**
 * ZonesDesservies — liste des villes desservies, data-driven via locations.ts.
 *
 * Si la ville a une page dans le registre (hub `couvreur-{ville}`), la carte
 * devient cliquable. Sinon, elle reste un simple badge informationnel
 * (pas de lien mort).
 *
 * Affichage organisé par tier de priorité business.
 */
export function ZonesDesservies({
  eyebrow = "Zones d'intervention",
  title = 'Bordeaux Métropole et toute la Gironde',
  intro = "Couverture Gironde intervient sur l'ensemble de Bordeaux Métropole et les communes de la Gironde. Découvrez notre couverture géographique.",
  excludeSlug,
  limit,
}: ZonesDesserviesProps) {
  const locations = getAllLocations()
    .filter((l) => l.slug !== excludeSlug)
    .filter((l) => l.tier <= 2);

  const shown = limit ? locations.slice(0, limit) : locations;

  return (
    <section className="section-y">
      <Container>
        <div className="max-w-3xl mb-12">
          <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
          <h2 className="mb-4">{title}</h2>
          {intro && <p className="text-lead">{intro}</p>}
        </div>

        <ul
          role="list"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {shown.map((loc) => {
            const hubSlug = `couvreur-${loc.slug}`;
            const page = getPageBySlug(hubSlug);
            const isLinked = Boolean(page);

            const inner = (
              <span className="flex items-center justify-between gap-2 w-full">
                <span className="flex items-center gap-2 min-w-0">
                  <MapPin
                    className="w-4 h-4 text-[var(--color-terre)] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-[var(--color-ardoise)] truncate">
                    {loc.name}
                  </span>
                </span>
                {isLinked && (
                  <ArrowRight
                    className="w-4 h-4 text-[var(--color-gris-400)] group-hover:text-[var(--color-terre)] group-hover:translate-x-0.5 transition-all shrink-0"
                    aria-hidden="true"
                  />
                )}
              </span>
            );

            const baseClass =
              'block px-4 py-3.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-creme)]';

            if (page) {
              return (
                <li key={loc.slug} className="group">
                  <Link
                    href={page.path}
                    className={`${baseClass} hover:border-[var(--color-ardoise)] hover:shadow-[var(--shadow-sm)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)]`}
                  >
                    {inner}
                  </Link>
                </li>
              );
            }
            return (
              <li key={loc.slug}>
                <div className={`${baseClass} cursor-default`}>{inner}</div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <p className="text-[0.9375rem] text-[var(--color-gris-600)]">
            Votre ville n'est pas listée ? Nous intervenons aussi sur devis dans
            toute la Gironde.
          </p>
          <Button href="/demande-devis" variant="ghost" size="sm">
            Demander un devis →
          </Button>
        </div>
      </Container>
    </section>
  );
}
