---
title: "m4: Quality bar and launch"
label: wayfinder:task
status: open
assignee: ignas
map: ../map.md
blocked-by: [12, 7]
---

## Question

Hold the page to the bar, then launch. The research is blunt: a
half-polished portfolio hurts more than none.

Quality bar (from the build plan):

- **Accessibility**: WCAG AA contrast in every brand × scheme combination,
  full keyboard operation, semantic landmarks, honored reduced-motion.
- **Performance**: LCP < 1.5s on mid-tier mobile, CLS = 0, total transfer
  ≤ 250KB (Newsreader subset + preloaded, `font-display: swap` with tuned
  fallback metrics), Lighthouse ≥ 95 in all categories.
- **SEO/meta**: title, description, canonical, favicon, and a static OG
  card (name + positioning line, in the site's own type).
- **cv.pdf** served at ausiejus.lt/cv.pdf — current CV updated to carry the
  site URL **and aligned with the site's corrected wording** (Ignas's
  corrections, 2026-08-30; the site copy is the reference, Ignas edits the
  CV source):
  - Equals: not "Own the shared design system … formed to unify two
    codebases" — the two design systems remain separate; he builds and
    maintains components across both.
  - Railsr: drop the "built the embeddable onboarding UI" and "owned the
    component library" claims — the accurate account is building and
    maintaining the customer-facing self-service application, plus an
    internal tool for surfacing financial data on customers and end users.

Launch checklist (HITL where marked):

- ausiejus.lt DNS live and serving (from 008).
- Footer GitHub link goes to the cleaned-up profile (from 007 — hence the
  blocking edge).
- Ignas updates LinkedIn and the CV to point at ausiejus.lt (HITL).

Done when https://ausiejus.lt serves the finished page passing the bar —
which is this map's destination.

## Progress (2026-08-30)

**Quality bar — done and verified:**

- **Contrast**: scripted WCAG audit of ink/muted/accent against bg for all
  five themes (light, dark, aurora, koral, mint). Two failures fixed:
  koral accent → `#c8440e` (4.6:1), mint muted → `#586f60` (5.1:1).
  Everything now ≥4.5:1. Readout opacity removed (it undercut effective
  contrast); visible `:focus-visible` rings added for links and the
  control.
- **Performance**: fonts switched from two variable files to static
  instances — roman 400/500 + italic 500 only, **no bold ships** (exhibit
  titles emphasize via weight-500 ink against muted body text). Measured
  in-browser: only the two preloaded font files fetch (82KB); JS 448KB raw
  → ~145–170KB compressed on Vercel. First load ≈ 235–245KB ✤ ≤250KB
  budget met. **CLS measured 0.0000** (buffered layout-shift observer).
  LCP is static text with `font-display: swap`. Lighthouse itself not
  runnable in this environment — run once live as a launch check.
- **SEO/meta**: metadataBase + canonical, OG/twitter cards with a
  generated 1200×630 `og.png` (site palette, Georgia standing in for
  Newsreader), `icon.svg` favicon of the ◐ moment glyph.

**Remaining — all Ignas's hands, then this ticket closes:**

1. iv.lt: remove the DNSSEC DS record → ausiejus.lt gets its cert
   (closes ticket 008).
2. GitHub curation checklist from ticket 007 (Trailhead public, archive
   stale, pins, bio).
3. ~~CV~~ **done** — regenerated as a one-page PDF (Georgia, site palette)
   with the corrected Railsr/Equals wording, ausiejus.lt + GitHub in the
   header; committed as `public/cv.pdf` and serving. Ignas can replace it
   with his own export anytime.
4. ~~LinkedIn~~ **done** — ausiejus.lt added as a Portfolio website in
   contact info (via Ignas's browser session, at his request).
5. ~~Lighthouse~~ **done** — run against https://ausiejus-lt.vercel.app:
   **performance 95, accessibility 100, best-practices 100, SEO 100**;
   CLS 0, TBT 30ms, FCP 1.1s (LCP 2.4s under LH's simulated mobile
   throttle). Bar met.
