---
title: The visited-countries list
label: wayfinder:task
status: open
assignee:
map: ../map-pixel-atlas.md
blocked-by: []
---

## Question

Only Ignas can do this: produce the actual list of countries visited — the
data the whole project renders.

Checklist:

- List every country visited, ideally as ISO 3166-1 alpha-2 codes (`LT`,
  `DE`, …) so the geodata can key on them; plain names are fine and will be
  converted.
- For each, optionally the year of first visit — the hover affordance may
  show it, and it costs little to record now.
- Decide borderline cases per your own rules: airport layovers, transit
  without leaving the station, childhood trips you barely remember. The rule
  chosen matters less than stating it (it becomes a line in the data file's
  comment).
- Drop the list into this ticket's Resolution (or a gist/file linked from
  it); the build ticket later turns it into the canonical data file.

Nothing blocks on ceremony here — a plain typed list in a comment resolves
it.
