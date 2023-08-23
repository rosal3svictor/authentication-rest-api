import { BusinessRulesResponses } from 'core/infrastructure/implementations/responses'

import type { ImplLogic, Response } from 'core/domain'

export class RecordPreExists<T> {
  private readonly _repository: Pick<ImplLogic.GeneralRepositoryMethods<T>, 'recordPreExists'>

  constructor(implementation: Pick<ImplLogic.GeneralRepositoryMethods<T>, 'recordPreExists'>) {
    this._repository = implementation
  }

  async invoke(input: T): Promise<Response.ApplicationGeneral> {
    const recordPreExists = await this._repository.recordPreExists(input)

    return recordPreExists
      ? new BusinessRulesResponses.RecordPreExists().found()
      : new BusinessRulesResponses.RecordPreExists().notFound()
  }
}
