<script lang="ts">
	import Lenis from '@studio-freight/lenis';
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import { menuState } from '$lib/stores/ui';
	import Header from '$lib/components/common/Header.svelte';
	import Menu from '$lib/components/common/Menu.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
	import '../styles/main.css';

	let lenis: Lenis;

	onMount(() => {
		lenis = new Lenis({
			duration: 2,
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false
		});
	});

	const raf = (time: any) => {
		lenis.raf(time);
		requestAnimationFrame(raf);
	};

	$: if (lenis) {
		requestAnimationFrame(raf);
	}

	onDestroy(() => {
		if (lenis) lenis.destroy();
	});
</script>

<Header />
{#if $menuState}
	<Menu />
{/if}
{#key $page.url.pathname}
	<div class="fit" transition:fade={{ easing: circInOut, duration: 1000 }}>
		<slot />
	</div>
{/key}
<Footer />
