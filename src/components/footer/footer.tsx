import React from 'react'

import styles from './footer.module.scss'

type FooterProps = unknown

const Footer: React.FC<FooterProps> = () => {
  return <footer className={styles.footer}>2020 &copy; Kaleab S. Melkie</footer>
}

export default Footer
