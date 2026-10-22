import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Projects — Ignas Ausiejus',
  description:
    'Selected work by Ignas Ausiejus: personal builds (Trailhead, Buvau, Cockpit, Snapback) and design-system and fintech work at Equals, Railsr, Rocket Software and Zenitech.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — Ignas Ausiejus',
    description:
      'Selected personal builds and employed work: design systems, white-label fintech, and small tools.',
    url: '/projects',
    siteName: 'Ignas Ausiejus',
    type: 'website',
    images: ['/og.png'],
  },
};

export default function Projects() {
  return (
    <main data-tokens="--bg --measure --size-body">
      <header className="crumb">
        <Link href="/">
          <span aria-hidden="true">← </span>Ignas Ausiejus
        </Link>
      </header>

      <section aria-labelledby="projects">
        <h1 id="projects" className="label" data-tokens="--muted --size-label">Projects</h1>
        <ul>
          <li>
            <h2>
              <a href="https://trailhead.ausiejus.lt">Trailhead</a>
            </h2>
            <span className="tag">personal</span>
            <p data-tokens="--muted">
              My flight history, rebuilt from my inbox. I built the whole
              thing: a Gmail extraction pipeline, a map of every route flown,
              and a scroll-told reveal of the years in the air. Live, with{' '}
              <a href="https://github.com/IgnasA/trailhead" aria-label="source code for Trailhead">source</a>.
            </p>
            <p className="stack">
              TypeScript · Next.js · MapLibre GL · Postgres · Gmail + Claude
              extraction
            </p>
          </li>
          <li>
            <h2>
              <a href="https://buvau.ausiejus.lt">Buvau</a>
            </h2>
            <span className="tag">personal</span>
            <p data-tokens="--muted">
              A hand-drawn world map that is actually generated: real Natural
              Earth geography, aggressively simplified, wobbled by a seeded
              hand — redrawn on every visit. One data file lights the visited
              countries; swap it and the map is yours. Live, with{' '}
              <a href="https://github.com/IgnasA/buvau" aria-label="source code for Buvau">source</a>.
            </p>
            <p className="stack">
              TypeScript · Vite · Canvas · a Natural Earth + d3-geo generator
            </p>
          </li>
          <li>
            <h2>Cockpit</h2>{' '}
            <span className="date">— in progress</span>
            <span className="tag">personal</span>
            <p data-tokens="--muted">
              A private cockpit for running well-known spot trading
              strategies as configurable templates: backtested and
              paper-traded first, promotable to real funds only by hand,
              under hard caps with a kill switch. Each running strategy is
              its own Fly machine, conducted from the browser. Source opens
              at launch.
            </p>
            <p className="stack">
              TypeScript · Next.js · Python · Freqtrade · Fly Machines API
            </p>
          </li>
          <li>
            <h2>
              <a href="https://snapback.ausiejus.lt">Snapback</a>
            </h2>{' '}
            <span className="date">— in progress</span>
            <span className="tag">personal</span>
            <p data-tokens="--muted">
              Webflow&rsquo;s CMS has no undo: one bad edit and client content
              is gone. I&rsquo;m building a marketplace app for agencies that
              snapshots Collections, diffs them word by word, and restores in
              place — read-only by default, with write access as a separate,
              explicit grant.
            </p>
            <p className="stack">
              TypeScript · Next.js · Postgres · Webflow Data API · Stripe
            </p>
          </li>
          <li>
            <h2>Fintech platforms, Railsr &rarr; Equals</h2>{' '}
            <span className="date">— 2021–</span>
            <span className="tag">work</span>
            <p data-tokens="--muted">
              Embedded finance, before and after a merger. At Railsr I built
              and maintained the customer-facing self-service application
              business customers used to operate regulated card programmes,
              plus an internal financial-data tool; at Equals I build and
              maintain components across the two design systems — shipped
              white-label by partner banks and fintechs.
            </p>
            <p className="stack">
              TypeScript · React · Redux · Node.js · MongoDB · design tokens
              across two codebases
            </p>
          </li>
          <li>
            <h2>Zowe monitoring plugin, Rocket Software</h2>{' '}
            <span className="date">— 2020–2021</span>
            <span className="tag">work</span>
            <p data-tokens="--muted">
              I rewrote a monitoring application plugin for Zowe, the
              open-source framework for IBM z/OS, working against mainframe
              systems and their operational constraints — and contributed to
              IBM&rsquo;s Carbon Design System along the way.
            </p>
            <p className="stack">
              TypeScript · React · Zowe · IBM z/OS · Carbon Design System
            </p>
          </li>
          <li>
            <h2>Client platforms, Zenitech</h2>{' '}
            <span className="date">— 2018–2020</span>
            <span className="tag">work</span>
            <p data-tokens="--muted">
              Embedded with enterprise clients to scope and deliver bespoke
              systems end to end: a student assessment platform for the
              University of Cambridge, a search platform for Kobalt Music
              over a large catalogue of rights data, and a cross-platform
              mobile app for receipt storage and warranty tracking.
            </p>
            <p className="stack">
              TypeScript · React · Node.js · React Native
            </p>
          </li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
