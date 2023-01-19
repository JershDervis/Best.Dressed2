import { auth } from '$lib/server/trpc/middleware/auth';
import { t } from '$lib/server/trpc/t';
import { z } from 'zod';

// const ShowList = ['Guest', 'Host'] as const;

export const party = t.router({
	list: t.procedure
		.use(auth)
		// .input(z.enum(ShowList))
		.query(({ input, ctx }) =>
			ctx.prisma.party.findMany({
				where: {
					OR: [
						{ hosts: { some: { id: ctx.session.user.id } } },
						{ guests: { some: { id: ctx.session.user.id } } }
					]
				},
				include: {
					_count: {
						select: {
							guests: true
						}
					}
				},
				orderBy: { updatedAt: 'desc' }
			})
		),

	/**
	 * Load a party by ID
	 * @param input - party ID
	 */
	load: t.procedure.input(z.string()).query(({ ctx, input }) =>
		ctx.prisma.party.findUniqueOrThrow({
			where: { id: input },
			include: {
				hosts: {
					select: {
						id: true,
						name: true
					}
				},
				guests: {
					select: {
						id: true,
						name: true
					}
				}
			}
		})
	)
});
