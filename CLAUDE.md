# Playmakxrs Website Redesign - Developer Guidelines

## Project Overview
This project is a complete rebuild of the Playmakxrs website. The core objective is to simplify the user journey into three distinct lanes (Institutions, Families, Sponsors) and adopt a premium, "sports-first" aesthetic.

**Core Mantra:** "The family is the source. The institution is the platform. Playmakxrs is the bridge."

### Where this repo sits in the lineage
Four versions of this site exist. Knowing which is which prevents treating a rejected iteration as the source of truth:

1. **playmakxrs.com** — the live production site (Astro). Wired up with Mailchimp and a Shopify-backed merch page. Still the customer-facing site today.
2. **Railway v1** — repositioned around a sharper focus on the service offering, deployed for review.
3. **Railway v2** — further reorganization, but it came out too wordy and was not adopted. *This is what `assets/website_text_content.md` captured.*
4. **This repo** — a streamlined rebuild from the mockups in `docs/`. The version the team settled on.

Current phase: **reinstating content the streamlining cut** — the book and the proof/media content are done; other items remain (see Backlog).

> `assets/website_text_content.md` is a scrape of **Railway v2, a rejected iteration** — not of production and not of this design. Treat it as a *content archive*: the best record of copy and links that were dropped and may be coming back. It is **not** the design authority. The mockups in `docs/` are.

### Where it is going
This repo is intended to **replace the repo currently behind playmakxrs.com**. It will move to the client's Vercel account as a dev branch, then be promoted to production. The repo will be renamed before final handoff (`playmakxrs-concept` is a working name).

## Technology Stack
- **Framework:** Next.js 16 (App Router), React 19, TypeScript.
- **Styling:** Tailwind CSS 3.4 (utility-first, custom design system).
- **Icons:** `lucide-react`.
- **Animations:** GSAP (GreenSock) — **installed but not yet wired up.** No component imports it today; the guidance below is the target, not a description of the current code.
- **Carousels:** `embla-carousel-react` — **installed but not yet used.**

`puppeteer` and `pdf-lib` are build-time tooling only (`capture.js`, `docs/generate_pdf.js`) and live in `devDependencies`. Keep them there.

## Design System (Tailwind Config)
When building components, strictly adhere to this custom color and typography palette:

