import type { ApplicationGeneralResponse } from 'domain/Adapters';

/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid implementation of 'Record Pre Exists Responses'
 * to the required resource
 */
export interface RecordPreExistsResponsesImplementation {
  found: () => ApplicationGeneralResponse;
  notFound: () => ApplicationGeneralResponse;
}
