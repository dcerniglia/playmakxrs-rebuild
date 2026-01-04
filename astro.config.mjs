import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://dcerniglia.github.io',
  base: process.env.NODE_ENV === 'production' ? '/playmakxrs-rebuild' : '/',
  integrations: [tailwind()],
});
