import {
  ShieldCheck,
  Clock,
  Award,
  Users,
  MapPin,
  Receipt,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

type ReassurancePoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const DEFAULT_POINTS: ReassurancePoint[] = [
  {
    icon: Award,
    title: 'Artisan depuis 2005',
    description:
      "20 ans d'expérience en couverture, zinguerie et entretien de toiture en Gironde. Une équipe stable, formée et qualifiée.",
  },
  {
    icon: ShieldCheck,
    title: 'Garantie décennale',
    description:
      "Chaque chantier est couvert par notre assurance décennale. Vos travaux sont protégés pendant 10 ans après réception.",
  },
  {
    icon: Clock,
    title: 'Devis sous 24h',
    description:
      "Vous nous contactez, nous étudions votre projet et vous répondons sous 24h ouvrées avec un devis détaillé et transparent.",
  },
  {
    icon: MapPin,
    title: 'Intervention locale',
    description:
      "Atelier à Mérignac, intervention sur tout Bordeaux Métropole et la Gironde. Pas de sous-traitance, pas d'intermédiaire.",
  },
  {
    icon: Receipt,
    title: 'Tarifs transparents',
    description:
      "Devis chiffré ligne par ligne, sans surprise. Pas d'acompte démesuré, paiement à la prestation.",
  },
  {
    icon: Users,
    title: '54 avis Google 5/5',
    description:
      "La satisfaction de nos clients est notre meilleure publicité. Consultez nos avis vérifiés avant de nous confier votre toiture.",
  },
];

type ReassuranceProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  points?: ReassurancePoint[];
};

/**
 * Reassurance — bloc "Pourquoi nous choisir" avec 6 piliers de confiance.
 *
 * Réutilisable sur toutes les pages (home, services, villes).
 * Les points peuvent être customisés mais conservent les mêmes piliers
 * pour cohérence cross-pages.
 */
export function Reassurance({
  eyebrow = 'Pourquoi nous choisir',
  title = 'Une entreprise de couverture solide et locale',
  intro = "Couverture Gironde, c'est l'engagement d'un artisan local depuis 2005 : qualité du travail, transparence des prix, et la garantie de parler directement aux personnes qui interviennent sur votre toiture.",
  points = DEFAULT_POINTS,
}: ReassuranceProps) {
  return (
    <section className="section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]">
      <Container>
        <div className="max-w-3xl mb-12">
          <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
          <h2 className="mb-4">{title}</h2>
          {intro && <p className="text-lead">{intro}</p>}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {points.map(({ icon: Icon, title: t, description }) => (
            <li key={t} className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-ardoise)] text-[var(--color-pierre)] grid place-items-center">
                <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[1.125rem] font-bold text-[var(--color-ardoise)] mb-2">
                  {t}
                </h3>
                <p className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
