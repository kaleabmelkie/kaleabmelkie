import styled, { css } from 'styled-components'

export const ProfilePhotoStyles = styled.div`
  ${() => css`
    display: block;

    padding: 24px 0 0;

    text-align: center;

    .profile-photo-frame {
      display: inline-block;
      overflow: hidden;
      position: relative;

      width: 38vh;
      height: 38vh;

      max-width: 50vw;
      max-height: 50vw;

      border: 1.4vh solid rgba(0, 0, 0, 0.063);
      border-radius: 50%;

      background-color: rgb(255, 255, 255);
      box-shadow: 0 7px 42px -14px rgba(0, 0, 0, 0.28);

      @media (min-width: 960px) {
        max-width: 33vw;
        max-height: 33vw;

        margin: 1vh 0 0.5vh;
      }

      @media (min-width: 1440px) {
        max-width: 25vw;
        max-height: 25vw;

        margin: 3vh 0 1vh;
      }

      @media (max-width: 720px) {
        max-width: 56vw;
        max-height: 56vw;
      }

      @media (max-width: 480px) {
        max-width: 75vw;
        max-height: 75vw;
      }
    }
  `}
`