// / <reference types="@auth/sveltekit" />
// / <reference types="@sveltejs/kit" />

import type { DefaultSession } from '@auth/core/types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	declare namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Session {
			user?: {
				id: string;
			} & DefaultSession['user'];
		}
	}
}

// declare global {
// 	declare namespace App {
// 		interface Session extends import('@auth/core').DefaultSession {
// 			user?: {
// 				id: string;
// 			} & import('@auth/core').DefaultSession['user'];
// 		}
// 		interface PageData {
// 			session: Session | null;
// 		}
// 	}
// }
