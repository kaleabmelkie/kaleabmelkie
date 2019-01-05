import React, { Component } from 'react'
import './home.scss'
import kelalTechLogoSrc from '../../_assets/images/kelal-tech-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Home extends Component {
  render() {
    return (
      <div id="page-home" className="center">
        <h1>
          <div id="user-icon">
            <span data-aos="fade-up" data-aos-delay="250">
              <a href="" title="Refresh this dreamer!">
                <FontAwesomeIcon icon="user-astronaut" size="3x" />
              </a>
            </span>
          </div>
          <div>
            <span title="Yep! That's my name." data-aos="fade-right">
              Kaleab{' '}
              <span className="dim" data-aos="fade-right" data-aos-delay="250">
                S. Melkie
              </span>
            </span>
          </div>
          <div className="sub block" data-aos="fade-right" data-aos-delay="500">
            <span className="dim" title="And this is my title, at The Company.">
              Co-founder & CEO,{' '}
            </span>
            <span data-aos="fade-right" data-aos-delay="750">
              <a
                target="_blank"
                rel="noopener"
                href="http://kelaltech.com/"
                className="kelal-wordmark"
                title="The Company builds tech that allows smoother information flow."
              >
                tech
              </a>
            </span>
          </div>
        </h1>

        <hr id="below-header" className="size block" data-aos="fade-up" />
        <h2 className="center size dim">
          <span data-aos="fade-up">
            <span title="Greetings never hurt. Do they?">
              Nice to Meet You!
            </span>
            <br />
            <br />
            <span
              title="Remember! Happiness is the end goal."
              data-aos="fade-right"
            >
              😄
            </span>
          </span>
        </h2>

        <div className="paper size block" data-aos="fade-right">
          <h3>
            <span
              title="Nice to meet you! Yes, again. Like I just said, greetings never hurt."
              data-aos="fade-right"
            >
              YOU CAN FIND ME USING:
            </span>
          </h3>
          <p className="links">
            <span data-aos="fade-up" data-aos-delay="0">
              <a
                href="mailto:kaleabmelkie@gmail.com"
                title="Email this bad boy! (kaleabmelkie@gmail.com)"
              >
                <FontAwesomeIcon icon="envelope" size="3x" />
                <br />
                Email
              </a>
            </span>
            <span data-aos="fade-up" data-aos-delay="100">
              <a
                target="_blank"
                rel="noopener"
                href="https://linkedin.com/in/kaleabmelkie"
                title="Connect with Kaleab, the Professional!"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} size={'3x'} />
                <br />
                LinkedIn
              </a>
            </span>
            <span data-aos="fade-up" data-aos-delay="200">
              <a
                target="_blank"
                rel="noopener"
                href="https://t.me/kaleab14"
                title=";)"
              >
                <FontAwesomeIcon icon={['fab', 'telegram']} size={'3x'} />
                <br />
                Telegram
              </a>
            </span>
            <span data-aos="fade-up" data-aos-delay="300">
              <a
                target="_blank"
                rel="noopener"
                href="https://twitter.com/kaleab14"
                title="Been here since September 2010."
              >
                <FontAwesomeIcon icon={['fab', 'twitter']} size={'3x'} />
                <br />
                Twitter
              </a>
            </span>
          </p>

          <h3>
            <span title="Dm Dm Dmm Dmmm..." data-aos="fade-right">
              OR, SEE WHAT I DO ON:
            </span>
          </h3>
          <p className="links">
            <span data-aos="fade-up" data-aos-delay="0">
              <a
                target="_blank"
                rel="noopener"
                href="https://www.npmjs.com/~kaleabmelkie"
                title="I'm an author. Not a book author. Guess what I auth. Authenticate this author. Authorize and Poet-rize. 403 the book author. I'm an author. 200!, for I'm a code author."
              >
                <FontAwesomeIcon icon={['fab', 'npm']} size={'3x'} />
                <br />
                NPM
              </a>
            </span>
            <span data-aos="fade-up" data-aos-delay="100">
              <a
                id="kelal-logo"
                target="_blank"
                rel="noopener"
                href="http://kelaltech.com/"
                title="The Company."
              >
                <img alt="kelal tech. Logo" src={kelalTechLogoSrc} />
                <br />
                kelal tech.
              </a>
            </span>
            <span data-aos="fade-up" data-aos-delay="200">
              <a
                target="_blank"
                rel="noopener"
                href="https://gitlab.com/kaleabmelkie"
                title="Checkout this hard-coder!"
              >
                <FontAwesomeIcon icon={['fab', 'gitlab']} size={'3x'} />
                <br />
                GitLab
              </a>
            </span>
            <span data-aos="fade-up" data-aos-delay="300">
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/kaleabmelkie"
                title="<-- Go GitLab! Boo.. github.  Not much to see here. Really. Much of what I do is on GitLab."
              >
                <FontAwesomeIcon icon={['fab', 'github']} size={'3x'} />
                <br />
                GitHub
              </a>
            </span>
          </p>
        </div>

        <p style={{ paddingTop: '3em' }}>
          <span className="dim" title="All right reserved.">
            &copy; 2019, Kaleab S. Melkie.
          </span>
        </p>
      </div>
    )
  }
}
