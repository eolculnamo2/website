<script context="module" lang="ts">
	export function load({ page }) {
		return {
			props: {
				currentSlug: page.path
			}
		};
	}
</script>

<script lang="ts">
	import { currentRoute } from '../store/navigation';

	import '../app.css';
	export let currentSlug: string;
	$: currentRoute.set(currentSlug);
</script>

<div>
	<slot />
</div>
