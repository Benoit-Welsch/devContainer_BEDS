import type { Config } from 'drizzle-kit';

export default {
	out: '../drizzle',
	schema: './src/db/schema.ts',
	driver: 'better-sqlite',
	verbose: true,
	strict: true
} satisfies Config;
