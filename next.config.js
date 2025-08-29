/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  transpilePackages: ['three'],
  webpack: (config, { isServer }) => {
    // Handle 3D libraries properly for client-side only
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }

    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    })

    return config
  },
  // Ensure app runs on correct port
  env: {
    NEXT_PUBLIC_PORT: process.env.PORT || '3000',
  },

  // Add security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  // Allow all hosts for Replit development
  async rewrites() {
    return []
  },
  
  async redirects() {
    return []
  },
  
  // Ensure proper configuration for Replit
  trailingSlash: false,
  poweredByHeader: false
}

module.exports = nextConfig