import { auth } from '$lib/server/trpc/middleware/auth';
import { t } from '$lib/server/trpc/t';
// import { z } from 'zod';

export const party = t.router({
	list: t.procedure.use(auth).query(({ ctx }) =>
		ctx.prisma.party.findMany({
			select: {
				id: true,
				name: true,
				createdAt: true,
				updatedAt: true
				// _count: { select: { guests: true } }
			},
			where: {
				OR: [
					{ hosts: { some: { id: ctx.session.user.id } } },
					{ guests: { some: { id: ctx.session.user.id } } }
				]
			},
			orderBy: { updatedAt: 'desc' }
		})
	)
});
