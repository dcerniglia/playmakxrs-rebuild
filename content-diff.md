# Content Diff: BG38 Document → Current Playmakxrs Site

## Overview

This document maps the new content direction (BG38) onto the current playmakxrs-rebuild site. The rebrand shifts from an energetic athlete/creator movement platform to a restrained, institutional narrative stewardship platform targeting universities, foundations, and Fortune 500 organizations.

---

## Structural Changes

### Navigation

| Current | New |
|---------|-----|
| Home, About Us, Join Us, The Book, Shop | Home, About Us, Merchandise, Partnership, The Book, Updates, Contact Us |
| CTA button: "Join the Team" → /join-us | Change to "Start a Conversation" → /partnership or /contact-us |

- **Join Us** page splits into **Partnership** + **Contact Us**
- **Shop** renames to **Merchandise** with completely different tone
- **Updates** is a brand new page (blog/milestones)

### Footer

| Current | New |
|---------|-----|
| Links: Home, About Us, Join Us, The Book, Shop | Links: Home, About Us, Merchandise, Partnership, The Book, Updates, Contact Us |
| Tagline: "Amplifying voices of athletes and creators..." | Remove |
| "Game Day Is Every Day™" | Remove |
| Newsletter is standalone component on homepage | Move email capture into footer: "Receive occasional updates on the stories and moments we steward." |

### Global Tone & Content

| Aspect | Current | New |
|--------|---------|-----|
| Language | "Refuse to stay silent", "movement", "amplifying voices" | No urgency language, no hype — restrained, institutional |
| Emojis | Used in cards throughout | No emojis anywhere |
| Target audience | Athletes, creators, community leaders | Universities, institutions, foundations, Fortune 500 |
| Brand voice | Energetic, activist | Quiet, credible, disciplined |
| Tagline | "Game Day Is Every Day™" | "Preserving Stories That Hold Us Together" |

---

## Page-by-Page Diff

### Home Page (`src/pages/index.astro`)

#### Hero Section

| Field | Current | New |
|-------|---------|-----|
| Title | "Game Day Is Every Day" | "PLAYMAKXRS™ \| PLAYMAKXRS GLOBAL™" |
| Subtitle | (none) | "Preserving Stories That Hold Us Together" |
| Description | "Amplifying voices of athletes and creators who make plays that matter" | "Playmakxrs™ and Playmakxrs Global™ are a narrative infrastructure platform dedicated to preserving and stewarding America's most consequential stories—stories rooted in courage, integrity, and historical truth." (full paragraph) |
| CTA | "Join the Team" → /join-us | "Discover the Story" → /the-book |
| Hashtags | #Playmakxrs™, #GameDayIsEveryDay™, #NoGrierNoGame™ | Remove entirely |

#### Mission Section → "What We Believe"

**Current:** "Where Courage, Action, and Legacy Meet" with checkmarks for Athletes, Creators, Community Leaders, Impact Storytelling.

**New:** "What We Believe" — "Not all stories are meant to be optimized for attention. Some are meant to be protected, carried forward, and told with restraint." Bullet list:
- Reduce division rather than inflame it
- Create shared understanding rather than spectacle
- Unite people around values that outlast trends

#### Legacy Collage Section → Remove

**Current:** Vintage football collage image with "Every Generation. Every Play. Every Voice."

**New:** Remove entirely.

#### StorySection → "What We Do"

**Current:** Bobby Grier story component.

**New:** "What We Do" — "Playmakxrs™ exists to identify, interpret, and steward stories that already carry meaning." Content covers books, limited-run series, archival storytelling, national moments, institutional partnerships. Grounded in:
- Historic moments rooted in documented truth and lived experience
- Institutional alignment built on trust, credibility, and shared values
- Cultural infrastructure designed for endurance, not cycles

#### Callout Section → "Who We Work With"

**Current:** "No Play Too Small. No Dream Too Big." — movement language, "Be Part of the Movement" CTA.

**New:** "Who We Work With" — selective partnerships, integrity and historical accuracy, long-term cultural relevance, educational and community impact, values-based leadership. "Partnership with Playmakxrs™ is not transactional. It is participatory."

#### MediaLogos

**Keep as-is.** Serves as credibility strip on home page per new doc.

#### Newsletter → Move to Footer

**Current:** Standalone "Join the Movement" subscribe section.

**New:** Move into footer globally. Copy: "Receive occasional updates on the stories and moments we steward."

---

### About Us (`src/pages/about-us.astro`)

#### Hero

| Field | Current | New |
|-------|---------|-----|
| Title | "Who We Are" | "Who We Are" (same) |
| Description | "Honoring the legacy of Bobby Grier and amplifying the voices of athletes and creators who make plays that matter" | "Playmakxrs™ and Playmakxrs Global™ are a narrative stewardship platform dedicated to preserving and elevating authentic American legacy stories." |
| CTA | "Join the Movement" → /join-us | Remove CTA from hero |

#### Mission Section → Rewrite

