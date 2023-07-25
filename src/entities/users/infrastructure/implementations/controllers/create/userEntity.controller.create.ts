import { USER_ENTITY } from 'entities/users';
import { HELPERS } from '@core/infrastructure/helpers';
import { CoreEntityEnum } from '@core/domain';

import type { Request, Response } from 'express';

export async function create(req: Request, res: Response): Promise<void> {
  try {
    const useCaseCreateUser = await new USER_ENTITY.USE_CASES.Create(
      new USER_ENTITY.REPOSITORY(),
      new USER_ENTITY.VALIDATION_CRITERIA(),
      new USER_ENTITY.RESPONSES.CRUD_RESPONSES(),
      new USER_ENTITY.RESPONSES.CRUD_VALIDATION(),
    ).invoke(req.body);

    res.status(useCaseCreateUser.httpStatusCode).json({ data: useCaseCreateUser.data });
  } catch (error) {
    HELPERS.AppResponseLog.exception(
      `An unhanlded error has occurred when creating the user. Details: ${error as string}`,
    );

    res.status(CoreEntityEnum.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      data: {
        message: `An unhanlded error has occurred when creating the user. Details: ${
          error as string
        }`,
      },
    });
  }
}
