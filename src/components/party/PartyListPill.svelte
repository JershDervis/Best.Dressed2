<script lang="ts">
	import type { RouterOutput } from '$lib/client/trpc';

	export let party: RouterOutput['party']['list'][0];

	let hovering = false;
</script>

<div class="badge" on:mouseenter={() => (hovering = true)} on:mouseleave={() => (hovering = false)}>
	{party._count.guests + ' ' + (party._count.guests == 1 ? 'guest' : 'guests')}
</div>
{#if hovering && party._count.guests > 0}
	{@const amountNotDisplayed = party._count.guests - party.guests.length}
	<div class="avatar-group -space-x-6 absolute">
		{#each party.guests as guest}
			<div class="avatar">
				<div class="w-12">
					<img alt="guest profile" src={guest.image ?? '/person.svg'} />
				</div>
			</div>
		{/each}
		{#if amountNotDisplayed > 0}
			<div class="avatar placeholder">
				<div class="w-12 bg-neutral-focus text-neutral-content">
					<span>+{amountNotDisplayed}</span>
				</div>
			</div>
		{/if}
	</div>
{/if}