**Current:** "Our Mission" — "amplifies voices of athletes and creators who make plays that matter", platform where courage meets action.

**New:** Rewrite to focus on intersection of history, sport, education, and culture. Working alongside universities, institutions, foundations. Role is "simple and deliberate: to ensure that important stories endure."

#### Core Values → Remove and Replace with 5 New Sections

**Current:** 5 value cards — Family, Play, Action, Excellence, Player Rights.

**New:** Remove all value cards. Replace with sequential sections:

1. **"Our Belief"** — Real stories matter because they shape identity, values, and collective memory. When handled with care they unify communities and strengthen institutions.

2. **"Our History"** — Foundation is The Bobby Grier Story™. 1956 Sugar Bowl, quiet courage, dignity, resolve. Amazon bestselling book *No Grier, No Game™*. "This is not mythology… It is authentic factual history."

3. **"How We Work"** — Governing principle: coherence before scale. Trust precedes growth, meaning precedes momentum, alignment precedes amplification. Restraint over noise, clarity over spectacle, durability over trend.

4. **"Our Role in Culture"** — Principled alternative to spectacle-driven storytelling. Teach without preaching, inspire without exaggeration, unite without erasing difference. Cultural continuity, not nostalgia.

5. **"Looking Forward"** — Times Square moments to campus conversations. Long view, no rushing culture. Continuity not acceleration.

#### Impact Section → Remove

**Current:** "Our Impact" — first African American to play in Sugar Bowl, NIL opportunities, player rights advocacy.

**New:** Bobby Grier content moves into "Our History" subsection above. NIL and player rights language removed entirely.

#### Philosophy CTA → Remove

**Current:** "We Are the Coach. Our Community Is the Hero." + "Become a Playmakxr" button.

**New:** Remove entirely.

---

### Merchandise (`src/pages/shop.astro` → rename to `src/pages/merchandise.astro`)

#### Route Change

`/shop` → `/merchandise`

#### Hero

| Field | Current | New |
|-------|---------|-----|
| Title | "Rep the Movement" | "The Collection" |
| Subtitle | (none) | "A Way to Participate" |
| Description | "Every purchase supports athletes, creators, and community leaders who make plays that matter" | "The Playmakxrs™ Collection exists for those who wish to carry the story forward in a tangible way. Each piece is designed with the same care and restraint that guides our storytelling." |
| CTA | "Shop Now" → Shopify | "View the Collection" → Shopify |

#### Intro Section

**Current:** "Wear Your Purpose" — "you're not just buying merchandise—you're joining a movement."

**New:** "Why It Exists" — "For some, engaging with the story through reading or conversation is enough. For others, wearing or sharing a piece becomes a way to remain connected over time." Physical extension of The Bobby Grier Story™.

#### Impact Cards → "What Guides the Collection"

**Current:** 3 cards with emojis — Storytelling Platform, NIL Opportunities, Community Impact.

**New:** 4 principles (no emojis):
- Purpose over volume
- Simplicity over statement
- Quality over novelty
- Meaning over messaging

"Each item is produced in limited runs and designed to endure."

#### Featured Section → "A Note on Proceeds"

**Current:** "Game Day Is Every Day" — Premium Quality, Exclusive Designs, Purpose-Driven.

**New:** "Proceeds support the continued preservation and stewardship of authentic American legacy stories. This is participation, not promotion."

#### CTA Section

**Current:** "Every Purchase Makes a Play" — "Shop Now" + "Learn Our Story"

**New:** "Explore the Collection" — "No urgency. No pressure. Only intention." Single "View the Collection" button.

---

### Partnership (new page → `src/pages/partnership.astro`)

Replaces `join-us.astro`. Completely new content.

#### Sections

1. **Hero:** "Partner with Playmakxrs™" / "A Thoughtful Approach to Cultural Partnership"

2. **Intro:** "Partnership is deliberate and principled." Works with universities, academic institutions, foundations, nonprofit fiscal sponsors, athletic programs, purpose-driven organizations.

3. **"What Guides Our Work":** Non-negotiable beliefs:
   - Real stories carry cultural weight
   - How a story is told matters as much as the story itself
   - Integrity and historical accuracy are essential
   - Trust is built slowly and protected carefully

4. **"How We Partner":** Partnership & Access Framework providing clear governance, defined access boundaries, protection of historical integrity, confidence without complexity. "Scarcity is intentional… Alignment matters."

5. **"Who We Work With":**
   - Universities and academic institutions
   - Athletic programs and alumni communities
   - Foundations and nonprofit organizations
   - Purpose-driven corporations

6. **"The Bobby Grier Story™":** Foundational narrative. True American legacy. "Partners align with a model, not a moment."

7. **"What Partnership Is — and Is Not":**
   - IS: Values-based, long-term oriented, built on trust
   - IS NOT: Advertising, logo placement, short-term promotion, narrative ownership

8. **CTA:** "No urgency. No pressure. Only alignment." → "Start a Conversation" button → /contact-us

