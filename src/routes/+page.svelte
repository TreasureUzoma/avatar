<script lang="ts">
	import ImagePreview from '$lib/components/image-preview.svelte';
	import InputForm from '$lib/components/input-form.svelte';

	let text = '';

	function handleTextChange(newText: string) {
		text = newText;
	}
</script>

<div class="flex min-h-screen items-center justify-center">
	<section
		class="flex min-h-screen w-full max-w-lg flex-col items-center justify-between py-32 px-16"
	>
		<ImagePreview {text} />
		<InputForm {text} onTextChange={handleTextChange} />
	</section>
</div>
