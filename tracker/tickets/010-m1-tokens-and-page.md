---
title: "m1: Token system and page content"
label: wayfinder:task
status: closed
assignee: ignas
map: ../map.md
blocked-by: [8]
---

## Question

Build the real token layer and the full page content on the scaffold from
[Provision the pipeline](008-provision-the-pipeline.md):

- The `@property`-typed design tokens implementing the Editorial serif
  direction (005): Newsreader, warm paper `#faf6ef` / ink `#221d16` /
  muted `#7a6f5f`, spacing scale, plus a proper `prefers-color-scheme: dark`
  token set (distinct from the Aurora brand).
- The one-page inventory from 006: header (name, positioning, meta),
  three exhibit blocks, footer links. First exhibit peeks above the fold.
- **Draft the exhibit copy with Ignas** (2–3 first-person sentences each,
  ≤50 words: problem / ownership / outcome) — the one HITL step here.
- The no-JS/reduced-motion page is the baseline and must read complete.

Done when the deployed page shows the real content in the real direction,
light and dark, with the token layer clean enough to read as an exhibit.

## Resolution

Shipped on main (deploying via Vercel to the project URL; ausiejus.lt
still pending the DNSSEC fix in ticket 008):

- `app/globals.css`: `@property`-registered color tokens (--bg/--ink/
  --muted/--accent), editorial palette light + dark, type and spacing
  tokens, element styles per the 005 direction.
- `app/page.tsx`: full one-page inventory with semantic landmarks —
  header, three exhibit blocks, footer (Email/GitHub/LinkedIn/CV).
- Exhibit copy drafted from the CV and corrected with Ignas: ownership
  claims softened to "helped maintain" (Railsr) and "build and maintain"
  (Equals). The matching CV edits are recorded in m4's cv.pdf step.
- **Amended after close** (2026-08-30, during m2/m3): deeper factual
  corrections from Ignas — the Railsr exhibit became "Self-service
  platform" (self-service app + internal financial-data tool; the
  embeddable-onboarding claim was dropped), and the Equals exhibit no
  longer claims unification (two design systems remain separate; he works
  across both). The CV, which carries the same overstated claims, is
  flagged in m4.
- Verified: light and dark rendering, Newsreader via next/font, clean
  console, static export builds green.

Started while ticket 008 was still open (Ignas's call — only the
DNSSEC/cert item remained; repo, Vercel, and scaffold existed).
