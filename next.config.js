const dotenvLoad = require('dotenv-load')
const webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

const withPlugins = require('next-compose-plugins')

const env = require('next-env')
const css = require('@zeit/next-css')
const sass = require('@zeit/next-sass')
const fonts = require('next-fonts')
const images = require('next-images')
const offline = require('next-offline')
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

dotenvLoad()

const nextConfig = {
  target: 'serverless',

  webpack: (config, { dev }) => {
    if (!dev) {
      // css minification & optimization
      config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))

      // chuck count
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
      )

      // gzip compression
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|css|html|json|md|svg|webp|png|jpg|jpeg|gif|tiff|ico)$/,
          threshold: 0,
          minRatio: 0.99,
          deleteOriginalAssets: false
        })
      )

      // brotli compression
      config.plugins.push(
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.(js|css|html|json|md|svg|webp|png|jpg|jpeg|gif|tiff|ico)$/,
          threshold: 0,
          minRatio: 0.99,
          deleteOriginalAssets: false
        })
      )
    }

    return config
  }
}

module.exports = withPlugins(
  [
    // next-env
    env({
      staticPrefix: 'REACT_APP_'
    }),

    // @zeit/next-css
    css,

    // @zeit/next-sass
    sass,

    // next-images
    images,

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
              handler: 'NetworkFirst'
            },
            {
              urlPattern: /(\/service-worker.js$)|(\/api\/)/,
              handler: 'NetworkFirst'
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
