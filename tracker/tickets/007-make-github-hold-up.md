---
title: Make GitHub hold up to a look
label: wayfinder:grilling
status: open
assignee:
map: ../map.md
blocked-by: [1]
---

## Question

Reviewers go resume → GitHub → site, and the page will link
github.com/IgnasA — but the profile is currently stale: nothing public
pushed since Dec 2022, Trailhead (the flagship exhibit promising "live +
source") is a **private** repo, 44 old repos drowning the signal, and one
small Carbon PR.

Decide, then do:

- **Publish Trailhead's source?** The flagship's "source" link depends on it.
  Requires a secrets/privacy audit first (Supabase keys, OAuth config, any
  user data in fixtures) — that audit is the gating step.
- **Also: is the portfolio repo itself public?** (It's part of the pitch per
  the stack-signaling doctrine; overlaps with the stack-and-hosting ticket.)
- **Profile curation**: pin 2–4 repos, archive/hide the dead ones, profile
  README or not, bio beyond "@EqualsGroup".

Resolved when the publish decisions are made and the curation checklist is
either done (AFK where possible) or handed over as a precise HITL checklist.
