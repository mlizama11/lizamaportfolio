import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        hostname: 'img.shields.io',
        pathname: '/**',
      },
      {
        hostname: 'images.ctfassets.net',
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  pageExtensions: ['mdx', 'tsx', 'ts', 'jsx', 'js'],
  outputFileTracingIncludes: {
    '/*': ['./files/**/*'],
  },
};
const analyzeBundleEnabled = process.env.ANALYZE === 'true';

const configWithBundleAnalyzer = withBundleAnalyzer({
  enabled: analyzeBundleEnabled,
})(nextConfig);

export default configWithBundleAnalyzer;
