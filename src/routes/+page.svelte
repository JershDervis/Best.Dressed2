<script lang="ts">
	import Page from '$components/Page.svelte';
	import Auth0LoginButton from '$lib/client/oauth/Auth0LoginButton.svelte';
	import Auth0LogoutButton from '$lib/client/oauth/Auth0LogoutButton.svelte';
	import { isAuthenticated, userInfo } from '$lib/client/oauth/auth0';
</script>

<Page title="Home" description="Vote on the best dressed at your party!">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	{#if $isAuthenticated}
		{#if $userInfo}
			<p>Welcome {$userInfo.name}</p>
		{/if}
		<Auth0LogoutButton class="btn-round btn">Logout</Auth0LogoutButton>
	{:else}
		<Auth0LoginButton class="btn-round btn">Login</Auth0LoginButton>
	{/if}
</Page>
