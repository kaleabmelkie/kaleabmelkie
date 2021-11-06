<script lang="ts">
  import '$lib/styles/tailwind.css'

  import Intro from '$lib/components/intro.svelte'
  import Footer from '$lib/components/footer.svelte'
</script>

<main
  class="
    bg-gray-100 dark:bg-gray-800 text-black dark:text-white
    transition-colors
  "
>
  <div
    class="
      grid gap-3 lg:gap-6 content-start
      mx-auto p-4 lg:p-12
      min-h-screen max-w-screen-lg
    "
  >
    <div class="grid gap-3 lg:gap-6 lg:grid-cols-4">
      <aside>
        <Intro />
      </aside>

      <div class="lg:col-span-3">
        <slot />
      </div>
    </div>

    <aside>
      <Footer />
    </aside>
  </div>
</main>
