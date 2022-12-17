import type { Handle } from '@sveltejs/kit';
import { createContext } from '$lib/server/trpc/context';
import { router } from '$lib/server/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';
import SvelteKitAuth from '@auth/sveltekit';
import Auth0 from '@auth/core/providers/auth0';
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET } from '$env/static/private';

/**
 * Setup Authentication
 */
const authHandler: Handle = SvelteKitAuth({
	providers: [
		Auth0({ issuer: AUTH0_DOMAIN, clientId: AUTH0_CLIENT_ID, clientSecret: AUTH0_CLIENT_SECRET })
	]
});

/**
 * Setup API typesafe api.
 * Passes the above authentication in createContext to backend
 */
const trpcHandler: Handle = createTRPCHandle({
	router,
	createContext,
	onError: ({ type, path, error }) =>
		console.error(`Encountered error while trying to process ${type} @ ${path}:`, error)
});

export const handle = sequence(authHandler, trpcHandler);
