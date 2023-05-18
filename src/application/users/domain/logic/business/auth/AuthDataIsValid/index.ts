import type {
  AuthValidationImplementation,
  AuthValidationResponsesImplementation,
  User,
} from '@application/users';
import type { ApplicationFailedResponseOutput } from '@domain';

export class AuthDataIsValid {
  private readonly _user: User;
  private readonly _authValidationImplementation: AuthValidationImplementation;
  private readonly _authValidationResponsesImplementation: AuthValidationResponsesImplementation;

  constructor(
    user: User,
    authValidationImplementation: AuthValidationImplementation,
    authValidationResponsesImplementation: AuthValidationResponsesImplementation,
  ) {
    this._user = user;
    this._authValidationImplementation = authValidationImplementation;
    this._authValidationResponsesImplementation = authValidationResponsesImplementation;
  }

  invoke(): ApplicationFailedResponseOutput {
    if (this._authValidationImplementation.isValidEmail(this._user.email)) {
      return this._authValidationResponsesImplementation.invalidEmail(this._user.email);
    }

    return this._authValidationResponsesImplementation.invalidPassword(this._user.password);
  }
}
