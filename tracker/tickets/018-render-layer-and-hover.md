---
title: Render layer and the hover affordance
label: wayfinder:grilling
status: closed
assignee: ignas
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

## Resolution

Grilled; Ignas took all recommendations:

- **Render target: canvas + accessible parallel layer.** The drawing is a
  `<canvas>` (zoom, hatching, constant-width strokes all bench-proven);
  accessibility does not depend on it — an sr-only, keyboard-reachable
  list of visited countries rides alongside, meeting the portfolio's AA
  bar without fighting canvas semantics.
- **Split the pipeline: simplify at build, draw at runtime.** The repo
  ships a legible Node generator (Natural Earth → ~60KB of few-point
  outlines); the browser does the sketching live. The build script is the
  "hit the generator in one hop" exhibit.
- **Per-visit seed.** Every viewer gets a subtly different map — the site
  redraws the world from memory on each visit, with one quiet caption
  line saying so ("redrawn from memory on every visit"). Chosen over a
  fixed seed as the strongest proof the drawing is computed, and the
  thematic punchline of Buvau.
- **Degradation contract:** no-JS baseline is a build-time, fixed-seed
  **SVG snapshot** of the pencil-ghost map served in `<noscript>` with
  the count line — a complete page, not an apology; the same snapshot is
  the OG/social image. Touch: pinch/drag/tap (bench-proven). Keyboard:
  `+`/`−` zoom, arrow-key pan. Reduced motion: nothing ambient exists to
  disable; any future draw-in animation is gated on it from day one.
- **Hover affordance: fixed readout line** (the bench's calm chrome line
  naming whatever is under cursor/finger), not a cursor tooltip; tap
  feeds the same line on touch.

The build-plan fog is now sharp enough to graduate (done as a new
ticket); page composition (The page around the map) is unblocked.
