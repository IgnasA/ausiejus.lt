import ContourField from './components/ContourField';
import Rebrand from './components/Rebrand';

export default function Home() {
  return (
    <>
      <ContourField />
      <main>
        <header>
          <h1>Ignas Ausiejus</h1>
          <p className="positioning">
            Frontend engineer building design systems and white-label products —
            interfaces other companies ship as their own.
          </p>
          <Rebrand />
        </header>

        <section aria-labelledby="work">
        <h2 id="work">Selected work</h2>
        <ul>
          <li>
            <h3>
              <a href="https://trailhead.ausiejus.lt">Trailhead</a>
            </h3>{' '}
            <span className="date">— 2026</span>
            <p>
              My flight history, rebuilt from my inbox. I built the whole
              thing: a Gmail extraction pipeline, a map of every route flown,
              and a scroll-told reveal of the years in the air. Live, with{' '}
              <a href="https://github.com/IgnasA/trailhead">source</a>.
            </p>
          </li>
          <li>
            <h3>Self-service platform, Railsr</h3>{' '}
            <span className="date">— 2021–2025</span>
            <p>
              Business customers needed to operate regulated card programmes
              themselves. I built and maintained the customer-facing
              self-service application they used to do it, and an internal
              tool for surfacing financial data on our customers and their
              end users.
            </p>
          </li>
          <li>
            <h3>Design system, Equals</h3>{' '}
            <span className="date">— 2025–</span>
            <p>
              A merger left two codebases, each with its own design system. I
              build and maintain components across both — shipped white-label
              by partner banks and fintechs, each with their own brand, data,
              and regulatory constraints.
            </p>
          </li>
        </ul>
        </section>

        <footer>
          <a href="mailto:ausiejus.ignas@gmail.com">Email</a>
          <a href="https://github.com/IgnasA">GitHub</a>
          <a href="https://www.linkedin.com/in/ignasausiejus">LinkedIn</a>
          <a href="/cv.pdf">CV</a>
        </footer>
      </main>
    </>
  );
}
