import Image from 'next/image'

import { ProfilePhotoStyles } from './profile-photo.styles'

export type ProfilePhotoProps = unknown

function ProfilePhoto() {
  return (
    <ProfilePhotoStyles>
      <div className="profile-photo-frame">
        <Image
          alt="Kaleab S. Melkie's Avatar"
          src="https://www.gravatar.com/avatar/2b5daaa0ad27fd75b5d48672e6df074d?size=1440"
          layout="fill"
          sizes="(min-width: 960px) 33vw, (min-width: 1440px) 25vw, (max-width: 720px) 56vw, (max-width: 480px) 75vw, 38vw"
          priority
          loading="eager"
        />
      </div>
    </ProfilePhotoStyles>
  )
}

export default ProfilePhoto
