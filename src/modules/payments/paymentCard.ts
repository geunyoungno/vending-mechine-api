import type IItemEntity from '#interfaces/items/IItemEntity';
import getMockupInserCard from '#mockups/mockupInsertCard';
import getMockupValidateCardBalance from '#mockups/mockupValidateCardBalance';
import StatusError from '#tools/StatusError';
import { StatusCodes } from 'http-status-codes';

/**
 *카드 결제
 * @param {IItemEntity} args.itemEntity 상품 정보
 * @returns {IItemEntity} 상품 정보
 */
export default async function paymentCard(args: { itemEntity: IItemEntity }) {
  // 카드 입력 - 카드 정보 조회
  const insertedCard = await getMockupInserCard(args);

  // 카드 잔액 확인
  const validatedCardBalance = await getMockupValidateCardBalance({
    itemEntity: args.itemEntity,
    card: insertedCard,
  });

  // 카드 잔액 부족
  if (validatedCardBalance === false) {
    throw new StatusError({
      message: 'card balance is insufficient',
      statusCode: StatusCodes.BAD_REQUEST,
    });
  }

  return {
    itemEntity: args.itemEntity,
  };
}
