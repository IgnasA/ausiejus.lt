---
title: The page around the map
label: wayfinder:prototype
status: closed
assignee: ignas
map: ../map-pixel-atlas.md
blocked-by: [18]
---

## Question

The pencil-ghost map is the page's whole reason to exist — what else is on
the page, and how does it dress?

- **Layout**: full-bleed map with chrome floating over it (the bench's
  reading), or a composed page (title, map, footer)? Where do the name
  "Buvau", the translation line ("*buvau* — Lithuanian: 'I have been'"),
  and the quiet "45 countries" line sit?
- **Typography and palette**: how much kinship with ausiejus.lt
  (Newsreader, warm paper) vs. the sketchbook's own voice (the pencil
  grays and hatch ink the prototype locked)? The exhibit link travels
  from the portfolio — should landing here feel like the same hand?
- **Dark mode**: the chalkboard variant proved a dark reading exists —
  system dark mode gets the chalk treatment, or stay single-theme paper?
- **Footer/meta**: source link (the repo is part of the exhibit), back
  link to ausiejus.lt, anything else — or nothing?

Prototype the page composition (the map itself is settled; this is
everything around it), reacting per the prototype skill.

## Assets

- Page bench (four compositions, `?variant=A..D`, live map with zoom/hover
  in all of them): https://claude.ai/code/artifact/f8819a11-815a-4951-883a-0cd3862b04fa
- Source on branch `prototype/rasterization` at `prototype/page/`.

## Resolution

Four compositions built around the live pencil-ghost map (full-bleed /
editorial / museum label / chalk nocturne) and Ignas picked: **B —
Editorial**.

The locked composition:

- **Newsreader header block** in the portfolio's voice: "Buvau" large
  serif, then the intro line — "*buvau* — Lithuanian: 'I have been.'
  Forty-five countries, drawn from real geography the way memory draws
  it: simplified, a little wrong, redrawn on every visit." The count and
  the per-visit-seed caption live inside that sentence; no separate
  stat chrome.
- **Map below the header**, wide (max ~1000px), serif italic readout line
  centered beneath it; mono footer with source · ausiejus.lt links.
- **Visual kinship**: deliberately the portfolio's sibling — Newsreader,
  warm paper — so arriving from the exhibit link feels like the same
  hand; the sketch itself carries the project's own voice.
- **Dark mode: a visible scheme selection** (Ignas's call, follow-up to
  the pick): the page carries a quiet toggle that flips the whole page
  between the pencil drawing on paper and the chalk drawing on board
  (variant D's treatment) — the same drawing, redrawn in the other
  medium. Defaults to the system scheme; the toggle overrides it. This
  is a deliberate echo of the portfolio's re-brand control: the page
  proves the drawing is computed by re-drawing itself in another hand.

Unblocks Build plan and quality bar — the last decision ticket.
