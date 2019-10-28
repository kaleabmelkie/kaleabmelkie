import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './lets-connect.scss'

import { faAt } from '@fortawesome/free-solid-svg-icons/faAt'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'

function LetsConnect() {
  return (
    <div className="lets-connect">
      <a
        href="mailto:kaleab@kelaltech.com"
        title="Email (kaleab@kelaltech.com)"
      >
        <FontAwesomeIcon icon={faAt} />
      </a>
      <a
        href="https://linkedin.com/in/kaleabmelkie"
        title="LinkedIn (/in/kaleabmelkie)"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://t.me/kaleab14" title="Telegram (@kaleab14)">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a href="https://twitter.com/kaleab14" title="Twitter (@kaleab14)">
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <span className="lets-connect-separator">|</span>

      <a href="https://gitlab.com/kaleabmelkie" title="GitLab (@kaleabmelkie)">
        <FontAwesomeIcon icon={faGitlab} />
      </a>
      <a href="https://github.com/kaleabmelkie" title="GitHub (@kaleabmelkie)">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.npmjs.com/~kaleabmelkie" title="NPM (~kaleabmelkie)">
        <FontAwesomeIcon icon={faNpm} />
      </a>
    </div>
  )
}

export default LetsConnect
