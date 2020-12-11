const { DEFAULT_REVALIDATE = '1' } = process.env

import type { GetStaticProps } from 'next'

import Layout, { LayoutProps } from '../src/components/_shared/layout/layout'
import { layoutApi } from '../src/components/_shared/layout/layout.api'
import Home from '../src/components/home/home'

export type IndexProps = {
  layoutProps: LayoutProps
}

function Index({ layoutProps }: IndexProps) {
  return (
    <Layout {...layoutProps}>
      <Home />
    </Layout>
  )
}

export default Index

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  return {
    props: {
      layoutProps: await layoutApi(),
    },
    revalidate: parseInt(DEFAULT_REVALIDATE),
  }
}
