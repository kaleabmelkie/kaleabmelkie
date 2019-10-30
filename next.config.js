const dotenvLoad = require('dotenv-load')
const webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const withPlugins = require('next-compose-plugins')

const env = require('next-env')
const css = require('@zeit/next-css')
const sass = require('@zeit/next-sass')
const purgeCss = require('next-purgecss')
const images = require('next-images')
const fonts = require('next-fonts')
const optimizedImages = require('next-optimized-images')
const offline = require('next-offline')
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

dotenvLoad()

const nextConfig = {
  target: 'serverless',

  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))

      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
      )

      config.plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|css|html|json|svg|webp|png|jpg|jpeg|gif|tiff)$/,
          deleteOriginalAssets: false
        })
      )
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path].br[query]',
          algorithm: 'brotliCompress',
          test: /\.(js|css|html|json|svg|webp|png|jpg|jpeg|gif|tiff)$/,
          deleteOriginalAssets: false
        })
      )
    }

    return config
  }
}

module.exports = config = withPlugins(
  [
    // next-env
    env({
      staticPrefix: 'REACT_APP_',
      publicPrefix: 'REACT_APP_'
    }),

    // @zeit/next-css
    css,

    // @zeit/next-sass
    sass,

    // next-purgecss
    [purgeCss, { purgeCssPaths: ['src/**/*'] }],

    // next-images
    images,

    // next-optimized-images
    [
      optimizedImages,
      {
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
        optimizeImagesInDev: true
      }
    ],

    // next-fonts
    fonts,

    // next-offline
    [
      offline,
      {
        workboxOpts: {
          swDest: 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'https-calls',
                networkTimeoutSeconds: 15,
                expiration: {
                  maxEntries: 150,
                  maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      }
    ],

    // @next/bundle-analyzer
    bundleAnalyzer
  ],
  nextConfig
)
