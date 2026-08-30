import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ignas Ausiejus',
  description:
    'Frontend engineer building design systems and white-label products — interfaces other companies ship as their own.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={newsreader.className}>{children}</body>
    </html>
  );
}
