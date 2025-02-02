export {};

declare global {
	namespace Bun {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production';
			JWT_SECRETS: string;
		}
	}
}
