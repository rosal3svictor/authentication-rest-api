import { type DataSourceResponseOutput, type ApplicationFailedResponseOutput } from '@domain';
import {
  USERS,
  type CrudValidationImplementation,
  type User,
  type CrudImplementation,
  type CrudResponsesImplementation,
  type CrudValidationResponsesImplementation,
} from '@application/users';
import { ADAPTER } from '@application/adapters';

export class CreateUseCase {
  private readonly _crudImplementation: CrudImplementation;
  private readonly _crudValidationImplementation: CrudValidationImplementation;
  private readonly _crudResponsesImplementation: CrudResponsesImplementation;
  private readonly _crudValidationResponsesImplementation: CrudValidationResponsesImplementation;

  constructor(
    crudImplementation: CrudImplementation,
    crudValidationImplementation: CrudValidationImplementation,
    crudResponsesImplementation: CrudResponsesImplementation,
    crudValidationResponsesImplementation: CrudValidationResponsesImplementation,
  ) {
    this._crudImplementation = crudImplementation;
    this._crudValidationImplementation = crudValidationImplementation;
    this._crudResponsesImplementation = crudResponsesImplementation;
    this._crudValidationResponsesImplementation = crudValidationResponsesImplementation;
  }

  async invoke(
    user: User,
  ): Promise<DataSourceResponseOutput<User> | ApplicationFailedResponseOutput> {
    const INCOMING_USER_DATA_IS_VALID = new USERS.DOMAIN.BUSINESS_LOGIC.CEATE_DATA_IS_VALID(
      user,
      this._crudValidationImplementation,
      this._crudValidationResponsesImplementation,
    );

    if (INCOMING_USER_DATA_IS_VALID.invoke()) {
      const recordPreExists = await new USERS.DOMAIN.BUSINESS_LOGIC.RECORD_PRE_EXSISTS(
        this._crudImplementation,
      ).invoke(user.email);

      if (recordPreExists.passed) {
        try {
          await this._crudImplementation.save(user);
        } catch (error) {
          return new ADAPTER.UNHANDLED_ERROR('CreateUserUseCase', error as string).invoke();
        }

        return this._crudResponsesImplementation.creationSucceeded(ADAPTER.REFINE_USER(user));
      }

      return this._crudResponsesImplementation.creationFailed();
    }

    return INCOMING_USER_DATA_IS_VALID.failed();
  }
}
