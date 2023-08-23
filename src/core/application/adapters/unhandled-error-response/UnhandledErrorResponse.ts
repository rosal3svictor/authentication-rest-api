import { type Response, Enum } from 'core/domain'
import { Utils } from 'core/infrastructure/implementations/utils'

import { applicationFailedResponse } from '../application-failed-response'

export class UnhandledErrorResponse {
  private readonly functionName: string
  private readonly message: string

  constructor(functionName: string, message: string) {
    this.message = message
    this.functionName = functionName
  }

  invoke(): Response.ApplicationFailedOutput {
    Utils.AppResponseLog.exception(
      `An unhandled error has happened on ${this.functionName}. Details: ${this.message}`
    )

    return applicationFailedResponse(
      Enum.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      `An unhandled error has happened on ${this.functionName}. Details: ${this.message}`
    )
  }
}
