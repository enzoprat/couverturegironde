import { SITE } from '@/lib/constants';

/**
 * /.well-known/security.txt — RFC 9116
 *
 * Le champ `Contact` accepte mailto:, https:// ou tel:.
 * On utilise l'URL du formulaire de contact (pas de mail exposé).
 *
 * Le dossier `.well-known/` dans /public est ignoré par Next, on passe donc
 * par une route App Router. Cache 1 an.
 */
export const dynamic = 'force-static';

export async function GET() {
  const body = `Contact: ${SITE.url}/contact
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: fr, en
Canonical: ${SITE.url}/.well-known/security.txt
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
