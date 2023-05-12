import type { Request, Response, NextFunction } from 'express';

/**
 * Handles requests that do not match any routes by setting the appropriate
 * status code and calling the next middleware function with an error.
 *
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 * @param next - The next middleware function.
 *
 * @example
 * ```
 * app.use(notFound);
 * ```
 */
export default function notFound(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);

  next(error);
}
