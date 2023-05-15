import { USERS, type CrudImplementation } from '@application/users';

import type { ApplicationGeneralResponse } from 'domain/Adapters';

export class RecordPreExists {
  private readonly _implementation: CrudImplementation;

  constructor(implementation: CrudImplementation) {
    this._implementation = implementation;
  }

  async invoke(email: string): Promise<ApplicationGeneralResponse> {
    const recordPreExists = await this._implementation.recordPreExists(email);

    return recordPreExists
      ? new USERS.INFRASTRUCTURE.IMPLEMENTATIONS.RESPONSES.RECORD_PRE_EXISTS().found()
      : new USERS.INFRASTRUCTURE.IMPLEMENTATIONS.RESPONSES.RECORD_PRE_EXISTS().notFound();
  }
}
