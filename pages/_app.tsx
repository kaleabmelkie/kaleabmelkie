import { DefaultSeo } from 'next-seo'

import '../src/assets/styles/global.scss'
import Footer from '../src/components/footer/footer'
import seo from '../src/configs/seo'

export async function reportWebVitals({ id, name, label, value }) {
  // See:
  // - https://nextjs.org/docs/advanced-features/measuring-performance#sending-results-to-analytics
  // - https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-tag-manager

  ;(window as any).dataLayer.push({
    event: label,
    event_category: label === 'web-vital' ? 'Web Vitals' : `Custom: ${label}`,
    event_action: name,
    event_value: Math.round(name === 'CLS' ? value * 1000 : value),
    event_label: id,
  })
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...seo} />

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
