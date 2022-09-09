<script lang="ts">
  import VideoListItem from './components/VideoListItem.svelte';
</script>

<h1>YouTube Stuff</h1>
<div class="top-wrap">
  <VideoListItem heading="ReScript Game of Life" src="https://www.youtube.com/embed/Erbbh5ETSZU" />
  <VideoListItem
    heading="Pattern Matching TypeScript"
    src="https://www.youtube.com/embed/J59fZjqWLTM"
  />
  <VideoListItem
    heading="Build the Option Type with TS"
    src="https://www.youtube.com/embed/sOfOHGdZkqg"
  />
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
