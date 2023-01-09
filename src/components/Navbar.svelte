<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import type { Session } from '@auth/core/types';

	export let session: Session | null;

	const userImage = $page.data?.session?.user?.image ?? '/person.svg';

	const isUserLogged = session?.user !== undefined;

	type NavLink = {
		name: string;
		href: string | Function;
		bindDisplay: boolean;
	};

	const navLinks = [
		{ name: 'Home', href: '/', bindDisplay: true },
		{ name: 'About', href: '/about', bindDisplay: true },
		{ name: 'Contact', href: '/contact', bindDisplay: true }
	] satisfies NavLink[];

	const profileLinks = [
		{ name: 'Login', href: '/login', bindDisplay: !isUserLogged },
		{ name: 'Profile', href: '/user/profile', bindDisplay: isUserLogged },
		{ name: 'Settings', href: '/user/settings', bindDisplay: isUserLogged },
		{ name: 'Logout', href: () => signOut({ callbackUrl: '/' }), bindDisplay: isUserLogged }
	] satisfies NavLink[];
</script>

<div class="drawer">
	<input id="drawer-navbar" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar bg-base-300 gap-2 absolute">
			<div class="flex-none lg:hidden">
				<label for="drawer-navbar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<div class="flex-1 px-2 mx-2">
				<a href="/" class="btn btn-ghost normal-case text-xl">
					<img class="w-6 h-6 mr-4" alt="Best Dressed" src="/party.svg" />
					Best Dressed
				</a>
			</div>
			<div class="flex-none hidden lg:block gap-2">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					{#each navLinks as link}
						<li>
							{#if typeof link.href === 'string'}
								<a class="rounded-md" href={link.href}>{link.name}</a>
							{:else if typeof link.href === 'function'}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-missing-attribute -->
								<a class="rounded-md" on:click={link.href}>{link.name}</a>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
			<div class="flex-none dropdown dropdown-end">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						{#if $page.data?.session?.user?.image}
							<!-- svelte-ignore a11y-missing-attribute -->
							<img src={userImage} />
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="inline-block w-10 stroke-current"
								viewBox="0 0 16 16"
							>
								<path
									d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
								/>
							</svg>
						{/if}
					</div>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
				>
					{#each profileLinks as link}
						{#if link.bindDisplay}
							{#if typeof link.href === 'string'}
								<li><a href={link.href}>{link.name}</a></li>
							{:else if typeof link.href === 'function'}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-missing-attribute -->
								<li><a on:click={link.href}>{link.name}</a></li>
							{/if}
						{/if}
					{/each}
				</ul>
			</div>
		</div>
		<!-- Page content here -->
		<div class="flex items-center justify-center h-screen">
			<slot />
		</div>
	</div>
	<div class="drawer-side">
		<label for="drawer-navbar" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-300">
			<!-- Sidebar content here -->
			{#each navLinks as link}
				{#if link.bindDisplay}
					{#if typeof link.href === 'string'}
						<li><a href={link.href}>{link.name}</a></li>
					{:else if typeof link.href === 'function'}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a on:click={link.href}>{link.name}</a></li>
					{/if}
				{/if}
			{/each}
		</ul>
	</div>
</div>
