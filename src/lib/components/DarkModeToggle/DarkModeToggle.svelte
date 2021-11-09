<script>
  import Toggle from 'svelte-toggle';

  export let toggled;
</script>

<Toggle
  label=""
  on:toggle
  bind:toggled
  toggledColor="#444"
  untoggledColor="yellow"
  switchColor=" #0892d0"
/>
