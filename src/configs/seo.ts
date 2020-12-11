import { DefaultSeoProps } from 'next-seo'

const seo: DefaultSeoProps = {
  title: 'Kaleab S. Melkie | Official Website',
  description: "Kaleab S. Melkie's official website",
  openGraph: {
    url: 'https://kaleab.kelaltech.com/',
    title: 'Kaleab S. Melkie',
    description: "Kaleab S. Melkie's official website",
    images: [
      {
        url: 'https://kaleab.kelaltech.com/images/app-icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: "Kaleab S. Melkie's official website icon",
      },
    ],
    site_name: 'Kaleab',
  },
  twitter: {
    handle: '@kaleab14',
    site: '@kaleab14',
    cardType: 'summary_large_image',
  },
}

export default seo
