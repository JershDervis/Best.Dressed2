/* eslint-disable */
// @ts-nocheck

//  The above checks have been disabled because of a known ts issue in the latest version of next-auth
//  Read more here: https://github.com/nextauthjs/next-auth/issues/6174

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
import { SvelteKitAuth } from '@auth/sveltekit';
import Auth0 from '@auth/core/providers/auth0';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '$lib/server/prisma';

/**
 * Setup Authentication
 */
const authHandler = SvelteKitAuth({
	secret: AUTH_SECRET,
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: 'database',
		generateSessionToken: () => {
			return crypto.randomUUID();
		}
	},
	providers: [
		Auth0({
			issuer: AUTH0_DOMAIN,
			clientId: AUTH0_CLIENT_ID,
			clientSecret: AUTH0_CLIENT_SECRET
		})
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
