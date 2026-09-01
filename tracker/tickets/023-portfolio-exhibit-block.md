---
title: The portfolio exhibit block for Buvau
label: wayfinder:grilling
status: closed
assignee: ignas
map: ../map-pixel-atlas.md
blocked-by: []
---

## Question

Cross-repo blocker (not in frontmatter): buvau's m4 — this ticket starts
when buvau.ausiejus.lt is live.

Write and land Buvau's exhibit block on ausiejus.lt's work list: 2–3
first-person sentences in the established format (problem/ownership/
outcome, ≤50 words), introducing the Lithuanian name in English, linking
buvau.ausiejus.lt live + source. Decide where it slots among the existing
exhibits (Trailhead is flagship; does a personal exhibit sit last?), and
whether the CV mentions it. The map ends when this merges.

## Resolution

Grilled and landed:

- **Placement**: second, right after Trailhead — the two live personal
  builds lead the list, employment case studies follow.
- **Copy** (Ignas's one edit: no country count): "The countries I've been
  to, drawn the way memory draws a map: real geography, aggressively
  simplified, wobbled by a seeded hand — and redrawn on every visit.
  Generated at build time from Natural Earth data. Live, with source."
  Name links buvau.ausiejus.lt, source links the repo; stack line
  "TypeScript · Vite · Canvas · a Natural Earth + d3-geo generator".
- **CV**: unchanged — the projects list is where Buvau lives.

Verified rendering and build locally, pushed to main → deployed. The map
is complete: the destination — live at its own URL, linked from the
portfolio as an exhibit — is reached.

**Amendment (post-close, Ignas):** the copy drops the personal "countries
I've been to" framing — Buvau is presented as a general, reusable map:
"…One data file lights the visited countries; swap it and the map is
yours." Deployed.
