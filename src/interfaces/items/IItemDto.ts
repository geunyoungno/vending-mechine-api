import type { TItemName } from '#const-enums/CE_ITEM_NAME';

export default interface IItemDto {
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
