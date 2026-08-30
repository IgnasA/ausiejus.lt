---
title: The signature interactive moment
label: wayfinder:prototype
status: closed
assignee: ignas
map: ../map.md
blocked-by: [1, 2]
---

## Question

What is the **one** signature interactive moment — the single place where the
otherwise austere page proves frontend skill?

Inputs: the positioning statement and exhibit list (what should the moment
*demonstrate*?) and the research findings on what lands vs. what reads as
gimmick. Build 1–3 cheap throwaway prototypes of candidate moments and react
to them with Ignas; pick one.

Constraints from the map: it must not cost the 30-second skim — the page must
still work for a recruiter who never notices it. Degrades gracefully
(keyboard, touch, reduced-motion).

Resolved when one moment is chosen and its prototype is linked as an asset.

## Resolution

**The moment: "◐ re-brand this page" over a token-aware contour field.**

A quiet dotted-underline text control in the meta line. Each click swaps the
design-token layer (`--bg/--ink/--accent/--face-display/--radius`) into a
fake partner brand — Aurora (dark, serif, indigo), Koral (warm, pill radii),
Mint (green, mono) — with a tiny monospace token readout, re-skinning the
entire page **including** a generative background layer: slowly drifting
topographic contour isolines (marching squares over animated value noise),
one contour tinted with the brand accent, the field bending softly around
the cursor.

Why this shape:

- It literally demonstrates the positioning — the page proves it's
  white-label by re-branding itself, and no other portfolio can make that
  move honestly.
- The token-aware layer keeps the "exactly one moment" doctrine: the field
  is the moment's ambient proof, not a second feature.
- The contour field quietly rhymes with Trailhead's map work.

Iteration history: round 1 offered three structurally different candidates
(A re-brand button, B generative layer, C cursor-weighted typographic hero);
Ignas's reaction was "A, but quieter, plus B, but more interesting", which v2
unified. Round 2 offered contours vs flow-field trails for the layer;
**contours won**. The typographic hero and flow trails are rejected.

Constraints validated in the prototype: no-JS/reduced-motion page reads
complete (control is progressive enhancement, field freezes), no console
errors, works against the real page content.

**Asset**: `prototype/signature-moment.html` on branch
`prototype/signature-moment` (v2 = the winning design;
`git show prototype/signature-moment:prototype/signature-moment.html`).
Production rewrite happens in the build — prototype code is throwaway.
