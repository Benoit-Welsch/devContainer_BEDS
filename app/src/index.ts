import { auth } from '$middlewares';
import { cors, httpError, swagger } from '$plugins';
import { Elysia } from 'elysia';

const app = new Elysia()
	.use(swagger)
	.use(cors)
	.use(httpError)
	.use(auth)
	.listen(3000, (app) => {
		console.log(`🦊 Elysia is running at http://${app.hostname}:${app.port}`);
	});
