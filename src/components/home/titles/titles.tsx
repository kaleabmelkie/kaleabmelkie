import { TitlesStyles } from './titles.styles'

export type TitlesProps = unknown

function Titles() {
  return (
    <TitlesStyles>
      <h1 className="title">
        <span className="first-name">Kaleab</span>{' '}
        <abbr title="Serekebrhan">S.</abbr> Melkie
      </h1>

      <sub className="subtitle">
        Co-founder <abbr title="and">&amp;&amp;</abbr>{' '}
        <abbr title="Chief Executive Officer">CEO</abbr>
        <abbr title="at">,</abbr>{' '}
        <a href="https://www.kelaltech.com/">Kelal Tech PLC</a>
      </sub>
    </TitlesStyles>
  )
}

export default Titles
