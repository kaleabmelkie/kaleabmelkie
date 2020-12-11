import { FooterStyles } from './footer.styles'

export type FooterProps = unknown

function Footer() {
  return (
    <FooterStyles>
      {new Date().getFullYear()} &copy; Kaleab S. Melkie
    </FooterStyles>
  )
}

export default Footer
