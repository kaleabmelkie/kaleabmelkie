import { useEffect, useRef, useState } from 'react'

import imgSrc, { IImgSrcInput, placeholder1x1 } from '../../../lib/img-src'

function useImgSrc(
  input?: IImgSrcInput,
  timeout: number | null = null
): string {
  const source = imgSrc(input)

  const [current, setCurrent] = useState(source && source.placeholder)

  const applyImgSrc = () => {
    if (source === undefined) return

    const webP = document.querySelector('html').classList.contains('webp')
    setCurrent(webP && source.webP !== undefined ? source.webP : source.src)
  }

  const timeoutRef = useRef<any>()
  useEffect(() => {
    if (timeout !== null) timeoutRef.current = setTimeout(applyImgSrc, timeout)
    else applyImgSrc()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [input, timeout])

  return current !== undefined ? current : placeholder1x1
}

export default useImgSrc
