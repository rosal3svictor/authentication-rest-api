import { ADAPTERS } from '@core/application/adapters';
import { type CoreEntityResponse, CoreEntityEnum } from '@core/domain';
import { HELPERS } from '@core/infrastructure/helpers';

import type { UserEntityImplLogic } from 'entities/users';

export class CrudValidationResponses implements UserEntityImplLogic.CrudValidationResponses {
  incompleteInputData(): boolean {
    HELPERS.AppResponseLog.info(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: Not all the properties were provided',
    );

    return false;
  }

  completeInputData(): boolean {
    HELPERS.AppResponseLog.info(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: All properties were provided',
    );

    return true;
  }

  invalidEmail(email: string): boolean {
    HELPERS.AppResponseLog.exception(`Email property value is not valid: ${email}`);

    return false;
  }

  invalidName(name: string): boolean {
    HELPERS.AppResponseLog.exception(`Name property value is no valid: ${name}`);

    return false;
  }

  invalidAge(age: number): boolean {
    HELPERS.AppResponseLog.exception(`Age property value is no valid: ${age}`);

    return false;
  }

  validPropertyValues(): boolean {
    HELPERS.AppResponseLog.info(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: All property values are well defined',
    );

    return true;
  }

  validInputData(): boolean {
    HELPERS.AppResponseLog.success(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: Create User Data is valid to continue',
    );

    return true;
  }

  invalidInputData(): CoreEntityResponse.ApplicationFailedOutput {
    HELPERS.AppResponseLog.exception(
      `BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: The information provided is
      incomplete or invalid, please verify it`,
    );

    return ADAPTERS.ApplicationFailedResponse(
      CoreEntityEnum.CLIENT_ERROR_HTTP_STATUS_CODE.BAD_REQUEST,
      'The information provided is incomplete or invalid, please verify it',
    );
  }
}
