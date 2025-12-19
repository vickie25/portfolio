import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ["@tabler/icons-react", "lucide-react"],
    // Optimize server rendering
    optimizeCss: true,
  },
  
  // Set Turbopack root to silence lockfile warnings
  turbopack: {
    root: ".",
  } as any,
  
  // Image optimization settings
  images: {
    remotePatterns: [
      { hostname: "pbs.twimg.com" },
      { hostname: "yt3.googleusercontent.com" },
      { hostname: "cdn.prod.website-files.com" },
      { hostname: "assets.aceternity.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "voocgavdbpy2gucg.public.blob.vercel-storage.com" },
    ],
    // Enable AVIF format for better compression
    formats: ["image/avif", "image/webp"],
  },

  // Compression and optimization
  compress: true,
  productionBrowserSourceMaps: false,
  
  // Streaming and prefetch optimization
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Headers for caching and performance
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ]
  },
}

export default nextConfig
