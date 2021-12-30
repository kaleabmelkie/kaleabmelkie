<script lang="ts">
  const links = [
    { name: 'GitHub', url: 'https://github.com/kaleabmelkie' },
    { name: 'Medium', url: 'https://kaleabmelkie.medium.com/' },
    { name: 'Twitter', url: 'https://twitter.com/kaleab14' },
    { name: 'Unsplash', url: 'https://unsplash.com/@kaleab' },
  ] as const
</script>

<svelte:head>
  <link
    rel="preload"
    as="image"
    href="https://www.gravatar.com/avatar/c8fdec81587d62796a4561cfe1a536d0?size=192"
  />
</svelte:head>

<header
  class="
    grid gap-6
    py-4 md:py-0
    rounded-md
  "
>
  <div
    class="grid gap-6 grid-flow-col md:grid-flow-row justify-start items-start"
  >
    <a sveltekit:prefetch href="/">
      <img
        class="
          w-24 md:w-36 h-32 md:h-48 min-w-[6rem]
          rounded-md
          object-cover
          bg-gray-200 dark:bg-gray-700 shadow-sm
        "
        src="https://www.gravatar.com/avatar/c8fdec81587d62796a4561cfe1a536d0?size=192"
        alt="Kaleab's Avatar"
        width={144}
        height={192}
        loading="eager"
      />
    </a>

    <div class="grid gap-3 md:gap-6">
      <h1
        class="
          font-extrabold text-2xl md:text-3xl lg:text-4xl uppercase
          bg-gradient-to-tr from-blue-500 dark:from-blue-500 to-green-600 dark:to-green-400
          bg-clip-text text-transparent
        "
      >
        <a sveltekit:prefetch href="/">Kaleab's Notes</a>
      </h1>

      <p class="opacity-80">
        I develop software at <a
          class="link"
          href="https://www.kelaltech.com/"
          rel="external"
        >
          Kelal Tech</a
        >, and I put stuff here.
      </p>
    </div>
  </div>

  <nav class="overflow-x-auto max-w-full">
    <ul
      class="grid gap-3 md:gap-2 grid-flow-col md:grid-flow-row justify-start"
    >
      {#each links as link (link.name)}
        <li>
          <a class="link" rel="external" href={link.url}>
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
