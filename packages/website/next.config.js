/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { flowRight } = require('./utils/flow.js');

const config = {};

const passThrough = (c) => c;

module.exports = flowRight(
  process.env.ANALYZE === 'true' ? withBundleAnalyzer : passThrough
)(config);
