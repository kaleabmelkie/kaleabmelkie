import React from 'react'

import './titles.scss'

function Titles() {
  return (
    <>
      <h1 className="title">
        <span className="first-name">kaleab</span>{' '}
        <abbr title="serekebrhan">s.</abbr> melkie
      </h1>

      <sub className="subtitle">
        co-founder && ceo,{' '}
        <a href="https://www.kelaltech.com/">kelal tech plc</a>
      </sub>
    </>
  )
}

export default Titles
