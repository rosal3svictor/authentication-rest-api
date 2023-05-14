import { HELPER } from '@infrastructure/helpers';
import { type ApplicationFailedResponseOutput, SERVER_ERROR_HTTP_STATUS_CODE } from '@domain';

import { ApplicationFailedResponse } from '../ApplicationFailedResponse';

export class UnhandledErrorResponse {
  private readonly functionName: string;
  private readonly message: string;

  constructor(functionName: string, message: string) {
    this.message = message;
    this.functionName = functionName;
  }

  invoke(): ApplicationFailedResponseOutput {
    HELPER.APP_RESPONSE_LOG.EXCEPTION(
      `An unhandled error has happened on ${this.functionName}. Details: ${this.message}`,
    );

    return ApplicationFailedResponse(
      SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      `An unhandled error has happened on ${this.functionName}. Details: ${this.message}`,
    );
  }
}
