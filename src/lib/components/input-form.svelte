<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	interface Props {
		text: string;
	}

	let { text }: Props = $props();

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const value = target.value;
		const params = new URLSearchParams($page.url.searchParams);

		if (value) {
			params.set('text', value);
		} else {
			params.delete('text');
		}

		goto(`?${params.toString()}`, { replaceState: true, keepFocus: true });
	}
</script>

<div class="space-y-2.5">
	<p class="text-muted-foreground">
		Enter any text you like below to generate a unique, reproducible avatar that matches your input.
	</p>
	<Input placeholder="enter any text" value={text || ''} oninput={handleChange} />
</div>
