import { useEffect, useMemo, useRef, useState } from 'react'

import imgSrc, { IImgSrcInput, placeholder1x1 } from '../../../lib/img-src'

function useImgSrcMulti(
  input?: IImgSrcInput[],
  timeout: number | null = null
): string[] {
  const sources = input !== undefined ? input.map(i => imgSrc(i)) : []

  const _currents = useMemo(
    () =>
      sources.map(s =>
        s.placeholder !== undefined ? s.placeholder : placeholder1x1
      ),
    [sources]
  )
  const [currents, setCurrents] = useState(_currents)

  const applyImgSrc = () => {
    if (sources === undefined) return

    const webP = document.querySelector('html').classList.contains('webp')

    const cs: string[] = []
    for (const source of sources) {
      cs.push(webP && source.webP !== undefined ? source.webP : source.src)
    }
    setCurrents(cs)
  }

  const timeoutRef = useRef<any>()
  useEffect(() => {
    if (timeout !== null) timeoutRef.current = setTimeout(applyImgSrc, timeout)
    else applyImgSrc()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [input, timeout])

  return currents
}

export default useImgSrcMulti
