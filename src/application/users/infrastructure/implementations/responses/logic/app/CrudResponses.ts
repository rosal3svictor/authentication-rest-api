import {
  type ApplicationFailedResponseOutput,
  type DataSourceResponseOutput,
  REDIRECTION_HTTP_STATUS_CODE,
} from '@domain';
import { HELPER } from '@infrastructure/helpers';
import { ADAPTER } from '@application/adapters';

import type { User, CrudResponsesImplementation } from '@application/users';

export class CrudResponses implements CrudResponsesImplementation {
  creationSucceeded(
    dataSource: Omit<User, 'password'>,
  ): DataSourceResponseOutput<Omit<User, 'password'>> {
    HELPER.APP_RESPONSE_LOG.SUCCESS(
      'APP_LOGIC - CREATE_USER_USE_CASE: A new user has been created successfully',
    );

    return ADAPTER.DATA_SOURCE_RESPONSE<Omit<User, 'password'>>(
      'A new user has been created successfully',
      dataSource,
    );
  }

  creationFailed(): ApplicationFailedResponseOutput {
    HELPER.APP_RESPONSE_LOG.WARNING(
      // eslint-disable-next-line max-len
      'APP_LOGIC - CREATE_USER_USE_CASE: The information provided is already associated to a pre-existing record',
    );

    return ADAPTER.APPLICATION_FAILED_RESPONSE(
      REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      'The information provided is already associated to a pre-existing record',
    );
  }
}
