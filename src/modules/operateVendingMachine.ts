import type { TItemName } from '#const-enums/CE_ITEM_NAME';
import type { TPaymentMethod } from '#const-enums/CE_PAYMENT_METHOD';
import mockupDispenseItem from '#mockups/mockupDispenseItem';
import displayItems from '#modules/items/displayItems';
import selectItem from '#modules/items/selectItem';
import validateItem from '#modules/items/validateItem';
import executePayment from '#modules/payments/executePayment';

export default async function operateVendingMachine(args: { name: TItemName; paymentMethod: TPaymentMethod }) {
  // 상품 진열
  // eslint-disable-next-line no-underscore-dangle
  const _itemEntities = await displayItems();

  // 상품 조회
  const itemEntity = await selectItem(args);

  // 상품 검증
  validateItem({ itemEntity });

  // 상품 결제
  const { changeMap } = await executePayment({ itemEntity, paymentMethod: args.paymentMethod });

  // 상품 배출
  await mockupDispenseItem({ itemEntity });

  return {
    itemEntity,
    changeMap,
  };
}
