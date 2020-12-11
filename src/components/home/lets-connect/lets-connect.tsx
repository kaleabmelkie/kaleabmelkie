import {
  RiAtLine,
  RiGithubLine,
  RiLinkedinLine,
  RiMediumLine,
  RiTelegramLine,
  RiTwitterLine,
  RiUnsplashLine,
} from 'react-icons/ri'

import { LetsConnectStyles } from './lets-connect.styles'

export type LetsConnectProps = unknown

function LetsConnect() {
  return (
    <LetsConnectStyles>
      <a
        href="mailto:kaleab@kelaltech.com"
        title="Email (kaleab@kelaltech.com)"
      >
        <RiAtLine />
      </a>
      <a
        href="https://linkedin.com/in/kaleabmelkie"
        title="LinkedIn (/in/kaleabmelkie)"
      >
        <RiLinkedinLine />
      </a>
      <a href="https://t.me/kaleab14" title="Telegram (@kaleab14)">
        <RiTelegramLine />
      </a>
      <a href="https://twitter.com/kaleab14" title="Twitter (@kaleab14)">
        <RiTwitterLine />
      </a>

      <span className="lets-connect-separator">|</span>

      <a href="https://github.com/kaleabmelkie" title="GitHub (@kaleabmelkie)">
        <RiGithubLine />
      </a>
      <a href="https://medium.com/@kaleabmelkie" title="Medium (@kaleabmelkie)">
        <RiMediumLine />
      </a>
      <a href="https://unsplash.com/@kaleab" title="Unsplash (@kaleab)">
        <RiUnsplashLine />
      </a>

      <br />

      <div>
        <a
          href="https://www.upwork.com/fl/kaleabmelkie"
          title="Hire me on Upwork!"
          className="upwork-link"
        >
          Let&apos;s work together!
        </a>
      </div>
    </LetsConnectStyles>
  )
}

export default LetsConnect
