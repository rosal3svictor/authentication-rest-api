/* eslint-disable max-len */
import type { Request, Response, NextFunction } from 'express';

/**
 * Handles errors by setting the appropriate status code and returning a JSON
 * response with error details.
 *
 * @param err - The error object that was thrown.
 * @param _req - The HTTP request object.
 * @param  res - The HTTP response object.
 * @param _next - The next middleware function.
 *
 * @example
 * ```
 * app.use(errorHandler);
 * ```
 *
 * @see {@link https://www.codeconcisely.com/posts/how-to-handle-errors-in-express-with-typescript/#creating-a-custom-error-handling-middleware | Creating a custom error handling middleware}
 */
export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
): void {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });

  next(err);
}
