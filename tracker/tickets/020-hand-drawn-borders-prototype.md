---
title: Hand-drawn borders prototype — wobble, simplification, stroke
label: wayfinder:prototype
status: open
assignee:
map: ../map-pixel-atlas.md
blocked-by: [17]
---

## Question

The core design question, take two: what makes a *generated* outline read
as *drawn from memory*? Build variants over the real geodata and Ignas's
45 and react:

- **Simplification depth**: how few points per country before it reads as
  "someone's rough recollection" rather than "broken GIS data"? Aggressive
  simplification is what "from memory" means geometrically — shapes become
  gestures (the boot, the hexagon, the long cat of Chile).
- **Distortion/wobble**: what noise makes it human — low-frequency drift
  (misremembered proportions), per-vertex jitter (shaky pen), segment
  curvature (hand arcs, not polylines)? Deterministic seed or per-build?
- **Stroke rendering**: uniform hairline vs variable-width ink, closed
  fills vs outlines, overshoot/undershoot at "pen lifts", do borders
  between neighbours double-draw (two people's lines) or share one?
- **Lit vs dimmed**: visited = inked/filled, unvisited = faint pencil
  ghost, or absent entirely? Does the unvisited world survive as context?
- **Small countries**: the pixel bench proved small visited countries need
  a synthetic mark; the sketch's convention — a dot, a scribble, a tick?
- **Projection**: the sketch's canvas (equirect vs Equal Earth vs a loose
  freehand-globe framing) — decided by eye here, not on principle.

Output: switchable variants per the prototype skill, reacting toward the
combination that locks the generator's parameters. The render-layer ticket
takes over from there.
