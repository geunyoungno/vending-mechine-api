import CE_CASH_UNIT from '#const-enums/CE_CASH_UNIT';
import type IItemEntity from '#interfaces/items/IItemEntity';
import type { TChangeMap } from '#interfaces/payments/IChangeDto';
import mockupDispenseChange from '#mockups/mockupDispenseChange';
import getMockupInserCash from '#mockups/mockupInsertCash';
import type { LastArrayElement } from 'type-fest';

/**
 * 현금 입금
 * @param {IItemEntity} args.itemEntity 상품 정보
 * @returns {number} 총 입금된 현금액
 */
async function insertCash(args: { itemEntity: IItemEntity }) {
  let totalInsertedCash = 0;

  /**
   * 전체 입금 금액이 상품 가격 이상일 경우 까지 입력 받음
   */
  while (totalInsertedCash < args.itemEntity.price) {
    // eslint-disable-next-line no-await-in-loop
    const insertedCash = await getMockupInserCash();
    totalInsertedCash += insertedCash;
  }

  return totalInsertedCash;
}

/**
 * 화폐 단위 별 거스름 돈을 구한다.
 * @param {number} args.change 거스름 돈
 * @returns 화폐 단위 별 거스름 돈 정보
 */
function getChangeMap(args: { change: number }) {
  let { change } = args;

  // 거스름 돈 줄 것이 있는 경우
  // 500, 100 만 있다고 가정함
  const cashUnits = [
    //
    CE_CASH_UNIT.FIVE_HUNDRED,
    CE_CASH_UNIT.ONE_HUNDRED,
  ];
  const changeMap = new Map<LastArrayElement<typeof cashUnits>, number>();

  cashUnits.forEach((cashUnit) => {
    const cashCount = Math.floor(change / cashUnit);

    change -= cashUnit * cashCount;
    changeMap.set(cashUnit, cashCount);
  });

  return {
    changeMap,
  };
}

/**
 * 현금 거스름돈 확인
 * @param {IItemEntity} args.itemEntity 상품 정보
 * @param {number} args.totalInsertedCash 총 입금된 현금액
 * @returns 거스름돈 결과
 */
async function checkCashChange(args: { itemEntity: IItemEntity; totalInsertedCash: number }): Promise<{
  itemEntity: IItemEntity;
  totalInsertedCash?: number;
  changeMap?: TChangeMap;
}> {
  // 거스름 돈
  const change = args.totalInsertedCash - args.itemEntity.price;

  // 거스름 돈 줄 것이 없을 경우
  if (change <= 0) {
    return {
      itemEntity: args.itemEntity,
      totalInsertedCash: args.totalInsertedCash,
    };
  }

  // 거스름 돈 줄 것이 있는 경우
  const { changeMap } = getChangeMap({
    change,
  });

  // 거스름 돈 있을 경우 배출
  if (changeMap != null && changeMap.size > 0) {
    await mockupDispenseChange({ changeMap });
  }

  return {
    itemEntity: args.itemEntity,
    totalInsertedCash: args.totalInsertedCash,
    changeMap,
  };
}

/**
 * 현금 결제
 * @param {IItemEntity} args.itemEntity 상품 정보
 * @returns 상품 정보, 거스름 돈 정보
 */
export default async function paymentCash(args: { itemEntity: IItemEntity }): Promise<{
  itemEntity: IItemEntity;
  totalInsertedCash?: number;
  changeMap?: TChangeMap;
}> {
  const totalInsertedCash = await insertCash({
    itemEntity: args.itemEntity,
  });

  return checkCashChange({
    itemEntity: args.itemEntity,
    totalInsertedCash,
  });
}
