import { type ApplicationFailedResponseOutput, SERVER_ERROR_HTTP_STATUS_CODE } from '@core/domain';
import { HELPERS } from '@core/infrastructure/helpers';

import { UnhandledErrorResponse } from '.';

jest.mock('@infrastructure/helpers', () => ({
  HELPER: {
    APP_RESPONSE_LOG: {
      EXCEPTION: jest.fn(),
    },
  },
}));

describe('Adapter - UnhandledErrorResponse', () => {
  it('It should invoke correctly and return the expected output', () => {
    const functionName = 'testFunction';
    const message = 'test message';
    const expectedOutput: ApplicationFailedResponseOutput = {
      httpStatusCode: SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      data: {
        message: `An unhandled error has happened on ${functionName}. Details: ${message}`,
      },
    };

    const unhandledErrorResponse = new UnhandledErrorResponse(functionName, message);
    const result = unhandledErrorResponse.invoke();

    expect(HELPERS.APP_RESPONSE_LOG.EXCEPTION).toHaveBeenCalledWith(
      `An unhandled error has happened on ${functionName}. Details: ${message}`,
    );
    expect(result).toEqual(expectedOutput);
  });
});
