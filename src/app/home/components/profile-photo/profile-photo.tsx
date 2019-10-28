import React from 'react'

import './profile-photo.scss'

function ProfilePhoto(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return (
    <div className="profile-photo">
      <img alt="" {...props} />
    </div>
  )
}

export default ProfilePhoto
