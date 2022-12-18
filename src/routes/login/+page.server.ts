import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	// If logged in, redirect to app
	if (session?.user !== undefined) throw redirect(301, '/app');
	return {
		session
	};
};
