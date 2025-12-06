<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { generateDeterministicNumber } from '$lib/deterministic-hash';

	interface Props {
		text: string;
	}

	let { text }: Props = $props();
</script>

<Avatar.Root class="flex-shrink-0 rounded-full w-[11rem] md:w-[14rem] h-[11rem] md:h-[14rem]">
	<Avatar.Image
		alt="Gradient image {text}"
		src="/avatars/{generateDeterministicNumber(text)}.png"
	/>
	<Avatar.Fallback></Avatar.Fallback>
</Avatar.Root>
