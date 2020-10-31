import Image from 'next/image'

import styles from './profile-photo.module.scss'

type ProfilePhotoProps = unknown

const ProfilePhoto: React.FC<ProfilePhotoProps> = () => {
  return (
    <div className={styles['profile-photo']}>
      <div className={styles['profile-photo-frame']}>
        <Image
          alt="Kaleab S. Melkie's Avatar"
          src="https://www.gravatar.com/avatar/2b5daaa0ad27fd75b5d48672e6df074d?size=1440"
          width={1440}
          height={1440}
          sizes="(min-width: 960px) 33vw, (min-width: 1440px) 25vw, (max-width: 720px) 56vw, (max-width: 480px) 75vw, 38vw"
          priority
          loading="eager"
        />
      </div>
    </div>
  )
}

export default ProfilePhoto
