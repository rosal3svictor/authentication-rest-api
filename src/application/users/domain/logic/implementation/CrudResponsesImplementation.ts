import type { User } from '@application/users';
import type { ApplicationFailedResponse, DataSourceResponse } from '@domain';

/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid implementation of 'CRUD Responses' to the
 * required resource
 */
export interface CrudResponsesImplementation {
  creationSucceeded: (
    dataSource: Omit<User, 'password'>,
  ) => DataSourceResponse<Omit<User, 'password'>>;
  creationFailed: () => ApplicationFailedResponse;
}