- **Colors:**
  - `bg-true-black` (#000000): Primary background for heroes and high-impact sections.
  - `bg-deep-navy` (#0A1128): Secondary dark background (primarily for B2B/Sponsors).
  - `bg-light-gray` (#F9F9F9): For alternating light content sections. *Defined but unused — the site is dark throughout.*
  - `bg-card-dark` (#141C3A): For dark mode glassmorphism/cards. Also what `Card variant="solid"` renders, so never use it as a section background behind cards — they vanish.
  - `text-crimson` / `bg-crimson` (#E53935): Primary brand accent for buttons, active states, and data visualization.
  - `text-gold` (#D4AF37): Secondary accent used sparingly on legacy/family pages.
  - `text-gold-dark` (#B8860B): Darker companion to gold, for two-tone legacy treatments.

- **Typography:**
  - **Headings:** Oswald, `uppercase`. Applied globally to `h1`–`h6` via `app/globals.css`.
  - **Body:** Inter.
  - **`font-heading`:** Oswald on anything that is not an `h1`–`h6` — eyebrows, labels, buttons, nav items, small caps. This is the class to reach for when you want heading type on a `span` or `div`. (It was undefined until recently and silently rendered Inter; if old screenshots look different from the current build, that is why.)
  - **Legacy Pages:** Playfair Display via the `.font-serif-heading` class, for emotional headers on the Families/About pages.

- **Aesthetic Vibe:** Premium sports-centric, high contrast, uncluttered, utilizing dramatic lighting and archival photography. Use subtle glassmorphism on cards and dynamic hover states on interactive elements.

- **Section rhythm:** Sections are `py-24 px-6 md:px-8` + a background + a border, wrapping `max-w-7xl mx-auto` (or `max-w-6xl`/`max-w-3xl` for narrower content), with `<SectionHeading>` first. Backgrounds alternate `bg-true-black` / `bg-deep-navy`; use `bg-gradient-to-b` to bridge between them.

## Site Architecture & Routing

**Core pages:**
1. `/` (Home): Hub routing users to the three lanes, featuring the new sports-first mantra.
2. `/institutions` (For Institutions): Focused on Athletic Departments and Universities.
3. `/families` (For Families & Athletes): Focused on legacy protection, books, and merchandise.
4. `/partners` (For Sponsors & Media): B2B focus with data-viz elements.
5. `/about` (The Bobby Grier Story): Long-form editorial case study. Its "One Story, Many Assets" grid links out to the book, the Fox interview, and the Hall of Fame profile.
6. `/contact` (Pilot Program): Branched intake form with robust UI.
7. `/collection` (The Collection): Hosts the book at `#the-book` — cover, retail links, and the origin framing — with apparel and archival replicas below it as extensions. Hands off to the Shopify storefront.

**Legal pages** (linked from the footer, built on the shared `LegalPage` component):
8. `/privacy` (Privacy Policy)
9. `/terms` (Terms of Engagement)
10. `/rights-governance` (Rights Governance — the Rights Before Reach standard)

> The legal pages are **standard boilerplate that has not been reviewed by counsel.** `LEGAL_JURISDICTION` in `components/LegalPage.tsx` still renders literally as `[Governing State]`. Shared values (entity, contact, effective date, jurisdiction) are exported constants there — edit them in one place, not per page.

## Components
`Button`, `Card`, `FAQAccordion`, `Footer`, `LegalPage`, `MetricCard`, `Navbar`, `ProcessStepper`, `SectionHeading`.

- `Card` takes only `variant | className | children`. It has no `href` and spreads no props — to make a card clickable, wrap it in a `<Link>`/`<a>`, move `group` onto the wrapper, and add `h-full` to the Card so grid rows stay flush.
- `SectionHeading` has no `id` prop — anchors go on the `<section>`.
- Client components (`'use client'`): `Navbar`, `Footer`, `FAQAccordion`, `ProcessStepper`, and `app/contact/page.tsx`. Everything else is a server component.

## Conventions

- **Trademark symbol:** ™ belongs on the primary Playmakxrs wordmark only — the navbar logo, footer logo, and copyright line. Keep it out of running text. Sub-brands (Rights Before Reach, Narrative Capital, INI, Sponsor-Safe Meaning, No Grier No Game) carry no mark in body copy.
- **External links:** pass an absolute URL to `Button` and it renders an `<a>` with `target="_blank" rel="noopener noreferrer"` automatically; internal hrefs still route through `next/link`. For a hand-rolled external anchor, set both attributes yourself.
- **External-link accessibility:** append the destination with `<span className="sr-only">` rather than setting `aria-label` on the wrapper. `aria-label` *replaces* the accessible name and drops the visible text, which breaks voice control (WCAG 2.5.3). Mark the adjacent icon `aria-hidden="true"`.
- **Anchors:** put `id` and `scroll-mt-28` on the `<section>`. The navbar is fixed at 80px, so without the offset the target scrolls underneath it.
- **Images:** `next.config.js` sets `images: { unoptimized: true }`, so `next/image` buys nothing — use a plain `<img>` (the house pattern) and hand-optimize the file. Always set `width`/`height` to the real intrinsics to avoid layout shift, plus `loading="lazy" decoding="async"` below the fold.
- **Forms must never fake success.** Both forms on this site originally called `preventDefault` and showed a confirmation while transmitting nothing. Any form must post somewhere real and must surface an error — never a success state — when the request fails.
- **Focus rings:** `focus:outline-none` is only acceptable paired with a `focus-visible:ring-*` replacement. Never strip the outline without one (WCAG 2.4.7).
- **Markdown does not render in JSX.** Asterisks around a title render literally as asterisks — use `<em>`. Likewise HTML entities decode in JSX text and attributes but **not** inside JS string literals, so `'family&rsquo;s'` inside an array renders the raw entity; use the literal character there.

## Local Assets & References
Before writing code or generating copy, refer to the `./assets` directory in the project root:
- **UI Mockups:** High-fidelity images of the intended design (`screenshot_*.png`).
- **Old Site Structure:** `existing_site_model.md` (descriptive only — contains no URLs).
- **Raw Text Copy:** `website_text_content.md` (Use this raw text and condense/rephrase it to fit the new sleek layouts).

> **Careful:** `website_text_content.md` is a scrape of a Railway *preview* host, not of production. The real production site is **https://playmakxrs.com** (Astro), whose routes are `/`, `/about-us`, `/merchandise`, `/partnership`, `/the-book`, `/updates`, `/contact-us`. When you need a live URL or asset, fetch production and verify — do not invent one, and do not assume the scrape is current.

### Verified production links
Confirmed against live playmakxrs.com HTML and cross-checked against the scrape. Do not alter these without re-verifying:

| Destination | URL |
| --- | --- |
| Amazon (hardcover) | `https://www.amazon.com/No-Grier-Game-Showdown-American/dp/196937246X/ref=tmm_hrd_swatch_0` |
| Barnes & Noble | `https://www.barnesandnoble.com/w/no-grier-no-game-rob-grier/1148515839` |
| Fox 5 Atlanta interview (YouTube, 4:28) | `https://www.youtube.com/watch?v=rqKf4Es0uOU` |
| Pitt Athletics Hall of Fame | `https://pittsburghpanthers.com/honors/pitt-athletics-hall-of-fame/bobby-grier/44` |

The book is **No Grier, No Game** — *How Bobby Grier and the Sugar Bowl Showdown Changed American Sports History*, by **Rob and Camille Grier** (the B&N slug says only `rob-grier`; the cover credits both). Cover art lives at `public/assets/book-cover.jpg`.

**Not yet used on the new site:** press links (History.com, ESPN, Georgia Tech Alumni, ABC/WGNO, KDKA/CBS), the Indigo retailer link, and the Facebook/TikTok/Instagram socials — all present in production, all recorded in `website_text_content.md`.

### Where the book lives
The book sits on `/collection#the-book`, not on `/about` and **not on a page of its own** — a dedicated `/the-book` route was considered and explicitly ruled out, since the rebuild's mandate is fewer pages. `/about` references it through the "One Story, Many Assets" grid, which links cross-page. Retail links (Amazon, B&N) appear in exactly one place; keep it that way.

## Third-party integrations

Both are carried over from playmakxrs.com. Neither has a staging equivalent, so both point at the live services.

- **Netlify Forms** (`/contact` pilot application): matches how production handles its contact form. Netlify detects forms by scanning **static HTML at deploy time** and cannot see a JSX-only form, so the schema is declared in `public/__forms.html` and the React form POSTs there via `fetch`. **The field names in both files must stay in sync**, as must the form name (`pilot-application`, a constant in `app/contact/page.tsx`) — rename in both places to merge submissions into an existing Netlify form.
  > This only works on Netlify. On Vercel the POST fails and the form shows an error rather than a false success — that is intended behavior, not a bug to "fix" before handoff.
- **Mailchimp** (footer newsletter): the form POSTs directly to the list endpoint with `target="_blank"`, the way production does — there is no API route and no client-side handler. The action URL and the list-specific honeypot field name are constants at the top of `components/Footer.tsx` and **must stay in sync with each other**; the honeypot name encodes the same user and list IDs as the action.
- **Shopify** (`/collection`): the storefront lives at `https://playmakxrs.myshopify.com` and the page hands off to it. The store's own navigation points back to playmakxrs.com, so the round trip resolves once this site is promoted.

> The Shopify store currently **302s to `/password`** — it is still gated and not publicly launched. The links are correct, but a visitor today hits a password wall. Re-check before launch.


## Animation Guidelines (GSAP)
Target behavior once GSAP is wired up — none of this is implemented yet:
- **Heroes:** Fade in background image (`scale: 1.05` to `1`), stagger the H1, subhead, and CTA button.
- **Scroll:** Sections should fade in and translate Y as they enter the viewport (`y: 30, opacity: 0`).
- **Grids:** Use `stagger: 0.1` for cards/logos popping in sequentially.

Today's motion is CSS only: `html { scroll-behavior: smooth }` plus Tailwind hover transitions.

## Known gaps
- The home page carries **duplicate inert proof tiles** (`app/page.tsx`) mirroring the About cards, and still has unprocessed markdown asterisks around the book title.
- **GSAP and embla are installed but unused.** Left in place deliberately until the content work finishes, at which point we will know whether they are needed.

## Backlog
Agreed order of work — content reinstatement first, then polish:

1. ~~Book + proof content on `/about`~~ (done)
2. ~~Mailchimp newsletter wiring~~ (done)
3. ~~`/collection` page pointing at Shopify~~ (done)
4. ~~Contact form wired to Netlify Forms~~ (done)
5. ~~Code health: `font-heading`, `rounded-xs`, anchor offsets, focus rings, build deps~~ (done)
6. Press coverage links (History, ESPN, Georgia Tech, ABC, KDKA) — no home on the site yet
7. Social links (Facebook, TikTok, Instagram) — production has them, this footer does not
8. The Indigo retailer link, alongside Amazon and B&N
9. Families page merch grid dead-ends — the natural place to link `/collection`
10. Home-page duplicate proof tiles — still inert, still carry raw markdown asterisks

## Deployment

**Today (testing only):**
- **Repo:** `riverae/playmakxrs-concept` on GitHub (private).
- **Host:** Vercel project `playmakxrs-concept` under `riveraes-projects` — this is a **personal sandbox used to test performance on real servers**, not the client's account and not a staging environment anyone should treat as authoritative.
- **URL:** https://playmakxrs-concept.vercel.app — Git-connected, so pushes to `main` deploy automatically. Publicly reachable despite the private repo; enable Deployment Protection if that matters.

**Destination:** the client's Vercel account (the one serving playmakxrs.com), first as a dev branch, then promoted to production in place of the existing repo. Rename the repo before handoff.

Verify a build with `npm run build` (expect 10 static routes plus `/_not-found`) before pushing.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
