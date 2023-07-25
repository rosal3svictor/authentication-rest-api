import { CoreEntityEnum } from '@core/domain';

import type { Request, Response, NextFunction } from 'express';

/**
 * Handles requests that do not match any routes by setting the appropriate
 * status code and calling the next middleware function with an error.
 *
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 * @param next - The next middleware function.
 */
export default function resourceNotFound(req: Request, res: Response, next: NextFunction): void {
  res.status(CoreEntityEnum.CLIENT_ERROR_HTTP_STATUS_CODE.NOT_FOUND).json({
    message: `The requested endpoint '${req.originalUrl}' does not exists`,
  });

  next();
}
