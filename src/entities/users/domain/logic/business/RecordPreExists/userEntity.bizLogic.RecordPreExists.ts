import { USER_ENTITY, type UserEntityImplLogic } from 'entities/users';

import type { CoreEntityResponse } from '@core/domain';

export class RecordPreExists {
  private readonly _implementation: UserEntityImplLogic.Crud;

  constructor(implementation: UserEntityImplLogic.Crud) {
    this._implementation = implementation;
  }

  async invoke(email: string): Promise<CoreEntityResponse.ApplicationGeneral> {
    const recordPreExists = await this._implementation.recordPreExists(email);

    return recordPreExists
      ? new USER_ENTITY.RESPONSES.RECORD_PRE_EXISTS().found()
      : new USER_ENTITY.RESPONSES.RECORD_PRE_EXISTS().notFound();
  }
}
