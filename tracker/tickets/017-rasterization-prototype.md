---
title: Rasterization prototype — resolution, projection, look
label: wayfinder:prototype
status: closed
assignee: ignas
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

## Assets

- Prototype bench (five variants, `?variant=A..E`, arrow keys or the pill
  to flip): https://claude.ai/code/artifact/08000494-3489-4f89-86fb-6f720556a046
- Source (generator + bench page) on branch `prototype/rasterization` at
  `prototype/rasterization/` (`git show prototype/rasterization:prototype/rasterization/README.md`).
- Generator facts worth carrying into the resolution: all 45 visited
  countries matched Natural Earth ids; centroid-fallback cell counts by
  grid — 72-wide: 14, 112-wide: 11–12, 160-wide: 4–7. Even the finest
  grids need the fallback, so a guaranteed-minimum-one-cell rule is not
  optional at any resolution under consideration (hover a hollow cell in
  the bench to see which country it stands in for).

## Resolution

Built the bench (five variants over the real geodata and Ignas's real 45:
coarse gapped poster, fine flush grid, Equal Earth supersampled, night
glow, dotted-map — see Assets) and Ignas reacted: **pixelation is rejected
wholesale**. The direction is *"abstract rough borders, more like human
drawn from memory"* — generated outlines that look sketched, not sampled:
wobbly, simplified, imperfect shapes.

What survives the pivot:

- The geodata pipeline stands: Natural Earth 110m geometry is now the
  *input to simplification/distortion* instead of grid sampling, and the
  exhibit's algorithmic-craft proof arguably deepens (simplify + perturb +
  hand-drawn stroke rendering is more interesting source than
  point-in-polygon).
- The microstate problem stands in new form: the bench proved even fine
  grids need a synthetic mark for small visited countries; a
  drawn-from-memory map needs its own convention for them (a dot, a tick,
  or honest omission).
- Grid resolution, projection choice between raster variants, and the
  cell-ownership rule are all mooted; projection still matters but is now
  the sketch's canvas, decided inside the new prototype.

The new direction gets its own prototype ticket (Hand-drawn borders
prototype); the map's Destination and Notes are updated to match.
