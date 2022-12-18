import type { Handle } from '@sveltejs/kit';
import { createContext } from '$lib/server/trpc/context';
import { router } from '$lib/server/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';
import {
	AUTH0_DOMAIN,
	AUTH0_CLIENT_ID,
	AUTH0_CLIENT_SECRET,
	AUTH_SECRET
} from '$env/static/private';
import SvelteKitAuth from '@auth/sveltekit';
import Auth0 from '@auth/core/providers/auth0';
// import { prisma } from '$lib/server/db/prisma';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import type { Adapter } from '@auth/core/adapters';

/**
 * Setup Authentication
 */
const authHandler = SvelteKitAuth({
	secret: AUTH_SECRET,
	// callbacks: {
	// 	session({ session, user }) {
	// 		if (session.user) {
	// 			session.user.id = user.id;
	// 		}
	// 		return session; // The return type will match the one returned in `useSession()`
	// 	}
	// },
	// adapter: PrismaAdapter(prisma) as Adapter<boolean | undefined>,
	providers: [
		Auth0({ issuer: AUTH0_DOMAIN, clientId: AUTH0_CLIENT_ID, clientSecret: AUTH0_CLIENT_SECRET })
	]
}) satisfies Handle;

/**
 * Setup typesafe api.
 * Passes the above authentication in createContext to backend
 */
const trpcHandler = createTRPCHandle({
	router,
	createContext,
	onError: ({ type, path, error }) =>
		console.error(`Encountered error while trying to process ${type} @ ${path}:`, error)
}) satisfies Handle;

export const handle = sequence(authHandler, trpcHandler);