---

### The Book (`src/pages/the-book.astro`)

#### New Quote Block (add at top)

> "The story of Bobby Grier is not just about football. It is about a man whose strength and dignity challenged a nation to live up to its ideals. His legacy reminds us that one act of courage, carried out with perseverance and grace, can ripple across generations."
> — Steve Schwab, CEO, Elizabeth Dole Foundation

#### Hero Changes

| Field | Current | New |
|-------|---------|-----|
| Subtitle | "How Bobby Grier and the Sugar Bowl Showdown Changed American Sports History" | Same (keep) |
| Author line | "By Rob Grier Jr. and Camille Grier" | Remove from hero |
| Amazon URL | Paperback (`/1969372451`) | Hardcover (`/196937246X/ref=tmm_hrd_swatch_0`) |
| CTA | "Order the Book" | Keep similar |

#### Book Description → Rewrite

**Current:** Family memoir + civil rights narrative, detailed research bullet points about political pressures, desegregation role, personal cost.

**New:** "quiet courage helped change college football and American sports during the 1956 Sugar Bowl." Emphasis on dignity, restraint, resolve. "This is not a story of spectacle. It is a story of character." Written with care and historical integrity.

#### Key Themes → "Why This Story Matters"

**Current:** Breaking Barriers, Unity Through Courage, Historical Impact (with emojis 🏆🤝📚).

**New:** No emojis. Values that remain relevant:
- Courage under pressure
- Leadership without bravado
- Progress achieved through dignity
- The power of sport to reflect our highest ideals

#### New Sections to Add

1. **"Part of a Larger Legacy"** — Book is foundation of The Bobby Grier Story™ stewarded by Playmakxrs™. Anchors educational, institutional, and cultural initiatives.

2. **"Where to Find the Book"** — Hardcover through Amazon AND Barnes & Noble (add B&N link: `https://www.barnesandnoble.com/w/no-grier-no-game-rob-grier/1148515839`). Also through university programs, institutional events.

3. **"For Readers, Educators, and Institutions"** — Embraced by readers seeking meaningful nonfiction, educators, alumni and athletic communities, institutions preserving legacy.

4. **"Why This Matters Now"** — Audiences turning from manufactured narratives. Institutions seeking meaning. "Storytelling for endurance."

#### Tagline Section → Remove

**Current:** "Without Bobby Grier, there is no game. Without courage, there is no change."

**New:** Remove.

#### Order CTA → Rewrite

**Current:** "Get Your Copy Today" with Amazon + "Learn More About Bobby Grier"

**New:** "An Invitation" — "Become a Playmakxr™" with two buttons: "Start a Conversation" (→ Partnership) and "Follow the Legacy" (→ Contact Us)

---

### Updates (new page → `src/pages/updates.astro`)

Brand new page. Does not exist in current site.

#### Content

- **Title:** "Moments, Milestones, and Ongoing Work"
- **Intro:** Living record of work stewarded by Playmakxrs™. Markers of continuity, not designed for attention.
- **Content types:** National moments, university collaborations, book milestones, community conversations, behind-the-scenes progress
- **Cadence:** "Published deliberately, not continuously."
- Needs blog/post infrastructure

---

### Contact Us (new page → `src/pages/contact-us.astro`)

New standalone page. Currently the contact form lives embedded in `join-us.astro`.

#### Content

- Simple contact form (Name, Email, Organization, Message)
- Framing: "Start a Conversation" / "Follow the Legacy"
- Restrained, no pressure language matching new brand voice
- Pull existing Contact.astro component and restyle

---

## Components Affected

| Component | Change |
|-----------|--------|
| `Navigation.astro` | Update nav items, rename CTA |
| `Hero.astro` | May need longer description support, remove hashtag social proof |
| `Footer.astro` | Update links, add email capture, remove tagline |
| `NewsletterSignup.astro` | Merge into footer or restyle with new copy |
| `StorySection.astro` | Replace with "What We Do" content or remove |
| `ValueCard.astro` | No longer used (core values removed) |
| `BenefitCard.astro` | No longer used (join-us benefits removed) |
| `MediaLogos.astro` | Keep as-is |
| `Contact.astro` | Move to standalone page, may restyle |
| `Button.astro` | Keep |

## New Files Needed

| File | Purpose |
|------|---------|
| `src/pages/partnership.astro` | New partnership page replacing join-us |
| `src/pages/merchandise.astro` | Replaces shop.astro at new route |
| `src/pages/updates.astro` | New blog/milestones page |
| `src/pages/contact-us.astro` | Standalone contact page |

## Files to Remove/Deprecate

| File | Reason |
|------|--------|
| `src/pages/join-us.astro` | Replaced by partnership.astro + contact-us.astro |
| `src/pages/shop.astro` | Replaced by merchandise.astro |
| `src/components/ValueCard.astro` | Core values section removed |
| `src/components/BenefitCard.astro` | Benefits section removed |
