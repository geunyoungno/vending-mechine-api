import type { TChangeMap } from '#interfaces/payments/IChangeDto';

/**
 * 거스름돈 배출
 */
export default async function mockupDispenseChange(args: { changeMap: TChangeMap }) {
  // 거스름 돈 배출할 것이 없을 경우는 배출하지 않음
  if (args.changeMap.size > 0 === false) {
    return args;
  }

  // TODO: 자판기로 거스름돈 배출 요청
  return args;
}
