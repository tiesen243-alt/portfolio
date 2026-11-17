import type { NextConfig } from 'next'

import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

const config = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '1.gravatar.com' }],
  },

  // oxlint-disable-next-line require-await
  rewrites: async () => [
    {
      source: '/assets/:path*',
      destination: 'https://tiesen.id.vn/assets/:path*',
    },
    {
      source: '/:path*.md',
      destination: '/llms.mdx/:path*.md',
    },
    {
      source: '/:path*.txt',
      destination: '/llms.mdx/:path*.txt',
    },
  ],
} satisfies NextConfig

export default withMDX(config)
