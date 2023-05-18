import { HELPER } from '@infrastructure/helpers';

import type { GeneralImplementation } from '@application/users';

export class UserValidation implements GeneralImplementation {
  isValidEmail(email: string): boolean {
    return HELPER.IS_VALID_EMAIL(email);
  }

  areEqual(valueOne: string[], valueTwo: string[]): boolean {
    return HELPER.IS_EQUAL(valueOne, valueTwo);
  }
}
