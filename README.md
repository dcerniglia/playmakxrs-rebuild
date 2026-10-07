# Playmakxrs™ — Website Concept

A complete rebuild of the Playmakxrs website, simplifying the user journey into three
distinct lanes — **Institutions**, **Families**, and **Sponsors** — with a premium,
sports-first aesthetic.

> **The family is the source. The institution is the platform. Playmakxrs™ is the bridge.**

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS (custom design system) |
| Motion | CSS transitions and `scroll-behavior: smooth` |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Hero, credibility strip, the three lanes, proof teaser |
| `/what-we-do` | The five verbs, Rights Before Reach, the pilot, FAQ |
| `/who-we-serve` | Institutions, families and estates, sponsors and media |
| `/our-proof` | The Bobby Grier case study and independent press |
| `/about` | The model and its boundaries |
| `/contact` | Pilot program intake |

Secondary: `/collection` (and `/collection#the-book`), plus privacy, terms and rights-governance.

## Design System

**Colors**

- `true-black` `#000000` — primary background for heroes and high-impact sections
- `deep-navy` `#0A1128` — secondary dark background (B2B / sponsors)
- `light-gray` `#F9F9F9` — alternating light content sections
- `card-dark` `#141C3A` — dark-mode glassmorphism cards
- `crimson` `#E53935` — primary brand accent (buttons, active states, data viz)
- `gold` `#D4AF37` — secondary accent, used sparingly on legacy/family pages

**Typography**

- Headings: bold condensed sans-serif, uppercase
- Body: clean sans-serif (Inter)
- Legacy pages: refined serif (Playfair Display) for emotional headers

## Project Layout

```
app/              App Router pages (one directory per lane)
components/       Shared UI — Navbar, Footer, Card, MetricCard, ProcessStepper, ...
public/assets/    Images shipped with the site
assets/           Source references: UI mockups, existing site model, raw copy
docs/             Design mockups, review renders, and concept PDFs
```

## Reference Material

- `assets/existing_site_model.md` — structure of the old site
- `assets/website_text_content.md` — raw copy to condense into the new layouts
- `assets/screenshot_*.png` — high-fidelity mockups of the intended design
- `CLAUDE.md` — developer guidelines and design-system contract
