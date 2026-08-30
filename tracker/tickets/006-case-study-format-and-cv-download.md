---
title: Case-study format and CV download
label: wayfinder:grilling
status: closed
assignee: ignas
map: ../map.md
blocked-by: [1]
---

## Question

How is each exhibit presented on the page?

- **Trailhead** (flagship): live link + source link + how much write-up?
  Screenshot/animation on the page, or text-only per the austere doctrine?
- **The two written case studies** (Railsr onboarding UI, Equals design
  system): structure and length — the research prescribes
  problem/ownership/outcome with "I" not "we"; no visuals are available
  (regulated fintech). Inline on the one page, or separate pages?
- **CV**: downloadable PDF on the page, or LinkedIn-only?
- One page total, or index + detail pages? (Interacts with the visual
  direction ticket; decide structure here, looks there.)

Resolved when the page inventory is written: which blocks exist, in what
order, each with its content source.

## Resolution

**One page, no internal navigation.** The page inventory, top to bottom:

1. **Header**: name (h1), positioning line, meta line (Vilnius · currently
   at Equals · ◐ re-brand this page) + token readout.
2. **Selected work** — three exhibit blocks, each bold title + date range
   then 2–3 first-person sentences (problem / what I owned / outcome),
   hard cap ~50 words, no visuals:
   - **Trailhead** → live link **https://trailhead.ausiejus.lt** (Ignas will
     deploy Trailhead on that subdomain) + source link (pending the GitHub
     ticket's publish decision). Text-only: the live link is the visual.
   - **Embeddable onboarding, Railsr** — written case study.
   - **Design system, Equals** — written case study.
3. **Footer**: Email (mailto) · GitHub · LinkedIn · CV.

**CV**: downloadable PDF served at **ausiejus.lt/cv.pdf** — the current CV
updated to include the site URL — linked from the footer.

Exhibit copy gets drafted during the build milestone, edited against the
real layout. Detail pages and inline screenshots are rejected: with three
exhibits (two unshowable regulated-fintech ones), they'd be padding and a
staleness surface.

Side effect for [Provision the pipeline](008-provision-the-pipeline.md):
the DNS checklist should note that **trailhead.ausiejus.lt** will need its
own record when Trailhead's deploy exists (Trailhead's hosting itself is
that project's concern, not this map's).
