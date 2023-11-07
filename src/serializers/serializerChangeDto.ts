import type IChangeDto from '#interfaces/payments/IChangeDto';
import type { TChangeMap } from '#interfaces/payments/IChangeDto';

export default function serializerChangeDto(changeMap: TChangeMap): IChangeDto {
  return Array.from(changeMap.entries()).reduce<IChangeDto>((acc, [changeUnit, changeCount]) => {
    return {
      ...acc,
      [changeUnit]: changeCount,
    };
  }, {} as IChangeDto);
}
