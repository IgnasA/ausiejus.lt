---
title: Build plan and quality bar
label: wayfinder:grilling
status: open
assignee:
map: ../map-pixel-atlas.md
blocked-by: [21]
---

## Question

Every design decision is in (look, render layer, interactions, page
composition); slice the build into milestones and set the bar, the ticket
009 pattern from the portfolio effort:

- **Milestones**: provisioning is m0 (its own ticket); a plausible slicing
  is m1 generator + data file (Node script, outlines.json, visited list
  with the layover-rule comment), m2 the canvas sketch (pencil ghost +
  wobble + zoom/pan/hover), m3 degradation + a11y (SVG snapshot, noscript,
  sr-only list, keyboard, touch polish), m4 page chrome + launch. React to
  this or reslice.
- **Quality bar**: the portfolio shipped at AA contrast, LCP < 1.5s,
  CLS 0, ≤250KB, Lighthouse ≥95 — does buvau inherit the same numbers?
  Canvas + 60KB outlines suggests yes comfortably; the per-visit seed must
  not cost CLS or LCP.
- **Definition of done**: live at buvau.ausiejus.lt, portfolio exhibit
  block added (the portfolio-side integration fog resolves into a concrete
  step here or stays its own ticket), README that makes the repo legible
  in one hop, buvau's own CONTEXT.md seeded with the effort's terms
  (pencil ghost, readout line, per-visit seed, gesture/loose).

Resolution produces the milestone tickets and empties the map's fog.
