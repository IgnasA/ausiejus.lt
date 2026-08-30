---
title: "m3: Quiet innovations"
label: wayfinder:task
status: closed
assignee: ignas
map: ../map.md
blocked-by: [11]
---

## Question

Land the quiet-innovation budget from 005 — discoverable-only, never
delaying content:

- **View Transitions API** on the re-brand click (native transition;
  degrades to the CSS token transition where unsupported).
- **CSS scroll-driven animations** for the work list (`animation-timeline:
  scroll()`), zero JavaScript; imperceptible-or-off under reduced-motion
  and in unsupporting browsers.
- Verify the `@property` token typing from m1 reads clearly in devtools —
  it's part of the view-source exhibit.

Done when each lands behind proper feature detection and the page is
byte-for-byte fine in a browser that supports none of them.

## Resolution

Shipped on main, all feature-detected:

- **View Transitions** on the re-brand click — with a deliberate twist: a
  naive whole-page transition would snapshot-crossfade over the live
  `@property` accent interpolation the contour field reads, hiding m2's
  centerpiece. So the root crossfade is disabled
  (`::view-transition-old/new(root) { animation: none }`) and only the
  **token readout** carries a `view-transition-name` — old and new token
  text cross-fade natively while the page's own token transition stays
  live. Guarded by a runtime `document.startViewTransition` check and
  skipped under reduced motion; `flushSync` + `useLayoutEffect` keep the
  DOM swap inside the transition callback.
- **Scroll-driven settle** for the work list: pure CSS
  (`animation-timeline: view()`, range `entry 0%–60%`) inside
  `@supports (animation-timeline: view())` and
  `prefers-reduced-motion: no-preference` — zero JavaScript, inert where
  unsupported.
- `@property` token typing confirmed readable in devtools (m1).

Verified live: `animation-name: settle` with `view()` timeline active,
readout `view-transition-name` set, re-brand through a transition lands
aurora with the accent fully interpolated, items fully settled after
scroll, clean console.
