<script lang="ts">
	import Page from '$components/Page.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { user } = data.session;
</script>

<Page title="Profile" description="Update user profile settings">
	<h1>Profile</h1>
	<p>Hi {user?.name}!</p>
</Page>
