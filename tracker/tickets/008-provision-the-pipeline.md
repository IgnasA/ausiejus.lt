---
title: Provision the pipeline
label: wayfinder:task
status: open
assignee:
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
  HITL — hand Ignas the exact records to enter.
- Ship a placeholder page (name + positioning line only) so the domain is
  live early; liveness beats emptiness per the research findings.

Resolved when https://ausiejus.lt serves the placeholder from the repo's
main branch. Record: repo URL, Vercel project name, DNS records entered.
