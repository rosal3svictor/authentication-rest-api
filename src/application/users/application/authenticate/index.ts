import type { AuthValidationImplementation } from '@application/users';

export class AuthenticateUseCase {
  private readonly _authValidationImplementation: AuthValidationImplementation;

  constructor(authValidationImplemenation: AuthValidationImplementation) {
    this._authValidationImplementation = authValidationImplemenation;
  }

  async invoke(): Promise<boolean> {
    return true;
  }
}
