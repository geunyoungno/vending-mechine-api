import type { FastifySwaggerUiOptions } from '@fastify/swagger-ui';

/** swagger 설정을 돌려줌 */
export default function swaggerUIConfig(): FastifySwaggerUiOptions {
  return {
    routePrefix: '/swagger.io',

    uiConfig: {
      deepLinking: true,
      filter: true,
      displayRequestDuration: true,
      displayOperationId: false,
      showExtensions: true,
    },
    staticCSP: false,
  };
}
