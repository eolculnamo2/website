<script lang="ts">
  import FlexApart from '$lib/layout/FlexApart/FlexApart.svelte';

  export let name: string;
  export let stack: string[];
  export let link: string = undefined;
  export let description: string;
</script>

<div>
  <FlexApart>
    <h3>{name}</h3>
    {#if link}
      <a href={link} alt={name} target="_blank">Visit project</a>
    {/if}
  </FlexApart>
  <div>{description}</div>
  <br />

  <div><strong>Created with</strong></div>
  <ul>
    {#each stack as stackItem}
      <li>{stackItem}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  h3 {
    color: #0892d0;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
