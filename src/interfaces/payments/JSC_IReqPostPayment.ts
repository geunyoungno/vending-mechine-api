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
          enum: ['cola', 'water', 'coffee'],
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
    headers: {
      type: 'object',
      properties: {
        'x-request-id': {
          type: 'string',
          description: '요청 구분을 위한 id',
          format: 'uuid',
          examples: ['49c1e4d6-9bc5-4d66-9eb7-41715e2b62c5'],
        },
      },
      required: ['x-request-id'],
    },
  },
  required: ['body', 'headers'],
  definitions: {},
};

export default JSC_IReqPostPayment;
