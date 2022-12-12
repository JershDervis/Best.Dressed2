import type { Auth0Client, User } from '@auth0/auth0-spa-js';
import { writable } from 'svelte/store';
import config from './auth0_config';

/**
 * Stores
 */
export const isLoading = writable(true);
export const isAuthenticated = writable(false);
export const authToken = writable<string | undefined>();
export const idToken = writable<string | undefined>();
export const userInfo = writable<User | undefined>();
export const authError = writable<Error | null>(null);

/**
 * Context Keys
 *
 * using an object literal means the keys are guaranteed not to conflict in any circumstance (since an object only has
 * referential equality to itself, i.e. {} !== {} whereas "x" === "x"), even when you have multiple different contexts
 * operating across many component layers.
 */
export let AUTH0_CONTEXT_CLIENT_PROMISE: Promise<Auth0Client>;

/**
 * Refresh the authToken store.
 *
 * @param {Promise<Auth0Client>} - auth0Promise
 */
export async function refreshToken(auth0Promise: Promise<Auth0Client>) {
	const auth0 = await auth0Promise;
	const token = await auth0.getTokenSilently();
	authToken.set(token);
}

/**
 * Initiate Register/Login flow.
 *
 * @param {Promise<Auth0Client>} - auth0Promise
 * @param {boolean} preserveRoute - store current location so callback handler will navigate back to it.
 */
export async function login(auth0Promise: Promise<Auth0Client>, preserveRoute = true) {
	const auth0 = await auth0Promise;

	// try to keep the user on the same page from which they triggered login. If set to false should typically
	// cause redirect to /.
	const appState = preserveRoute
		? { pathname: window.location.pathname, search: window.location.search }
		: {};

	await auth0.loginWithRedirect({ appState });
}

/**
 * Log out the current user.
 *
 * @param {Promise<Auth0Client>} - auth0Promise
 * @param {string} logout_url - specify the url to return to after login.
 */
export async function logout(auth0Promise: Promise<Auth0Client>) {
	const auth0 = await auth0Promise;
	authToken.set(undefined);
	await auth0.logout(config.logout_config);
}
