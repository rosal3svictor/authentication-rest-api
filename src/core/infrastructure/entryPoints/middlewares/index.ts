import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { resourceNotFound } from './resourceNorFound';
import { internalServerError } from './internalServerError';

export const MIDDLEWARES = {
  CORS: cors({
    origin: [`http://localhost:${process.env.SERVER_PORT ?? 3000}`],
  }),
  MORGAN: morgan('dev'),
  HELMET: helmet(),
  RESOURCE_NOT_FOUND: resourceNotFound,
  INTERNAL_SERVER_ERROR: internalServerError,
};
