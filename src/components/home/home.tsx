import React from 'react'

import LetsConnect from '../lets-connect/lets-connect'
import ProfilePhoto from '../profile-photo/profile-photo'
import Titles from '../titles/titles'
import styles from './home.module.scss'

type HomeProps = unknown

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.home}>
      <ProfilePhoto />
      <Titles />
      <LetsConnect />
    </div>
  )
}

export default Home
