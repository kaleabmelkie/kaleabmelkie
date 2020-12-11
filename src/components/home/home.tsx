import { HomeStyles } from './home.styles'
import LetsConnect from './lets-connect/lets-connect'
import ProfilePhoto from './profile-photo/profile-photo'
import Titles from './titles/titles'

export type HomeProps = unknown

function Home() {
  return (
    <HomeStyles>
      <ProfilePhoto />
      <Titles />
      <LetsConnect />
    </HomeStyles>
  )
}

export default Home
