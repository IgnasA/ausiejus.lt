import ContourField from './components/ContourField';
import Rebrand from './components/Rebrand';
import TokenInspector from './components/TokenInspector';

export default function Home() {
  return (
    <>
      <ContourField />
      <main data-tokens="--bg --measure --size-body">
        <header>
          <h1 data-tokens="--ink --size-display">Ignas Ausiejus</h1>
          <p className="positioning">
            Frontend engineer building design systems and white-label products —
            interfaces other companies ship as their own.
          </p>
          <Rebrand />
        </header>

        <section aria-labelledby="work">
        <h2 id="work" data-tokens="--muted --size-label">Selected work</h2>
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

        <footer data-tokens="--muted --accent">
          <a href="mailto:ausiejus.ignas@gmail.com">Email</a>
          <a href="https://github.com/IgnasA">GitHub</a>
          <a href="https://www.linkedin.com/in/ignasausiejus">LinkedIn</a>
          <a href="/cv.pdf">CV</a>
          <TokenInspector />
        </footer>
      </main>
    </>
  );
}
