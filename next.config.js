const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPreact = require('next-plugin-preact')
const withManifest = require('next-manifest')
const withOffline = require('next-offline')

const { createSecureHeaders } = require('next-secure-headers')
const CompressionPlugin = require('compression-webpack-plugin')
const zlib = require('zlib')

module.exports = withPlugins(
  [
    // https://npm.im/next-plugin-preact
    [withPreact, {}],

    // https://npm.im/@next/bundle-analyzer
    [withBundleAnalyzer, {}],

    // https://npm.im/next-manifest
    [
      withManifest,
      {
        manifest: {
          output: 'public',
          name: 'Kaleab S. Melkie',
          short_name: 'Kaleab',
          icons: [
            {
              src: '/icons/android-icon-36x36.png',
              sizes: '36x36',
              type: 'image/png',
              density: '0.75',
              purpose: 'maskable',
            },
            {
              src: '/icons/android-icon-48x48.png',
              sizes: '48x48',
              type: 'image/png',
              density: '1.0',
              purpose: 'maskable',
            },
            {
              src: '/icons/android-icon-72x72.png',
              sizes: '72x72',
              type: 'image/png',
              density: '1.5',
              purpose: 'maskable',
            },
            {
              src: '/icons/android-icon-96x96.png',
              sizes: '96x96',
              type: 'image/png',
              density: '2.0',
              purpose: 'maskable',
            },
            {
              src: '/icons/android-icon-144x144.png',
              sizes: '144x144',
              type: 'image/png',
              density: '3.0',
              purpose: 'maskable',
            },
            {
              src: '/icons/android-icon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              density: '4.0',
              purpose: 'maskable',
            },
            {
              src: '/icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
          background_color: '#FFFFFF',
          theme_color: '#0E0E0E',
        },
      },
    ],

    // https://npm.im/next-offline
    [
      withOffline,
      {
        workboxOpts: {
          swDest: '../public/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'CacheFirst',
            },
            {
              urlPattern: /(\/service-worker.js$)|(\/api\/)/,
              handler: 'NetworkFirst',
            },
          ],
        },
      },
    ],
  ],

  // default next.config:
  {
    // next/images
    images: {
      deviceSizes: [
        64,
        128,
        140,
        180,
        240,
        280,
        320,
        384,
        420,
        480,
        530,
        590,
        640,
        750,
        828,
        1080,
        1200,
        1440,
        1920,
        2048,
        3840,
      ],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      domains: ['www.gravatar.com'],
      path: '/_next/image',
      loader: 'default',
    },

    // custom headers
    async headers() {
      return [
        // cache Next.js optimized images
        {
          source: '/_next/image',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400', // 1 day
            },
          ],
        },

        // avoid caching server worker script
        {
          source: '/service-worker.js',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=0, must-revalidate',
            },
          ],
        },

        // https://npm.im/next-secure-headers
        {
          source: '/(.*)',
          headers: createSecureHeaders({
            contentSecurityPolicy: {
              directives: {
                defaultSrc: [
                  "'self'",
                  'https://www.googletagmanager.com',
                  'https://www.google-analytics.com',
                ],
                styleSrc: ["'self'", "'unsafe-inline'"],
                scriptSrc: [
                  "'self'",
                  'https://www.googletagmanager.com',
                  'https://www.google-analytics.com',

                  "'unsafe-inline'",
                ],
              },
            },
            forceHTTPSRedirect: [
              true,
              { maxAge: 63072000, includeSubDomains: true, preload: true },
            ],
            referrerPolicy: 'same-origin',
          }),
        },
      ]
    },

    // custom webpack config
    webpack: (config, options) => {
      // add gzip compression
      if (!options.dev) {
        config.plugins.push(
          new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 0,
            minRatio: 0.99,
          })
        )
      }

      // add brotli compression
      if (!options.dev) {
        config.plugins.push(
          new CompressionPlugin({
            filename: '[path][base].br',
            algorithm: 'brotliCompress',
            test: /\.(js|css|html|svg)$/,
            compressionOptions: {
              params: {
                [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
              },
            },
            threshold: 0,
            minRatio: 0.99,
          })
        )
      }

      // Important: return the modified config
      return config
    },
  }
)
