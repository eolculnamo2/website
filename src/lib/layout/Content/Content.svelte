<script lang="ts">
	export let split = false;

	function getClassNames() {
		let classNames = '';
		if (split) {
			classNames += 'split';
		}
		return classNames;
	}
</script>

<div class={getClassNames()}>
	<slot />
</div>

<style lang="scss">
	div {
		max-width: $contentWidth;
		margin: auto;
	}
	.split {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
