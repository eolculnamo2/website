<script lang="ts">
  import StandardPage from '../StandardPage/StandardPage.svelte';
  export let title: string;
</script>

<StandardPage {title}>
  <div class="content">
    <h1>{title}</h1>
    <hr />
    <slot />
  </div>
</StandardPage>

<style>
  .content {
    max-width: 600px;
    margin: 1em auto;
  }
</style>
