<script lang="ts">
	import { page } from '$app/stores';
	import { signOut, signIn } from '@auth/sveltekit/client';
	import Page from '$components/Page.svelte';

	const { session } = $page.data;
</script>

<Page title="Login" description="Login to get started">
	{#if !session}
		<h1>Sign in</h1>
		<p>This is a protected page. You need to sign in to access this page.</p>
		<button on:click={() => signIn('auth0')}>Sign in</button>
	{:else}
		<h1>Protected page</h1>
		<p>This is a protected content. You can access this content because you are signed in.</p>
		<p>Session expiry: {session?.expires}</p>
		<button on:click={async () => signOut}>Sign out</button>
	{/if}
</Page>
