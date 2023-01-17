<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Hero from '$lib/components/pages/home/Hero.svelte';
	import Services from '$lib/components/pages/home/Services.svelte';
	import LatestWork from '$lib/components/pages/home/LatestWork.svelte';
	import Exhibition from '$lib/components/pages/home/Exhibition.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<Hero />
	<Services />
	<LatestWork />
	<Exhibition />
</main>

<style lang="postcss">
	main {
		@apply flex flex-col items-center justify-center gap-[50vh];
	}
</style>
