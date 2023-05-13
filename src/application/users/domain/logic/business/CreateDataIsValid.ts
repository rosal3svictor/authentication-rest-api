import type {
  User,
  CrudValidationImplementation,
  CrudValidationResponsesImplementation,
} from '@application/users';
import type { ApplicationFailedResponse } from 'domain/Adapters';

export class CreateDataIsValid {
  private readonly _user: User;
  private readonly _crudValidationImplementation: CrudValidationImplementation;
  private readonly _crudValidationResponsesImplementation: CrudValidationResponsesImplementation;

  constructor(
    user: User,
    crudValidationImplementation: CrudValidationImplementation,
    crudValidationResponsesImplementation: CrudValidationResponsesImplementation,
  ) {
    this._user = user;
    this._crudValidationImplementation = crudValidationImplementation;
    this._crudValidationResponsesImplementation = crudValidationResponsesImplementation;
  }

  propertiesWereProvided(): boolean {
    const sampleUser: User = {
      email: '',
      password: '',
      name: '',
      age: 0,
    };

    if (
      !this._crudValidationImplementation.areEqual(Object.keys(this._user), Object.keys(sampleUser))
    ) {
      return this._crudValidationResponsesImplementation.incompleteInputData();
    }

    return this._crudValidationResponsesImplementation.completeInputData();
  }

  propertyValuesAreWellDefined(): boolean {
    if (!this._crudValidationImplementation.isValidEmail(this._user.email)) {
      return this._crudValidationResponsesImplementation.invalidEmail(this._user.email);
    } else if (!(typeof this._user.name === 'string')) {
      return this._crudValidationResponsesImplementation.invalidName(this._user.name);
    } else if (!(typeof this._user.age === 'number')) {
      return this._crudValidationResponsesImplementation.invalidAge(this._user.age);
    }

    return this._crudValidationResponsesImplementation.validPropertyValues();
  }

  invoke(): boolean {
    const propertiesValidationPassed = this.propertiesWereProvided();
    const propertyValuesValidationPassed = this.propertyValuesAreWellDefined();

    if (!propertiesValidationPassed || !propertyValuesValidationPassed) {
      return false;
    }

    return this._crudValidationResponsesImplementation.validInputData();
  }

  failed(): ApplicationFailedResponse {
    return this._crudValidationResponsesImplementation.invalidInputData();
  }
}
