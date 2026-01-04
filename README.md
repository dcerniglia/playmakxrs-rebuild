# Playmakxrs Website Rebuild

Modern, clean rebuild of the Playmakxrs website using Astro and Tailwind CSS.

## Design System

**Colors:**
- Black: `#0A0A0A` (primary text/backgrounds)
- White: `#FFFFFF` 
- Gold: `#FF8C00` (accent color)

**Typography:**
- Display Font: Montserrat (headings, buttons, nav)
- Body Font: Inter (paragraphs, descriptions)

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

## Project Structure

```
src/
├── components/
│   ├── Hero.astro          # Hero section with CTA
│   ├── Services.astro      # Services section with cards
│   ├── ServiceCard.astro   # Reusable service card
│   ├── About.astro         # About section
│   ├── Contact.astro       # Contact form (Netlify Forms)
│   └── Footer.astro        # Footer with links
├── layouts/
│   └── Layout.astro        # Base HTML layout
└── pages/
    └── index.astro         # Homepage
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

## Customization

### Update Content

Edit the components directly:
- Hero text: `src/components/Hero.astro`
- Services: `src/components/Services.astro`
- About: `src/components/About.astro`

### Add Images

1. Place images in `public/` folder
2. Reference as `/image-name.jpg` in components
3. Update the hero background image prop if needed

### Change Colors

Edit `tailwind.config.mjs`:
```js
colors: {
  gold: '#YOUR_COLOR',
  black: '#YOUR_COLOR',
}
```

### Add Pages

Create new `.astro` files in `src/pages/`:
- `src/pages/about.astro` → `/about`
- `src/pages/services.astro` → `/services`

## Contact Form

The contact form is pre-configured for Netlify Forms (free 100 submissions/month).

**To enable:**
1. Deploy to Netlify
2. Forms will automatically work
3. Configure email notifications in Netlify dashboard

**For other platforms:**
- Use Formspree, FormSubmit, or similar service
- Update the form action in `src/components/Contact.astro`

## Performance

This site is optimized for performance:
- Zero JavaScript by default
- Static HTML output
- Tailwind CSS purged (only used classes shipped)
- Google Fonts preloaded
- Should score 95+ on Lighthouse

## Support

Built with:
- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Google Fonts](https://fonts.google.com)
