import type { Config } from 'drizzle-kit';

export default {
	out: '../drizzle',
	schema: './src/db/schema.ts',
	dialect: 'sqlite',
	dbCredentials: {
		url: '../sqlite.db',
	},
	verbose: true,
	strict: true
} satisfies Config;
