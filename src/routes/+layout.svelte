<script lang="ts">
	import '../app.css';
	import Navbar from '$components/Navbar.svelte';
	import type { PageData } from './$types';

	// This is the data that will be passed to the page
	export let data: PageData;
</script>

<Navbar session={data.session}>
	<slot />
</Navbar>
