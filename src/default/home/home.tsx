import React, { Component } from 'react'
import './home.scss'
import kelalTechLogoSrc from '../../_assets/images/kelal-tech-logo.svg'

export class Home extends Component {
  render() {
    return (
      <div id="page_home" className="center">
        <h1>
          <div id="user-icon">
            <a href="" title="Refresh this dreamer!">
              <i className="fa fa-3x fa-user-astronaut" data-aos="fade-up" />
            </a>
          </div>
          <div>
            <span title="Yep! That's my name." data-aos="fade-up">
              Kaleab <span className="dim">S. Melkie</span>
            </span>
          </div>
          <div className="sub" data-aos="fade-up">
            <span className="dim" title="And this is my title, at The Company.">
              Co-founder & CEO,{' '}
            </span>
            <a
              target="_blank"
              rel="noopener"
              href="http://kelaltech.com/"
              className="kelal-wordmark"
              title="The Company builds tech that allows smoother information flow."
            >
              tech
            </a>
          </div>
        </h1>

        <hr id="below-header" className="size" />
        <h2 className="left size dim">
          <span title="Greetings never hurt. Do they?" data-aos="fade-up">
            Nice to Meet You &nbsp; :)
          </span>
        </h2>

        <div className="paper size">
          <h3>
            <span
              title="Nice to meet you! Yes, again. Like I just said, greetings never hurt."
              data-aos="fade-up"
            >
              YOU CAN FIND ME USING:
            </span>
          </h3>
          <p className="links">
            <a
              href="mailto:kaleabmelkie@gmail.com"
              title="Email this bad boy! (kaleabmelkie@gmail.com)"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="fa fa-3x fa-envelope" />
              <br />
              Email
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://linkedin.com/in/kaleabmelkie"
              title="Connect with Kaleab, the Professional!"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="fab fa-3x fa-linkedin" />
              <br />
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://t.me/kaleab14"
              title=";)"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="fab fa-3x fa-telegram" />
              <br />
              Telegram
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://twitter.com/kaleab14"
              title="Been here since September 2010."
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="fab fa-3x fa-twitter" />
              <br />
              Twitter
            </a>
          </p>

          <h3>
            <span title="Dm Dm Dmm Dmmm..." data-aos="fade-up">
              OR, SEE WHAT I DO ON:
            </span>
          </h3>
          <p className="links">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.npmjs.com/~kaleabmelkie"
              title="I'm an author. Not a book author. Guess what I auth. Authenticate this author. Authorize and Poet-rize. 403 the book author. I'm an author. 200!, for I'm a code author."
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="fab fa-3x fa-npm" />
              <br />
              NPM
            </a>
            <a
              id="kelalLogo"
              target="_blank"
              rel="noopener"
              href="http://kelaltech.com/"
              title="The Company."
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img alt="kelal tech. Logo" src={kelalTechLogoSrc} />
              <br />
              kelal tech.
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://gitlab.com/kaleabmelkie"
              title="Checkout this hard-coder!"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="fab fa-3x fa-gitlab" />
              <br />
              GitLab
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/kaleabmelkie"
              title="<-- Go GitLab! Boo.. github.  Not much to see here. Really. Much of what I do is on GitLab."
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="fab fa-3x fa-github" />
              <br />
              GitHub
            </a>
          </p>
        </div>

        <p className="dim" style={{ paddingTop: '3em' }}>
          <span className="dim" title="All right reserved.">
            &copy; 2019, Kaleab S. Melkie.
          </span>
        </p>
      </div>
    )
  }
}
