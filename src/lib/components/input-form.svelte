<script lang="ts">
	import { Input } from '$lib/components/ui/input';

	interface Props {
		text: string;
		onTextChange: (newText: string) => void;
	}

	let { text, onTextChange }: Props = $props();

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const value = target.value;

		onTextChange(value);
	}
</script>

<div class="space-y-2.5">
	<p class="text-muted-foreground">
		Enter any text you like below to generate a unique, reproducible avatar that matches your input.
	</p>
	<Input placeholder="enter any text" value={text || ''} oninput={handleChange} />
</div>
