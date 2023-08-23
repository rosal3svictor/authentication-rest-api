import { UseCases } from 'entities/users/application'
import { Repository, Responses, UserValidation } from 'entities/users/infrastructure'
import { Utils } from 'core/infrastructure'
import { Enum } from 'core/domain'

import type { Request, Response } from 'express'

export async function create(req: Request, res: Response): Promise<void> {
  try {
    const useCaseCreateUser = await new UseCases.Create(
      new Repository.Crud(),
      new UserValidation(),
      new Responses.CrudResponses()
    ).invoke(req.body)

    res.status(useCaseCreateUser.httpStatusCode).json({ data: useCaseCreateUser.data })
  } catch (error) {
    Utils.AppResponseLog.exception(
      `An unhanlded error has occurred when creating the user. Details: ${error as string}`
    )

    res.status(Enum.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      data: {
        message: `An unhanlded error has occurred when creating the user. Details: ${error as string
          }`
      }
    })
  }
}
