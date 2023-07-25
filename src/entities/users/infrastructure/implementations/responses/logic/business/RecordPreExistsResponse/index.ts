import { HELPERS } from '@core/infrastructure/helpers';
import { CoreEntityEnum, type CoreEntityResponse } from '@core/domain';

export class RecordPreExistsResponse {
  found(): CoreEntityResponse.ApplicationGeneral {
    const process = {
      httpStatusCode: CoreEntityEnum.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      passed: false,
      message: 'The provided record has previously been registered',
    };

    HELPERS.AppResponseLog.warning(
      'BUSINESS_LOGIC - RECORD_PRE_EXISTS: The provided record has previously been registered',
    );

    return process;
  }

  notFound(): CoreEntityResponse.ApplicationGeneral {
    const process = {
      httpStatusCode: CoreEntityEnum.SUCCESSFUL_HTTP_STATUS_CODE.OK,
      passed: true,
      message: `BUSINESS_LOGIC - RECORD_PRE_EXISTS: This record has not been found in
        our records. The process can continue.`,
    };

    HELPERS.AppResponseLog.info(process.message);

    return process;
  }
}
