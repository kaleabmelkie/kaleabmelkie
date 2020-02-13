import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { SeoQuery } from '../../../../graphql-types'

type SEOProps = {
  title: string
  description?: string
  author?: string
  twitter?: string
  copyright?: string
  lang?: string
  meta?: any[]
}

function SEO({
  title,
  description = ``,
  author = ``,
  twitter = ``,
  copyright = ``,
  lang = `en`,
  meta = []
}: SEOProps) {
  const data = useStaticQuery<SeoQuery>(query)

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${data.site?.siteMetadata?.title}`}
      meta={[
        {
          name: `description`,
          content: description || data.site?.siteMetadata?.description || ``
        },
        {
          name: `author`,
          content: author || data.site?.siteMetadata?.author || ``
        },
        {
          name: `copyright`,
          content: copyright || data.site?.siteMetadata?.copyright || ``
        },
        {
          property: `og:title`,
          content: title || ``
        },
        {
          property: `og:description`,
          content: description || data.site?.siteMetadata?.description || ``
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: twitter || data.site?.siteMetadata?.twitter || ``
        },
        {
          name: `twitter:title`,
          content: title || ``
        },
        {
          name: `twitter:description`,
          content: description || data.site?.siteMetadata?.description || ``
        }
      ].concat(meta)}
    />
  )
}

export default SEO

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        title
        description
        author
        twitter
        copyright
      }
    }
  }
`
