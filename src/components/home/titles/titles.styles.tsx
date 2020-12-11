import styled, { css } from 'styled-components'

export const TitlesStyles = styled.div`
  ${() => css`
    .title {
      display: block;

      margin: 0;
      padding: 32px 0 16px;

      font-size: 2em;
      text-align: center;

      color: rgba(0, 0, 0, 0.63);

      .first-name {
        color: rgba(0, 0, 0, 1);
      }
    }

    .subtitle {
      display: block;

      font-size: 0.96em;
      font-weight: 100;
      text-align: center;

      color: rgba(0, 0, 0, 0.63);
    }
  `}
`
