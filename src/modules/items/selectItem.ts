import type { TItemName } from '#const-enums/CE_ITEM_NAME';
import type IItemEntity from '#interfaces/items/IItemEntity';
import { getMockupItemEntityMap } from '#mockups/mockupItemEntities';
import StatusError from '#tools/StatusError';
import { StatusCodes } from 'http-status-codes';

/**
 * 상품 선택
 * @param {TItemName} args.name 상품 명
 * @returns {Promise<IItemEntity>} 상품 단건 조회 결과
 */
export default async function selectItem(args: { name: TItemName }): Promise<IItemEntity> {
  const itemMap = await getMockupItemEntityMap();

  const itemEntity = itemMap.get(args.name);

  if (itemEntity == null) {
    throw new StatusError({
      message: 'item not found',
      statusCode: StatusCodes.NOT_FOUND,
    });
  }

  return itemEntity;
}
