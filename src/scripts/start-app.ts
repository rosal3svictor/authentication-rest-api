import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

import { successOutput, errorOutput } from '../utils';

const envFile = `${path.join(__dirname, '../../')}.env`;

if (fs.existsSync(envFile)) {
  console.log(`${successOutput('Starting the app')}`);
  execSync('ts-node-dev -r tsconfig-paths/register ./src/index.ts', {
    stdio: 'inherit',
  });
}

console.log(
  `${errorOutput('Please, create your .env file, it is required to continue')}`,
);
