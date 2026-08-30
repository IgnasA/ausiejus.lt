---
title: Stack and hosting
label: wayfinder:grilling
status: closed
assignee: ignas
map: ../map.md
blocked-by: [1]
---

## Question

Which framework, styling approach, and host — chosen for **stack signaling**:
the stack should match the job market Ignas is targeting (decided in
[Positioning and content inventory](001-positioning-and-content-inventory.md)),
because employers will view source and find the repo.

Sub-decisions:

- Framework (e.g. Next.js/React if that's the market) and rendering mode —
  a portfolio is static-first, so SSG/ISR vs. plain static export.
- Styling approach (Tailwind, vanilla CSS, CSS modules) — also a signal.
- Host (Vercel, Netlify, Cloudflare Pages, GitHub Pages) and whether a custom
  domain is bought now (registrar, name).
- Public repo? If the code is part of the pitch, the repo should be public
  and clean.

Resolved when the stack is named and the hosting/domain path is decided
(actual provisioning graduates from the fog as a task ticket).

## Resolution

- **Framework**: Next.js with static export — the React/Next/TS market's
  default; nothing on the page needs a server. Pure stack signaling.
- **Styling**: vanilla CSS with custom-property design tokens (hand-rolled
  type scale, spacing, color). No Tailwind: the positioning is "owns design
  systems", so a small immaculate token layer in plain CSS is itself an
  exhibit when employers view source.
- **Host**: Vercel free tier; preview deploys will serve the prototype
  tickets too.
- **Domain**: **ausiejus.lt** — Ignas already owns it. No purchase needed;
  surname-matching, and the .lt reads naturally for a Vilnius engineer
  targeting Europe. (Fact for the record: ignasausiejus.dev/.com and
  ausiejus.dev/.com were all available per RDAP on 2026-08-30, ignas.dev
  taken — noted in case a hedge redirect is ever wanted.)
- **Repo**: public on github.com/IgnasA from the first commit, clean history
  and a real README — the repo is part of the pitch, and it gives the
  GitHub-cleanup ticket one fresh pinned repo for free.

Provisioning (repo + scaffold + Vercel + DNS at the .lt registrar) graduated
to the [Provision the pipeline](008-provision-the-pipeline.md) task ticket.
