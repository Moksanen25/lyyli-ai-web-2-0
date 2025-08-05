/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: false,
  // Vercel-optimized settings
  experimental: {
    // Enable Vercel optimizations
    serverComponentsExternalPackages: [],
  },
  webpack: (config, { isServer }) => {
    return config;
  },
  async redirects() {
    return [
      // Redirect old routes if needed
    ];
  },
  async rewrites() {
    return [
      // Handle API routes
    ];
  },
};

module.exports = nextConfig; 