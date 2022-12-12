<script lang="ts">
	import type { Auth0Client } from '@auth0/auth0-spa-js';
	import { getContext } from 'svelte';
	import { AUTH0_CONTEXT_CLIENT_PROMISE, login } from './auth0';

	const auth0Promise: Promise<Auth0Client> = getContext(AUTH0_CONTEXT_CLIENT_PROMISE);
	export let preserveRoute: boolean | undefined = false;

	let className: string;
	export { className as class };
</script>

<button class={className} on:click|preventDefault={() => login(auth0Promise, preserveRoute)}>
	<slot />
</button>
