---
title: A pixel atlas of visited countries
label: wayfinder:map
---

## Destination

A live, deployed standalone project: a minimalistic pixelated world map,
generated at build time from real country geometry, with the countries Ignas
has visited lit and the rest dimmed — at its own URL, linked from
ausiejus.lt's work list as a new exhibit. This map carries execution: it ends
when the site is live and the portfolio links it, not when a spec is written.

## Notes

- This is an **exhibit** (see [CONTEXT.md](../CONTEXT.md)): the work plus what
  it proves. What it proves here: **algorithmic/graphics craft** — the pixel
  map is *computed* from real geodata, not hand-drawn; "pixelated" is the
  output aesthetic, the substance is the generator. An employer opening the
  repo should hit the rasterizer in one hop.
- Whole world renders: unvisited countries dimmed but present, visited lit.
  The read is "coverage of the world", not floating shapes.
- Interactivity budget: **light touch** — hover/tap a visited country shows
  its name (maybe year visited). Nothing more.
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

## Not yet specified

- **The page around the map**: layout, typography, where the "N countries"
  line sits, dark mode, how much visual kinship with ausiejus.lt — sharpens
  after the rasterization prototype and the naming ticket.
- **Build plan and quality bar**: milestones, perf/a11y targets, the
  degradation contract for the hover affordance (no-JS, touch,
  reduced-motion) — sharpens after the render-layer ticket.
- **Portfolio-side integration**: the exhibit block's copy and placement in
  ausiejus.lt's work list (and whether CV/README mention it) — sharpens as
  launch nears.

## Out of scope

- **Rich interactivity**: trip details, photos, stats panels, timelines,
  chronological country lists, % of world visited. Ruled out in charting —
  the map stays minimal; one count line is the whole garnish.
- **Reusability as a product**: configuration surface, theming, packaging,
  docs beyond a README pointer at the data file. Forkability is a side
  effect, not a goal.
- **Sub-country granularity** (cities, regions, states): countries are the
  unit; follows from the premise.
