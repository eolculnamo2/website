<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import HomepageIntro from '$lib/components/HomepageIntro/HomepageIntro.svelte';

//  import HomepageVideos from '$lib/components/HomepageVideos/HomepageVideos.svelte';
  import StandardPage from '$lib/layout/StandardPage/StandardPage.svelte';
  import Pwa from '$lib/svgs/Pwa.svelte';
</script>

<StandardPage title="Rob Bertram">
  <h1>Welcome!</h1>
  <div class="inner-content">
    <p class="personal-overview">
      A language that doesn't affect the way you think about programming is not worth knowing.
    </p>
    <Pwa />
    <hr />
    <HomepageIntro />
    <!-- <hr /> -->
    <!-- <HomepageVideos /> -->
  </div>
</StandardPage>

<style>
  h1 {
    font-weight: bold;
  }

  hr {
    margin: 2rem 0;
  }
  .personal-overview {
    max-width: 400px;
    margin: auto;
    margin-bottom: 3rem;
    text-align: center;
    font-style: italic;
  }
  .inner-content {
    max-width: 900px;
    margin: auto;
    display: block;
  }
</style>
