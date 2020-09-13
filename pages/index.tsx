import React from 'react'

import Home from '../src/components/home/home'

export type IndexProps = unknown

const Index: React.FC<IndexProps> = (props) => {
  return <Home {...props} />
}

export default Index
