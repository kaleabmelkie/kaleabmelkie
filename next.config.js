const withPlugins = require('next-compose-plugins')

const withManifest = require('next-manifest')
const withOffline = require('next-offline')

module.exports = module.exports = withPlugins([
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
          },
          {
            src: '/icons/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            density: '1.0',
          },
          {
            src: '/icons/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            density: '1.5',
          },
          {
            src: '/icons/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            density: '2.0',
          },
          {
            src: '/icons/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            density: '3.0',
          },
          {
            src: '/icons/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            density: '4.0',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
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
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
          },
          {
            urlPattern: /(\/service-worker.js$)|(\/api\/)/,
            handler: 'NetworkFirst',
          },
        ],
      },
    },
  ],
])
