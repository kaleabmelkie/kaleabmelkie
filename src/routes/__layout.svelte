<script lang="ts">
  import '$lib/styles/tailwind.css'

  import Intro from '$lib/components/intro.svelte'
  import Footer from '$lib/components/footer.svelte'
</script>

<main
  class="
    bg-gray-50 dark:bg-gray-900 text-black dark:text-white
    transition-colors
  "
>
  <div
    class="
      grid gap-3 md:gap-6 content-start
      mx-auto p-4 md:p-12
      min-h-screen max-w-screen-lg
    "
  >
    <div class="grid gap-3 md:gap-6 md:grid-cols-4">
      <aside>
        <Intro />
      </aside>

      <div class="md:col-span-3">
        <slot />
      </div>
    </div>

    <aside>
      <Footer />
    </aside>
  </div>
</main>
