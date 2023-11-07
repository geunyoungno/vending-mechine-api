import type IItemEntity from '#interfaces/items/IItemEntity';
import { getMockupItemEntities } from '#mockups/mockupItemEntities';

/**
 * 상품 진열
 * @returns {Promise<Array<IItemEntity>>} 상품 목록 조회 결과
 */
export default async function displayItems(): Promise<Array<IItemEntity>> {
  const itemEntities = await getMockupItemEntities();

  return itemEntities;
}
