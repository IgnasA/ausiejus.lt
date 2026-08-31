---
title: The visited-countries list
label: wayfinder:task
status: closed
assignee: ignas
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

## Resolution

Ignas supplied the list as screenshots of his travel app's "been" tab
(2026-08-31). Transcribed and deduplicated (the app lists Russia and Turkey
under both Asia and Europe; "West Bank" and "Palestine" are one entry for
our purposes) — **45 countries**, as ISO 3166-1 alpha-2:

- **Europe (30)**: AL Albania, AT Austria, BY Belarus, BE Belgium,
  BA Bosnia and Herzegovina, BG Bulgaria, HR Croatia, CZ Czechia,
  DK Denmark, EE Estonia, FI Finland, DE Germany, HU Hungary, IT Italy,
  LV Latvia, LT Lithuania, LU Luxembourg, MD Moldova, NL Netherlands,
  PL Poland, PT Portugal, RO Romania, RU Russia, SK Slovakia, ES Spain,
  SE Sweden, CH Switzerland, TR Turkey, UA Ukraine, GB United Kingdom
- **Asia (10)**: AM Armenia, GE Georgia, IL Israel, JP Japan, JO Jordan,
  KZ Kazakhstan, PS Palestine (West Bank), KR South Korea, TJ Tajikistan,
  UZ Uzbekistan
- **Africa (2)**: EG Egypt, MA Morocco
- **Americas (3)**: CA Canada, US United States, CO Colombia

No first-visit years recorded (the hover shows name only unless years are
added later). Layover rule: whatever the app's "been" means to Ignas —
the list above is canonical as given, no re-litigation.

Caveats for the data file: PS appears in Natural Earth as Palestine —
verify it renders in the prototype (it borders microstate territory at
110m). One screenshot seam falls exactly where Kosovo would sit
alphabetically (between Italy and Latvia) — Ignas confirmed the list
otherwise; Kosovo assumed **not visited** unless he says so, and Natural
Earth keys it by name anyway (no ISO id).

The build ticket turns this into the canonical data file in the `buvau`
repo.
