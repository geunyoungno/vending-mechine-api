/* eslint-disable no-console */
import swaggerConfig from '#servers/plugins/swaggerConfig';
import swaggerUIConfig from '#servers/plugins/swaggerUIConfig';
import route from '#servers/route';
import StatusError from '#tools/StatusError';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import type { FastifyError, FastifyInstance } from 'fastify';
import fastify from 'fastify';
import { type IncomingMessage, type Server, type ServerResponse } from 'http';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const server: FastifyInstance = fastify<Server, IncomingMessage, ServerResponse>();

async function start() {
  await server.register(fastifySwagger, swaggerConfig());
  await server.register(fastifySwaggerUI, swaggerUIConfig());

  route(server);

  server.setErrorHandler((error: FastifyError, _req, reply) => {
    if (error instanceof StatusError) {
      return reply.status(error.statusCode).send({
        message: error.message,
      });
    }
    return reply.send(error);
  });

  server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}

start().catch((catched) => {
  const err = catched instanceof Error ? catched : new Error('unknown error raised');

  console.error(err);
});
