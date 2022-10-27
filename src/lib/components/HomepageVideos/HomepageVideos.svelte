<script lang="ts">
  import { pwaImageReady } from '../../../store/homepage';

  import { onMount } from 'svelte';

  import VideoListItem from './components/VideoListItem.svelte';

  // lazy load videos
  let showVideos = false;

  onMount(() => {
  const element = document.querySelector('#vid-wrap');

    const options = {
      root: null, // set document viewport as root
      rootMargin: '0px', // margin around root
      threshold: 1.0, // 1.0 means that when 100% of the target is visible
      //inside the root, then observer callback is invoked.
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if ($pwaImageReady && entry.intersectionRatio > 0) {
          showVideos = true
        }
      });
    }, options);

    observer.observe(element)
  });
</script>

<h1>YouTube Stuff</h1>
<div id="vid-wrap" class="top-wrap">
  {#if showVideos}
    <VideoListItem
      heading="ReScript Game of Life"
      src="https://www.youtube.com/embed/Erbbh5ETSZU"
    />
    <VideoListItem
      heading="Pattern Matching TypeScript"
      src="https://www.youtube.com/embed/J59fZjqWLTM"
    />
    <VideoListItem
      heading="Build the Option Type with TS"
      src="https://www.youtube.com/embed/sOfOHGdZkqg"
    />
  {/if}
</div>

<style>
  .top-wrap {
    margin: auto;
    width: auto;
    padding-bottom: 2rem;
  }
  @media (min-width: 800px) {
    .top-wrap {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>
