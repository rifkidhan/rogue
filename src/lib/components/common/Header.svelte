<script lang="ts">
	import Button from '../ui/Button.svelte';
	import { menuState } from '$lib/stores/ui';

	const clickMenu = () => {
		$menuState = !$menuState;
	};
</script>

<header>
	<a class="corp" href="/" aria-label="Home"> Jonathan Galileo</a>
	<Button variant="naked" color="primary" on:click={clickMenu}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			slot="icon"
		>
			<line x1="4" y1="12" x2="20" y2="12" />
			<line x1="4" y1="6" x2="20" y2="6" />
			<line x1="4" y1="18" x2="20" y2="18" />
		</svg>
	</Button>
</header>

<style lang="postcss">
	header {
		@apply container mx-auto my-5 flex flex-row items-center justify-between;
	}
	.corp {
		@apply uppercase;
	}
</style>
