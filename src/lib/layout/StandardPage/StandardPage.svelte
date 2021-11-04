<script lang="ts">
  import Header from '$lib/components/Header/Header.svelte';
  import Content from '../Content/Content.svelte';

  export let title: string;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Header />
<Content>
  <main>
    <slot />
  </main>
</Content>

<style>
  main {
    padding: 1rem;
    background-color: white;
    min-height: 90vh;
  }
</style>
