import { user } from '$lib/server/trpc/routes/user';
// import { books } from '$lib/trpc/routes/books';
// import { stores } from '$lib/trpc/routes/stores';
import { t } from '$lib/server/trpc/t';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

export const router = t.router({
	user
	// books,
	// stores
});

export type Router = typeof router;

// 👇 type helpers 💡
export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
