---
title: "m4: Quality bar and launch"
label: wayfinder:task
status: open
assignee:
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
