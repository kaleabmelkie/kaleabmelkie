<script lang="ts">
  import type { Item } from '$lib/types/item'

  export let item: Item
</script>

<article
  class="
    grid gap-3 md:gap-6
    p-4 md:p-6
    border dark:border-transparent rounded-md
    bg-white dark:bg-gray-800
  "
>
  <h2 class="font-semibold text-2xl md:text-3xl">
    <a class="link" rel="external" href={item.link}>{item.title}</a>
  </h2>

  <div
    class="item-card-excerpt opacity-90"
    contenteditable="false"
    bind:innerHTML={item.excerpt_html}
  />
</article>
