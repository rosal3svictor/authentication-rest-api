import { HELPERS } from '@core/infrastructure/helpers';
import { type CoreEntityResponse, CoreEntityEnum } from '@core/domain';

import { ApplicationFailedResponse } from '../ApplicationFailedResponse';

export class UnhandledErrorResponse {
  private readonly functionName: string;
  private readonly message: string;

  constructor(functionName: string, message: string) {
    this.message = message;
    this.functionName = functionName;
  }

  invoke(): CoreEntityResponse.ApplicationFailedOutput {
    HELPERS.AppResponseLog.exception(
      `An unhandled error has happened on ${this.functionName}. Details: ${this.message}`,
    );

    return ApplicationFailedResponse(
      CoreEntityEnum.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      `An unhandled error has happened on ${this.functionName}. Details: ${this.message}`,
    );
  }
}
