import React from 'react'

import styles from './titles.module.scss'

type TitlesProps = unknown

const Titles: React.FC<TitlesProps> = () => {
  return (
    <>
      <h1 className={styles.title}>
        <span className={styles['first-name']}>kaleab</span>{' '}
        <abbr title="serekebrhan">s.</abbr> melkie
      </h1>

      <sub className={styles.subtitle}>
        co-founder &amp;&amp; ceo,{' '}
        <a href="https://www.kelaltech.com/">kelal tech plc</a>
      </sub>
    </>
  )
}

export default Titles
