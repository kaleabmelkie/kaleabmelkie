<script lang="ts">
  import TwitterIcon from '$lib/assets/icons/twitter.svg'
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
  <h2
    class="font-semibold text-2xl md:text-3xl {item.title ? 'leading-6' : ''}"
  >
    <a class="link" rel="external" href={item.link}>
      {#if item.title === '[TWEETER_ICON]'}
        <img
          class="w-[29.52px] h-6"
          src={TwitterIcon}
          alt="Tweet"
          width={29.52}
          height={24}
        />
      {:else}
        {item.title}
      {/if}
    </a>
  </h2>

  <div
    class="item-card-excerpt opacity-80"
    contenteditable="false"
    bind:innerHTML={item.excerpt_html}
  />
</article>
