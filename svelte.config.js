import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    hydrate: false,
    prerender: {
      enabled: true,
      crawl: true,
    },
    router: false,
    target: '#svelte',
  },
}

export default config
