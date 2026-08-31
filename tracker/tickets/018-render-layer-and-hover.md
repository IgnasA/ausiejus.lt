---
title: Render layer and the hover affordance
label: wayfinder:grilling
status: open
assignee:
map: ../map-pixel-atlas.md
blocked-by: [17]
---

## Question

With the grid locked by the prototype, decide how the page actually renders
it and how the one interaction works:

- **Render target**: build-time-generated inline SVG (works with zero JS,
  hover via plain CSS + `<title>`/data attributes), runtime canvas, or a
  DOM/CSS grid. The exhibit's proof is the generator, so the runtime should
  stay thin — but the hover affordance and the no-JS story pull in
  different directions; pick where the line sits.
- **Build-time vs. runtime rasterization**: does the site ship the computed
  grid (fast, tiny, generator runs in CI/build) or rasterize in the browser
  (the algorithm literally runs in front of the viewer)? What does each do
  to the "hit the rasterizer in one hop" repo-legibility goal?
- **The hover/tap affordance**: country name (plus year?) — tooltip
  following cursor, fixed readout line, or highlight + label? What happens
  on touch, keyboard, and screen readers (is each visited country a
  focusable element with an accessible name)?
- **Degradation contract**: the page with JS off, with reduced motion, on a
  narrow phone. The portfolio's doctrine — the fallback is the baseline —
  presumably applies; confirm.

Resolution should leave the fog around the build plan and quality bar sharp
enough to graduate.
