---
title: Hand-drawn borders prototype — wobble, simplification, stroke
label: wayfinder:prototype
status: closed
assignee: ignas
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

## Assets

- Sketch bench (five variants, `?variant=A..E`, zoomable):
  https://claude.ai/code/artifact/fe9dd18c-82d0-4748-860b-80e1b94d6211
- Source on branch `prototype/rasterization` at `prototype/sketch/`
  (`git show prototype/rasterization:prototype/sketch/README.md`).

## Resolution

Built five hand-drawn treatments over simplified real geometry (ink
gesture / visited-only silhouette / pencil ghost / chalkboard /
misremembered drift) and Ignas picked: **C — Pencil ghost**, plus a new
requirement: **the map must be zoomable** (added to the bench and
confirmed working).

The locked look:

- **Loose simplification** (Douglas–Peucker ~0.55° on exterior rings;
  Italy ≈ 15 points) — clearly hand-drawn, still recognizable. The
  coarser "gesture" level and heavy drift both lost.
- **Equal Earth projection**; Antarctica omitted ("left off the memory").
- **Unvisited world stays**, as faint jittery pencil-gray outlines —
  context whispers; **visited** countries get an ink outline plus
  hand-hatched fill.
- **Wobble recipe**: 3-harmonic low-frequency drift + per-vertex jitter,
  seeded per country (deterministic), amplitude damped by shape size so
  dense Europe stays legible; closed Catmull-Rom smoothing; holes,
  sub-5-deg² islands, and antimeridian wraps handled in the generator
  (rings split at the seam).
- **Small countries**: below ~8px they render as a circled dot (visited)
  or faint dot (unvisited) — and *grow into their real shapes as you zoom
  in*, which zoom turns from a fallback into a feature.
- **Zoom/pan**: wheel + pinch (clamped ~1–14×), drag to pan, double-click
  resets; stroke widths stay constant so zooming feels like leaning into
  a drawing, not scaling an image. **This expands the interaction budget
  decided at charting** (was: hover only) — Ignas's call, recorded here;
  the map's Notes are updated.

Hover readout (country name + visited) works at every zoom level. The
render-layer ticket inherits: canvas is now the natural render target
(the bench is one), and the degradation contract must cover zoom on
touch/keyboard.
