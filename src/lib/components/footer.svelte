<script lang="ts">
	import { meta } from '$lib/meta';
	import ThemeToggle from './theme-toggle.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="w-full border-t border-border py-8 px-4 md:px-8 text-sm">
	<div class="max-w-screen-xl mx-auto">
		<!-- Main Footer Grid -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
			<!-- Brand Section -->
			<div class="space-y-3">
				<a href="/" class="font-semibold text-lg text-primary inline-block">
					{meta.siteName}
				</a>
				<p class="text-muted-foreground text-xs leading-relaxed max-w-xs">
					Generate unique, deterministic gradient avatars instantly. Free and open source.
				</p>
			</div>

			<!-- Links Section -->
			<div class="space-y-3">
				<h3 class="font-semibold text-sm">Resources</h3>
				<nav class="flex flex-col gap-2">
					<a href="/docs" class="text-muted-foreground hover:text-foreground transition-colors">
						Documentation
					</a>
					<a
						href="https://github.com/treasureuzoma/avatar"
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-foreground transition-colors"
					>
						GitHub
					</a>
					<a
						href={meta.developer.url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-foreground transition-colors"
					>
						Developer
					</a>
				</nav>
			</div>

			<!-- Connect Section -->
			<div class="space-y-3">
				<h3 class="font-semibold text-sm">Connect</h3>
				<nav class="flex flex-col gap-2">
					<a
						href={meta.developer.socials.x}
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-foreground transition-colors"
					>
						X (Twitter)
					</a>
					<a
						href={meta.developer.socials.github}
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-foreground transition-colors"
					>
						GitHub Profile
					</a>
				</nav>
				<div class="pt-2">
					<ThemeToggle />
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
		>
			<div class="text-xs text-muted-foreground">
				&copy; {currentYear}
				{meta.siteName}. All rights reserved.
			</div>

			<div class="text-xs text-muted-foreground text-center">
				Avatar designs by{' '}
				<a
					href="https://www.outpacestudios.com/"
					class="font-medium text-foreground hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					Outpace Studios
				</a>
			</div>
		</div>
	</div>
</footer>
