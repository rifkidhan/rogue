<script lang="ts">
	import { page } from '$app/stores';
	import { menuState } from '$lib/stores/ui';

	const menus = [
		{
			id: '01',
			title: 'Home',
			link: ''
		},
		{
			id: '02',
			title: 'Projects',
			link: 'projects'
		},
		{
			id: '03',
			title: 'Exhibitions',
			link: 'exhibitions'
		},
		{
			id: '04',
			title: 'About',
			link: 'about'
		},
		{
			id: '05',
			title: 'Contact',
			link: 'contact'
		}
	];

	$: pathname = $page.url.pathname;
</script>

<nav>
	<div class="wrapper">
		{#each menus as menu}
			<a href="/{menu.link}" class="menu-item" on:click={() => ($menuState = false)}>
				<span class="number">
					{menu.id}
				</span>
				<span
					class="title"
					class:active={(pathname.includes(menu.link) && menu.id !== '01') ||
						(pathname.length === 1 && menu.id === '01')}>{menu.title}</span
				>
			</a>
		{/each}
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply flex h-full flex-col items-center justify-center bg-primary;
	}
	.wrapper {
		@apply flex flex-col gap-10;
	}
	.menu-item {
		@apply inline-flex flex-row items-center gap-x-12;
		& > .number {
			@apply text-3xl text-alizarin;
		}
		& > .title {
			@apply text-8xl text-primary;
		}
	}
	.active {
		@apply !text-alizarin;
	}
</style>
