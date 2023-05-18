import {
  type DbQueryImplementation,
  type RecordPreExistsResponsesImplementation,
} from '@application/users';

import type { ApplicationGeneralResponse } from 'domain/Adapters';

export class RecordPreExists {
  private readonly _implementation: DbQueryImplementation;
  private readonly _recordPreExistsResponseImplementation: RecordPreExistsResponsesImplementation;

  constructor(
    implementation: DbQueryImplementation,
    recordPreExistsResponseImplementation: RecordPreExistsResponsesImplementation,
  ) {
    this._implementation = implementation;
    this._recordPreExistsResponseImplementation = recordPreExistsResponseImplementation;
  }

  async invoke(email: string): Promise<ApplicationGeneralResponse> {
    const recordPreExists = await this._implementation.recordPreExists(email);

    return recordPreExists
      ? this._recordPreExistsResponseImplementation.found()
      : this._recordPreExistsResponseImplementation.notFound();
  }
}
