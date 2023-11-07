import type { FastifyDynamicSwaggerOptions } from '@fastify/swagger';

/** swagger 설정을 돌려줌 */
export default function swaggerConfig(): FastifyDynamicSwaggerOptions {
  return {
    openapi: {
      info: {
        title: 'vending-mechine-api',
        description: 'vending-mechine-api 서버의 Swagger 문서입니다',
        version: '0.1.0',
      },
    },
  };
}
