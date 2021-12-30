<script lang="ts" context="module">
  import ItemCard from '$lib/components/item-card.svelte'
  import type { Item } from '$lib/types/item'
  import type { Load } from '@sveltejs/kit'
  import rssToJson from 'rss-to-json'

  export const load: Load<object, { props: { items: Item[] } }> = async () => {
    const parse =
      typeof rssToJson === 'object'
        ? (rssToJson as unknown as { parse: typeof rssToJson }).parse
        : rssToJson

    let mediumItems: {
      published: number
      link: string
      description: string
      title: string
      excerpt_html: string
    }[] = []
    try {
      const { items } = await parse('https://medium.com/feed/@kaleabmelkie', {})
      mediumItems = items
    } catch {
      // do nothing
    }

    let tweetItems: {
      published: number
      link: string
      description: string
      title: string
      excerpt_html: string
    }[] = []
    try {
      const { items } = await parse('https://nitter.net/kaleab14/rss', {})
      tweetItems = items
    } catch {
      // do nothing
    }

    return {
      props: {
        items: [
          ...mediumItems.slice(0, 10).map((item) => ({
            published_at: item.published,
            link: item.link,
            title: item.title,
            excerpt_html: item.description
              .replace(
                /<a /g,
                `<a aria-label="Read more about: ${item.title}" `
              )
              .replace(
                /<img /g,
                `<img alt="Article picture of: ${item.title}" `
              )
              .replace(/\.medium\.com\/max\/[0-9]+\//g, '.medium.com/max/512/')
              .replace(/ width="[0-9]+"/g, ' width="512"'),
          })),

          ...tweetItems.slice(0, 10).map((item) => ({
            published_at: item.published,
            link: item.link,
            title: '[TWEETER_ICON]',
            excerpt_html:
              `<a class="text-lg md:text-xl cursor-pointer" rel="external" href="${
                item.link
              }"><span class="font-normal">${item.description
                .replace(/<a /g, '<span ')
                .replace(/<\/a>/g, '</span>')}</span></a>`
                .replace(
                  /<img /g,
                  `<img class="mt-4 md:mt-6" alt="Article picture of: ${item.title}" height="192px" width="192px" `
                )
                .replace(/ style="max-width:250px;"/g, '')
                .replace(/nitter\.net/g, 'twitter.com')
                .replace(
                  /https:\/\/twitter.com\/pic\//g,
                  'https://nitter.net/pic/'
                ),
          })),
        ]
          .sort((a, b) => b.published_at - a.published_at)
          .map((item, i) => ({
            ...item,
            excerpt_html: item.excerpt_html.replace(
              /<img /g,
              `<img loading="${i < 1 ? 'eager' : 'lazy'}" `
            ),
          })),
      },
    }
  }
</script>

<script lang="ts">
  export let items: Item[] = []

  $: priorityImages = items
    .slice(0, 1)
    .map(
      (i) =>
        i.excerpt_html
          ?.match(/<img (.*?)src="(.*?)" /g)
          ?.map((m) =>
            m.replace(/^<img (.*?)src="/g, '').replace(/" $/g, '')
          ) || []
    )
    .filter((i) => i !== null)
    .flat()
</script>

<svelte:head>
  {#each priorityImages as src}
    <link rel="preload" as="image" href={src} />
  {/each}
</svelte:head>

<section class="grid gap-4 justify-start">
  {#each items as item (item.published_at + item.link)}
    <ItemCard {item} />
  {:else}
    <p>
      Nothing to see here yet.
      <br />
      Come back later. 🙃
    </p>
  {/each}
</section>
