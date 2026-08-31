---
title: Geodata source and license
label: wayfinder:research
status: closed
assignee: research-agent
map: ../map-pixel-atlas.md
blocked-by: []
---

## Question

Which public dataset supplies the country geometry the build-time rasterizer
consumes? Surface the facts a choice hangs on:

- Candidate datasets: Natural Earth (1:110m / 1:50m), the `world-atlas`
  TopoJSON packages, geoBoundaries, others worth naming. For each: format
  (GeoJSON/TopoJSON), file size at the resolution a coarse pixel grid needs,
  license and attribution requirements, and how countries are keyed (ISO
  3166-1 alpha-2/alpha-3, numeric) so the visited-countries data file can
  reference them unambiguously.
- Known sharp edges: disputed territories and how each dataset handles them,
  tiny countries/microstates that vanish at low resolution (Singapore, Malta,
  Vatican), dependencies vs. sovereign states (does a visit to e.g. Puerto
  Rico light the US?), Antarctica.
- Whether any dataset ships simplified enough geometry that no simplification
  step is needed before rasterizing to a coarse grid.
- Projection support: what the raw coordinates are (lon/lat assumed) and any
  prior art on rasterizing GeoJSON to a pixel grid in TypeScript without a
  heavyweight GIS dependency (d3-geo's footprint counts as worth reporting,
  not assumed).

Findings feed the rasterization prototype. Capture as a Markdown findings
file per the research skill's convention.

## Resolution

Researched the primary sources directly (naturalearthdata.com and the
canonical natural-earth-vector repo, the world-atlas and geoBoundaries
READMEs, npm registry metadata) and, where a claim could be checked, the
actual data files — feature counts, ids, sizes and vertex totals were
measured by downloading and inspecting the geometry, not read off pages.

**Recommendation: Natural Earth 1:110m Admin 0 Countries via the
`world-atlas` npm package** (`countries-110m.json`, 108 KB raw / 39 KB
gzipped, TopoJSON decoded at build time with `topojson-client`). Natural
Earth is public domain with attribution explicitly unnecessary ("No
permission is needed... Crediting the authors is unnecessary"); world-atlas,
topojson-client and d3-geo are all ISC. Features are keyed by ISO 3166-1
numeric code in `id` plus `properties.name` — the visited list can stay
human-friendly alpha-2 behind a small alpha-2 → numeric lookup.

**Already simplified enough**: the 110m file totals 8,246 arc points for
the whole world (~46 per country); at a 200-wide grid a cell is 1.8° while
the quantization step is ~0.0036°, so the rasterizer consumes it directly
with no simplification pass.

**Sharp edges the prototype must design around**: 110m carries 177
features and drops the microstates entirely (Singapore, Malta, Vatican,
Monaco, Liechtenstein, Andorra, San Marino) — and even at 50m Singapore
never covers a cell center, so visited microstates need a centroid-based
nearest-cell fallback (Natural Earth's Tiny country points layer is the
ready-made source). Kosovo, Somaliland and N. Cyprus exist as features but
carry no ISO id (key by name if ever needed) — the famous ISO_A3 = -99
quirk also bites France and Norway in raw Natural Earth, where `ISO_A3_EH`
or `ADM0_A3` are the reliable fields. Dependencies stay separate features
(Puerto Rico does not light the US), though 110m France includes French
Guiana. Antarctica is a normal feature (id 010), kept or cropped as a
design choice. Boundaries are Natural Earth's "de facto, by who controls
the territory" policy.

**Rejected**: geoBoundaries CGAZ — ~401 MB of ADM0 GeoJSON plus a
mandatory CC BY 4.0 attribution, buying nothing at pixel resolution.
NE-direct GeoJSON (839 KB, current v5.1.1 data, alpha-3 keys) is the noted
fallback if data vintage ever matters; world-atlas pins NE 4.1.0.

**Prior art**: d3-geo is not heavyweight — 227 KB unpacked, pure JS, a
three-package tree — and its spherical `geoContains` sidesteps the
antimeridian and Antarctica pole caveats that trip a naive planar
ray-cast; brute-forcing 177 countries × ~20k cell centers at build time is
trivial. The `dotted-map` package independently validates the
grid-of-points + point-in-polygon + precompute-and-serialize approach.

Full findings with per-dataset facts and source URLs:
[research/geodata-source.md on branch `research/geodata-source`](../../research/geodata-source.md)
(`git show research/geodata-source:research/geodata-source.md`).
