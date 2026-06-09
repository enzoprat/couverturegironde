import type { Metadata } from 'next';
import { Receipt, ShieldCheck, Calculator, ArrowRight } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Reassurance } from '@/components/sections/Reassurance';
import { FAQ } from '@/components/sections/FAQ';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { JsonLd } from '@/components/seo/JsonLd';
import { getFAQSchema } from '@/lib/seo/schemas';
import { buildMetadata } from '@/lib/seo/metadata';
import { requirePage } from '@/lib/pages';

const PAGE = requirePage('tarifs');

export const metadata: Metadata = buildMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PAGE.path,
});

const TARIFS_FAQ = [
  {
    question: 'Pourquoi les tarifs sont-ils donnés en fourchette ?',
    answer:
      "Le tarif final dépend de nombreux facteurs : accessibilité de la toiture, état initial, type de matériau, surface précise, présence d'éléments complexes (cheminée, lucarnes, raccords zinguerie). Une fourchette indicative permet d'avoir un ordre de grandeur réaliste, mais seul un devis personnalisé (gratuit) après visite ou diagnostic photo fait foi.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui, totalement. Aucun frais de déplacement, aucun frais d'établissement de devis, aucun engagement à signer. Nous nous déplaçons gratuitement sur Bordeaux Métropole pour les diagnostics qui le nécessitent. Pour les cas simples, un diagnostic à partir de photos détaillées peut suffire.",
  },
  {
    question: 'Acceptez-vous le paiement en plusieurs fois ?',
    answer:
      "Oui, pour les chantiers supérieurs à 5 000 € HT, nous acceptons un paiement échelonné en 2 ou 3 fois sans frais, à convenir au moment de la signature du devis. Pour les éco-prêts à taux zéro liés à la rénovation énergétique, nous fournissons tous les justificatifs nécessaires à votre banque.",
  },
  {
    question: "Quel est l'acompte demandé à la signature ?",
    answer:
      "L'acompte est limité à 30 % du montant HT à la signature du devis pour les chantiers supérieurs à 500 €. Aucun acompte n'est demandé pour les interventions inférieures à 500 €. Le solde se règle à la fin du chantier, après vérification de votre satisfaction.",
  },
  {
    question: 'Quels modes de paiement acceptez-vous ?',
    answer:
      "Virement bancaire (privilégié), chèque, et carte bancaire pour les petites interventions. Pas d'espèces au-delà de 1 000 € (réglementation). Facture détaillée systématique avec mentions TVA et garanties.",
  },
  {
    question: 'Les tarifs incluent-ils la TVA ?',
    answer:
      "Les tarifs indiqués sur cette page sont en HT. La TVA applicable dépend de la nature des travaux : 10 % pour les travaux d'entretien sur logement de plus de 2 ans, 20 % pour les travaux neufs ou sur logement de moins de 2 ans. Le devis détaille toujours la TVA appliquée.",
  },
  {
    question: 'Les travaux sont-ils éligibles à MaPrimeRénov\u2019 ou éco-PTZ ?',
    answer:
      "L'isolation de toiture est éligible à MaPrimeRénov' et à l'éco-PTZ sous conditions. Nous fournissons les attestations RGE et les pièces nécessaires à votre dossier. Pour le démoussage et l'entretien courant, ces aides ne s'appliquent généralement pas.",
  },
];

