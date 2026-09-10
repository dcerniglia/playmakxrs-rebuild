# Playmakxrs Website Redesign - Developer Guidelines

## Project Overview
This project is a complete rebuild of the Playmakxrs website. The core objective is to simplify the user journey into three distinct lanes (Institutions, Families, Sponsors) and adopt a premium, "sports-first" aesthetic.

**Core Mantra:** "The family is the source. The institution is the platform. Playmakxrs™ is the bridge."

## Technology Stack
- **Framework:** Next.js (App Router)
- **UI Library:** React
- **Styling:** Tailwind CSS (utility-first, custom design system)
- **Animations:** GSAP (GreenSock) for high-performance scroll triggers, parallax, and staggered reveals.
- **Carousels:** `embla-carousel-react` for smooth, touch-friendly sliders.

## Design System (Tailwind Config)
When building components, strictly adhere to this custom color and typography palette:

- **Colors:**
  - `bg-true-black` (#000000): Primary background for heroes and high-impact sections.
  - `bg-deep-navy` (#0A1128): Secondary dark background (primarily for B2B/Sponsors).
  - `bg-light-gray` (#F9F9F9): For alternating light content sections.
  - `bg-card-dark` (#141C3A): For dark mode glassmorphism/cards.
  - `text-crimson` / `bg-crimson` (#E53935): Primary brand accent for buttons, active states, and data visualization.
  - `text-gold` (#D4AF37): Secondary accent used sparingly on legacy/family pages.

- **Typography:**
  - **Headings:** Bold, condensed sans-serif (e.g., Oswald or Teko). Use `uppercase`.
  - **Body:** Clean sans-serif (e.g., Inter).
  - **Legacy Pages:** Sparingly use a refined serif (e.g., Playfair Display) for emotional headers on the Families/About pages.

- **Aesthetic Vibe:** Premium sports-centric, high contrast, uncluttered, utilizing dramatic lighting and archival photography. Use subtle glassmorphism on cards and dynamic hover states on interactive elements.

## Site Architecture & Routing
The site uses the Next.js App Router with the following core pages:

1. `/` (Home): Hub routing users to the three lanes, featuring the new sports-first mantra.
2. `/institutions` (For Institutions): Focused on Athletic Departments and Universities.
3. `/families` (For Families & Athletes): Focused on legacy protection, books, and merchandise.
4. `/partners` (For Sponsors & Media): B2B focus with data-viz elements.
5. `/about` (The Bobby Grier Story): Long-form editorial case study.
6. `/contact` (Pilot Program): Branched intake form with robust UI.

## Local Assets & References
Before writing code or generating copy, refer to the `./assets` directory in the project root:
- **UI Mockups:** High-fidelity images of the intended design (`screenshot_*.png`).
- **Old Site Structure:** `existing_site_model.md`
- **Raw Text Copy:** `website_text_content.md` (Use this raw text and condense/rephrase it to fit the new sleek layouts).

## Animation Guidelines (GSAP)
- **Heroes:** Fade in background image (`scale: 1.05` to `1`), stagger the H1, subhead, and CTA button.
- **Scroll:** Sections should fade in and translate Y as they enter the viewport (`y: 30, opacity: 0`).
- **Grids:** Use `stagger: 0.1` for cards/logos popping in sequentially.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
