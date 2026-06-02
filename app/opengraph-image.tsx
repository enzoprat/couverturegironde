import { ImageResponse } from 'next/og';
import { SITE, NAP, TRUST } from '@/lib/constants';

/**
 * OG image globale (1200×630) générée à la volée par Next.js.
 *
 * Brandée Couverture Gironde, palette Ardoise/Pierre/Terre cuite.
 * Évite de devoir uploader un fichier .jpg statique.
 */
export const runtime = 'edge';
export const alt = `${SITE.name} — Couvreur à Bordeaux et en Gironde`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0F1E33',
          color: '#F5F2EC',
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#C8542E',
          }}
        />

        {/* Logo CG */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              background: '#F5F2EC',
              color: '#0F1E33',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 800,
            }}
          >
            CG
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '32px', fontWeight: 700 }}>
              {SITE.name}
            </div>
            <div
              style={{
                fontSize: '16px',
                color: '#9BA4B0',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Couvreur · Mérignac
            </div>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: '32px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <span>Couvreur à Bordeaux —&nbsp;</span>
          <span style={{ color: '#C8542E' }}>démoussage,</span>
          <span>&nbsp;nettoyage</span>
          <span>&nbsp;toiture</span>
        </div>

        {/* Footer chips */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            fontSize: '22px',
            marginTop: 'auto',
          }}
        >
          <div
            style={{
              padding: '12px 20px',
              borderRadius: '999px',
              background: 'rgba(245, 242, 236, 0.10)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            ✦ {TRUST.googleRating}/5 — {TRUST.googleReviewCount} avis Google
          </div>
          <div
            style={{
              padding: '12px 20px',
              borderRadius: '999px',
              background: '#C8542E',
              color: '#FAF8F4',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {NAP.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
