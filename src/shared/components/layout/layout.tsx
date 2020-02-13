import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import './layout.scss'
import { FooterQuery } from '../../../../graphql-types'
import App from '../../../app/app'

type LayoutProps = React.PropsWithChildren<{}>

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery<FooterQuery>(query)

  return (
    <>
      <App />

      <main>{children}</main>

      <footer className="layout-footer">
        {data.site?.siteMetadata?.copyright}
      </footer>
    </>
  )
}

export default Layout

const query = graphql`
  query Footer {
    site {
      siteMetadata {
        copyright
      }
    }
  }
`
