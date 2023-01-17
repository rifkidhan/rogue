<script lang="ts">
	import { timeline, spring, stagger, animate, scroll } from 'motion';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let section: HTMLElement;
	let image: HTMLElement;
	const ownerName = ['Jonathan', 'Galileo'];

	const animation = () => {
		timeline([
			[
				image,
				{ y: [100, 0], opacity: [0, 1] },
				{ easing: spring({ mass: 2, damping: 100 }), allowWebkitAcceleration: true }
			],
			[
				'.owner-name-first span',
				{
					y: [200, 0]
				},
				{
					delay: stagger(0.08),
					easing: spring({ mass: 2, damping: 100 }),
					at: '<',
					allowWebkitAcceleration: true
				}
			],
			[
				'.owner-name-second span',
				{
					y: [200, 0]
				},
				{
					delay: stagger(0.08),
					at: '-1.5',
					easing: spring({ mass: 2, damping: 100 }),
					allowWebkitAcceleration: true
				}
			],
			[
				'.owner-job-first',
				{ opacity: [0, 1], y: [150, 0] },
				{
					delay: stagger(0.08),
					easing: spring({ mass: 2, damping: 200 }),
					at: '<',
					allowWebkitAcceleration: true
				}
			],
			[
				'.owner-job-last',
				{ opacity: [0, 1], y: [150, 0] },
				{
					delay: stagger(0.08),
					easing: spring({ mass: 2, damping: 200 }),
					at: '-1',
					allowWebkitAcceleration: true
				}
			]
		]);
		animate(
			'.line-scroll-action',
			{
				clipPath: [
					'polygon(0% 0%, 100% 0, 100% 0, 0 0)',
					'polygon(0% 0%, 100% 0, 100% 100%, 0 100%)',
					'polygon(0% 0%, 100% 0, 100% 100%, 0 100%)',
					'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'
				]
			},
			{
				duration: 2,
				repeat: Infinity,
				offset: [0, 0.4, 0.6, 1],
				easing: 'ease-in-out',
				allowWebkitAcceleration: true
			}
		);
		scroll(
			timeline([
				[
					'.owner-name-first',
					{
						x: [0, 100]
					},
					{ easing: spring({ mass: 2, damping: 100 }), allowWebkitAcceleration: true }
				],
				[
					'.owner-name-second',
					{
						x: [0, -100]
					},
					{ at: '<', easing: spring({ mass: 2, damping: 100 }), allowWebkitAcceleration: true }
				],
				[
					'.owner-job-first',
					{
						x: [0, -200]
					},
					{ easing: spring({ mass: 2, damping: 200 }), at: '<', allowWebkitAcceleration: true }
				],
				[
					'.owner-job-last',
					{
						x: [0, 200]
					},
					{ easing: spring({ mass: 2, damping: 200 }), at: '<', allowWebkitAcceleration: true }
				]
			]),
			{ target: section, offset: ['start start', 'end start'] }
		);
		scroll(animate('.scroll-action', { opacity: [1, 0] }, { allowWebkitAcceleration: true }), {
			target: section,
			offset: ['start start', 'end start']
		});
	};

	onMount(() => {
		animation();
	});
</script>

<section bind:this={section}>
	<div class="visual">
		<div class="grid-wrapper">
			<img
				src="https://images.unsplash.com/photo-1670911170630-c9acad2e9da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt="Soaked in gold!"
				class="grayscale"
				bind:this={image}
			/>
			<div class="scroll-action">
				<div class="wrapper">
					<div class="line-scroll-action" />
					<div class="action">
						<span> Scroll Down </span>
						<span> & Explore </span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="title">
		<h1 class="owner display-xl" aria-label="Jonathan Galileo">
			<span aria-hidden="true" class="owner-name-first inline-flex overflow-hidden">
				{#each ownerName[0].split('') as char}
					<span aria-hidden="true">
						{char}
					</span>
				{/each}
			</span>
			<span aria-hidden="true" class="owner-name-second inline-flex overflow-hidden">
				{#each ownerName[1].split('') as char}
					<span aria-hidden="true">
						{char}
					</span>
				{/each}
			</span>
		</h1>
		<h2 class="job display-sm" aria-label="Photographer & Visual Artist">
			<span aria-hidden="true" class="owner-job-first"> Photographer </span>
			<span aria-hidden="true" class="owner-job-last ml-10"> & Visual Artist </span>
		</h2>
	</div>
</section>

<style lang="postcss">
	section {
		@apply container relative mx-auto flex min-h-screen flex-col;
	}
	.title {
		@apply absolute top-20;
		& > .owner {
			@apply flex flex-col text-alizarin;
		}
		& > .job {
			@apply ml-20 flex flex-col text-primary;
		}
	}

	.visual {
		@apply grid grid-cols-1 lg:grid-cols-2;
	}
	.grid-wrapper {
		@apply flex flex-col lg:col-start-2;
	}
	.scroll-action {
		@apply grid grid-cols-1 justify-items-center lg:grid-cols-2;
		& > .wrapper {
			@apply flex items-center gap-5 lg:col-start-2;
			& > .line-scroll-action {
				@apply block h-16 w-[2px] bg-alizarin;
			}
			& > .action {
				@apply inline-flex flex-col gap-1;
			}
		}
	}
</style>
