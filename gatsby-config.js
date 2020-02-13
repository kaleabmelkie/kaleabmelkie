const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Kaleab S. Melkie`,
    description: `Official Website of Kaleab S. Melkie (https://bit.ly/kaleab)`,
    author: `Kaleab S. Melkie`,
    twitter: `@kaleab14`,
    copyright: `${new Date().getFullYear()} © Kaleab S. Melkie`,
    siteUrl: `https://kaleab.kelaltech.com`
  },

  plugins: [
    //
    // HIGHER ORDER LANGUAGES:
    //
    {
      resolve: `gatsby-plugin-sass`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { printRejected: true, develop: true }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-typescript-checker`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: { fileName: `graphql-types.ts` }
    },

    //
    // ASSETS:
    //
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `assets`, path: path.join(__dirname, `src`, `assets`) }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {}
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: { fonts: [{ family: `Roboto Mono` }] }
    },

    //
    // DATA:
    //
    {
      resolve: `gatsby-source-gravatar`,
      options: {
        emails: [{ email: `kaleab@kelaltech.com`, query: `d=mp&s=420` }]
      }
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: { nodeType: `gravatar`, imagePath: 'url' }
    },

    //
    // ANALYSIS:
    //
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: `UA-154981201-1` }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: { id: `	GTM-KD6K3BJ` }
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: { fs_org: `RMH49` }
    },

    //
    // META, PWA & SEO
    //
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: { path: `${__dirname}/src/app/routes` }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: { exclude: [] }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kaleab S. Melkie`,
        short_name: `Kaleab`,
        description: `Official Website of Kaleab S. Melkie (https://bit.ly/kaleab)`,
        lang: `en`,
        display: `standalone`,
        icon: `src/assets/images/shared/icon.png`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#2a2a2a`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: { precachePages: [`/*`] }
    },

    //
    // HOSTING:
    //
    {
      resolve: `gatsby-plugin-netlify`,
      options: {}
    }
  ]
}
