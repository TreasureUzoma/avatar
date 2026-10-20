<script lang="ts">
	import ImagePreview from '$lib/components/image-preview.svelte';
	import InputForm from '$lib/components/input-form.svelte';
	import { meta } from '$lib/meta';

	let text = '';

	function handleTextChange(newText: string) {
		text = newText;
	}
</script>

<article class="flex min-h-screen items-center justify-center relative">
	<!-- Docs Link -->
	<a
		href="/docs"
		class="absolute top-6 right-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
	>
		Documentation
	</a>

	<section
		class="flex min-h-screen w-full max-w-lg flex-col items-center justify-center space-y-17 md:space-y-0 md:justify-between py-32 px-16"
		aria-label="Avatar Generator"
	>
		<header class="sr-only">
			<h1>Free Generative Avatar Generator</h1>
			<p>{meta.siteDescription}</p>
		</header>

		<ImagePreview {text} />
		<InputForm {text} onTextChange={handleTextChange} />
	</section>
</article>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
