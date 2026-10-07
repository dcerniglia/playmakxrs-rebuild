# Playmakxrs Website Redesign - Developer Guidelines

## Project Overview
This project is a complete rebuild of the Playmakxrs website. The core objective is to simplify the user journey into three distinct lanes (Institutions, Families, Sponsors) and adopt a premium, "sports-first" aesthetic.

**Core Mantra:** "The family is the source. The institution is the platform. Playmakxrs is the bridge."

### Where this repo sits in the lineage
Four versions of this site exist. Knowing which is which prevents treating a rejected iteration as the source of truth:

1. **playmakxrs.com** — the live production site (Astro). Wired up with Mailchimp and a Shopify-backed merch page. Still the customer-facing site today.
2. **Railway v1** — repositioned around a sharper focus on the service offering, deployed for review.
3. **Railway v2** — further reorganization, but it came out too wordy and was not adopted. *This is what `assets/website_text_content.md` captured.*
4. **This repo** — a streamlined rebuild from the mockups in `docs/`, then **restructured again in October 2026** around the JMI Sports reference and the Home / What We Do / Who We Serve / Our Proof / About / Contact navigation.

Current phase: the JMI-inspired restructure. Content reinstatement finished before it; see Backlog for what is still open.

> `assets/website_text_content.md` is a scrape of **Railway v2, a rejected iteration** — not of production and not of this design. Treat it as a *content archive*: the best record of copy and links that were dropped and may be coming back. It is **not** the design authority. The mockups in `docs/` are.

### Where it is going
This repo is intended to **replace the repo currently behind playmakxrs.com**. It will move to the client's Vercel account as a dev branch, then be promoted to production. The repo will be renamed before final handoff (`playmakxrs-concept` is a working name).

## Technology Stack
- **Framework:** Next.js 16 (App Router), React 19, TypeScript.
- **Styling:** Tailwind CSS 3.4 (utility-first, custom design system).
- **Icons:** `lucide-react`.
- **Motion:** CSS only — Tailwind transitions plus `html { scroll-behavior: smooth }`. There is no animation library; see Animation Guidelines below before adding one.

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

