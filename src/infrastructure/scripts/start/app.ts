import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

import { HELPER } from '../../helpers';

const envFile = path.join(__dirname, '../../../../') + '.env';

if (fs.existsSync(envFile)) {
  HELPER.APP_RESPONSE_LOG.INFO('Starting the app');
  execSync(
    // eslint-disable-next-line max-len
    'ts-node-dev -r tsconfig-paths/register ./src/infrastructure/scripts/start/api-rest-services.ts',
    {
      stdio: 'inherit',
    },
  );
}

HELPER.APP_RESPONSE_LOG.EXCEPTION('Please, create your .env file, it is required to continue\n');
HELPER.APP_RESPONSE_LOG.INFO('App was stopped\n');
