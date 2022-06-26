import { FastifyInstance } from 'fastify';

export default async function (server: FastifyInstance) {
	server.get('/', async (request, reply) => {
		return { name: 'Yazeed' };
	});

	server.get('/Homework', async (request, reply) => {
		return { name: 'Yazeed' };
	});
}
