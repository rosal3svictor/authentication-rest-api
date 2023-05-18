import { AuthenticateUseCase } from './authenticate';
import { CreateUseCase } from './create';

export const APPLICATION = {
  USE_CASE: {
    AUTH: AuthenticateUseCase,
    CREATE: CreateUseCase,
  },
};
