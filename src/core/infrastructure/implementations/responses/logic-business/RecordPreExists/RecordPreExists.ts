import { Utils } from 'core/infrastructure/implementations/utils'
import { Enum, type Response } from 'core/domain'

export class RecordPreExists {
  found(): Response.ApplicationGeneral {
    const process = {
      httpStatusCode: Enum.CLIENT_ERROR_HTTP_STATUS_CODE.CONFLICT,
      passed: false,
      message: 'The provided record has previously been registered'
    }

    Utils.AppResponseLog.warning(
      'BUSINESS_LOGIC - RECORD_PRE_EXISTS: The provided record has previously been registered'
    )

    return process
  }

  notFound(): Response.ApplicationGeneral {
    const process = {
      httpStatusCode: Enum.SUCCESSFUL_HTTP_STATUS_CODE.OK,
      passed: true,
      message: `BUSINESS_LOGIC - RECORD_PRE_EXISTS: This record has not been found in
        our records. The process can continue.`
    }

    Utils.AppResponseLog.info(process.message)

    return process
  }
}
