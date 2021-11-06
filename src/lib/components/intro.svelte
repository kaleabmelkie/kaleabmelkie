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
    py-4 lg:py-0
    rounded-md
  "
>
  <div
    class="grid gap-6 grid-flow-col lg:grid-flow-row justify-start items-start"
  >
    <img
      class="
        w-24 lg:w-36 h-32 lg:h-48 min-w-[6rem]
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

    <div class="grid gap-3 lg:gap-6">
      <h1
        class="
          font-extrabold text-2xl lg:text-4xl uppercase
          bg-gradient-to-tr from-blue-500 dark:from-blue-500 to-green-600 dark:to-green-400
          bg-clip-text text-transparent
        "
      >
        <a sveltekit:prefetch href="/">Kaleab's Notes</a>
      </h1>

      <div class="grid gap-2">
        <p class="opacity-90">
          I develop software at <a
            class="link"
            href="https://www.kelaltech.com/"
            rel="external"
          >
            Kelal Tech</a
          >, and I write stuff here.
        </p>
      </div>
    </div>
  </div>

  <nav class="overflow-x-auto max-w-full">
    <ul
      class="grid gap-3 lg:gap-2 grid-flow-col lg:grid-flow-row justify-start"
    >
      {#each links as link (link.name)}
        <li>
          <a class="link" href={link.url} rel="external">
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
