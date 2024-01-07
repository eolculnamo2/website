<script lang="ts">
  import { match } from 'ts-pattern';
  import '../app.css';
  import { isDarkMode } from '../store/app';
  import { onMount } from 'svelte';
  import { DARK_MODE_STORAGE_NAME } from '../constants';

  function handleDarkLightMode() {
    const darkModeLocalStorage = localStorage.getItem(DARK_MODE_STORAGE_NAME);
    if (darkModeLocalStorage === '1') {
      isDarkMode.set('dark');
    } else if (darkModeLocalStorage === '0') {
      isDarkMode.set('light');
    }
    if (darkModeLocalStorage) {
      return;
    }

    try {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem(DARK_MODE_STORAGE_NAME, '1');
        isDarkMode.set('dark');
      } else {
        if (!localStorage.getItem(DARK_MODE_STORAGE_NAME)) {
          isDarkMode.set('light');
        }
      }
    } catch (e) {
      console.warn('Failed to detect dark mode preference: ', e);
    }
  }

  onMount(() => {
    handleDarkLightMode();
  });
</script>

<div
  class={match($isDarkMode)
    .with('dark', () => 'dark-mode')
    .with('light', () => 'light-mode')
    .with('unset', () => '')
    .exhaustive()}
>
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
