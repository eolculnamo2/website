<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Content from '../Content/Content.svelte';
</script>

<Header />
<Content>
	<main>
		<slot />
	</main>
</Content>

<style>
	main {
		padding: 1rem;
		background-color: white;
		min-height: 90vh;
	}
</style>
