import type { FastifyInstance, FastifyRequest } from 'fastify';
import type { IncomingMessage, Server, ServerResponse } from 'http';

export async function getHealthHandler(_req: FastifyRequest) {
  return {
    timestamp: new Date().toISOString(),
  };
}

export function getHealthRoute(server: FastifyInstance<Server, IncomingMessage, ServerResponse>): void {
  server.get(
    '/',
    {
      schema: {},
    },
    getHealthHandler,
  );
}
