/* eslint-disable no-console */
import type { TItemName } from '#const-enums/CE_ITEM_NAME';
import type { TPaymentMethod } from '#const-enums/CE_PAYMENT_METHOD';
import mockupDispenseItem from '#mockups/mockupDispenseItem';
import displayItems from '#modules/items/displayItems';
import selectItem from '#modules/items/selectItem';
import validateItem from '#modules/items/validateItem';
import executePayment from '#modules/payments/executePayment';
import serializerResPostPayment from '#serializers/serializerPaymentDto';

export default async function operateVendingMachine(args: { name: TItemName; paymentMethod: TPaymentMethod }) {
  console.log('자판기 시작');

  console.log('상품 진열');
  // eslint-disable-next-line no-underscore-dangle
  const _itemEntities = await displayItems();

  console.log('상품 조회');
  const itemEntity = await selectItem({
    name: args.name,
  });

  console.log('상품 검증');
  validateItem({ itemEntity });

  console.log('상품 결제 실행');
  const { totalInsertedCash, changeMap } = await executePayment({ itemEntity, paymentMethod: args.paymentMethod });

  console.log('상품 배출');
  await mockupDispenseItem({ itemEntity });

  console.log('자판기 종료');
  return serializerResPostPayment({
    itemEntity,
    totalInsertedCash,
    changeMap,
  });
}
