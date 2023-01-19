import { createContext } from '$lib/server/trpc/context';
import { router } from '$lib/server/trpc/router';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	return {
		party: router.createCaller(await createContext(event)).party.load(event.params.party_uuid)
	};
};
