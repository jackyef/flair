/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { flowRight } = require('./utils/flow.js');
const isProd = !!process.env.AWS_REGION; // This variable only exist on vercel deployments

const config = {
  target: 'serverless',

  /* regular next.js config options here */
  workboxOpts: {
    swDest: 'static/service-worker.js',

    runtimeCaching: [
      {
        urlPattern: /.(png|jpg|jpeg|webp|svg)$/,
        handler: 'CacheFirst',
      },
      {
        urlPattern: /api/,
        handler: 'NetworkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
};

const passThrough = (c) => c;

module.exports = flowRight(
  withOffline,
  process.env.ANALYZE === 'true' ? withBundleAnalyzer : passThrough
)(config);
