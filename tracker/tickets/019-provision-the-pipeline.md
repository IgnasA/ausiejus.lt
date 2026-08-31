---
title: Provision the buvau pipeline
label: wayfinder:task
status: open
assignee:
map: ../map-pixel-atlas.md
blocked-by: []
---

## Question

Stand up the deployment pipeline for Buvau, the ticket-008 pattern from the
portfolio effort:

- Create the public GitHub repo `buvau` (public from first commit), cloned
  to the sibling directory `../buvau`, seeded with a minimal Vite + vanilla
  TypeScript scaffold so there is something to deploy.
- Create the Vercel project from the repo; static output.
- Wire `buvau.ausiejus.lt` — ausiejus.lt already sits on Vercel
  nameservers, so this is adding the subdomain to the Vercel project and
  confirming cert issuance (the portfolio effort's DNSSEC snag is already
  cleared).
- Verify: a hello-world deploy serves at https://buvau.ausiejus.lt.

Unblocked and takeable any time; it acts as this effort's m0. The answer
records the repo URL and any facts later tickets depend on.
