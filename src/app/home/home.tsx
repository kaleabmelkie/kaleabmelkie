import React, { useMemo } from 'react'
import ProgressiveImage from 'react-progressive-image'
import qs from 'qs'

import ProfilePhoto from './components/profile-photo/profile-photo'
import Titles from './components/titles/titles'
import LetsConnect from './components/lets-connect/lets-connect'

function Home() {
  const srcQuerystring = useMemo(
    () => qs.stringify({ email: 'kaleabmelkie@gmail.com', s: 360, d: 'mp' }),
    []
  )
  const placeholderQuerystring = useMemo(
    () => qs.stringify({ email: 'kaleabmelkie@gmail.com', s: 2, d: 'mp' }),
    []
  )

  return (
    <>
      <ProgressiveImage
        src={`/api/gravatar?${srcQuerystring}`}
        placeholder={`/api/gravatar?${placeholderQuerystring}`}
      >
        {src => <ProfilePhoto src={src} />}
      </ProgressiveImage>
      <Titles />
      <LetsConnect />
    </>
  )
}

export default Home
