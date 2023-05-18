/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid DbQuery implementation to the required
 * resource
 */
export interface DbQueryImplementation {
  recordPreExists: (email: string) => Promise<boolean>;
}
