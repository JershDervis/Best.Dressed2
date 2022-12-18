import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

/**
 * At this stage, this needs to be called in all child
 * page server loads via 'await parent()' function.
 * Sveltekit issue: #6315 - need to basically make sure this is rerun
 * each navigation event
 * @param param0
 */
export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.getSession();
	// If not logged in, redirect to login
	if (session === null || session.user === undefined) throw redirect(303, '/');
	return {
		session
	};
};
