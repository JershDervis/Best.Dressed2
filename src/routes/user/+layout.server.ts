import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

/**
 * Allows for all child routes to verify the user is authed
 * Redirects to login page if not authed
 * @param event
 * @returns
 */
export const load: LayoutServerLoad = async (event) => {
	const { session } = await event.parent();
	if (session === null || session.user === undefined) throw redirect(301, '/login');

	//  Default the user profile image if not set
	session.user.image ??= '/person.svg';

	return {
		session
	};
};
