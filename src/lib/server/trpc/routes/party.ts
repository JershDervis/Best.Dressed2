import { auth } from '$lib/server/trpc/middleware/auth';
import { t } from '$lib/server/trpc/t';
import { z } from 'zod';

/**
 * Define a list of parties
 */
const UserPositionAtParty = z.enum(['all', 'guest', 'host']);

export const party = t.router({
	list: t.procedure
		.use(auth)
		.input(UserPositionAtParty.optional())
		.query(({ input, ctx }) =>
			ctx.prisma.party.findMany({
				where:
					UserPositionAtParty.parse(input) == UserPositionAtParty.Enum.guest
						? {
								guests: { some: { id: ctx.session.user.id } }
						  }
						: UserPositionAtParty.parse(input) == UserPositionAtParty.Enum.host
						? {
								hosts: { some: { id: ctx.session.user.id } }
						  }
						: UserPositionAtParty.parse(input) == UserPositionAtParty.Enum.all
						? {
								OR: [
									{ hosts: { some: { id: ctx.session.user.id } } },
									{ guests: { some: { id: ctx.session.user.id } } }
								]
						  }
						: undefined,
				include: {
					_count: {
						select: {
							guests: true, //  Count of total guests
							hosts: true //  Count of total hosts
						}
					},
					//  Profile images of the newest guests, to show a basic preview of guests
					guests: {
						select: {
							image: true
						},
						orderBy: {
							id: 'desc'
						},
						take: 4
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
