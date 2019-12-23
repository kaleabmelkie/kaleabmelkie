import React from 'react'
import qs from 'qs'

import { IImgSrcInput } from '../../lib/img-src'
import useImgSrc from '../../shared/hooks/use-img-src/use-img-src'
import ProfilePhoto from './components/profile-photo/profile-photo'
import Titles from './components/titles/titles'
import LetsConnect from './components/lets-connect/lets-connect'

const profilePhotoSrcInput: IImgSrcInput = {
  src: `/api/gravatar?${qs.stringify({
    email: 'kaleab@kelaltech.com',
    s: 420,
    d: 'mp'
  })}`,
  placeholder: `/api/gravatar?${qs.stringify({
    email: 'kaleab@kelaltech.com',
    s: 1,
    d: 'mp'
  })}`
}

function Home() {
  const profilePhotoSrc = useImgSrc(profilePhotoSrcInput)

  return (
    <>
      <ProfilePhoto src={profilePhotoSrc} />
      <Titles />
      <LetsConnect />
    </>
  )
}

export default Home
