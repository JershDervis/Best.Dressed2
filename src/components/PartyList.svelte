<script lang="ts">
	import type { Party } from '@prisma/client';

	interface PartyProp extends Party {
		_count: {
			guests: number;
		};
	}

	export let parties: PartyProp[];
</script>

{#if parties.length > 0}
	{#each parties as party}
		<a
			href="/party/{party.id}"
			class="bg-indigo-800 hover:bg-indigo-700 text-accent-content rounded-box flex items-center p-4 shadow-xl"
		>
			<div class="flex-1 px-2">
				<h2 class="text-3xl font-extrabold">{party.name}</h2>
				<p class="text-sm text-opacity-80">
					{party._count.guests + ' ' + (party._count.guests == 1 ? 'guest' : 'guests')}
				</p>
			</div>
			<!-- <div class="flex-0">Test</div> -->
		</a>
	{/each}
{:else}
	<p>No parties to show here...</p>
{/if}
