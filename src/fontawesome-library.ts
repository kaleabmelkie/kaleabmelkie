import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faUserAstronaut, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faTelegram,
  faTwitter,
  faNpm,
  faGitlab,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
// import { } from '@fortawesome/free-regular-svg-icons'

export function fontawesomeLibrary() {
  library.reset()

  // solid
  library.add(faUserAstronaut, faEnvelope)

  // brands
  library.add(faLinkedin, faTelegram, faTwitter, faNpm, faGitlab, faGithub)

  // regular (free)
  library.add()
}

dom.watch()
