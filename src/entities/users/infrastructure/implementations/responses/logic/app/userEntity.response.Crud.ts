import { type CoreEntityResponse, CoreEntityEnum } from '@core/domain';
import { HELPERS } from '@core/infrastructure/helpers';
import { ADAPTERS } from '@core/application/adapters';

import type { User, UserEntityImplLogic } from 'entities/users';

export class Crud implements UserEntityImplLogic.CrudResponses {
  creationSucceeded(
    dataSource: Omit<User, 'password'>,
  ): CoreEntityResponse.DataSourceOutput<Omit<User, 'password'>> {
    HELPERS.AppResponseLog.success(
      'APP_LOGIC - CREATE_USER_USE_CASE: A new user has been created successfully',
    );

    return ADAPTERS.DataSourceResponse<Omit<User, 'password'>>(
      'A new user has been created successfully',
      dataSource,
    );
  }

  creationFailed(): CoreEntityResponse.ApplicationFailedOutput {
    HELPERS.AppResponseLog.warning(
      `APP_LOGIC - CREATE_USER_USE_CASE: The information provided is already
      associated to a pre-existing record`,
    );

    return ADAPTERS.ApplicationFailedResponse(
      CoreEntityEnum.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      'The information provided is already associated to a pre-existing record',
    );
  }
}
