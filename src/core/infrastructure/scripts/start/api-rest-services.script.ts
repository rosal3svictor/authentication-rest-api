/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as dotenv from 'dotenv';
import { APIRest } from '@core/infrastructure/entryPoints';
import { HELPERS } from '@core/infrastructure/helpers';

try {
  dotenv.config();

  void new APIRest().start();
} catch (err) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  HELPERS.AppResponseLog.exception(
    `An unhandled error has occured whren starting APIRestServices. Details: ${err}`,
  );
}
