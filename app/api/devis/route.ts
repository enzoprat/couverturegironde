import { NextResponse } from 'next/server';

/**
 * POST /api/devis — endpoint de soumission du formulaire devis.
 *
 * Phase 1 : log + 200 (le système d'envoi mail réel sera branché en phase 2
 * via Resend ou un SMTP — variable `RESEND_API_KEY` documentée dans .env.example).
 *
 * Sécurité :
 *  - Honeypot (champ `website`) — si rempli, on retourne 200 silencieusement
 *  - Validation basique des champs requis
 *  - Pas de stockage local (anti-fuite)
 *
 * Cette route doit RESTER simple : la validation lourde, l'envoi mail et
 * l'anti-spam Turnstile/hCaptcha viennent ensuite.
 */
export const runtime = 'nodejs';

export async function POST(req: Request) {
  const formData = await req.formData();

  // Honeypot — bots remplissent toujours TOUS les champs
  if (formData.get('website')) {
    return NextResponse.json({ ok: true });
  }

  const nom = String(formData.get('nom') ?? '').trim();
  const telephone = String(formData.get('telephone') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const adresse = String(formData.get('adresse') ?? '').trim();
  const service = String(formData.get('service') ?? '').trim();
  const description = String(formData.get('description') ?? '').trim();

  if (!nom || !telephone || !service) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Champs requis manquants. Merci de remplir au moins votre nom, téléphone et le service souhaité.",
      },
      { status: 400 },
    );
  }

  // TODO phase 2 : brancher Resend / SMTP / Webhook CRM
  // for now : log côté serveur Vercel pour ne rien perdre
  console.log('[devis] reçue', {
    nom,
    telephone,
    email,
    adresse,
    service,
    description: description.slice(0, 200),
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
