import type { AuthValidationImplementation, User } from '@application/users';

export class AuthDataIsValid {
  private readonly _user: User;
  private readonly _authValidationImplementation: AuthValidationImplementation;

  constructor(authValidationImplementation: AuthValidationImplementation, user: User) {
    this._authValidationImplementation = authValidationImplementation;
    this._user = user;
  }

  invoke(): boolean {
    return (
      this._authValidationImplementation.isValidEmail(this._user.email) &&
      this._authValidationImplementation.isValidPassword(this._user.password)
    );
  }
}
