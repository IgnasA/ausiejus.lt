---
title: "m3: Quiet innovations"
label: wayfinder:task
status: open
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
