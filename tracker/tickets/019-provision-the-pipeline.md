---
title: Provision the buvau pipeline
label: wayfinder:task
status: closed
assignee: ignas
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

## Progress

- **Done (agent):** local repo built through m1; public GitHub repo
  created and pushed — https://github.com/IgnasA/buvau ("public from
  first commit" honored).
- **Yours (wizard):** the Vercel import + buvau.ausiejus.lt domain +
  live check. Run:

  ```bash
  bash /Users/ignasausiejus/Documents/GitHub/buvau/scripts/provision-wizard.sh
  ```

  (Uncommitted, ephemeral; delete after the run.) Resolution lands here
  once https://buvau.ausiejus.lt serves the m1 placeholder.

## Resolution

Pipeline live end to end:

- Public repo: https://github.com/IgnasA/buvau (created and pushed by the
  agent; "public from first commit" honored — first push already carried
  m1).
- Vercel project imported from the repo by Ignas via the wizard; Vite
  preset, `npm run build`, `dist/` output. Deploys on every push to main.
- Domain: buvau.ausiejus.lt attached; DNS auto-created on the existing
  Vercel-nameserver setup, certificate issued.
- Verified: HTTP/2 200 at https://buvau.ausiejus.lt serving the current
  build (m3 state at time of closing).

Facts for later tickets: pushes to main auto-deploy; the wizard script
was ephemeral and has been deleted.
