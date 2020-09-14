import React from 'react'

import styles from './titles.module.scss'

type TitlesProps = unknown

const Titles: React.FC<TitlesProps> = () => {
  return (
    <>
      <h1 className={styles.title}>
        <span className={styles['first-name']}>Kaleab</span>{' '}
        <abbr title="Serekebrhan">S.</abbr> Melkie
      </h1>

      <sub className={styles.subtitle}>
        Co-founder &amp;&amp; CEO,{' '}
        <a href="https://www.kelaltech.com/">Kelal Tech PLC</a>
      </sub>
    </>
  )
}

export default Titles
