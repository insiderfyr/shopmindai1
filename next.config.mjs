/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  eslint: {
    ignoreDuringBuilds: false, // Enable ESLint checking
  },
  typescript: {
    ignoreBuildErrors: false, // Enable TypeScript checking
  },
  
  // Performance optimizations
  images: {
    unoptimized: false, // Enable Next.js image optimization
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // Add domains if you use external images
    ],
  },
  
  // Compression and headers
  compress: true,
  poweredByHeader: false,
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'] // Keep console.error in production
    } : false,
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    scrollRestoration: true,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  
  // Server external packages (moved from experimental in Next.js 15+)
  serverExternalPackages: [],
  
  // Bundle analyzer
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new (require('@next/bundle-analyzer'))({
          enabled: true,
        })
      )
      return config
    },
  }),
  
  // Security and performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

export default nextConfig