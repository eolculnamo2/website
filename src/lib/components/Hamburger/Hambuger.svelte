<script lang="ts">
  let open = false;
  let menuRef: HTMLElement | null = null;
  let drawerRef: HTMLElement | null = null;

  $: {
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      if (open) {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
      } else {
        document.body.style.overflow = 'initial';
      }
    }
  }

  function clickOff(clickedEl) {
    if (!menuRef || !drawerRef) {
      open = false;
    }

    if (menuRef.contains(clickedEl) || drawerRef.contains(clickedEl)) {
      return;
    }
    open = false;
  }
</script>

<svelte:window on:mouseup={(e) => clickOff(e.target)} on:resize={() => (open = false)} />

<div
  bind:this={menuRef}
  class={`menu ${open ? 'hamburger-open' : ''}`}
  on:click={() => (open = !open)}
>
  <div class="line line1" />
  <div class="line line2" />
  <div class="line line3" />
</div>

<div bind:this={drawerRef} class={`drawer ${open && 'drawer-open'}`}>
  <slot />
</div>

<style lang="scss">
  .menu {
    display: flex;
    flex-direction: column;
    gap: 3px;
    cursor: pointer;
    padding: 8px;
  }
  .line {
    height: 2px;
    width: 20px;
    background-color: white;
    transition: all 0.2s;
  }

  .hamburger-open {
    .line1 {
      transform: rotate(45deg) translateX(7px);
    }
    .line2 {
      width: 0;
    }
    .line3 {
      transform: rotate(-45deg) translateX(7px);
    }
  }

  .drawer {
    display: flex;
    width: 320px;
    position: fixed;
    top: 60px;
    right: -325px;
    height: 100vh;
    background-color: white;
    border-left: 1px solid #dadada;
    transition: all 0.2s;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 1em;
    box-sizing: border-box;
  }

  .drawer-open {
    right: 0;
  }
</style>
