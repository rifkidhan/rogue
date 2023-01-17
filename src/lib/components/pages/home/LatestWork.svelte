<script lang="ts">
	import { animate, inView, spring, timeline, scroll } from 'motion';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Button from '$lib/components/ui/Button.svelte';
	import SectionTitle from '$lib/components/common/SectionTitle.svelte';

	let contentCard: HTMLElement;
	let container: HTMLElement;

	const contentWork = [
		{
			title: 'Soaked in gold',
			image:
				'https://images.unsplash.com/photo-1670911170630-c9acad2e9da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
			location: 'Port-Harcourt, Port-Harcourt, Nigeria',
			date: 'December 13, 2022',
			class: 'content-image content-parallax-s1'
		},
		{
			title: 'Firebird lady',
			image:
				'https://images.unsplash.com/photo-1671094362390-02b76f5e0556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
			location: 'Cincinnati, OH, USA',
			date: 'December 15, 2022',
			class: 'content-image content-parallax-s2'
		},
		{
			title: 'Women in the bridge',
			image:
				'https://images.unsplash.com/photo-1652087069456-06fb70235fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
			location: 'Cincinnati, OH, USA',
			date: 'May 9, 2022',
			class: 'content-image content-parallax-s2'
		},
		{
			title: 'Fashion girl',
			image:
				'https://images.unsplash.com/photo-1670718089430-d75ba6c1a194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
			location: 'Kayseri, Turkey',
			date: 'December 11, 2022',
			class: 'content-image content-parallax-s3'
		}
	];

	onMount(() => {
		scroll(
			timeline([
				['.content-parallax-s1', { y: [100, -200] }, { allowWebkitAcceleration: true, at: '<' }],
				['.content-parallax-s2', { y: [200, -300] }, { allowWebkitAcceleration: true, at: '<' }],
				['.content-parallax-s3', { y: [100, -150] }, { allowWebkitAcceleration: true, at: '<' }]
			]),
			{ target: container, offset: ['start end', 'end end'] }
		);
	});
</script>

<section bind:this={container}>
	<div class="wrapper">
		<SectionTitle content="Latest Work" />
		<Button variant="naked" href="/projects">View All</Button>
	</div>
	<div class="content-items" bind:this={contentCard}>
		{#each contentWork as content}
			<div class={content.class}>
				<div class="h3" aria-label={content.title}>
					{#each content.title.split(' ') as title, i}
						{#if content.title.split(' ').length - 1 === i}
							<span class="text-alizarin">
								{title}
							</span>
						{:else}
							<span>
								{title}
							</span>
						{/if}
					{/each}
				</div>
				<img src={content.image} alt={content.title} class="grayscale" />
				<div class="info">
					<span>
						{content.location}
					</span>
					<span>
						{content.date}
					</span>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="postcss">
	section {
		@apply container mx-auto flex flex-col gap-20;
	}
	.wrapper {
		@apply flex flex-row items-center justify-between;
	}
	.content-items {
		@apply grid grid-cols-2 gap-20;
	}
	.content-image {
		@apply flex flex-col gap-5;
		& > .info {
			@apply inline-flex flex-col;
		}
	}
</style>
