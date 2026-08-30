---
title: Visual direction
label: wayfinder:prototype
status: closed
assignee: ignas
map: ../map.md
blocked-by: [4]
---

## Question

The austere frame around the signature moment: typography (typeface, scale),
spacing system, color (how few?), light/dark, and the first-screen layout that
survives the 30-second skim (name, role, one line of positioning, exhibits
reachable without scrolling?).

Blocked by [The signature interactive moment](004-signature-interactive-moment.md)
because the frame is designed around the moment, not the other way round.

Prototype 1–2 static layout directions and react to them with Ignas.
Resolved when one direction is chosen and linked as an asset.

## Resolution

Three directions prototyped around the decided moment (quiet system /
editorial serif / engineered mono); **Editorial serif won**:

- **Typography**: Newsreader (variable, Google Fonts) for everything —
  large literary headline (~clamp(44px, 8vw, 76px), weight 500), 19px body,
  italic lowercase section labels. Two effective type sizes plus labels.
- **Color**: warm paper `#faf6ef`, ink `#221d16`, muted `#7a6f5f`; the only
  accent comes from the brand tokens. Near-monochrome per the research.
- **Spacing**: generous — ~12vh between sections, single column, max-width
  ~640px.
- **The name never re-brands**: partner-brand swaps change colors only; the
  headline's typeface is identity and stays constant (Ignas's steer).
- **Dark mode**: respect `prefers-color-scheme: dark` with a proper dark
  token set (distinct from the Aurora brand).
- **First screen**: tightened so "Selected work" and Trailhead's first line
  peek above the fold on a typical laptop viewport.

**Quiet innovation budget** (Ignas's ask: innovative without standing out;
all discoverable-only, standard-track): CSS `@property`-typed tokens so
token values animate natively (demonstrated in the prototype — the accent
contour morphs between brands), the View Transitions API on the re-brand
click, and CSS scroll-driven animations for the work list (zero-JS scroll
choreography). A Houdini Paint Worklet contour background (canvas fallback)
is an optional later easter egg, not part of the build's baseline.

**Asset**: `prototype/visual-direction.html` on branch
`prototype/visual-direction`
(`git show prototype/visual-direction:prototype/visual-direction.html`);
variant 2 is the winner.
