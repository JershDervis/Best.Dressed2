import { PrismaClient } from '@prisma/client';
import { DATABASE_URL } from '$env/static/private';

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

const client =
	globalThis.prisma || new PrismaClient({ datasources: { db: { url: DATABASE_URL } } });
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
