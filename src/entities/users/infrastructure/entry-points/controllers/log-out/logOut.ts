import { UseCases } from 'entities/users/application'
import { Repository, Responses } from 'entities/users/infrastructure'
import { Utils } from 'core/infrastructure'
import { Enum } from 'core/domain'

import type { Request, Response } from 'express'

export async function logOut(req: Request, res: Response): Promise<void> {
    try {
        const useCaseRefreshToken = await new UseCases.LogOut(
            new Repository.Crud(),
            new Responses.AuthResponses(),
            req,
            res
        ).invoke()

        res.status(useCaseRefreshToken.httpStatusCode).json({ data: useCaseRefreshToken.data })
    } catch (error) {
        Utils.AppResponseLog.exception(
            `An unhandled error has occurred when logging out.
             Details: ${error as string}`
        )

        res.status(Enum.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            data: {
                message: `An unhandled error has occurred when loggin out.
                Details: ${error as string}`
            }
        })
    }
}
