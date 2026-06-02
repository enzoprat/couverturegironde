import { NAP } from '@/lib/constants';

/**
 * /.well-known/security.txt — RFC 9116
 *
 * Le dossier `.well-known/` dans /public est ignoré par Next, on passe donc
 * par une route App Router. Cache 1 an.
 */
export const dynamic = 'force-static';

export async function GET() {
  const body = `Contact: mailto:${NAP.email}
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: fr, en
Canonical: https://www.couverturegironde.fr/.well-known/security.txt
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
