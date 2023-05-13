import { ADAPTER } from '@application/adapters';
import { type ApplicationFailedResponse, CLIENT_ERROR_HTTP_STATUS_CODE } from '@domain';
import { HELPER } from '@infrastructure/helpers';

import type { CrudValidationResponsesImplementation } from '@application/users';

export class CrudValidationResponses implements CrudValidationResponsesImplementation {
  incompleteInputData(): boolean {
    HELPER.APP_RESPONSE_LOG.INFO(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: Not all the properties were provided',
    );

    return false;
  }

  completeInputData(): boolean {
    HELPER.APP_RESPONSE_LOG.INFO(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: All properties were provided',
    );

    return true;
  }

  invalidEmail(email: string): boolean {
    HELPER.APP_RESPONSE_LOG.EXCEPTION(`Email property value is not valid: ${email}`);

    return false;
  }

  invalidName(name: string): boolean {
    HELPER.APP_RESPONSE_LOG.EXCEPTION(`Name property value is no valid: ${name}`);

    return false;
  }

  invalidAge(age: number): boolean {
    HELPER.APP_RESPONSE_LOG.EXCEPTION(`Age property value is no valid: ${age}`);

    return false;
  }

  validPropertyValues(): boolean {
    HELPER.APP_RESPONSE_LOG.INFO(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: All property values are well defined',
    );

    return true;
  }

  validInputData(): boolean {
    HELPER.APP_RESPONSE_LOG.SUCCESS(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: Create User Data is valid to continue',
    );

    return true;
  }

  invalidInputData(): ApplicationFailedResponse {
    HELPER.APP_RESPONSE_LOG.EXCEPTION(
      // eslint-disable-next-line max-len
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: The information provided is incomplete or invalid, please verify it',
    );

    return ADAPTER.APPLICATION_FAILED_RESPONSE(
      CLIENT_ERROR_HTTP_STATUS_CODE.BAD_REQUEST,
      'The information provided is incomplete or invalid, please verify it',
    );
  }
}
