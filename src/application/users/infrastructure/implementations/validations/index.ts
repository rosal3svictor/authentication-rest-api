import { HELPER } from '@infrastructure/helpers';

import type { CrudValidationImplementation } from '@application/users';

export class UserValidation implements CrudValidationImplementation {
  isValidEmail(email: string): boolean {
    return HELPER.IS_VALID_EMAIL(email);
  }

  areEqual(valueOne: string[], valueTwo: string[]): boolean {
    return HELPER.IS_EQUAL(valueOne, valueTwo);
  }
}
