import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Projects — Ignas Ausiejus',
  alternates: { canonical: '/projects' },
};

export default function Projects() {
  return (
    <main data-tokens="--bg --measure --size-body">
      <header className="crumb">
        <Link href="/">← Ignas Ausiejus</Link>
      </header>

      <section aria-labelledby="projects">
        <h2 id="projects" data-tokens="--muted --size-label">Projects</h2>
        <ul>
          <li>
            <h3>
              <a href="https://trailhead.ausiejus.lt">Trailhead</a>
            </h3>{' '}
            <span className="date">— 2026</span>
            <p data-tokens="--muted">
              My flight history, rebuilt from my inbox. I built the whole
              thing: a Gmail extraction pipeline, a map of every route flown,
              and a scroll-told reveal of the years in the air. Live, with{' '}
              <a href="https://github.com/IgnasA/trailhead">source</a>.
            </p>
            <p className="stack">
              TypeScript · Next.js · MapLibre GL · Postgres · Gmail + Claude
              extraction
            </p>
          </li>
          <li>
            <h3>
              <a href="https://buvau.ausiejus.lt">Buvau</a>
            </h3>{' '}
            <span className="date">— 2026</span>
            <p data-tokens="--muted">
              A hand-drawn world map that is actually generated: real Natural
              Earth geography, aggressively simplified, wobbled by a seeded
              hand — redrawn on every visit. One data file lights the visited
              countries; swap it and the map is yours. Live, with{' '}
              <a href="https://github.com/IgnasA/buvau">source</a>.
            </p>
            <p className="stack">
              TypeScript · Vite · Canvas · a Natural Earth + d3-geo generator
            </p>
          </li>
          <li>
            <h3>Self-service platform, Railsr</h3>{' '}
            <span className="date">— 2021–2025</span>
            <p data-tokens="--muted">
              Business customers needed to operate regulated card programmes
              themselves. I built and maintained the customer-facing
              self-service application they used to do it, and an internal
              tool for surfacing financial data on our customers and their
              end users.
            </p>
            <p className="stack">
              TypeScript · React · Redux · Node.js · MongoDB
            </p>
          </li>
          <li>
            <h3>Design system, Equals</h3>{' '}
            <span className="date">— 2025–</span>
            <p data-tokens="--muted">
              A merger left two codebases, each with its own design system. I
              build and maintain components across both — shipped white-label
              by partner banks and fintechs, each with their own brand, data,
              and regulatory constraints.
            </p>
            <p className="stack">
              TypeScript · React · design tokens across two codebases
            </p>
          </li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
