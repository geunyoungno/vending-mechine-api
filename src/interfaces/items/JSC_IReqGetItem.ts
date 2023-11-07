import type { JSONSchema7 } from 'json-schema';

// tslint:disable max-line-length
// tslint:disable-next-line:variable-name
const JSC_IReqGetItem: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
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
    params: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          enum: ['cola', 'water', 'coffie'],
        },
      },
      required: ['name'],
    },
  },
  required: ['headers', 'params'],
  definitions: {},
};

export default JSC_IReqGetItem;
