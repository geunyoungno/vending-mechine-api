import type { TCashUnit } from '#const-enums/CE_CASH_UNIT';

export type TChangeMap = Map<TCashUnit, number>;

/**
 * 거스름 돈 정보
 */
export default interface ICardDto extends Partial<Record<TCashUnit, number>> {}
