/**
 * 현금 단위
 * * ZERO,0
 * * ONE_HUNDRED,100
 * * FIVE_HUNDRED,500
 * * ONE_THOUSAND,1_000
 * * FIVE_THOUSAND,5_000
 * * TEN_THOUSAND,10_000
 */
const CE_CASH_UNIT = {
  ZERO: 0,
  ONE_HUNDRED: 100,
  FIVE_HUNDRED: 500,
  ONE_THOUSAND: 1_000,
  FIVE_THOUSAND: 5_000,
  TEN_THOUSAND: 10_000,
} as const;

export default CE_CASH_UNIT;

export type TCashUnit = (typeof CE_CASH_UNIT)[keyof typeof CE_CASH_UNIT];
