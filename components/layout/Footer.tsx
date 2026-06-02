import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { getFooterSections } from '@/lib/pages';
import { NAP, SITE, TRUST } from '@/lib/constants';

/**
 * Footer — data-driven via le registre des pages.
 *
 * Sections (services / villes / entreprise / legal) construites depuis
 * les pages marquées `visibleInFooter: true` avec leur `footerSection`.
 *
 * Pour ajouter un lien : mettre `visibleInFooter: true` + `footerSection` sur
 * la page dans `data/pages.ts`. Rien à modifier ici.
 */
export function Footer() {
  const sections = getFooterSections();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ardoise)] text-[var(--color-pierre)] mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-16 lg:py-20">
          {/* Brand + NAP */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              {/* Logo dans un cercle Pierre pour ressortir sur fond Ardoise */}
              <span className="inline-flex w-12 h-12 rounded-full bg-[var(--color-pierre)] items-center justify-center shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="w-9 h-9 object-contain"
                  aria-hidden="true"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-bold text-[var(--color-pierre)]">
                  {SITE.name}
                </span>
                <span className="text-[0.6875rem] uppercase tracking-wider text-[var(--color-gris-400)]">
                  Couvreur depuis {SITE.foundingYear}
                </span>
              </span>
            </div>

            <p className="text-[0.9375rem] text-[var(--color-gris-300)] leading-relaxed mb-6 max-w-sm">
              Entreprise de couverture et zinguerie à Mérignac. Démoussage,
              nettoyage, réparation et urgence fuite 7j/7 sur Bordeaux et
              toute la Gironde.
            </p>

            <ul className="space-y-2.5 text-[0.9375rem]">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 mt-1 shrink-0 text-[var(--color-terre)]"
                  aria-hidden="true"
                />
                <span className="text-[var(--color-gris-300)]">
                  {NAP.streetAddress}
                  <br />
                  {NAP.postalCode} {NAP.addressLocality}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 shrink-0 text-[var(--color-terre)]"
                  aria-hidden="true"
                />
                <a
                  href={NAP.phoneHref}
                  className="text-[var(--color-pierre)] hover:text-[var(--color-terre)] transition-colors font-semibold"
                >
                  {NAP.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className="w-4 h-4 shrink-0 text-[var(--color-terre)]"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${NAP.email}`}
                  className="text-[var(--color-gris-300)] hover:text-[var(--color-pierre)] transition-colors"
                >
                  {NAP.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--color-or)]/15 text-[var(--color-or-300)]">
              <Star
                className="w-4 h-4 fill-current"
                aria-hidden="true"
              />
              <span className="text-[0.8125rem] font-semibold">
                {TRUST.googleRating}/5 sur {TRUST.googleReviewCount} avis Google
              </span>
            </div>
          </div>

          {/* Sections data-driven */}
          {sections.services && sections.services.length > 0 && (
            <FooterColumn
              title="Services"
              links={sections.services.map((p) => ({
                href: p.path,
                label: p.title,
              }))}
              className="lg:col-span-3"
            />
          )}

          {sections.villes && sections.villes.length > 0 && (
            <FooterColumn
              title="Zones d'intervention"
              links={sections.villes.map((p) => ({
                href: p.path,
                label: p.title.replace('Couvreur ', ''),
              }))}
              className="lg:col-span-2"
            />
          )}

          {sections.entreprise && sections.entreprise.length > 0 && (
            <FooterColumn
              title="Entreprise"
              links={sections.entreprise.map((p) => ({
                href: p.path,
                label: p.title,
              }))}
              className="lg:col-span-3"
            />
          )}
        </div>

        {/* Sub-footer */}
        <div className="border-t border-[var(--color-ardoise-700)] py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[0.8125rem] text-[var(--color-gris-400)]">
            © {year} {SITE.legalName}. Tous droits réservés. Garantie
            décennale.
          </p>
          {sections.legal && sections.legal.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.8125rem]">
              {sections.legal.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={p.path}
                    className="inline-block py-2 text-[var(--color-gris-400)] hover:text-[var(--color-pierre)] transition-colors min-h-[36px] leading-tight"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-[var(--color-pierre)] text-[0.9375rem] font-bold uppercase tracking-wider mb-5">
        {title}
      </h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-block py-2.5 text-[0.9375rem] text-[var(--color-gris-300)] hover:text-[var(--color-terre)] transition-colors min-h-[44px] leading-tight"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
