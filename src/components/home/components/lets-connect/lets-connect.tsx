import React from 'react'
import {
  FaAt,
  FaGithub,
  FaGitlab,
  FaLinkedinIn,
  FaNpm,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa'

import styles from './lets-connect.module.scss'

type LetsConnectProps = unknown

const LetsConnect: React.FC<LetsConnectProps> = ({}) => {
  return (
    <div className={styles['lets-connect']}>
      <a
        href="mailto:kaleab@kelaltech.com"
        title="Email (kaleab@kelaltech.com)"
      >
        <FaAt />
      </a>
      <a
        href="https://linkedin.com/in/kaleabmelkie"
        title="LinkedIn (/in/kaleabmelkie)"
      >
        <FaLinkedinIn />
      </a>
      <a href="https://t.me/kaleab14" title="Telegram (@kaleab14)">
        <FaTelegram />
      </a>
      <a href="https://twitter.com/kaleab14" title="Twitter (@kaleab14)">
        <FaTwitter />
      </a>

      <span className="lets-connect-separator">|</span>

      <a href="https://gitlab.com/kaleabmelkie" title="GitLab (@kaleabmelkie)">
        <FaGitlab />
      </a>
      <a href="https://github.com/kaleabmelkie" title="GitHub (@kaleabmelkie)">
        <FaGithub />
      </a>
      <a href="https://www.npmjs.com/~kaleabmelkie" title="NPM (~kaleabmelkie)">
        <FaNpm />
      </a>
    </div>
  )
}

export default LetsConnect
