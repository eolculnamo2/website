<script lang="ts">
  export let heading: string;
  export let src: string;
</script>

<div class="item">
  <h3>{heading}</h3>
  <div class="iframeVideo">
    <iframe
      width="560"
      height="315"
      {src}
      title={heading}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</div>

<style>
  h3 {
    margin-top: 3rem;
  }
  h3:first-of-type {
    margin-top: auto;
  }
  .iframeVideo {
    height: 0px;
    padding-bottom: 56.2%;
    position: relative;
  }
  .iframeVideo iframe {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .item {
    flex: 1;
  }
</style>
