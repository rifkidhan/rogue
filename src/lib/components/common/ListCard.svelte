<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	export let title: string;
	export let description: string;
	export let image: string;
	export let altImage: string | undefined = undefined;
	export let url: string;
	export let date: string;
	export let location: string;

	const month = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
</script>

<div class="wrapper">
	<div class="image">
		<img src={image} alt={altImage ? altImage : title} />
	</div>
	<div class="content">
		<div class="info">
			<span>
				{location}
			</span>
			<span>
				{new Date(date).getFullYear().toString()}
			</span>
		</div>
		<h3 class="h3">
			{title}
		</h3>
		{description}
	</div>
	<div class="url" data-sveltekit-preload-data="off">
		<Button variant="naked" href={url} target="_blank" rel="noopener noreferrer">Buy ticket</Button>
	</div>
	<h3 class="date" aria-label={date}>
		<span>
			{month[new Date(date).getMonth()]}
		</span>
		<span class="display-lg">
			{new Date(date).getDate().toString()}
		</span>
	</h3>
</div>

<style lang="postcss">
	.wrapper {
		@apply relative grid grid-cols-12 place-items-center justify-items-center gap-5;
	}
	.image {
		@apply relative col-span-2 h-full w-full;
		& > img {
			@apply h-auto w-full object-cover object-center;
		}
	}
	.content {
		@apply col-span-6 flex flex-col gap-3;
	}
	.info {
		@apply inline-flex flex-row gap-x-4;
	}
	.url {
		@apply col-span-2 text-alizarin;
	}
	.date {
		@apply col-span-2 flex flex-col items-end text-alizarin;
	}
</style>
