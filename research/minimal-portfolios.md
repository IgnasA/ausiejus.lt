# What makes minimal portfolios interesting

Research findings for ticket
[002-what-makes-minimal-portfolios-interesting](../tracker/tickets/002-what-makes-minimal-portfolios-interesting.md).
Surveyed 2026-08-30 by fetching the portfolio sites directly, plus award/curation
galleries (Awwwards, minimal.gallery) and hiring-side writeups (Josh Comeau's
*Building an Effective Dev Portfolio*, the profy.dev survey of 60+ hiring
managers).

## TL;DR

The acclaimed minimal portfolios are austere almost to the point of plainness —
one column, one or two type sizes, near-monochrome, name + one-line positioning
+ proof links all on the first screen. The "interesting" is carried by exactly
one crafted element, and in the strongest examples that element is **small and
touchable** (a micro-interaction, a background shader, a typographic trick),
not a takeover experience. The hiring side barely rewards the site's
cleverness at all: recruiters read resume → GitHub → site, in that order, and
an unpolished or slow site *hurts* more than no site. For a frontend developer
the site is the one place where the page's own craft is legitimately evidence —
but only after the 30-second skim is already won by content clarity.

## (a) Forms the "one signature interactive moment" takes

Observed on the sites themselves:

- **Micro-interaction on a utility element.** rauno.me is a sparse text page
  whose most-cited detail is a copy-email button with a "Copied" state — the
  restraint *is* the statement; craft shows up in one tiny, useful interaction
  (source: https://rauno.me). His wider work (Devouring Details,
  https://devouringdetails.com/) argues interaction craft lives in "invisible
  details," not showpieces.
- **Generative/shader background behind an austere text UI.** Keita Yamada
  (https://p5aholic.me) pairs a plain-text, list-based layout with a subtle
  WebGL/GLSL background effect, plus Light/Dark/Mono display modes. The
  contrast between pristine text and live graphics is the whole trick.
- **Typographic/CSS trick as identity.** Lynn Fisher
  (https://lynnandtonic.com) is famous for the responsive "face layers" hero
  (her face decomposing as the viewport narrows) and for versioned yearly
  redesigns ("v. XIX" in the footer) — the signature moment doubles as a
  CSS-mastery proof.
- **Animated self-portrait / mascot.** Cassie Evans (https://cassie.codes)
  built her reputation on an interactive animated SVG self-portrait (site now
  wound down to a farewell note — checked 2026-08).
- **Whimsy distributed as micro-touches.** joshwcomeau.com scatters small
  delights (theme/sound toggles, playful checkboxes, animated accents) over a
  content-first blog layout — closer to "many tiny moments" than one, and
  notably heavier/denser than the austere camp (source: https://www.joshwcomeau.com).
- **Cursor play.** Robb Owen (https://robbowen.digital) — playful cursor
  ink-trail over an otherwise spacious hero with a "Hire me" CTA and open-source
  proof (SynthWave '84) directly below the fold.
- **The maximalist counterexample: experience-as-portfolio.** Bruno Simon
  (https://bruno-simon.com) makes you drive a 3D car through his resume.
  Universally admired as a *creative developer* showpiece — and universally
  cited as the thing *not* to imitate for a recruiter-first page: content is
  gated behind the game, the load is heavy, and the skim is impossible. It
  works for him because the experience is the product he sells.
- **No moment at all, credibility as the hook.** antfu.me and leerob.com open
  with plain text listing shipped, recognizable work (Vitest/Slidev/VueUse;
  SpaceX/Vercel). Proof-of-work replaces spectacle (sources: https://antfu.me,
  https://leerob.com).

Pattern: on the austere sites, the moment is (1) discovered rather than
announced, (2) attached to a real element (email button, background, hero
portrait) rather than free-floating, and (3) skippable — the page reads fine
if it never fires.

## (b) What the best austere layouts share

Common to rauno.me, paco.me, brianlovin.com, antfu.me, leerob.com,
p5aholic.me (all fetched directly):

- **Single column, generous whitespace, low first-screen density.** Every one
  is a one-column vertical flow; navigation is a short text list, not a bar of
  widgets.
- **First screen = name + one-line positioning + proof.** "Webmaster at
  Linear" (paco.me), "fanatical open sourceror and design engineer" + project
  list (antfu.me), current role at SpaceX (leerob.com), "I'm a software
  designer... making AI products at Notion" (brianlovin.com). The line names
  employer/output, not adjectives.
- **Near-monochrome palettes** — one background, one text color, at most one
  accent; several offer dark mode or (p5aholic) explicit display modes.
- **Two-ish type sizes.** Body plus a modest heading; hierarchy comes from
  spacing and weight, not scale jumps. Markdown-ish structure (paco.me
  literally reads like rendered markdown).
- **Lists over cards.** Projects appear as plain text links with one-line
  descriptions and dates, not thumbnail grids.
- **A single humanizing note** — a "Now" philosophy section (paco.me), a
  hand-painted hometown illustration (leerob.com), a location/weather stamp
  (henry.codes). One per page, no more.
- Gallery curation agrees: minimal.gallery's portfolio tag and Awwwards'
  minimal collection consistently feature strong-typography, restraint-first
  sites where "minimal design signals confidence — strong work needs no
  embellishment" (https://minimal.gallery/tag/portfolio/,
  https://www.awwwards.com/websites/minimal/).

## (c) What the hiring side responds to vs. what reads as gimmick

- **Order of attention: resume → GitHub → portfolio site.** The profy.dev
  survey of 60+ hiring managers/recruiters found most *would* open a site if
  linked, but it rarely moves the decision; resumes get 60–90 seconds, GitHub
  demonstrates ability, the site is lowest priority
  (https://profy.dev/article/portfolio-websites-survey, mirrored at
  https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge).
- **A weak site is worse than none.** Same survey: poor design makes a
  developer "look incompetent" despite solid code; broken links, stale content
  and slow loads actively hurt. Quote from a recruiter: "Websites are cool and
  look nice but they open the door for more interpretation and criticism."
  Frontend caveat: the survey skews general/React-junior; for frontend roles
  the site's own execution *is* admissible evidence — which raises the polish
  bar rather than lowering it.
- **Responds to: curation and narrative.** Josh Comeau (hired at Gatsby, Khan
  Academy, DigitalOcean, Unsplash): a portfolio is "a highlight reel" of 2–5
  projects; be a "tour guide" through decisions; memorable, personal copy beats
  template copy (https://www.joshwcomeau.com/effective-portfolio/).
- **Responds to: context per project** — problem, what you owned, outcome,
  live link + source link. Reviewers repeatedly flag "beautiful final design
  with no context" as the top failure (e.g.
  https://blog.theinterviewguys.com/how-to-make-a-portfolio-website-that-gets-you-hired/).
- **Responds to: speed.** Screeners open dozens of sites in a sitting; a slow
  load ends the visit (same sources). Any signature moment that delays first
  paint costs the skim directly.
- **Reads as gimmick:** interaction that gates content (Bruno-style
  experiences for non-creative-dev roles), loaders/intro animations, cursor
  hijacking, scroll hijacking, dense card grids of tutorial clones, and any
  animation that must finish before the visitor can read the positioning line.
  The consistent line: whimsy that decorates content is charming; whimsy that
  *delays* content is a rejection accelerant.

## (d) Named examples worth reacting to

| Site | Who | Character / signature moment |
|---|---|---|
| https://rauno.me | Rauno Freiberg (Vercel, ex-Arc) | Sparsest of all; craft in micro-interactions (copy-email "Copied" state); manifesto tone |
| https://paco.me | Paco Coursey (Linear) | Markdown-plain single column; "Now" philosophy section as the human note |
| https://p5aholic.me | Keita Yamada | Plain text lists + subtle GLSL background; Light/Dark/Mono modes — closest existing model to "one moment on an austere page" |
| https://lynnandtonic.com | Lynn Fisher | Responsive face-layers hero; yearly versioned redesigns; trick = CSS proof |
| https://antfu.me | Anthony Fu | Text-first credibility (Vitest, Slidev...); generative art kept off-page at 100.antfu.me |
| https://leerob.com | Lee Robinson (SpaceX, ex-Vercel) | Editorial single column; role + beliefs + one hand-painted illustration |
| https://brianlovin.com | Brian Lovin (Notion, ex-GitHub) | App-like restraint ("briOS"); lists of writing/projects, limited palette |
| https://www.joshwcomeau.com | Josh Comeau | Denser content-first blog with distributed whimsy; the counterpoint to "one moment" |
| https://robbowen.digital | Robb Owen | Cursor ink-trail over spacious hero; OSS proof above the fold |
| https://henry.codes | Henry Desroches | Digital-garden voice, dark intimate palette, location stamp; poetic copy |
| https://cassie.codes | Cassie Evans (GSAP) | (Retired) animated SVG self-portrait as the canonical hero-moment example |
| https://bruno-simon.com | Bruno Simon | Maximalist counterexample: 3D driving game; brilliant, and everything the skim forbids |
| https://www.awwwards.com/websites/minimal/ / https://minimal.gallery/tag/portfolio/ | — | Living galleries for calibrating current minimal-portfolio taste |

## Implications for Ignas's page

- Win the skim with text: name, positioning line, current/most-credible work,
  and links to proof (GitHub, exhibits, CV) all readable in the first screen
  with zero interaction.
- Make the signature moment an *attachment to a real element* — hero
  name/portrait, background layer, or a utility control — not an overlay,
  loader, or scroll choreography. Discovered, not announced.
- The p5aholic.me pattern (austere text UI + quiet generative layer) and the
  Lynn Fisher pattern (typographic/CSS trick on the hero) are the two
  strongest fits for "exactly one moment, degrades gracefully."
- Degradation is a feature to design, not a fallback: page must be complete
  with the moment absent (no-JS, reduced-motion, slow device), which also
  satisfies the survey's "slow site = closed tab" finding.
- Budget polish over ambition: hiring-side sources agree an almost-great
  moment reads worse than none. Ship the moment only at rauno-level finish.
- Projects as a short curated list (2–5) with problem/ownership/outcome lines
  and live+source links — lists, not card grids.
- One humanizing note maximum (a "now" line, a place, an illustration).
- Keep the source presentable: the survey says reviewers who do click through
  go to GitHub; the repo is part of the exhibit (stack signaling ticket).
