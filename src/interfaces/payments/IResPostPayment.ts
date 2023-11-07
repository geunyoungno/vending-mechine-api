import type IItemDto from '#interfaces/items/IItemDto';
import type IChangeDto from '#interfaces/payments/IChangeDto';

export default interface IResPostPayment {
  /**
   * 상품 정보
   */
  item: IItemDto;

  /**
   * 현금 정보
   */
  cash?: Partial<{
    /** 입금 액수 */
    depositAmount: number;
    /** 거스름 돈 */
    change: IChangeDto;
  }>;
}
