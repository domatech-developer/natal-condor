/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "200mb"
    }
  },
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  sassOptions: {
    silenceDeprecations: ["legacy-js-api", "import", "global-builtin"],
    prependData: `
    @use "@/scss/base/typography.scss" as *;
    @use "@/scss/base/responsives.scss" as *;
    @use "@/scss/theme/colors.scss" as *;
    @use "@/scss/theme/spacing.scss" as *;
    @use "@/scss/theme/animations.scss" as *;
    @use "@/scss/mixin.scss" as *;`
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      },
      {
        protocol: "http",
        hostname: "**"
      }
    ]
  },

  async headers() {
    return [
      {
        source: "/(.*)", // Apply these headers to all routes
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin"
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "cross-origin"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
