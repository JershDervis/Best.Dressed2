import { logger } from '$lib/server/trpc/middleware/logger';
import { t } from '$lib/server/trpc/t';
import { z } from 'zod';

export const user = t.router({});
