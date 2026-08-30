import Link from 'next/link';
import Footer from './components/Footer';
import Rebrand from './components/Rebrand';

/* The landing page is abstract on purpose: one centered screen — name,
   positioning, the moment, the field — and a single door to the work. */

export default function Home() {
  return (
    <main className="home" data-tokens="--bg --measure --size-body">
      <header>
        <h1 data-tokens="--ink --size-display">Ignas Ausiejus</h1>
        <p className="positioning">
          Frontend engineer building design systems and white-label products —
          interfaces other companies ship as their own.
        </p>
        <Rebrand />
      </header>

      <nav className="work-link" aria-label="Projects">
        <Link href="/projects">Projects →</Link>
      </nav>

      <Footer />
    </main>
  );
}
