import { NextSeoProps } from 'next-seo/lib'

export default {
  title: 'Official Website of Kaleab S. Melkie',
  description: 'Official Website of Kaleab S. Melkie (https://bit.ly/kaleab)',
  additionalMetaTags: [
    { name: 'author', content: 'Kaleab S. Melkie' },
    { name: 'copyright', content: '2019 © Kaleab S. Melkie' },
    {
      name: 'keywords',
      content: 'kaleab,serekebrhan,melkie,official,website'
    },
    { name: 'robots', content: 'index,follow' },
    { name: 'theme-color', content: '#2a2a2a' }
  ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kaleab.kelaltech.com/',
    site_name: 'Official Website of Kaleab S. Melkie',
    images: [{ url: 'https://kaleab.kelaltech.com/promo.png' }],
    profile: {
      firstName: 'Kaleab',
      lastName: 'Melkie',
      gender: 'male',
      username: 'kaleab'
    }
  },

  twitter: {
    handle: '@kaleab14',
    site: '@kaleab14',
    cardType: 'summary_large_image'
  }
} as NextSeoProps
