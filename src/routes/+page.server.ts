import type { PageServerLoad } from './$types';
import { createContext } from '$lib/server/trpc/context';
import { router } from '$lib/server/trpc/router';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	return {
		hosting: session?.user
			? router.createCaller(await createContext(event)).party.list('host')
			: null,
		guestOf: session?.user
			? router.createCaller(await createContext(event)).party.list('guest')
			: null
	};
};
