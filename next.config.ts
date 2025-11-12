import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
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
