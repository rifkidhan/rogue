<script lang="ts">
	import { inView, animate, spring, stagger } from 'motion';
	import { onMount } from 'svelte';

	export let component: 'h1' | 'h2' = 'h2';
	export let content: string;

	onMount(() => {
		inView('.section-title', (info) => {
			animate(
				'.title-wrapper span',
				{ y: [50, 0], opacity: [0, 1] },
				{
					easing: spring({ mass: 1, damping: 100 }),
					delay: stagger(0.05),
					allowWebkitAcceleration: true
				}
			);
		});
	});
</script>

<svelte:element this={component} class="display-lg section-title" aria-label={content}>
	{#each content.split(' ') as title, i}
		{#if content.split(' ').length - 1 === i}
			<span class="text-alizarin wrapper title-wrapper">
				{#each title.split('') as char}
					<span style:opacity="0" style:translate="transformY(0)">
						{char}
					</span>
				{/each}
			</span>
		{:else}
			<span class="wrapper title-wrapper">
				{#each title.split('') as char}
					<span style:opacity="0" style:translate="transformY(0)">
						{char}
					</span>
				{/each}
			</span>
		{/if}
	{/each}
</svelte:element>

<style lang="postcss">
	.section-title {
		@apply inline-flex flex-row gap-5 overflow-hidden;
	}
	.wrapper {
		@apply inline-flex;
	}
</style>
