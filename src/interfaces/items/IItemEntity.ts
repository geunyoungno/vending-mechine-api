import type { TItemName } from '#const-enums/CE_ITEM_NAME';

export default interface IItemEntity {
  id: string;

  /**
   * 상품 명
   */
  name: TItemName;

  /**
   * 가격
   */
  price: number;

  /**
   * 수량
   */
  quantity: number;
}
