import type { Router } from '$lib/server/trpc/router';
import type { inferRouterOutputs } from '@trpc/server';
import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';

let browserClient: ReturnType<typeof createTRPCClient<Router>>;

// type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;

export function trpc(init?: TRPCClientInit) {
	if (typeof window === 'undefined') return createTRPCClient<Router>({ init });
	if (!browserClient) browserClient = createTRPCClient<Router>();
	return browserClient;
}
