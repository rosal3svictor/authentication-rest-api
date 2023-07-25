import type { CoreEntityResponse } from '@core/domain';

/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid implementation of 'CRUD Validations Responses'
 * to the required resource
 */
export interface CrudValidationResponses {
  incompleteInputData: () => boolean;
  completeInputData: () => boolean;
  validPropertyValues: () => boolean;
  validInputData: () => boolean;
  invalidInputData: () => CoreEntityResponse.ApplicationFailedOutput;
  invalidEmail: (email: string) => boolean;
  invalidName: (name: string) => boolean;
  invalidAge: (age: number) => boolean;
}
