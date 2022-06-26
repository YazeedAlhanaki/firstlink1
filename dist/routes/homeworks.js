"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(server) {
    server.get('/', async (request, reply) => {
        return { hello: 'world im ali' };
    });
    server.get('/Homework', async (request, reply) => {
        return { hello: 'done with the homework' };
    });
}
exports.default = default_1;
