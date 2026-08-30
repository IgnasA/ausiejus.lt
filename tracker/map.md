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
- Trailhead (../trailhead) is the flagship exhibit (decided in the
  positioning ticket); its repo is private until the GitHub ticket says
  otherwise.

## Decisions so far

<!-- one line per closed ticket: gist + link -->

- [What makes minimal portfolios interesting](tickets/002-what-makes-minimal-portfolios-interesting.md): text-first skimmable first screen plus one small, discovered, gracefully-degrading moment attached to a real element (quiet generative background or typographic hero trick are the best-fit models); anything that delays reading the positioning line reads as gimmick.
- [Positioning and content inventory](tickets/001-positioning-and-content-inventory.md): lane = "frontend engineer building design systems and white-label products — interfaces other companies ship as their own"; React/Next/TS market, remote + Europe, widened beyond fintech; exhibits = Trailhead (flagship) + Railsr onboarding and Equals design-system written case studies; identity = name/role/Vilnius + email/LinkedIn/GitHub, no photo; GitHub link conditional on cleanup.
- [Stack and hosting](tickets/003-stack-and-hosting.md): Next.js static export, vanilla CSS with custom-property tokens (the token layer is itself an exhibit), Vercel, canonical domain ausiejus.lt (already owned), public repo from first commit.
- [The signature interactive moment](tickets/004-signature-interactive-moment.md): a quiet "◐ re-brand this page" control that swaps the token layer into fake partner brands, re-skinning the whole page including a token-aware topographic contour field that bends around the cursor — the page proves it's white-label by re-branding itself.
- [Visual direction](tickets/005-visual-direction.md): Editorial serif — Newsreader throughout, warm paper, ~12vh spacing, single 640px column; the name's typeface never re-brands; system dark mode respected; first exhibit peeks above the fold; quiet-innovation budget = @property-typed tokens, View Transitions, scroll-driven animations (Houdini as optional easter egg).

## Not yet specified

<!-- empty — everything in scope is now a ticket. The build plan (with the
     quality bar folded in) graduated to the Build plan ticket. -->

## Out of scope

<!-- nothing ruled out yet -->
