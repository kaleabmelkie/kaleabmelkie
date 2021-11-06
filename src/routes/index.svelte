<script lang="ts" context="module">
  import type { Item } from '$lib/types/item'
  import type { Load } from '@sveltejs/kit'

  export const load: Load<object, { props: { items: Item[] } }> = async () => {
    const items: Item[] = [] // TODO: ...

    return { props: { items } }
  }
</script>

<script lang="ts">
  import ItemCard from '$lib/components/item-card.svelte'

  export const items: Item[] = []
</script>

<section class="grid gap-4">
  {#each items as item (item.id)}
    <ItemCard {item} />
  {:else}
    <p>
      Nothing to see here yet.
      <br />
      Come back later. 🙃
    </p>
  {/each}
</section>
