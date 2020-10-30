import styles from './footer.module.scss'

type FooterProps = unknown

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      {new Date().getFullYear()} &copy; Kaleab S. Melkie
    </footer>
  )
}

export default Footer
