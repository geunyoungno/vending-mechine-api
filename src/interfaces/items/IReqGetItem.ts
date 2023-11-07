import type { TItemName } from '#const-enums/CE_ITEM_NAME';

export interface IReqGetItemHeaders {
  /**
   * 요청 구분을 위한 id
   * @format uuid
   * @examples ['49c1e4d6-9bc5-4d66-9eb7-41715e2b62c5']
   */
  'x-request-id': string;
}

export interface IReqGetItemParams {
  /**
   * 상품 명
   */
  name: TItemName;
}

export default interface IReqGetItem {
  headers: IReqGetItemHeaders;
  params: IReqGetItemParams;
}
