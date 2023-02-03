<script lang="ts">
	const links = [
		{ name: 'GitHub', url: 'https://github.com/kaleabmelkie' },
		{ name: 'Medium', url: 'https://kaleabmelkie.medium.com/' },
		{ name: 'Twitter', url: 'https://twitter.com/kaleab14' },
		{ name: 'Unsplash', url: 'https://unsplash.com/@kaleab' },
		{ name: 'Upwork', url: 'https://www.upwork.com/fl/kaleabmelkie' },
	] as const
</script>

<svelte:head>
	<link
		rel="preload"
		as="image"
		href="https://www.gravatar.com/avatar/c8fdec81587d62796a4561cfe1a536d0?size=192"
	/>
</svelte:head>

<header class="mb-auto grid gap-6 py-4 md:sticky md:top-12 md:py-0">
	<div class="grid grid-flow-col items-start justify-start gap-6 md:grid-flow-row">
		<a href="/">
			<img
				class="h-32 w-24 min-w-[6rem] rounded bg-gray-200 object-cover shadow-sm dark:bg-gray-700 md:h-48 md:w-36"
				src="https://www.gravatar.com/avatar/c8fdec81587d62796a4561cfe1a536d0?size=192"
				alt="Kaleab's Avatar"
				width={144}
				height={192}
				loading="eager"
			/>
		</a>

		<div class="grid gap-2 md:gap-3">
			<h1
				class="bg-gradient-to-tl from-blue-500 to-green-600 bg-clip-text text-2xl font-extrabold uppercase tracking-tight text-transparent dark:from-blue-500 dark:to-green-400 md:text-3xl lg:text-4xl"
			>
				<a href="/">Kaleab <abbr title="Serekebrhan">S.</abbr> Melkie</a>
			</h1>

			<p class="text-sm opacity-70">
				<a class="link" rel="external" href="https://www.upwork.com/fl/kaleabmelkie">Developer</a> specializing
				in Svelte, TypeScript, GraphQL, and Node.js.
			</p>

			<a
				class="button hidden md:inline-block"
				rel="external"
				href="https://www.upwork.com/fl/kaleabmelkie">Let's work together</a
			>
		</div>
	</div>

	<a
		class="button inline-block md:hidden"
		rel="external"
		href="https://www.upwork.com/fl/kaleabmelkie">Let's work together</a
	>

	<hr class="hr hidden md:block" />

	<nav class="max-w-full overflow-x-auto">
		<ul class="grid grid-flow-col justify-start gap-2 md:grid-flow-row md:gap-1">
			{#each links as link (link.name)}
				<li>
					<a class="link text-sm" rel="external" href={link.url}>
						{link.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
