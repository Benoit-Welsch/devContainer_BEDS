import {} from '$middlewares';
import {} from '$plugins';
import { Elysia } from 'elysia';

const app = new Elysia()
	.get('/', () => 'Hello Elysia')
	.listen(3000, (app) => {
		console.log(`🦊 Elysia is running at ${app.hostname}:${app.port}`);
	});
