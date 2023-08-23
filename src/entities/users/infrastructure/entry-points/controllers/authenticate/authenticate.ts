import { UseCases } from 'entities/users/application'
import { Repository, Responses, UserValidation, Helpers } from 'entities/users/infrastructure'
import { Utils } from 'core/infrastructure'
import { Enum } from 'core/domain'

import type { Request, Response } from 'express'

export async function authenticate(req: Request, res: Response): Promise<void> {
  try {
    const useCaseAuthUser = await new UseCases.Authenticate(
      new Repository.Crud(),
      new Helpers.TokenGenerator(),
      new UserValidation(),
      new Responses.AuthResponses(),
      res
    ).invoke(req.body)

    res.status(useCaseAuthUser.httpStatusCode).json({ data: useCaseAuthUser.data })
  } catch (error) {
    Utils.AppResponseLog.exception(
      `An unhandled error has occurred when authenticating the user.
       Details: ${error as string}`
    )

    res.status(Enum.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      data: {
        message: `An unhandled error has occurred when authenticating the user.
          Details: ${error as string}`
      }
    })
  }
}
