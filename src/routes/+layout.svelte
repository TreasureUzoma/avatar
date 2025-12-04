<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '$lib/components/footer.svelte';
	import { meta } from '$lib/meta';

	let { children } = $props();
</script>

<svelte:head>
	<title>{meta.siteTitle}</title>
	<meta name="description" content={meta.siteDescription} />
	<link rel="canonical" href={meta.siteUrl} />
	<link rel="icon" type="image/png" href="/favicon.ico" />
	<meta
		name="keywords"
		content="generative avatar, random profile picture, gradient pfp, minimalist avatar, identicon, profile generator, abstract avatar, idolo avatars, outspace studios avatar, outspace studios avatar api, random avatar api"
	/>
</svelte:head>

<ModeWatcher />

<main>{@render children()}</main>
<Footer />
