const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')

const nextConfig = {
  target: 'serverless',

  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /\/service-worker.js$/,
        handler: 'NetworkFirst'
      }
    ]
  }
}

module.exports = withOffline(withSass(withCss(withBundleAnalyzer(nextConfig))))
