import type { TPaymentMethod } from '#const-enums/CE_PAYMENT_METHOD';
import CE_PAYMENT_METHOD from '#const-enums/CE_PAYMENT_METHOD';
import type IItemEntity from '#interfaces/items/IItemEntity';
import type { TChangeMap } from '#interfaces/payments/IChangeDto';
import paymentCard from '#modules/payments/paymentCard';
import paymentCash from '#modules/payments/paymentCash';
import StatusError from '#tools/StatusError';
import { StatusCodes } from 'http-status-codes';

/**
 * 상품 결제 실행
 * @param {IItemEntity} args.itemEntity 상품 정보
 * @param {TPaymentMethod} args.paymentMethod 결제 방법
 * @returns {Boolean} 상품 결제 결과
 */
export default async function executePayment(args: {
  itemEntity: IItemEntity;
  paymentMethod: TPaymentMethod;
}): Promise<{
  itemEntity: IItemEntity;
  totalInsertedCash?: number;
  changeMap?: TChangeMap;
}> {
  if (args.paymentMethod === CE_PAYMENT_METHOD.CASH) {
    return paymentCash({ itemEntity: args.itemEntity });
  }

  if (args.paymentMethod === CE_PAYMENT_METHOD.CARD) {
    return paymentCard({ itemEntity: args.itemEntity });
  }

  throw new StatusError({
    message: 'payment method not found',
    statusCode: StatusCodes.BAD_REQUEST,
  });
}
