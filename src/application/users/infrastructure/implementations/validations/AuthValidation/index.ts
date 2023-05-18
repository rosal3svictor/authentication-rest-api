import { HELPER } from '@infrastructure/helpers';

import type { AuthValidationImplementation } from '@application/users';

export class AuthValidation implements AuthValidationImplementation {
  isValidEmail(email: string): boolean {
    return HELPER.IS_VALID_EMAIL(email);
  }

  isValidPassword(password: string): boolean {
    if (password === '' || password === null) return false;

    return true;
  }
}
