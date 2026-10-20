<script lang="ts">
	import { Input } from '$lib/components/ui/input';

	interface Props {
		text: string;
		onTextChange: (newText: string) => void;
	}

	let { text, onTextChange }: Props = $props();
	let debounceTimer: ReturnType<typeof setTimeout> | null = null;
	let localText = $state('');

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const value = target.value;

		// Update local state immediately for responsive UI
		localText = value;

		// Debounce the actual update to parent
		if (debounceTimer) {
			clearTimeout(debounceTimer);
		}

		debounceTimer = setTimeout(() => {
			onTextChange(value);
		}, 100);
	}

	$effect(() => {
		// Sync local state with prop changes from parent
		localText = text;
	});
</script>

<div class="space-y-2.5">
	<p class="text-muted-foreground">
		Enter any text you like below to generate a unique, reproducible avatar that matches your input.
	</p>
	<Input placeholder="enter any text" value={localText || ''} oninput={handleChange} />
</div>
