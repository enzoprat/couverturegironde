import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Phone, Home, ArrowRight } from 'lucide-react';
import { NAP } from '@/lib/constants';
import { getPrioritySiloServices } from '@/data/services';
import { getPageBySlug } from '@/lib/pages';
import Link from 'next/link';

/**
 * 404, page introuvable.
 *
 * Stratégie : ne JAMAIS être un cul-de-sac. Le visiteur arrivé ici (souvent
 * via un ancien lien externe ou un typo) doit pouvoir repartir vers un
 * contenu utile en 1 clic.
 *
 * Liens proposés : silo prioritaire (démoussage/nettoyage/hydrofuge) +
 * accueil + téléphone. Tout est piloté via le registre des pages, donc
 * jamais de lien mort.
 */
export default function NotFound() {
  const priorityServices = getPrioritySiloServices()
    .map((s) => {
      const slugMap: Record<string, string> = {
        demoussage: 'demoussage-toiture-bordeaux',
        nettoyage: 'nettoyage-toiture-bordeaux',
        hydrofuge: 'traitement-hydrofuge-toiture-bordeaux',
      };
      const targetSlug = slugMap[s.id];
      return targetSlug ? getPageBySlug(targetSlug) : undefined;
    })
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <section className="py-20 md:py-32 bg-[var(--color-pierre)]">
      <Container size="narrow">
        <div className="text-center">
          <Eyebrow className="mb-3">Erreur 404</Eyebrow>
          <h1 className="mb-4">Cette page n'existe pas ou a été déplacée</h1>
          <p className="text-lead mb-10 max-w-xl mx-auto">
            Pas de panique. Voici les pages qui peuvent vous intéresser, ou
            appelez-nous directement pour un conseil immédiat.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button
              href="/"
              variant="primary"
              size="lg"
              iconLeft={<Home className="w-5 h-5" />}
            >
              Retour à l'accueil
            </Button>
            <Button
              href={NAP.phoneHref}
              variant="secondary"
              size="lg"
              iconLeft={<Phone className="w-5 h-5" />}
            >
              {NAP.phoneDisplay}
            </Button>
          </div>

          {priorityServices.length > 0 && (
            <div className="mt-12 text-left">
              <h2 className="text-[1.125rem] font-bold mb-5 text-center">
                Nos services les plus demandés
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {priorityServices.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={p.path}
                      className="group flex items-center justify-between gap-2 p-4 rounded-[var(--radius-md)] bg-[var(--color-creme)] border border-[var(--color-border)] hover:border-[var(--color-ardoise)] transition-colors"
                    >
                      <span className="font-semibold text-[var(--color-ardoise)]">
                        {p.title}
                      </span>
                      <ArrowRight
                        className="w-4 h-4 text-[var(--color-gris-400)] group-hover:text-[var(--color-terre)] group-hover:translate-x-0.5 transition-all"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
