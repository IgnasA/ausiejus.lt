---
title: An atlas drawn from memory
label: wayfinder:map
---

## Destination

A live, deployed standalone project: a minimalistic world map with abstract,
rough borders that look human-drawn from memory — generated at build time
from real country geometry, with the countries Ignas has visited lit and the
rest dimmed — at its own URL, linked from ausiejus.lt's work list as a new
exhibit. This map carries execution: it ends when the site is live and the
portfolio links it, not when a spec is written.

(Originally "A pixel atlas of visited countries"; the pixel aesthetic was
rejected reacting to the rasterization prototype. File name keeps the old
slug; the effort is the same.)

## Notes

- This is an **exhibit** (see [CONTEXT.md](../CONTEXT.md)): the work plus what
  it proves. What it proves here: **algorithmic/graphics craft** — the map
  *looks* human-drawn but is *computed* from real geodata (simplification +
  distortion + stroke rendering); the tension between the two is the point.
  An employer opening the repo should hit the generator in one hop.
- Whole world renders: unvisited countries dimmed but present, visited lit.
  The read is "coverage of the world", not floating shapes.
- Interactivity budget: hover/tap a visited country shows its name, plus
  **zoom and pan** (wheel/pinch/drag) — expanded from hover-only by Ignas
  during the hand-drawn prototype; small countries grow from dots into
  shapes as you zoom.
- Extras: one quiet "N countries" line. Everything else is out of scope.
- Personal-first, **forkable by accident**: the visited list lives in one
  obvious data file; no configuration surface beyond that.
- Stack: **vanilla TypeScript + Vite, no framework** — shows range next to
  the Next.js portfolio; the generator script and a tiny render layer are the
  whole source.
- Execution override: like the portfolio map, this one carries build tickets
  through to deployment.
- The code lives in its own sibling repo (path/name decided by the naming
  ticket); charting stays in this tracker, the Trailhead arrangement. The new
  repo gets its own CONTEXT.md once it exists.
- Sessions should consult the `prototype` skill for design-question tickets
  and `grilling` + `domain-modeling` by default.

## Decisions so far

<!-- one line per closed ticket: gist + link -->

- [Geodata source and license](tickets/015-geodata-source.md): Natural Earth 110m via `world-atlas` (public domain, ISO-numeric ids, 39 KB gz, no simplification needed); rasterize with d3-geo `geoContains`; microstates need a centroid fallback.
- [Name, repo, and URL](tickets/014-name-repo-and-url.md): **Buvau** (Lithuanian, "I've been"), repo `buvau` in the sibling directory, live at `buvau.ausiejus.lt`; the page carries a one-line translation, the exhibit block introduces it in English.
- [The visited-countries list](tickets/016-visited-countries-list.md): 45 countries transcribed from Ignas's travel app (30 Europe, 10 Asia, 2 Africa, 3 Americas), alpha-2 keyed; no years; Kosovo assumed not visited pending confirmation.
- [Rasterization prototype — resolution, projection, look](tickets/017-rasterization-prototype.md): five pixel variants built and rejected — the direction is abstract rough borders, human-drawn from memory; geodata pipeline and the small-country-needs-a-synthetic-mark lesson carry over.
- [Hand-drawn borders prototype — wobble, simplification, stroke](tickets/020-hand-drawn-borders-prototype.md): **Pencil ghost** wins — loose simplification, Equal Earth, faint-pencil unvisited world, ink + hand-hatch for visited, dot-that-grows for small countries, no Antarctica; and the map must be **zoomable** (interaction budget expanded).
- [Render layer and the hover affordance](tickets/018-render-layer-and-hover.md): canvas + sr-only parallel layer; simplify at build (legible Node generator, ~60KB outlines), draw at runtime with a **per-visit seed** ("redrawn from memory on every visit"); no-JS baseline = fixed-seed SVG snapshot that doubles as the OG image; keyboard `+`/`−`/arrows; fixed readout line, no tooltip.
- [The page around the map](tickets/021-page-around-the-map.md): **Editorial** wins — Newsreader header in the portfolio's voice with the count and seed-caption folded into the intro sentence, wide map below, serif readout, mono footer (source · ausiejus.lt); plus a **scheme toggle** flipping the whole page between pencil-on-paper and chalk-on-board (defaults to system scheme).
- [Build plan and quality bar](tickets/022-build-plan-and-quality-bar.md): m1 generator+data → m2 canvas sketch → m3 degradation+a11y → m4 chrome+toggle+launch, as chained tickets **in ../buvau/tracker** (Ignas's call — work ships next to the code); portfolio quality bar inherited in both schemes; done = live + exhibit block merged.
- [m1: Generator and data](../../buvau/tracker/tickets/001-m1-generator-and-data.md): shipped — TS generator (Node-native), canonical visited.ts, 47 KB deterministic outlines.json, CONTEXT.md seeded; typecheck + build green at 49 KB total.
- [m2: The canvas sketch](../../buvau/tracker/tickets/002-m2-the-canvas-sketch.md): shipped and pushed — both media (pencil/chalk following system scheme), per-visit seed, size-damped wobble, zoom/pan/hover verified in-browser; 56.5 KB bundle.
- [m3: Degradation and accessibility](../../buvau/tracker/tickets/003-m3-degradation-and-a11y.md): shipped and pushed — fixed-seed SVG snapshot (noscript + og.png), sr-only 45-country list, keyboard zoom/pan/reset on a focusable canvas; real-phone touch pass rides with m4.
- [Provision the buvau pipeline](tickets/019-provision-the-pipeline.md): live — github.com/IgnasA/buvau → Vercel → **https://buvau.ausiejus.lt** (200, auto-deploys on push); repo half by agent, Vercel/domain half by Ignas via wizard.
- [m4: Page chrome and launch](../../buvau/tracker/tickets/004-m4-page-chrome-and-launch.md): **live and measured** — Editorial chrome, ◐ scheme toggle (persisted, no flash), self-hosted fonts after Lighthouse caught the render-block; Lighthouse 100/100/100/100, LCP 1.4s, CLS 0, 69 KiB. Real-phone pass stays with Ignas.

## Not yet specified

<!-- empty — every remaining step is a ticket: provisioning (019) and the
     exhibit block (023) here, build milestones m1–m4 in ../buvau/tracker. -->

## Out of scope

- **Rich interactivity**: trip details, photos, stats panels, timelines,
  chronological country lists, % of world visited. Ruled out in charting —
  the map stays minimal; one count line is the whole garnish.
- **Reusability as a product**: configuration surface, theming, packaging,
  docs beyond a README pointer at the data file. Forkability is a side
  effect, not a goal.
- **Sub-country granularity** (cities, regions, states): countries are the
  unit; follows from the premise.
