<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '$lib/components/footer.svelte';
	import { meta } from '$lib/meta';

	let { children } = $props();

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: meta.siteName,
		url: meta.siteUrl,
		description: meta.siteDescription,
		applicationCategory: 'DesignApplication',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		},
		creator: {
			'@type': 'Person',
			name: meta.developer.fullName,
			url: meta.developer.url
		},
		browserRequirements: 'Requires JavaScript. Requires HTML5.',
		softwareVersion: '1.0',
		operatingSystem: 'Any'
	};
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{meta.siteTitle}</title>
	<meta name="title" content={meta.siteTitle} />
	<meta name="description" content={meta.siteDescription} />
	<meta name="keywords" content={meta.keywords.join(', ')} />
	<meta name="author" content={meta.developer.fullName} />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />
	<meta name="theme-color" content="#3b82f6" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />

	<!-- Canonical URL -->
	<link rel="canonical" href={meta.siteUrl} />

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/favicon.png" />
	<link rel="manifest" href="/manifest.json" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={meta.siteUrl} />
	<meta property="og:title" content={meta.siteTitle} />
	<meta property="og:description" content={meta.siteDescription} />
	<meta property="og:image" content={meta.ogImage} />
	<meta property="og:site_name" content={meta.siteName} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={meta.siteUrl} />
	<meta property="twitter:title" content={meta.siteTitle} />
	<meta property="twitter:description" content={meta.siteDescription} />
	<meta property="twitter:image" content={meta.ogImage} />
	<meta property="twitter:creator" content={meta.twitterHandle} />
	<meta property="twitter:site" content={meta.twitterHandle} />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}

	<!-- Preconnect to improve performance -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
</svelte:head>

<ModeWatcher />

<main>{@render children()}</main>
<Footer />