Redesigned October 2026 in the spirit of [JMI Sports](https://www.jmisports.com/): brief sections, clear audiences, strong visuals, recognizable proof, short path to contact.

**Primary navigation** — Home | What We Do | Who We Serve | Our Proof | About | Contact

| Route | Purpose |
| --- | --- |
| `/` | Hero, "As Featured In" strip, three audience cards, Grier teaser, contact CTA. Deliberately short. |
| `/what-we-do` | The five verbs (recover, verify, protect, package, activate), Rights Before Reach, the 90–120 day pilot, FAQ. |
| `/who-we-serve` | Three anchored sections — `#institutions`, `#families`, `#partners` — driven by `lib/audiences.ts`. |
| `/our-proof` | The Bobby Grier case study, the proof loop ("One Story, Many Assets"), and independent press. |
| `/about` | The mantra, the Narrative Capital thesis, the Triad, and operational boundaries. **Not** the Grier story — that is Our Proof. |
| `/contact` | Pilot application, posting to Netlify Forms. |

**Secondary** (footer only): `/collection`, `/collection#the-book`, and the three legal pages.

**Retired:** `/institutions`, `/families`, `/partners` were folded into `/who-we-serve` and permanently redirect to its anchors (see `next.config.js`). Their process stepper and FAQ moved to `/what-we-do`, where they describe the service rather than the audience.

> The legal pages are **standard boilerplate that has not been reviewed by counsel.** `LEGAL_JURISDICTION` in `components/LegalPage.tsx` still renders literally as `[Governing State]`. Shared values (entity, contact, effective date, jurisdiction) are exported constants there — edit them in one place, not per page.

## Components
`Button`, `Card`, `FAQAccordion`, `FeaturedIn`, `Footer`, `LegalPage`, `MetricCard`, `Navbar`, `ProcessStepper`, `SectionHeading`.

Shared data lives in `lib/`: `press.ts` (coverage + the logo strip) and `audiences.ts` (the three lanes, rendered on both `/` and `/who-we-serve`).

- `Card` takes only `variant | className | children`. It has no `href` and spreads no props — to make a card clickable, wrap it in a `<Link>`/`<a>`, move `group` onto the wrapper, and add `h-full` to the Card so grid rows stay flush.
- `SectionHeading` has no `id` prop — anchors go on the `<section>`.
- Client components (`'use client'`): `Navbar`, `Footer`, `FAQAccordion`, `ProcessStepper`, and `app/contact/page.tsx`. Everything else is a server component.

## Conventions

- **Trademark symbol:** ™ belongs on the primary Playmakxrs wordmark only — the navbar logo, footer logo, and copyright line. Keep it out of running text. Sub-brands (Rights Before Reach, Narrative Capital, INI, Sponsor-Safe Meaning, No Grier No Game) carry no mark in body copy.
- **External links:** pass an absolute URL to `Button` and it renders an `<a>` with `target="_blank" rel="noopener noreferrer"` automatically; internal hrefs still route through `next/link`. For a hand-rolled external anchor, set both attributes yourself.
- **External-link accessibility:** append the destination with `<span className="sr-only">` rather than setting `aria-label` on the wrapper. `aria-label` *replaces* the accessible name and drops the visible text, which breaks voice control (WCAG 2.5.3). Mark the adjacent icon `aria-hidden="true"`.
- **Anchors:** put `id` and `scroll-mt-28` on the `<section>`. The navbar is fixed at 80px, so without the offset the target scrolls underneath it.
- **Images:** `next.config.js` sets `images: { unoptimized: true }`, so `next/image` buys nothing — use a plain `<img>` (the house pattern) and hand-optimize the file. Always set `width`/`height` to the real intrinsics to avoid layout shift, plus `loading="lazy" decoding="async"` below the fold.
- **Sticky-overlap sections on the home page.** Sections 4-6 of `app/page.tsx` overlap deliberately (`lg:-mt-[calc(100vh-80px)]` over `lg:sticky`), so an element can be on-screen per `getBoundingClientRect` while a higher-`z` section still covers it. After adding anything interactive there, verify with `document.elementFromPoint` at several scroll positions that clicks actually reach it.
- **Form fields share `FIELD_CLASSES`/`SELECT_CLASSES`** at the top of `app/contact/page.tsx` — the literals were duplicated nine times and had already drifted. A `<select>` additionally needs `appearance-none`: Chrome's UA stylesheet pins `line-height: normal !important` on a native select, so it renders a pixel shorter than the inputs beside it and no author `leading-*` can fix it. Dropping the native appearance also drops the native chevron, hence the `ChevronDown` wrapper.
- **Forms must never fake success.** Both forms on this site originally called `preventDefault` and showed a confirmation while transmitting nothing. Any form must post somewhere real and must surface an error — never a success state — when the request fails.
- **Opacity modifiers must be on Tailwind's scale.** It steps by 5 (`/90`, `/95`, `/100`) and an off-scale value like `bg-true-black/98` compiles to **nothing at all** — no warning, no class, no background. That is exactly how the mobile nav drawer shipped transparent. For an in-between value use bracket syntax (`bg-true-black/[0.98]`), or round to the scale.
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
| Facebook | `https://www.facebook.com/Playmakxrsglobal` |
| Instagram | `https://www.instagram.com/playmakxrs` |
| TikTok | `https://www.tiktok.com/@playmakxrs` |

The three social URLs are the **canonical forms**, deliberately not the ones production uses: production links to a Facebook share shortlink (`/share/1CQrJStefx/?mibextid=…`) that merely redirects here, an Instagram URL carrying QR-scan tracking params, and TikTok over plain `http`. All three were verified to resolve to these.

The book is **No Grier, No Game** — *How Bobby Grier and the Sugar Bowl Showdown Changed American Sports History*, by **Rob and Camille Grier** (the B&N slug says only `rob-grier`; the cover credits both). Cover art lives at `public/assets/book-cover.jpg`.

Press coverage lives in **`lib/press.ts`** and renders on `/about`. `/partners` is the other plausible consumer — import the same list rather than copying it.

> **Verifying press URLs:** several of these outlets return `403` or `202` to non-browser requests — WGNO and ESPN both do. A failed `curl` is not evidence a link is dead; open it in a real browser. Conversely Indigo returned a clean `404` and really was gone, so check both ways.

> **The Indigo retailer link is dead.** `indigo.ca/fr-ca/no-grier-no-game-…/1e510e0e-….html`, recorded in the scrape, now returns a genuine 404 in both `fr-ca` and `en-ca` (indigo.ca itself responds 200, and an on-site search finds no listing), so the book appears to have been delisted. It is deliberately **not** linked here. Re-check with the client before adding a third retailer.

### Our proof is one case, not a client roster
JMI's credibility rests on twenty client logos and six named executive testimonials. Playmakxrs has **one institutional engagement** (Pitt and the Grier family) and **one testimonial** anywhere in the source material (Steve Schwab, Elizabeth Dole Foundation, on production's book page).

