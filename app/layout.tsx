import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { JsonLd } from '@/components/seo/JsonLd';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyPhoneBar } from '@/components/layout/StickyPhoneBar';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from '@/lib/seo/schemas';
import { SITE } from '@/lib/constants';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}, Couvreur à Bordeaux et en Gironde depuis 2005`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.tagline,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: {
    canonical: SITE.url,
    languages: { 'fr-FR': SITE.url, 'x-default': SITE.url },
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'fr_FR',
    url: SITE.url,
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: { 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F2EC' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1E33' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR" className={jakarta.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyPhoneBar />
        <WhatsAppButton />

        {/* Schemas globaux, toutes les pages héritent */}
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <JsonLd data={getLocalBusinessSchema()} />
      </body>
    </html>
  );
}
