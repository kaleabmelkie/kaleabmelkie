import React from 'react'

import Layout from '../../../shared/components/layout/layout'
import ProfilePhoto from './components/profile-photo/profile-photo'
import Titles from './components/titles/titles'
import LetsConnect from './components/lets-connect/lets-connect'

type HomeProps = {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Layout>
      <ProfilePhoto />
      <Titles />
      <LetsConnect />
    </Layout>
  )
}

export default Home
