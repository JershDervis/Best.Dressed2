import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	// IMPORTANT: Rerun auth check from the layout - redirects user to login if not authed
	const parent = await event.parent();

	//  Fetch info about the user from the database

	return {
		session: parent.session
	};
};
