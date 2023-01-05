<script lang="ts">
	import ItemCard from '$lib/components/item-card.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: priorityImages = data.items
		.slice(0, 1)
		.map(
			(i) =>
				i.excerpt_html
					?.match(/<img (.*?)src="(.*?)" /g)
					?.map((m) => m.replace(/^<img (.*?)src="/g, '').replace(/" $/g, '')) || [],
		)
		.filter((i) => i !== null)
		.flat()
</script>

<svelte:head>
	{#each priorityImages as src}
		<link rel="preload" as="image" href={src} />
	{/each}
</svelte:head>

<section class="grid justify-start gap-6 md:gap-8">
	{#each data.items as item (item.published_at + item.link)}
		<ItemCard {item} />
	{:else}
		<p>
			Nothing to see here yet.
			<br />
			Come back later. 🙃
		</p>
	{/each}
</section>
