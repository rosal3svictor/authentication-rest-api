import { HELPERS } from '@core/infrastructure/helpers';

import type { UserEntityImplLogic } from 'entities/users';

export class UserValidation implements UserEntityImplLogic.CrudValidation {
  isValidEmail(email: string): boolean {
    return HELPERS.isValidEmail(email);
  }

  areEqual(valueOne: string[], valueTwo: string[]): boolean {
    return HELPERS.isEqual(valueOne, valueTwo);
  }
}
