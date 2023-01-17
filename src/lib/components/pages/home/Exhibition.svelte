<script lang="ts">
	import SectionTitle from '$lib/components/common/SectionTitle.svelte';
	import ListCard from '$lib/components/common/ListCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section>
	<div class="wrapper">
		<SectionTitle content={`Exhibitions '22`} />
		<Button variant="naked" href="/exhibitions">View All</Button>
	</div>
	<div>
		<ListCard
			title="title"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
			image="https://images.unsplash.com/photo-1670513756456-6d51163ff25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
			date={new Date().toISOString()}
			url="https://google.com"
			location="data"
		/>
	</div>
</section>

<style lang="postcss">
	section {
		@apply container mx-auto flex flex-col gap-20;
	}
	.wrapper {
		@apply flex flex-row items-center justify-between;
	}
</style>
