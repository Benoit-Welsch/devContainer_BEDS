import jwtPlugin, { type JWTPayloadSpec } from '@elysiajs/jwt';
import Elysia from 'elysia';
import { HttpError } from 'elysia-http-error';

interface userJWT extends JWTPayloadSpec {
	id: number;
}

const authError = HttpError.Unauthorized;

const auth = new Elysia({ name: 'Service.Auth' })
	.use(
		jwtPlugin({
			name: 'jwt',
			secret: process.env.JWT_SECRETS || 'superSecretJWT666',
		}),
	)
	.derive({ as: 'global' }, ({ headers, jwt }) => {
		const token = headers?.authorization?.slice(7).trim();
		return {
			Auth: {
				isAuth: () => jwt.verify(token || '') as Promise<false | userJWT>,
				signJwt: (u: { id: number }) => jwt.sign({ ...u }),
			},
		};
	})
	.macro({
		isSignIn: (value: boolean) => ({
			beforeHandle: async ({ Auth }) => {
				const user = await Auth?.isAuth();
				if (!value) return;
				if (!user) throw authError('You are not logged in');
			},
			resolve: async ({ Auth }) => ({ user: (await Auth?.isAuth()) as userJWT }),
		}),
		role: (value: string) => ({
			beforeHandle: async ({ Auth }) => {
				const user = await Auth.isAuth();
				if (!value) return;
				if (!user) throw authError('You are not logged in');
				// if (user.role !== value) throw authError('You are not authorized');
			},
			resolve: async ({ Auth }) => ({ user: (await Auth?.isAuth()) as userJWT }),
		}),
	});

export default auth;
