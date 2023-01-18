<script lang="ts">
	import type { Party } from '@prisma/client';

	export let parties: Party[];
</script>

<div class="flex p-1">
	{#each parties as party}
		<button
			class="bg-base-100 hover:bg-base-300 text-accent-content rounded-box flex items-center p-4 shadow-xl"
		>
			<div class="flex-1 px-2">
				<h2 class="text-3xl font-extrabold">{party.name}</h2>
				<p class="text-sm text-opacity-80">{party.id}</p>
			</div>
			<!-- <div class="flex-0">Test</div> -->
		</button>
	{/each}
</div>
