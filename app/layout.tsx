import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://rem0ulade.github.io/proud-together/'),
  title: 'Proud Together e.V. – Gemeinsam. Sicher. Sichtbar.',
  description: 'Proud Together setzt sich für queere Menschen ein – mit direkter Unterstützung, Bildung, Aufklärung und starken Community-Projekten.',
  openGraph: {
    title: 'Proud Together e.V. – Gemeinsam. Sicher. Sichtbar.',
    description: 'Schutz, Wissen und echte Perspektiven für queere Menschen.',
    type: 'website',
    locale: 'de_DE',
    images: [{ url: 'https://rem0ulade.github.io/proud-together/og.png', width: 1200, height: 630, alt: 'Proud Together – Gemeinsam. Sicher. Sichtbar.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proud Together e.V. – Gemeinsam. Sicher. Sichtbar.',
    description: 'Schutz, Wissen und echte Perspektiven für queere Menschen.',
    images: ['https://rem0ulade.github.io/proud-together/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
