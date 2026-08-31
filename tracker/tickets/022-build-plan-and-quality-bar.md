---
title: Build plan and quality bar
label: wayfinder:grilling
status: closed
assignee: ignas
map: ../map-pixel-atlas.md
blocked-by: [21]
---

## Question

Every design decision is in (look, render layer, interactions, page
composition); slice the build into milestones and set the bar, the ticket
009 pattern from the portfolio effort:

- **Milestones**: provisioning is m0 (its own ticket); a plausible slicing
  is m1 generator + data file (Node script, outlines.json, visited list
  with the layover-rule comment), m2 the canvas sketch (pencil ghost +
  wobble + zoom/pan/hover), m3 degradation + a11y (SVG snapshot, noscript,
  sr-only list, keyboard, touch polish), m4 page chrome + launch. React to
  this or reslice.
- **Quality bar**: the portfolio shipped at AA contrast, LCP < 1.5s,
  CLS 0, ≤250KB, Lighthouse ≥95 — does buvau inherit the same numbers?
  Canvas + 60KB outlines suggests yes comfortably; the per-visit seed must
  not cost CLS or LCP.
- **Definition of done**: live at buvau.ausiejus.lt, portfolio exhibit
  block added (the portfolio-side integration fog resolves into a concrete
  step here or stays its own ticket), README that makes the repo legible
  in one hop, buvau's own CONTEXT.md seeded with the effort's terms
  (pencil ghost, readout line, per-visit seed, gesture/loose).

Resolution produces the milestone tickets and empties the map's fog.

## Resolution

Grilled; all recommendations taken, plus one relocation by Ignas: **the
build tickets live in the buvau repo itself** (../buvau/tracker,
same local-markdown convention), so the work ships next to the code. The
buvau repo now exists locally with README + tracker; its GitHub/Vercel/DNS
publication remains the provisioning ticket.

- **Milestones** (buvau tracker tickets 001–004, chained):
  m1 generator + data (+ CONTEXT.md seeded) → m2 the canvas sketch
  (per-visit seed, zoom/pan/hover, chalk renderer plumbed) → m3
  degradation + a11y (fixed-seed SVG snapshot = noscript + OG, sr-only
  list, keyboard, touch) → m4 page chrome + scheme toggle + launch.
  m0 = the provisioning ticket here (019), recommended before m2 so every
  milestone lands on the live URL.
- **Quality bar**: inherited from the portfolio unchanged, measured in
  *both* schemes — AA contrast, LCP < 1.5s, CLS 0 (seed provably free),
  ≤250KB first load, Lighthouse ≥95.
- **Definition of done**: bar met, buvau.ausiejus.lt live, and the
  portfolio exhibit block merged — graduated as its own ticket here (The
  portfolio exhibit block for Buvau), the last fog cleared. The map is
  complete when that ticket closes.
