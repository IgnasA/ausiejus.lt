---
title: What makes minimal portfolios interesting
label: wayfinder:research
status: closed
assignee: research-agent
map: ../map.md
blocked-by: []
---

## Question

Survey acclaimed minimal developer/designer portfolios (awards sites, widely
shared examples, personal sites of well-known frontend engineers) and extract
the patterns:

- What forms does the "one signature interactive moment" take in practice —
  hero interactions, cursor play, typography tricks, generative touches,
  scroll choreography used sparingly?
- What do the best austere layouts share (type scale, spacing, color counts,
  information density on the first screen)?
- What do recruiters/hiring managers reportedly respond to, and what reads as
  gimmick?
- Concrete named examples worth reacting to, with URLs.

Findings feed the signature-moment prototype ticket. Capture as a Markdown
findings file per the research skill's convention.

## Resolution

Surveyed the acclaimed minimal portfolios directly (rauno.me, paco.me,
p5aholic.me, lynnandtonic.com, antfu.me, leerob.com, brianlovin.com,
joshwcomeau.com, robbowen.digital, henry.codes, cassie.codes, bruno-simon.com
as the maximalist counterexample) plus Awwwards/minimal.gallery curation and
hiring-side sources (Josh Comeau's *Building an Effective Dev Portfolio*, the
profy.dev survey of 60+ hiring managers).

**Signature moments in practice** are small and attached to a real element,
never a takeover: a copy-email button with a "Copied" state (rauno.me), a
quiet GLSL background behind plain text lists (p5aholic.me), a responsive
face-decomposition hero that doubles as CSS proof (lynnandtonic.com), a cursor
ink-trail (robbowen.digital), an animated SVG self-portrait (cassie.codes).
The strongest are discovered rather than announced, and the page reads fine if
they never fire. Bruno Simon's drive-a-car portfolio is admired but is the
canonical anti-pattern for a recruiter-first page: it gates content behind the
experience.

**Austere layouts converge**: single column, short text-list navigation,
near-monochrome with at most one accent, roughly two type sizes, projects as
plain text lists (not card grids), and a first screen carrying name + a
one-line positioning statement naming employer/output + proof links, plus at
most one humanizing note.

**Hiring side**: reviewers go resume → GitHub → site; a slow, stale, or
half-polished site actively hurts ("websites open the door for more
interpretation and criticism"), while curation (2–5 projects with
problem/ownership/outcome), memorable personal copy, and fast load are what
land. For a frontend role the page's own craft is admissible evidence — which
raises the polish bar. Anything that delays reading the positioning line
(loaders, intro animation, scroll/cursor hijack) reads as gimmick.

**Implication**: the p5aholic pattern (austere text UI + quiet generative
layer) and the Lynn Fisher pattern (typographic trick on the hero) are the
best-fit models for exactly-one-moment-that-degrades-gracefully; ship the
moment only at full polish, and design the no-JS/reduced-motion page as the
baseline, not the fallback.

Full findings with per-site notes and source URLs:
[research/minimal-portfolios.md on branch `research/minimal-portfolios`](../../research/minimal-portfolios.md)
(`git show research/minimal-portfolios:research/minimal-portfolios.md`).
