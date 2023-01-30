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
	AUTH_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	FACEBOOK_APP_ID,
	FACEBOOK_APP_SECRET,
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET
} from '$env/static/private';
import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import Facebook from '@auth/core/providers/facebook';
import Spotify from '@auth/core/providers/spotify';
import Credentials from '@auth/core/providers/credentials';
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
	callbacks: {
		session({ session, user }) {
			if (session.user) {
				session.user.id = user.id;
			}
			return session;
		}
	},
	providers: [
		Google({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		}),
		Facebook({
			clientId: FACEBOOK_APP_ID,
			clientSecret: FACEBOOK_APP_SECRET
		}),
		Spotify({
			clientId: SPOTIFY_CLIENT_ID,
			clientSecret: SPOTIFY_CLIENT_SECRET
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
