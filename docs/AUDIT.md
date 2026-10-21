# Performance, SEO and accessibility audit

Method: static export (`npm run build`) served locally, audited with Lighthouse
(headless Chromium, default mobile emulation) plus manual source checks.
Visual design is unchanged (see `docs/img/*-before.png` / `*-after.png`; the
contour field is animated, so pixel diffs in the background are expected).

## Scores (Performance / Accessibility / Best practices / SEO)

| Page      | Before            | After             |
|-----------|-------------------|-------------------|
| /         | 89 / 100 / 96 / 100 | 98 / 100 / 96 / 100 |
| /projects | 94 / 96 / 96 / 100  | 99 / 96 / 96 / 100  |

Performance deltas are mostly run-to-run variance on a simulated-throttle
machine; no performance code changed.

## Findings and fixes

| Area | Finding | Action |
|------|---------|--------|
| Deps | `npm audit`: 3 vulns (next SSRF - critical, sharp, source-map-js) | `npm audit fix`; now 0 |
| SEO | No `robots.txt` / `sitemap.xml` | Added `app/robots.ts`, `app/sitemap.ts` (static) |
| SEO | No structured data | Person + WebSite JSON-LD in layout |
| SEO | `/projects` had no meta description, no OG tags of its own | Added description and OpenGraph |
| SEO | OG image had no alt; no theme-color | Added alt and light/dark `theme-color` |
| A11y | `/projects` had no `<h1>` (h2 -> h3) | "Projects" is now the h1 (same styling via `h1.label`); entries are h2 |
| A11y | Decorative arrows read aloud; two ambiguous "source" links | Arrows `aria-hidden`; links get `aria-label` ("source code for X") |
| Already fine | `lang="en"`, canonical URLs, viewport, alt-free decorative canvas (`aria-hidden`), focus-visible outlines, reduced-motion handling, fonts self-hosted via `next/font` with `swap` and 3 small woff2, no images besides og.png (43 KB) | none |

## Left for a human

- **Contrast "failures" on /projects (a11y 96)** come from the scroll-driven
  `settle` animation: list items below the fold sit at opacity 0.15 until
  scrolled into view, and axe measures them in that state. Real colours pass
  (muted `#7a6f5f` on `#faf6ef` is about 4.8:1). Raising the start opacity
  would silence it but changes the design, so it is your call.
- `.stack` lines are `opacity: 0` until hover/focus on hover-capable devices;
  content hidden from mouse users until interaction is a design choice worth
  revisiting.
- Landmarks: `<footer>` and `<header>` sit inside `<main>`, so they are not
  `contentinfo`/`banner` landmarks. Moving them out would alter the layout CSS.
- The `main.home` canvas animation runs every frame on the main thread
  (TBT about 200-350 ms in Lighthouse). Options: lower frame rate, bigger cell
  size, or default to the Houdini renderer. Left alone: it is the signature
  visual.
- Vercel analytics script 404s locally (expected; fine in production).
- Cache headers for `/_next/static` are set by Vercel in production; verify
  after deploy. Lighthouse's cache insight only complains about the local server.
- Content: the page is English only (`lang="en"`); add `lt` alternates if a
  Lithuanian version is planned. Consider an OG image per page.
