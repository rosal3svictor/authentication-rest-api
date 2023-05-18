import type { ApplicationFailedResponseOutput } from '@domain';

/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid implementation of 'Auth Validation Responses'
 * to the required resource
 */
export interface AuthValidationResponsesImplementation {
  invalidEmail: (email: string) => ApplicationFailedResponseOutput;
  invalidPassword: (password: string) => ApplicationFailedResponseOutput;
}
