import { HELPER } from '@infrastructure/helpers';
import { REDIRECTION_HTTP_STATUS_CODE, SUCCESSFUL_HTTP_STATUS_CODE } from '@domain';

import type { ApplicationGeneralResponse } from 'domain/Adapters';

export class RecordPreExistsResponse {
  found(): ApplicationGeneralResponse {
    const process = {
      httpStatusCode: REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      passed: false,
      message: 'The provided record has previously been registered',
    };

    HELPER.APP_RESPONSE_LOG.WARNING(
      'BUSINESS_LOGIC - RECORD_PRE_EXISTS: The provided record has previously been registered',
    );

    return process;
  }

  notFound(): ApplicationGeneralResponse {
    const process = {
      httpStatusCode: SUCCESSFUL_HTTP_STATUS_CODE.OK,
      passed: true,
      message:
        // eslint-disable-next-line max-len
        'BUSINESS_LOGIC - RECORD_PRE_EXISTS: This record has not been found in our records. The process can continue.',
    };

    HELPER.APP_RESPONSE_LOG.INFO(process.message);

    return process;
  }
}
