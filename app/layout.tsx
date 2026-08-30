import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import ContourField from './components/ContourField';
import './globals.css';

/* Static instances, not the variable font: roman 400/500 plus a single
   italic 500 (used only for section labels) — three small files instead of
   two large variable ones. No bold ships at all. */
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: 'normal',
  display: 'swap',
});

const newsreaderItalic = Newsreader({
  subsets: ['latin'],
  weight: '500',
  style: 'italic',
  display: 'swap',
  variable: '--font-italic',
});

const description =
  'Frontend engineer building design systems and white-label products — interfaces other companies ship as their own.';

export const metadata: Metadata = {
  metadataBase: new URL('https://ausiejus.lt'),
  title: 'Ignas Ausiejus',
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ignas Ausiejus',
    description,
    url: '/',
    siteName: 'Ignas Ausiejus',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${newsreader.className} ${newsreaderItalic.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {/* The field lives in the layout so it — and a picked brand — carry
            across client-side navigation between pages. */}
        <ContourField />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
