import Head from 'next/head'
import React from 'react'

import styles from './profile-photo.module.scss'

type ProfilePhotoProps = unknown

const ProfilePhoto: React.FC<ProfilePhotoProps> = () => {
  const avatarSrc =
    'https://www.gravatar.com/avatar/2b5daaa0ad27fd75b5d48672e6df074d?size=300'

  return (
    <div className={styles['profile-photo']}>
      <div className={styles['profile-photo-frame']}>
        <Head>
          <link rel="preload" as="image" href={avatarSrc} />
        </Head>

        <img alt="Kaleab S. Melkie's Avatar" src={avatarSrc} />
      </div>
    </div>
  )
}

export default ProfilePhoto
