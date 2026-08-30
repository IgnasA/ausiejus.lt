---
title: Make GitHub hold up to a look
label: wayfinder:grilling
status: closed
assignee: ignas
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

## Progress

**Secrets/privacy audit of Trailhead (2026-08-30): PASSED.**

- No `.env`/secret/credential file was ever committed in any branch
  (full-history `--diff-filter=A` sweep); `.gitignore` covers `.env*`.
- No credential-shaped string (Google `GOCSPX-` secrets, `AIza…` keys,
  `sk-…` keys, JWTs, private-key blocks) anywhere in history — the only
  pattern hits are benign prefix-validation code.
- No personal identifiers in tracked files: the personal email appears
  nowhere; "booking reference"/"e-ticket" hits are domain vocabulary, not
  data. Supabase URL/keys live only in env, not the repo.

Publishing Trailhead's source is safe. The portfolio-repo half of this
ticket resolved itself: github.com/IgnasA/ausiejus.lt is public (ticket 008).

## Resolution

Decisions (Ignas approved the recommendations):

- **Trailhead goes public** — audit passed; the flagship's "source" link is
  honest.
- **Stale originals get archived**; old forks are left (or deleted by Ignas
  at will — deletion stays strictly manual).
- **Pins**: exactly two — `ausiejus.lt` and `trailhead`.
- **Bio**: "Frontend engineer — design systems & white-label · ausiejus.lt",
  location Vilnius, website https://ausiejus.lt. No profile README.

The session's permission classifier blocks account-changing GitHub calls,
so execution is Ignas's checklist (m4 verifies it before launch):

1. `gh repo edit IgnasA/trailhead --visibility public --accept-visibility-change-consequences`
2. Archive stale originals (rule: original, untouched since ~2023, not
   trailhead/ausiejus.lt — e.g. liteboard, aerial-portfolio,
   frontend-party): `gh repo archive IgnasA/<name> --yes` each.
3. On github.com/IgnasA: pin `ausiejus.lt` + `trailhead`; set the bio,
   location, and website above.
