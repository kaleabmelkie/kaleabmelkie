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
        Co-founder <abbr title="and">&amp;&amp;</abbr>{' '}
        <abbr title="Chief Executive Officer">CEO</abbr>
        <abbr title="at">,</abbr>{' '}
        <a href="https://www.kelaltech.com/">Kelal Tech PLC</a>
      </sub>
    </>
  )
}

export default Titles
