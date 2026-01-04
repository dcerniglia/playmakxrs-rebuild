# Playmakxrs Global™ Website

Modern, performant rebuild of the Playmakxrs website using Astro and Tailwind CSS. Built to amplify voices of athletes and creators who make plays that matter.

## About Playmakxrs Global™

**Mission:** Amplifying voices of athletes and creators who make plays that matter

**Tagline:** Game Day Is Every Day™

Inspired by Bobby Grier's courage in breaking racial barriers at the 1956 Sugar Bowl, Playmakxrs Global™ provides a platform for impact storytelling, exclusive content, and opportunities for athletes and creators.

## Design System

**Color Scheme:**
- Primary Red: `#DC2626` (brand color, CTAs, accents)
- Primary Dark: `#B91C1C` (hover states)
- Black: `#0A0A0A` (primary text/backgrounds)
- White: `#FFFFFF` (backgrounds/text)

**Typography:**
- Display Font: Montserrat (headings, buttons, nav)
- Body Font: Inter (paragraphs, descriptions)

**Transitions:**
- Astro View Transitions enabled for smooth page navigation
- Hover effects and micro-interactions throughout

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Site Structure

### Pages

- **Home** (`/`) - Hero, mission, Bobby Grier story, newsletter signup
- **About Us** (`/about-us`) - Mission, core values, impact story, philosophy
- **Join Us** (`/join-us`) - Benefits, contact form, movement information
- **The Book** (`/the-book`) - "No Grier, No Game" book information and pre-order

### Project Structure

```
src/
├── components/
│   ├── Navigation.astro       # Header navigation with mobile menu
│   ├── Hero.astro            # Flexible hero section
│   ├── Button.astro          # Reusable CTA button
│   ├── ValueCard.astro       # Core values display cards
│   ├── BenefitCard.astro     # Benefits cards with icons
│   ├── StorySection.astro    # Bobby Grier 1956 story section
│   ├── NewsletterSignup.astro # Newsletter subscription form
│   ├── Contact.astro         # Join Us contact form
│   └── Footer.astro          # Footer with navigation and social links
├── layouts/
│   └── Layout.astro          # Base layout with View Transitions
└── pages/
    ├── index.astro           # Home page
    ├── about-us.astro        # About Us page
    ├── join-us.astro         # Join Us page
    └── the-book.astro        # The Book page
```

## Deployment

### Netlify (Recommended - Free)

1. Push to GitHub/GitLab
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Done! The contact form will automatically work with Netlify Forms

### Vercel (Alternative - Free)

1. Push to GitHub
2. Import project to Vercel
3. Vercel auto-detects Astro
4. For contact form, you'll need to set up Vercel Forms or use a service like Formspree

### Cloudflare Pages (Alternative - Free)

1. Push to GitHub
2. Connect to Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`

## Forms & Integrations

### Netlify Forms (Included)

Two forms are pre-configured for Netlify Forms:

1. **Contact Form** (`/join-us` page) - Form name: `join-us`
   - Fields: Name, Email, Organization (optional), Message
   - Use: Membership inquiries and general contact

2. **Newsletter Form** (Home page) - Form name: `newsletter`
   - Fields: Email
   - Use: Newsletter subscriptions

**Setup:**
1. Deploy to Netlify (auto-detected)
2. Configure email notifications in Netlify dashboard → Forms
3. Free tier: 100 submissions/month

### Social Media Links

Update social URLs in [src/components/Footer.astro](src/components/Footer.astro):
- Facebook: https://www.facebook.com/share/1CQrJStefx/
- TikTok: http://www.tiktok.com/@playmakxrs
- Instagram: https://www.instagram.com/playmakxrs

## Content Management

### Update Page Content

Edit the page files directly in `src/pages/`:
- Home: `index.astro`
- About: `about-us.astro`
- Join Us: `join-us.astro`
- The Book: `the-book.astro`

### Core Values

Update in `src/pages/about-us.astro` - `coreValues` array (lines 8-28)

### Benefits

Update in `src/pages/join-us.astro` - `benefits` array (lines 8-27)

### Add Images

1. Place images in `public/` folder
2. Reference as `/image-name.jpg` in components
3. Required images:
   - `/logo.jpg` - Playmakxrs logo
   - `/hero-home.jpg` - Home page hero/Bobby Grier photo
   - `/book-cover.jpg` - Book cover for The Book page

### Change Colors

Edit [tailwind.config.mjs](tailwind.config.mjs):
```js
colors: {
  primary: '#DC2626',        // Main brand color
  'primary-dark': '#B91C1C', // Hover states
  black: '#0A0A0A',
}
```

## Performance

This site is optimized for performance:
- **Astro View Transitions** for smooth page navigation
- Static HTML output (zero JavaScript by default)
- Tailwind CSS purged (only used classes shipped)
- Google Fonts preloaded for speed
- Optimized images and lazy loading
- Target: 95+ Lighthouse score

## Contact Information

- **Email:** contact@playmakxrs.com
- **Phone:** +1-614-804-4038
- **Website:** https://playmakxrs.com

## Tech Stack

Built with:
- [Astro](https://astro.build) v4.16.18
- [Tailwind CSS](https://tailwindcss.com) v3.4.17
- [Google Fonts](https://fonts.google.com) (Montserrat + Inter)
- [Netlify Forms](https://www.netlify.com/products/forms/) (free tier)

## License

© 2025 Playmakxrs Global™. All rights reserved.
