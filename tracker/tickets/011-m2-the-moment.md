---
title: "m2: The moment, production-grade"
label: wayfinder:task
status: open
assignee:
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
