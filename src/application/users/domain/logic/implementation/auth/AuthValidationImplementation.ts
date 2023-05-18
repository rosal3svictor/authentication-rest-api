import type { GeneralImplementation } from '../GeneralImplementation';

/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid implementation of 'Auth Validation' to the
 * required resource
 */
export interface AuthValidationImplementation extends Pick<GeneralImplementation, 'isValidEmail'> {
  isValidPassword: (password: string) => boolean;
}
