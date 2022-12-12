<script lang="ts">
	import '../app.css';
	import Auth0Context from '$lib/client/oauth/Auth0Context.svelte';
</script>

<Auth0Context>
	<slot />
</Auth0Context>
