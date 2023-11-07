import type { TItemName } from '#const-enums/CE_ITEM_NAME';
import type { TPaymentMethod } from '#const-enums/CE_PAYMENT_METHOD';

export interface IReqPostPaymentHeaders {
  /**
   * 요청 구분을 위한 id
   * @format uuid
   * @examples ['49c1e4d6-9bc5-4d66-9eb7-41715e2b62c5']
   */
  'x-request-id': string;
}

export interface IReqPostPaymentBody {
  /**
   * 상품 명
   */
  name: TItemName;
  /**
   * 결제 방법법
   */
  paymentMethod: TPaymentMethod;
}

export default interface IReqPostPayment {
  body: IReqPostPaymentBody;
  params: IReqPostPaymentBody;
}
