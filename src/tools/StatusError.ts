import { StatusCodes } from 'http-status-codes';

/**
 * http status code 를 포함한 Error
 */
export default class StatusError extends Error {
  public readonly statusCode: StatusCodes;

  constructor(args: { message?: string; statusCode?: StatusCodes }) {
    super(args.message);

    this.statusCode = args.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR;
  }
}
