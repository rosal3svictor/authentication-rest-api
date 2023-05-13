import type { ApplicationFailedResponse } from '@domain';

/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid implementation of 'CRUD Validations Responses'
 * to the required resource
 */
export interface CrudValidationResponsesImplementation {
  incompleteInputData: () => boolean;
  completeInputData: () => boolean;
  validPropertyValues: () => boolean;
  validInputData: () => boolean;
  invalidInputData: () => ApplicationFailedResponse;
  invalidEmail: (email: string) => boolean;
  invalidName: (name: string) => boolean;
  invalidAge: (age: number) => boolean;
}
