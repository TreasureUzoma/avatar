<script lang="ts">
	import { meta } from '$lib/meta';
</script>

<svelte:head>
	<title>Documentation - {meta.siteName}</title>
	<meta name="description" content="Learn how to use the avatar generator API and integrate it into your projects." />
</svelte:head>

<div class="min-h-screen py-16 px-4 md:px-8">
	<div class="max-w-4xl mx-auto">
		<!-- Header -->
		<header class="mb-12">
			<a href="/" class="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
				← Back to Home
			</a>
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
			<p class="text-lg text-muted-foreground">
				Learn how to generate and use deterministic gradient avatars in your projects.
			</p>
		</header>

		<!-- Quick Start -->
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-4">Quick Start</h2>
			<p class="text-muted-foreground mb-4">
				Generate a unique avatar by simply entering any text. The same text will always produce the same avatar.
			</p>
			<div class="bg-muted p-6 rounded-lg">
				<code class="text-sm">
					{meta.siteUrl}/your-text-here
				</code>
			</div>
		</section>

		<!-- API Usage -->
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-4">API Usage</h2>
			<p class="text-muted-foreground mb-6">
				Use our API to dynamically generate avatars for your application.
			</p>

			<div class="space-y-6">
				<!-- Basic Example -->
				<div>
					<h3 class="text-lg font-medium mb-3">Basic Example</h3>
					<div class="bg-muted p-4 rounded-lg overflow-x-auto">
						<pre class="text-sm"><code>&lt;img src="{meta.siteUrl}/john-doe" alt="Avatar" /&gt;</code></pre>
					</div>
				</div>

				<!-- React Example -->
				<div>
					<h3 class="text-lg font-medium mb-3">React / Next.js</h3>
					<div class="bg-muted p-4 rounded-lg overflow-x-auto">
						<pre class="text-sm"><code>{`export function UserAvatar({ username }) {
  return (
    <img 
      src={\`${meta.siteUrl}/\${username}\`}
      alt={\`\${username} avatar\`}
      width={200}
      height={200}
    />
  );
}`}</code></pre>
					</div>
				</div>

				<!-- Svelte Example -->
				<div>
					<h3 class="text-lg font-medium mb-3">Svelte / SvelteKit</h3>
					<div class="bg-muted p-4 rounded-lg overflow-x-auto">
						<pre class="text-sm"><code>{`<script>
  let username = "john-doe";
</script>

<img 
  src="${meta.siteUrl}/{username}" 
  alt="{username} avatar"
  width="200"
  height="200"
/>`}</code></pre>
					</div>
				</div>

				<!-- Vue Example -->
				<div>
					<h3 class="text-lg font-medium mb-3">Vue / Nuxt</h3>
					<div class="bg-muted p-4 rounded-lg overflow-x-auto">
						<pre class="text-sm"><code>{`<template>
  <img 
    :src="\`${meta.siteUrl}/\${username}\`"
    :alt="\`\${username} avatar\`"
    width="200"
    height="200"
  />
</template>

<script setup>
const username = ref('john-doe');
</script>`}</code></pre>
					</div>
				</div>
			</div>
		</section>

		<!-- Features -->
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-4">Features</h2>
			<div class="grid md:grid-cols-2 gap-6">
				<div class="border border-border rounded-lg p-6">
					<h3 class="font-semibold mb-2">🎨 Deterministic</h3>
					<p class="text-sm text-muted-foreground">
						The same input always generates the same avatar. Perfect for consistent user identities.
					</p>
				</div>
				<div class="border border-border rounded-lg p-6">
					<h3 class="font-semibold mb-2">⚡ Fast</h3>
					<p class="text-sm text-muted-foreground">
						Pre-generated avatars served instantly with aggressive caching. No server processing needed.
					</p>
				</div>
				<div class="border border-border rounded-lg p-6">
					<h3 class="font-semibold mb-2">📦 Free & Open Source</h3>
					<p class="text-sm text-muted-foreground">
						Completely free to use. No API keys, no rate limits, no tracking.
					</p>
				</div>
				<div class="border border-border rounded-lg p-6">
					<h3 class="font-semibold mb-2">🎯 High Quality</h3>
					<p class="text-sm text-muted-foreground">
						Beautiful gradient designs in PNG format. Perfect for profile pictures.
					</p>
				</div>
			</div>
		</section>

		<!-- Technical Details -->
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-4">Technical Details</h2>
			<div class="space-y-4">
				<div>
					<h3 class="font-medium mb-2">Format</h3>
					<p class="text-sm text-muted-foreground">PNG (Portable Network Graphics)</p>
				</div>
				<div>
					<h3 class="font-medium mb-2">Resolution</h3>
					<p class="text-sm text-muted-foreground">High quality, suitable for web and mobile</p>
				</div>
				<div>
					<h3 class="font-medium mb-2">Caching</h3>
					<p class="text-sm text-muted-foreground">
						Avatars are cached for 1 year (immutable). Perfect for CDN distribution.
					</p>
				</div>
				<div>
					<h3 class="font-medium mb-2">Total Variants</h3>
					<p class="text-sm text-muted-foreground">50 unique gradient designs</p>
				</div>
			</div>
		</section>

		<!-- FAQ -->
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-4">FAQ</h2>
			<div class="space-y-6">
				<div>
					<h3 class="font-medium mb-2">How does it work?</h3>
					<p class="text-sm text-muted-foreground">
						We use a deterministic hash function to convert your text input into a number between 1-50. 
						That number maps to one of our pre-designed gradient avatars.
					</p>
				</div>
				<div>
					<h3 class="font-medium mb-2">Can I download the avatars?</h3>
					<p class="text-sm text-muted-foreground">
						Yes! Right-click on any avatar and save it as a PNG file. They're yours to use freely.
					</p>
				</div>
				<div>
					<h3 class="font-medium mb-2">Is there a rate limit?</h3>
					<p class="text-sm text-muted-foreground">
						No rate limits! Use it as much as you want. All avatars are pre-generated and cached.
					</p>
				</div>
				<div>
					<h3 class="font-medium mb-2">Can I use this commercially?</h3>
					<p class="text-sm text-muted-foreground">
						Yes! Feel free to use these avatars in your commercial projects. No attribution required.
					</p>
				</div>
			</div>
		</section>

		<!-- Support -->
		<section class="border-t border-border pt-8">
			<h2 class="text-2xl font-semibold mb-4">Need Help?</h2>
			<p class="text-muted-foreground mb-4">
				Found a bug or have a feature request? Open an issue on GitHub or reach out on X.
			</p>
			<div class="flex gap-4">
				<a
					href="https://github.com/treasureuzoma/avatar"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
				>
					View on GitHub
				</a>
				<a
					href={meta.developer.socials.x}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
				>
					Contact on X
				</a>
			</div>
		</section>
	</div>
</div>
