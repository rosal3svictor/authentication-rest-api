import type {
  User,
  AuthValidationImplementation,
  AuthValidationResponsesImplementation,
} from '@application/users';

export class AuthenticateUseCase {
  private readonly _authValidationImplementation: AuthValidationImplementation;
  private readonly _authValidationResponsesImplementation: AuthValidationResponsesImplementation;

  constructor(
    authValidationImplemenation: AuthValidationImplementation,
    authValidationResponsesImplementation: AuthValidationResponsesImplementation,
  ) {
    this._authValidationImplementation = authValidationImplemenation;
    this._authValidationResponsesImplementation = authValidationResponsesImplementation;
  }

  async invoke(_data: Pick<User, 'email' | 'password'>): Promise<boolean> {
    return true;
  }
}
