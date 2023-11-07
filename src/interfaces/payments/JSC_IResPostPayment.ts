import type { JSONSchema7 } from 'json-schema';

// tslint:disable max-line-length
// tslint:disable-next-line:variable-name
const JSC_IResPostPayment: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    item: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          enum: ['cola', 'water', 'coffie'],
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
      description: '상품 정보',
    },
    cash: {
      type: 'object',
      properties: {
        depositAmount: {
          type: 'number',
          description: '입금 액수',
        },
        change: {
          type: 'object',
          properties: {
            '0': {
              type: 'number',
            },
            '100': {
              type: 'number',
            },
            '500': {
              type: 'number',
            },
            '1000': {
              type: 'number',
            },
            '5000': {
              type: 'number',
            },
            '10000': {
              type: 'number',
            },
          },
          description: '거스름 돈',
        },
      },
      description: '현금 정보',
    },
  },
  required: ['item'],
  definitions: {},
};

export default JSC_IResPostPayment;
