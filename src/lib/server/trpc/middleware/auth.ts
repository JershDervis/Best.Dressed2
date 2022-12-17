import { t } from '$lib/server/trpc/t';
import { TRPCError } from '@trpc/server';

export const auth = t.middleware(async ({ next, ctx }) => {
	if (!ctx.session || !ctx.session.user) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}
	return next({
		ctx: {
			// infers the `session` as non-nullable
			session: { ...ctx.session, user: ctx.session.user }
		}
	});
});
