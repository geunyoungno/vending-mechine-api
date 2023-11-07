import type { TItemName } from '#const-enums/CE_ITEM_NAME';
import CE_ITEM_NAME from '#const-enums/CE_ITEM_NAME';
import type IItemEntity from '#interfaces/items/IItemEntity';

// TODO: 실제 상품 정보를 가지고 있어야 함
const mockupItemEntities = [
  {
    id: '1',
    name: CE_ITEM_NAME.COLA,
    price: 1100,
    quantity: 2,
  },
  {
    id: '2',
    name: CE_ITEM_NAME.WATER,
    price: 600,
    quantity: 0,
  },
  {
    id: '3',
    name: CE_ITEM_NAME.COFFIE,
    price: 700,
    quantity: 1,
  },
] satisfies Array<IItemEntity>;

/**
 * 상품 정보 엔티티 목록
 */
export async function getMockupItemEntities(): Promise<Array<IItemEntity>> {
  return mockupItemEntities;
}

/**
 * 상품 정보 엔티티 맵
 */
export async function getMockupItemEntityMap() {
  const mockupItemMap = new Map(
    mockupItemEntities.reduce<Array<[TItemName, IItemEntity]>>((acc, itemEntity) => {
      const { name } = itemEntity;

      return [...acc, [name, itemEntity]];
    }, []),
  );

  return mockupItemMap;
}
