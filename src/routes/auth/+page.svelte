<!-- ./auth -->
<script lang="ts">
	import Page from '$components/Page.svelte';
	import { isAuthenticated } from '$lib/client/oauth/auth0';
	import Auth0LoginButton from '$lib/client/oauth/Auth0LoginButton.svelte';
	import Auth0LogoutButton from '$lib/client/oauth/Auth0LogoutButton.svelte';
</script>

<Page title="Login">
	{#if $isAuthenticated}
		<Auth0LogoutButton class="btn-round btn">Logout</Auth0LogoutButton>
	{:else}
		<Auth0LoginButton class="btn-round btn">Login</Auth0LoginButton>
	{/if}
</Page>
