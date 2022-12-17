/// <reference types="@auth/sveltekit" />
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { User } from '@auth0/auth0-spa-js';

// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		user: any;
	}
	// interface PageData {}
	// interface Platform {}
}
