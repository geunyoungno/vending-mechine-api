import type IItemEntity from '#interfaces/items/IItemEntity';
import type ICardDto from '#interfaces/payments/ICardDto';
import getRandomElement from '#tools/misc/getRandomElement';

/**
 * 카드 잔액 검증
 */
export default async function getMockupValidateCardBalance(_args: { itemEntity: IItemEntity; card: ICardDto }) {
  // TODO: 카드에 결제할 수 있는 잔액이 있는지 검증해야 함
  const cardBalances = [true, false];

  return getRandomElement(cardBalances);
}
