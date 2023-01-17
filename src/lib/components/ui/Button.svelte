<script lang="ts">
	import cn from 'clsx';

	export let href: string | undefined = undefined;
	export let variant: 'outline' | 'fill' | 'naked' = 'outline';
	export let padding: 'sm' | 'md' | 'lg' | undefined = 'md';
	export let color: 'primary' | 'secondary' | 'alizarin' = 'alizarin';
	export let disabled: boolean | undefined = undefined;

	$: padding = variant === 'naked' ? undefined : padding;

	$: classes = cn(
		'root',
		variant,
		padding,
		{
			['alizarin-outline']: variant === 'outline' && color === 'alizarin',
			['alizarin-fill']: variant === 'fill' && color === 'alizarin',
			['primary-outline']: variant === 'outline' && color === 'primary',
			['primary-fill']: variant === 'fill' && color === 'primary',
			['secondary-outline']: variant === 'outline' && color === 'secondary',
			['secondary-fill']: variant === 'fill' && color === 'secondary',
			['text-alizarin']: variant === 'naked' && color === 'alizarin',
			['text-primary']: variant === 'naked' && color === 'primary',
			['text-secondary']: variant === 'naked' && color === 'secondary'
		},
		{
			['disabled']: disabled
		}
	);
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class={classes}
	{disabled}
	{...$$restProps}
	on:click
	on:mouseover
	on:focus
	on:keydown
>
	<slot />
	<slot name="icon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<line x1="5" y1="12" x2="19" y2="12" />
			<polyline points="12 5 19 12 12 19" />
		</svg>
	</slot>
</svelte:element>

<style lang="postcss">
	.root {
		@apply inline-flex max-w-fit flex-row items-center justify-center gap-x-2 text-lg;
	}
	.outline {
		@apply rounded-full;
	}
	.fill {
		@apply rounded-full;
	}
	.primary-fill {
		@apply border-primary bg-primary text-primary;
	}
	.primary-outline {
		@apply border-primary bg-secondary text-secondary;
	}
	.secondary-fill {
		@apply border-secondary bg-secondary text-secondary;
	}
	.secondary-outline {
		@apply border-secondary bg-primary text-secondary;
	}
	.alizarin-fill {
		@apply border-alizarin bg-alizarin text-white;
	}
	.alizarin-outline {
		@apply border-alizarin bg-primary text-alizarin;
	}
	.sm {
		@apply p-2;
	}
	.md {
		@apply p-3;
	}
	.lg {
		@apply p-4;
	}
	.disabled,
	.disabled:hover,
	.disabled:focus {
		@apply translate-y-0 cursor-not-allowed text-muted opacity-60 shadow-none grayscale;
	}
</style>
