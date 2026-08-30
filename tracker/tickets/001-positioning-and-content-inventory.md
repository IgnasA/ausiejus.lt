---
title: Positioning and content inventory
label: wayfinder:grilling
status: closed
assignee: ignas
map: ../map.md
blocked-by: []
---

## Question

What is Ignas selling, and what raw material exists to sell it with?

Two intertwined halves, one grilling session:

1. **Positioning / target market.** Which jobs is this portfolio aimed at —
   React/Next.js shops, Vue, Svelte, something else? Product companies,
   agencies, startups? Local market or remote? This decides stack signaling
   (see the blocked stack-and-hosting ticket) and the tone of the copy.
2. **Content inventory.** What exists today: projects (is Trailhead the
   flagship?), open-source contributions, CV, design work, writing. What
   *cannot* be shown (NDA client work, employer code)? What impact numbers or
   stories back each exhibit?

Resolved when we can write the site's one-line positioning statement and a
ranked list of exhibits with what each proves.

## Resolution

Grilled over two rounds, with the CV (`~/Downloads/Ignas_Ausiejus_CV.pdf`) as
the factual base and a GitHub profile check via `gh`.

**Positioning statement** (lane locked, wording polishable):

> Frontend engineer building design systems and white-label products —
> interfaces other companies ship as their own.

**Market**: React/Next.js/TypeScript (settles the stack-signaling input for
the stack-and-hosting ticket). Hunting both remote-first product companies
and the European/Vilnius market, deliberately widened beyond fintech — the
embedded-finance history is proof of the lane, not a cage.

**Ranked exhibits** (the research ticket prescribes 2–5, curated):

1. **Trailhead** — flagship. Live demo + source; proves end-to-end product
   craft (auth, import pipeline, maps, scroll reveal). *Caveat: its repo
   (github.com/IgnasA/trailhead) is currently private* — see the
   GitHub-holds-up ticket.
2. **Railsr embeddable onboarding UI** — written case study
   (problem/ownership/outcome, no visuals; regulated fintech, nothing
   showable). Proves the white-label lane under real constraints.
3. **Equals design system & component library** — written case study.
   Proves design-system ownership; the two-codebases-after-a-merger
   unification story is the hook.
4. OSS is a *mention*, not an exhibit: one small Carbon Design System PR
   under the personal handle
   (carbon-design-system/carbon#7223); Zowe work isn't attributable to it.

**Identity on the page**: "Ignas Ausiejus", "Frontend engineer, Vilnius",
email + LinkedIn + GitHub links, no photo, no contact form. The GitHub link
is conditional: profile is stale (nothing public pushed since Dec 2022, 44
old repos, 4 followers) and reviewers go resume → GitHub → site, so linking
it before cleanup would hurt. Graduated to its own ticket.

**Security thread** (malware-analysis coursework, clearance eligibility):
CV-only; it dilutes the one-message page.
