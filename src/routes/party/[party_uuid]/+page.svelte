<script lang="ts">
	import Page from '$components/Page.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Page title={data.party.name}>
	<div class="card bg-base-200 p-4 max-w-sm md:max-w-md lg:max-w-4xl">
		<h1 class="text-4xl font-bold">{data.party.name}</h1>
		<p>Party UUID: {data.party.id}</p>
		<p>Party created at: {data.party.createdAt}</p>
		<p>Party updated at: {data.party.updatedAt}</p>

		<!-- Have a Party Feed? -->

		<h1 class="text-3xl font-bold">Guests</h1>
		{#each data.party.guests as guest}
			<div class="card">
				<h2 class="text-2xl font-bold">{guest.name}</h2>
			</div>
		{/each}
	</div>
</Page>
