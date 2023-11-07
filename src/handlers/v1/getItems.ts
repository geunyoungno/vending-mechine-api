import type IReqGetItems from '#interfaces/items/IReqGetItems';
import type IResGetItems from '#interfaces/items/IResGetItems';
import JSC_IReqGetItems from '#interfaces/items/JSC_IReqGetItems';
import JSC_IResGetItems from '#interfaces/items/JSC_IResGetItems';
import displayItems from '#modules/items/displayItems';
import serializerItemDto from '#serializers/serializerItemDto';
import type { FastifyInstance, FastifyRequest } from 'fastify';
import type { IncomingMessage, Server, ServerResponse } from 'http';

export async function getItemsHandler(
  _req: FastifyRequest<{
    Headers: IReqGetItems['headers'];
  }>,
): Promise<IResGetItems> {
  const itemEntities = await displayItems();
  const items = itemEntities.map(serializerItemDto);

  return {
    items,
  };
}

export function getItemsRoute(server: FastifyInstance<Server, IncomingMessage, ServerResponse>): void {
  server.get(
    '/v1/items',
    {
      schema: {
        summary: '상품 목록 조회 API - 상품 진열',
        headers: JSC_IReqGetItems.properties?.headers,
        response: {
          200: JSC_IResGetItems,
        },
      },
    },
    getItemsHandler,
  );
}
