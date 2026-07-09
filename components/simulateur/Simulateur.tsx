'use client';

import { useMemo, useState } from 'react';
import {
  Phone,
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { SIMULATEUR_CONFIG } from '@/data/simulateur';
import type { Branch, LeadPayload } from './types';
import { WEB3FORMS_KEY, NAP } from '@/lib/constants';
import { toLocatif } from '@/lib/utils';
import { cn } from '@/lib/utils';

type SimulateurProps = {
  /** Ville de la page hôte — pré-remplit le contexte (récap + mail + form). */
  ville?: { slug: string; name: string };
  /** Service de la page hôte — ouvre directement la branche correspondante. */
  service?: string;
  /** Hook tracking : appelé AVEC le payload AVANT l'envoi Web3Forms. */
  onLeadSubmit?: (payload: LeadPayload) => void;
  /** Hook analytics drop-off : appelé à chaque étape franchie + complétion. */
  onStep?: (event: { branch: string; step: string; index: number }) => void;
  className?: string;
};

type Phase = 'intro' | 'steps' | 'outcome' | 'callback' | 'done';
type SubmitStatus = 'idle' | 'submitting' | 'error';

const FR_PHONE = /^(?:\+33|0)\s?[1-9](?:[\s.-]?\d{2}){4}$/;

/** Pousse un événement dans window.dataLayer si présent (non intrusif). */
function pushDataLayer(event: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  if (Array.isArray(w.dataLayer)) w.dataLayer.push(event);
}

/**
 * Simulateur — section interactive de qualification de projet.
 *
 * • Machine à états 100 % côté client (aucune URL, aucune route, aucun sitemap).
 * • Auto-advance : un tap sur une option passe directement à l'étape suivante.
 * • Bouton retour à chaque étape. Téléphone (tel:) visible en permanence.
 * • Écran de sortie non-engageant → 2 actions : Appeler / Être rappelé.
 * • « Être rappelé » → Web3Forms (même mécanisme que DevisForm), honeypot natif.
 *
 * Contraintes SEO : cf. note d'intégration. Le contenu est réduit à des labels ;
 * la substance de la page reste le contenu unique alentour.
 */
export function Simulateur({
  ville,
  service,
  onLeadSubmit,
  onStep,
  className,
}: SimulateurProps) {
  const cfg = SIMULATEUR_CONFIG;

  // Pré-ouverture de branche si la page passe un service qui matche.
  const initialBranch = useMemo<Branch | null>(() => {
    if (!service) return null;
    return (
      cfg.branches.find((b) => b.matchesService?.includes(service)) ?? null
    );
  }, [cfg.branches, service]);

  const [phase, setPhase] = useState<Phase>(
    initialBranch ? (initialBranch.kind === 'urgence' ? 'outcome' : 'steps') : 'intro',
  );
  const [branch, setBranch] = useState<Branch | null>(initialBranch);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const villeSuffix = ville ? ` ${toLocatif(ville.name)}` : '';
  const fillVille = (s: string) => s.replace(/\s*\{ville\}/g, villeSuffix);

  /** Sélection d'une branche à l'étape 1. */
  function selectBranch(b: Branch) {
    setBranch(b);
    setAnswers({});
    if (b.kind === 'urgence') {
      setPhase('outcome');
      onStep?.({ branch: b.id, step: 'urgence-shortcut', index: 0 });
      pushDataLayer({ event: 'simulateur_branch', branch: b.id, kind: 'urgence' });
    } else {
      setStepIndex(0);
      setPhase('steps');
      onStep?.({ branch: b.id, step: 'start', index: 0 });
      pushDataLayer({ event: 'simulateur_branch', branch: b.id });
    }
  }

  /** Choix d'une option → auto-advance. */
  function selectOption(stepId: string, value: string) {
    if (!branch) return;
    const nextAnswers = { ...answers, [stepId]: value };
    setAnswers(nextAnswers);
    onStep?.({ branch: branch.id, step: stepId, index: stepIndex });
    pushDataLayer({ event: 'simulateur_step', branch: branch.id, step: stepId });

    const isLast = stepIndex >= branch.steps.length - 1;
    if (isLast) {
      setPhase('outcome');
      pushDataLayer({ event: 'simulateur_outcome', branch: branch.id });
    } else {
      setStepIndex(stepIndex + 1);
    }
  }

  /** Retour contextuel selon la phase. */
  function goBack() {
    if (phase === 'callback') {
      setPhase('outcome');
      return;
    }
    if (phase === 'outcome') {
      if (!branch || branch.kind === 'urgence' || branch.steps.length === 0) {
        resetToIntro();
      } else {
        setStepIndex(branch.steps.length - 1);
        setPhase('steps');
      }
      return;
    }
    if (phase === 'steps') {
      if (stepIndex === 0) {
        // Si la branche a été pré-ouverte par la page (service), pas d'étape 1 :
        // on réinitialise quand même vers la grille pour laisser le choix.
        resetToIntro();
      } else {
        setStepIndex(stepIndex - 1);
      }
    }
  }

  function resetToIntro() {
    setBranch(null);
    setStepIndex(0);
    setAnswers({});
    setStatus('idle');
    setErrorMsg('');
    setPhase('intro');
  }

  /** Récap lisible « Réfection complète · ~80 m² · sous 1 mois ». */
  function buildRecap(): string {
    if (!branch) return '';
    const parts = branch.steps
      .map((s) => {
        const val = answers[s.id];
        return s.options.find((o) => o.value === val)?.label;
      })
      .filter(Boolean);
    return parts.join(' · ');
  }

  /** Réponses formatées pour le mail : { mailLabel: optionLabel }. */
  function buildReponses(): Record<string, string> {
    if (!branch) return {};
    const out: Record<string, string> = {};
    for (const s of branch.steps) {
      const val = answers[s.id];
      const label = s.options.find((o) => o.value === val)?.label;
      if (label) out[s.mailLabel] = label;
    }
    return out;
  }

  async function handleCallbackSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!branch) return;
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot Web3Forms natif — si rempli = bot, on simule un succès silencieux.
    if (fd.get('botcheck')) {
      setPhase('done');
      return;
    }

    const telephone = String(fd.get('telephone') ?? '').trim();
    const prenom = String(fd.get('prenom') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const consent = fd.get('consent');

    if (!FR_PHONE.test(telephone)) {
      setStatus('error');
      setErrorMsg('Merci d\u2019indiquer un numéro de téléphone français valide.');
      return;
    }
    if (!consent) {
      setStatus('error');
      setErrorMsg('Merci de cocher la case de consentement pour être recontacté.');
      return;
    }

    const reponses = buildReponses();
    const recap = buildRecap();
    const horodatage = new Date().toISOString();

    const payload: LeadPayload = {
      typeChantier: branch.label,
      reponses,
      ville: ville?.name,
      prenom: prenom || undefined,
      telephone,
      email: email || undefined,
      horodatage,
    };

    // Hook tracking / second usage — AVANT Web3Forms, ne bloque pas l'envoi.
    try {
      onLeadSubmit?.(payload);
    } catch {
      /* un hook défaillant ne doit pas casser l'envoi du lead */
    }
    pushDataLayer({
      event: 'simulateur_lead',
      branch: branch.id,
      ville: ville?.slug,
    });

    // Construction du payload Web3Forms (champs lisibles dans le mail).
    const w3 = new FormData();
    w3.append('access_key', WEB3FORMS_KEY);
    const subjectVille = ville?.name ? ` — ${ville.name}` : '';
    const subjectRecap = recap ? ` (${recap})` : '';
    w3.append(
      'subject',
      `Nouveau lead — ${branch.label}${subjectRecap}${subjectVille}`,
    );
    w3.append('from_name', 'Simulateur couverturegironde.fr');
    w3.append('Type de chantier', branch.label);
    for (const [label, value] of Object.entries(reponses)) {
      w3.append(label, value);
    }
    if (ville?.name) w3.append('Ville', ville.name);
    if (prenom) w3.append('Prénom', prenom);
    w3.append('Téléphone', telephone);
    if (email) {
      w3.append('Email', email);
      w3.append('replyto', email);
    }
    w3.append('Horodatage', horodatage);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: w3,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        throw new Error(
          data?.message ??
            `Une erreur est survenue. Appelez-nous directement au ${NAP.phoneDisplay}.`,
        );
      }
      setPhase('done');
      pushDataLayer({ event: 'simulateur_lead_success', branch: branch.id });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Erreur inconnue.');
    }
  }

  const totalSteps = branch?.steps.length ?? 0;
  const currentStep = branch?.steps[stepIndex];

  return (
    <section
      className={cn(
        'section-y bg-[var(--color-creme)] border-y border-[var(--color-border)]',
        className,
      )}
      aria-label="Simulateur de projet de toiture"
    >
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Eyebrow className="mb-3">{cfg.sectionEyebrow}</Eyebrow>
            <h2 className="mb-3">{cfg.sectionTitle}</h2>
            <p className="text-[1rem] text-[var(--color-gris-600)]">
              {cfg.sectionIntro}
            </p>
          </div>

          {/* Conteneur à hauteur réservée → CLS ≈ 0 (pas de saut au changement d'écran). */}
          <div className="relative rounded-[var(--radius-lg)] bg-[var(--color-pierre)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] p-5 md:p-8 min-h-[clamp(420px,60vh,560px)] flex flex-col">
            {/* Barre supérieure : retour + progression + téléphone permanent */}
            <div className="flex items-center justify-between gap-3 mb-6 min-h-[40px]">
              {phase !== 'intro' && phase !== 'done' ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-[var(--color-gris-600)] hover:text-[var(--color-terre-600)] rounded-[var(--radius-sm)] px-2 py-1 -ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)]"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  Retour
                </button>
              ) : (
                <span aria-hidden="true" />
              )}

              {phase === 'steps' && totalSteps > 0 && (
                <span
                  className="text-[0.8125rem] font-semibold text-[var(--color-gris-600)]"
                  aria-live="polite"
                >
                  Étape {stepIndex + 1}/{totalSteps}
                </span>
              )}

              <a
                href={NAP.phoneHref}
                className="inline-flex items-center gap-1.5 text-[0.875rem] font-bold text-[var(--color-terre-600)] hover:text-[var(--color-terre-700)] rounded-[var(--radius-sm)] px-2 py-1 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)]"
                aria-label={`Appeler Couverture Gironde au ${NAP.phoneDisplay}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">{NAP.phoneDisplay}</span>
                <span className="sm:hidden">Appeler</span>
              </a>
            </div>

            {/* Barre de progression fine (steps only) */}
            {phase === 'steps' && totalSteps > 0 && (
              <div
                className="h-1 w-full rounded-full bg-[var(--color-border)] mb-6 overflow-hidden"
                role="progressbar"
                aria-valuemin={1}
                aria-valuemax={totalSteps}
                aria-valuenow={stepIndex + 1}
              >
                <div
                  className="h-full bg-[var(--color-terre-600)] transition-[width] duration-300"
                  style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
                />
              </div>
            )}

            <div className="flex-1 flex flex-col">
              {/* ---------- ÉTAPE 1 : choix du type de chantier ---------- */}
              {phase === 'intro' && (
                <fieldset className="border-0 p-0 m-0">
                  <legend className="text-[1.125rem] font-bold text-[var(--color-ardoise)] mb-5 text-center w-full">
                    {cfg.step1Question}
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cfg.branches.map((b) => (
                      <ChoiceCard
                        key={b.id}
                        icon={b.icon}
                        label={b.label}
                        hint={b.hint}
                        onClick={() => selectBranch(b)}
                        big
                      />
                    ))}
                  </div>
                </fieldset>
              )}

              {/* ---------- ÉTAPES DE BRANCHE ---------- */}
              {phase === 'steps' && currentStep && (
                <fieldset className="border-0 p-0 m-0">
                  <legend className="text-[1.125rem] font-bold text-[var(--color-ardoise)] mb-5 w-full">
                    {currentStep.question}
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentStep.options.map((o) => (
                      <ChoiceCard
                        key={o.value}
                        icon={o.icon}
                        label={o.label}
                        hint={o.hint}
                        onClick={() => selectOption(currentStep.id, o.value)}
                      />
                    ))}
                  </div>
                </fieldset>
              )}

              {/* ---------- ÉCRAN DE SORTIE ---------- */}
              {phase === 'outcome' && branch && (
                <OutcomeView
                  branch={branch}
                  recap={buildRecap()}
                  villeName={ville?.name}
                  fillVille={fillVille}
                  onCallback={() => {
                    setStatus('idle');
                    setErrorMsg('');
                    setPhase('callback');
                    pushDataLayer({
                      event: 'simulateur_callback_open',
                      branch: branch.id,
                    });
                  }}
                />
              )}

              {/* ---------- FORMULAIRE « ÊTRE RAPPELÉ » ---------- */}
              {phase === 'callback' && branch && (
                <CallbackForm
                  villeName={ville?.name}
                  status={status}
                  errorMsg={errorMsg}
                  onSubmit={handleCallbackSubmit}
                />
              )}

              {/* ---------- CONFIRMATION ---------- */}
              {phase === 'done' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
                  <CheckCircle2
                    className="w-14 h-14 text-[var(--color-garantie)] mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="text-[1.25rem] font-bold text-[var(--color-ardoise)] mb-2">
                    C&apos;est noté, merci&nbsp;!
                  </h3>
                  <p className="text-[0.9375rem] text-[var(--color-gris-600)] max-w-sm mb-6">
                    Nous vous rappelons sous 24h ouvrées. Pour une urgence,
                    appelez-nous directement.
                  </p>
                  <Button
                    href={NAP.phoneHref}
                    variant="primary"
                    size="md"
                    iconLeft={<Phone className="w-5 h-5" />}
                  >
                    {NAP.phoneDisplay}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   Sous-composants
   ============================================================ */

function ChoiceCard({
  icon,
  label,
  hint,
  onClick,
  big = false,
}: {
  icon?: string;
  label: string;
  hint?: string;
  onClick: () => void;
  big?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        'group text-left rounded-[var(--radius-md)] border-[1.5px] border-[var(--color-border)] bg-[var(--color-creme)]',
        'hover:border-[var(--color-terre)] hover:bg-[var(--color-pierre)] hover:shadow-[var(--shadow-sm)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)] focus-visible:ring-offset-2',
        'transition-all duration-[var(--duration-fast)] active:scale-[0.99]',
        'flex items-center gap-3 w-full',
        big ? 'min-h-[76px] p-4' : 'min-h-[64px] p-4',
      )}
    >
      {icon && (
        <span
          className="text-2xl shrink-0 leading-none"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <span className="flex-1 min-w-0">
        <span className="block font-bold text-[var(--color-ardoise)] text-[1rem] leading-tight">
          {label}
        </span>
        {hint && (
          <span className="block text-[0.8125rem] text-[var(--color-gris-600)] mt-0.5">
            {hint}
          </span>
        )}
      </span>
      <ArrowRight
        className="w-4 h-4 shrink-0 text-[var(--color-gris-400)] group-hover:text-[var(--color-terre)] transition-colors"
        aria-hidden="true"
      />
    </button>
  );
}

function OutcomeView({
  branch,
  recap,
  villeName,
  fillVille,
  onCallback,
}: {
  branch: Branch;
  recap: string;
  villeName?: string;
  fillVille: (s: string) => string;
  onCallback: () => void;
}) {
  const o = branch.outcome;
  const isUrgence = o.mode === 'urgence';

  return (
    <div className="flex-1 flex flex-col">
      {/* Récap projet */}
      {(recap || villeName) && (
        <div className="rounded-[var(--radius-md)] bg-[var(--color-creme)] border border-[var(--color-border)] px-4 py-3 mb-5">
          <div className="text-[0.6875rem] uppercase tracking-wider font-bold text-[var(--color-terre-700)] mb-1">
            Votre projet
          </div>
          <div className="text-[0.9375rem] font-semibold text-[var(--color-ardoise)]">
            {branch.label}
            {recap ? ` · ${recap}` : ''}
            {villeName ? ` · ${villeName}` : ''}
          </div>
        </div>
      )}

      <h3 className="text-[1.25rem] font-bold text-[var(--color-ardoise)] mb-3">
        {o.title}
      </h3>

      {/* Valeur restituée selon le mode */}
      {o.mode === 'price-range' && o.priceRange && (
        <div className="rounded-[var(--radius-md)] bg-[var(--color-terre)]/10 border border-[var(--color-terre)]/30 px-4 py-4 mb-4 text-center">
          <div className="text-[0.75rem] uppercase tracking-wider font-bold text-[var(--color-terre-700)] mb-1">
            Estimation indicative
          </div>
          <div className="text-[1.75rem] font-bold text-[var(--color-terre-700)] leading-none">
            {o.priceRange}
          </div>
        </div>
      )}

      {o.mode === 'eligibilite' && (
        <div className="rounded-[var(--radius-md)] bg-[var(--color-garantie-100)] border border-[var(--color-garantie)] px-4 py-3 mb-4 flex items-center gap-3">
          <ShieldCheck
            className="w-6 h-6 text-[var(--color-garantie)] shrink-0"
            aria-hidden="true"
          />
          <span className="text-[0.9375rem] font-semibold text-[var(--color-ardoise)]">
            Projet a priori éligible aux aides
          </span>
        </div>
      )}

      <div className="space-y-2 mb-4">
        {o.body.map((p) => (
          <p
            key={p}
            className="text-[0.9375rem] text-[var(--color-gris-600)] leading-relaxed"
          >
            {fillVille(p)}
          </p>
        ))}
      </div>

      {o.delai && (
        <p className="text-[0.875rem] font-semibold text-[var(--color-ardoise)] mb-4">
          ⏱️ {o.delai}
        </p>
      )}

      {o.disclaimer && (
        <p className="text-[0.8125rem] italic text-[var(--color-gris-600)] mb-5">
          {o.disclaimer}
        </p>
      )}

      {/* 2 actions — Appeler (toujours) + Être rappelé */}
      <div className="mt-auto flex flex-col sm:flex-row gap-3">
        <Button
          href={NAP.phoneHref}
          variant="primary"
          size="lg"
          fullWidth
          iconLeft={<Phone className="w-5 h-5" />}
        >
          {isUrgence ? `Appeler maintenant — ${NAP.phoneDisplay}` : 'Appeler'}
        </Button>
        <Button
          type="button"
          onClick={onCallback}
          variant="secondary"
          size="lg"
          fullWidth
          iconRight={<PhoneCall className="w-5 h-5" />}
        >
          Être rappelé
        </Button>
      </div>
    </div>
  );
}

function CallbackForm({
  villeName,
  status,
  errorMsg,
  onSubmit,
}: {
  villeName?: string;
  status: SubmitStatus;
  errorMsg: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const labelClass =
    'block text-[0.875rem] font-semibold text-[var(--color-ardoise)] mb-1.5';
  const inputClass =
    'w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-creme)] border border-[var(--color-border)] focus:border-[var(--color-terre)] focus:bg-[var(--color-pierre)] focus:outline-none focus:ring-2 focus:ring-[var(--color-terre)]/30 transition-colors text-[1rem]';

  return (
    <form onSubmit={onSubmit} className="flex-1 flex flex-col" noValidate>
      <h3 className="text-[1.25rem] font-bold text-[var(--color-ardoise)] mb-1">
        Être rappelé gratuitement
      </h3>
      <p className="text-[0.875rem] text-[var(--color-gris-600)] mb-5">
        Laissez votre numéro, nous vous rappelons sous 24h ouvrées.
      </p>

      {/* Honeypot Web3Forms — masqué, seuls les bots le remplissent */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="sim-prenom" className={labelClass}>
            Prénom
          </label>
          <input
            id="sim-prenom"
            name="prenom"
            type="text"
            autoComplete="given-name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="sim-tel" className={labelClass}>
            Téléphone
            <span className="text-[var(--color-terre-600)] ml-0.5">*</span>
          </label>
          <input
            id="sim-tel"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="06 12 34 56 78"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="sim-email" className={labelClass}>
          Email <span className="text-[var(--color-gris-400)]">(optionnel)</span>
        </label>
        <input
          id="sim-email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
        />
      </div>

      {villeName && (
        <p className="text-[0.8125rem] text-[var(--color-gris-600)] mb-4">
          📍 Chantier {toLocatif(villeName)}
        </p>
      )}

      {/* Consentement RGPD — non pré-coché */}
      <label className="flex items-start gap-2.5 mb-5 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 w-5 h-5 shrink-0 accent-[var(--color-terre-600)] cursor-pointer"
        />
        <span className="text-[0.8125rem] text-[var(--color-gris-600)] leading-snug">
          J&apos;accepte d&apos;être recontacté au sujet de ma demande. Mes
          données ne sont jamais transmises à des tiers. Voir la{' '}
          <a
            href="/politique-confidentialite"
            className="underline hover:text-[var(--color-terre-600)]"
          >
            politique de confidentialité
          </a>
          .
        </span>
      </label>

      {status === 'error' && errorMsg && (
        <div
          role="alert"
          className="rounded-[var(--radius-md)] bg-[var(--color-urgence-100)] border border-[var(--color-urgence)] p-3 flex items-start gap-2.5 text-[0.875rem] mb-4"
        >
          <AlertCircle
            className="w-5 h-5 shrink-0 text-[var(--color-urgence)] mt-0.5"
            aria-hidden="true"
          />
          <span className="text-[var(--color-ardoise)]">{errorMsg}</span>
        </div>
      )}

      <div className="mt-auto">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={status === 'submitting'}
          iconRight={<ArrowRight className="w-5 h-5" />}
        >
          {status === 'submitting'
            ? 'Envoi en cours…'
            : 'Je veux être rappelé'}
        </Button>
      </div>
    </form>
  );
}
