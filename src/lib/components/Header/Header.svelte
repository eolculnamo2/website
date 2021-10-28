<script>
	import Content from '$lib/layout/Content/Content.svelte';
	import { currentRoute } from '../../../store/navigation';
	const routesArray = [
		{
			href: '/',
			name: 'Home'
		},
		{
			href: '/about',
			name: 'About'
		},
		{
			href: '/blog',
			name: 'Blog'
		}
	];
</script>

<header>
	<Content split>
		<h1>Rob Bertram</h1>
		<nav>
			{#each routesArray as r}
				{#if r.href !== $currentRoute}
					<a href={r.href}><div class="link">{r.name}</div></a>
				{/if}
			{/each}
		</nav>
	</Content>
</header>

<style lang="scss">
	header {
		padding: 1rem 0.5rem;
		background-color: #0892d0;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
	h1 {
		font-size: 1.5rem;
		color: white;
		font-weight: 400;
		margin: 0;
	}
	.link {
		color: white;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
