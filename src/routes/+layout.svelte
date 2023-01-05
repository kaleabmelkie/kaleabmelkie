<script lang="ts">
	import '$lib/styles/tailwind.postcss'

	import Footer from '$lib/components/footer.svelte'
	import Header from '$lib/components/header.svelte'
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<main class="bg-gray-50 text-black transition-colors dark:bg-gray-900 dark:text-white">
	<div class="mx-auto grid min-h-screen max-w-screen-lg content-start gap-3 p-4 md:gap-6 md:p-12">
		<div class="grid gap-6 md:grid-cols-4 md:gap-8">
			<Header />

			<div class="md:col-span-3">
				<slot />
			</div>
		</div>

		<Footer year={data.year} />
	</div>
</main>
