/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { flowRight } = require('./utils/flow.js');

const config = {
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

module.exports = flowRight(withOffline, withBundleAnalyzer)(config);
