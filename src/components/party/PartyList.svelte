<script lang="ts">
	import type { RouterOutput } from '$lib/client/trpc';
	import PartyListPill from '$components/party/PartyListPill.svelte';

	export let parties: RouterOutput['party']['list'];

	// Pre-cache images
	let preloadImageUrls: string[] = [];
	parties.forEach((party) => {
		party.guests.forEach((guest) => {
			if (guest.image) preloadImageUrls.push(guest.image);
		});
	});
</script>

<svelte:head>
	<!-- TODO: Pre-cache profile images -->
	{#each preloadImageUrls as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

{#if parties.length > 0}
	{#each parties as party}
		<a
			href="/party/{party.id}"
			class="bg-indigo-800 hover:bg-indigo-700 text-accent-content rounded-box flex items-center p-4 shadow-xl max-w-sm md:max-w-md"
		>
			<div class="flex-1 px-2">
				<h2 class="text-3xl font-extrabold">{party.name}</h2>
				<PartyListPill {party} />
			</div>
			<!-- <div class="flex-0">Test</div> -->
		</a>
	{/each}
{:else}
	<p>No parties to show here...</p>
{/if}
