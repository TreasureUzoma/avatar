<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { generateDeterministicNumber } from '$lib/deterministic-hash';
	import { onMount } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';

	interface Props {
		text: string;
	}

	let { text }: Props = $props();
	let isLoading = $state(false);
	let currentAvatarNumber = $derived(generateDeterministicNumber(text));
	let imageCache = new SvelteSet<number>();

	// Preload avatar images on mount for faster switching
	onMount(() => {
		// Phase 1: Load first 15 immediately (most commonly hit)
		const priorityImages = Array.from({ length: 15 }, (_, i) => i + 1);
		priorityImages.forEach((num) => {
			const img = new Image();
			img.src = `/avatars/${num}.png`;
			img.onload = () => imageCache.add(num);
		});

		// Phase 2: Load remaining 35 with delay (background)
		setTimeout(() => {
			const remainingImages = Array.from({ length: 35 }, (_, i) => i + 16);
			remainingImages.forEach((num, index) => {
				setTimeout(() => {
					const img = new Image();
					img.src = `/avatars/${num}.png`;
					img.onload = () => imageCache.add(num);
				}, index * 100); // Stagger over 3.5 seconds
			});
		}, 500);
	});

	// Track loading state for current image
	$effect(() => {
		if (!imageCache.has(currentAvatarNumber)) {
			isLoading = true;
			const img = new Image();
			img.src = `/avatars/${currentAvatarNumber}.png`;
			img.onload = () => {
				imageCache.add(currentAvatarNumber);
				isLoading = false;
			};
		} else {
			isLoading = false;
		}
	});

	// Compute opacity class
	let avatarClass = $derived(
		`flex-shrink-0 rounded-full w-[11rem] md:w-[14rem] h-[11rem] md:h-[14rem] transition-opacity duration-200 ${isLoading ? 'opacity-70' : ''}`
	);
</script>

<div class="relative">
	<Avatar.Root class={avatarClass}>
		<Avatar.Image alt="Gradient avatar for {text}" src="/avatars/{currentAvatarNumber}.png" />
		<Avatar.Fallback></Avatar.Fallback>
	</Avatar.Root>
	{#if isLoading}
		<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
			<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
		</div>
	{/if}
</div>
