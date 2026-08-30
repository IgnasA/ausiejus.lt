---
title: Build plan
label: wayfinder:grilling
status: closed
assignee: ignas
map: ../map.md
blocked-by: [6]
---

## Question

Chart the m0…mN execution tickets that take the decided design to a live
site on ausiejus.lt. All design inputs are locked: positioning and exhibits
(001), stack (003), the signature moment (004), and visual direction (005).
Blocked only by [Case-study format and CV download](006-case-study-format-and-cv-download.md),
which decides the page inventory the milestones build.

To settle here, then spawn as tickets:

- Milestone slicing (likely: scaffold+tokens → page content → the moment
  [re-brand + contour field, production rewrite of the prototype] → quiet
  innovations [@property tokens, View Transitions, scroll-driven animations]
  → polish/launch), each sized to one session.
- **Quality bar** (folded from the fog): accessibility pass (keyboard,
  contrast, reduced-motion), performance budget (fonts subset/preloaded,
  no layout shift, fast first paint — a slow portfolio actively hurts),
  SEO/meta/OG cards.
- The optional Houdini Paint Worklet easter egg — decide if/when.
- What "launch" includes: DNS live (from ticket 008), GitHub profile ready
  (from ticket 007), link the site from LinkedIn/CV.

Resolved when the milestone tickets exist, wired with blocking, and the
map's fog is empty.

## Resolution

Four milestones, each one session, chained after the provisioning task
(which acts as m0):

- **m0** = [Provision the pipeline](008-provision-the-pipeline.md) (repo,
  scaffold, Vercel, DNS, live placeholder) — already a ticket.
- **[m1: Token system and page content](010-m1-tokens-and-page.md)**
  (blocked by 008) — typed tokens in the Editorial serif direction + dark
  set, full one-page inventory, exhibit copy drafted with Ignas.
- **[m2: The moment, production-grade](011-m2-the-moment.md)** (blocked by
  m1) — production rewrite of the re-brand + contour field with its full
  degradation contract.
- **[m3: Quiet innovations](012-m3-quiet-innovations.md)** (blocked by m2)
  — View Transitions, scroll-driven animations, all feature-detected.
- **[m4: Quality bar and launch](013-m4-quality-bar-and-launch.md)**
  (blocked by m3 **and** the GitHub ticket 007, since launch links the
  profile) — a11y AA, LCP < 1.5s / CLS 0 / ≤250KB / Lighthouse ≥95,
  SEO/OG, cv.pdf, launch checklist. m4's completion is the destination.

Quality bar numbers live in m4's body. The **Houdini Paint Worklet easter
egg is ruled out of this map's scope** (post-launch garnish, Chromium-only;
revisit as a fresh effort if ever). With this, the fog is empty and every
remaining step to the destination is a wired ticket.
