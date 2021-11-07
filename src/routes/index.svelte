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
        items: mediumItems.map((i) => ({
          link: i.link,
          title: i.title,
          published_at: new Date(i.published).toISOString(),
          excerpt_html: i.description,
          tags: i.categories,
        })),
      },
    }
  }
</script>

<script lang="ts">
  export let items: Item[] = []
</script>

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
