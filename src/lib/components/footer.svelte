<script lang="ts">
	import { meta } from '$lib/meta';
	import ThemeToggle from './theme-toggle.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="w-full border-t border-border py-6 px-4 md:px-[5rem] text-sm font-medium">
	<div class="max-w-screen-xl mx-auto space-y-4">
		<!-- Main Footer Row -->
		<div class="flex flex-col md:flex-row items-center justify-between gap-4">
			<div class="space-x-4 flex items-center">
				<a href="/" class="font-semibold text-primary">
					{meta.siteName}
				</a>

				<div>
					<ThemeToggle />
				</div>
			</div>

			<div class="flex flex-wrap items-center gap-5 md:gap-7.5 justify-center">
				<a
					href={meta.developer.url}
					class="hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					Developer
				</a>
				<a
					href="https://github.com/treasureuzoma/avatar"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:underline"
				>
					View Source
				</a>
				<a
					href={meta.developer.socials.x}
					target="_blank"
					rel="noopener noreferrer"
					class="hover:underline"
				>
					X
				</a>
			</div>

			<div class="text-xs">&copy; {currentYear}</div>
		</div>

		<!-- Credits Row -->
		<div class="text-center text-xs text-muted-foreground border-t border-border/50 pt-4">
			Avatar designs by{' '}
			<a
				href="https://outpace.systems/"
				class="font-medium text-foreground hover:underline"
				target="_blank"
				rel="noopener noreferrer"
			>
				Outpace Studios
			</a>
			{' '}• Handcrafted with care
		</div>
	</div>
</footer>
