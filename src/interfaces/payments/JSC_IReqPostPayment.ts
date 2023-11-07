import type { JSONSchema7 } from 'json-schema';

// tslint:disable max-line-length
// tslint:disable-next-line:variable-name
const JSC_IReqPostPayment: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          enum: ['cola', 'water', 'coffie'],
          description: '상품 명',
        },
        paymentMethod: {
          type: 'string',
          enum: ['card', 'cash'],
          description: '결제 방법법',
        },
      },
      required: ['name', 'paymentMethod'],
    },
    params: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          enum: ['cola', 'water', 'coffie'],
          description: '상품 명',
        },
        paymentMethod: {
          type: 'string',
          enum: ['card', 'cash'],
          description: '결제 방법법',
        },
      },
      required: ['name', 'paymentMethod'],
    },
  },
  required: ['body', 'params'],
  definitions: {},
};

export default JSC_IReqPostPayment;
