/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Deployed as static files to GitHub Pages (see .github/workflows/deploy.yml).
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Static export cannot serve redirects(). Legacy URLs (the old Astro routes,
  // and the three lane pages folded into /who-we-serve in the 2026 redesign)
  // are meta-refresh pages under public/<path>/index.html instead.
};

export default nextConfig;
