import { DefaultSeo } from 'next-seo'

import '../src/assets/styles/global.scss'
import Footer from '../src/components/footer/footer'
import seo from '../src/configs/seo'

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
