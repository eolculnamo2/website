<script lang="ts">
	export let name: string;
	export let slug: string;
	export let mediumLink: string;
</script>

<a href={`/blog/${slug}`}>
	<div>
		<h3>{name}</h3>
	</div>
</a>

<style>
	a {
		color: var(--heading-color);
	}
</style>
