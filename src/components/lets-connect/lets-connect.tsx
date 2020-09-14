import React from 'react'
import { DiNpm } from 'react-icons/di'
import {
  FiAtSign,
  FiGithub,
  FiGitlab,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi'
import { RiTelegramLine } from 'react-icons/ri'

import styles from './lets-connect.module.scss'

type LetsConnectProps = unknown

const LetsConnect: React.FC<LetsConnectProps> = () => {
  return (
    <div className={styles['lets-connect']}>
      <a
        href="mailto:kaleab@kelaltech.com"
        title="Email (kaleab@kelaltech.com)"
      >
        <FiAtSign />
      </a>
      <a
        href="https://linkedin.com/in/kaleabmelkie"
        title="LinkedIn (/in/kaleabmelkie)"
      >
        <FiLinkedin />
      </a>
      <a href="https://t.me/kaleab14" title="Telegram (@kaleab14)">
        <RiTelegramLine />
      </a>
      <a href="https://twitter.com/kaleab14" title="Twitter (@kaleab14)">
        <FiTwitter />
      </a>

      <span className={styles['lets-connect-separator']}>|</span>

      <a href="https://github.com/kaleabmelkie" title="GitHub (@kaleabmelkie)">
        <FiGithub />
      </a>
      <a href="https://gitlab.com/kaleabmelkie" title="GitLab (@kaleabmelkie)">
        <FiGitlab />
      </a>
      <a href="https://www.npmjs.com/~kaleabmelkie" title="NPM (~kaleabmelkie)">
        <DiNpm />
      </a>

      <br />

      <div>
        <a
          href="https://www.upwork.com/freelancers/~010f6fef556c20d502"
          title="Hire me on Upwork!"
          className={styles['upwork-link']}
        >
          Let's work together!
        </a>
      </div>
    </div>
  )
}

export default LetsConnect
