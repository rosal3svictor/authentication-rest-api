import * as dotenv from 'dotenv'
import { APIRest } from 'core/infrastructure/entry-points'
import { Utils } from 'core/infrastructure'

try {
  dotenv.config()

  void new APIRest().start()
} catch (err) {
  Utils.AppResponseLog.exception(
    `An unhandled error has occured whren starting APIRestServices. Details: ${err}`
  )
}
