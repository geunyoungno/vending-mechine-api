import type IItemEntity from '#interfaces/items/IItemEntity';
import StatusError from '#tools/StatusError';
import { StatusCodes } from 'http-status-codes';

/**
 * 상품 검증 - 수량 확인
 * @param {IItemEntity} args.itemEntity 상품 정보
 * @returns {Boolean} 검증 여부
 */
export default function validateItem(args: { itemEntity: IItemEntity }): Boolean {
  // 수량이 0개 초과되지 않으면 검증 실패
  if (args.itemEntity.quantity > 0 === false) {
    throw new StatusError({
      message: 'item quantity error',
      statusCode: StatusCodes.FORBIDDEN,
    });
  }

  return true;
}
