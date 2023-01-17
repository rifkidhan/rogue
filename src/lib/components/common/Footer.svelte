<script lang="ts">
	const footerLink = [
		{ name: 'LinkedIn', url: 'https://linkedin.com' },
		{ name: 'Twitter', url: 'https://twitter.com' },
		{ name: 'Facebook', url: 'https://facebook.com' }
	];
</script>

<footer>
	<div class="bottom">
		<div>Build by Rifki Ramadhan</div>
		<div data-sveltekit-preload-data="off" class="link">
			{#each footerLink as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer">
					{link.name}
				</a>
			{/each}
		</div>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply container mx-auto my-10 flex flex-col;
	}
	.bottom {
		@apply flex flex-row items-center justify-between;
		& > .link {
			@apply inline-flex flex-row gap-3 uppercase;
		}
	}
</style>
