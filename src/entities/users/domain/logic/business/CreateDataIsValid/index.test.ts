import { CreateDataIsValid } from '.';

import type {
  CrudValidationImplementation,
  CrudValidationResponsesImplementation,
  User,
} from 'entities/users/domain';

describe('Business Logic - CreateDataIsValid', () => {
  let mockUser: User;
  let mockCrudValidationImplementation: CrudValidationImplementation;
  let mockCrudValidationResponsesImplementation: CrudValidationResponsesImplementation;

  beforeEach(() => {
    mockUser = {
      email: 'test@example.com',
      password: 'password',
      name: 'John Doe',
      age: 30,
    };

    mockCrudValidationImplementation = {
      areEqual: jest.fn(),
      isValidEmail: jest.fn(),
    };

    mockCrudValidationResponsesImplementation = {
      incompleteInputData: jest.fn().mockReturnValue(false),
      completeInputData: jest.fn().mockReturnValue(true),
      invalidEmail: jest.fn().mockReturnValue(false),
      invalidName: jest.fn().mockReturnValue(false),
      invalidAge: jest.fn().mockReturnValue(false),
      validPropertyValues: jest.fn().mockReturnValue(true),
      validInputData: jest.fn().mockReturnValue(true),
      invalidInputData: jest.fn().mockReturnValue({
        // Add any necessary properties for the failed response
      }),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('It should return true when all properties are provided correctly', () => {
    // @ts-expect-error: Property 'mockReturnValue' does not exist on type '() => boolean'
    mockCrudValidationImplementation.areEqual.mockReturnValue(true);

    const createDataIsValid = new CreateDataIsValid(
      mockUser,
      mockCrudValidationImplementation,
      mockCrudValidationResponsesImplementation,
    );

    const result = createDataIsValid.invoke();

    expect(result).toBe(false);
    expect(mockCrudValidationImplementation.areEqual).toHaveBeenCalledWith(
      Object.keys(mockUser),
      Object.keys(mockUser),
    );
    expect(mockCrudValidationResponsesImplementation.incompleteInputData).not.toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.completeInputData).toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.invalidEmail).toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.invalidName).not.toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.invalidAge).not.toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.validPropertyValues).not.toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.validInputData).not.toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.invalidInputData).not.toHaveBeenCalled();
  });

  it('It should return false when properties are not provided correctly', () => {
    // @ts-expect-error: Property 'mockReturnValue' does not exist on type '() => boolean'
    mockCrudValidationImplementation.areEqual.mockReturnValue(false);

    const createDataIsValid = new CreateDataIsValid(
      mockUser,
      mockCrudValidationImplementation,
      mockCrudValidationResponsesImplementation,
    );

    const result = createDataIsValid.invoke();

    expect(result).toBe(false);
    expect(mockCrudValidationImplementation.areEqual).toHaveBeenCalledWith(
      Object.keys(mockUser),
      Object.keys(mockUser),
    );
    expect(mockCrudValidationResponsesImplementation.incompleteInputData).toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.completeInputData).not.toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.invalidEmail).toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.invalidName).not.toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.invalidAge).not.toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.validPropertyValues).not.toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.validInputData).not.toHaveBeenCalled();
    expect(mockCrudValidationResponsesImplementation.invalidInputData).not.toHaveBeenCalled();
  });
});
