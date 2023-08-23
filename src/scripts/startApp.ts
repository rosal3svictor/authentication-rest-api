import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

import { Utils } from '../core/infrastructure'

const envFile = path.join(__dirname, '../../') + '.env'

if (fs.existsSync(envFile)) {
  Utils.AppResponseLog.info('Starting the app')
  execSync(
    'ts-node-dev -r tsconfig-paths/register ./src/scripts/startApiRestServices.ts',
    {
      stdio: 'inherit'
    }
  )
}

Utils.AppResponseLog.exception('Please, create your .env file, it is required to continue\n')
Utils.AppResponseLog.info('App was stopped\n')
