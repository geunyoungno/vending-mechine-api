import type IItemEntity from '#interfaces/items/IItemEntity';
import type { TChangeMap } from '#interfaces/payments/IChangeDto';
import type IResPostPayment from '#interfaces/payments/IResPostPayment';
import serializerChangeDto from '#serializers/serializerChangeDto';
import serializerItemDto from '#serializers/serializerItemDto';

export default function serializerResPostPayment(args: {
  itemEntity: IItemEntity;
  totalInsertedCash?: number;
  changeMap?: TChangeMap;
}): IResPostPayment {
  const { itemEntity, totalInsertedCash, changeMap } = args;

  return {
    item: serializerItemDto(itemEntity),
    cash:
      totalInsertedCash == null && changeMap == null
        ? undefined
        : {
            depositAmount: totalInsertedCash,
            change: changeMap == null ? undefined : serializerChangeDto(changeMap),
          },
  } satisfies IResPostPayment;
}
