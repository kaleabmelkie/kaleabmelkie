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
    const { items: mediumItems } = await parse(
      'https://medium.com/feed/@kaleabmelkie',
      {}
    )

    return {
      props: {
        items: mediumItems.map((item, i) => ({
          link: item.link,
          title: item.title,
          excerpt_html: item.description
            .replace(/<a /g, `<a aria-label="Read more about: ${item.title}" `)
            .replace(/<img /g, `<img alt="Article picture of: ${item.title}" `)
            .replace(/\.medium\.com\/max\/[0-9]+\//g, '.medium.com/max/512/')
            .replace(/ width="[0-9]+"/g, ' width="512"')
            .replace(/<img /g, `<img loading="${i < 1 ? 'eager' : 'lazy'}" `),
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

<section class="grid gap-4">
  {#each items as item (item.link)}
    <ItemCard {item} />
  {:else}
    <p>
      Nothing to see here yet.
      <br />
      Come back later. 🙃
    </p>
  {/each}
</section>
