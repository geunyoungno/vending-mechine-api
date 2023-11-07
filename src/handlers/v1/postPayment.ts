import type IReqPostPayment from '#interfaces/payments/IReqPostPayment';
import type IResPostPayment from '#interfaces/payments/IResPostPayment';
import JSC_IReqPostPayment from '#interfaces/payments/JSC_IReqPostPayment';
import JSC_IResPostPayment from '#interfaces/payments/JSC_IResPostPayment';
import mockupDispenseChange from '#mockups/mockupDispenseChange';
import mockupDispenseItem from '#mockups/mockupDispenseItem';
import selectItem from '#modules/items/selectItem';
import executePayment from '#modules/payments/executePayment';
import serializerChangeDto from '#serializers/serializerChangeDto';
import serializerItemDto from '#serializers/serializerItemDto';
import type { FastifyInstance, FastifyRequest } from 'fastify';
import type { IncomingMessage, Server, ServerResponse } from 'http';

export async function postPaymentHandler(
  req: FastifyRequest<{
    Body: IReqPostPayment['body'];
    Params: IReqPostPayment['params'];
  }>,
): Promise<IResPostPayment> {
  // 상품 조회
  const itemEntity = await selectItem({
    name: req.body.name,
  });

  // 상품 결제
  const { totalInsertedCash, changeMap } = await executePayment({ itemEntity, paymentMethod: req.body.paymentMethod });

  // 거스름 돈 있을 경우 배출
  if (changeMap != null && changeMap.size > 0) {
    await mockupDispenseChange({ changeMap });
  }

  // 상품 배출
  await mockupDispenseItem({ itemEntity });

  return {
    item: serializerItemDto(itemEntity),
    cash:
      totalInsertedCash == null && changeMap == null
        ? undefined
        : {
            depositAmount: totalInsertedCash,
            change: changeMap == null ? undefined : serializerChangeDto(changeMap),
          },
  };
}

export function postPaymentRoute(server: FastifyInstance<Server, IncomingMessage, ServerResponse>): void {
  server.post(
    '/v1/payments',
    {
      schema: {
        summary: '결제 API',
        headers: JSC_IReqPostPayment.properties?.headers,
        body: JSC_IReqPostPayment.properties?.body,
        response: {
          200: JSC_IResPostPayment,
        },
      },
    },
    postPaymentHandler,
  );
}
