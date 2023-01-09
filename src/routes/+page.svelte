<script lang="ts">
	import Page from '$components/Page.svelte';
	import RegisterForm from '$components/RegisterForm.svelte';
	import { PUBLIC_CLOUD_NAME } from '$env/static/public';
	import { Cloudinary } from '@cloudinary/url-gen';
	import type { PageData } from './$types';

	export let data: PageData;

	// Create and configure your Cloudinary instance.
	const cld = new Cloudinary({
		cloud: {
			cloudName: PUBLIC_CLOUD_NAME
		}
	});

	// Instantiate a CloudinaryImage object for the image with public ID, 'front_face'.
	const myImage = cld.image('cld-sample');
</script>

<Page title="Home" description="Vote on the best dressed at your party!">
	{#if !data.session?.user}
		<div class="flex flex-wrap gap-6 justify-center">
			<!-- Title -->
			<div class="w-full">
				<h1 class="text-4xl font-bold tracking-tight text-center sm:text-6xl">
					Get your party started
				</h1>
				<p class="text-center mt-4">Create an account to get started...</p>
			</div>

			<!-- Sign-up Form -->
			<RegisterForm />
		</div>
	{:else}
		<div class="flex flex-col justify-center items-center">
			<h1 class="text-4xl font-bold">Welcome to the party!</h1>
			<p class="text-xl">Vote on the best dressed at your party!</p>
		</div>
	{/if}
</Page>
