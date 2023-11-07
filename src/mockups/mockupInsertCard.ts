import type IItemEntity from '#interfaces/items/IItemEntity';
import type ICardDto from '#interfaces/payments/ICardDto';

/**
 * 카드 입력
 */
export default async function getMockupInserCard(_args: { itemEntity: IItemEntity }) {
  // TODO: 자판기를 통해 카드 정보를 조회해야 함
  const card = {} satisfies ICardDto;

  return card;
}
