<script lang="ts">
	import { spring, stagger, animate, inView } from 'motion';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const serviceChar = 'Services';

	const services = [
		{
			id: '01',
			title: 'Photo Shooting',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
		},
		{
			id: '02',
			title: 'Video Editing',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
		},
		{
			id: '03',
			title: 'Art Direction',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
		}
	];

	$: animation = () => {
		inView(
			'.title-content',
			() => {
				animate(
					'.title-content span',
					{
						opacity: [0, 1],
						y: [100, 0]
					},
					{
						delay: stagger(0.08),
						easing: spring({ mass: 2, damping: 100 }),
						allowWebkitAcceleration: true
					}
				);
			},
			{ margin: '-50% 0%' }
		);
		inView(
			'.service-item',
			(info) => {
				animate(
					info.target,
					{ x: [500, 0], opacity: [0, 1] },
					{ easing: spring({ mass: 2, damping: 100 }), allowWebkitAcceleration: true }
				);
			},
			{ margin: '-10% 0px' }
		);
	};

	onMount(() => {
		animation();
	});
</script>

<section>
	<div class="service-title">
		<h2 class="title-content h2" aria-label="Services">
			{#each serviceChar as char}
				<span aria-hidden="true" style:opacity="0" style:transform="translateY(0)">
					{char}
				</span>
			{/each}
		</h2>
	</div>

	<div class="services-wrapper">
		<div class="services-items">
			{#each services as service}
				<div class="wrapper-item">
					<div class="service-item" style:transform="translateX(100%)">
						<div class="item-id h3">{service.id}</div>
						<div class="item-title h3">{service.title}</div>
						<div class="item-content">{service.description}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		@apply container relative mx-auto flex flex-col;
	}
	.service-title {
		@apply sticky top-[33%] grid grid-cols-2;
		& > .title-content {
			@apply col-start-1 flex overflow-hidden text-primary;
		}
	}
	.services-wrapper {
		@apply grid grid-cols-2 overflow-hidden;
		& > .services-items {
			@apply relative col-start-2 flex flex-col;
			& > .wrapper-item {
				@apply relative flex h-screen flex-col items-center justify-end;
				& > .service-item {
					@apply grid grid-cols-8;
					& > .item-id {
						@apply text-alizarin;
					}
					& > .item-title {
						@apply col-span-7;
					}
					& > .item-content {
						@apply col-span-7 col-start-2;
					}
				}
			}
		}
	}
</style>
