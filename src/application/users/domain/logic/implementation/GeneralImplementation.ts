/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid general implementation to the required
 * resource
 */
export interface GeneralImplementation {
  isValidEmail: (email: string) => boolean;
  areEqual: (valueOne: string[], valueTwo: string[]) => boolean;
}
