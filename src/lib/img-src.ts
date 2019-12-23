export type IImgSrc = {
  src: string
  webP?: string
  placeholder?: string
}

export type IImgSrcInput = string | IImgSrc

export const placeholder1x1 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNiYAAAAAkAAxkR2eQAAAAASUVORK5CYII=`

function imgSrc(src: IImgSrcInput = 'none'): IImgSrc | undefined {
  return typeof src === 'undefined'
    ? undefined
    : typeof src === 'string'
    ? { src, webP: src, placeholder: placeholder1x1 }
    : {
        src: src.src,
        webP: src.webP !== undefined ? src.webP : src.src,
        placeholder:
          src.placeholder !== undefined ? src.placeholder : placeholder1x1
      }
}

export default imgSrc
