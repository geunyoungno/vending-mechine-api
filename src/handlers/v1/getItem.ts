import type IReqGetItem from '#interfaces/items/IReqGetItem';
import type IResGetItem from '#interfaces/items/IResGetItem';
import JSC_IReqGetItem from '#interfaces/items/JSC_IReqGetItem';
import JSC_IResGetItem from '#interfaces/items/JSC_IResGetItem';
import selectItem from '#modules/items/selectItem';
import validateItem from '#modules/items/validateItem';
import serializerItemDto from '#serializers/serializerItemDto';
import type { FastifyInstance, FastifyRequest } from 'fastify';
import type { IncomingMessage, Server, ServerResponse } from 'http';

export async function getItemHandler(
  req: FastifyRequest<{
    Headers: IReqGetItem['headers'];
    Params: IReqGetItem['params'];
  }>,
): Promise<IResGetItem> {
  // 상품 조회
  const selectedItemEntity = await selectItem({
    name: req.params.name,
  });

  // 상품 검증
  validateItem({ itemEntity: selectedItemEntity });

  return serializerItemDto(selectedItemEntity);
}

export function getItemRoute(server: FastifyInstance<Server, IncomingMessage, ServerResponse>): void {
  server.get(
    '/v1/items/:name',
    {
      schema: {
        summary: '상품 조회 API - 상품 검증',
        headers: JSC_IReqGetItem.properties?.headers,
        params: JSC_IReqGetItem.properties?.params,
        response: {
          200: JSC_IResGetItem,
        },
      },
    },
    getItemHandler,
  );
}
