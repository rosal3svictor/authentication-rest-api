import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { CORS_ORIGIN_WHITELIST } from '@constants';

import notFound from './notFound';
import { errorHandler } from './errorHandler';

export default {
  CORS: cors({
    origin: CORS_ORIGIN_WHITELIST,
  }),
  MORGAN: morgan('dev'),
  HELMET: helmet(),
  NOT_FOUND: notFound,
  ERROR_HANDLER: errorHandler,
};
