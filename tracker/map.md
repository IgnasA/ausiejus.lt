---
title: A portfolio that survives the skim
label: wayfinder:map
---

## Destination

A live, deployed personal portfolio site at a real URL: minimalistic,
recruiter-first (survives a 30-second skim), engineer-second (the page's own
craft is the exhibit for anyone who lingers), with exactly one signature
interactive moment on an otherwise austere page. This map carries execution:
it ends when the site is live, not when a spec is written.

## Notes

- Ignas is a frontend developer; the audience is employers. Recruiter-first,
  engineer-second — when the two conflict, the 30-second skim wins.
- "Minimalistic yet interesting": the interesting lives in **one** signature
  interactive moment. Restraint everywhere else is what keeps it minimal.
- Stack is chosen for **stack signaling** — match the job market Ignas is
  targeting (market itself still to be pinned down), because employers will
  view source and find the repo. The portfolio's code is part of the pitch.
- Execution override: unlike wayfinder's planning default, this map carries
  build tickets through to deployment (the Trailhead m0–m6 pattern).
- Sessions should consult the `prototype` skill for design-question tickets
  and `grilling` + `domain-modeling` by default. Glossary lives in
  [CONTEXT.md](../CONTEXT.md).
- Trailhead (../trailhead) is a likely flagship exhibit — its map/reveal work
  is strong material — but the content inventory ticket decides that.

## Decisions so far

<!-- one line per closed ticket: gist + link -->

- [What makes minimal portfolios interesting](tickets/002-what-makes-minimal-portfolios-interesting.md): text-first skimmable first screen plus one small, discovered, gracefully-degrading moment attached to a real element (quiet generative background or typographic hero trick are the best-fit models); anything that delays reading the positioning line reads as gimmick.

## Not yet specified

- **Case-study / project-page format** — how each exhibit is presented (live
  demo? write-up? screenshots?). Depends on the content inventory.
- **Build plan and milestones** — the m0…mN execution tickets. Chartable only
  once stack, visual direction, and the signature moment are locked.
- **Domain and deployment setup** — registrar, host, DNS. Hangs on the stack
  and hosting decision.
- **Quality bar** — accessibility, performance budget, SEO/meta/OG cards. To
  be set once there is a design to hold to it.
- **CV** — downloadable resume, contact routes (email? form? socials?).
  Depends on positioning.

## Out of scope

<!-- nothing ruled out yet -->
