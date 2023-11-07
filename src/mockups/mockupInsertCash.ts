import type { TCashUnit } from '#const-enums/CE_CASH_UNIT';

/**
 * 현금 입금
 */
export default async function getMockupInserCash(): Promise<TCashUnit> {
  // TODO: 자판기를 통해 현금 입력 정보를 받아야 함
  const cashUnits = [100, 500, 1000, 5000, 10000] satisfies TCashUnit[];

  return cashUnits[Math.floor(Math.random() * cashUnits.length)] ?? 0;
}
