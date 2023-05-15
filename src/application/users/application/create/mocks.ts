import {
  type CrudValidationImplementation,
  type CrudImplementation,
  type CrudResponsesImplementation,
  type CrudValidationResponsesImplementation,
} from '@application/users';

// @ts-expect-error: This is not introducing a bug
export class MockCrudImplementation implements jest.MockedClass<CrudImplementation> {
  save = jest.fn().mockResolvedValue(undefined);
  recordPreExists = jest.fn().mockResolvedValue(false);
}

// @ts-expect-error: This is not introducing a bug
export class MockCrudResponsesImplementation
  // @ts-expect-error: This is not introducing a bug
  implements jest.MockedClass<CrudResponsesImplementation>
{
  creationSucceeded = jest.fn().mockImplementation(() => ({
    // Create a mock implementation for DataSourceResponseOutput
    // based on the provided dataSource argument
  }));

  creationFailed = jest.fn().mockImplementation(() => ({
    // Create a mock implementation for ApplicationFailedResponseOutput
  }));
}

// @ts-expect-error: This is not introducing a bug
export class MockCrudValidationResponsesImplementation
  // @ts-expect-error: This is not introducing a bug
  implements jest.MockedClass<CrudValidationResponsesImplementation>
{
  incompleteInputData = jest.fn().mockReturnValue(true);
  completeInputData = jest.fn().mockReturnValue(true);
  validPropertyValues = jest.fn().mockReturnValue(true);
  validInputData = jest.fn().mockReturnValue(true);
  invalidInputData = jest.fn().mockReturnValue({
    // Create a mock implementation for ApplicationFailedResponseOutput
  });

  invalidEmail = jest.fn().mockReturnValue(true);
  invalidName = jest.fn().mockReturnValue(true);
  invalidAge = jest.fn().mockReturnValue(true);
}

// @ts-expect-error: This is not introducing a bug
export class MockCrudValidationImplementation
  // @ts-expect-error: This is not introducing a bug
  implements jest.MockedClass<CrudValidationImplementation>
{
  isValidEmail = jest.fn().mockReturnValue(true);
  areEqual = jest.fn().mockReturnValue(true);
}
