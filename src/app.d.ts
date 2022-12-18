// / <reference types="@sveltejs/kit" />
// / <reference types="@auth/sveltekit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {	}
	// interface PageData {}
	// interface Platform {}
}

declare global {
	declare namespace App {
		interface Session extends import('@auth/core').DefaultSession {
			user?: {
				id: string;
			} & import('@auth/core').DefaultSession['user'];
		}
		interface PageData {
			session: Session | null;
		}
	}
}
