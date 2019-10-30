import React from 'react'
import App, { Container } from 'next/app'
import { DefaultSeo } from 'next-seo/lib'

import '../assets/styles/_app.scss'
import SEO from '../assets/configs/seo'
import Layout from '../shared/components/layout/layout'

// AMP support
export const config = { amp: 'hybrid' }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <DefaultSeo {...SEO} />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
