---
title: "m2: The moment, production-grade"
label: wayfinder:task
status: closed
assignee: ignas
map: ../map.md
blocked-by: [10]
---

## Question

Production rewrite of the signature moment from 004 (prototype code is
throwaway by rule):

- The "◐ re-brand this page" control in the meta line, cycling the three
  fake partner brands (colors only — the name's typeface never re-brands)
  with the monospace token readout.
- The token-aware topographic contour field: marching squares over animated
  value noise, one accent contour, soft cursor bend; the canvas reads the
  live `--accent` so the registered-token interpolation shows.
- Degradation contract: reduced-motion freezes the field, no-JS hides the
  control entirely, touch works (tap = re-brand, no cursor bend), and the
  field never harms text contrast in any brand, light or dark.

Reference: `git show prototype/signature-moment:prototype/signature-moment.html`
and the refinements on `prototype/visual-direction`.

Done when the moment runs on the deployed page in every brand × color-scheme
combination without contrast or performance regressions.

## Resolution

Shipped on main as a production rewrite (prototype code untouched on its
branch):

- `app/components/Rebrand.tsx` — the control lives in the meta line,
  cycling default → aurora → koral → mint via `data-brand` on `<html>`
  (colors only; attribute selector outranks both color schemes), with the
  monospace token readout (`aria-live=polite`, space reserved — no CLS).
  Functional state update so rapid clicks can't skip (found via a
  batched-click probe during verification).
- `app/components/ContourField.tsx` — marching squares over animated value
  noise, accent contour reading the live interpolating `--accent` each
  frame, cursor bend, DPR capped at 2, `aria-hidden`, pointer-events none.
- Degradation contract: no-JS hides the control via an `html.js` gate
  (`visibility` so layout is identical); reduced-motion runs no loop —
  single static draws on mount/resize/re-brand; touch taps the control
  natively and simply gets no cursor bend; koral's muted tone darkened to
  `#8a6355` for AA-viable contrast (full audit in m4).
- Verified in the browser: all four brands cycle and return to default,
  name typeface constant throughout, accent contour morphs between brand
  colors, clean console.
