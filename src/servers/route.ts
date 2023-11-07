import { getHealthRoute } from '#handlers/getHealth';
import { getItemRoute } from '#handlers/v1/getItem';
import { getItemsRoute } from '#handlers/v1/getItems';
import { postPaymentRoute } from '#handlers/v1/postPayment';
import type { FastifyInstance } from 'fastify';

export default function route(fastify: FastifyInstance): void {
  getHealthRoute(fastify);
  getItemRoute(fastify);
  getItemsRoute(fastify);
  postPaymentRoute(fastify);
}
