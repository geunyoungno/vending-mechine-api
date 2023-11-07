/**
 * 상품 명
 * * COLA,cola: 콜라
 * * WATER,water: 물
 * * COFFIE,coffie: 커피
 */
const CE_ITEM_NAME = {
  COLA: 'cola',
  WATER: 'water',
  COFFIE: 'coffie',
} as const;

export default CE_ITEM_NAME;

export type TItemName = (typeof CE_ITEM_NAME)[keyof typeof CE_ITEM_NAME];
