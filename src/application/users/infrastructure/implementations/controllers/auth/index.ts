import { HELPER } from '@infrastructure/helpers';
import { SERVER_ERROR_HTTP_STATUS_CODE } from '@domain';

import type { Request, Response } from 'express';

async function authController(_req: Request, res: Response): Promise<void> {
  try {
    // const useCaseCreateUser = await new USERS.APPLICATION.USE_CASE.CREATE(
    //   new USERS.INFRASTRUCTURE.IMPLEMENTATIONS.REPOSITORY(),
    //   new USERS.INFRASTRUCTURE.IMPLEMENTATIONS.VALIDATION_CRITERIA(),
    //   new USERS.INFRASTRUCTURE.IMPLEMENTATIONS.RESPONSES.CRUD_RESPONSES(),
    //   new USERS.INFRASTRUCTURE.IMPLEMENTATIONS.RESPONSES.CRUD_VALIDATION(),
    // ).invoke(req.body);
    // res.status(useCaseCreateUser.httpStatusCode).json({ data: useCaseCreateUser.data });
    res.json({
      message: 'This will be the endpoint handling the user authentication',
    });
  } catch (error) {
    HELPER.APP_RESPONSE_LOG.EXCEPTION(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `An unhanlded error has occurred when creating the user. Details: ${error}`,
    );

    res.status(SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      data: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        message: `An unhanlded error has occurred when creating the user. Details: ${error}`,
      },
    });
  }
}

export default authController;
