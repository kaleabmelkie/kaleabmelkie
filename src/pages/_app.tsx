import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import '../assets/styles/_app.scss'
import Layout from '../shared/components/layout/layout'

// AMP support
export const config = { amp: 'hybrid' }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta name="theme-color" content="#2A2A2A" />
          <meta name="author" content="Kaleab S. Melkie" />
          <meta name="copyright" content="2019 © Kaleab S. Melkie" />
          <meta
            name="description"
            content="Official Website of Kaleab S. Melkie (https://bit.ly/kaleab)"
          />
          <meta
            name="keywords"
            content="kaleab,serekebrhan,melkie,official,website"
          />
          <meta name="robots" content="index,follow" />

          <meta property="og:url" content="https://kaleab.kelaltech.com/" />
          <meta property="og:title" content="Kaleab S. Melkie" />
          <meta
            property="og:description"
            content="Official Website of Kaleab S. Melkie (https://bit.ly/kaleab)"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Kaleab S. Melkie" />
          <meta property="og:image" content="/promo.jpg" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@kaleab14" />
          <meta name="twitter:creator" content="@kaleab14" />
          <meta name="twitter:image" content="/promo.png" />

          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          <title>Official Website of Kaleab S. Melkie</title>
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default MyApp
