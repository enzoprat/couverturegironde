'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getServicesByPriority } from '@/data/services';
import { WEB3FORMS_KEY } from '@/lib/constants';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type DevisFormProps = {
  /** Pré-sélectionne un service (utile sur les pages services). */
  defaultService?: string;
  /** Variante compacte (3 champs essentiels uniquement). */
  variant?: 'long' | 'short';
};

/**
 * DevisForm — formulaire de demande de devis.
 *
 * Backend : Web3Forms (https://web3forms.com)
 *   - POST direct vers https://api.web3forms.com/submit
 *   - Pas de serveur intermédiaire nécessaire
 *   - Honeypot intégré (champ `botcheck`)
 *   - Sujet et nom d'expéditeur auto-renseignés
 *   - Mail destinataire configuré côté Web3Forms (non-visible côté site)
 *
 * Variants :
 *   - `long`  : tous les champs (page /demande-devis)
 *   - `short` : nom + tél + besoin (intégrable en bas de pages services)
 *
 * Sécurité :
 *   - Honeypot Web3Forms natif (`botcheck`)
 *   - La clé `WEB3FORMS_KEY` est publique par design (côté Web3Forms)
 *   - Validation côté client minimaliste, validation finale côté Web3Forms
 *
 * État UX :
 *   - Feedback visuel inline (success / error)
 *   - Bouton désactivé pendant submit
 *   - Redirige vers /merci en cas de succès
 */
export function DevisForm({
  defaultService,
  variant = 'long',
}: DevisFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const services = getServicesByPriority();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);

    // Honeypot Web3Forms natif — si rempli = bot
    if (formData.get('botcheck')) {
      setStatus('success');
      return;
    }

    // Champs métadonnées Web3Forms
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append(
      'subject',
      `Nouveau devis Couverture Gironde — ${String(formData.get('service') ?? '?')}`,
    );
    formData.append('from_name', 'couverturegironde.fr');
    // Replyto = email du client (si fourni) pour faciliter la réponse directe
    const clientEmail = String(formData.get('email') ?? '');
    if (clientEmail) {
      formData.append('replyto', clientEmail);
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        throw new Error(
          data?.message ??
            "Une erreur est survenue. Merci de réessayer ou de nous appeler directement au 07 68 69 78 48.",
        );
      }
      setStatus('success');
      window.location.href = '/merci';
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Erreur inconnue');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[var(--radius-lg)] bg-[var(--color-garantie-100)] border border-[var(--color-garantie)] p-6 md:p-8 flex items-start gap-4">
        <CheckCircle2
          className="w-6 h-6 shrink-0 text-[var(--color-garantie)] mt-0.5"
          aria-hidden="true"
        />
        <div>
          <h3 className="font-bold text-[var(--color-ardoise)] mb-2">
            Votre demande a bien été envoyée
          </h3>
          <p className="text-[0.9375rem] text-[var(--color-gris-600)]">
            Nous revenons vers vous sous 24h ouvrées. Pour les urgences,
            appelez-nous directement au <strong>07 68 69 78 48</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      aria-label="Formulaire de demande de devis"
    >
      {/* Honeypot Web3Forms — champ caché que seuls les bots remplissent */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          id="nom"
          name="nom"
          label="Votre nom"
          type="text"
          required
          autoComplete="name"
        />
        <Field
          id="telephone"
          name="telephone"
          label="Téléphone"
          type="tel"
          required
          autoComplete="tel"
          pattern="^(?:\\+33|0)\\s?[1-9](?:[\\s.-]?\\d{2}){4}$"
        />
      </div>

      <Field
        id="email"
        name="email"
        label="Email"
        type="email"
        required={variant === 'long'}
        autoComplete="email"
      />

      {variant === 'long' && (
        <Field
          id="adresse"
          name="adresse"
          label="Adresse du chantier (ville suffit)"
          type="text"
          required
          autoComplete="street-address"
        />
      )}

      <SelectField
        id="service"
        name="service"
        label="Type de prestation"
        defaultValue={defaultService}
        options={services.map((s) => ({
          value: s.id,
          label: s.name,
        }))}
        required
      />

      <TextareaField
        id="description"
        name="description"
        label="Décrivez votre besoin"
        placeholder="Surface estimée, ancienneté de la toiture, problème observé…"
        required={variant === 'long'}
        rows={variant === 'long' ? 5 : 3}
      />

      {status === 'error' && errorMsg && (
        <div
          role="alert"
          className="rounded-[var(--radius-md)] bg-[var(--color-urgence-100)] border border-[var(--color-urgence)] p-4 flex items-start gap-3 text-[0.9375rem]"
        >
          <AlertCircle
            className="w-5 h-5 shrink-0 text-[var(--color-urgence)] mt-0.5"
            aria-hidden="true"
          />
          <span className="text-[var(--color-ardoise)]">{errorMsg}</span>
        </div>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={status === 'submitting'}
          iconRight={<Send className="w-5 h-5" />}
        >
          {status === 'submitting'
            ? 'Envoi en cours...'
            : 'Envoyer ma demande'}
        </Button>
        <p className="mt-3 text-[0.8125rem] text-[var(--color-gris-600)]">
          En envoyant ce formulaire, vous acceptez d'être recontacté par
          Couverture Gironde. Vos données ne sont jamais transmises à des
          tiers. Voir notre{' '}
          <a
            href="/politique-confidentialite"
            className="underline hover:text-[var(--color-terre-600)]"
          >
            politique de confidentialité
          </a>
          .
        </p>
      </div>
    </form>
  );
}

/* ============================================================
   Champs réutilisables
   ============================================================ */

const labelClass =
  'block text-[0.875rem] font-semibold text-[var(--color-ardoise)] mb-1.5';
const inputClass =
  'w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-creme)] border border-[var(--color-border)] focus:border-[var(--color-terre)] focus:bg-[var(--color-pierre)] focus:outline-none focus:ring-2 focus:ring-[var(--color-terre)]/30 transition-colors text-[1rem]';

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  pattern?: string;
  autoComplete?: string;
  placeholder?: string;
};

function Field({
  id,
  name,
  label,
  type = 'text',
  required,
  pattern,
  autoComplete,
  placeholder,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-[var(--color-terre-600)] ml-0.5">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        pattern={pattern}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

function TextareaField({
  id,
  name,
  label,
  required,
  placeholder,
  rows = 4,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-[var(--color-terre-600)] ml-0.5">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className={cn(inputClass, 'resize-y min-h-[100px]')}
      />
    </div>
  );
}

function SelectField({
  id,
  name,
  label,
  options,
  defaultValue,
  required,
}: {
  id: string;
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-[var(--color-terre-600)] ml-0.5">*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue={defaultValue ?? ''}
        className={cn(inputClass, 'appearance-none pr-10 bg-no-repeat bg-[right_0.75rem_center]')}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%230F1E33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled>
          Sélectionnez une prestation
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
