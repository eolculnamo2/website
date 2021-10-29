<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import StandardPage from '$lib/layout/StandardPage/StandardPage.svelte';
</script>

<svelte:head>
	<title>Rob Bertram</title>
</svelte:head>

<StandardPage>
	<h1>Welcome!</h1>
	<div class="inner-content">
		<p class="personal-overview">It doesn't feel like work if you love what you do</p>
		<img src="/pwa.svg" alt="Welcome" />
	</div>
</StandardPage>

<style>
	h1 {
		font-weight: bold;
	}

	.personal-overview {
		max-width: 400px;
		margin: auto;
		text-align: center;
		margin-bottom: 3rem;
		font-style: italic;
	}
	.inner-content {
		max-width: 900px;
		margin: auto;
		display: block;
	}
	img {
		max-width: 100%;
	}
</style>
