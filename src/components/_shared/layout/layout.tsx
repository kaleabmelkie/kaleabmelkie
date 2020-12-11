import type { PropsWithChildren } from 'react'

import Footer from '../footer/footer'

export type LayoutProps = PropsWithChildren<unknown>

function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
