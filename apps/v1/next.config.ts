import type { NextConfig } from 'next'

import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

const config = {
  reactStrictMode: true,
  cacheComponents: true,
  partialPrefetching: true,
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [{ hostname: '1.gravatar.com' }],
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },

  // oxlint-disable-next-line require-await
  rewrites: async () => [
    {
      source: '/api/og',
      destination: 'https://tiesen.id.vn/api/og',
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
