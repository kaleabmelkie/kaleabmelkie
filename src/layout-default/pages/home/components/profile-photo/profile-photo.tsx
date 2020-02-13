import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import './profile-photo.scss'
import { ProfilePhotoQuery } from '../../../../../../graphql-types'
import GatsbyImage from 'gatsby-image'

type ProfilePhotoProps = {}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({}) => {
  const data = useStaticQuery<ProfilePhotoQuery>(query)

  return (
    <div className="profile-photo">
      <div className="profile-photo-frame">
        <GatsbyImage
          fluid={data.gravatar?.localImage?.childImageSharp?.fluid as any}
        />
      </div>
    </div>
  )
}

export default ProfilePhoto

const query = graphql`
  query ProfilePhoto {
    gravatar(email: { eq: "kaleab@kelaltech.com" }) {
      localImage {
        childImageSharp {
          fluid(maxWidth: 420, maxHeight: 420) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
