import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["three"],

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 390, 430, 640, 768, 828, 1024, 1200, 1366, 1536, 1920],
  },

  headers: async () => [
    {
      source: "/images/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=86400, immutable",
        },
      ],
    },
    {
      source: "/:path*.(js|css|woff2|webp|avif)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
}

export default nextConfig
