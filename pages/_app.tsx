import { DefaultSeo } from 'next-seo'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ThemeProvider } from 'styled-components'

import seo from '../src/configs/seo'
import FontFaces from '../src/styles/font-faces'
import GlobalStyle from '../src/styles/global-style'
import { theme } from '../src/styles/theme'

import type { AppProps } from 'next/dist/next-server/lib/router/router'
import type { NextWebVitalsMetric } from 'next/dist/next-server/lib/utils'

function _App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />

      <ThemeProvider theme={theme}>
        <FontFaces />
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default _App

// Setup https://npm.im/nprogress with next/router
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// Record Web Vitals in GTM
// See:
// - https://nextjs.org/docs/advanced-features/measuring-performance#sending-results-to-analytics
// - https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-tag-manager
export async function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  ;(window as any).dataLayer.push({
    event: label,
    event_category: label === 'web-vital' ? 'Web Vitals' : `Next.js Metrics`,
    event_action: name,
    event_value: Math.round(name === 'CLS' ? value * 1000 : value),
    event_label: id,
  })
}
