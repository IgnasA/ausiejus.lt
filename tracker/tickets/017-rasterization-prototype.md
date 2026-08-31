---
title: Rasterization prototype — resolution, projection, look
label: wayfinder:prototype
status: open
assignee:
map: ../map-pixel-atlas.md
blocked-by: [15, 16]
---

## Question

The core design question of the whole effort: what grid makes the world both
*recognizable* and *pixelated*? Build a throwaway rasterizer over the chosen
geodata and Ignas's real visited list, and react to variants:

- **Grid resolution**: sweep a few (e.g. ~48×24 up to ~160×80 cells). Too
  coarse and Europe smears into one blob (bad — most of the visited list is
  probably there); too fine and it stops reading as pixel art.
- **Projection**: equirectangular is the cheapest; does it look wrong enough
  (stretched poles, bloated Greenland) to justify Robinson/Equal Earth via a
  projection function?
- **Cell ownership rule**: cell-center point-in-polygon vs. any-overlap —
  which keeps small visited countries visible without inflating coastlines?
  Do microstates need a guaranteed-minimum-one-cell rule?
- **The two states**: what do "lit" and "dimmed" look like at this
  resolution — fill vs. brightness vs. hue? (Full palette/theming stays with
  the page-design fog; here it's just: can you instantly read which
  countries are visited?)
- **Cell shape**: square fill, rounded, gapped grid (gaps read very
  "pixel-map-poster")?

Output: side-by-side variants Ignas reacts to, per the prototype skill. The
resolution locks grid size, projection, and ownership rule; the prototype
code is throwaway but the chosen parameters feed the render-layer ticket and
the eventual generator.
