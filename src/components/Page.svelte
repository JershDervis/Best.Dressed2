<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';

	export let title: string | undefined = undefined;
	export let description = "Vote on who's dressed the best at your party";

	const displayTitle = (title !== undefined ? title + ' • ' : '') + PUBLIC_APP_NAME;
</script>

<svelte:head>
	<title>{displayTitle}</title>
	<!-- <meta charset="utf-8" /> -->
	<meta name="description" content={description} />
	<meta name="viewport" content="width=device-width,initial-scale=1" />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://bestdressed.com" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={displayTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://svelte.dev/images/twitter-thumbnail.jpg" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="svelte.dev" />
	<meta property="twitter:url" content="https://bestdressed.com" />
	<meta name="twitter:title" content={displayTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://svelte.dev/images/twitter-thumbnail.jpg" />
</svelte:head>

<div class="container">
	<div class="flex flex-wrap gap-4 justify-center">
		<slot />
	</div>
</div>
