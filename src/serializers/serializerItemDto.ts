import type IItemDto from '#interfaces/items/IItemDto';
import type IItemEntity from '#interfaces/items/IItemEntity';

export default function serializerItemDto(itemEntity: IItemEntity): IItemDto {
  return {
    name: itemEntity.name,
    price: itemEntity.price,
    quantity: itemEntity.quantity,
  } satisfies IItemDto;
}
