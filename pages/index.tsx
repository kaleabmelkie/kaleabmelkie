import React from 'react'

import LetsConnect from '../src/components/lets-connect/lets-connect'
import ProfilePhoto from '../src/components/profile-photo/profile-photo'
import Titles from '../src/components/titles/titles'

export type IndexProps = unknown

const Index: React.FC<IndexProps> = () => {
  return (
    <>
      <ProfilePhoto />
      <Titles />
      <LetsConnect />
    </>
  )
}

export default Index
