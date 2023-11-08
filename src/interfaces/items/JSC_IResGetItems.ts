import type { JSONSchema7 } from 'json-schema';

// tslint:disable max-line-length
// tslint:disable-next-line:variable-name
const JSC_IResGetItems: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            enum: ['cola', 'water', 'coffee'],
          },
          price: {
            type: 'number',
            description: '가격',
          },
          quantity: {
            type: 'number',
            description: '수량',
          },
        },
        required: ['name', 'price', 'quantity'],
      },
    },
  },
  required: ['items'],
  definitions: {},
};

export default JSC_IResGetItems;
