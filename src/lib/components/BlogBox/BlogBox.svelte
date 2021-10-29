<script lang="ts">
	export let name: string;
	export let slug: string;
	export let mediumLink: string;

	const useMedium = !!slug;
</script>

<a href={useMedium ? `/blog/${slug}` : mediumLink} target={useMedium ? '' : '_blank'}>
	<div>
		<h3>{name}</h3>
	</div>
</a>

<style>
	a {
		color: var(--heading-color);
	}
</style>
