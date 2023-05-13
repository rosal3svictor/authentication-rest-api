/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as dotenv from 'dotenv';
import { APIRestServices } from '@infrastructure/entryPoints';
import { HELPER } from '@infrastructure/helpers';

try {
  dotenv.config();

  void new APIRestServices().start();
} catch (err) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  HELPER.APP_RESPONSE_LOG.EXCEPTION(
    `An unhandled error has occured whren starting APIRestServices. Details: ${err}`,
  );
}
