import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MobileMenu } from './MobileMenu';
import { getNavPages } from '@/lib/pages';
import { NAP } from '@/lib/constants';

/**
 * Header — sticky, data-driven via le registre des pages.
 *
 * AUCUN lien codé en dur : on lit `getNavPages()` qui retourne uniquement
 * les pages marquées `visibleInNav: true`, triées par `navOrder`.
 *
 * Pour ajouter une page au menu : passer `visibleInNav: true` dans son entrée
 * du registre `data/pages.ts`. Rien à modifier ici.
 */
export function Header() {
  const navPages = getNavPages();
  // On exclut Accueil (visible déjà via le logo) et la page Devis (CTA dédié)
  const visibleNav = navPages.filter(
    (p) => p.slug !== '' && p.slug !== 'demande-devis',
  );

  return (
    <header className="sticky top-0 z-30 bg-[var(--color-pierre)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-pierre)]/85 border-b border-[var(--color-border)]">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-18 gap-4">
          {/* Logo / Brand — visible text sert d'accessible name (pas d'aria-label
              redondant : conforme WCAG 2.5.3 Label in Name). */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 text-[var(--color-ardoise)] hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)] focus-visible:ring-offset-2 rounded-[var(--radius-md)]"
          >
            <Image
              src="/images/logo.webp"
              alt=""
              width={44}
              height={44}
              className="w-10 h-10 md:w-11 md:h-11 shrink-0 object-contain"
              priority
              aria-hidden="true"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-bold text-[1rem] tracking-tight">
                Couverture Gironde
              </span>
              <span className="text-[0.6875rem] text-[var(--color-gris-600)] uppercase tracking-wider">
                Couvreur Mérignac
              </span>
            </span>
            <span className="sr-only">Couverture Gironde, accueil</span>
          </Link>

          {/* Nav desktop */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navigation principale"
          >
            {visibleNav.map((page) => (
              <Link
                key={page.slug}
                href={page.path}
                className="px-3 py-2 text-[0.9375rem] font-semibold text-[var(--color-ardoise)] hover:text-[var(--color-terre)] transition-colors rounded-[var(--radius-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)]"
              >
                {page.title}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={NAP.phoneHref}
              className="hidden lg:inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[var(--color-ardoise)] hover:text-[var(--color-terre)] transition-colors"
              aria-label={`Appeler le ${NAP.phoneDisplay}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <Button href="/demande-devis" variant="primary" size="sm">
              Devis gratuit
            </Button>
          </div>

          {/* Téléphone mobile + hamburger */}
          <div className="flex md:hidden items-center gap-1">
            <a
              href={NAP.phoneHref}
              aria-label={`Appeler le ${NAP.phoneDisplay}`}
              className="inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-terre)] text-[var(--color-creme)] hover:bg-[var(--color-terre-600)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)] focus-visible:ring-offset-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>
            <MobileMenu pages={visibleNav} />
          </div>
        </div>
      </Container>
    </header>
  );
}
