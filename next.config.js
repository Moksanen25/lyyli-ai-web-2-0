/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: false,
  // Disable static generation entirely
  output: 'standalone',
  // Vercel-optimized settings
  experimental: {
    // Enable Vercel optimizations
    serverComponentsExternalPackages: [],
  },
  webpack: (config, { isServer }) => {
    // Exclude Supabase Edge Functions from the build
    config.externals = config.externals || [];
    config.externals.push({
      'https://deno.land/std@0.168.0/http/server.ts': 'commonjs https://deno.land/std@0.168.0/http/server.ts',
    });
    
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