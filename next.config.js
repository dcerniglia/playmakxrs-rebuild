/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    // The three lane pages were folded into /who-we-serve in the 2026 redesign.
    // Their content now lives in the anchored sections there, except the
    // institutional process and FAQ, which moved to /what-we-do.
    return [
      { source: '/institutions', destination: '/who-we-serve#institutions', permanent: true },
      { source: '/families', destination: '/who-we-serve#families', permanent: true },
      { source: '/partners', destination: '/who-we-serve#partners', permanent: true },
    ];
  },
};

export default nextConfig;
