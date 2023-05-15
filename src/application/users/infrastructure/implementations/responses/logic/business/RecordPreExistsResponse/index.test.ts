import { HELPER } from '@infrastructure/helpers';
import {
  type APP_RESPONSE_DEFINITION,
  REDIRECTION_HTTP_STATUS_CODE,
  SUCCESSFUL_HTTP_STATUS_CODE,
} from '@domain';

import { RecordPreExistsResponse } from '.';

describe('RecordPreExistsResponse', () => {
  let mockHelperAppResponseLog: APP_RESPONSE_DEFINITION;

  beforeEach(() => {
    // @ts-expect-error: This is not introducing a bug
    mockHelperAppResponseLog = {
      WARNING: jest.fn(),
      INFO: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should log a warning message and return the correct response for found', () => {
    const recordPreExistsResponse = new RecordPreExistsResponse();

    const expectedResponse = {
      httpStatusCode: REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      passed: false,
      message: 'The provided record has previously been registered',
    };

    const result = recordPreExistsResponse.found();

    expect(result).toEqual(expectedResponse);
  });

  it('should log an info message and return the correct response for notFound', () => {
    const recordPreExistsResponse = new RecordPreExistsResponse();

    const expectedResponse = {
      httpStatusCode: SUCCESSFUL_HTTP_STATUS_CODE.OK,
      passed: true,
      message:
        // eslint-disable-next-line max-len
        'BUSINESS_LOGIC - RECORD_PRE_EXISTS: This record has not been found in our records. The process can continue.',
    };

    const result = recordPreExistsResponse.notFound();

    expect(result).toEqual(expectedResponse);
  });
});
