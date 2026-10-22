import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Projects — Ignas Ausiejus',
  description:
    'Selected work by Ignas Ausiejus: personal builds (Statement X-Ray, Trailhead, Buvau, Reels & Shorts Blocker, Cockpit, Snapback) and design-system and fintech work at Equals, Railsr, Rocket Software and Zenitech.',
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

type Build = {
  name: string;
  site?: string;
  source?: string;
  /** Live builds get a filled dot, everything else a hollow one. */
  live: boolean;
  status: string;
  body: React.ReactNode;
  stack: string;
};

type Role = {
  title: string;
  years: string;
  body: React.ReactNode;
  stack: string;
};

const builds: Build[] = [
  {
    name: 'Statement X-Ray',
    site: 'https://xray.ausiejus.lt',
    source: 'https://github.com/IgnasA/statement-xray',
    live: true,
    status: 'Live',
    body: (
      <>
        Etsy hands sellers their monthly statements as CSV files, not
        answers. This one-page tool reads them in the browser &mdash; nothing
        is uploaded &mdash; says in one sentence what Etsy deducted, then
        breaks it down by fee. The full report unlocks with a Gumroad license
        key; there is no server.
      </>
    ),
    stack:
      'HTML · CSS · JavaScript, one file · client-side CSV parsing · Gumroad license API · GitHub Pages',
  },
  {
    name: 'Trailhead',
    site: 'https://trailhead.ausiejus.lt',
    source: 'https://github.com/IgnasA/trailhead',
    live: true,
    status: 'Live',
    body: (
      <>
        My flight history, rebuilt from my inbox. I built the whole thing: a
        Gmail extraction pipeline, a map of every route flown, and a
        scroll-told reveal of the years in the air.
      </>
    ),
    stack: 'TypeScript · Next.js · MapLibre GL · Postgres · Gmail + Claude extraction',
  },
  {
    name: 'Buvau',
    site: 'https://buvau.ausiejus.lt',
    source: 'https://github.com/IgnasA/buvau',
    live: true,
    status: 'Live',
    body: (
      <>
        A hand-drawn world map that is actually generated: real Natural Earth
        geography, aggressively simplified, wobbled by a seeded hand &mdash;
        redrawn on every visit. One data file lights the visited countries;
        swap it and the map is yours.
      </>
    ),
    stack: 'TypeScript · Vite · Canvas · a Natural Earth + d3-geo generator',
  },
  {
    name: 'Reels & Shorts Blocker',
    source: 'https://github.com/IgnasA/reels-shorts-blocker',
    live: false,
    status: 'In Chrome Web Store review',
    body: (
      <>
        A Chrome extension that takes Shorts out of YouTube and Reels out of
        Facebook and Instagram: shelves, tabs and sidebar entries hidden,
        single Shorts and reels opened as normal videos, each rule switchable
        from the toolbar. It collects no data.
      </>
    ),
    stack: 'JavaScript · Chrome Manifest V3 · content scripts · MutationObserver · chrome.storage',
  },
  {
    name: 'Cockpit',
    live: false,
    status: 'In progress · source opens at launch',
    body: (
      <>
        A private cockpit for running well-known spot trading strategies as
        configurable templates: backtested and paper-traded first, promotable
        to real funds only by hand, under hard caps with a kill switch. Each
        running strategy is its own Fly machine, conducted from the browser.
      </>
    ),
    stack: 'TypeScript · Next.js · Python · Freqtrade · Fly Machines API',
  },
  {
    name: 'Snapback',
    site: 'https://snapback.ausiejus.lt',
    live: false,
    status: 'In progress',
    body: (
      <>
        Webflow&rsquo;s CMS has no undo: one bad edit and client content is
        gone. I&rsquo;m building a marketplace app for agencies that snapshots
        Collections, diffs them word by word, and restores in place &mdash;
        read-only by default, with write access as a separate, explicit grant.
      </>
    ),
    stack: 'TypeScript · Next.js · Postgres · Webflow Data API · Stripe',
  },
];

const roles: Role[] = [
  {
    title: 'Fintech platforms, Railsr → Equals',
    years: '2021–now',
    body: (
      <>
        Embedded finance, before and after a merger. At Railsr I built and
        maintained the customer-facing self-service application business
        customers used to operate regulated card programmes, plus an internal
        financial-data tool; at Equals I build and maintain components across
        the two design systems &mdash; shipped white-label by partner banks
        and fintechs.
      </>
    ),
    stack: 'TypeScript · React · Redux · Node.js · MongoDB · design tokens across two codebases',
  },
  {
    title: 'Zowe monitoring plugin, Rocket Software',
    years: '2020–2021',
    body: (
      <>
        I rewrote a monitoring application plugin for Zowe, the open-source
        framework for IBM z/OS, working against mainframe systems and their
        operational constraints &mdash; and contributed to IBM&rsquo;s Carbon
        Design System along the way.
      </>
    ),
    stack: 'TypeScript · React · Zowe · IBM z/OS · Carbon Design System',
  },
  {
    title: 'Client platforms, Zenitech',
    years: '2018–2020',
    body: (
      <>
        Embedded with enterprise clients to scope and deliver bespoke systems
        end to end: a student assessment platform for the University of
        Cambridge, a search platform for Kobalt Music over a large catalogue
        of rights data, and a cross-platform mobile app for receipt storage
        and warranty tracking.
      </>
    ),
    stack: 'TypeScript · React · Node.js · React Native',
  },
];

export default function Projects() {
  return (
    <main data-tokens="--bg --measure --size-body">
      <header className="crumb">
        <Link href="/">
          <span aria-hidden="true">← </span>Ignas Ausiejus
        </Link>
      </header>

      <header className="page-head">
        <h1 data-tokens="--size-display">Projects</h1>
        <p className="lede" data-tokens="--muted">
          Things I design, build and run myself, and the product work I&rsquo;ve
          shipped for fintech and enterprise teams.
        </p>
      </header>

      <section aria-labelledby="builds">
        <h2 id="builds" className="label" data-tokens="--muted --size-label">
          Personal builds
        </h2>
        <ol className="exhibits">
          {builds.map((b) => (
            <li key={b.name}>
              <h3>
                {b.site ? (
                  <a href={b.site} className="exhibit-title">
                    {b.name}
                    <span className="arrow" aria-hidden="true"> ↗</span>
                  </a>
                ) : (
                  <span className="exhibit-title">{b.name}</span>
                )}
              </h3>
              <p className="status" data-live={b.live}>
                {b.status}
              </p>
              <p data-tokens="--muted">{b.body}</p>
              {(b.site || b.source) && (
                <p className="links">
                  {b.site && (
                    <a href={b.site} aria-label={`Visit ${b.name}`}>
                      Visit
                    </a>
                  )}
                  {b.source && (
                    <a href={b.source} aria-label={`Source code for ${b.name}`}>
                      Source
                    </a>
                  )}
                </p>
              )}
              <p className="stack">{b.stack}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="work">
        <h2 id="work" className="label" data-tokens="--muted --size-label">
          Work
        </h2>
        <ol className="exhibits">
          {roles.map((r) => (
            <li key={r.title}>
              <h3>
                <span className="exhibit-title">{r.title}</span>
              </h3>
              <p className="status">{r.years}</p>
              <p data-tokens="--muted">{r.body}</p>
              <p className="stack">{r.stack}</p>
            </li>
          ))}
        </ol>
      </section>

      <Footer />
    </main>
  );
}
