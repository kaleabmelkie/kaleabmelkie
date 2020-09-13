import React from 'react'

import { IndexProps } from '../../../pages/index'
import LetsConnect from './components/lets-connect/lets-connect'
import ProfilePhoto from './components/profile-photo/profile-photo'
import Titles from './components/titles/titles'

type HomeProps = IndexProps

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <ProfilePhoto />
      <Titles />
      <LetsConnect />
    </>
  )
}

export default Home
