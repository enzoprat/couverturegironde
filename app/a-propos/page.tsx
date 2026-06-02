import type { Metadata } from 'next';
import {
  Award,
  Shield,
  Calendar,
  Users,
  Heart,
  Hammer,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reassurance } from '@/components/sections/Reassurance';
import { ChiffresCles } from '@/components/sections/ChiffresCles';
import { AvisGoogle } from '@/components/sections/AvisGoogle';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPlaceSchema } from '@/lib/seo/schemas';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';
import { NAP, SITE, TRUST } from '@/lib/constants';

const PAGE = requirePage('a-propos');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

/**
 * /a-propos — page E-E-A-T critique.
 *
 * Google scrute aujourd'hui Experience, Expertise, Authoritativeness,
 * Trustworthiness, particulièrement pour les métiers manuels.
 * Cette page établit la légitimité de l'entreprise.
 */
export default function Page() {
  return (
    <>
      <Hero
        variant="ville"
        eyebrow="À propos · Mérignac · depuis 2005"
        title={
          <>
            20 ans de toiture en Gironde,{' '}
            <span className="text-[var(--color-terre)]">une équipe locale</span>,
            un engagement clair.
          </>
        }
        subtitle="Couverture Gironde est une entreprise artisanale de couverture, zinguerie et entretien de toiture basée à Mérignac. Nous intervenons sur Bordeaux Métropole et toute la Gironde depuis 2005, sans sous-traitance, avec une seule règle : faire un travail dont nous serions fiers chez nous."
        breadcrumbSlug={PAGE.slug}
      />

      {/* SECTION — Notre histoire */}
      <section className="section-y">
        <Container size="narrow">
          <Eyebrow className="mb-3">Notre histoire</Eyebrow>
          <h2 className="mb-6">Une entreprise locale, ancrée à Mérignac</h2>
          <div className="prose prose-lg max-w-none text-[1.0625rem] text-[var(--color-gris-600)] leading-relaxed space-y-4 [&_strong]:text-[var(--color-ardoise)]">
            <p>
              Couverture Gironde a été fondée en{' '}
              <strong>{SITE.foundingYear}</strong> à Mérignac, avec une
              ambition simple : proposer aux particuliers de Bordeaux
              Métropole un service de couverture sérieux, accessible et sans
              intermédiaire. À l'époque, le métier était en pleine mutation —
              standardisation des produits, multiplication des franchises,
              recours croissant à la sous-traitance. Nous avons fait le choix
              inverse :{' '}
              <strong>
                travailler directement avec nos clients, avec notre propre
                équipe, sur tous nos chantiers
              </strong>
              .
            </p>
            <p>
              Vingt ans plus tard, ce choix reste notre signature. Quand vous
              nous appelez, c'est l'artisan qui interviendra sur votre
              toiture qui prend le téléphone. Quand vous recevez un devis,
              c'est lui qui l'a rédigé après être venu voir votre couverture.
              Quand un problème se présente, vous parlez à la même personne
              du début à la fin. Cette continuité fait toute la différence —
              tant pour la qualité du travail que pour la sérénité du client.
            </p>
            <p>
              Notre dépôt et notre atelier sont situés au{' '}
              <strong>{NAP.streetAddress}, {NAP.postalCode} {NAP.addressLocality}</strong>.
              C'est de là que partent toutes nos interventions sur Bordeaux,
              Mérignac, Pessac, Talence, Bègles, Villenave-d'Ornon, Le Bouscat
              et l'ensemble de Bordeaux Métropole. Cette ancrage local n'est
              pas accessoire : c'est ce qui nous permet d'être réactifs en
              urgence (intervention sous 2-4h en heures ouvrées) et de
              connaître intimement les contraintes de chaque commune — du bâti
              haussmannien bordelais aux toitures pavillonnaires de Saige.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION — Notre savoir-faire */}
      <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Notre savoir-faire</Eyebrow>
            <h2 className="mb-4">
              Tous les corps de métier de la toiture, sous un seul toit
            </h2>
            <p className="text-lead">
              Notre équipe maîtrise l'ensemble des techniques traditionnelles
              et contemporaines de la couverture. Pas de spécialisation
              partielle qui obligerait à sous-traiter — chez nous, on règle
              le projet de A à Z.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Hammer,
                title: 'Couverture tradition',
                description:
                  "Tuile canal, tuile mécanique, ardoise naturelle. Pose, rénovation, restauration de bâti ancien (échoppes bordelaises, maisons bourgeoises).",
              },
              {
                icon: Shield,
                title: 'Zinguerie et étanchéité',
                description:
                  "Pose et rénovation de gouttières, descentes, chéneaux, noues. Soudure étain sur place. Étanchéité toits-terrasses (EPDM, bitume).",
              },
              {
                icon: Award,
                title: 'Démoussage et entretien',
                description:
                  "Démoussage professionnel, nettoyage haute pression maîtrisé, traitement hydrofuge garanti 10 ans. Notre spécialité.",
              },
              {
                icon: Users,
                title: 'Charpente',
                description:
                  "Diagnostic, traitement des bois, remplacement de pièces, renforcement structurel. Traitement curatif insectes et champignons.",
              },
              {
                icon: Calendar,
                title: 'Urgence 7j/7',
                description:
                  "Fuite, tempête, sinistre : intervention sous quelques heures, mise hors d'eau immédiate, devis de réparation détaillé.",
              },
              {
                icon: Heart,
                title: 'Velux et fenêtres de toit',
                description:
                  "Installation, remplacement et étanchéité de fenêtres de toit. Conseil sur le modèle adapté, dimensionnement, orientation.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="bg-[var(--color-pierre)] rounded-[var(--radius-lg)] p-6 border border-[var(--color-border)]"
              >
                <div className="w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-terre)]/10 text-[var(--color-terre)] grid place-items-center mb-4">
                  <item.icon
                    className="w-5 h-5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-[1.0625rem] font-bold text-[var(--color-ardoise)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* SECTION — Nos engagements */}
      <section className="section-y">
        <Container size="narrow">
          <Eyebrow className="mb-3">Nos engagements</Eyebrow>
          <h2 className="mb-6">
            Ce que nous promettons sur chaque chantier
          </h2>
          <div className="space-y-6">
            {[
              {
                title: '1. Un seul interlocuteur, du devis à la réception',
                description:
                  "Nous travaillons en direct. L'artisan qui chiffre est celui qui réalise les travaux et qui assure le SAV. Pas de centre d'appel, pas de chef de chantier que vous ne verrez jamais.",
              },
              {
                title: '2. Une assurance décennale active et vérifiable',
                description:
                  "Notre attestation d'assurance décennale est jointe à chaque devis. Vous êtes protégé pendant 10 ans après réception. Les justificatifs sont disponibles à tout moment.",
              },
              {
                title: '3. Un devis chiffré ligne par ligne',
                description:
                  "Pas d'approximation, pas de \"divers et imprévus\" cachés. Chaque ligne du devis correspond à une prestation précise : surface, matériau, durée, garantie. Si quelque chose vous semble flou, on l'explique.",
              },
              {
                title: '4. Un acompte raisonnable',
                description:
                  "30 % maximum à la signature, le solde à la fin du chantier après vérification de votre satisfaction. Aucun acompte exigé sur les devis inférieurs à 500 €. Vous gardez le contrôle financier de bout en bout.",
              },
              {
                title: '5. Un chantier propre, respectueux du voisinage',
                description:
                  "Bâchage des massifs et descentes, information des voisins, nettoyage complet en fin de chantier. Nos clients nous recommandent autant pour le travail que pour le savoir-vivre.",
              },
              {
                title: '6. Une réponse sous 24h ouvrées',
                description:
                  "Pour chaque demande de devis, vous avez un retour sous 24h ouvrées. Pour les urgences, un appel suffit à déclencher une intervention dans les heures qui suivent.",
              },
            ].map((engagement) => (
              <div
                key={engagement.title}
                className="flex gap-4 p-6 rounded-[var(--radius-lg)] bg-[var(--color-creme)] border border-[var(--color-border)]"
              >
                <CheckCircle2
                  className="w-6 h-6 shrink-0 text-[var(--color-garantie)] mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-[1.0625rem] font-bold text-[var(--color-ardoise)] mb-2">
                    {engagement.title}
                  </h3>
                  <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                    {engagement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ChiffresCles variant="light" />

      {/* SECTION — Atelier */}
      <section className="section-y bg-[var(--color-ardoise)] text-[var(--color-pierre)]">
        <Container>
          <div className="max-w-3xl mb-10">
            <Eyebrow className="mb-3 !text-[var(--color-terre-300)]">
              Notre dépôt
            </Eyebrow>
            <h2 className="mb-4 text-[var(--color-pierre)]">
              Atelier et bureau à Mérignac
            </h2>
            <p className="text-lead text-[var(--color-gris-300)]">
              Notre atelier est notre base depuis 2005. C'est là que nous
              préparons les zingueries sur mesure, stockons les matériaux et
              organisons les chantiers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin
                  className="w-5 h-5 text-[var(--color-terre)] mt-1 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-bold text-[var(--color-pierre)] mb-1">
                    Adresse
                  </div>
                  <div className="text-[0.9375rem] text-[var(--color-gris-300)]">
                    {NAP.streetAddress}
                    <br />
                    {NAP.postalCode} {NAP.addressLocality}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Calendar
                  className="w-5 h-5 text-[var(--color-terre)] mt-1 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-bold text-[var(--color-pierre)] mb-1">
                    Horaires
                  </div>
                  <div className="text-[0.9375rem] text-[var(--color-gris-300)]">
                    Lundi - Dimanche
                    <br />
                    6h - 22h sans interruption
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-[var(--radius-lg)] bg-[var(--color-ardoise-700)] p-6 h-full">
                <div className="flex items-start gap-3 mb-3">
                  <Shield
                    className="w-5 h-5 text-[var(--color-terre)] mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="font-bold text-[var(--color-pierre)] mb-2">
                      Couverture professionnelle
                    </div>
                    <ul className="text-[0.9375rem] text-[var(--color-gris-300)] space-y-1.5">
                      <li>• Assurance décennale active</li>
                      <li>• Responsabilité civile professionnelle</li>
                      <li>• Garantie de parfait achèvement (1 an)</li>
                      <li>• Garantie de bon fonctionnement (2 ans)</li>
                      <li>• Attestations sur demande</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <AvisGoogle
        eyebrow="Ils nous ont fait confiance"
        title={`${TRUST.googleReviewCount} avis Google 5/5 vérifiés`}
        intro="La satisfaction client est notre meilleure publicité. Voici quelques témoignages récents."
      />

      <Reassurance />

      <CTAFinal
        title="Un projet ? Un doute ? Une urgence ?"
        subtitle="Décrivez-nous votre besoin en 2 minutes. Nous revenons vers vous sous 24h ouvrées avec un devis détaillé ou un conseil immédiat."
      />

      <JsonLd data={getPlaceSchema()} />
    </>
  );
}
