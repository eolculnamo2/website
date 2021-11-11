<script context="module" lang="ts">
  export function load({ page }) {
    return {
      props: {
        currentSlug: page.path,
      },
    };
  }
</script>

<script lang="ts">
  import { currentRoute } from '../store/navigation';

  import '../app.css';
  import { isDarkMode } from '../store/app';
  import { onMount } from 'svelte';
  import { DARK_MODE_STORAGE_NAME } from '../constants';
  export let currentSlug: string;
  $: currentRoute.set(currentSlug);

  onMount(() => {
    // if not set to 1 or 0, leet deetection happen from matchMedia
    const darkModeLocalStorage = localStorage.getItem(DARK_MODE_STORAGE_NAME);
    if (darkModeLocalStorage === '1') {
      isDarkMode.set(true);
    } else if (darkModeLocalStorage === '0') {
      isDarkMode.set(false);
    }
    if (darkModeLocalStorage) {
      return;
    }

    try {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem(DARK_MODE_STORAGE_NAME, '1');
        isDarkMode.set(true);
      } else {
        if (!localStorage.getItem(DARK_MODE_STORAGE_NAME)) {
          isDarkMode.set(false);
        }
      }
    } catch (e) {
      console.warn('Failed to detect dark mode preference: ', e);
    }
  });
</script>

<div class={$isDarkMode ? 'dark-mode' : 'light-mode'}>
  <slot />
</div>

<style>
  div {
    min-height: 100vh;
    width: 100vw;
    background-color: var(--primary-color);
    background: linear-gradient(
      180deg,
      var(--primary-color) 0%,
      var(--secondary-color) 10.45%,
      var(--tertiary-color) 41.35%
    );
  }
</style>
