---
title: Render layer and the hover affordance
label: wayfinder:grilling
status: open
assignee:
map: ../map-pixel-atlas.md
blocked-by: [20]
---

## Question

With the hand-drawn look locked by the prototype, decide how the page
actually renders it and how the one interaction works:

- **Render target**: build-time-generated inline SVG (natural fit for
  stroked paths; works with zero JS, hover via plain CSS +
  `<title>`/data attributes), runtime canvas (freer ink effects), or a
  hybrid. The exhibit's proof is the generator, so the runtime should
  stay thin — but the hover affordance, any stroke texture, and the
  no-JS story pull in different directions; pick where the line sits.
- **Build-time vs. runtime generation**: does the site ship the computed
  sketch (fast, tiny, generator runs in CI/build) or draw it in the
  browser (the algorithm literally runs in front of the viewer — and a
  per-visit seed would make every viewer's map a unique drawing)? What
  does each do to the "hit the generator in one hop" repo-legibility
  goal?
- **The hover/tap affordance**: country name (plus year?) — tooltip
  following cursor, fixed readout line, or highlight + label? What happens
  on touch, keyboard, and screen readers (is each visited country a
  focusable element with an accessible name)?
- **Degradation contract**: the page with JS off, with reduced motion, on a
  narrow phone. The portfolio's doctrine — the fallback is the baseline —
  presumably applies; confirm.

Resolution should leave the fog around the build plan and quality bar sharp
enough to graduate.
