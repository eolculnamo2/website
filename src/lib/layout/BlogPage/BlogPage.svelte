<script lang="ts">
  import StandardPage from '../StandardPage/StandardPage.svelte';
  export let title: string;
  export let mediumLink: string | null = null;
</script>

<StandardPage {title}>
  <article class="content">
    <h1>{title}</h1>
    <hr />
    {#if mediumLink != null}
      <a href={mediumLink} target="_blank"> View on Medium </a>
    {/if}
    <slot />
  </article>
</StandardPage>

<style>
  .content {
    max-width: 600px;
    margin: 1em auto;
  }
  a {
    display: block;
    text-align: right;
    margin-bottom: 1em;
  }
</style>
