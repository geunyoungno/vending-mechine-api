/* eslint-disable no-console */
import type { TItemName } from '#const-enums/CE_ITEM_NAME';
import CE_ITEM_NAME from '#const-enums/CE_ITEM_NAME';
import type { TPaymentMethod } from '#const-enums/CE_PAYMENT_METHOD';
import CE_PAYMENT_METHOD from '#const-enums/CE_PAYMENT_METHOD';
import operateVendingMachine from '#modules/operateVendingMachine';
import getRandomElement from '#tools/misc/getRandomElement';
import 'jest';

describe('operateVendingMachine', () => {
  it('자판기 동작', async () => {
    const itemNames = Object.values(CE_ITEM_NAME) as TItemName[];
    const itemName = getRandomElement(itemNames);

    const paymentMethods = Object.values(CE_PAYMENT_METHOD) as TPaymentMethod[];
    const paymentMethod = getRandomElement(paymentMethods);

    console.log('vending-machine start', {
      itemName,
      paymentMethod,
    });

    const resPostPayment = await operateVendingMachine({
      name: itemName,
      paymentMethod,
    });

    console.log('vending-machine end', {
      resPostPayment: JSON.stringify(resPostPayment),
    });
  });
});
