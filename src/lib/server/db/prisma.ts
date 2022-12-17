import { PrismaClient } from '@prisma/client';

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

export const prisma =
	global.prisma ||
	new PrismaClient({
		log: import.meta.env.DEV ? ['query', 'error', 'warn'] : ['error']
	});

if (!import.meta.env.PROD) {
	global.prisma = prisma;
}
