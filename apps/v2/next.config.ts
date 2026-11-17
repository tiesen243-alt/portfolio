import type { NextConfig } from 'next'

export default {
  reactStrictMode: true,
  // cacheComponents: true,
  // partialPrefetching: true,
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
} satisfies NextConfig
