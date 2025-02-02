import swagger from '@elysiajs/swagger';

export default swagger({
	documentation: {
		security: [
			{
				bearerAuth: [],
			},
		],
	},
});
