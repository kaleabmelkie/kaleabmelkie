<script lang="ts">
	import TwitterIcon from '$lib/assets/icons/twitter.svg'
	import type { Item } from '$lib/types/item'

	export let item: Item
</script>

<article class="grid gap-3 rounded bg-white p-4 shadow dark:bg-gray-800 md:gap-4 md:p-6">
	<h2 class="text-xl font-bold md:text-2xl {item.title ? 'leading-6' : ''}">
		<a class="link" rel="external" href={item.link}>
			{#if item.title === '{{TWEETER_ICON}}'}
				<img class="h-6 w-[29.52px]" src={TwitterIcon} alt="Tweet" width={29.52} height={24} />
			{:else}
				{item.title}
			{/if}
		</a>

		<hr class="hr mt-3 md:mt-4" />
	</h2>

	<div
		class="item-card-excerpt opacity-80"
		contenteditable="false"
		bind:innerHTML={item.excerpt_html}
	/>
</article>
