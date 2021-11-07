<script lang="ts">
  import type { Item } from '$lib/types/item'

  export let item: Item
</script>

<article
  class="
    grid gap-3 lg:gap-6
    p-4 lg:p-6
    rounded-md
    bg-gray-50 dark:bg-gray-900 shadow-sm
  "
>
  <h2 class="font-semibold text-2xl lg:text-3xl">
    <a class="link" rel="external" href={item.link}>{item.title}</a>
  </h2>

  <div
    class="item-card-excerpt opacity-90"
    contenteditable="false"
    bind:innerHTML={item.excerpt_html}
  />
</article>
