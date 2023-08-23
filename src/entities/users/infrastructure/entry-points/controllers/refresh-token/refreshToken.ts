import { UseCases } from 'entities/users/application'
import { Repository, Responses, Helpers } from 'entities/users/infrastructure'
import { Utils } from 'core/infrastructure'
import { Enum } from 'core/domain'

import type { Request, Response } from 'express'

export async function refreshToken(req: Request, res: Response): Promise<void> {
  try {
    const useCaseRefreshToken = await new UseCases.RefreshToken(
      new Repository.Crud(),
      new Helpers.TokenGenerator(),
      new Responses.AuthResponses(),
      req
    ).invoke()

    res.status(useCaseRefreshToken.httpStatusCode).json({ data: useCaseRefreshToken.data })
  } catch (error) {
    Utils.AppResponseLog.exception(
      `An unhandled error has occurred when refreshing the token.
       Details: ${error as string}`
    )

    res.status(Enum.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      data: {
        message: `An unhandled error has occurred when refreshing the token.
          Details: ${error as string}`
      }
    })
  }
}