const TARIF_SECTIONS = [
  {
    title: 'Démoussage et entretien',
    services: [
      {
        name: 'Démoussage toiture (avec brossage manuel)',
        range: '12 – 19 €/m²',
        details:
          'Brossage des zones critiques + traitement anti-mousse rémanent. Garantie décennale.',
      },
      {
        name: 'Démoussage + traitement hydrofuge',
        range: '18 – 28 €/m²',
        details:
          'Combo recommandé. Hydrofuge garanti 10 ans, incolore ou coloré.',
      },
      {
        name: 'Nettoyage haute pression maîtrisé',
        range: '12 – 21 €/m²',
        details:
          "Pression adaptée au matériau, démoussage chimique léger inclus.",
      },
      {
        name: 'Traitement hydrofuge seul',
        range: '6 – 12 €/m²',
        details: 'Sur toiture déjà propre. Application en 2 passages croisés.',
      },
    ],
  },
  {
    title: 'Réparation et urgence',
    services: [
      {
        name: 'Remplacement de tuiles cassées (≤ 10)',
        range: '180 – 480 €',
        details: 'Forfait diagnostic + intervention.',
      },
      {
        name: 'Réfection de faîtage scellé',
        range: '45 – 75 €/ml',
        details: 'Mortier chaux pour bâti ancien, mortier ciment pour récent.',
      },
      {
        name: 'Réfection de faîtage à sec',
        range: '35 – 60 €/ml',
        details: 'Closoirs ventilés, idéal rénovation énergétique.',
      },
      {
        name: "Urgence fuite, mise hors d'eau",
        range: '250 – 650 €',
        details: 'Bâche technique + sécurisation. Réparation chiffrée à part.',
      },
      {
        name: 'Diagnostic post-tempête (dossier assurance)',
        range: 'Gratuit',
        details: 'Photos + chiffrage pour votre déclaration de sinistre.',
      },
    ],
  },
  {
    title: 'Zinguerie',
    services: [
      {
        name: 'Pose de gouttières zinc demi-rondes',
        range: '50 – 95 €/ml',
        details: 'Zinc naturel ou prépatiné. Soudure étain.',
      },
      {
        name: 'Pose de gouttières alu',
        range: '40 – 75 €/ml',
        details: 'Alternative durable au PVC, idéal sur le neuf.',
      },
      {
        name: 'Pose de descente zinc',
        range: '45 – 80 €/ml',
        details: 'Carrée ou ronde, raccords et fixations inclus.',
      },
      {
        name: 'Reprise de noue zinc',
        range: '150 – 280 €/ml',
        details: 'Travail technique, étanchéité critique.',
      },
      {
        name: 'Habillage de souche de cheminée',
        range: '350 – 750 €',
        details: 'Mise hors d\u2019eau définitive en zinc.',
      },
    ],
  },
  {
    title: 'Couverture et charpente',
    services: [
      {
        name: 'Réfection complète tuile canal',
        range: '95 – 165 €/m²',
        details: 'Démontage, lattage neuf, pose tuile, faîtages, zinguerie.',
      },
      {
        name: 'Réfection complète ardoise',
        range: '140 – 220 €/m²',
        details: "Ardoise naturelle d'Angers ou d'Espagne, crochets cuivre.",
      },
      {
        name: 'Pose de toiture neuve (avec charpente)',
        range: '180 – 280 €/m²',
        details: "Selon technique et matériau. Inclut isolation possible.",
      },
      {
        name: 'Installation Velux (avec encastrement)',
        range: '850 – 1 600 €',
        details: "Pose complète, étanchéité, raccords intérieurs.",
      },
      {
        name: 'Traitement charpente curatif',
        range: '15 – 28 €/m²',
        details: 'Insectes xylophages, champignons. Garantie 10 ans.',
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <Hero
        variant="ville"
        eyebrow="Tarifs indicatifs · Bordeaux & Gironde · 2026"
        title={
          <>
            Tarifs couverture, démoussage et zinguerie à{' '}
            <span className="text-[var(--color-terre)]">Bordeaux</span>
          </>
        }
        subtitle="Tarifs indicatifs constatés en 2026 sur Bordeaux Métropole et la Gironde. Devis personnalisé gratuit sous 24h après visite ou diagnostic photo. Aucun frais caché, paiement à la prestation."
        breadcrumbSlug={PAGE.slug}
      />

      {/* SECTION, Engagement transparence */}
      <section className="section-y">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Receipt,
                title: 'Devis détaillé ligne par ligne',
                description:
                  "Chaque ligne du devis correspond à une prestation précise. Pas de \"divers et imprévus\".",
              },
              {
                icon: ShieldCheck,
                title: 'Acompte limité à 30 %',
                description:
                  "Le solde se règle à la fin du chantier, après vérification de votre satisfaction.",
              },
              {
                icon: Calculator,
                title: 'Tarifs HT, TVA détaillée',
                description:
                  "10 % de TVA pour l'entretien, 20 % pour le neuf. Toujours mentionné clairement sur le devis.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-[var(--radius-lg)] bg-[var(--color-creme)] border border-[var(--color-border)]"
              >
                <div className="shrink-0 w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-garantie-100)] text-[var(--color-garantie)] grid place-items-center">
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TABLEAUX TARIFS */}
      {TARIF_SECTIONS.map((section, idx) => (
        <section
          key={section.title}
          className={`section-y ${
            idx % 2 === 0
              ? 'bg-[var(--color-creme)] border-y border-[var(--color-border)]'
              : ''
          }`}
        >
          <Container>
            <Eyebrow className="mb-3">Tarifs {section.title.toLowerCase()}</Eyebrow>
            <h2 className="mb-8">{section.title}</h2>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[var(--color-ardoise)] text-[var(--color-pierre)]">
                  <tr>
                    <th className="px-5 py-4 font-bold uppercase tracking-wider text-[0.75rem]">
                      Prestation
                    </th>
                    <th className="px-5 py-4 font-bold uppercase tracking-wider text-[0.75rem]">
                      Tarif indicatif
                    </th>
                    <th className="px-5 py-4 font-bold uppercase tracking-wider text-[0.75rem] hidden md:table-cell">
                      Détails
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[var(--color-pierre)]">
                  {section.services.map((s) => (
                    <tr
                      key={s.name}
                      className="border-t border-[var(--color-border)]"
                    >
                      <td className="px-5 py-4 font-semibold text-[var(--color-ardoise)] align-top">
                        {s.name}
                      </td>
                      <td className="px-5 py-4 font-bold text-[var(--color-terre)] align-top whitespace-nowrap">
                        {s.range}
                      </td>
                      <td className="px-5 py-4 text-[0.9375rem] text-[var(--color-gris-600)] hidden md:table-cell">
                        {s.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      ))}

      <section className="section-y bg-[var(--color-ardoise)] text-[var(--color-pierre)]">
        <Container size="narrow">
          <Eyebrow className="mb-3 !text-[var(--color-terre-300)]">
            Mention légale
          </Eyebrow>
          <h2 className="mb-5 text-[var(--color-pierre)]">
            Les tarifs ci-dessus n'ont pas valeur de devis
          </h2>
          <p className="text-lead mb-8 text-[var(--color-gris-300)]">
            Ces fourchettes sont données à titre purement informatif, sur la
            base de chantiers récents en Gironde. Le tarif final dépend de
            l'accessibilité, de l'état initial, du matériau, des contraintes
            architecturales et de la complexité spécifique de votre chantier.
            Seul un devis signé après visite ou diagnostic photo fait foi.
          </p>
          <Button
            href="/demande-devis"
            variant="primary"
            size="lg"
            iconRight={<ArrowRight className="w-5 h-5" />}
          >
            Obtenir mon devis personnalisé
          </Button>
        </Container>
      </section>

      <FAQ items={TARIFS_FAQ} title="Questions fréquentes sur nos tarifs" />

      <Reassurance />

      <CTAFinal />

      <JsonLd data={getFAQSchema(TARIFS_FAQ)} />
    </>
  );
}
