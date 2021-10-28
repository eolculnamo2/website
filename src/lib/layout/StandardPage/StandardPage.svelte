<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Content from '../Content/Content.svelte';
</script>

<Header />
<Content>
	<slot />
</Content>
