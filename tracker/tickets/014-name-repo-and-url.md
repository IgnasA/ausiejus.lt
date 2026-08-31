---
title: Name, repo, and URL
label: wayfinder:grilling
status: closed
assignee: ignas
map: ../map-pixel-atlas.md
blocked-by: []
---

## Question

What is this project called, what is its repo named, and where does it live
once deployed?

- **Project name**: the title the portfolio's exhibit block and the page
  itself will carry. Candidates to react against: literal ("Visited", "Atlas",
  "Been There"), pixel-flavored ("Pixel Atlas", "8-bit Atlas"), Lithuanian.
- **Repo name**: public from first commit (the portfolio-map precedent);
  should read well in a pinned-repos row next to `ausiejus.lt` and
  `trailhead`.
- **URL**: subdomain of ausiejus.lt (e.g. `map.ausiejus.lt`,
  `atlas.ausiejus.lt` — matches the `trailhead.ausiejus.lt` pattern, no new
  domain cost) vs. its own domain.

The name feeds the fog around provisioning and the portfolio-side exhibit
block, so it comes early.

## Resolution

Grilled with bundled candidates (name → repo → URL); Ignas took the
recommendation:

- **Name: Buvau** — Lithuanian for "I've been (there)". Personal and
  distinctive, ties to the Vilnius identity the portfolio leads with, and
  memorable in a pinned-repos row precisely because it isn't English. The
  page carries a one-line translation ("*buvau* — Lithuanian: 'I have
  been'") as its quiet charm; the portfolio's exhibit block introduces it
  in English so recruiters are never lost.
- **Repo: `buvau`** — public from first commit (portfolio-map precedent);
  code lives in the sibling directory `../buvau`.
- **URL: `buvau.ausiejus.lt`** — subdomain over own domain: free, DNS is
  already on Vercel nameservers, matches the `trailhead.ausiejus.lt`
  pattern, and everything under ausiejus.lt reinforces the portfolio as
  the hub. Rejected: "Pixel Atlas" (a name a thousand map projects could
  have), "Visited" (plainest, charmless).

This unblocks the provisioning fog, graduated to its own ticket.
