import { type CoreEntityResponse } from '@core/domain';
import { ADAPTERS } from '@core/application/adapters';
import { ADAPTERS as USER_ADAPTERS } from '@entities/users/application/adapters';
import { USER_ENTITY, type UserEntityImplLogic, type User } from 'entities/users';

export class Create {
  private readonly _crudImpl: UserEntityImplLogic.Crud;
  private readonly _crudValidationImpl: UserEntityImplLogic.CrudValidation;
  private readonly _crudResponsesImpl: UserEntityImplLogic.CrudResponses;
  private readonly _crudValidationResponsesImpl: UserEntityImplLogic.CrudValidationResponses;

  constructor(
    crudImpl: UserEntityImplLogic.Crud,
    crudValidationImpl: UserEntityImplLogic.CrudValidation,
    crudResponsesImpl: UserEntityImplLogic.CrudResponses,
    crudValidationResponsesImpl: UserEntityImplLogic.CrudValidationResponses,
  ) {
    this._crudImpl = crudImpl;
    this._crudValidationImpl = crudValidationImpl;
    this._crudResponsesImpl = crudResponsesImpl;
    this._crudValidationResponsesImpl = crudValidationResponsesImpl;
  }

  async invoke(
    user: User,
  ): Promise<
    CoreEntityResponse.DataSourceOutput<User> | CoreEntityResponse.ApplicationFailedOutput
  > {
    const INCOMING_USER_DATA_IS_VALID = new USER_ENTITY.BUSINESS_LOGIC.CreateDataIsValid(
      user,
      this._crudValidationImpl,
      this._crudValidationResponsesImpl,
    );

    if (INCOMING_USER_DATA_IS_VALID.invoke()) {
      const recordPreExists = await new USER_ENTITY.BUSINESS_LOGIC.RecordPreExists(
        this._crudImpl,
      ).invoke(user.email);

      if (recordPreExists.passed) {
        try {
          await this._crudImpl.save(user);
        } catch (error) {
          return new ADAPTERS.UnhandledErrorResponse('CreateUserUseCase', error as string).invoke();
        }

        return this._crudResponsesImpl.creationSucceeded(USER_ADAPTERS.RefineUserEntity(user));
      }

      return this._crudResponsesImpl.creationFailed();
    }

    return INCOMING_USER_DATA_IS_VALID.failed();
  }
}
