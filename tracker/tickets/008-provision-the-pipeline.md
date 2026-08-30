---
title: Provision the pipeline
label: wayfinder:task
status: open
assignee: ignas
map: ../map.md
blocked-by: [3]
---

## Question

Stand up the ship-path end to end so every later ticket deploys somewhere
real, per the [Stack and hosting](003-stack-and-hosting.md) decision:

- Create the **public** GitHub repo (github.com/IgnasA, clean first commit,
  real README) and a minimal Next.js static-export scaffold with the vanilla
  CSS token file stubbed.
- Create the Vercel project wired to the repo (AFK where `vercel`/`gh` auth
  allows; otherwise a precise HITL checklist).
- Point **ausiejus.lt** at Vercel: DNS records at the .lt registrar are
  HITL — hand Ignas the exact records to enter. Note in the checklist that
  **trailhead.ausiejus.lt** will need its own record later (Trailhead's
  future deploy — that project's concern, but this domain's zone).
- Ship a placeholder page (name + positioning line only) so the domain is
  live early; liveness beats emptiness per the research findings.

Resolved when https://ausiejus.lt serves the placeholder from the repo's
main branch. Record: repo URL, Vercel project name, DNS records entered.

## Progress

**Done (AFK)**: Next.js static-export scaffold on main — Newsreader via
`next/font`, the editorial token stub (light + dark), placeholder page
(name + positioning + Vilnius), real README. `npm run build` verified green
(Next 16.3.3 / React 19.2.8 / TS 7.0.2, export in `out/`).

**Blocked**: repo publish + push denied by the session's permission
classifier — publishing is Ignas's to trigger.

**HITL checklist for Ignas**:

1. Publish the repo (from the repo root):
   `gh repo create ausiejus.lt --public --source . --remote origin --push`
   then `git push origin research/minimal-portfolios prototype/signature-moment prototype/visual-direction`
2. Vercel: vercel.com/new → import `IgnasA/ausiejus.lt` → framework
   auto-detects Next.js → Deploy. No env vars needed.
3. Project → Settings → Domains → add `ausiejus.lt`. Enter the DNS records
   Vercel shows at the .lt registrar (typically `A @ → 76.76.21.21`;
   Vercel's dashboard values are authoritative). Remember the zone will
   later also carry `trailhead.ausiejus.lt`.
4. When https://ausiejus.lt serves the placeholder, say so — that closes
   this ticket and unblocks m1.
