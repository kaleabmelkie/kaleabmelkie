import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    html,
    body {
      position: relative;

      height: 100vh;
      width: 100%;
    }

    body {
      margin: 0;
      padding: 24px;

      font-family: 'Roboto Mono', monospace;
      font-size: 16px;
      letter-spacing: -0.14px;
      line-height: 1.4;

      background-attachment: fixed;
      background-color: rgb(255, 255, 255);
      background-image: linear-gradient(
        to top right,
        rgba(0, 0, 0, 0.22),
        rgba(0, 0, 0, 0.03),
        rgba(0, 0, 0, 0.14)
      );
      background-position: center center;
      background-size: cover;
      color: ${theme.colors.primary};

      @media (max-width: 420px) {
        font-size: 14px;
      }
    }

    a {
      display: inline-block;

      font-weight: bold;
      text-decoration: none;

      box-shadow: none;
      color: rgb(0, 0, 0);

      transition: box-shadow 700ms ease-out;

      &:active,
      &:focus,
      &:hover {
        box-shadow: inset 0 -1.07em 0 -1em currentColor;

        transition-duration: 150ms;
        transition-timing-function: ease-in;
      }
    }

    abbr {
      text-decoration: none;
    }

    // override ~nprogress/nprogress.css
    #nprogress {
      .bar {
        background: ${theme.colors.primary};
      }
      .peg {
        box-shadow: 0 0 10px ${theme.colors.primary},
          0 0 5px ${theme.colors.primary};
      }
    }
  `}
`

export default GlobalStyle
