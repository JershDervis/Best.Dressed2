<script lang="ts">
	import Page from '$components/Page.svelte';
	import RegisterForm from '$components/RegisterForm.svelte';
	import { PUBLIC_CLOUD_NAME } from '$env/static/public';
	import { Cloudinary } from '@cloudinary/url-gen';
	import PartyList from '$components/party/PartyList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	// Create and configure your Cloudinary instance.
	// const cld = new Cloudinary({
	// 	cloud: {
	// 		cloudName: PUBLIC_CLOUD_NAME
	// 	}
	// });

	// Instantiate a CloudinaryImage object for the image with public ID, 'front_face'.
	// const myImage = cld.image('cld-sample');

	let preloadImageUrls: string[] = [];

	if (data.guestOf?.length !== undefined && data.guestOf.length > 0) {
		data.guestOf.forEach((party) => {
			party.guests.forEach((guest) => {
				if (guest.image) {
					preloadImageUrls.push(guest.image);
				}
			});
		});
	}
</script>

<svelte:head>
	{#each preloadImageUrls as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

<Page title="Home" description="Vote on the best dressed at your party!">
	{#if !data.session?.user}
		<div class="flex flex-wrap gap-6 justify-center">
			<!-- Title -->
			<div class="w-full">
				<h1 class="text-4xl font-bold tracking-tight text-center sm:text-6xl">
					<!-- Get your party started -->
					Get Started
				</h1>
				<p class="text-center mt-4">Create an account to get started...</p>
			</div>

			<!-- Sign-up Form -->
			<RegisterForm />
		</div>
	{:else}
		<div class="flex flex-wrap gap-4 justify-center">
			<!-- Display Parties the User is a host of -->
			<div class="card bg-base-200 p-4">
				<h1 class="text-4xl font-bold mb-2">Your Parties</h1>
				{#if data.hosting && data.hosting.length > 0}
					<PartyList parties={data.hosting} />
				{:else}
					<p>Create a party to get started!</p>
				{/if}
			</div>

			<!-- Display Parties the User is a guest at -->
			{#if data.guestOf && data.guestOf.length > 0}
				<div class="card bg-base-200 p-4">
					<h1 class="text-4xl font-bold mb-2">Guest Of</h1>
					<PartyList parties={data.guestOf} />
				</div>
			{/if}
		</div>
	{/if}
</Page>
