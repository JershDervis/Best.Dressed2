import prisma from '$lib/server/prisma';
// import { auth } from '$lib/trpc/middleware/auth';
import { logger } from '$lib/server/trpc/middleware/logger';
import { t } from '$lib/server/trpc/t';
// import { z } from 'zod';

export const user = t.router({
	list: t.procedure.use(logger).query(() =>
		prisma.user.findMany({
			select: {
				id: true
			},
			orderBy: { updatedAt: 'desc' }
		})
	)
});
