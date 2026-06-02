import type { Metadata } from 'next';
import {
  Phone,
  AlertTriangle,
  Clock,
  Shield,
  CheckCircle2,
  AlertCircle,
  Droplet,
  Wind,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Reassurance } from '@/components/sections/Reassurance';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { FAQ } from '@/components/sections/FAQ';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  getFAQSchema,
  getServiceSchema,
} from '@/lib/seo/schemas';
import { FAQ_URGENCE } from '@/data/faq';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { NAP, SITE, TRUST } from '@/lib/constants';

const PAGE = requirePage('urgence');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

/**
 * /urgence — page d'urgence avec CTA téléphone XXL.
 *
 * Direction artistique : fond Ardoise pour contraste immédiat,
 * Terre cuite pour le téléphone (action principale), bleu urgence
 * pour le ton (non anxiogène).
 *
 * Cible : conversion immédiate. Pas de distraction, téléphone partout.
 */
export default function Page() {
  return (
    <>
      {/* HERO ULTRA-DIRECT */}
      <section className="bg-[var(--color-ardoise)] text-[var(--color-pierre)] pt-10 pb-16 md:pt-14 md:pb-24">
        <Container>
          <Breadcrumb slug={PAGE.slug} variant="light" />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-terre)] mb-6">
              <AlertTriangle
                className="w-4 h-4 text-[var(--color-pierre)]"
                aria-hidden="true"
              />
              <span className="text-[0.8125rem] font-bold uppercase tracking-wider text-[var(--color-pierre)]">
                Service urgence 7j/7 · Bordeaux Métropole
              </span>
            </div>
            <h1 className="text-display mb-6 text-[var(--color-pierre)]">
              Toiture qui fuit ? Tempête ? Sinistre ?{' '}
              <span className="text-[var(--color-terre)]">
                Appelez maintenant.
              </span>
            </h1>
            <p className="text-lead mb-10 text-[var(--color-gris-300)] max-w-3xl">
              Mise hors d'eau dans la journée en heures ouvrées (2-4h en
              moyenne sur Bordeaux Métropole). Devis de réparation détaillé
              sous 48h. Couvreur depuis 2005, garantie décennale, aucune
              surfacturation urgence.
            </p>

            {/* CTA téléphone XXL */}
            <a
              href={NAP.phoneHref}
              className="group inline-flex items-center gap-5 px-8 py-6 rounded-[var(--radius-xl)] bg-[var(--color-terre)] hover:bg-[var(--color-terre-600)] transition-colors w-full md:w-auto"
              aria-label={`Appeler le ${NAP.phoneDisplay}`}
            >
              <div className="w-16 h-16 rounded-full bg-[var(--color-pierre)]/15 grid place-items-center">
                <Phone
                  className="w-7 h-7 text-[var(--color-pierre)]"
                  aria-hidden="true"
                />
              </div>
              <div className="text-left">
                <div className="text-[0.8125rem] uppercase tracking-wider font-semibold text-[var(--color-pierre)]/80">
                  Appel direct, sans répondeur
                </div>
                <div className="text-[2rem] md:text-[2.5rem] font-extrabold text-[var(--color-pierre)] leading-none">
                  {NAP.phoneDisplay}
                </div>
              </div>
            </a>

            <p className="mt-5 text-[0.875rem] text-[var(--color-gris-400)]">
              LU – DI · 6h – 22h sans interruption · Hors heures : laissez un
              message vocal, rappel prioritaire à la première heure
            </p>
          </div>
        </Container>
      </section>

      {/* GESTES IMMÉDIATS */}
      <section className="section-y bg-[var(--color-urgence-100)] border-y border-[var(--color-urgence)]/15">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Gestes immédiats</Eyebrow>
            <h2 className="mb-4">
              Ce que vous pouvez faire en attendant notre arrivée
            </h2>
            <p className="text-lead">
              Quelques gestes simples peuvent limiter les dégâts dans les
              premières heures. Voici les bonnes actions à effectuer dès que
              vous constatez une fuite, en attendant notre intervention.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: AlertCircle,
                title: '1. Coupez l\u2019électricité de la zone touchée',
                description:
                  "Si l'eau ruisselle vers des câbles ou prises électriques en plafond : coupez immédiatement le disjoncteur de la pièce concernée pour éviter tout risque.",
              },
              {
                icon: Droplet,
                title: '2. Placez des récipients sous les fuites',
                description:
                  "Bassines, seaux, casseroles : tout ce qui peut récupérer l'eau pour éviter qu'elle ne s'infiltre dans le sol et les meubles. Surveillez et videz régulièrement.",
              },
              {
                icon: Shield,
                title: '3. Déplacez ou protégez les meubles et tapis',
                description:
                  "Tout ce qui est en bois, tissu ou matériau absorbant doit être éloigné de la zone humide. Bâchez ou recouvrez ce qui ne peut être déplacé.",
              },
              {
                icon: Phone,
                title: '4. Photographiez les dégâts',
                description:
                  "Photos systématiques pour votre dossier d'assurance habitation. Détails des dégâts, vues d'ensemble, source apparente de la fuite si visible.",
              },
              {
                icon: AlertTriangle,
                title: '5. Ne montez PAS sur la toiture',
                description:
                  "Toiture mouillée = surface très glissante. Risque de chute mortel. Laissez l'inspection à nos artisans équipés (harnais, lignes de vie).",
              },
              {
                icon: Wind,
                title: '6. Aérez la pièce après la pluie',
                description:
                  "Une fois la pluie passée et l'eau récupérée, ouvrez les fenêtres pour favoriser le séchage et limiter l'humidité résiduelle dans les murs et plafonds.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex gap-4 p-6 rounded-[var(--radius-lg)] bg-[var(--color-pierre)] border border-[var(--color-border)]"
              >
                <div className="shrink-0 w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-urgence)] text-[var(--color-pierre)] grid place-items-center">
                  <item.icon
                    className="w-5 h-5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-[1.0625rem] font-bold text-[var(--color-ardoise)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* APPROCHE EN 2 TEMPS */}
      <section className="section-y">
        <Container size="narrow">
          <Eyebrow className="mb-3">Notre approche en 2 temps</Eyebrow>
          <h2 className="mb-6">
            Mise hors d'eau immédiate, puis réparation à froid
          </h2>
          <div className="prose prose-lg max-w-none text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed space-y-4 [&_strong]:text-[var(--color-ardoise)]">
            <p>
              Notre service d'urgence est conçu autour d'un principe simple :{' '}
              <strong>séparer l'urgence de la décision</strong>. Une fuite de
              toiture est un événement stressant — c'est précisément le pire
              moment pour signer des travaux importants. Notre méthode évite
              cette précipitation et vous laisse le temps de décider à froid.
            </p>
            <p>
              <strong>Temps 1 — Mise hors d'eau immédiate (jour J).</strong>{' '}
              Dès notre arrivée, nous identifions la source de la fuite,
              sécurisons la zone et posons une <strong>bâche technique
              ancrée correctement</strong>, en remplaçant provisoirement les
              tuiles disponibles ou en scellant temporairement les zones
              critiques. Coût : 250 à 650 € selon la surface et la
              complexité, devis chiffré sur place avant intervention.
            </p>
            <p>
              <strong>Temps 2 — Devis de réparation définitive (sous 48h).</strong>{' '}
              Une fois l'urgence traitée, nous prenons le temps d'établir un
              diagnostic complet de la toiture, identifions la cause réelle
              de la fuite (souvent différente de la zone observée) et vous
              proposons un devis détaillé pour une réparation pérenne. Vous
              décidez à tête reposée, comparez si vous le souhaitez, et
              choisissez l'intervention qui vous convient.
            </p>
            <p>
              Cette séparation des temps protège <strong>votre habitation
              dans l'urgence</strong> et votre <strong>portefeuille dans la
              durée</strong>. C'est notre engagement éthique sur le service
              urgence : aucune surfacturation profitant de votre détresse,
              aucune décision forcée dans la panique.
            </p>
          </div>
        </Container>
      </section>

      {/* GARANTIES URGENCE */}
      <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Nos garanties urgence</Eyebrow>
            <h2 className="mb-4">
              Une intervention rapide ne doit pas être une intervention bâclée
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: 'Intervention sous 2-4h en heures ouvrées',
                description:
                  "Sur Bordeaux Métropole, notre planning prévoit des créneaux d'urgence chaque jour pour absorber les sinistres imprévus.",
              },
              {
                icon: CheckCircle2,
                title: 'Tarif urgence connu à l\u2019avance',
                description:
                  "Mise hors d'eau : 250 – 650 € selon surface et accès. Tarif annoncé avant intervention. Aucune surfacturation cachée.",
              },
              {
                icon: Shield,
                title: 'Mise hors d\u2019eau garantie',
                description:
                  "Notre bâche technique tient au minimum jusqu'à la réparation définitive. Si problème, retour immédiat sans frais.",
              },
              {
                icon: AlertTriangle,
                title: 'Dossier d\u2019assurance constitué',
                description:
                  "Photos, devis, attestations : nous vous remettons un dossier solide pour votre déclaration de sinistre habitation.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex gap-4 p-6 rounded-[var(--radius-lg)] bg-[var(--color-pierre)] border border-[var(--color-border)]"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-garantie-100)] text-[var(--color-garantie)] grid place-items-center">
                  <item.icon
                    className="w-6 h-6"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-[1.125rem] font-bold text-[var(--color-ardoise)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA TÉLÉPHONE BIS */}
      <section className="py-16 md:py-24 bg-[var(--color-ardoise)] text-[var(--color-pierre)]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow className="mb-3 !text-[var(--color-terre-300)]">
              Toujours plus vite par téléphone
            </Eyebrow>
            <h2 className="mb-6 text-[var(--color-pierre)]">
              N'attendez pas : un appel suffit
            </h2>
            <p className="text-lead mb-10 text-[var(--color-gris-300)]">
              Chaque heure compte. Un appel direct nous permet d'évaluer
              l'urgence, de vous conseiller les gestes immédiats et de
              planifier notre arrivée. Pas de formulaire à remplir, pas de
              répondeur — un humain au bout du fil.
            </p>
            <Button
              href={NAP.phoneHref}
              variant="primary"
              size="lg"
              iconLeft={<Phone className="w-5 h-5" />}
            >
              {NAP.phoneDisplay} — Appel direct
            </Button>
          </div>
        </Container>
      </section>

      <AvisGoogle
        title="Ils nous ont appelés en urgence — ils témoignent"
        intro="Témoignages de clients ayant fait appel à notre service urgence ces derniers mois."
      />

      <FAQ
        items={FAQ_URGENCE}
        title="Questions fréquentes sur le service urgence"
      />

      <Reassurance />

      <CTAFinal />

      {/* Schemas */}
      <JsonLd
        data={getServiceSchema({
          name: 'Urgence fuite toiture',
          description: PAGE.seoDescription,
          serviceType: 'Service de couverture en urgence',
          url: `${SITE.url}${PAGE.path}`,
        })}
      />
      <JsonLd data={getFAQSchema(FAQ_URGENCE)} />
    </>
  );
}
