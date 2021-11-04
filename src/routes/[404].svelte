<script lang="ts">
  import StandardPage from '$lib/layout/StandardPage/StandardPage.svelte';
</script>

<StandardPage title="Not Found">
  <h1>Sorry! This page doesn't exist!</h1>
  <img src="/404.svg" alt="Welcome" />
</StandardPage>

<style>
  img {
    max-width: 100%;
    width: 500px;
    margin: auto;
    display: block;
  }
</style>