So the home strip is labelled **"As Featured In"** and carries outlets that *covered* the work — never "clients", "partners" or "trusted by". Presenting press marks as a client roster would misrepresent the business. If a real client list ever exists, that is a different component.

### Bobby Grier
Bobby Grier died in July 2024, aged 91 — the CBS/KDKA piece in `lib/press.ts` is his obituary. Site copy refers to him in the past tense throughout; keep it that way, and do not write anything implying he is available for interviews or appearances. Playmakxrs worked with him directly during his lifetime, and continues to work with his family.

### Where the book lives
The book sits on `/collection#the-book`, not on `/about` and **not on a page of its own** — a dedicated `/the-book` route was considered and explicitly ruled out, since the rebuild's mandate is fewer pages. `/about` references it through the "One Story, Many Assets" grid, which links cross-page. Retail links (Amazon, B&N) appear in exactly one place; keep it that way.

## Third-party integrations

Both are carried over from playmakxrs.com. Neither has a staging equivalent, so both point at the live services.

- **Netlify Forms** (`/contact` pilot application): matches how production handles its contact form. Netlify detects forms by scanning **static HTML at deploy time** and cannot see a JSX-only form, so the schema is declared in `public/__forms.html` and the React form POSTs there via `fetch`. **The field names in both files must stay in sync**, as must the form name (`pilot-application`, a constant in `app/contact/page.tsx`) — rename in both places to merge submissions into an existing Netlify form.
  > This only works on Netlify. On Vercel the POST fails and the form shows an error rather than a false success — that is intended behavior, not a bug to "fix" before handoff.
- **Mailchimp** (footer newsletter): the form POSTs directly to the list endpoint with `target="_blank"`, the way production does — there is no API route and no client-side handler. The action URL and the list-specific honeypot field name are constants at the top of `components/Footer.tsx` and **must stay in sync with each other**; the honeypot name encodes the same user and list IDs as the action.
- **Shopify** (`/collection`): the storefront lives at `https://playmakxrs.myshopify.com` and the page hands off to it. The store's own navigation points back to playmakxrs.com, so the round trip resolves once this site is promoted.

> **Pending the store opening:** three of the four cards in the Families "Artifacts That Stand the Test of Time" grid (`app/families/page.tsx`) still use text-in-a-box placeholders where product imagery belongs. Swap in real photography from Shopify once the store is live. The Published Hardcovers card already carries the real cover.

> The Shopify store currently **302s to `/password`** — it is still gated and not publicly launched. The links are correct, but a visitor today hits a password wall. Re-check before launch.


## Animation Guidelines
**GSAP and `embla-carousel-react` were removed** after the content work finished, having never been imported by a single component. The site ships CSS-only motion: Tailwind hover and focus transitions, plus `html { scroll-behavior: smooth }`.

The original brief called for scroll-triggered animation, and that intent is recorded here in case it is revisited. **Implementing any of it means re-adding a dependency** (`npm i gsap`) — it is not a matter of wiring up something already present:
- **Heroes:** Fade in background image (`scale: 1.05` to `1`), stagger the H1, subhead, and CTA button.
- **Scroll:** Sections fade in and translate Y as they enter the viewport (`y: 30, opacity: 0`).
- **Grids:** `stagger: 0.1` for cards/logos popping in sequentially.

Before reaching for a library, note that scroll-reveal and staggered grids are both achievable with CSS animations and an `IntersectionObserver`, at no dependency cost. Respect `prefers-reduced-motion` whichever route is taken.

> `GEMINI.MD` in the repo root is an **older parallel brief** that still specifies GSAP and an `<EmblaCarousel>` component. It is a historical document, not current guidance — this file is.

## Backlog

**Content reinstatement is complete.** The book, proof cards, press coverage, socials, `/collection`, both forms, and the code-health pass are all done and documented above.

Open items, none of which are blocked on code:

| | Waiting on |
| --- | --- |
| Indigo retailer link | A live URL — the recorded one 404s and the book looks delisted. Confirm with the client. |
| Product imagery on three Families cards | The Shopify store opening. Placeholders are marked in `app/families/page.tsx`. |
| Shopify storefront itself | Still `302`s to `/password`. Links are correct and will work on launch. |
| Legal review | Counsel sign-off, plus a real value for `LEGAL_JURISDICTION`. |
| Handoff | Repo rename, move to the client's Vercel account, promote to production. Netlify Forms only starts working once it is off Vercel. |

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
